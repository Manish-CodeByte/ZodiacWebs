import React from 'react';
import { Hero } from '../components/home/Hero';
import { ValueProps } from '../components/home/ValueProps';
import { PortfolioSection } from '../components/portfolio/PortfolioSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { Process } from '../components/home/Process';
import { WhyUs } from '../components/home/WhyUs';
import { InstagramCtaBanner } from '../components/home/InstagramCtaBanner';
import { ContactSection } from '../components/contact/ContactSection';
import { SEO } from '../components/seo/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Turn Visitors Into Customers"
        description="Zodiac Webs builds fast, high-converting digital experiences for cafés, restaurants, e-commerce brands, startups, and professionals. Message us on Instagram to get started."
        canonical="/"
      />
      
      {/* 2. HERO */}
      <Hero />

      {/* 3. VALUE PILLARS */}
      <ValueProps />

      {/* 4. PORTFOLIO (#portfolio) */}
      <PortfolioSection />

      {/* 5. SERVICES (#services) */}
      <ServicesSection />

      {/* 6. PROCESS (#process) */}
      <Process />

      {/* 7. WHY ZODIAC WEBS (#why-us) */}
      <WhyUs />

      {/* 8. INSTAGRAM CTA BANNER */}
      <InstagramCtaBanner />

      {/* 9. CONTACT (#contact) */}
      <ContactSection />
    </div>
  );
};