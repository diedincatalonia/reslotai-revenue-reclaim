
import React from 'react';
import Header from '@/components/Header';
import LegalHeroSection from '@/components/legal/LegalHeroSection';
import LegalHowItWorks from '@/components/legal/LegalHowItWorks';
import LegalRevenueCalculator from '@/components/legal/LegalRevenueCalculator';
import LegalCompetitionSection from '@/components/legal/LegalCompetitionSection';
import LegalTestimonials from '@/components/legal/LegalTestimonials';
import LegalPricing from '@/components/legal/LegalPricing';
import LegalPDFDownload from '@/components/legal/LegalPDFDownload';
import LegalFinalCTA from '@/components/legal/LegalFinalCTA';
import Footer from '@/components/Footer';

const LegalServices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <LegalHeroSection />
        <LegalHowItWorks />
        <LegalRevenueCalculator />
        <LegalCompetitionSection />
        <LegalTestimonials />
        <LegalPricing />
        <LegalPDFDownload />
        <LegalFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LegalServices;
