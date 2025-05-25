
import React from 'react';
import { TrendingDown, TrendingUp, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PainPointSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-inter">
              Transform Your Revenue Recovery
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Stop losing money on cancellations. Start recovering revenue automatically.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            {/* Problem Side */}
            <div className="bg-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                  <TrendingDown className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-2 font-inter">
                  The Problem
                </h3>
                <p className="text-red-200 font-semibold">Every missed appointment hurts</p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-200">Lost revenue from no-shows</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-200">Wasted time slots</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-200">Manual follow-up overhead</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-200">No insights into cancellation patterns</span>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-300 mb-2 font-inter">
                  The Solution
                </h3>
                <p className="text-green-200 font-semibold">Automated revenue recovery</p>
              </div>
              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-200">Automated smart outreach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-200">Intelligent rebooking system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-200">Focus on growth, not cancellations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-200">Deep customer insights</span>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-green-200 font-semibold text-center">
                  "Our clients recover an average of 35% of their cancelled appointments automatically."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
