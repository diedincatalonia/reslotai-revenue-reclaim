
import React from 'react';
import Header from '@/components/Header';
import PetHeroSection from '@/components/pet/PetHeroSection';
import PetHowItWorks from '@/components/pet/PetHowItWorks';
import PetRevenueCalculator from '@/components/pet/PetRevenueCalculator';
import PetCompetitionSection from '@/components/pet/PetCompetitionSection';
import PetTestimonials from '@/components/pet/PetTestimonials';
import PetPricing from '@/components/pet/PetPricing';
import PetPDFDownload from '@/components/pet/PetPDFDownload';
import PetFinalCTA from '@/components/pet/PetFinalCTA';
import Footer from '@/components/Footer';

const PetServices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <PetHeroSection />
        <PetHowItWorks />
        <PetRevenueCalculator />
        <PetCompetitionSection />
        <PetTestimonials />
        <PetPricing />
        <PetPDFDownload />
        <PetFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default PetServices;
