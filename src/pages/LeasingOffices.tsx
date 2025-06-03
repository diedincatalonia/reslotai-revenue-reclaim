
import React from 'react';
import Header from '@/components/Header';
import LeasingHeroSection from '@/components/leasing/LeasingHeroSection';
import LeasingHowItWorks from '@/components/leasing/LeasingHowItWorks';
import LeasingRevenueCalculator from '@/components/leasing/LeasingRevenueCalculator';
import LeasingCompetitionSection from '@/components/leasing/LeasingCompetitionSection';
import LeasingTestimonials from '@/components/leasing/LeasingTestimonials';
import LeasingPricing from '@/components/leasing/LeasingPricing';
import LeasingPDFDownload from '@/components/leasing/LeasingPDFDownload';
import LeasingFinalCTA from '@/components/leasing/LeasingFinalCTA';
import Footer from '@/components/Footer';

const LeasingOffices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <LeasingHeroSection />
        <LeasingHowItWorks />
        <LeasingRevenueCalculator />
        <LeasingCompetitionSection />
        <LeasingTestimonials />
        <LeasingPricing />
        <LeasingPDFDownload />
        <LeasingFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LeasingOffices;
