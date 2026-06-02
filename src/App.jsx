import { useEffect, useMemo, useState } from 'react';
import {
  Add,
  AddCircle,
  ArchiveBook,
  ArrowRight2,
  BookSaved,
  Chrome,
  Folder2,
  Global,
  Minus,
  PlayCircle,
  ProfileRemove,
  Radar2,
  Shield,
  ShieldTick,
  Star1,
  TickCircle,
} from 'iconsax-react';
import {
  browsers,
  changeLog,
  faqs,
  featureCards,
  installAssurances,
  navItems,
  pricingComparison,
  pricingPlans,
  site,
  socialLinks,
  testimonials,
  useCases,
} from './content.js';
import { fetchArticleBySlug, fetchArticles } from './articleApi.js';
import { getSeo, normalizePath } from './seo.js';

const iconProps = { size: 24, variant: 'Bulk', 'aria-hidden': true };
const useCaseIcons = [Folder2, BookSaved, Global, PlayCircle, AddCircle, ArchiveBook];
const browserLogoSources = {
  Chrome: '/assets/browsers/chrome.svg',
  Firefox: '/assets/browsers/firefox.svg',
  Opera: '/assets/browsers/opera.svg',
  Brave: '/assets/browsers/brave.svg',
  Edge: '/assets/browsers/edge.svg',
};
const browserLogoOrder = ['Chrome', 'Firefox', 'Opera', 'Brave', 'Edge'];

const benefitRows = [];

function currentPath(initialPath) {
  if (initialPath) return normalizePath(initialPath);
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.pathname);
}

function useDocumentSeo(path) {
  const seo = useMemo(() => getSeo(path), [path]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', seo.description);
  }, [seo]);

  return seo;
}

