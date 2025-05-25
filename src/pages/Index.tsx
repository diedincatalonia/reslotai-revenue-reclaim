
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import RevenueCalculator from '@/components/RevenueCalculator';
import ResultsSection from '@/components/ResultsSection';
import PainPointSection from '@/components/PainPointSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <RevenueCalculator />
        <ResultsSection />
        <PainPointSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
