/*
  Vercel Function: /api/contact

  Required Vercel environment variables:
    TURNSTILE_SECRET_KEY
    SUPABASE_URL
    SUPABASE_SECRET_KEY

  Expected Supabase table:
    public.contact_submissions

  Expected HTML form fields:
    name
    email
    organization
    website
    problem
    company_site              (honeypot)
    cf-turnstile-response     (added automatically by Turnstile)
*/

const MAX_BODY_BYTES = 20000;

function cleanText(value, maxLength) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeWebsite(value) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function getRemoteIp(req) {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return undefined;
}

async function readRawBody(req) {
  return await new Promise((resolve, reject) => {
    let raw = '';
    let tooLarge = false;

    req.on('data', (chunk) => {
      if (tooLarge) {
        return;
      }

      raw += chunk.toString();

      if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
        tooLarge = true;
        reject(new Error('BODY_TOO_LARGE'));
      }
    });

    req.on('end', () => {
      if (!tooLarge) {
        resolve(raw);
      }
    });

    req.on('error', reject);
  });
}

async function parseRequestBody(req) {
  if (
    req.body &&
    typeof req.body === 'object' &&
    !Buffer.isBuffer(req.body)
  ) {
    return req.body;
  }

  let raw = '';

  if (Buffer.isBuffer(req.body)) {
    raw = req.body.toString('utf8');
  } else if (typeof req.body === 'string') {
    raw = req.body;
  } else {
    raw = await readRawBody(req);
  }

  if (!raw) {
    return {};
  }

  const contentType = String(req.headers['content-type'] || '');

  if (contentType.includes('application/json')) {
    return JSON.parse(raw);
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw));
  }

  throw new Error('UNSUPPORTED_CONTENT_TYPE');
}

async function verifyTurnstile(token, remoteIp) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error('TURNSTILE_SECRET_KEY is not configured.');
  }

  const payload = {
    secret,
    response: token
  };

  if (remoteIp) {
    payload.remoteip = remoteIp;
  }

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  );

  if (!response.ok) {
    throw new Error('Turnstile verification service returned an error.');
  }

  return await response.json();
}

async function insertSubmission(submission) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error('Supabase environment variables are not configured.');
  }

  const endpoint =
    supabaseUrl.replace(/\/$/, '') +
    '/rest/v1/contact_submissions';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseSecretKey,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(submission)
  });

  if (!response.ok) {
    const detail = await response.text();

    console.error(
      'Supabase insert failed:',
      response.status,
      detail.slice(0, 500)
    );

    throw new Error('Could not save contact submission.');
  }
}

function redirectSuccess(res) {
  res.setHeader('Location', '/contact.html?sent=1');
  res.status(303).end();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({
      error: 'Method not allowed.'
    });
  }

  const contentLength = Number(req.headers['content-length'] || 0);

  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({
      error: 'Submission is too large.'
    });
  }

  try {
    const body = await parseRequestBody(req);

    const honeypot = cleanText(body.company_site, 250);

    if (honeypot) {
      return redirectSuccess(res);
    }

    const name = cleanText(body.name, 150);
    const email = cleanText(body.email, 254).toLowerCase();
    const organization = cleanText(body.organization, 200);
    const websiteInput = cleanText(body.website, 500);
    const problem = cleanText(body.problem, 3000);
    const turnstileToken = cleanText(
      body['cf-turnstile-response'],
      3000
    );

    if (!name || !email || !problem) {
      return res.status(400).json({
        error: 'Name, email, and business problem are required.'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Please enter a valid email address.'
      });
    }

    if (problem.length < 20) {
      return res.status(400).json({
        error: 'Please provide a little more detail about the business problem.'
      });
    }

    let website = null;

    if (websiteInput) {
      website = normalizeWebsite(websiteInput);

      if (!website) {
        return res.status(400).json({
          error: 'Please enter a valid website URL beginning with http:// or https://.'
        });
      }
    }

    if (!turnstileToken) {
      return res.status(400).json({
        error: 'Turnstile verification is required.'
      });
    }

    const turnstile = await verifyTurnstile(
      turnstileToken,
      getRemoteIp(req)
    );

    if (!turnstile.success) {
      console.warn(
        'Turnstile rejected contact submission:',
        turnstile['error-codes'] || []
      );

      return res.status(403).json({
        error: 'Verification failed. Please refresh the page and try again.'
      });
    }

    if (turnstile.action && turnstile.action !== 'contact') {
      console.warn(
        'Unexpected Turnstile action:',
        turnstile.action
      );

      return res.status(403).json({
        error: 'Verification failed.'
      });
    }

    await insertSubmission({
      name,
      email,
      organization: organization || null,
      website,
      problem,
      status: 'new'
    });

    return redirectSuccess(res);
  } catch (error) {
    if (error.message === 'BODY_TOO_LARGE') {
      return res.status(413).json({
        error: 'Submission is too large.'
      });
    }

    if (error.message === 'UNSUPPORTED_CONTENT_TYPE') {
      return res.status(415).json({
        error: 'Unsupported form submission format.'
      });
    }

    console.error('Contact form error:', error);

    return res.status(500).json({
      error: 'The form could not be submitted. Please try again.'
    });
  }
}