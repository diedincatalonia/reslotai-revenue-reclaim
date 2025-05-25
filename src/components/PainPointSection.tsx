
import React from 'react';
import { TrendingDown, TrendingUp, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PainPointSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-inter">
              Transform Your Revenue Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop losing money on cancellations. Start recovering revenue automatically.
            </p>
          </div>

          {/* Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            {/* Problem Side */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-2 font-inter">
                  The Problem
                </h3>
                <p className="text-red-700 font-semibold">Every missed appointment hurts</p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">Lost revenue from no-shows</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">Wasted time slots</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">Manual follow-up overhead</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">No insights into cancellation patterns</span>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-2 font-inter">
                  The Solution
                </h3>
                <p className="text-green-700 font-semibold">Automated revenue recovery</p>
              </div>
              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700">Automated smart outreach</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700">Intelligent rebooking system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700">Focus on growth, not cancellations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700">Deep customer insights</span>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
                <p className="text-green-800 font-semibold text-center">
                  "Our clients recover an average of 35% of their cancelled appointments automatically."
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-cta text-white hover:opacity-90 font-semibold px-8 py-3 text-lg"
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
