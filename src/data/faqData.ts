export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'process' | 'technical' | 'support';
}

export const faqData: FAQItem[] = [
  {
    category: 'general',
    question: 'How long does a typical website build take?',
    answer: 'Most standard business, cafe, or portfolio websites are completed and launched within 2 to 3 weeks. E-commerce platforms and complex custom web applications typically require 4 to 6 weeks, depending on the scope of custom integrations and product catalog size.'
  },
  {
    category: 'general',
    question: 'What do I need to provide to get started?',
    answer: 'To get started, we need your core business details, existing branding assets (like your logo and color palette if you have one), and an outline of your primary goals. If you do not have content or copywriting finalized, our team can help structure and guide your content strategy.'
  },
  {
    category: 'process',
    question: 'What is the step-by-step workflow with Zodiac Webs?',
    answer: 'We follow a four-phase agile process: 01. Discovery & Strategy, 02. UI/UX Architecture & Wireframing, 03. Custom Engineering & Quality Testing, and 04. Launch, SEO Setup & Continuous Growth Support. You will have visibility at every single milestone.'
  },
  {
    category: 'technical',
    question: 'Why do you build with React and modern web technologies instead of basic page builders?',
    answer: 'Standard page builders like Wix or bloated WordPress templates frequently suffer from slow load times, security vulnerabilities, and messy code. We build with modern React, Tailwind CSS, and optimized static/server architectures to ensure sub-second loading speeds, immaculate security, customizability, and top-tier SEO rankings.'
  },
  {
    category: 'process',
    question: 'Can I request custom features or specific integrations?',
    answer: 'Absolutely. Whether you need custom reservation engines for restaurants, Stripe payment checkouts, CRM integrations, interactive calculators, or custom API feeds, we engineer tailored solutions according to your exact business requirements.'
  },
  {
    category: 'support',
    question: 'What happens after my website goes live?',
    answer: 'We provide post-launch warranty support with every project to ensure zero hiccups. We also offer ongoing maintenance retainers covering security audits, performance monitoring, routine backups, technical SEO updates, and direct priority developer access via Instagram DM and dedicated channels.'
  }
];
