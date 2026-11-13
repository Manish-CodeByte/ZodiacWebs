import { ProjectItem } from '../types';

export const portfolioData: ProjectItem[] = [
  {
    id: 'apex-legal',
    slug: 'apex-legal-consulting',
    title: 'Apex Corporate & Legal Advisory',
    category: 'business',
    categoryLabel: 'Business Website',
    shortDesc: 'A high-authority corporate web presence with client consultation scheduling and interactive practice area filters.',
    fullDesc: 'Apex is an agency showcase demonstrating our approach to corporate authority, trust engineering, and executive lead generation. Designed with a deep obsidian canvas, subtle gold accents, and a frictionless booking workflow.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Lead Funnel'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/apex-legal',
    challenge: 'Corporate clients previously bounced due to dense, unreadable walls of legal text and confusing booking pathways on mobile.',
    solution: 'Engineered an interactive practice-area directory with instant search, clear partner credentials, and a 2-step consultation scheduling funnel that lifted conversion by 42%.',
    metrics: [
      { label: 'Initial Page Load', value: '0.48s' },
      { label: 'Mobile Performance', value: '99/100' },
      { label: 'Lighthouse Score', value: '98/100' }
    ],
    deliverables: [
      'Custom Practice Area Directory',
      'Encrypted Client Inquiry System',
      'Executive Partner Bios & Credential Showcase',
      'Automated Consultation Booking Interface'
    ],
    accentColor: '#FF7518'
  },
  {
    id: 'laura-espresso',
    slug: 'laura-artisan-cafe',
    title: "L'Aura Artisan Cafe & Roastery",
    category: 'restaurant',
    categoryLabel: 'Café & Food',
    shortDesc: 'Atmospheric digital dining experience with interactive allergen-filtered menu and one-touch reservation requests.',
    fullDesc: 'Engineered specifically for boutique hospitality, this showcase highlights mood-rich photography, mobile-first one-thumb menu navigation, instant WhatsApp/Instagram reservations, and embedded Google Maps integration.',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    tags: ['Interactive Menu', 'Reservation Gateway', 'Mobile First', 'Local SEO'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/laura-cafe',
    challenge: 'Diners struggled to view high-resolution menu items on phones and frequently called staff during peak dinner rush for opening hours and dietary queries.',
    solution: 'Built an interactive, categorized visual menu with allergen filters, one-tap GPS directions, and an instant table inquiry gateway.',
    metrics: [
      { label: 'Mobile Performance', value: '100%' },
      { label: 'Booking Friction', value: '1-Click Direct' },
      { label: 'Menu Interaction', value: 'Instant Filter' }
    ],
    deliverables: [
      'Visual Category Food & Beverage Menu',
      'Instant Table Reservation Flow',
      'Click-to-Call & GPS Location Direct Integration',
      'Instagram Story Feed Integration'
    ],
    accentColor: '#FFAD33'
  },
  {
    id: 'veloce-activewear',
    slug: 'veloce-performance-wear',
    title: 'Veloce Technical Activewear',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    shortDesc: 'High-speed DTC fashion storefront with smooth slide-over cart, size selector, and lightning checkout UI.',
    fullDesc: 'A demonstration of cutting-edge e-commerce performance. Featuring instant product filtering, variant swatch selection, dynamic inventory badges, and frictionless micro-animations built without heavy Shopify app bloat.',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    tags: ['E-Commerce UX', 'Slide-over Cart', 'Dynamic Filtering', 'Stripe Ready'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/veloce',
    challenge: 'Slow 4-second catalog loads and clunky multi-step checkouts were causing high cart abandonment on mobile devices.',
    solution: 'Re-architected the frontend in React with instant slide-over cart, real-time stock indicators, and single-click checkout pathways.',
    metrics: [
      { label: 'Cart Speed', value: 'Instant' },
      { label: 'Image Optimization', value: 'WebP / AVIF' },
      { label: 'Checkout Journey', value: '2-Step Minimal' }
    ],
    deliverables: [
      'Interactive Product Grid & Fast Filters',
      'Persistent Flyout Shopping Bag',
      'Mobile-Optimized Product Image Carousel',
      'Promotional Notification Bar & Discounts'
    ],
    accentColor: '#FF7518'
  },
  {
    id: 'kaelen-architecture',
    slug: 'kaelen-vance-architecture',
    title: 'Kaelen Vance Architectural Studio',
    category: 'portfolio',
    categoryLabel: 'Portfolios',
    shortDesc: 'Minimalist editorial gallery with full-screen project presentations, blueprints, and award showcases.',
    fullDesc: 'Crafted for visionary architects and designers, this portfolio experience utilizes bold typography, fluid layout transitions, and high-fidelity project case studies.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Editorial Layout', 'Case Study Deep-Dive', 'Minimalism', 'Fluid Motion'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/kaelen-arch',
    challenge: 'Standard portfolio grid templates failed to convey the premium, multi-million dollar scale of high-end architectural commissions.',
    solution: 'Engineered an editorial fullscreen case-study layout with floorplan interactive tabs and blueprint viewports that immediately establish authority.',
    metrics: [
      { label: 'Visual Hierarchy', value: 'Editorial Grade' },
      { label: 'Load Performance', value: '99/100' },
      { label: 'User Retention', value: 'High Engagement' }
    ],
    deliverables: [
      'Full-bleed Project Showcase Layouts',
      'Client Testimonials & Press Mentions',
      'Interactive Blueprint / Floorplan Tabs',
      'Direct Private Consultation Form'
    ],
    accentColor: '#FFAD33'
  },
  {
    id: 'solaria-cleantech',
    slug: 'solaria-energy-solutions',
    title: 'Solaria Energy Technologies',
    category: 'business',
    categoryLabel: 'Business',
    shortDesc: 'Next-generation clean energy platform featuring interactive ROI savings estimator and commercial inquiry funnel.',
    fullDesc: 'A tech-forward corporate agency template showcasing how complex technical data can be rendered with crystal-clear visual hierarchy, animated metric counters, and targeted conversion triggers.',
    heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Interactive Calculator', 'B2B Sales Funnel', 'High Impact'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/solaria',
    challenge: 'Prospects struggled to quantify savings and left the site without submitting commercial solar project inquiries.',
    solution: 'Designed an interactive commercial energy ROI calculator allowing prospects to input square footage and receive instant ballpark numbers before requesting a proposal.',
    metrics: [
      { label: 'Interactive Widgets', value: 'Instant Calc' },
      { label: 'SEO Readiness', value: 'Schema Ready' },
      { label: 'Speed Index', value: '0.6s' }
    ],
    deliverables: [
      'Commercial Savings Calculator',
      'Interactive Energy Product Comparison',
      'Technical Whitepaper Download Gates',
      'Multi-Location Service Coverage Map'
    ],
    accentColor: '#FF7518'
  },
  {
    id: 'roasted-bean',
    slug: 'roasted-bean-club',
    title: 'The Roasted Bean Coffee Subscription',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    shortDesc: 'Direct-to-consumer artisanal coffee subscription portal with roast profiling and recurrent delivery choices.',
    fullDesc: 'A warm, engaging e-commerce website designed for high customer lifetime value (LTV). Includes custom coffee taste quiz, flexible subscription frequency selections, and customer portal previews.',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Subscription Funnel', 'Flavor Quiz', 'Custom UX', 'Mobile First'],
    isDemo: true,
    liveUrl: 'https://zodiacwebs.com/demo/roasted-bean',
    challenge: 'First-time coffee buyers felt overwhelmed by bean origin terminology and dropped off before subscribing.',
    solution: 'Introduced an intuitive 3-question interactive taste finder that matches beans to consumer palette and prefills the subscription cart.',
    metrics: [
      { label: 'Onboarding Flow', value: '3 Questions' },
      { label: 'Bounce Rate Target', value: '< 25%' },
      { label: 'Conversion Lift', value: '+34%' }
    ],
    deliverables: [
      'Interactive Coffee Roast Quiz',
      'Recurring Subscription Configurator',
      'Direct Customer Review Gallery',
      'Integrated Secure Payment Gateway'
    ],
    accentColor: '#FFAD33'
  }
];
