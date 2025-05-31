
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeServicesHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Customer Follow-ups",
      description: "Automated emails and SMS for cancelled appointments",
      example: {
        type: "email",
        subject: "Your Home Project Continues - Let's Reschedule Your Service",
        content: "Dear Mr. Johnson,\n\nI understand that schedules can change, and I noticed you had to cancel your plumbing service scheduled for today.\n\nWe know how important it is to:\n• Keep your home systems running smoothly\n• Address plumbing issues before they become major problems\n• Maintain your property value\n• Ensure your family's comfort and safety\n\nI have these convenient appointment times available:\n• Tomorrow (Thursday) at 10:00 AM\n• Friday at 2:00 PM\n• Monday at 9:00 AM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour home deserves professional care, and we're here to provide reliable service you can trust.\n\nBest regards,\nMike Thompson\nElite Plumbing Services\n\nP.S. Regular maintenance helps prevent costly emergency repairs and keeps your systems running efficiently."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Customer Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "business", message: "Hi Sarah, this is Green Landscaping. I saw you needed to cancel your lawn service tomorrow at 2 PM. No worries! Would you like to reschedule?" },
          { sender: "customer", message: "Yes, but I'm not sure when would work best with the weather lately." },
          { sender: "business", message: "I totally understand! Weather can be unpredictable. We monitor conditions closely and can work around rain. How about Thursday morning around 10 AM?" },
          { sender: "customer", message: "That could work. Will you still be able to do the full treatment if it's been wet?" },
          { sender: "business", message: "Absolutely! We adjust our approach based on conditions. Thursday looks perfect - sunny with no rain expected. We'll have your lawn looking great!" },
          { sender: "customer", message: "Perfect! Thursday at 10 AM it is. Thanks for being flexible." },
          { sender: "business", message: "You're welcome! Confirmed for Thursday, March 14th at 10 AM. We'll text you the night before with any weather updates. Looking forward to it!" }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Service Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Primary cancellation reason", value: "Weather concerns (42%)" },
          { metric: "Optimal contact time", value: "Within 2 hours (84% response rate)" },
          { metric: "High-risk cancellation customers", value: "8 customers flagged this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + service details" },
          { metric: "Revenue recovered this month", value: "$12,450 from 31 rescheduled jobs" },
          { metric: "Average time to reschedule", value: "3.7 hours after cancellation" }
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
            How ReslotAI Works for Home Service Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help home service companies recover appointments
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
                      className={`flex ${msg.sender === 'business' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'business'
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

export default HomeServicesHowItWorks;
