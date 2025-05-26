
import React from 'react';
import { Calendar, Play, BarChart } from 'lucide-react';

const DentalHowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      number: '1',
      title: 'Connect Your Calendar',
      description: 'Simple one-click integration with your existing practice management software'
    },
    {
      icon: Play,
      number: '2', 
      title: 'Activate Automation',
      description: 'Our AI starts tracking cancellations and automatically sends recovery sequences'
    },
    {
      icon: BarChart,
      number: '3',
      title: 'Monitor Revenue Recovery',
      description: 'Watch your dashboard as lost appointments turn into rescheduled revenue'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            <strong>Setup time:</strong> Less than 5 minutes • <strong>Training required:</strong> None
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DentalHowItWorks;
