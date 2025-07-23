import React from 'react';
import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import CategorySection from '@/components/ui/category-section';
import FeaturesSection from '@/components/ui/features-section';
import CtaSection from '@/components/ui/cta-section';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;