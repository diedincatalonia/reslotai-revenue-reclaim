
import React, { useState } from 'react';
import { Calendar, MessageSquare, BarChart3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutoSalesHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Customer Cancels Sales Appointment",
      description: "Automated detection and tagging of cancelled car sales appointments",
      example: {
        type: "scenario",
        title: "Real Example: Last-Minute Test Drive Cancellation",
        content: "Sarah Williams calls at 1:45 PM to cancel her 2:00 PM appointment to test drive a 2023 Honda Accord. She mentions 'something came up' but doesn't provide details. Our system immediately detects this cancellation and tags it as 'last-minute' with 'vague reason' - prime indicators for successful recovery."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart Follow-up & Survey",
      description: "Personalized messages asking why they cancelled with easy rescheduling",
      example: {
        type: "message",
        title: "Automated Recovery Message",
        content: "Text sent 30 minutes later:\n\n'Hi Sarah! We understand things come up. Was it a timing issue or do you need more info about the Accord? We have these times available: Tomorrow 3 PM, Sunday 11 AM, or Monday 6 PM. Click here to book instantly: [link]. Still interested? Reply STOP to opt out. - Mike at Honda Downtown'"
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Track Recovery Success",
      description: "Monitor which customers return and see recovered revenue in real-time",
      example: {
        type: "success",
        title: "Successful Recovery & Sale",
        content: "Sarah clicks the Sunday 11 AM slot and confirms. She arrives on time, test drives the Accord, and purchases it for $28,400 with financing.\n\nResults:\n• Total gross profit: $3,200\n• Commission earned: $640\n• Recovery time: 2 days\n\nThis sale would have been completely lost without ReslotAI intervention."
      }
    }
  ];

  const closeExample = () => setActiveExample(null);

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
              onClick={() => setActiveExample(index)}
              className="text-center p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 font-inter">
                {step.description}
              </p>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                See Example
              </Button>
            </div>
          ))}
        </div>

        {/* Example Modal */}
        {activeExample !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {steps[activeExample].example.title}
                </h3>
                <button
                  onClick={closeExample}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="whitespace-pre-line text-gray-700">
                  {steps[activeExample].example.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutoSalesHowItWorks;
