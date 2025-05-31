
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Car } from 'lucide-react';

const AutomotiveDetailingPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$47",
      description: "Perfect for small detailing shops",
      features: [
        "Up to 50 appointments/month",
        "SMS & Email recovery",
        "Basic analytics",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "$97",
      description: "Most popular for growing shops",
      features: [
        "Up to 200 appointments/month",
        "Advanced AI messaging",
        "Detailed analytics & reporting",
        "Priority support",
        "Custom message templates",
        "Integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$197", 
      description: "For large detailing operations",
      features: [
        "Unlimited appointments",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting suite",
        "Multi-location support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Car className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Simple Pricing for Automotive Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Choose the plan that fits your detailing operation. All plans include our core recovery features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105' 
                  : 'bg-gray-50'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                  <span className={`text-lg font-normal ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-600'}`} />
                    <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full font-semibold ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-gradient-cta text-white hover:opacity-90'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            ✓ No setup fees ✓ Cancel anytime ✓ Dedicated automotive support
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveDetailingPricing;
