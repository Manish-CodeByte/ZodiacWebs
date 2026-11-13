import React from 'react';
import { Hero } from '../components/home/Hero';
import { ValueProps } from '../components/home/ValueProps';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyUs } from '../components/home/WhyUs';
import { Process } from '../components/home/Process';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
