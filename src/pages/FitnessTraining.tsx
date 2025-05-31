
import React from 'react';
import Header from '@/components/Header';
import FitnessHeroSection from '@/components/fitness/FitnessHeroSection';
import FitnessHowItWorks from '@/components/fitness/FitnessHowItWorks';
import FitnessRevenueCalculator from '@/components/fitness/FitnessRevenueCalculator';
import FitnessCompetitionSection from '@/components/fitness/FitnessCompetitionSection';
import FitnessTestimonials from '@/components/fitness/FitnessTestimonials';
import FitnessPricing from '@/components/fitness/FitnessPricing';
import FitnessPDFDownload from '@/components/fitness/FitnessPDFDownload';
import FitnessFinalCTA from '@/components/fitness/FitnessFinalCTA';
import Footer from '@/components/Footer';

const FitnessTraining = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <FitnessHeroSection />
        <FitnessHowItWorks />
        <FitnessRevenueCalculator />
        <FitnessCompetitionSection />
        <FitnessTestimonials />
        <FitnessPricing />
        <FitnessPDFDownload />
        <FitnessFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FitnessTraining;
