export const siteConfig = {
  name: 'Zodiac Webs',
  tagline: 'We Build. You Grow.',
  brandMessage: 'Your Vision. Our Creation.',
  description: 'Zodiac Webs crafts high-performance, conversion-engineered websites for businesses, restaurants, cafes, e-commerce, and personal brands.',
  url: import.meta.env.VITE_SITE_URL || 'https://zodiacwebs.com',
  logo: '/assets/logo.png',
  poster: '/assets/poster.jpg',
  contact: {
    instagramHandle: import.meta.env.VITE_INSTAGRAM_HANDLE || '@zodiacwebs',
    instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/zodiacwebs',
    instagramDmUrl: import.meta.env.VITE_INSTAGRAM_DM_URL || 'https://ig.me/m/zodiacwebs',
    email: import.meta.env.VITE_CONTACT_EMAIL || '',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '',
    phoneDisplay: '',
    location: 'Remote Studio — Serving Ambitious Brands Worldwide',
    workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM (EST / UTC-5)',
    turnaroundTime: 'Fastest response via Instagram DM'
  },
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/zodiacwebs',
    instagramHandle: import.meta.env.VITE_INSTAGRAM_HANDLE || '@zodiacwebs',
    instagramDm: import.meta.env.VITE_INSTAGRAM_DM_URL || 'https://ig.me/m/zodiacwebs',
  },
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ],
  servicesSummary: [
    'Business Websites',
    'Cafe & Restaurant Websites',
    'E-commerce Stores',
    'Portfolio & Personal Websites',
    'Modern & Responsive Development',
    'SEO-Friendly Designs',
    'Fast & Reliable Performance',
    'Ongoing Website Support'
  ],
  valueProps: [
    {
      title: 'Modern & Responsive Websites',
      description: 'Pixel-perfect across desktops, tablets, and phones. Designed for seamless user engagement on any viewport.',
      icon: 'Globe'
    },
    {
      title: 'SEO-Friendly Designs',
      description: 'Engineered with clean semantic markup, fast indexing, structured data, and high-visibility search foundations.',
      icon: 'Search'
    },
    {
      title: 'Fast & Reliable Performance',
      description: 'Sub-second loading times, optimized asset delivery, and high Core Web Vitals scores that keep visitors hooked.',
      icon: 'Zap'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, technical troubleshooting, and performance tuning so you can focus on growth.',
      icon: 'Headphones'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      description: 'We analyze your target market, competitors, and growth objectives to plan a high-conversion digital blueprint.'
    },
    {
      step: '02',
      title: 'UI/UX Craft & Architecture',
      description: 'Sleek dark-mode aesthetics, intuitive buyer journeys, and responsive wireframes built specifically for your audience.'
    },
    {
      step: '03',
      title: 'High-Velocity Development',
      description: 'Clean, modern code built with React, Vite, and Tailwind CSS. Thoroughly tested for speed, security, and responsiveness.'
    },
    {
      step: '04',
      title: 'Launch & Growth Support',
      description: 'Domain connection, SEO verification, analytics setup, and ongoing proactive maintenance for continuous growth.'
    }
  ]
};

export const getInstagramDmUrl = () => {
  if (siteConfig.contact.instagramDmUrl) {
    return siteConfig.contact.instagramDmUrl;
  }
  const cleanHandle = siteConfig.contact.instagramHandle.replace('@', '').trim();
  return `https://ig.me/m/${cleanHandle}`;
};

export const getWhatsAppUrl = (customMessage?: string) => {
  if (!siteConfig.contact.whatsappNumber) {
    return getInstagramDmUrl();
  }
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(customMessage || "Hello Zodiac Webs! I'm interested in building a website with you.");
  return `https://wa.me/${number}?text=${text}`;
};
