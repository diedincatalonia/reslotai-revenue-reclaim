
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 50,
      description: 'Perfect for small businesses getting started',
      features: [
        '1 user seat',
        '100 contacts',
        'Automated email & SMS recovery',
        'Smart surveys',
        'Basic analytics',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Growth',
      price: 100,
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited seats',
        '2,000 contacts',
        'Automated email & SMS recovery',
        'Smart surveys',
        'Advanced analytics',
        'Priority email support',
        'Custom messaging templates'
      ],
      highlighted: true
    },
    {
      name: 'Pro',
      price: 150,
      description: 'For established businesses with high volume',
      features: [
        'Unlimited seats and contacts',
        'Automated email & SMS recovery',
        'Smart surveys',
        'Full cancellation insights dashboard',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Flexible Plans Built for Every Business
          </h2>
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-green-800 font-semibold">
              💡 Recover just 3 cancellations per month and your plan pays for itself.
            </p>
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
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <Button 
                  className={`w-full mb-8 ${
                    plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  } text-white font-semibold`}
                  aria-label={`Start ${plan.name} plan`}
                >
                  Start {plan.name} Plan
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
              <strong>Setup takes just 5 minutes.</strong> Cancel anytime. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
