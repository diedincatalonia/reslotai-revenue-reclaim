
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomotiveDetailingHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Customer Follow-ups",
      description: "Automated emails and SMS for cancelled appointments",
      example: {
        type: "email",
        subject: "Your Vehicle Deserves the Best - Let's Reschedule Your Detailing",
        content: "Dear Michael,\n\nWe understand that plans change, and we noticed you had to cancel your full detail appointment scheduled for today.\n\nRegular detailing is crucial for:\n• Protecting your vehicle's paint and interior\n• Maintaining resale value\n• Preventing long-term damage from contaminants\n• Keeping your car looking showroom-ready\n\nWe have these convenient appointment times available:\n• Tomorrow (Thursday) at 10:30 AM\n• Friday at 2:15 PM\n• Monday at 9:00 AM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour vehicle's appearance matters, and we're here to work with your schedule.\n\nBest regards,\nThe Elite Auto Detailing Team\n\nP.S. Regular detailing customers save an average of $1,200 annually on paint correction and interior restoration services."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Customer Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "business", message: "Hello Sarah, this is Elite Auto Detailing. We noticed you needed to cancel your ceramic coating appointment scheduled for tomorrow at 11 AM. We understand these things happen. Would you like to reschedule?" },
          { sender: "customer", message: "Yes, but I'm concerned about the cost. Is there a payment plan available?" },
          { sender: "business", message: "Absolutely! We offer flexible payment options for ceramic coating. You can split it into 3 monthly payments with no interest. The coating will protect your paint for 3+ years, saving you money on frequent waxing and paint correction." },
          { sender: "customer", message: "That sounds much better. What dates do you have available?" },
          { sender: "business", message: "Great! We have openings this Friday at 9 AM or next Tuesday at 1 PM. The coating takes about 6 hours, and we'll provide updates throughout the process. Which works better for you?" },
          { sender: "customer", message: "Friday at 9 AM works perfectly. Please book me with the payment plan." },
          { sender: "business", message: "Perfect! You're scheduled for Friday, March 15th at 9 AM for ceramic coating with our 3-payment plan. We'll send you prep instructions shortly. Thank you for choosing Elite Auto Detailing!" }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Customer Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Primary cancellation reason", value: "Weather concerns (32%)" },
          { metric: "Optimal contact time", value: "Within 2 hours (76% response rate)" },
          { metric: "High-risk cancellation customers", value: "7 customers flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + service education" },
          { metric: "Revenue recovered this month", value: "$18,650 from 31 rescheduled appointments" },
          { metric: "Average time to reschedule", value: "3.8 hours after cancellation" }
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
            How ReslotAI Works for Automotive Detailing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help detailing businesses recover appointments
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

export default AutomotiveDetailingHowItWorks;
