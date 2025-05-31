
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TherapistHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Client Follow-ups",
      description: "Automated emails and SMS for cancelled sessions",
      example: {
        type: "email",
        subject: "Your Mental Health Journey Continues - Let's Reschedule Your Session",
        content: "Dear Sarah,\n\nI understand that life can be unpredictable, and I noticed you had to cancel your therapy session scheduled for today.\n\nConsistent therapy sessions are important for:\n• Maintaining emotional well-being\n• Processing life challenges effectively\n• Building coping strategies\n• Achieving your therapeutic goals\n\nI have these convenient session times available:\n• Tomorrow (Thursday) at 3:00 PM\n• Friday at 11:00 AM\n• Monday at 2:30 PM\n\nTo reschedule, simply reply to this email or call me at (555) 123-4567.\n\nYour mental health journey is important, and I'm here to support you every step of the way.\n\nWarm regards,\nDr. Jennifer Martinez, LCSW\nCompassionate Counseling Services\n\nP.S. Regular therapy sessions help maintain emotional balance and provide ongoing support for your personal growth."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Client Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "practice", message: "Hello Michael, this is Dr. Martinez from Compassionate Counseling. I noticed you needed to cancel your session scheduled for tomorrow at 2 PM. I understand these things happen. Would you like to reschedule?" },
          { sender: "client", message: "Yes, but I've been feeling overwhelmed lately and wasn't sure if I was ready to talk." },
          { sender: "practice", message: "It's completely normal to feel that way. Sometimes when we're overwhelmed, that's exactly when we need support most. We can take things at your pace and focus on what feels most comfortable for you." },
          { sender: "client", message: "That would be helpful. When's your next opening?" },
          { sender: "practice", message: "I have an opening this Thursday at 3 PM. We can start gently and address whatever feels most pressing for you right now. Would that work?" },
          { sender: "client", message: "Thursday at 3 PM sounds good. Thank you for being so understanding." },
          { sender: "practice", message: "Of course! You're scheduled for Thursday, March 14th at 3 PM. Remember, this is your safe space. Looking forward to supporting you through this." }
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
          { metric: "Primary cancellation reason", value: "Emotional overwhelm (35%)" },
          { metric: "Optimal contact time", value: "Within 4 hours (71% response rate)" },
          { metric: "High-risk cancellation clients", value: "6 clients flagged for this week" },
          { metric: "Most effective follow-up", value: "Empathetic SMS + supportive email" },
          { metric: "Revenue recovered this month", value: "$8,950 from 19 rescheduled sessions" },
          { metric: "Average time to reschedule", value: "5.2 hours after cancellation" }
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
            How ReslotAI Works for Therapy Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help therapy practices recover sessions
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

export default TherapistHowItWorks;
