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
import { applySeoToDocument, articleSeo, getSeo, normalizePath } from './seo.js';

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
    applySeoToDocument(seo);
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
          {article.coverImage ? (
            <a className="article-card-cover" href={`/articles/${article.slug}/`} aria-hidden="true" tabIndex={-1}>
              <img src={article.coverImage} alt="" loading="lazy" />
            </a>
          ) : null}
          <div className="seo-only">
            <span>{article.category}</span>
            <span>{article.readTime}</span>
          </div>
          <div className="article-card-copy">
            <h3>
              <a href={`/articles/${article.slug}/`}>{article.title}</a>
            </h3>
            <p>{article.excerpt}</p>
          </div>
          <a className="text-link" href={`/articles/${article.slug}/`}>
            Read article
          </a>
        </article>
      ))}
    </div>
  );
}

function ArticleBody({ content }) {
  const html = String(content || '').trim();

  if (!html) return null;

  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
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

function PricingPage() {
  return (
    <>
      <PageHero
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
    if (!article) return;
    applySeoToDocument(articleSeo(article, slug));
  }, [article, slug]);

  if (status === 'loading') {
    return <div className="section article-status">Loading article from the dashboard...</div>;
  }

  if (status === 'not-found') return <NotFoundPage />;

  if (status === 'error') {
    return <div className="section article-status">Article could not be loaded from the dashboard. {error}</div>;
  }

  return (
    <article className="section article-page">
      {article.coverImage ? (
        <div className="article-cover">
          <img src={article.coverImage} alt={article.title} />
        </div>
      ) : null}
      <div className="article-header">
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
          {article.publishedDateLabel ? <span>{article.publishedDateLabel}</span> : null}
          {article.publishedTimeLabel ? <span>{article.publishedTimeLabel}</span> : null}
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
  const principles = [
    [
      Folder2,
      'Reusable context',
      'Workflows should reopen as a whole, not depend on memory, bookmarks, or a pile of half-open tabs.',
    ],
    [
      ShieldTick,
      'Privacy by default',
      'The product is designed for organization, not behavior profiling, ad targeting, or selling browsing data.',
    ],
    [
      TickCircle,
      'Simple ownership',
      'MySpaces keeps pricing direct: start free, then upgrade once if unlimited spaces and sync matter to your work.',
    ],
  ];
  const audiences = ['Founders', 'Students', 'Operators', 'Marketers', 'Developers', 'Researchers'];

  return (
    <>
      <PageHero
        title="MySpaces exists because browser work became project work."
        text="Most people do not use the browser for one task. They use it for clients, study, planning, media, admin, and research at the same time. MySpaces gives each workflow a proper home."
      />
      <section className="section about-overview">
        <div className="about-story">
          <p className="eyebrow">Product point of view</p>
          <h2>The browser became the place where projects live.</h2>
          <p>
            Bookmarks are too static, tab groups are session-based, and dozens of open tabs are fragile. MySpaces sits
            between those habits: reusable, practical, and fast enough for daily work.
          </p>
          <div className="about-audience" aria-label="People MySpaces is built for">
            {audiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
          </div>
        </div>
        <div className="about-preview" aria-label="MySpaces product preview">
          <img src="/assets/product-hero.png" alt="MySpaces browser workspace manager interface" loading="lazy" />
        </div>
      </section>

      <section className="section about-principles" aria-labelledby="about-principles-title">
        <div className="section-heading">
          <h2 id="about-principles-title">Built around calmer browser work.</h2>
          <p>The product promise is intentionally narrow: save the setup, reduce the clutter, and keep control simple.</p>
        </div>
        <div className="about-principle-grid">
          {principles.map(([Icon, title, text], index) => (
            <article key={title}>
              <IconBadge icon={Icon} className={`tone-${index}`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div>
          <h2>One product, one job.</h2>
          <p>
            MySpaces is not trying to replace your browser. It gives each recurring workflow a stable home so you can
            close tabs without losing your place.
          </p>
        </div>
        <a className="button button-secondary" href="/">
          Back Home
        </a>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
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
        <div className="contact-social-card">
          <h2>Reach out on social media</h2>
          <p>
            You can also message MySpaces through social channels for product feedback, quick questions, and community
            updates.
          </p>
          <div className="contact-social-links" aria-label="MySpaces social links">
            {socialLinks.map((social) => (
              <a key={social.platform} href={social.href} target="_blank" rel="noreferrer">
                <SocialIcon platform={social.platform} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HelpPage() {
  return (
    <>
      <PageHero
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
    <LegalPage title="Privacy Policy" updated="June 3, 2026">
      <p>
        Welcome to MySpaces, a browser extension designed to help you organize and manage your browser tabs efficiently.
        This Privacy Policy explains how we handle your data. By using MySpaces, you agree to the practices described
        below.
      </p>
      <h2>1. Data Collection</h2>
      <p>
        We do not collect or store personal browsing data. MySpaces is built with privacy in mind, and your tab data is
        processed locally within your browser.
      </p>
      <p>
        For the optional sync feature, we store only the minimum information required to connect your account and synced
        spaces, such as your email address, website URLs, spaces, and tab structures. We do not store anything related to
        those websites, such as cookies, cache, passwords, or other unrelated website data.
      </p>
      <h2>2. Account and Sync Features</h2>
      <p>
        MySpaces offers optional account-based features to sync your spaces and tabs across multiple browsers and
        computers.
      </p>
      <ul>
        <li>When you create an account, we store only the minimal data required to enable synchronization.</li>
        <li>No browsing history, personal data, or unrelated information is collected or tracked.</li>
        <li>Your synced data is transmitted and stored solely for the purpose of providing the sync feature.</li>
        <li>You can delete your account and all associated data at any time by contacting us.</li>
      </ul>
      <h2>3. Data Tracking</h2>
      <p>
        We do not track your activity, monitor your browsing behavior, or share your data with third parties. All
        non-synced functionality operates entirely offline and locally within your browser.
      </p>
      <h2>4. Authentication</h2>
      <p>
        Using MySpaces locally does not require an account. The account system is optional and exists only for
        synchronization purposes.
      </p>
      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any updates will be posted on this page, and the Last
        updated date will reflect the latest revision. We recommend checking this policy periodically to stay informed.
      </p>
      <h2>6. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at {site.supportEmail}.</p>
      <p>Thank you for using MySpaces. Your privacy is our priority.</p>
    </LegalPage>
  );
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="7 December 2025">
      <p>
        Software: MySpaces, a Chrome Extension for Managing Tabs by Spaces.
      </p>
      <p>
        These Terms of Use govern your access to and use of the MySpaces Chrome extension. By installing or using
        MySpaces, you agree to be legally bound by these Terms. If you do not agree, do not use the Software.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By installing or using MySpaces, you confirm that you have read and understood these Terms, agree to comply with
        them, and are legally capable of entering into binding agreements.
      </p>
      <p>
        These Terms may be updated from time to time, and continued use of the Software constitutes acceptance of any
        updated Terms.
      </p>
      <h2>2. License Grant</h2>
      <p>
        MySpaces grants you a limited, non-exclusive, non-transferable, revocable license to use the Software solely for
        your personal or internal business purposes.
      </p>
      <p>
        You do not acquire ownership of the Software. All rights, title, and interest remain the exclusive property of
        the MySpaces Developers.
      </p>
      <h2>3. Prohibited Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, reverse engineer, decompile, or disassemble the Software.</li>
        <li>Sell, rent, sublicense, redistribute, or commercially exploit MySpaces.</li>
        <li>Interfere with or disrupt the Software or its servers.</li>
        <li>Attempt unauthorized access to any systems, user data, or accounts.</li>
        <li>Use MySpaces for unlawful, harmful, or abusive purposes.</li>
      </ul>
      <p>
        Violation may result in immediate termination of your license without refund.
      </p>
      <h2>4. Account and Sync Features</h2>
      <p>
        Certain features of MySpaces, including cross-device syncing, require creation of an account.
      </p>
      <p>
        By creating an account using Google Sign-In, you acknowledge that authentication is handled solely through
        Google. MySpaces does not store your password or authentication credentials, and you remain responsible for
        managing access to your Google account.
      </p>
      <p>We may suspend or terminate accounts that violate these Terms or pose security risks.</p>
      <h2>5. Data Handling and Privacy</h2>
      <p>
        MySpaces does not collect personal browsing data or track your activities. Any data you choose to sync across
        devices, such as tab names or workspace structures, is stored solely for the purpose of enabling the sync
        feature.
      </p>
      <p>By using sync features, you consent to the storage and processing of such data.</p>
      <p>
        For full details, refer to the <a href="/privacy-policy/">Privacy Policy</a>.
      </p>
      <h2>6. Intellectual Property Rights</h2>
      <p>
        All intellectual property related to MySpaces, including code, design, branding, documentation, features, and
        functionality, is owned exclusively by the MySpaces Developers.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Claim ownership.</li>
        <li>Create derivative works.</li>
        <li>Reproduce or distribute the Software or its branding.</li>
      </ul>
      <p>Any unauthorized use will be legally pursued to the maximum extent permitted by law.</p>
      <h2>7. Disclaimer of Warranties</h2>
      <p>
        MySpaces is provided as-is and as available without warranties of any kind, whether express or implied.
      </p>
      <p>We do not guarantee:</p>
      <ul>
        <li>Continuous or error-free operation.</li>
        <li>Compatibility with all systems.</li>
        <li>That synced data will be preserved without loss.</li>
        <li>That bugs or issues will be resolved.</li>
      </ul>
      <p>Your use of MySpaces is entirely at your own risk.</p>
      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, the MySpaces Developers shall not be liable for:</p>
      <ul>
        <li>Loss of data, tabs, projects, or productivity.</li>
        <li>Damages caused by browser updates or third-party services.</li>
        <li>Indirect, incidental, or consequential damages.</li>
        <li>Any issues arising from misuse, installation errors, or configuration.</li>
      </ul>
      <p>Total liability, if any, shall not exceed the amount paid by you for the Software.</p>
      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless the MySpaces owners from any claims, losses, damages, liabilities, and
        expenses arising from your misuse of the Software, violations of these Terms, or violation of any law or
        third-party rights.
      </p>
      <h2>10. Termination</h2>
      <p>We reserve the right to suspend or terminate your access to MySpaces at any time, without refund, if:</p>
      <ul>
        <li>You violate these Terms.</li>
        <li>Your account presents a security risk.</li>
        <li>
          The product is discontinued, though we will do our best to support and keep it up to date as long as possible.
        </li>
      </ul>
      <p>Upon termination, your right to use the Software immediately ceases.</p>
      <h2>11. No Guarantee of Availability</h2>
      <p>We do not guarantee that:</p>
      <ul>
        <li>The service will remain available indefinitely.</li>
        <li>Sync features will always function.</li>
        <li>Future versions of Chrome or other browsers will support MySpaces.</li>
      </ul>
      <p>We reserve the right to modify, limit, or discontinue features at any time.</p>
      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted according to international business practices and general
        contract principles unless a specific jurisdiction is designated in the future.
      </p>
      <h2>13. Contact Information</h2>
      <p>If you have questions, contact us at {site.supportEmail}.</p>
      <p>By installing or using MySpaces, you confirm that you accept and agree to be bound by these Terms of Use.</p>
    </LegalPage>
  );
}

function WhatsNewPage() {
  return (
    <>
      <PageHero
        eyebrow="What's new"
        title="Product updates."
        text="Follow MySpaces release notes, product improvements, bug fixes, and extension updates."
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
