
import React from 'react';
import { X, Check } from 'lucide-react';

const LeasingCompetitionSection = () => {
  const withoutItems = [
    "Missed tours go unanswered",
    "Leasing agents follow up manually", 
    "Lost rent adds up quietly",
    "No insight into renter behavior"
  ];

  const withItems = [
    "Automated SMS and email based on renter intent",
    "No-shows re-engage without effort",
    "Calendar fills with recovered appointments", 
    "AI insights improve future rebooking strategy"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            What Missed Tour Recovery Looks Like With and Without ReslotAI
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without ReslotAI */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  Without ReslotAI
                </h3>
              </div>
              
              <div className="space-y-4">
                {withoutItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* With ReslotAI */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  With ReslotAI
                </h3>
              </div>
              
              <div className="space-y-4">
                {withItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingCompetitionSection;
