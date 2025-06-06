import React from 'react';
import { X, Check, ArrowDown } from 'lucide-react';

const LeasingCompetitionSection = () => {
  const withoutJourney = [
    { step: 1, title: "Tour Scheduled", description: "Prospect books apartment tour" },
    { step: 2, title: "No-Show Occurs", description: "Prospect doesn't show up for scheduled tour" },
    { step: 3, title: "Manual Follow-up", description: "Leasing agent manually calls or emails (if they remember)" },
    { step: 4, title: "Lost Opportunity", description: "Prospect moves on to competitor, revenue lost" }
  ];

  const withJourney = [
    { step: 1, title: "Tour Scheduled", description: "Prospect books apartment tour" },
    { step: 2, title: "No-Show Detected", description: "ReslotAI automatically detects the missed appointment" },
    { step: 3, title: "Smart Re-engagement", description: "Automated SMS/email sent based on prospect's intent level" },
    { step: 4, title: "Tour Rescheduled", description: "Prospect re-books and completes tour, lease signed" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How we recover more missed tours than manual follow-ups ever could.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the customer journey below and see how our software transforms missed opportunities into signed leases.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Without ReslotAI Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  Without ReslotAI
                </h3>
                <p className="text-red-600 font-semibold mt-2">Lost Revenue Path</p>
              </div>
              
              <div className="space-y-6">
                {withoutJourney.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    {index < withoutJourney.length - 1 && (
                      <div className="flex justify-start ml-4 mt-3">
                        <ArrowDown className="w-4 h-4 text-red-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 font-semibold text-center">
                  Result: $2,000+ lost revenue per missed tour
                </p>
              </div>
            </div>

            {/* With ReslotAI Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  With ReslotAI
                </h3>
                <p className="text-green-600 font-semibold mt-2">Revenue Recovery Path</p>
              </div>
              
              <div className="space-y-6">
                {withJourney.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    {index < withJourney.length - 1 && (
                      <div className="flex justify-start ml-4 mt-3">
                        <ArrowDown className="w-4 h-4 text-green-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 font-semibold text-center">
                  Result: 79% of missed tours recovered automatically
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-2">The Difference</h4>
              <p className="text-gray-600">
                ReslotAI turns your biggest leasing challenge into your competitive advantage, 
                automatically recovering revenue that would otherwise walk out the door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingCompetitionSection;
