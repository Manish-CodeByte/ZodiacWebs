import React from 'react';
import BackgroundOrbs from './components/BackgroundOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF6B00] selection:text-white overflow-x-hidden">
      {/* Dynamic Background Floating Orbs */}
      <BackgroundOrbs />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services />

        {/* Section 3: Why Us */}
        <WhyUs />

        {/* Section 4: Work */}
        <Work />

        {/* Section 5: Contact */}
        <Contact />
      </main>

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}
