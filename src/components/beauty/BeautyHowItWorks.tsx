
import React from 'react';
import { Calendar, MessageSquare, TrendingUp } from 'lucide-react';

const BeautyHowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Client Cancels",
      description: "When a beauty appointment is cancelled, ReslotAI automatically detects it and starts the recovery process"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart Recovery",
      description: "Sends personalized messages to recover the appointment and collect feedback from your beauty clients"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Revenue Recovered",
      description: "Beauty clients rebook their appointments, and you recover lost revenue without any manual work"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Works for Beauty Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Three simple steps to automatically recover lost appointments and keep your salon booked
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SMS Conversation Example */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-inter">
            See ReslotAI in Action
          </h3>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">Hi Sarah! We noticed you had to cancel your hair appointment today. No worries - life happens! Would you like to reschedule?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Yes, I'd love to reschedule! Do you have anything available next Tuesday afternoon?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">Perfect! I have Tuesday at 2:30 PM available with your stylist Emma. Shall I book that for you?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">That works perfectly! Thank you so much!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyHowItWorks;
