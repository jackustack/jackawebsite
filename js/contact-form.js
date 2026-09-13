const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit');
const formStatus = document.getElementById('form-status');

if (!contactForm || !submitButton || !formStatus) {
  throw new Error('Contact form elements not found.');
}

const defaultButtonText = submitButton.textContent.trim();

let isSubmitting = false;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  isSubmitting = true;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending…';

  formStatus.textContent = '';
  formStatus.classList.remove(
    'form-status-success',
    'form-status-error'
  );

  try {
    const formData = new FormData(contactForm);
    const requestBody = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      requestBody.append(key, value);
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: requestBody.toString()
    });

    let result = {};

    const contentType =
      response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      result = await response.json();
    }

    if (!response.ok) {
      throw new Error(
        result.error ||
        'Your message could not be sent. Please try again.'
      );
    }

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'contact_form_submit'
    });

    /*
      At this point the server has confirmed success.
      Do not allow later UI cleanup problems to turn
      the submission into an apparent failure.
    */

    contactForm.reset();

    formStatus.textContent =
      'Thanks — your message was sent. I’ll review it and get back to you soon.';

    formStatus.classList.add('form-status-success');
    formStatus.focus();

    try {
      if (window.turnstile) {
        window.turnstile.reset();
      }
    } catch (turnstileError) {
      console.warn(
        'Turnstile could not be reset:',
        turnstileError
      );
    }

  } catch (error) {
    console.error(
      'Contact form submission failed:',
      error
    );

    formStatus.textContent =
      error.message ||
      'Your message could not be sent. Please try again.';

    formStatus.classList.add('form-status-error');
    formStatus.focus();

    try {
      if (window.turnstile) {
        window.turnstile.reset();
      }
    } catch (turnstileError) {
      console.warn(
        'Turnstile could not be reset:',
        turnstileError
      );
    }

  } finally {
    isSubmitting = false;
    submitButton.disabled = false;
    submitButton.textContent = defaultButtonText;
  }
});