export const site = {
  name: 'MySpaces',
  tagline: 'Browser workspace manager for people who keep too many tabs open.',
  origin: 'https://www.myspaces.app',
  supportEmail: 'dev.oilor@gmail.com',
  installUrl:
    'https://chromewebstore.google.com/detail/tab-manager-myspaces/jgnmoggiaklbkpgcjfmjfalhannpifad',
  lifetimeUrl:
    'https://adiccou.lemonsqueezy.com/buy/f0aee325-95a7-462a-8315-c097e86b358a',
  demoUrl: 'https://www.youtube.com/watch?v=hqA0WdPmZ2U',
  demoEmbedUrl: 'https://www.youtube-nocookie.com/embed/hqA0WdPmZ2U?autoplay=1&rel=0&modestbranding=1',
  demoThumbnailUrl: 'https://img.youtube.com/vi/hqA0WdPmZ2U/maxresdefault.jpg',
  logo: '/assets/logo.svg',
  ogImage: '/assets/product-hero.png',
};

export const navItems = [
  { label: 'Pricing', path: '/pricing/' },
  { label: 'Articles', path: '/articles/' },
  { label: 'Help', path: '/help-centre/' },
];

export const socialLinks = [
  { label: 'Instagram', platform: 'instagram', href: 'https://www.instagram.com/myspacesapp/' },
  { label: 'Threads', platform: 'threads', href: 'https://www.threads.net/@myspacesapp' },
  { label: 'Twitter', platform: 'twitter', href: 'https://x.com/myspacesapp' },
  { label: 'Reddit', platform: 'reddit', href: 'https://www.reddit.com/r/myspaces/' },
];

export const featureCards = [
  {
    title: 'Spaces for every project',
    text: 'Keep work, study, research, and personal browsing separate instead of letting every context compete in one window.',
  },
  {
    title: 'Restore your context fast',
    text: 'Stop rebuilding the same tab setup every morning. Reopen the tabs you need when that workflow returns.',
  },
  {
    title: 'Tab groups and pinned tabs',
    text: 'Use browser-native grouping and pinned tabs while keeping each workflow clean and easy to reopen.',
  },
  {
    title: 'Sync across browsers',
    text: 'Keep important spaces available across supported Chromium browsers when your workflow moves.',
  },
  {
    title: 'Sync across computers',
    text: 'Continue from another computer without manually copying links or recreating your tab structure.',
  },
  {
    title: 'Privacy-first workflow',
    text: 'MySpaces is built for tab organization and productivity, not browsing surveillance or attention tracking.',
  },
];

export const useCases = [
  ['Work', 'Client dashboards, documents, email, planning boards, and research sources.'],
  ['Study', 'Courses, references, notes, papers, videos, and assignment materials.'],
  ['Travel', 'Flights, hotels, maps, visa requirements, checklists, and local guides.'],
  ['Media', 'Channels, playlists, articles, subscriptions, and watch-later references.'],
  ['To-Do', 'Errands, shopping, admin work, forms, and anything waiting for action.'],
  ['Projects', 'Each project gets a separate browser context that can be reopened when needed.'],
];

export const browsers = ['Chrome', 'Brave', 'Edge', 'Opera', 'Firefox'];

export const testimonials = [
  {
    name: 'Kari Dennis',
    role: 'Chrome Web Store user',
    quote: 'My tabs were scattered everywhere. MySpaces gives each project a proper place.',
    avatar: '/assets/reviews/kari-dennis.png',
  },
  {
    name: 'Thaha W',
    role: 'Chrome Web Store user',
    quote: 'Clean extension, easy tab organization, and support answered quickly.',
  },
  {
    name: 'Hax',
    role: 'Chrome Web Store user',
    quote: 'Simple idea, useful execution. It makes browser workspaces feel natural.',
    avatar: '/assets/reviews/hax.png',
  },
  {
    name: 'Divig off',
    role: 'Chrome Web Store user',
    quote: 'Finally, workspace-style browsing without changing windows all day.',
  },
  {
    name: 'Nursultan M.',
    role: 'Chrome Web Store user',
    quote: 'I use separate spaces for work and personal browsing. The app stays clean and quick.',
    avatar: '/assets/reviews/nursultan-muhambetov.png',
  },
  {
    name: 'Larisa',
    role: 'Chrome Web Store user',
    quote: 'Useful for project work. I recommend it to people who live in browser tabs.',
  },
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Free version remains available for basic tab organization.',
    cta: 'Install Now',
    href: site.installUrl,
    features: ['3 spaces', 'Tab grouping support', 'Pinned tab support'],
  },
  {
    name: 'Lifetime',
    price: '$12.99',
    badge: 'No subscription',
    description: 'Pay once and own the plugin forever.',
    cta: 'Buy Lifetime License',
    href: site.lifetimeUrl,
    features: [
      'Unlimited spaces',
      'Tab grouping support',
      'Pinned tab support',
      'Sync between browsers',
      'Sync between computers',
    ],
  },
];

export const pricingComparison = [
  ['Number of spaces', '3 spaces', 'Unlimited spaces'],
  ['Tab grouping', 'Included', 'Included'],
  ['Pinned tabs', 'Included', 'Included'],
  ['Browser sync', 'Not included', 'Included'],
  ['Computer sync', 'Not included', 'Included'],
  ['Future updates', 'Core updates', 'Included'],
  ['Support', 'Email support', 'Email and license support'],
];

