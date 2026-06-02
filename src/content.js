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
  '/about-us/',
  '/contact-us/',
  '/help-centre/',
  '/privacy-policy/',
  '/terms-of-use/',
  '/refund-policy/',
  '/whats-new/',
];
