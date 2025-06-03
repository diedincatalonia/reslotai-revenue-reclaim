
import React, { useState } from 'react';
import { Calendar, MessageSquare, BarChart3, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AutoSalesHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Customer Cancels Sales Appointment",
      description: "When a potential car buyer cancels their appointment, ReslotAI automatically triggers our recovery sequence.",
      example: {
        title: "Real Example: Last-Minute Cancellation",
        content: "Sarah Williams calls at 1:45 PM to cancel her 2:00 PM appointment to test drive a 2023 Honda Accord. She mentions 'something came up' but doesn't provide details. Our system immediately detects this cancellation and tags it as 'last-minute' with 'vague reason' - prime for recovery."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart Follow-up & Survey",
      description: "We send personalized messages asking why they cancelled and offer easy rescheduling options with one-click booking.",
      example: {
        title: "Automated Recovery Message Sent",
        content: "Text sent 30 minutes later: 'Hi Sarah! We understand things come up. Was it a timing issue or do you need more info about the Accord? We have these times available: Tomorrow 3 PM, Sunday 11 AM, or Monday 6 PM. Click here to book instantly: [link]. Still interested? Reply STOP to opt out. - Mike at Honda Downtown'"
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Track Recovery Success",
      description: "Monitor which customers return, identify sales patterns, and see your recovered revenue in real-time.",
      example: {
        title: "Successful Recovery & Sale",
        content: "Sarah clicks the Sunday 11 AM slot and confirms. She arrives on time, test drives the Accord, and purchases it for $28,400 with financing. Total gross profit: $3,200. Commission earned: $640. Recovery time: 2 days. This sale would have been completely lost without ReslotAI intervention."
      }
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
              <p className="text-gray-600 leading-relaxed font-inter mb-6">
                {step.description}
              </p>
              
              <Button
                onClick={() => setActiveExample(activeExample === index ? null : index)}
                variant="outline"
                className="w-full"
              >
                <Eye className="w-4 h-4 mr-2" />
                {activeExample === index ? 'Hide Example' : 'See Example'}
              </Button>

              {activeExample === index && (
                <Card className="mt-6 text-left">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-gray-900">
                        {step.example.title}
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveExample(null)}
                        className="p-1 h-auto"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step.example.content}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSalesHowItWorks;
