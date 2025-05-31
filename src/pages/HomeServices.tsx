
import React from 'react';
import Header from '@/components/Header';
import HomeServicesHeroSection from '@/components/home-services/HomeServicesHeroSection';
import HomeServicesHowItWorks from '@/components/home-services/HomeServicesHowItWorks';
import HomeServicesRevenueCalculator from '@/components/home-services/HomeServicesRevenueCalculator';
import HomeServicesCompetitionSection from '@/components/home-services/HomeServicesCompetitionSection';
import HomeServicesTestimonials from '@/components/home-services/HomeServicesTestimonials';
import HomeServicesPricing from '@/components/home-services/HomeServicesPricing';
import HomeServicesPDFDownload from '@/components/home-services/HomeServicesPDFDownload';
import HomeServicesFinalCTA from '@/components/home-services/HomeServicesFinalCTA';
import Footer from '@/components/Footer';

const HomeServices = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <HomeServicesHeroSection />
        <HomeServicesHowItWorks />
        <HomeServicesRevenueCalculator />
        <HomeServicesCompetitionSection />
        <HomeServicesTestimonials />
        <HomeServicesPricing />
        <HomeServicesPDFDownload />
        <HomeServicesFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomeServices;
