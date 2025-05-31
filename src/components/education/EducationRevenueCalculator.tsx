
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

const EducationRevenueCalculator = () => {
  const [sessionPrice, setSessionPrice] = useState(150);
  const [sessionsPerWeek, setSessionsPerWeek] = useState(40);
  const [cancellationRate, setCancellationRate] = useState(15);
  const [serviceName, setServiceName] = useState('Session');

  const weeklyRevenue = sessionPrice * sessionsPerWeek;
  const weeklyCancellations = (sessionsPerWeek * cancellationRate) / 100;
  const weeklyLostRevenue = weeklyCancellations * sessionPrice;
  const monthlyLostRevenue = weeklyLostRevenue * 4.33;
  const yearlyLostRevenue = monthlyLostRevenue * 12;
  const recoveryRate = 0.68;
  const monthlyRecoveredRevenue = monthlyLostRevenue * recoveryRate;
  const yearlyRecoveredRevenue = yearlyLostRevenue * recoveryRate;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Calculate Your Lost Revenue from Student Cancellations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            See how much revenue you could recover with automated rebooking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calculator className="w-8 h-8 text-blue-600" />
                Your Education Business
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name
                </label>
                <Input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average {serviceName} Price ($)
                </label>
                <Input
                  type="number"
                  value={sessionPrice}
                  onChange={(e) => setSessionPrice(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {serviceName}s Per Week
                </label>
                <Input
                  type="number"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Cancellation Rate (%)
                </label>
                <Input
                  type="number"
                  value={cancellationRate}
                  onChange={(e) => setCancellationRate(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="shadow-xl border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
                  <DollarSign className="w-8 h-8 text-red-600" />
                  Lost Revenue
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Weekly lost revenue:</span>
                  <span className="text-2xl font-bold text-red-600">
                    ${weeklyLostRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monthly lost revenue:</span>
                  <span className="text-2xl font-bold text-red-600">
                    ${monthlyLostRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-gray-700 font-semibold">Yearly lost revenue:</span>
                  <span className="text-3xl font-bold text-red-600">
                    ${yearlyLostRevenue.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-green-800">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  Revenue Recovery with ReslotAI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <p className="text-green-800 font-semibold text-center">
                    68% average recovery rate for education providers
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monthly recovery:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${monthlyRecoveredRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-gray-700 font-semibold">Yearly recovery:</span>
                  <span className="text-3xl font-bold text-green-600">
                    ${yearlyRecoveredRevenue.toLocaleString()}
                  </span>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-semibold text-center">
                    ROI: {Math.round((yearlyRecoveredRevenue / 1800) * 100)}x return on investment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationRevenueCalculator;
