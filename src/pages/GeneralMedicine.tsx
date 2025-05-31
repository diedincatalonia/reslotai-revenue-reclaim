
import React from 'react';
import Header from '@/components/Header';
import GeneralMedicineHeroSection from '@/components/general-medicine/GeneralMedicineHeroSection';
import GeneralMedicineHowItWorks from '@/components/general-medicine/GeneralMedicineHowItWorks';
import GeneralMedicineRevenueCalculator from '@/components/general-medicine/GeneralMedicineRevenueCalculator';
import GeneralMedicineCompetitionSection from '@/components/general-medicine/GeneralMedicineCompetitionSection';
import GeneralMedicineTestimonials from '@/components/general-medicine/GeneralMedicineTestimonials';
import GeneralMedicinePricing from '@/components/general-medicine/GeneralMedicinePricing';
import GeneralMedicinePDFDownload from '@/components/general-medicine/GeneralMedicinePDFDownload';
import GeneralMedicineFinalCTA from '@/components/general-medicine/GeneralMedicineFinalCTA';
import Footer from '@/components/Footer';

const GeneralMedicine = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <GeneralMedicineHeroSection />
        <GeneralMedicineHowItWorks />
        <GeneralMedicineRevenueCalculator />
        <GeneralMedicineCompetitionSection />
        <GeneralMedicineTestimonials />
        <GeneralMedicinePricing />
        <GeneralMedicinePDFDownload />
        <GeneralMedicineFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default GeneralMedicine;
