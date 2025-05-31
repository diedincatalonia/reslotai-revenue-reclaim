
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Trash2, Edit } from 'lucide-react';

const PetRevenueCalculator = () => {
  const [services, setServices] = useState([
    { name: 'Full Groom (Medium Dog)', price: 85, cancellations: 8 },
    { name: 'Nail Trim', price: 25, cancellations: 15 }
  ]);

  const presetServices = [
    { name: 'Full Groom (Small Dog)', price: 65 },
    { name: 'Full Groom (Medium Dog)', price: 85 },
    { name: 'Full Groom (Large Dog)', price: 110 },
    { name: 'Bath & Brush Out', price: 45 },
    { name: 'Nail Trim', price: 25 },
    { name: 'Teeth Cleaning', price: 35 },
    { name: 'Flea Treatment', price: 40 },
    { name: 'De-shedding Treatment', price: 55 },
    { name: 'Cat Grooming', price: 75 },
    { name: 'Vet Wellness Check', price: 120 },
    { name: 'Vaccination Package', price: 95 }
  ];

  const addService = (serviceName: string, price: number) => {
    setServices([...services, { name: serviceName, price, cancellations: 1 }]);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index: number, field: string, value: string | number) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const calculateTotals = () => {
    const totalLoss = services.reduce((sum, service) => 
      sum + (service.price * service.cancellations), 0
    );
    const recoveryRate = 0.68;
    const totalRecovery = Math.round(totalLoss * recoveryRate);
    return { totalLoss, totalRecovery };
  };

  const { totalLoss, totalRecovery } = calculateTotals();

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
              Calculate Your Pet Care Revenue Recovery
            </h2>
            <p className="text-xl text-gray-200 font-inter">
              See how much revenue you could recover from pet grooming and vet appointment cancellations
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Services</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    <Edit className="w-4 h-4 inline mr-1" />
                    Click on any price or service name to edit it. Add your most common services and their typical cancellation rates.
                  </p>
                </div>
                
                {/* Current Services */}
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="grid grid-cols-12 gap-3 items-center p-4 bg-gray-50 rounded-lg">
                      <div className="col-span-4">
                        <Input
                          value={service.name}
                          onChange={(e) => updateService(index, 'name', e.target.value)}
                          placeholder="Service name"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={service.price}
                          onChange={(e) => updateService(index, 'price', Number(e.target.value))}
                          placeholder="Price"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={service.cancellations}
                          onChange={(e) => updateService(index, 'cancellations', Number(e.target.value))}
                          placeholder="Monthly cancellations"
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeService(index)}
                          className="w-full"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Service Buttons */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Quick Add Services:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {presetServices.map((preset, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => addService(preset.name, preset.price)}
                        className="text-xs justify-start"
                        disabled={services.some(s => s.name === preset.name)}
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        {preset.name} (${preset.price})
                      </Button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Tip: After adding a service, you can click on the price to customize it for your clinic.
                  </p>
                </div>
              </div>

              {/* Results Display */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    Monthly Revenue Impact
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        -${totalLoss.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Lost to cancellations</div>
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        +${totalRecovery.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Potential recovery with ReslotAI</div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        ${(totalRecovery * 12).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Annual recovery potential</div>
                    </div>
                  </div>
                  
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

export default PetRevenueCalculator;
