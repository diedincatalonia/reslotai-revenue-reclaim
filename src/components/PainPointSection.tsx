
import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const PainPointSection = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Side */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <TrendingDown className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 font-inter">
                You're losing money with every missed appointment
              </h3>
              <div className="space-y-4 text-lg text-red-700">
                <p>❌ Lost revenue from no-shows</p>
                <p>❌ Wasted time slots that could be filled</p>
                <p>❌ Manual follow-up eating into your day</p>
                <p>❌ No insights into why customers cancel</p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 font-inter">
                ReslotAI brings those clients back — automatically
              </h3>
              <div className="space-y-4 text-lg text-green-700">
                <p>✅ Save time with automated outreach</p>
                <p>✅ Win revenue through smart recovery</p>
                <p>✅ Focus on growth, not cancellations</p>
                <p>✅ Understand your customers better</p>
              </div>
              <div className="mt-8">
                <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-800 font-semibold">
                    "Our clients recover an average of 35% of their cancelled appointments automatically."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
