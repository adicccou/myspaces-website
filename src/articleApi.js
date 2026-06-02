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

export function normalizeDashboardArticle(article) {
  const content = article.content || '';
  const publishedAt = article.published_at || article.updated_at || '';

  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt || plainText(content).slice(0, 180),
    content,
    category: article.category || 'Guide',
    readTime: article.readTime || estimateReadTime(content),
    date: publishedAt ? publishedAt.slice(0, 10) : '',
    metaDescription: article.meta_description || article.excerpt || plainText(content).slice(0, 180),
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
