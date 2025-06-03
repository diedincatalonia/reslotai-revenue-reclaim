
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, DollarSign } from 'lucide-react';

const AutoSalesRevenueCalculator = () => {
  const [appointments, setAppointments] = useState(20);
  const [avgCommission, setAvgCommission] = useState(1500);
  const [cancellationRate, setCancellationRate] = useState(25);

  const monthlyCancellations = Math.round((appointments * cancellationRate) / 100);
  const monthlyLoss = monthlyCancellations * avgCommission;
  const recoveryRate = 62; // Average recovery rate
  const recoveredRevenue = Math.round(monthlyLoss * (recoveryRate / 100));
  const annualRecovery = recoveredRevenue * 12;

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
              See how much revenue you could recover from cancelled car sales appointments
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
                    Sales appointments per month
                  </label>
                  <Input
                    type="number"
                    value={appointments}
                    onChange={(e) => setAppointments(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cancellation rate (%)
                  </label>
                  <Input
                    type="number"
                    value={cancellationRate}
                    onChange={(e) => setCancellationRate(Number(e.target.value))}
                    className="w-full"
                  />
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
                    {monthlyCancellations} cancelled appointments
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
                    With {recoveryRate}% recovery rate
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Annual Recovery</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    ${annualRecovery.toLocaleString()}
                  </div>
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
