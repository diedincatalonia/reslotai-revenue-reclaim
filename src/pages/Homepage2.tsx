
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointSection from '@/components/PainPointSection';
import GeneratorSection from '@/components/homepage2/GeneratorSection';
import Homepage2RevenueCalculator from '@/components/homepage2/Homepage2RevenueCalculator';
import DataInsightsSection from '@/components/homepage2/DataInsightsSection';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/homepage2/FAQSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/homepage2/ChatBot';

const Homepage2 = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HeroSection />
        <GeneratorSection />
        <PainPointSection />
        <Homepage2RevenueCalculator />
        <DataInsightsSection />
        <ResultsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Homepage2;
