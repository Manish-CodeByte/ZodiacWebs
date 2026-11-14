export interface PortfolioProject {
  id: string;
  title: string;
  category: 'business' | 'restaurant' | 'ecommerce' | 'portfolio';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  badge: 'DEMO' | 'LIVE';
  tags: string[];
  challenge: string;
  solution: string;
  iconName: string;
  accentGradient: string;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 'apex-legal',
    title: 'Apex Advisory Partners',
    category: 'business',
    categoryLabel: 'Business',
    shortDesc: 'A high-authority corporate web presence with client consultation scheduling and practice area filters.',
    fullDesc: 'Apex is a corporate showcase demonstrating authority, trust engineering, and executive lead generation. Designed with a deep obsidian canvas, subtle gold accents, and a frictionless booking workflow.',
    badge: 'DEMO',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Lead Funnel'],
    challenge: 'Corporate clients previously bounced due to dense, unreadable walls of text and confusing inquiry pathways on mobile.',
    solution: 'Engineered an interactive practice-area directory with instant search, clear partner credentials, and a 2-step consultation scheduling funnel.',
    iconName: 'Briefcase',
    accentGradient: 'from-[#FF7518]/20 via-[#1A1A1A] to-[#0A0A0A]'
  },
  {
    id: 'laura-espresso',
    title: "L'Aura Artisan Café & Roastery",
    category: 'restaurant',
    categoryLabel: 'Café & Food',
    shortDesc: 'Atmospheric digital dining experience with interactive allergen-filtered menu and one-touch reservation requests.',
    fullDesc: 'Engineered specifically for boutique hospitality, this showcase highlights mood-rich visual pacing, mobile-first one-thumb menu navigation, and instant Instagram / WhatsApp reservation inquiries.',
    badge: 'DEMO',
    tags: ['Interactive Menu', 'Reservation Gateway', 'Mobile First', 'Local SEO'],
    challenge: 'Diners struggled to view high-resolution menu items on phones and called staff during peak rush for opening hours and dietary queries.',
    solution: 'Built an interactive visual menu with allergen filters, one-tap GPS directions, and an instant table inquiry gateway.',
    iconName: 'UtensilsCrossed',
    accentGradient: 'from-[#FFAD33]/20 via-[#1A1A1A] to-[#0A0A0A]'
  },
  {
    id: 'veloce-activewear',
    title: 'Veloce Technical Activewear',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    shortDesc: 'High-speed DTC fashion storefront with smooth slide-over cart, size selector, and lightning checkout UI.',
    fullDesc: 'A demonstration of cutting-edge e-commerce performance. Featuring instant product filtering, variant swatch selection, dynamic inventory badges, and frictionless micro-interactions.',
    badge: 'DEMO',
    tags: ['E-Commerce UX', 'Slide-over Cart', 'Dynamic Filtering', 'Stripe Ready'],
    challenge: 'Slow 4-second catalog loads and clunky multi-step checkouts were causing high cart abandonment on mobile devices.',
    solution: 'Re-architected the frontend in React with instant slide-over cart, real-time stock indicators, and single-click checkout pathways.',
    iconName: 'ShoppingBag',
    accentGradient: 'from-[#FF7518]/25 via-[#1A1A1A] to-[#0A0A0A]'
  },
  {
    id: 'kaelen-architecture',
    title: 'Kaelen Vance Architectural Studio',
    category: 'portfolio',
    categoryLabel: 'Portfolios',
    shortDesc: 'Minimalist editorial gallery with full-screen project presentations, blueprints, and award showcases.',
    fullDesc: 'Crafted for visionary architects and designers, this portfolio experience utilizes bold typography, fluid layout transitions, and high-fidelity project case studies.',
    badge: 'DEMO',
    tags: ['Editorial Layout', 'Case Study Deep-Dive', 'Minimalism', 'Fluid Motion'],
    challenge: 'Standard portfolio grid templates failed to convey the premium scale of high-end architectural commissions.',
    solution: 'Engineered an editorial fullscreen case-study layout with floorplan interactive tabs and blueprint viewports that establish immediate authority.',
    iconName: 'Layers',
    accentGradient: 'from-[#FFAD33]/25 via-[#1A1A1A] to-[#0A0A0A]'
  },
  {
    id: 'solaria-cleantech',
    title: 'Solaria Energy Technologies',
    category: 'business',
    categoryLabel: 'Business',
    shortDesc: 'Next-generation clean energy platform featuring interactive ROI savings estimator and commercial inquiry funnel.',
    fullDesc: 'A tech-forward corporate agency template showcasing how complex technical data can be rendered with crystal-clear visual hierarchy, animated metric counters, and targeted conversion triggers.',
    badge: 'DEMO',
    tags: ['React', 'Interactive Calculator', 'B2B Sales Funnel', 'High Impact'],
    challenge: 'Prospects struggled to quantify savings and left the site without submitting commercial project inquiries.',
    solution: 'Designed an interactive commercial energy ROI calculator allowing prospects to input square footage and receive instant ballpark numbers before requesting a proposal.',
    iconName: 'Zap',
    accentGradient: 'from-[#FF7518]/20 via-[#1A1A1A] to-[#0A0A0A]'
  },
  {
    id: 'roasted-bean',
    title: 'The Roasted Bean Coffee Subscription',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    shortDesc: 'Direct-to-consumer artisanal coffee subscription portal with roast profiling and recurrent delivery choices.',
    fullDesc: 'A warm, engaging e-commerce website designed for high customer lifetime value (LTV). Includes custom coffee taste quiz, flexible subscription frequency selections, and customer portal previews.',
    badge: 'DEMO',
    tags: ['Subscription Funnel', 'Flavor Quiz', 'Custom UX', 'Mobile First'],
    challenge: 'First-time coffee buyers felt overwhelmed by bean origin terminology and dropped off before subscribing.',
    solution: 'Introduced an intuitive 3-question interactive taste finder that matches beans to consumer palette and prefills the subscription cart.',
    iconName: 'Coffee',
    accentGradient: 'from-[#FFAD33]/20 via-[#1A1A1A] to-[#0A0A0A]'
  }
];
