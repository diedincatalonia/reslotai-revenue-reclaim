
import React from 'react';
import Header from '@/components/Header';
import EducationHeroSection from '@/components/education/EducationHeroSection';
import EducationHowItWorks from '@/components/education/EducationHowItWorks';
import EducationRevenueCalculator from '@/components/education/EducationRevenueCalculator';
import EducationCompetitionSection from '@/components/education/EducationCompetitionSection';
import EducationTestimonials from '@/components/education/EducationTestimonials';
import EducationPricing from '@/components/education/EducationPricing';
import EducationPDFDownload from '@/components/education/EducationPDFDownload';
import EducationFinalCTA from '@/components/education/EducationFinalCTA';
import Footer from '@/components/Footer';

const EducationConsulting = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <EducationHeroSection />
        <EducationHowItWorks />
        <EducationRevenueCalculator />
        <EducationCompetitionSection />
        <EducationTestimonials />
        <EducationPricing />
        <EducationPDFDownload />
        <EducationFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default EducationConsulting;
