
import React from 'react';
import Header from '@/components/Header';
import AutoHeroSection from '@/components/auto/AutoHeroSection';
import AutoHowItWorks from '@/components/auto/AutoHowItWorks';
import AutoRevenueCalculator from '@/components/auto/AutoRevenueCalculator';
import AutoRoleSpecificSection from '@/components/auto/AutoRoleSpecificSection';
import AutoCompetitionSection from '@/components/auto/AutoCompetitionSection';
import AutoTestimonials from '@/components/auto/AutoTestimonials';
import AutoPricing from '@/components/auto/AutoPricing';
import AutoPDFDownload from '@/components/auto/AutoPDFDownload';
import Footer from '@/components/Footer';

const AutoServices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <AutoHeroSection />
        <AutoHowItWorks />
        <AutoRevenueCalculator />
        <AutoRoleSpecificSection />
        <AutoCompetitionSection />
        <AutoTestimonials />
        <AutoPricing />
        <AutoPDFDownload />
      </main>
      <Footer />
    </div>
  );
};

export default AutoServices;
