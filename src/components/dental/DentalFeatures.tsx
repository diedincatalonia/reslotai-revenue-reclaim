
import React from 'react';
import { BarChart3, Calculator, MessageSquare, Zap } from 'lucide-react';

const DentalFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Cancellation Recovery Tracking',
      description: 'Identify which services get canceled most frequently and track recovery success rates',
      benefits: ['Real-time analytics', 'Service-specific insights', 'Performance metrics']
    },
    {
      icon: Calculator,
      title: 'Revenue Recovery Calculator',
      description: 'See exactly how much revenue you\'re losing and how much you can recover',
      benefits: ['Instant loss calculation', 'Recovery projections', 'ROI visibility']
    },
    {
      icon: MessageSquare,
      title: 'Automated Follow-ups',
      description: 'Smart email and SMS sequences that automatically engage canceled patients',
      benefits: ['Personalized messaging', 'Multi-channel outreach', 'Optimal timing']
    },
    {
      icon: Zap,
      title: 'Smart Micro-Surveys',
      description: 'Quick 10-second surveys with tap responses to understand cancellation reasons',
      benefits: ['High response rates', 'Actionable insights', 'Patient feedback']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            Features That Pay for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our software recovers enough revenue from just one missed appointment per week to cover its entire cost.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-green-800 mb-2">Proven ROI</h3>
            <p className="text-green-700">
              Practices using our system recover an average of $2,400 per month in previously lost revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalFeatures;
