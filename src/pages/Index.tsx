
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointSection from '@/components/PainPointSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import RevenueCalculator from '@/components/RevenueCalculator';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import FinalHeroSection from '@/components/FinalHeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <PainPointSection />
        <HowItWorksSection />
        <RevenueCalculator />
        <ResultsSection />
        <PricingSection />
        <FinalHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
