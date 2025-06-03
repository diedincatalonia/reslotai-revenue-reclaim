
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Calculator, DollarSign } from 'lucide-react';

const AutoSalesRevenueCalculator = () => {
  const [missedAppointments, setMissedAppointments] = useState(15);
  const [closingRate, setClosingRate] = useState(35);
  const [avgGrossProfit, setAvgGrossProfit] = useState(3500);
  const [showCommission, setShowCommission] = useState(false);
  const [avgCommission, setAvgCommission] = useState(800);

  const potentialSales = Math.round((missedAppointments * closingRate) / 100);
  const monthlyLoss = potentialSales * avgGrossProfit;
  const recoveryRate = 62; // Average recovery rate
  const recoveredSales = Math.round(potentialSales * (recoveryRate / 100));
  const recoveredRevenue = recoveredSales * avgGrossProfit;
  const annualRecovery = recoveredRevenue * 12;
  
  const personalCommissionRecovery = showCommission ? recoveredSales * avgCommission : 0;
  const annualPersonalRecovery = personalCommissionRecovery * 12;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Calculate Your Lost Sales Revenue
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              See how much revenue you could recover from missed car sales appointments
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
                  Your Dealership Stats
                </h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Missed sales appointments per month
                  </label>
                  <p className="text-sm text-gray-500 mb-2">How many scheduled sales appointments are missed or no-shows each month?</p>
                  <Input
                    type="number"
                    value={missedAppointments}
                    onChange={(e) => setMissedAppointments(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average closing rate (%)
                  </label>
                  <p className="text-sm text-gray-500 mb-2">What percentage of those appointments typically result in a sale?</p>
                  <Input
                    type="number"
                    value={closingRate}
                    onChange={(e) => setClosingRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average gross profit per sale ($)
                  </label>
                  <p className="text-sm text-gray-500 mb-2">On average, how much profit do you make per vehicle sold?</p>
                  <Input
                    type="number"
                    value={avgGrossProfit}
                    onChange={(e) => setAvgGrossProfit(Number(e.target.value))}
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
                        Average commission per sale ($)
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
                    {potentialSales} potential lost sales
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
                    {recoveredSales} recovered sales with {recoveryRate}% recovery rate
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

export default AutoSalesRevenueCalculator;
