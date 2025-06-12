
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  price: number;
  cancellations: number;
}

const Homepage2RevenueCalculator = () => {
  const [services, setServices] = useState<Service[]>([
    { id: '1', name: 'Consultation', price: 150, cancellations: 5 },
    { id: '2', name: 'Treatment', price: 300, cancellations: 3 }
  ]);

  const presetServices = [
    { name: 'Consultation', price: 150 },
    { name: 'Treatment', price: 300 },
    { name: 'Follow-up', price: 100 },
    { name: 'Cleaning', price: 125 },
    { name: 'Exam', price: 200 },
    { name: 'Procedure', price: 500 }
  ];

  const addService = (serviceName: string, price: number) => {
    const newService: Service = {
      id: Date.now().toString(),
      name: serviceName,
      price,
      cancellations: 1
    };
    setServices([...services, newService]);
  };

  const addCustomService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: 'New Service',
      price: 100,
      cancellations: 1
    };
    setServices([...services, newService]);
  };

  const removeService = (id: string) => {
    setServices(services.filter(service => service.id !== id));
  };

  const updateService = (id: string, field: keyof Service, value: string | number) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const calculateTotals = () => {
    const totalLoss = services.reduce((sum, service) => 
      sum + (service.price * service.cancellations), 0
    );
    const recoveryRate = 0.35;
    const totalRecovery = Math.round(totalLoss * recoveryRate);
    return { totalLoss, totalRecovery };
  };

  const { totalLoss, totalRecovery } = calculateTotals();

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Calculate Your Recovery Potential
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Customize your services and see real revenue recovery estimates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Services Configuration */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Your Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {services.map((service) => (
                      <div key={service.id} className="grid grid-cols-12 gap-2 p-3 bg-gray-50 rounded-lg">
                        <div className="col-span-4">
                          <Input
                            value={service.name}
                            onChange={(e) => updateService(service.id, 'name', e.target.value)}
                            placeholder="Service name"
                            className="text-sm h-8"
                          />
                        </div>
                        <div className="col-span-3">
                          <Input
                            type="number"
                            value={service.price}
                            onChange={(e) => updateService(service.id, 'price', Number(e.target.value))}
                            placeholder="Price"
                            className="text-sm h-8"
                          />
                        </div>
                        <div className="col-span-3">
                          <Input
                            type="number"
                            value={service.cancellations}
                            onChange={(e) => updateService(service.id, 'cancellations', Number(e.target.value))}
                            placeholder="Monthly cancellations"
                            className="text-sm h-8"
                          />
                        </div>
                        <div className="col-span-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeService(service.id)}
                            className="w-full h-8"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Quick Add Services:</h4>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {presetServices.map((preset, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => addService(preset.name, preset.price)}
                            className="text-xs justify-start h-8"
                            disabled={services.some(s => s.name === preset.name)}
                          >
                            <Plus className="w-3 h-3 mr-1" />
                            {preset.name} (${preset.price})
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      onClick={addCustomService}
                      variant="outline"
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Custom Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Display */}
            <div className="flex flex-col justify-center">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Recovery Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        -${totalLoss.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Monthly loss from cancellations</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        +${totalRecovery.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Potential monthly recovery</div>
                    </div>
                    
                    <div className="pt-4 border-t text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        ${(totalRecovery * 12).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Annual recovery potential</div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Recovery Breakdown:</h4>
                      <div className="space-y-1 text-sm text-blue-800">
                        {services.map((service) => (
                          <div key={service.id} className="flex justify-between">
                            <span>{service.name}:</span>
                            <span>${Math.round(service.price * service.cancellations * 0.35).toLocaleString()}/mo</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-cta text-white hover:opacity-90 font-semibold">
                    Start Recovering Revenue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage2RevenueCalculator;
