
import React from 'react';
import { Button } from '@/components/ui/button';
const LeasingHeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-white/3 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 animate-fade-in">
              Leasing software that helps you{' '}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                recover missed tours automatically
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up font-inter">ReslotAI helos you follow up with renters and helps you rebook leasing appointments all in just a few clicks once the data is added. It works alongside property management platforms like Appfolio, Buildup, and Rentec Direct, no crm replacement or extra tools needed.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105">
                See Pricing
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="animate-slide-up">
              <p className="text-gray-300 text-sm mb-4 font-inter">Trusted by 35 apartment communities</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                {['Skyline Apartments', 'Metro Living', 'Park View Complex', 'Urban Heights'].map((company, index) => <div key={index} className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium text-sm">{company}</span>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="border-b pb-3 mb-4">
                  <h3 className="font-semibold text-gray-800">ReslotAI Dashboard</h3>
                  <p className="text-sm text-gray-600">Real-time tour recovery</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Tours Recovered</span>
                    <span className="font-bold text-green-600">28 this month</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">Response Rate</span>
                    <span className="font-bold text-blue-600">79%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">Leasing Efficiency</span>
                    <span className="font-bold text-purple-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeasingHeroSection;
