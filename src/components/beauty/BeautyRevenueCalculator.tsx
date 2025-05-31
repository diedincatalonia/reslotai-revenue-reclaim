
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator } from 'lucide-react';

const BeautyRevenueCalculator = () => {
  const [appointmentsPerWeek, setAppointmentsPerWeek] = useState(50);
  const [averageServiceValue, setAverageServiceValue] = useState(75);
  const [cancellationRate, setCancellationRate] = useState(15);

  const calculateSavings = () => {
    const weeklyAppointments = appointmentsPerWeek;
    const weeklyCancellations = (weeklyAppointments * cancellationRate) / 100;
    const recoveredAppointments = weeklyCancellations * 0.65; // 65% recovery rate
    const weeklyRecoveredRevenue = recoveredAppointments * averageServiceValue;
    const monthlyRecoveredRevenue = weeklyRecoveredRevenue * 4.33;
    const yearlyRecoveredRevenue = monthlyRecoveredRevenue * 12;

    return {
      weekly: Math.round(weeklyRecoveredRevenue),
      monthly: Math.round(monthlyRecoveredRevenue),
      yearly: Math.round(yearlyRecoveredRevenue)
    };
  };

  const savings = calculateSavings();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Calculate Your Beauty Business Revenue Recovery
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              See how much revenue you could recover from cancelled appointments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Numbers</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Appointments per week
                  </label>
                  <Input
                    type="number"
                    value={appointmentsPerWeek}
                    onChange={(e) => setAppointmentsPerWeek(Number(e.target.value))}
                    className="w-full text-lg p-4"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average service value ($)
                  </label>
                  <Input
                    type="number"
                    value={averageServiceValue}
                    onChange={(e) => setAverageServiceValue(Number(e.target.value))}
                    className="w-full text-lg p-4"
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
                    className="w-full text-lg p-4"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Your Revenue Recovery Potential</h3>
              
              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">${savings.weekly.toLocaleString()}</div>
                    <div className="text-purple-100">per week</div>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold">${savings.monthly.toLocaleString()}</div>
                    <div className="text-purple-100">per month</div>
                  </div>
                </div>
                
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border-2 border-white/50">
                  <div className="text-center">
                    <div className="text-5xl font-bold">${savings.yearly.toLocaleString()}</div>
                    <div className="text-purple-100 text-lg">per year</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 text-lg">
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

export default BeautyRevenueCalculator;
