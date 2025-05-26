
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, Clock } from 'lucide-react';

const DentalHeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold font-ibm leading-tight">
              Turn Canceled Appointments Into Revenue{' '}
              <span className="text-blue-300">Automatically</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Track, follow up, and recover lost revenue — all without lifting a finger
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                Book a Free Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Try Revenue Calculator
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5-min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Instant ROI</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Recovery Dashboard</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">This Month Recovered</span>
                    <span className="font-bold text-green-600 text-xl">$4,280</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Appointments Rescheduled</span>
                    <span className="font-bold text-blue-600 text-xl">23</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">Success Rate</span>
                    <span className="font-bold text-purple-600 text-xl">67%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHeroSection;
