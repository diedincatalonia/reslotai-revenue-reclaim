
import React from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';

const AutoHowItWorks = () => {
  const features = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Automated Emails",
      description: "Send follow-ups with exclusive offers",
      detail: "Personalized recovery emails with service-specific discounts to bring customers back."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-600" />,
      title: "Smart SMS Recovery", 
      description: "Remind and reschedule via text automatically",
      detail: "Intelligent text messaging that responds to customer needs and reschedules instantly."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "AI-Driven Insights",
      description: "Learn why customers cancel and when they rebook",
      detail: "Track patterns and optimize your service offerings based on real customer behavior."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Three powerful tools that automatically recover lost revenue from automotive service cancellations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 font-inter">
                {feature.description}
              </p>
              <p className="text-sm text-gray-500">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoHowItWorks;