export const installAssurances = [
  'Available in Chrome Web Store and Firefox Add-ons',
  'Free plan available',
  'No credit card required',
  'Upgrade only if you need unlimited spaces',
];

export const faqs = [
  {
    question: 'What is MySpaces?',
    answer:
      'MySpaces is a browser workspace manager for people who keep too many tabs open. It saves tab setups into named spaces for work, study, research, personal browsing, and recurring projects.',
  },
  {
    question: 'Which browsers does MySpaces support?',
    answer:
      'MySpaces is available through the Chrome Web Store and is designed for Chromium-based browsers including Chrome, Edge, Opera, Brave, and other compatible Chromium browsers.',
  },
  {
    question: 'What is included in the free plan?',
    answer:
      'The free plan includes 3 spaces, tab grouping support, and pinned tab support.',
  },
  {
    question: 'What additional features are included in Lifetime?',
    answer:
      'The Lifetime plan includes unlimited spaces, full tab grouping and pinned tab support, plus sync between browsers and computers for a one-time fee.',
  },
  {
    question: 'How does MySpaces protect privacy?',
    answer:
      'MySpaces is built around organizing browser tabs. It does not need to monitor browsing behavior for ads, and sync is used only where account-based product features require it.',
  },
  {
    question: 'How do I purchase the Lifetime plan?',
    answer:
      'Use the Buy Lifetime License button on the pricing page. After purchase, follow the license instructions provided during checkout.',
  },
];

export const articles = [
  {
    slug: 'how-to-organize-browser-tabs-with-spaces',
    title: 'How to organize browser tabs with spaces',
    excerpt:
      'A practical system for separating work, study, research, media, and personal tabs without changing your whole browser setup.',
    category: 'Tab Management',
    readTime: '5 min read',
    date: '2026-05-31',
    metaDescription:
      'Learn how to organize browser tabs with reusable spaces for work, study, personal projects, and research workflows.',
    sections: [
      [
        'Start with outcomes, not random folders',
        'Most tab systems fail because they copy bookmarks instead of workflows. Start by naming the outcomes you return to often: client work, research, finances, planning, study, or entertainment.',
      ],
      [
        'Make one space per active context',
        'A space should hold the tabs you need to resume a specific context. If a tab would confuse you when reopening that context tomorrow, it belongs somewhere else.',
      ],
      [
        'Review spaces weekly',
        'Close expired tabs, rename unclear spaces, and keep only the contexts you actually return to. A small weekly reset keeps the system useful.',
      ],
    ],
  },
  {
    slug: 'browser-tab-overload-costs-focus',
    title: 'Why browser tab overload costs focus',
    excerpt:
      'Too many open tabs create repeated decisions. Spaces reduce that cost by making each workflow easier to reopen and close.',
    category: 'Productivity',
    readTime: '4 min read',
    date: '2026-05-31',
    metaDescription:
      'Understand why browser tab overload hurts focus and how tab spaces help reduce context switching.',
    sections: [
      [
        'Tabs become unresolved decisions',
        'Every open tab asks whether it still matters. Multiply that by dozens of tabs and the browser becomes a noisy task list.',
      ],
      [
        'Context switching has a setup cost',
        'When your research tabs, shopping tabs, personal tabs, and work tabs live together, switching tasks means mentally sorting the browser again.',
      ],
      [
        'Spaces create clean exits',
        'Saving a workflow into a space lets you close the current mess without losing the ability to return later.',
      ],
    ],
  },
  {
    slug: 'chrome-tab-groups-vs-tab-spaces',
    title: 'Chrome tab groups vs tab spaces',
    excerpt:
      'Tab groups are useful inside a session. Spaces are better when you need reusable, named workflows that survive context switches.',
    category: 'Browser Workflow',
    readTime: '6 min read',
    date: '2026-05-31',
    metaDescription:
      'Compare Chrome tab groups and tab spaces to decide how to organize reusable browser workflows.',
    sections: [
      [
        'Tab groups organize what is open now',
        'Chrome tab groups are useful for visually grouping related open tabs in the current browser window.',
      ],
      [
        'Spaces organize what you return to',
        'Spaces work at the workflow level. They help you reopen the right tabs later, even after you have closed the browser context.',
      ],
      [
        'Use both together',
        'The strongest setup is simple: use spaces to save workflows and tab groups to keep active sessions readable.',
      ],
    ],
  },
];

export const changeLog = [
  {
    version: 'Website refresh',
    date: '2026-05-31',
    items: ['React website structure', 'Articles section', 'SEO metadata', 'Legal and support pages'],
  },
  {
    version: 'Product baseline',
    date: '2025-11-01',
    items: ['Spaces', 'Tab groups', 'Pinned tabs', 'Sync messaging', 'Lifetime license'],
  },
];

export const routes = [
  '/',
  '/features/',
  '/pricing/',
  '/articles/',
  ...articles.map((article) => `/articles/${article.slug}/`),
  '/about-us/',
  '/contact-us/',
  '/help-centre/',
  '/privacy-policy/',
  '/terms-of-use/',
  '/refund-policy/',
  '/whats-new/',
];
