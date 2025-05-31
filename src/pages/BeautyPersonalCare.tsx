
import React from 'react';
import Header from '@/components/Header';
import BeautyHeroSection from '@/components/beauty/BeautyHeroSection';
import BeautyHowItWorks from '@/components/beauty/BeautyHowItWorks';
import BeautyRevenueCalculator from '@/components/beauty/BeautyRevenueCalculator';
import BeautyCompetitionSection from '@/components/beauty/BeautyCompetitionSection';
import BeautyTestimonials from '@/components/beauty/BeautyTestimonials';
import BeautyPricing from '@/components/beauty/BeautyPricing';
import BeautyPDFDownload from '@/components/beauty/BeautyPDFDownload';
import BeautyFinalCTA from '@/components/beauty/BeautyFinalCTA';
import Footer from '@/components/Footer';

const BeautyPersonalCare = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <BeautyHeroSection />
        <BeautyHowItWorks />
        <BeautyRevenueCalculator />
        <BeautyCompetitionSection />
        <BeautyTestimonials />
        <BeautyPricing />
        <BeautyPDFDownload />
        <BeautyFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default BeautyPersonalCare;
