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
  {
    question: 'How do I install the MySpaces browser extension?',
    answer:
      'Open the MySpaces listing in the Chrome Web Store or Firefox Add-ons, choose the browser option, and follow the store installation prompt. Once installed, open the MySpaces extension from your browser toolbar or extensions menu. If you do not see it, check the browser extensions menu and pin MySpaces for quicker access.',
  },
  {
    question: 'How do I create my first space?',
    answer:
      'Open MySpaces and create a space for one clear context, such as a client, course, or personal planning. Give it a recognizable name, add the tabs that belong to that activity, and save the setup. Keep unrelated work in separate spaces so it is easier to return to the right browser context later.',
  },
  {
    question: 'What is a space in MySpaces?',
    answer:
      'A space is a named, reusable browser workspace made from a set of tabs for a particular task or context. Examples include a work project, a class, trip planning, research, or personal admin. MySpaces helps you save and reopen those tab setups instead of searching through one long mixed window.',
  },
  {
    question: 'How do I reopen a saved space?',
    answer:
      'Open MySpaces from your browser toolbar and select the saved space you want to return to. MySpaces restores the tabs associated with that workspace. The exact window and tab behavior can depend on your browser and current session.',
  },
  {
    question: 'Can I use MySpaces with browser tab groups?',
    answer:
      'Yes. MySpaces supports browser tab groups as part of an active browsing session. A space is the reusable workspace you save and return to; tab groups help visually organize related tabs within the browser.',
  },
  {
    question: 'Can I keep important tabs pinned?',
    answer:
      'Yes. MySpaces supports pinned tabs. Pin recurring tools such as email or a calendar when you want them close at hand. Pinned-tab behavior is controlled by the browser and can vary between browser versions.',
  },
  {
    question: 'How many spaces can I create?',
    answer:
      'The Free plan includes up to 3 spaces. The Lifetime plan includes unlimited spaces. See the MySpaces pricing page for the current plan details.',
  },
  {
    question: 'Does MySpaces sync my spaces between devices?',
    answer:
      'MySpaces offers sync for saved spaces. The Free plan includes sync for up to 3 spaces; Lifetime includes sync between supported browsers and computers. Sync requires the relevant account or sync setup in MySpaces. It does not sync browser cookies, passwords, or website sessions.',
  },
  {
    question: 'Why are my spaces not appearing on another computer?',
    answer:
      'Check that you have signed in or completed the sync setup on both devices, that both are online, and that you are using the same MySpaces account. Confirm that sync is available for your plan and allow a short time for changes to appear. If the issue continues, contact support with your browser name and version and a description of what you expected to sync.',
  },
  {
    question: 'Does MySpaces sync passwords, cookies, or logged-in sessions?',
    answer:
      'No. MySpaces sync is for workspace information such as saved spaces, website URLs, and tab structure. Browser cookies, passwords, cache, and logged-in website sessions remain managed by your browser and are not part of MySpaces space sync.',
  },
  {
    question: 'Is MySpaces available for Firefox?',
    answer:
      'Yes. MySpaces is available through Firefox Add-ons. Install the Firefox version from its official add-ons listing. Some browser capabilities can differ between Firefox and Chromium-based browsers.',
  },
  {
    question: 'Which browsers can I use with MySpaces?',
    answer:
      'MySpaces is available for Chrome and Firefox, and supports compatible Chromium-based browsers including Edge, Brave, and Opera. Availability and some browser-specific behavior depend on each browser and its extension store.',
  },
  {
    question: 'I cannot see MySpaces in my toolbar. What should I do?',
    answer:
      'Open your browser extensions menu and look for MySpaces. Pin it to the toolbar if your browser offers that option. If it is missing from the extensions list, confirm that installation completed in the correct browser profile and reinstall it from the official extension store if needed.',
  },
  {
    question: 'A saved tab does not reopen. How can I troubleshoot it?',
    answer:
      'Check that the saved address is still valid and that your browser can open the site directly. Some sites block extension-driven opening or require you to sign in again. Update MySpaces and your browser, then try reopening the space. Contact support if the problem continues and include the browser version and steps to reproduce it.',
  },
  {
    question: 'Will MySpaces restore my website login sessions?',
    answer:
      'MySpaces saves workspace tabs and their website addresses; it does not save website passwords or authentication sessions. Whether a site remains signed in depends on that site and your browser cookies.',
  },
  {
    question: 'What happens if I uninstall MySpaces?',
    answer:
      'Uninstalling removes the extension from that browser. Before uninstalling, make sure any information you need is synced or otherwise available to you. If you need help recovering spaces or understanding what is stored, contact MySpaces support.',
  },
  {
    question: 'How do I get a refund or help with a Lifetime purchase?',
    answer:
      'For a missing license, activation issue, billing question, or refund request, email support with the purchase email and order details. Do not include passwords or payment card numbers. Purchase terms and refund handling are subject to the checkout provider and applicable terms.',
  },
  {
    question: 'How do I contact MySpaces support?',
    answer:
      `Email ${site.supportEmail} for installation, sync, billing, license, or privacy questions. Include your browser and version, your MySpaces plan, and the steps you tried. Never send passwords or other secret credentials.`,
  },
  {
    question: 'Does MySpaces collect my browsing history?',
    answer:
      'MySpaces is designed to organize saved browser workspaces, not to track browsing for advertising. Workspace data stays in your browser unless you choose to use sync. For details about local data, optional sync, account information, and deletion, read the MySpaces Privacy Policy.',
  },
  {
    question: 'Is MySpaces free to use?',
    answer:
      'Yes. MySpaces has a free plan with up to 3 spaces, grouping and pinned-tab support, and sync for 3 spaces. The optional Lifetime plan adds unlimited spaces and sync between supported browsers and computers for a one-time purchase.',
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