function PageLink({ href, className, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

function IconBadge({ icon: Icon, className = '' }) {
  return (
    <span className={`icon-badge ${className}`} aria-hidden="true">
      <Icon {...iconProps} />
    </span>
  );
}

function InstallAssurances({ compact = false }) {
  return (
    <ul className={`install-assurances ${compact ? 'compact' : ''}`} aria-label="Install details">
      {installAssurances.map((assurance) => (
        <li key={assurance}>
          <TickCircle size={16} variant="Bold" aria-hidden="true" />
          {assurance}
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({ platform }) {
  if (platform === 'instagram') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.8" cy="7.2" r="1" />
      </svg>
    );
  }

  const markMap = {
    threads: '@',
    twitter: 'X',
    reddit: 'r/',
  };

  return <span aria-hidden="true">{markMap[platform] ?? '•'}</span>;
}

function useDashboardArticles(limit) {
  const [state, setState] = useState({ status: 'loading', articles: [], error: '' });

  useEffect(() => {
    let cancelled = false;

    fetchArticles()
      .then((items) => {
        if (cancelled) return;
        setState({ status: 'ready', articles: limit ? items.slice(0, limit) : items, error: '' });
      })
      .catch((error) => {
        if (cancelled) return;
        setState({ status: 'error', articles: [], error: error.message || 'Failed to load articles' });
      });

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return state;
}

function useDashboardArticle(slug) {
  const [state, setState] = useState({ status: 'loading', article: null, error: '' });

  useEffect(() => {
    let cancelled = false;

    fetchArticleBySlug(slug)
      .then((article) => {
        if (cancelled) return;
        setState({ status: 'ready', article, error: '' });
      })
      .catch((error) => {
        if (cancelled) return;
        setState({ status: error.message === 'Article not found' ? 'not-found' : 'error', article: null, error: error.message });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return state;
}

function BrowserLogoStrip() {
  return (
    <div className="browser-logo-strip" aria-label="Supported browser logos">
      {browserLogoOrder.map((browserName) => (
        <span className="browser-logo-tile" key={browserName}>
          <img src={browserLogoSources[browserName]} alt="" referrerPolicy="no-referrer" />
          <span>{browserName}</span>
        </span>
      ))}
    </div>
  );
}

function Header({ path }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="MySpaces home">
        <img src={site.logo} alt="MySpaces" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.path} href={item.path} aria-current={path === item.path ? 'page' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-small" href={site.installUrl}>
        Install Now
      </a>
    </header>
  );
}

function Hero() {
  const painPoints = [
    'Save reusable tab spaces',
    'Separate work, study, and personal browsing',
    'Restore project context fast',
  ];

  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Browser workspace manager</p>
        <h1>Turn tab chaos into clean workspaces.</h1>
        <p className="hero-lede">
          MySpaces is a browser workspace manager for people who keep too many tabs open. Save the browser setups you
          repeat every day into clean, reusable spaces.
        </p>
        <div className="hero-proof" aria-label="MySpaces quick facts">
          <span>Free plan</span>
          <span>Chrome Web Store</span>
          <span>No credit card</span>
        </div>
        <div className="hero-actions">
          <a className="button" href={site.installUrl}>
            Install MySpaces
          </a>
          <a className="button button-secondary" href="/pricing/">
            See Plans
          </a>
        </div>
        <ul className="pain-list" aria-label="Common tab problems MySpaces solves">
          {painPoints.map((point) => (
            <li key={point}>
              <TickCircle size={18} variant="Bold" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-media" aria-label="MySpaces product preview">
        <div className="hero-artwork">
          <img
            className="hero-illustration-base"
            src="/assets/hero-illustration.svg?v=3"
            alt="MySpaces browser extension interface preview"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitRows() {
  if (benefitRows.length === 0) return null;

  return (
    <section className="section benefit-stack" aria-label="MySpaces workflow benefits">
      {benefitRows.map((benefit, index) => (
        <article className="benefit-row" key={benefit.title}>
          <div className="benefit-copy">
            <IconBadge icon={benefit.icon} />
            <p className="eyebrow">{benefit.eyebrow}</p>
            <h2>{benefit.title}</h2>
            <p className="section-copy">{benefit.text}</p>
          </div>
          <div className="benefit-media">
            <img src={benefit.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        </article>
      ))}
    </section>
  );
}

function FeatureGrid({ compact = false }) {
  const bentoFeatures = featureCards.slice(0, 4);

  return (
    <section className={`section feature-section ${compact ? '' : ''}`} id="features">
      <div className="feature-intro">
        <h2>Close the clutter without losing your place.</h2>
        <p className="section-copy">
          MySpaces turns repeated browser setups into reusable spaces. Save a workflow once, close the noise, and bring
          the right tabs back when you need them.
        </p>
      </div>
      <div className="feature-grid feature-bento">
        {bentoFeatures.map((feature, index) => (
          <article
            className={`feature-card ${feature.title === 'Tab groups and pinned tabs' ? 'has-product-shot' : ''} ${
              feature.title === 'Restore your context fast' ? 'has-restore-shot' : ''
            } ${feature.title === 'Sync across browsers' ? 'has-browser-logos' : ''}`}
            key={feature.title}
          >
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            {index === 0 ? (
              <img
                className="feature-space-illustration"
                src="/assets/spaces-preview.svg?v=3"
                alt="Example saved MySpaces workspace rows"
                loading="lazy"
              />
            ) : null}
            {index === 1 ? (
              <img
                className="feature-restore-illustration"
                src="/assets/restore-context.svg"
                alt="MySpaces restored browser workspace illustration"
                loading="lazy"
              />
            ) : null}
            {feature.title === 'Tab groups and pinned tabs' ? (
              <img
                className="feature-product-shot"
                src="/assets/product-hero.png"
                alt="MySpaces extension panel with grouped and pinned browser tabs"
                loading="lazy"
              />
            ) : null}
            {feature.title === 'Sync across browsers' ? <BrowserLogoStrip /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoSection() {
  const demoPreview = `
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #0b303b url('${site.demoThumbnailUrl}') center / cover no-repeat;
        font-family: Mada;
      }
      a {
        display: grid;
        width: 100%;
        min-height: 100vh;
        place-items: center;
        color: #ffffff;
        text-decoration: none;
        background: linear-gradient(180deg, rgba(11, 48, 59, 0.04), rgba(11, 48, 59, 0.36));
      }
      span {
        display: inline-grid;
        width: 78px;
        height: 78px;
        place-items: center;
        border-radius: 999px;
        background: #8158ef;
        box-shadow: 0 18px 42px rgba(11, 48, 59, 0.34);
      }
      span::before {
        width: 0;
        height: 0;
        margin-left: 5px;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 23px solid #ffffff;
        content: "";
      }
    </style>
    <a href="${site.demoEmbedUrl}" aria-label="Play MySpaces demo video"><span aria-hidden="true"></span></a>
  `;

  return (
    <section className="section demo-section" aria-labelledby="product-demo-title">
      <div>
        <h2 id="product-demo-title">See how MySpaces saves your tab setup.</h2>
        <p className="section-copy">
          Watch the quick walkthrough, then install MySpaces to turn repeated browser setups into reusable workspaces.
        </p>
        <div className="hero-actions">
          <a className="button button-secondary" href={site.demoUrl}>
            Open on YouTube
            <PlayCircle size={18} variant="Bulk" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="demo-video">
        <iframe
          src={site.demoEmbedUrl}
          srcDoc={demoPreview}
          title="MySpaces product demo video"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="section band">
      <div className="band-copy">
        <h2>Keep work, study, research, and personal browsing separate.</h2>
        <p>
          Give each repeated tab setup a name. Client work, research, travel plans, entertainment, shopping, and admin
          tasks all get their own place.
        </p>
      </div>
      <div className="usecase-grid">
        {useCases.map(([title, text], index) => (
          <article className="usecase-card" key={title}>
            <IconBadge icon={useCaseIcons[index % useCaseIcons.length]} className={`tone-${index % 4}`} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SyncSection() {
  return (
    <section className="section sync-section">
      <div>
        <h2>Your spaces stay ready across browsers and computers.</h2>
        <p className="section-copy">
          Start a workflow on one device, then continue from another without rebuilding the same tabs manually.
        </p>
      </div>
      <div className="sync-visual" aria-label="MySpaces sync between computers preview">
        <img src="/assets/sync-illustration.svg?v=3" alt="MySpaces sync illustration across laptop and desktop" />
      </div>
    </section>
  );
}

function PrivacyCta() {
  const privacyPromises = [
    {
      title: 'No data selling',
      text: 'Your browsing data is not packaged, sold, or used for ad targeting.',
      Icon: Shield,
    },
    {
      title: 'No ad profiles',
      text: 'MySpaces is designed for organization, not behavior profiling.',
      Icon: ProfileRemove,
    },
    {
      title: 'Built for focus',
      text: 'Sync and product data exist only to keep your spaces useful.',
      Icon: Radar2,
    },
  ];

  return (
    <section className="privacy-cta">
      <div className="privacy-copy">
        <h2>Your browsing data stays yours.</h2>
        <p>MySpaces is for organizing tabs, not monitoring behavior.</p>
      </div>
      <ul className="privacy-list" aria-label="MySpaces privacy promises">
        {privacyPromises.map(({ title, text, Icon }) => (
          <li key={title}>
            <span className="privacy-icon" aria-hidden="true">
              <Icon size={30} variant="Bulk" />
            </span>
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-heading">
        <h2>What users say about MySpaces</h2>
        <p>User feedback focused on tab cleanup, project separation, and faster context switching.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="stars" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star1 key={index} size={18} variant="Bold" aria-hidden="true" />
              ))}
            </div>
            <p>"{testimonial.quote}"</p>
            <div>
              {testimonial.avatar ? (
                <img className="avatar avatar-photo" src={testimonial.avatar} alt="" loading="lazy" />
              ) : (
                <span className="avatar">{testimonial.name.charAt(0)}</span>
              )}
              <span>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingBlocks({ showHeading = true }) {
  return (
    <section className="section pricing" id="pricing">
      {showHeading ? (
        <div className="section-heading">
          <h2>One-time purchase, no subscription.</h2>
          <p>Use the free plan, or unlock unlimited spaces and sync with a lifetime license.</p>
        </div>
      ) : null}
      <div className="pricing-assurance" aria-label="Pricing assurances">
        <span>Free plan stays free</span>
        <span>One-time lifetime license</span>
        <span>No subscription</span>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article className={`price-card ${plan.badge ? 'highlighted' : ''}`} key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <TickCircle size={18} variant="Bold" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a className={plan.badge ? 'button' : 'button button-secondary'} href={plan.href}>
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
      <InstallAssurances compact />
    </section>
  );
}

function PricingComparison() {
  const renderComparisonValue = (value) => {
    const isIncluded = value === 'Included' || value === 'Unlimited spaces';
    const isUnavailable = value === 'Not included';
    return (
      <span className={`comparison-value ${isIncluded ? 'is-included' : ''} ${isUnavailable ? 'is-muted' : ''}`}>
        {isIncluded ? <TickCircle size={16} variant="Bold" aria-hidden="true" /> : null}
        {isUnavailable ? <Minus size={16} variant="Bold" aria-hidden="true" /> : null}
        {value}
      </span>
    );
  };

  return (
    <section className="section comparison-section" aria-labelledby="comparison-title">
      <div className="section-heading">
        <p className="eyebrow">Plan comparison</p>
        <h2 id="comparison-title">Free vs Lifetime</h2>
        <p>Compare the limits and upgrade features before choosing a plan.</p>
      </div>
      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Free</th>
              <th scope="col">Lifetime</th>
            </tr>
          </thead>
          <tbody>
            {pricingComparison.map(([feature, free, lifetime]) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                <td>{renderComparisonValue(free)}</td>
                <td>{renderComparisonValue(lifetime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function FAQBlock({ showHeading = true }) {
  return (
    <section className="section faq" id="faq">
      {showHeading ? (
        <div className="section-heading">
          <h2>Frequently asked questions</h2>
        </div>
      ) : null}
      <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>
            <span>{faq.question}</span>
            <span className="faq-toggle" aria-hidden="true">
              <Add className="faq-toggle-add" size={18} variant="Bold" />
              <Minus className="faq-toggle-minus" size={18} variant="Bold" />
            </span>
          </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ArticlesPreview() {
  return (
    <section className="section articles-preview">
      <div className="section-heading">
        <h2>Browser productivity guides</h2>
        <p>Practical guides for reducing tab overload and building cleaner browser workflows.</p>
      </div>
      <ArticleGrid limit={3} />
      <div className="center-actions">
        <a className="button button-secondary" href="/articles/">
          View All Articles
        </a>
      </div>
    </section>
  );
}

function ArticleGrid({ limit }) {
  const { status, articles: list, error } = useDashboardArticles(limit);

  if (status === 'loading') {
    return <div className="article-status">Loading articles from the dashboard...</div>;
  }

  if (status === 'error') {
    return <div className="article-status">Articles could not be loaded from the dashboard. {error}</div>;
  }

  if (list.length === 0) {
    return <div className="article-status">No MySpaces articles have been published from the dashboard yet.</div>;
  }

  return (
    <div className="article-grid">
      {list.map((article) => (
        <article className="article-card" key={article.slug}>
          <div className="seo-only">
            <span>{article.category}</span>
            <span>{article.readTime}</span>
          </div>
          <h3>
            <a href={`/articles/${article.slug}/`}>{article.title}</a>
          </h3>
          <p>{article.excerpt}</p>
          <a className="text-link" href={`/articles/${article.slug}/`}>
            Read article
          </a>
        </article>
      ))}
    </div>
  );
}

function articleContentBlocks(content = '') {
  const lines = String(content).split(/\r?\n/);
  const blocks = [];
  let currentHeading = '';
  let currentBody = [];

  function flush() {
    const body = currentBody.join('\n').trim();
    if (currentHeading || body) {
      blocks.push({ heading: currentHeading, body });
    }
    currentHeading = '';
    currentBody = [];
  }

  lines.forEach((line) => {
    const heading = line.match(/^#{2,3}\s+(.+)$/);
    if (heading) {
      flush();
      currentHeading = heading[1].trim();
      return;
    }
    currentBody.push(line);
  });

  flush();

  if (blocks.length === 0 && content.trim()) {
    return [{ heading: '', body: content.trim() }];
  }

  return blocks;
}

function articleParagraphText(paragraph) {
  return paragraph
    .replace(/^#+\s*/, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function ArticleBody({ content }) {
  const blocks = articleContentBlocks(content);

  return (
    <div className="article-body">
      {blocks.map((block, index) => (
        <section key={`${block.heading}-${index}`}>
          {block.heading ? <h2>{block.heading}</h2> : null}
          {block.body
            .split(/\n{2,}/)
            .map(articleParagraphText)
            .filter(Boolean)
            .map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
        </section>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <BenefitRows />
      <FeatureGrid />
      <SyncSection />
      <PrivacyCta />
      <Testimonials />
      <PricingBlocks />
      <DemoSection />
      <FAQBlock />
      <ArticlesPreview />
    </>
  );
}

function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="A browser workspace manager for too many tabs."
        text="MySpaces helps people who live in browser tabs separate active work, save reusable contexts, close clutter, and return to projects without rebuilding windows manually."
      />
      <FeatureGrid compact />
      <UseCases />
      <SyncSection />
      <PrivacyCta />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing for cleaner browser work."
        text="Start free with core tab organization. Upgrade once when unlimited spaces and sync become part of your daily workflow."
      />
      <PricingBlocks showHeading={false} />
      <PricingComparison />
      <FAQBlock />
    </>
  );
}

function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Practical guides for browser organization."
        text="Read practical browser productivity articles about tab management, spaces, Chrome tab groups, and reducing tab overload."
      />
      <section className="section">
        <ArticleGrid />
      </section>
    </>
  );
}

function ArticlePage({ slug }) {
  const { status, article, error } = useDashboardArticle(slug);

  useEffect(() => {
    if (!article || typeof document === 'undefined') return;
    document.title = `${article.title} - MySpaces Articles`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', article.metaDescription);
  }, [article]);

  if (status === 'loading') {
    return <div className="section article-status">Loading article from the dashboard...</div>;
  }

  if (status === 'not-found') return <NotFoundPage />;

  if (status === 'error') {
    return <div className="section article-status">Article could not be loaded from the dashboard. {error}</div>;
  }

  return (
    <article className="section article-page">
      <div className="article-header">
        <a className="text-link" href="/articles/">
          Articles
        </a>
        <div className="seo-only">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
          <span>{article.date}</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
      </div>
      <ArticleBody content={article.content} />
      <div className="article-cta">
        <h2>Ready to organize your own tabs?</h2>
        <p>Install MySpaces and create separate spaces for the workflows you repeat most often.</p>
        <a className="button" href={site.installUrl}>
          Install MySpaces
        </a>
        <InstallAssurances compact />
      </div>
    </article>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="MySpaces exists because browser work became project work."
        text="Most people do not use the browser for one task. They use it for clients, study, planning, media, admin, and research at the same time. MySpaces gives each workflow a proper home."
      />
      <section className="section content-grid">
        <article>
          <h2>Product point of view</h2>
          <p>
            The browser is now the default workspace for many professionals. Bookmarks are too static, tab groups are
            session-based, and dozens of open tabs are fragile. MySpaces sits between those behaviors: reusable,
            practical, and fast enough for daily use.
          </p>
        </article>
        <article>
          <h2>Who it is for</h2>
          <p>
            MySpaces is for founders, students, operators, marketers, developers, researchers, and anyone who frequently
            switches between different browser-heavy workflows.
          </p>
        </article>
        <article>
          <h2>Business promise</h2>
          <p>
            The product stays focused on organization, privacy, and a simple one-time purchase path instead of another
            recurring subscription.
          </p>
        </article>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get help with MySpaces."
        text="Use this page for support, billing, license, privacy, partnership, or product feedback requests."
      />
      <section className="section contact-layout">
        <article className="contact-card">
          <h2>Support</h2>
          <p>Email MySpaces support for installation, license, sync, billing, and privacy questions.</p>
          <a className="button" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </article>
        <div className="contact-list">
          {[
            ['Product help', 'Installation, spaces, tab groups, pinned tabs, and browser compatibility.'],
            ['Billing and license', 'Lifetime purchase questions, license access, duplicate purchase checks, and receipts.'],
            ['Privacy requests', 'Account data, deletion requests, sync questions, and product data concerns.'],
            ['Partnerships', 'Distribution, product collaborations, and browser productivity partnerships.'],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Setup, plans, sync, and troubleshooting."
        text="Core support information is filled in now so the website has a complete customer-facing help surface."
      />
      <section className="section help-grid">
        {[
          ['Install MySpaces', 'Install from the Chrome Web Store, pin the extension, and create your first space.'],
          ['Create a space', 'Group related tabs, name the space clearly, then reopen it when that workflow returns.'],
          ['Use tab groups', 'Use browser tab groups inside active sessions while MySpaces manages reusable spaces.'],
          ['Pinned tabs', 'Keep recurring tabs pinned where supported so key tools stay available in the right workflow.'],
          ['Sync setup', 'Use sync when you need browser spaces available across supported browsers and computers.'],
          ['Billing support', `For Lifetime license questions, contact ${site.supportEmail}.`],
        ].map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <FAQBlock showHeading={false} />
    </>
  );
}

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="May 31, 2026">
      <h2>Overview</h2>
      <p>
        MySpaces is a browser tab management product. This policy explains what information may be collected when you
        use the website, browser extension, account features, sync features, checkout, and support channels.
      </p>
      <h2>Information we may collect</h2>
      <ul>
        <li>Account information such as email address when you create an account or request support.</li>
        <li>License and payment status from the checkout provider. Full card details are handled by the payment provider.</li>
        <li>Product settings required to save spaces, support tab grouping, pinned tabs, and optional sync.</li>
        <li>Support messages you send to MySpaces.</li>
        <li>Basic website analytics such as page visits, referrers, browser type, and device information.</li>
      </ul>
      <h2>How information is used</h2>
      <p>
        Information is used to operate the product, provide sync and licensing, respond to support, improve website
        performance, prevent abuse, and comply with legal obligations.
      </p>
      <h2>Browsing activity</h2>
      <p>
        MySpaces is designed for organizing tabs. It does not sell browsing activity and does not need advertising
        profiles to provide the product.
      </p>
      <h2>Payments</h2>
      <p>
        Payments are processed by Lemon Squeezy or another checkout provider. MySpaces receives purchase confirmation,
        license, and receipt information needed to activate and support the Lifetime plan.
      </p>
      <h2>Data sharing</h2>
      <p>
        MySpaces may use infrastructure, analytics, email, support, and payment providers to operate the website and
        product. These providers only receive information needed for their role.
      </p>
      <h2>Your choices</h2>
      <p>
        You can uninstall the extension, stop using sync, request support, or ask for deletion of account-related data by
        emailing {site.supportEmail}.
      </p>
      <h2>Contact</h2>
      <p>Privacy questions can be sent to {site.supportEmail}.</p>
    </LegalPage>
  );
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="May 31, 2026">
      <h2>Agreement</h2>
      <p>
        By using MySpaces, you agree to these terms. If you do not agree, do not use the website, extension, checkout, or
        related services.
      </p>
      <h2>Product use</h2>
      <p>
        MySpaces provides browser tab organization, spaces, tab group support, pinned tab support, and optional sync
        features. You are responsible for how you use the product and for maintaining access to your browser, account,
        and license.
      </p>
      <h2>License</h2>
      <p>
        The free plan may be used without payment. The Lifetime plan grants access to paid features for the purchasing
        user according to the license and checkout terms provided at purchase.
      </p>
      <h2>Acceptable use</h2>
      <ul>
        <li>Do not attempt to reverse engineer, abuse, resell, or disrupt the product.</li>
        <li>Do not use MySpaces in a way that violates law or third-party rights.</li>
        <li>Do not attempt to bypass licensing, payment, sync, or security systems.</li>
      </ul>
      <h2>Payments and refunds</h2>
      <p>
        Paid purchases are processed by the checkout provider. Refund handling is described in the Refund Policy and may
        depend on purchase status, duplicate charges, and support review.
      </p>
      <h2>Availability</h2>
      <p>
        MySpaces may change, improve, pause, or discontinue features. The product is provided as available, and no
        guarantee is made that every browser or device configuration will always work.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, MySpaces is not liable for indirect damages, lost data, lost profits, or
        browser and third-party service issues outside its control.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to {site.supportEmail}.</p>
    </LegalPage>
  );
}

function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" updated="May 31, 2026">
      <h2>Overview</h2>
      <p>
        MySpaces offers a free plan so users can try the product before buying a Lifetime license. Refund requests are
        reviewed through support.
      </p>
      <h2>Eligible refund cases</h2>
      <ul>
        <li>Duplicate purchases made by mistake.</li>
        <li>License activation issues that support cannot resolve.</li>
        <li>Clear checkout errors reported soon after purchase.</li>
      </ul>
      <h2>Non-refundable cases</h2>
      <p>
        Refunds may be declined where the product was used successfully, the request is abusive, or the request falls
        outside the checkout provider rules.
      </p>
      <h2>How to request a refund</h2>
      <p>
        Email {site.supportEmail} with your purchase email, order reference, and a short explanation. Do not send card
        details by email.
      </p>
    </LegalPage>
  );
}

function WhatsNewPage() {
  return (
    <>
      <PageHero
        eyebrow="What's new"
        title="Product and website updates."
        text="Follow MySpaces release notes, product improvements, and website updates."
      />
      <section className="section timeline">
        {changeLog.map((entry) => (
          <article key={`${entry.version}-${entry.date}`}>
            <time>{entry.date}</time>
            <h2>{entry.version}</h2>
            <ul>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function LegalPage({ title, updated, children }) {
  return (
    <article className="section legal-page">
      <p className="eyebrow">Legal</p>
      <h1>{title}</h1>
      <p className="updated">Last updated: {updated}</p>
      <div className="legal-body">{children}</div>
    </article>
  );
}

function NotFoundPage() {
  return (
    <section className="page-hero not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page you requested is not available. Return to the homepage or browse the articles.</p>
      <div className="hero-actions">
        <a className="button" href="/">
          Home
        </a>
        <a className="button button-secondary" href="/articles/">
          Articles
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <div>
            <h2>Clean up your tabs and keep every workflow ready.</h2>
            <p>Install MySpaces free, then upgrade once when you need unlimited spaces and sync.</p>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={site.logo} alt="MySpaces" />
            </div>
            <p>{site.tagline} Productive spaces for work, study, research, and daily browsing.</p>
            <a className="footer-email" href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </a>
            <div className="footer-social" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a key={social.platform} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <strong>Product</strong>
              <PageLink href="/features/">Features</PageLink>
              <PageLink href="/pricing/">Pricing</PageLink>
              <PageLink href="/whats-new/">What's New</PageLink>
            </div>
            <div>
              <strong>Company</strong>
              <PageLink href="/about-us/">About Us</PageLink>
              <PageLink href="/contact-us/">Contact</PageLink>
              <PageLink href="/help-centre/">Help Centre</PageLink>
            </div>
            <div>
              <strong>Legal</strong>
              <PageLink href="/privacy-policy/">Privacy Policy</PageLink>
              <PageLink href="/terms-of-use/">Terms of Use</PageLink>
              <PageLink href="/refund-policy/">Refund Policy</PageLink>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">Copyright 2026 MySpaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function renderRoute(path) {
  if (path === '/') return <HomePage />;
  if (path === '/features/') return <FeaturesPage />;
  if (path === '/pricing/') return <PricingPage />;
  if (path === '/articles/') return <ArticlesPage />;
  if (path.startsWith('/articles/')) {
    const slug = path.replace('/articles/', '').replace('/', '');
    return <ArticlePage slug={slug} />;
  }
  if (path === '/about-us/') return <AboutPage />;
  if (path === '/contact-us/') return <ContactPage />;
  if (path === '/help-centre/') return <HelpPage />;
  if (path === '/privacy-policy/') return <PrivacyPolicyPage />;
  if (path === '/terms-of-use/') return <TermsPage />;
  if (path === '/refund-policy/') return <RefundPolicyPage />;
  if (path === '/whats-new/') return <WhatsNewPage />;
  return <NotFoundPage />;
}

export default function App({ initialPath }) {
  const path = currentPath(initialPath);
  useDocumentSeo(path);

  return (
    <>
      <Header path={path} />
      <main>{renderRoute(path)}</main>
      <Footer />
    </>
  );
}
