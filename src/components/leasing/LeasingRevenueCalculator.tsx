
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Calculator, DollarSign } from 'lucide-react';

const LeasingRevenueCalculator = () => {
  const [missedTours, setMissedTours] = useState(12);
  const [conversionRate, setConversionRate] = useState(25);
  const [avgMonthlyRent, setAvgMonthlyRent] = useState(2200);
  const [showCommission, setShowCommission] = useState(false);
  const [avgCommission, setAvgCommission] = useState(250);

  const potentialLeases = Math.round((missedTours * conversionRate) / 100);
  const monthlyLoss = potentialLeases * avgMonthlyRent;
  const recoveryRate = 68; // Average recovery rate for leasing
  const recoveredLeases = Math.round(potentialLeases * (recoveryRate / 100));
  const recoveredRevenue = recoveredLeases * avgMonthlyRent;
  const annualRecovery = recoveredRevenue * 12;
  
  const personalCommissionRecovery = showCommission ? recoveredLeases * avgCommission : 0;
  const annualPersonalRecovery = personalCommissionRecovery * 12;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Estimate recovered revenue with ReslotAI and your property management software
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Whether you manage 1 or 1,000 units, ReslotAI works with your existing tools- no switching needed. Missed tours mean lost revenue. Use the calculator below to see how much you could recover.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
                  Your Property Stats
                </h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Missed apartment tours per month
                  </label>
                  <p className="text-sm text-gray-500 mb-2">How many scheduled tours are missed or no-shows each month?</p>
                  <Input
                    type="number"
                    value={missedTours}
                    onChange={(e) => setMissedTours(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average conversion rate (%)
                  </label>
                  <p className="text-sm text-gray-500 mb-2">What percentage of tours typically result in a lease?</p>
                  <Input
                    type="number"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average monthly rent ($)
                  </label>
                  <p className="text-sm text-gray-500 mb-2">What's the average monthly rent for your units?</p>
                  <Input
                    type="number"
                    value={avgMonthlyRent}
                    onChange={(e) => setAvgMonthlyRent(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Switch
                      id="commission-toggle"
                      checked={showCommission}
                      onCheckedChange={setShowCommission}
                    />
                    <label htmlFor="commission-toggle" className="text-sm font-semibold text-gray-700">
                      Show personal commission impact
                    </label>
                  </div>
                  
                  {showCommission && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Average commission per lease ($)
                      </label>
                      <Input
                        type="number"
                        value={avgCommission}
                        onChange={(e) => setAvgCommission(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
                  Revenue Recovery Potential
                </h3>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-800">Monthly Loss</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600">
                    ${monthlyLoss.toLocaleString()}
                  </div>
                  <div className="text-sm text-red-700">
                    {potentialLeases} potential lost leases
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Monthly Recovery</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${recoveredRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-700">
                    {recoveredLeases} recovered leases with {recoveryRate}% recovery rate
                  </div>
                </div>

                {showCommission && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-purple-800">Your Monthly Commission</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">
                      ${personalCommissionRecovery.toLocaleString()}
                    </div>
                    <div className="text-sm text-purple-700">
                      Personal earning recovery
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Annual Recovery</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${annualRecovery.toLocaleString()}
                  </div>
                  {showCommission && (
                    <div className="text-sm text-blue-700 mt-1">
                      (${annualPersonalRecovery.toLocaleString()} personal commission)
                    </div>
                  )}
                  <div className="text-sm text-blue-700">
                    Potential yearly revenue recovery
                  </div>
                </div>

                <Button className="w-full bg-gradient-cta text-white hover:opacity-90 font-semibold text-lg p-4">
                  Start Recovering Revenue Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingRevenueCalculator;
