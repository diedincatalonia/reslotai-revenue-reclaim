
import React from 'react';
import Header from '@/components/Header';
import AutoSalesHeroSection from '@/components/auto-sales/AutoSalesHeroSection';
import AutoSalesHowItWorks from '@/components/auto-sales/AutoSalesHowItWorks';
import AutoSalesRevenueCalculator from '@/components/auto-sales/AutoSalesRevenueCalculator';
import AutoSalesCompetitionSection from '@/components/auto-sales/AutoSalesCompetitionSection';
import AutoSalesTestimonials from '@/components/auto-sales/AutoSalesTestimonials';
import AutoSalesPricing from '@/components/auto-sales/AutoSalesPricing';
import AutoSalesPDFDownload from '@/components/auto-sales/AutoSalesPDFDownload';
import AutoSalesFinalCTA from '@/components/auto-sales/AutoSalesFinalCTA';
import Footer from '@/components/Footer';

const AutoSales = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main>
        <AutoSalesHeroSection />
        <AutoSalesHowItWorks />
        <AutoSalesRevenueCalculator />
        <AutoSalesCompetitionSection />
        <AutoSalesTestimonials />
        <AutoSalesPricing />
        <AutoSalesPDFDownload />
        <AutoSalesFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AutoSales;
