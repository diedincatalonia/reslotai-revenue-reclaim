
import React from 'react';
import { Calendar, MessageSquare, BarChart3 } from 'lucide-react';

const AutoSalesHowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Customer Cancels Sales Appointment",
      description: "When a potential car buyer cancels their appointment, ReslotAI automatically triggers our recovery sequence."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart Follow-up & Survey",
      description: "We send personalized messages asking why they cancelled and offer easy rescheduling options with one-click booking."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Track Recovery Success",
      description: "Monitor which customers return, identify sales patterns, and see your recovered revenue in real-time."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Recovers Your Lost Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Our AI works 24/7 to bring cancelled customers back to your dealership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSalesHowItWorks;
