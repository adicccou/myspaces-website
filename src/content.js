export const site = {
  name: 'MySpaces',
  tagline: 'Browser workspace manager for people who keep too many tabs open.',
  origin: 'https://www.myspaces.app',
  supportEmail: 'dev.oilor@gmail.com',
  updatedAt: '2026-06-03',
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
    text: 'Build each space with browser-native tab groups and pinned tabs so every workflow opens organized and ready to use.',
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
    features: ['3 spaces', 'Grouping support', 'Pinned Tabs support', 'Sync for 3 spaces'],
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
      'Grouping support',
      'Pinned Tabs support',
      'Sync between browsers',
      'Sync between computers',
    ],
  },
];

export const pricingComparison = [
  ['Number of spaces', '3 spaces', 'Unlimited spaces'],
  ['Grouping support', 'Included', 'Included'],
  ['Pinned Tabs support', 'Included', 'Included'],
  ['Browser sync', '3-space sync', 'Included'],
  ['Computer sync', '3-space sync', 'Included'],
  ['Future updates', 'Included', 'Included'],
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
      'MySpaces is available through the Chrome Web Store and Firefox Add-ons, with support for Chromium-based browsers like Chrome, Edge, Opera, and Brave, plus Firefox-based browsers through the Firefox store version.',
  },
  {
    question: 'What is included in the free plan?',
    answer:
      'The free plan includes 3 spaces, grouping support, Pinned Tabs support, and sync for 3 spaces.',
  },
  {
    question: 'What additional features are included in Lifetime?',
    answer:
      'The Lifetime plan includes unlimited spaces, grouping support, Pinned Tabs support, plus sync between browsers and computers for a one-time fee.',
  },
  {
    question: 'How does MySpaces protect privacy?',
    answer:
      'MySpaces is built around organizing browser tabs, not collecting data. We do not collect your browsing history, track your behavior for ads, or build usage profiles. Your tab organization stays local unless you choose sync, and even then only the minimum account and space data needed for sync is used.',
  },
  {
    question: 'How do I purchase the Lifetime plan?',
    answer:
      'Use the Buy Lifetime License button on the pricing page. After purchase, your license will be sent to your email, along with the instructions you need to activate it.',
  },
];

export const changeLog = [
  {
    version: 'Version 1.3.7',
    date: '2026-06-03',
    items: ['Added drag and move feature', 'Fixed various bugs', 'Fixed Google Auth bug'],
  },
];

export const routes = [
  '/',
  '/pricing/',
  '/articles/',
  '/about-us/',
  '/contact-us/',
  '/help-centre/',
  '/privacy-policy/',
  '/terms-of-use/',
  '/whats-new/',
];
