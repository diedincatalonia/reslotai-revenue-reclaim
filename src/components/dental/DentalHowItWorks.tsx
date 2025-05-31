
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DentalHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Patient Follow-ups",
      description: "Automated emails and SMS for cancelled appointments",
      example: {
        type: "email",
        subject: "Don't Skip Your Cleaning - Your Smile Depends On It!",
        content: "Hi Sarah,\n\nWe noticed you had to cancel your cleaning appointment. Did you know that skipping regular cleanings can lead to gum disease and cavities?\n\nRegular cleanings every 6 months help:\n• Prevent costly dental problems\n• Maintain healthy gums\n• Keep your smile bright\n\nWe have these times available:\n• Tomorrow at 2:00 PM\n• Friday at 10:00 AM\n• Next Monday at 3:30 PM\n\nClick here to reschedule: [Book Now]\n\nDr. Smith & Team"
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Patient Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "practice", message: "Hi Mike! We saw you cancelled your root canal appointment. We understand dental anxiety - would a different time work better?" },
          { sender: "patient", message: "Yeah I'm really nervous about it" },
          { sender: "practice", message: "Totally understand! Dr. Johnson specializes in comfortable procedures. We also offer sedation options. Would you like to discuss this over a quick call?" },
          { sender: "patient", message: "That would help actually" },
          { sender: "practice", message: "Perfect! I'll have Dr. Johnson call you in 10 minutes. Also, we have a cancellation tomorrow at 1 PM if you'd prefer to get it done sooner. Sound good?" },
          { sender: "patient", message: "Yes please book me for tomorrow 1pm" }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Patient Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Most common cancellation reason", value: "Schedule conflicts (34%)" },
          { metric: "Best response time", value: "Within 2 hours (73% rebook rate)" },
          { metric: "High-risk patients", value: "3 patients likely to cancel this week" },
          { metric: "Optimal follow-up", value: "2 SMS + 1 email sequence" },
          { metric: "Revenue recovery", value: "$4,200 this month" }
        ]
      }
    }
  ];

  const closeExample = () => setActiveExample(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Works for Dental Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help dental practices recover appointments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveExample(index)}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer"
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
                  {steps[activeExample].title} Example
                </h3>
                <Button variant="outline" onClick={closeExample}>
                  ✕
                </Button>
              </div>

              {steps[activeExample].example.type === 'email' && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="border-b pb-4 mb-4">
                    <strong>Subject:</strong> {steps[activeExample].example.subject}
                  </div>
                  <div className="whitespace-pre-line text-gray-700">
                    {steps[activeExample].example.content}
                  </div>
                </div>
              )}

              {steps[activeExample].example.type === 'sms' && (
                <div className="space-y-4">
                  {steps[activeExample].example.conversation.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'practice' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'practice'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {steps[activeExample].example.type === 'insights' && (
                <div className="space-y-4">
                  {steps[activeExample].example.data.map((item, idx) => (
                    <div key={idx} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{item.metric}:</span>
                      <span className="font-bold text-blue-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DentalHowItWorks;
