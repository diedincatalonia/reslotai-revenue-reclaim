
import React from 'react';
import Header from '@/components/Header';
import AutomotiveDetailingHeroSection from '@/components/automotive-detailing/AutomotiveDetailingHeroSection';
import AutomotiveDetailingHowItWorks from '@/components/automotive-detailing/AutomotiveDetailingHowItWorks';
import AutomotiveDetailingRevenueCalculator from '@/components/automotive-detailing/AutomotiveDetailingRevenueCalculator';
import AutomotiveDetailingCompetitionSection from '@/components/automotive-detailing/AutomotiveDetailingCompetitionSection';
import AutomotiveDetailingTestimonials from '@/components/automotive-detailing/AutomotiveDetailingTestimonials';
import AutomotiveDetailingPricing from '@/components/automotive-detailing/AutomotiveDetailingPricing';
import AutomotiveDetailingPDFDownload from '@/components/automotive-detailing/AutomotiveDetailingPDFDownload';
import AutomotiveDetailingFinalCTA from '@/components/automotive-detailing/AutomotiveDetailingFinalCTA';
import Footer from '@/components/Footer';

const AutomotiveDetailing = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <AutomotiveDetailingHeroSection />
        <AutomotiveDetailingHowItWorks />
        <AutomotiveDetailingRevenueCalculator />
        <AutomotiveDetailingCompetitionSection />
        <AutomotiveDetailingTestimonials />
        <AutomotiveDetailingPricing />
        <AutomotiveDetailingPDFDownload />
        <AutomotiveDetailingFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AutomotiveDetailing;
