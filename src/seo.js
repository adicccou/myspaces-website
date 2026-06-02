import { articles, faqs, routes, site } from './content.js';

const articleByPath = new Map(articles.map((article) => [`/articles/${article.slug}/`, article]));

const baseMeta = {
  title: 'MySpaces - Browser Workspace Manager for Too Many Tabs',
  description:
    'MySpaces is a browser workspace manager for people who keep too many tabs open. Save tab setups, separate workflows, and close tabs without losing your place.',
};

export function normalizePath(pathname = '/') {
  const clean = pathname.split('#')[0].split('?')[0] || '/';
  if (clean === '/') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export function getSeo(pathname = '/') {
  const path = normalizePath(pathname);
  const article = articleByPath.get(path);

  if (article) {
    return {
      title: `${article.title} - MySpaces Articles`,
      description: article.metaDescription,
      path,
      type: 'article',
      jsonLd: articleJsonLd(article),
    };
  }

  const pages = {
    '/': {
      ...baseMeta,
      path: '/',
      jsonLd: [softwareJsonLd(), websiteJsonLd(), faqJsonLd()],
    },
    '/features/': {
      title: 'MySpaces Features - Browser Workspace Manager',
      description:
        'Explore MySpaces features for saving repeated tab setups, keeping work and personal browsing separate, and closing tabs without losing your place.',
      path,
      jsonLd: softwareJsonLd(),
    },
    '/pricing/': {
      title: 'MySpaces Pricing - Free and Lifetime Plans',
      description:
        'Compare the MySpaces free plan and $12.99 Lifetime license for unlimited spaces and sync across browsers and computers.',
      path,
      jsonLd: productJsonLd(),
    },
    '/articles/': {
      title: 'MySpaces Articles - Browser Tab Management Guides',
      description:
        'Read practical browser productivity articles about tab management, spaces, Chrome tab groups, and reducing tab overload.',
      path,
      jsonLd: collectionJsonLd(),
    },
    '/about-us/': {
      title: 'About MySpaces - Browser Workspace Manager',
      description:
        'Learn why MySpaces exists for people who keep too many tabs open and need reusable browser spaces for focused work.',
      path,
      jsonLd: organizationJsonLd(),
    },
    '/contact-us/': {
      title: 'Contact MySpaces Support',
      description:
        'Contact MySpaces for product support, billing questions, license help, privacy requests, and partnership inquiries.',
      path,
      jsonLd: organizationJsonLd(),
    },
    '/help-centre/': {
      title: 'MySpaces Help Centre - Setup, Plans, Sync, and Support',
      description:
        'Find answers about installing MySpaces, creating spaces, using tab groups, pinned tabs, sync, pricing, and privacy.',
      path,
      jsonLd: faqJsonLd(),
    },
    '/privacy-policy/': {
      title: 'Privacy Policy - MySpaces',
      description:
        'Read the MySpaces privacy policy covering product data, account data, payments, analytics, sync, and user rights.',
      path,
    },
    '/terms-of-use/': {
      title: 'Terms of Use - MySpaces',
      description:
        'Read the MySpaces terms of use for extension access, licenses, acceptable use, payments, and limitations.',
      path,
    },
    '/refund-policy/': {
      title: 'Refund Policy - MySpaces',
      description:
        'Review the MySpaces refund policy for lifetime license purchases, duplicate purchases, and support requests.',
      path,
    },
    '/whats-new/': {
      title: 'What Is New - MySpaces',
      description:
        'Follow MySpaces product updates, website changes, and planned improvements for tab management workflows.',
      path,
      jsonLd: collectionJsonLd(),
    },
  };

  return pages[path] || {
    title: 'Page Not Found - MySpaces',
    description: 'The requested MySpaces page could not be found.',
    path,
    noindex: true,
  };
}

export function canonicalUrl(pathname = '/') {
  const path = normalizePath(pathname);
  return `${site.origin}${path === '/' ? '/' : path}`;
}

export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderSeoHead(seo) {
  const url = canonicalUrl(seo.path);
  const image = `${site.origin}${site.ogImage}`;
  const jsonLd = Array.isArray(seo.jsonLd) ? seo.jsonLd : seo.jsonLd ? [seo.jsonLd] : [];

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    seo.noindex
      ? '<meta name="robots" content="noindex,follow" />'
      : '<meta name="robots" content="index,follow" />',
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    '<meta name="theme-color" content="#0b303b" />',
    `<meta property="og:site_name" content="${escapeHtml(site.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${seo.type === 'article' ? 'article' : 'website'}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ...jsonLd.map(
      (entry) => `<script type="application/ld+json">${JSON.stringify(entry).replaceAll('<', '\\u003c')}</script>`,
    ),
  ].join('\n    ');
}

export function routePriority(path) {
  if (path === '/') return '1.0';
  if (path === '/features/' || path === '/pricing/') return '0.9';
  if (path === '/articles/' || path.startsWith('/articles/')) return '0.75';
  return '0.65';
}

export function sitemapXml() {
  const today = '2026-05-31';
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (path) => `  <url>
    <loc>${canonicalUrl(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path.startsWith('/articles/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${routePriority(path)}</priority>
  </url>`,
    )
    .join('\n')}\n</urlset>\n`;
}

function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.origin,
    logo: `${site.origin}${site.logo}`,
    email: site.supportEmail,
  };
}

function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.origin,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.origin}/articles/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

function softwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome, Edge, Opera, Brave, Chromium',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Lifetime', price: '12.99', priceCurrency: 'USD' },
    ],
  };
}

function productJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: site.name,
    description: baseMeta.description,
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'Offer',
      price: '12.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: site.lifetimeUrl,
    },
  };
}

function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

function collectionJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'MySpaces Articles',
    url: `${site.origin}/articles/`,
    hasPart: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: `${site.origin}/articles/${article.slug}/`,
      datePublished: article.date,
    })),
  };
}

function articleJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: organizationJsonLd(),
    mainEntityOfPage: `${site.origin}/articles/${article.slug}/`,
  };
}
