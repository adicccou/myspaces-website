const API_BASE = 'https://articles-dashboard.adilet-melisov.workers.dev/api/public';
const SITE_SLUG = 'myspaces';

function plainText(value = '') {
  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function estimateReadTime(content = '') {
  const words = plainText(content).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function formatPublishedDate(publishedAt) {
  if (!publishedAt) return '';

  const value = new Date(publishedAt);
  if (Number.isNaN(value.getTime())) return '';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(value);
}

function formatPublishedTime(publishedAt) {
  if (!publishedAt) return '';

  const value = new Date(publishedAt);
  if (Number.isNaN(value.getTime())) return '';

  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(value);
}

export function normalizeDashboardArticle(article) {
  const content = article.content || '';
  const publishedAt = article.published_at || article.updated_at || '';
  const coverImage = article.cover_image || article.og_image || '';

  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt || plainText(content).slice(0, 180),
    content,
    coverImage,
    category: article.category || 'Guide',
    readTime: article.readTime || estimateReadTime(content),
    date: publishedAt ? publishedAt.slice(0, 10) : '',
    publishedAt,
    publishedDateLabel: formatPublishedDate(publishedAt),
    publishedTimeLabel: formatPublishedTime(publishedAt),
    metaDescription: article.meta_description || article.excerpt || plainText(content).slice(0, 180),
    ogImage: article.og_image || coverImage,
  };
}

async function fetchFromDashboard(path) {
  const response = await fetch(`${API_BASE}${path}`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(response.status === 404 ? 'Article not found' : 'Failed to fetch articles');
  }

  const payload = await response.json();
  return payload.data;
}

export async function fetchArticles() {
  const data = await fetchFromDashboard(`/articles?site=${SITE_SLUG}`);
  return (Array.isArray(data) ? data : []).map(normalizeDashboardArticle);
}

export async function fetchArticleBySlug(slug) {
  const article = await fetchFromDashboard(`/articles/${encodeURIComponent(slug)}?site=${SITE_SLUG}`);
  if (!article) throw new Error('Article not found');
  return normalizeDashboardArticle(article);
}
