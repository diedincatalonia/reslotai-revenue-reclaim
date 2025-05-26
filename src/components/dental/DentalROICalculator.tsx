
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, Plus, Trash2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  service: string;
  quantity: number;
  price: number;
}

const DentalROICalculator = () => {
  const [patientsPerWeek, setPatientsPerWeek] = useState(50);
  const [cancellationRate, setCancellationRate] = useState(15);
  const [selectedService, setSelectedService] = useState('cleaning');
  const [showManualBuilder, setShowManualBuilder] = useState(false);
  const [manualServices, setManualServices] = useState<ServiceItem[]>([]);
  const [newServiceType, setNewServiceType] = useState('cleaning');

  const services = {
    cleaning: { name: 'Teeth Cleaning', price: 120 },
    filling: { name: 'Dental Filling', price: 200 },
    crown: { name: 'Crown', price: 800 },
    rootCanal: { name: 'Root Canal', price: 1200 },
    extraction: { name: 'Tooth Extraction', price: 300 },
    whitening: { name: 'Teeth Whitening', price: 400 },
    checkup: { name: 'Check-up', price: 80 }
  };

  const addManualService = () => {
    const service = services[newServiceType as keyof typeof services];
    const newService: ServiceItem = {
      id: Date.now().toString(),
      service: newServiceType,
      quantity: 1,
      price: service.price
    };
    setManualServices([...manualServices, newService]);
  };

  const updateServiceQuantity = (id: string, quantity: number) => {
    setManualServices(manualServices.map(service => 
      service.id === id ? { ...service, quantity: Math.max(0, quantity) } : service
    ));
  };

  const removeService = (id: string) => {
    setManualServices(manualServices.filter(service => service.id !== id));
  };

  const calculateLoss = () => {
    const canceledPerWeek = (patientsPerWeek * cancellationRate) / 100;
    const weeklyLoss = canceledPerWeek * services[selectedService as keyof typeof services].price;
    const monthlyLoss = weeklyLoss * 4;
    const annualLoss = monthlyLoss * 12;
    return { weeklyLoss, monthlyLoss, annualLoss };
  };

  const calculateManualRevenue = () => {
    const totalMonthlyRevenue = manualServices.reduce((total, service) => {
      return total + (service.quantity * service.price);
    }, 0);
    
    const recoveryRate = 0.65;
    const monthlyRecovery = totalMonthlyRevenue * recoveryRate;
    const annualRecovery = monthlyRecovery * 12;
    
    return { 
      totalMonthlyRevenue, 
      monthlyRecovery, 
      annualRecovery,
      totalServices: manualServices.reduce((total, service) => total + service.quantity, 0)
    };
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
  const manualCalculation = calculateManualRevenue();

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

              {!showManualBuilder ? (
                <>
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
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

                  <div className="text-center">
                    <Button 
                      onClick={() => setShowManualBuilder(true)}
                      variant="outline" 
                      className="mb-6"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Build Custom Service Mix
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Custom Service Builder</h3>
                    <Button 
                      onClick={() => setShowManualBuilder(false)}
                      variant="outline"
                      size="sm"
                    >
                      Back to Quick Calculator
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex gap-4 items-end mb-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type
                        </label>
                        <Select value={newServiceType} onValueChange={setNewServiceType}>
                          <SelectTrigger>
                            <SelectValue />
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
                      <Button onClick={addManualService}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Service
                      </Button>
                    </div>
                  </div>

                  {manualServices.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Your Service Mix:</h4>
                      {manualServices.map((service) => (
                        <div key={service.id} className="flex items-center gap-4 p-3 bg-white rounded-lg border">
                          <div className="flex-1">
                            <span className="font-medium">
                              {services[service.service as keyof typeof services].name}
                            </span>
                            <span className="text-gray-500 ml-2">
                              (${service.price} each)
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="text-sm text-gray-600">Qty:</label>
                            <input
                              type="number"
                              value={service.quantity}
                              onChange={(e) => updateServiceQuantity(service.id, Number(e.target.value))}
                              className="w-20 p-2 border rounded"
                              min="0"
                            />
                          </div>
                          <div className="font-medium text-gray-900">
                            ${(service.quantity * service.price).toLocaleString()}
                          </div>
                          <Button
                            onClick={() => removeService(service.id)}
                            variant="outline"
                            size="sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}

                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h4 className="text-lg font-bold text-blue-800 mb-4">
                          Custom Revenue Recovery Estimate
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-blue-700">Total Services:</span>
                              <span className="font-semibold">{manualCalculation.totalServices}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-blue-700">Monthly Revenue:</span>
                              <span className="font-semibold">${manualCalculation.totalMonthlyRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-blue-700">Recovery Rate:</span>
                              <span className="font-semibold">65%</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-green-700">Monthly Recovery:</span>
                              <span className="font-bold text-green-800">${manualCalculation.monthlyRecovery.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-green-700">Annual Recovery:</span>
                              <span className="font-bold text-green-800">${manualCalculation.annualRecovery.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Monthly ROI:</span>
                              <span className="font-semibold">{Math.round((manualCalculation.monthlyRecovery / 99) * 100)}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="text-center mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <p className="text-blue-800 font-semibold">
                    Software cost: $99/month • ROI: {showManualBuilder && manualServices.length > 0 
                      ? Math.round((manualCalculation.monthlyRecovery / 99) * 100) 
                      : Math.round((monthlyRecovery / 99) * 100)
                    }% monthly return
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
