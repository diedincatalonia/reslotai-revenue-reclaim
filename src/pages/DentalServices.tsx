
import React from 'react';
import Header from '@/components/Header';
import DentalHeroSection from '@/components/dental/DentalHeroSection';
import DentalHowItWorks from '@/components/dental/DentalHowItWorks';
import DentalRevenueCalculator from '@/components/dental/DentalRevenueCalculator';
import DentalCompetitionSection from '@/components/dental/DentalCompetitionSection';
import DentalTestimonials from '@/components/dental/DentalTestimonials';
import DentalPricing from '@/components/dental/DentalPricing';
import DentalPDFDownload from '@/components/dental/DentalPDFDownload';
import DentalFinalCTA from '@/components/dental/DentalFinalCTA';
import Footer from '@/components/Footer';

const DentalServices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <DentalHeroSection />
        <DentalHowItWorks />
        <DentalRevenueCalculator />
        <DentalCompetitionSection />
        <DentalTestimonials />
        <DentalPricing />
        <DentalPDFDownload />
        <DentalFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DentalServices;
