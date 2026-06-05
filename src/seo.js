import { faqs, routes, site } from './content.js';

const baseMeta = {
  title: 'MySpaces - Browser Workspace Manager for Too Many Tabs',
  description:
    'MySpaces is a browser workspace manager for people who keep too many tabs open. Save tab setups, separate workflows, and close tabs without losing your place.',
  keywords:
    'browser workspace manager, tab manager, Chrome tab manager, browser spaces, tab groups, pinned tabs, tab organization',
};

const socialHandle = '@myspacesapp';

export function normalizePath(pathname = '/') {
  const clean = pathname.split('#')[0].split('?')[0] || '/';
  if (clean === '/') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export function getSeo(pathname = '/') {
  const path = normalizePath(pathname);

  if (path.startsWith('/articles/') && path !== '/articles/') {
    return {
      title: 'MySpaces Article - Browser Tab Management Guide',
      description: 'Read a MySpaces browser productivity article from the articles dashboard.',
      path,
      type: 'article',
    };
  }

  const pages = {
    '/': {
      ...baseMeta,
      path: '/',
      jsonLd: [softwareJsonLd(), websiteJsonLd(), faqJsonLd()],
    },
    '/pricing/': {
      title: 'MySpaces Pricing - Free and Lifetime Plans',
      description:
        'Compare the MySpaces free plan and $12.99 Lifetime license for unlimited spaces and sync across browsers and computers.',
      keywords: 'MySpaces pricing, free tab manager, lifetime tab manager, browser workspace manager license',
      path,
      jsonLd: [productJsonLd(), breadcrumbJsonLd(path)],
    },
    '/articles/': {
      title: 'MySpaces Articles - Browser Tab Management Guides',
      description:
        'Read practical browser productivity articles about tab management, spaces, Chrome tab groups, and reducing tab overload.',
      keywords: 'browser productivity, tab management guides, Chrome tab groups, tab overload, browser organization',
      path,
      jsonLd: [collectionJsonLd(), breadcrumbJsonLd(path)],
    },
    '/about-us/': {
      title: 'About MySpaces - Browser Workspace Manager',
      description:
        'Learn why MySpaces exists for people who keep too many tabs open and need reusable browser spaces for focused work.',
      keywords: 'about MySpaces, browser workspace manager, tab organization product',
      path,
      jsonLd: [organizationJsonLd(), breadcrumbJsonLd(path)],
    },
    '/contact-us/': {
      title: 'Contact MySpaces Support',
      description:
        'Contact MySpaces for product support, billing questions, license help, privacy requests, and partnership inquiries.',
      keywords: 'MySpaces support, contact MySpaces, tab manager help, browser extension support',
      path,
      jsonLd: [organizationJsonLd(), breadcrumbJsonLd(path)],
    },
    '/help-centre/': {
      title: 'MySpaces Help Centre - Setup, Plans, Sync, and Support',
      description:
        'Find answers about installing MySpaces, creating spaces, using tab groups, pinned tabs, sync, pricing, and privacy.',
      keywords: 'MySpaces help, tab manager setup, browser sync help, Chrome extension support',
      path,
      jsonLd: [faqJsonLd(), breadcrumbJsonLd(path)],
    },
    '/privacy-policy/': {
      title: 'Privacy Policy - MySpaces',
      description:
        'Read the MySpaces privacy policy covering local tab data, optional sync, account data, authentication, and data deletion.',
      keywords: 'MySpaces privacy policy, browser extension privacy, tab manager privacy',
      path,
      jsonLd: breadcrumbJsonLd(path),
    },
    '/terms-of-use/': {
      title: 'Terms of Use - MySpaces',
      description:
        'Read the MySpaces terms of use for the Chrome extension, license grant, prohibited use, sync accounts, privacy, warranties, and liability.',
      keywords: 'MySpaces terms, browser extension terms, tab manager license terms',
      path,
      jsonLd: breadcrumbJsonLd(path),
    },
    '/whats-new/': {
      title: 'What Is New - MySpaces',
      description:
        'Follow MySpaces product updates, extension release notes, bug fixes, and browser workspace improvements.',
      keywords: 'MySpaces product updates, tab manager release notes, browser workspace updates',
      path,
      jsonLd: [collectionJsonLd('MySpaces Updates', path), breadcrumbJsonLd(path)],
    },
  };

  return pages[path] || {
    title: 'Page Not Found - MySpaces',
    description: 'The requested MySpaces page could not be found.',
    path,
    noindex: true,
  };
}

export function articleSeo(article, slug) {
  const path = `/articles/${slug || article?.slug || ''}/`;
  const title = article?.title ? `${article.title} - MySpaces Articles` : 'MySpaces Article - Browser Tab Management Guide';
  const description = article?.metaDescription || article?.excerpt || 'Read a MySpaces browser productivity article.';
  const image = article?.ogImage || article?.coverImage || `${site.origin}${site.ogImage}`;

  return {
    title,
    description,
    keywords: [article?.category, 'browser productivity', 'tab management', 'MySpaces'].filter(Boolean).join(', '),
    path,
    type: 'article',
    image,
    imageAlt: article?.title || 'MySpaces article cover image',
    publishedTime: article?.publishedAt || article?.date,
    modifiedTime: article?.publishedAt || article?.date,
    jsonLd: [articleJsonLd(article, path), breadcrumbJsonLd(path, article?.title)].filter(Boolean),
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
  const image = seo.image || `${site.origin}${site.ogImage}`;
  const imageAlt = seo.imageAlt || 'MySpaces browser workspace manager interface preview';
  const jsonLd = Array.isArray(seo.jsonLd) ? seo.jsonLd : seo.jsonLd ? [seo.jsonLd] : [];

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    seo.keywords ? `<meta name="keywords" content="${escapeHtml(seo.keywords)}" />` : '',
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
    `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
    seo.publishedTime ? `<meta property="article:published_time" content="${escapeHtml(seo.publishedTime)}" />` : '',
    seo.modifiedTime ? `<meta property="article:modified_time" content="${escapeHtml(seo.modifiedTime)}" />` : '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:site" content="${escapeHtml(socialHandle)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`,
    ...jsonLd.map(
      (entry) =>
        `<script type="application/ld+json" data-seo-jsonld="true">${JSON.stringify(entry).replaceAll('<', '\\u003c')}</script>`,
    ),
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function applySeoToDocument(seo) {
  if (typeof document === 'undefined') return;

  const url = canonicalUrl(seo.path);
  const image = seo.image || `${site.origin}${site.ogImage}`;
  const imageAlt = seo.imageAlt || 'MySpaces browser workspace manager interface preview';
  const jsonLd = Array.isArray(seo.jsonLd) ? seo.jsonLd : seo.jsonLd ? [seo.jsonLd] : [];

  document.title = seo.title;
  setMeta('name', 'description', seo.description);
  setMeta('name', 'keywords', seo.keywords || baseMeta.keywords);
  setMeta('name', 'robots', seo.noindex ? 'noindex,follow' : 'index,follow');
  setCanonical(url);
  setMeta('name', 'theme-color', '#0b303b');
  setMeta('property', 'og:site_name', site.name);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:type', seo.type === 'article' ? 'article' : 'website');
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:image:alt', imageAlt);
  setOptionalMeta('property', 'article:published_time', seo.publishedTime);
  setOptionalMeta('property', 'article:modified_time', seo.modifiedTime);
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:site', socialHandle);
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', image);
  setMeta('name', 'twitter:image:alt', imageAlt);
  document
    .querySelectorAll('script[type="application/ld+json"][data-seo-jsonld="true"]')
    .forEach((node) => node.remove());
  jsonLd.forEach((entry) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.textContent = JSON.stringify(entry).replaceAll('<', '\\u003c');
    document.head.append(script);
  });
}

export function routePriority(path) {
  if (path === '/') return '1.0';
  if (path === '/pricing/') return '0.9';
  if (path === '/articles/' || path.startsWith('/articles/')) return '0.75';
  return '0.65';
}

export function sitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (path) => `  <url>
    <loc>${canonicalUrl(path)}</loc>
    <lastmod>${site.updatedAt}</lastmod>
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
    sameAs: socialLinks(),
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.supportEmail,
      contactType: 'customer support',
      availableLanguage: ['en'],
    },
  };
}

function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.origin,
    description: baseMeta.description,
    publisher: { '@type': 'Organization', name: site.name },
  };
}

function softwareJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.name,
    description: baseMeta.description,
    url: site.origin,
    image: `${site.origin}${site.ogImage}`,
    screenshot: `${site.origin}${site.ogImage}`,
    downloadUrl: site.installUrl,
    applicationCategory: 'BrowserApplication',
    applicationSubCategory: 'Browser tab manager',
    operatingSystem: 'Chrome, Edge, Opera, Brave, Firefox, Chromium',
    browserRequirements: 'Chrome, Edge, Opera, Brave, Firefox, or a compatible browser',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD', url: site.installUrl },
      { '@type': 'Offer', name: 'Lifetime', price: '12.99', priceCurrency: 'USD', url: site.lifetimeUrl },
    ],
  };
}

function productJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: site.name,
    description: baseMeta.description,
    url: site.origin,
    image: `${site.origin}${site.ogImage}`,
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

function collectionJsonLd(name = 'MySpaces Articles', path = '/articles/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: canonicalUrl(path),
  };
}

function articleJsonLd(article, path) {
  if (!article) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    datePublished: article.publishedAt || article.date || site.updatedAt,
    dateModified: article.publishedAt || article.date || site.updatedAt,
    mainEntityOfPage: canonicalUrl(path),
    image: article.ogImage || article.coverImage || `${site.origin}${site.ogImage}`,
    author: { '@type': 'Organization', name: site.name },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${site.origin}${site.logo}` },
    },
  };
}

function breadcrumbJsonLd(path, currentName) {
  const nameFromPath =
    currentName ||
    normalizePath(path)
      .split('/')
      .filter(Boolean)
      .at(-1)
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') ||
    site.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.origin },
      { '@type': 'ListItem', position: 2, name: nameFromPath, item: canonicalUrl(path) },
    ],
  };
}

function socialLinks() {
  return [
    'https://www.instagram.com/myspacesapp/',
    'https://www.threads.net/@myspacesapp',
    'https://x.com/myspacesapp',
    'https://www.reddit.com/r/myspaces/',
  ];
}

function setMeta(attribute, key, content) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.append(meta);
  }
  meta.setAttribute('content', content);
}

function setOptionalMeta(attribute, key, content) {
  const meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!content) {
    meta?.remove();
    return;
  }
  setMeta(attribute, key, content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.append(link);
  }
  link.href = url;
}
