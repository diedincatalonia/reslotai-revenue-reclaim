
import React from 'react';
import Header from '@/components/Header';
import TherapistHeroSection from '@/components/therapist/TherapistHeroSection';
import TherapistHowItWorks from '@/components/therapist/TherapistHowItWorks';
import TherapistRevenueCalculator from '@/components/therapist/TherapistRevenueCalculator';
import TherapistCompetitionSection from '@/components/therapist/TherapistCompetitionSection';
import TherapistTestimonials from '@/components/therapist/TherapistTestimonials';
import TherapistPricing from '@/components/therapist/TherapistPricing';
import TherapistPDFDownload from '@/components/therapist/TherapistPDFDownload';
import TherapistFinalCTA from '@/components/therapist/TherapistFinalCTA';
import Footer from '@/components/Footer';

const Therapist = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <TherapistHeroSection />
        <TherapistHowItWorks />
        <TherapistRevenueCalculator />
        <TherapistCompetitionSection />
        <TherapistTestimonials />
        <TherapistPricing />
        <TherapistPDFDownload />
        <TherapistFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Therapist;
