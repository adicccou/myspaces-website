# MySpaces React Website

React/Vite website for MySpaces. The build prerenders each route into static HTML for cleaner SEO indexing.

## Commands

```bash
npm install
npm run dev
npm run build
```

The production build outputs to `dist/`.

## Pages

- `/`
- `/features/`
- `/pricing/`
- `/articles/`
- `/articles/how-to-organize-browser-tabs-with-spaces/`
- `/articles/browser-tab-overload-costs-focus/`
- `/articles/chrome-tab-groups-vs-tab-spaces/`
- `/about-us/`
- `/contact-us/`
- `/help-centre/`
- `/privacy-policy/`
- `/terms-of-use/`
- `/refund-policy/`
- `/whats-new/`

## SEO

- Route-specific titles and descriptions
- Canonical URLs
- Open Graph and Twitter metadata
- JSON-LD for app, product, FAQ, organization, collection, and article pages
- Generated `dist/sitemap.xml`
- `public/robots.txt`
- Static prerendered HTML per route
