import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');

const vite = await createServer({
  root,
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
});

try {
  const template = await fs.readFile(templatePath, 'utf8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const { routes } = await vite.ssrLoadModule('/src/content.js');
  const { getSeo, renderSeoHead, sitemapXml } = await vite.ssrLoadModule('/src/seo.js');

  await Promise.all(
    routes.map(async (route) => {
      const seo = getSeo(route);
      const appHtml = render(route);
      const html = template
        .replace('<!--app-head-->', renderSeoHead(seo))
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      const outputDir = route === '/' ? dist : path.join(dist, route);
      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(path.join(outputDir, 'index.html'), html);
    }),
  );

  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemapXml());
} finally {
  await vite.close();
}
