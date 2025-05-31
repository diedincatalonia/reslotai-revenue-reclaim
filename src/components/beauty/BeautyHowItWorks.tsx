
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BeautyHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Client Follow-ups",
      description: "Automated emails and SMS for cancelled appointments",
      example: {
        type: "email",
        subject: "Your Beauty Appointment - Let's Reschedule",
        content: "Dear Sarah,\n\nWe understand that unexpected things come up, and we noticed you had to cancel your hair appointment scheduled for today.\n\nRegular beauty appointments are important for:\n• Maintaining healthy hair and skin\n• Keeping your style fresh and updated\n• Preventing damage from neglect\n• Staying confident and looking your best\n\nWe have these convenient appointment times available:\n• Tomorrow (Thursday) at 2:30 PM\n• Friday at 10:15 AM\n• Monday at 1:45 PM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour beauty is our passion, and we're here to work with your schedule.\n\nBest regards,\nEmma & The Luxe Salon Team\n\nP.S. Remember, regular appointments help maintain your hair health and keep your color vibrant longer."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Client Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "salon", message: "Hello Jennifer, this is Luxe Salon. We noticed you needed to cancel your color appointment scheduled for tomorrow at 2 PM. We understand these things happen. Would you like to reschedule?" },
          { sender: "client", message: "Yes, but I'm worried about the color turning out right. Can we discuss it?" },
          { sender: "salon", message: "Of course! Our colorist Emma has 8 years of experience and can do a consultation first. We also offer a color guarantee. Would a brief call help address your concerns?" },
          { sender: "client", message: "That would be great, thank you." },
          { sender: "salon", message: "Perfect. Emma can call you at 11 AM today to discuss your color goals. We also have an opening this Thursday at 2 PM if you'd like to proceed. Fresh color always looks best when done promptly." },
          { sender: "client", message: "Thursday at 2 PM works. Please book me with the consultation." },
          { sender: "salon", message: "Excellent! You're scheduled for Thursday, March 14th at 2 PM with Emma, including consultation. We'll send you color care instructions shortly. Thank you for choosing Luxe Salon." }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Client Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Primary cancellation reason", value: "Work schedule conflicts (28%)" },
          { metric: "Optimal contact time", value: "Within 3 hours (81% response rate)" },
          { metric: "High-risk cancellation clients", value: "5 clients flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + styling tips email" },
          { metric: "Revenue recovered this month", value: "$12,850 from 23 rescheduled appointments" },
          { metric: "Average time to reschedule", value: "4.2 hours after cancellation" }
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
            How ReslotAI Works for Beauty Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help beauty businesses recover appointments
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
                      className={`flex ${msg.sender === 'salon' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'salon'
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

export default BeautyHowItWorks;
