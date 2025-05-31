
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AutomotiveDetailingPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Solo Shop',
      monthlyPrice: 85,
      annualPrice: 850,
      description: 'Perfect for single-bay detailing shops',
      features: [
        '1 bay/location',
        '500 customers',
        'Automated email recovery',
        'SMS notifications',
        'Basic analytics',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Multi-Bay',
      monthlyPrice: 165,
      annualPrice: 1650,
      description: 'Ideal for larger shops and mobile operations',
      features: [
        'Up to 5 bays/vehicles',
        '2,500 customers',
        'Advanced email & SMS recovery',
        'Customer surveys',
        'Detailed analytics',
        'Priority support',
        'Custom templates'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 285,
      annualPrice: 2850,
      description: 'For automotive chains and large operations',
      features: [
        'Unlimited bays/locations',
        'Unlimited customers',
        'Multi-location support',
        'Advanced integrations',
        'Custom reporting',
        'Dedicated account manager',
        'Phone support'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Often costs less than a single recovered ceramic coating appointment
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-semibold ${!isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-semibold ${isAnnual ? 'text-blue-600' : 'text-gray-500'}`}>
              Annual
              <span className="text-green-600 text-sm ml-1">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.highlighted ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-inter">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-green-600 font-medium">
                      Billed annually (${plan.annualPrice}/year)
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full mb-8 ${
                    plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  } text-white font-semibold`}
                >
                  Start Free Trial
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-blue-900 font-inter">
              <strong>30-day free trial.</strong> No setup fees. Cancel anytime. Money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveDetailingPricing;
