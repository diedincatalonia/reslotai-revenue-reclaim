
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp } from 'lucide-react';

const DentalROICalculator = () => {
  const [patientsPerWeek, setPatientsPerWeek] = useState(50);
  const [cancellationRate, setCancellationRate] = useState(15);
  const [selectedService, setSelectedService] = useState('cleaning');

  const services = {
    cleaning: { name: 'Teeth Cleaning', price: 120 },
    filling: { name: 'Dental Filling', price: 200 },
    crown: { name: 'Crown', price: 800 },
    rootCanal: { name: 'Root Canal', price: 1200 },
    extraction: { name: 'Tooth Extraction', price: 300 },
    whitening: { name: 'Teeth Whitening', price: 400 },
    checkup: { name: 'Check-up', price: 80 }
  };

  const calculateLoss = () => {
    const canceledPerWeek = (patientsPerWeek * cancellationRate) / 100;
    const weeklyLoss = canceledPerWeek * services[selectedService as keyof typeof services].price;
    const monthlyLoss = weeklyLoss * 4;
    const annualLoss = monthlyLoss * 12;
    return { weeklyLoss, monthlyLoss, annualLoss };
  };

  const calculateRecovery = () => {
    const { monthlyLoss, annualLoss } = calculateLoss();
    const recoveryRate = 0.65; // 65% recovery rate
    const monthlyRecovery = monthlyLoss * recoveryRate;
    const annualRecovery = annualLoss * recoveryRate;
    return { monthlyRecovery, annualRecovery };
  };

  const { monthlyLoss, annualLoss } = calculateLoss();
  const { monthlyRecovery, annualRecovery } = calculateRecovery();

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            Calculate Your Revenue Recovery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See exactly how much revenue you're losing and how much you can recover
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Revenue Recovery Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patients per week
                  </label>
                  <input
                    type="number"
                    value={patientsPerWeek}
                    onChange={(e) => setPatientsPerWeek(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cancellation rate (%)
                  </label>
                  <input
                    type="number"
                    value={cancellationRate}
                    onChange={(e) => setCancellationRate(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average service type
                  </label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(services).map(([key, service]) => (
                        <SelectItem key={key} value={key}>
                          {service.name} (${service.price})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 rotate-180" />
                    Current Revenue Loss
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-red-700">Monthly Loss:</span>
                      <span className="font-bold text-red-800">${monthlyLoss.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">Annual Loss:</span>
                      <span className="font-bold text-red-800">${annualLoss.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Potential Recovery (65% rate)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-green-700">Monthly Recovery:</span>
                      <span className="font-bold text-green-800">${monthlyRecovery.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Annual Recovery:</span>
                      <span className="font-bold text-green-800">${annualRecovery.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <p className="text-blue-800 font-semibold">
                    Software cost: $99/month • ROI: {Math.round((monthlyRecovery / 99) * 100)}% monthly return
                  </p>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Book Demo to Start Recovering Revenue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DentalROICalculator;
