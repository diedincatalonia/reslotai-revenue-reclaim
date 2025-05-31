
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const LegalPricing = () => {
  const plans = [
    {
      name: "Solo Practice",
      price: "$79",
      period: "/month",
      description: "Perfect for solo practitioners and small firms",
      features: [
        "Up to 100 consultations/month",
        "SMS & Email recovery",
        "Basic analytics",
        "Customer support",
        "Easy integration"
      ],
      popular: false
    },
    {
      name: "Law Firm",
      price: "$149",
      period: "/month",
      description: "Ideal for established law firms",
      features: [
        "Up to 500 consultations/month",
        "Advanced SMS & Email recovery",
        "Detailed analytics & reporting",
        "Priority customer support",
        "Multi-attorney support",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large law firms and legal organizations",
      features: [
        "Unlimited consultations",
        "Full automation suite",
        "Advanced analytics & insights",
        "Dedicated account manager",
        "Multi-office management",
        "Custom integrations",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Simple Pricing for Legal Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Choose the plan that fits your practice's needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Questions about pricing? <a href="#" className="text-purple-600 hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalPricing;
