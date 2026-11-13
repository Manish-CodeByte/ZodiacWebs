import React from 'react';
import { Hero } from '../components/home/Hero';
import { ValueProps } from '../components/home/ValueProps';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyUs } from '../components/home/WhyUs';
import { Process } from '../components/home/Process';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CtaBanner } from '../components/home/CtaBanner';
import { SEO } from '../components/seo/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Turn Visitors Into Customers"
        description="We craft fast, modern, and conversion-focused websites that help ambitious brands stand out, build trust, and grow online."
        canonical="/"
      />
      <Hero />
      <ValueProps />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <FeaturedProjects />
      <CtaBanner />
    </div>
  );
};
