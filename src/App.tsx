
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Homepage2 from "./pages/Homepage2";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import LandingPageMockup from "./pages/LandingPageMockup";
import AutoServices from "./pages/AutoServices";
import AutoSales from "./pages/AutoSales";
import FitnessTraining from "./pages/FitnessTraining";
import DentalServices from "./pages/DentalServices";
import BeautyPersonalCare from "./pages/BeautyPersonalCare";
import PetServices from "./pages/PetServices";
import LegalServices from "./pages/LegalServices";
import EducationConsulting from "./pages/EducationConsulting";
import AutomotiveDetailing from "./pages/AutomotiveDetailing";
import GeneralMedicine from "./pages/GeneralMedicine";
import Therapist from "./pages/Therapist";
import HomeServices from "./pages/HomeServices";
import LeasingOffices from "./pages/LeasingOffices";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/homepage2" element={<Homepage2 />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/landing-page-mockup" element={<LandingPageMockup />} />
            <Route path="/auto-services" element={<AutoServices />} />
            <Route path="/auto-sales" element={<AutoSales />} />
            <Route path="/fitness-training" element={<FitnessTraining />} />
            <Route path="/dental-services" element={<DentalServices />} />
            <Route path="/beauty-personal-care" element={<BeautyPersonalCare />} />
            <Route path="/pet-services" element={<PetServices />} />
            <Route path="/legal-services" element={<LegalServices />} />
            <Route path="/education-consulting" element={<EducationConsulting />} />
            <Route path="/automotive-detailing" element={<AutomotiveDetailing />} />
            <Route path="/general-medicine" element={<GeneralMedicine />} />
            <Route path="/therapist" element={<Therapist />} />
            <Route path="/home-services" element={<HomeServices />} />
            <Route path="/leasing-offices" element={<LeasingOffices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
