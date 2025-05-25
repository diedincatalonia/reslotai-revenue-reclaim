import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              Why Choose ReslotAI?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              See how we compare to other revenue recovery solutions
            </p>
          </div>

          {/* ReslotAI vs Other Tools */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ReslotAI Side */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="text-center mb-6">
                <h4 className="font-bold text-2xl text-blue-400 mb-4">ReslotAI</h4>
                <p className="text-green-400 font-semibold">The Smart Choice</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Personalized SMS & Email</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Smart Surveys & Insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Setup in 5 Minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Industry-Tailored Messaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>35% Average Recovery Rate</span>
                </li>
              </ul>
            </div>
            
            {/* Other Tools Side */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <div className="text-center mb-6">
                <h4 className="font-bold text-2xl text-gray-400 mb-4">Other Tools</h4>
                <p className="text-red-400 font-semibold">Limited Solutions</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Generic Messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">No Smart Surveys</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Complex Setup Process</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">One-Size-Fits-All Approach</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Low Recovery Rates</span>
                </li>
              </ul>
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

export default ComparisonSection;
