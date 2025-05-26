
import React from 'react';
import Header from '@/components/Header';
import DentalHeroSection from '@/components/dental/DentalHeroSection';
import DentalPainPoints from '@/components/dental/DentalPainPoints';
import DentalFeatures from '@/components/dental/DentalFeatures';
import DentalHowItWorks from '@/components/dental/DentalHowItWorks';
import DentalSocialProof from '@/components/dental/DentalSocialProof';
import DentalROICalculator from '@/components/dental/DentalROICalculator';
import DentalPricing from '@/components/dental/DentalPricing';
import DentalUrgency from '@/components/dental/DentalUrgency';
import DentalFAQ from '@/components/dental/DentalFAQ';
import DentalFinalCTA from '@/components/dental/DentalFinalCTA';
import DentalStickyButton from '@/components/dental/DentalStickyButton';
import Footer from '@/components/Footer';

const LandingPageMockup = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <DentalHeroSection />
        <DentalPainPoints />
        <DentalFeatures />
        <DentalHowItWorks />
        <DentalSocialProof />
        <DentalROICalculator />
        <DentalPricing />
        <DentalUrgency />
        <DentalFAQ />
        <DentalFinalCTA />
      </main>
      <Footer />
      <DentalStickyButton />
    </div>
  );
};

export default LandingPageMockup;
