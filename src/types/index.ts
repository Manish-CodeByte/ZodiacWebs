export interface NavLink {
  name: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  idealFor: string;
  startingFrom?: string;
  icon: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'business' | 'restaurant' | 'ecommerce' | 'portfolio';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  tags: string[];
  isDemo: boolean;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  challenge?: string;
  solution?: string;
  accentColor?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
