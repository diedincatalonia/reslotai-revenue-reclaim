
import React from 'react';
import { Calendar, MessageSquare, RefreshCw } from 'lucide-react';

const AutomotiveDetailingHowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Customer Cancels",
      description: "A customer cancels their detailing appointment",
      detail: "ReslotAI instantly detects the cancellation from your booking system"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "AI Reaches Out",
      description: "Our AI contacts the customer within minutes",
      detail: "Personalized messages sent via SMS and email to offer alternative times"
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-green-600" />,
      title: "Appointment Rebooked",
      description: "Customer reschedules and you keep the revenue",
      detail: "Seamless rebooking process that feels natural and non-pushy"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Recovers Your Lost Automotive Revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Our automated system works around the clock to convert cancellations into rescheduled appointments
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 rounded-full p-6">
                      {step.icon}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                  )}
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4 font-inter font-semibold">
                  {step.description}
                </p>
                <p className="text-sm text-gray-500">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveDetailingHowItWorks;
