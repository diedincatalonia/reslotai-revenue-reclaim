
import React from 'react';
import { ArrowDown, X, Check, Zap } from 'lucide-react';
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
              How ReslotAI Recovers More Revenue Than Other Tools
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              See the difference between generic automation and intelligent recovery.
            </p>
          </div>

          {/* Funnel Comparison */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            {/* Left Funnel - Other Software */}
            <div className="bg-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-2 font-inter">
                  Other Software
                </h3>
                <p className="text-red-200">Basic automation approach</p>
              </div>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-red-200">Generic reminder sent</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>
                
                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-red-200">No personalization or follow-up</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>
                
                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-red-200">Customer ignores</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>
                
                {/* Step 4 */}
                <div className="flex items-center gap-4 bg-red-800/60 p-4 rounded-lg border border-red-400/50">
                  <X className="w-8 h-8 text-red-400" />
                  <span className="text-red-200 font-semibold">Revenue lost</span>
                </div>
              </div>
              
              <div className="mt-8 text-center bg-red-500/20 border border-red-400/30 p-4 rounded-lg">
                <p className="text-red-200 font-semibold">
                  Limited automation. Low recovery.
                </p>
              </div>
            </div>

            {/* Right Funnel - ReslotAI */}
            <div className="bg-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-green-300 mb-2 font-inter">
                  ReslotAI
                </h3>
                <p className="text-green-200">Intelligent recovery system</p>
              </div>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-green-200">Missed appointment triggers smart survey</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-green-200">Survey collects reason + objection</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-green-200">Personalized offer sent</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Step 4 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <span className="text-green-200">Customer reschedules</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>
                
                {/* Step 5 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg border border-green-400/50">
                  <Zap className="w-8 h-8 text-green-400" />
                  <span className="text-green-200 text-sm">(If ignored) Automated SMS/email follow-ups</span>
                </div>
              </div>
              
              <div className="mt-8 text-center bg-green-500/20 border border-green-400/30 p-4 rounded-lg">
                <p className="text-green-200 font-semibold">
                  AI handles recovery. Revenue comes back.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
            >
              Try the Smarter Funnel – For Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
