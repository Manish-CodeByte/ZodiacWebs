export interface PricingOption {
  id: string;
  name: string;
  description?: string;
  basePrice: number; // in INR (₹)
}

export interface PricingConfig {
  currency: string;
  currencySymbol: string;
  isIllustrative: boolean;
  websiteTypes: Record<string, { label: string; basePrice: number; description: string }>;
  scopes: Record<string, { label: string; multiplier: number; description: string; turnaround: string }>;
  addons: { id: string; name: string; price: number; description: string }[];
  timelines: Record<string, { label: string; multiplier: number; note: string }>;
}

export const pricingConfig: PricingConfig = {
  currency: 'INR',
  currencySymbol: '₹',
  isIllustrative: true, // Transparently labeled as illustrative ballpark estimate
  websiteTypes: {
    business: {
      label: 'Business Website',
      basePrice: 24999,
      description: 'Credibility, lead generation, service architecture for established firms'
    },
    restaurant: {
      label: 'Restaurant / Cafe Website',
      basePrice: 19999,
      description: 'Digital visual menu, atmosphere gallery, direct table booking inquiry'
    },
    ecommerce: {
      label: 'E-Commerce Website',
      basePrice: 39999,
      description: 'Product catalog, cart, mobile-first checkout, order inquiry flow'
    },
    portfolio: {
      label: 'Portfolio Website',
      basePrice: 14999,
      description: 'Editorial showcase, case study narratives, personal branding'
    },
    custom: {
      label: 'Custom Web Application',
      basePrice: 49999,
      description: 'Bespoke web platform, custom workflows, API integrations'
    }
  },
  scopes: {
    starter: {
      label: 'Starter Scope',
      multiplier: 1.0,
      description: '1–4 essential pages, core mobile responsiveness, contact integration',
      turnaround: '10–14 days'
    },
    growth: {
      label: 'Growth Scope',
      multiplier: 1.45,
      description: '5–10 structured pages, advanced lead funnel, content architecture',
      turnaround: '2–3 weeks'
    },
    advanced: {
      label: 'Advanced Scope',
      multiplier: 2.1,
      description: '10+ pages, custom interactive widgets, high-conversion layouts',
      turnaround: '3–5 weeks'
    }
  },
  addons: [
    {
      id: 'seo',
      name: 'SEO & Schema Setup',
      price: 4999,
      description: 'Structured JSON-LD schema, sitemap, meta tags, search index readiness'
    },
    {
      id: 'cms',
      name: 'CMS Integration',
      price: 6999,
      description: 'Easy-to-use content management interface for blog/news/updates'
    },
    {
      id: 'booking',
      name: 'Booking / Enquiry System',
      price: 3999,
      description: 'Direct interactive appointment or table reservation inquiry flow'
    },
    {
      id: 'ecommerce-flow',
      name: 'E-Commerce Integration',
      price: 8999,
      description: 'Stripe / Razorpay payment gateway, shopping cart, order notifications'
    },
    {
      id: 'animations',
      name: 'Advanced Animations',
      price: 5499,
      description: 'Bespoke micro-interactions, scroll reveal choreographies'
    },
    {
      id: 'maintenance',
      name: 'Maintenance Package',
      price: 4499,
      description: 'First 3 months priority technical support, security audits & updates'
    }
  ],
  timelines: {
    flexible: {
      label: 'Flexible Pace',
      multiplier: 0.95,
      note: 'Standard queue, ideal for scheduled product launches'
    },
    standard: {
      label: 'Standard Pace',
      multiplier: 1.0,
      note: 'Our standard milestone delivery schedule'
    },
    priority: {
      label: 'Priority Sprint',
      multiplier: 1.25,
      note: 'Expedited development sprint with priority milestone reviews'
    }
  }
};
