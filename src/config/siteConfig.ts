export const siteConfig = {
  name: 'Zodiac Webs',
  tagline: 'We Build. You Grow.',
  brandMessage: 'Your Vision. Our Creation.',
  description: 'Zodiac Webs designs and builds high-converting, lightning-fast websites for cafés, restaurants, local businesses, e-commerce brands, startups, and professionals.',
  url: import.meta.env.VITE_SITE_URL || 'https://zodiacwebs.com',
  logo: '/assets/logo.png',
  poster: '/assets/poster.jpg',
  
  // Single Config Requirements
  instagramHandle: 'zodiac.webs',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/zodiac.webs',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'hello@zodiacwebs.com',
  location: 'Global / Remote Studio · Operating Worldwide',
  
  navLinks: [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ],

  // Value Pillars
  valueProps: [
    {
      title: 'Modern & Responsive Websites',
      description: 'Pixel-perfect across desktops, tablets, and phones. Designed for seamless user engagement on any viewport.',
      icon: 'MonitorSmartphone'
    },
    {
      title: 'SEO-Friendly Designs',
      description: 'Structured, discoverable websites built with search visibility in mind.',
      icon: 'Search'
    },
    {
      title: 'Fast & Reliable Performance',
      description: 'Lightweight engineering focused on quick loading, stability, and excellent usability.',
      icon: 'Zap'
    },
    {
      title: 'Ongoing Support',
      description: 'Reliable assistance, improvements, and maintenance to keep your digital presence running smoothly.',
      icon: 'Headphones'
    }
  ],

  // 6 Compact Services
  services: [
    {
      id: 'business',
      title: 'Business Websites',
      description: 'Credibility-building, high-converting digital presence engineered for corporate firms and local service businesses.',
      icon: 'Briefcase'
    },
    {
      id: 'restaurant',
      title: 'Café & Restaurant Websites',
      description: 'Atmospheric digital dining experiences with visual menus, ambiance galleries, and direct table booking inquiries.',
      icon: 'UtensilsCrossed'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Stores',
      description: 'Frictionless, mobile-first digital storefronts optimized for browsing speed, product showcases, and fast checkout.',
      icon: 'ShoppingBag'
    },
    {
      id: 'portfolio',
      title: 'Portfolio & Personal Sites',
      description: 'Editorial-grade showcases for founders, architects, consultants, and creative professionals that establish authority.',
      icon: 'Layers'
    },
    {
      id: 'development',
      title: 'Modern & Responsive Development',
      description: 'Clean, modular engineering using React and Tailwind CSS for cross-device fluidity and sub-second paint times.',
      icon: 'Code2'
    },
    {
      id: 'support',
      title: 'SEO, Performance & Ongoing Support',
      description: 'Structured metadata, speed optimization, and proactive technical maintenance to ensure long-term stability.',
      icon: 'Headphones'
    }
  ],

  // 4-Step Process
  processSteps: [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand the business, target audience, goals, and project requirements.'
    },
    {
      step: '02',
      title: 'UI/UX Architecture',
      description: 'Develop user journeys, wireframes, and a refined dark-mode visual identity.'
    },
    {
      step: '03',
      title: 'High-Speed Development',
      description: 'Engineer responsive, accessible, high-performance web experiences.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Test, deploy, refine, and prepare the website for search visibility and growth.'
    }
  ],

  // Why Zodiac Webs
  whyUs: [
    {
      title: 'Craftsmanship Over Templates',
      description: 'We refuse to recycle generic drag-and-drop themes. Every site is tailored to your brand identity.'
    },
    {
      title: 'Zero Bloat',
      description: 'Clean modern code with zero unnecessary plugins, delivering sub-second load times.'
    },
    {
      title: 'Conversion-First',
      description: 'Every layout decision and CTA is strategically positioned to convert visitors into paying clients.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear deliverables, fixed milestone scopes, and honest timelines with zero surprise agency fees.'
    }
  ]
};

export const getInstagramDmUrl = () => {
  const handle = siteConfig.instagramHandle.replace('@', '').trim();
  return `https://ig.me/m/${handle}`;
};
