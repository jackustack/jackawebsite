/*
  Simple client-side search for jackatyler.com.
  Add future HTML pages to SITE_PAGES.
*/

const SITE_PAGES = [
  { url: 'index.html', title: 'Home' },
  { url: 'services.html', title: 'Services' }
];

async function loadPages() {
  const pages = [];

  for (const page of SITE_PAGES) {
    try {
      const response = await fetch(page.url);

      if (!response.ok) {
        continue;
      }

      const html = await response.text();
      const parser = new DOMParser();
      const documentPage = parser.parseFromString(html, 'text/html');

      const main = documentPage.querySelector('main');
      const text = main ? main.innerText : documentPage.body.innerText;

      pages.push({
        url: page.url,
        title: page.title,
        text: text.replace(/\s+/g, ' ').trim()
      });
    } catch (error) {
      console.error('Could not load page:', page.url, error);
    }
  }

  return pages;
}

function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('q') || '').trim();
}

function createSnippet(text, query) {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    return text.slice(0, 220);
  }

  const start = Math.max(0, index - 90);
  const end = Math.min(text.length, index + query.length + 130);

  let snippet = text.slice(start, end);

  if (start > 0) {
    snippet = '…' + snippet;
  }

  if (end < text.length) {
    snippet += '…';
  }

  return snippet;
}

function renderResults(results, query) {
  const resultsContainer = document.getElementById('search-results');
  const status = document.getElementById('search-status');

  if (!resultsContainer || !status) {
    return;
  }

  resultsContainer.textContent = '';

  if (!query) {
    status.textContent = 'Enter a search term.';
    return;
  }

  if (results.length === 0) {
    status.textContent = 'No results found for "' + query + '".';
    return;
  }

  status.textContent =
    results.length +
    (results.length === 1 ? ' result' : ' results') +
    ' for "' +
    query +
    '".';

  for (const result of results) {
    const article = document.createElement('article');

    const heading = document.createElement('h2');
    const link = document.createElement('a');
    link.href = result.url;
    link.textContent = result.title;

    const snippet = document.createElement('p');
    snippet.textContent = createSnippet(result.text, query);

    heading.appendChild(link);
    article.appendChild(heading);
    article.appendChild(snippet);
    resultsContainer.appendChild(article);
  }
}

async function runSearch() {
  const query = getQuery();
  const input = document.getElementById('site-search');

  if (input) {
    input.value = query;
  }

  if (!query) {
    renderResults([], '');
    return;
  }

  const pages = await loadPages();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  const results = pages.filter((page) => {
    const haystack = page.text.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });

  renderResults(results, query);
}

document.addEventListener('DOMContentLoaded', runSearch);