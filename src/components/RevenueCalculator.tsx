
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const RevenueCalculator = () => {
  const [businessType, setBusinessType] = useState('');
  const [monthlyCancellations, setMonthlyCancellations] = useState('');
  const [averageServiceValue, setAverageServiceValue] = useState('');

  const businessTypes = [
    'Health & Wellness',
    'Home Services', 
    'Beauty and Personal Care',
    'Fitness and Training',
    'Coaching / Consulting',
    'Legal Services',
    'Education and Tutoring',
    'Automotive',
    'Automotive Detailing',
    'Pets and Animals',
    'Creative Services',
    'Other'
  ];

  const calculateRecovery = () => {
    if (!monthlyCancellations || !averageServiceValue) return 0;
    
    const cancellations = parseInt(monthlyCancellations);
    const avgValue = parseFloat(averageServiceValue);
    
    // Assuming 35% recovery rate based on industry data
    const recoveryRate = 0.35;
    return Math.round(cancellations * avgValue * recoveryRate);
  };

  const estimatedRecovery = calculateRecovery();

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Estimate Your Lost Revenue
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              See how much revenue you could recover with ReslotAI
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    Business Type
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button 
                            className="w-4 h-4 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-blue-600 transition-colors"
                            aria-label="Information about estimate accuracy"
                          >
                            i
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            This estimate is based on real data from over 150 businesses we've worked with. Actual results may vary.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type} className="hover:bg-gray-50">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Monthly Appointment Cancellations
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 25"
                    value={monthlyCancellations}
                    onChange={(e) => setMonthlyCancellations(e.target.value)}
                    className="w-full bg-white"
                    min="0"
                    aria-label="Number of monthly cancellations"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Average Service Value ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 125"
                    value={averageServiceValue}
                    onChange={(e) => setAverageServiceValue(e.target.value)}
                    className="w-full bg-white"
                    min="0"
                    step="0.01"
                    aria-label="Average service value in dollars"
                  />
                </div>
              </div>

              {/* Results Display */}
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    You could recover:
                  </h3>
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    ${estimatedRecovery.toLocaleString()}
                  </div>
                  <div className="text-gray-500 text-lg mb-6">per month</div>
                  
                  {estimatedRecovery > 0 && (
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monthly cancellations:</span>
                        <span className="font-semibold">{monthlyCancellations}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Average service value:</span>
                        <span className="font-semibold">${averageServiceValue}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Estimated recovery rate:</span>
                        <span className="font-semibold">35%</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold">
                          <span>Annual recovery potential:</span>
                          <span className="text-green-600">${(estimatedRecovery * 12).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button className="w-full mt-6 bg-gradient-cta text-white hover:opacity-90 font-semibold">
                    Start Recovering Revenue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
