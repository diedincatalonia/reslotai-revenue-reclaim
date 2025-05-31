
import React from 'react';
import { Button } from '@/components/ui/button';
import { Car, Calendar, DollarSign } from 'lucide-react';

const AutomotiveDetailingHeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Car className="w-20 h-20 text-blue-300" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-ibm">
            Stop Losing Money to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"> 
              {" "}Automotive Cancellations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-inter">
            Turn cancelled detailing appointments into recovered revenue with AI-powered rebooking that works 24/7
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">68%</div>
              <div className="text-blue-200 text-sm">Average Recovery Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <div className="text-2xl font-bold mb-2">$3,200</div>
              <div className="text-blue-200 text-sm">Monthly Revenue Recovered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Car className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <div className="text-2xl font-bold mb-2">5 min</div>
              <div className="text-blue-200 text-sm">Setup Time</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              Try It for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Calculate Your Savings
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            ✓ No setup fees ✓ No contracts ✓ 30-day guarantee
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveDetailingHeroSection;
