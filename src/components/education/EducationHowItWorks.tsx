
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EducationHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Student Follow-ups",
      description: "Automated emails and SMS for cancelled classes",
      example: {
        type: "email",
        subject: "Your Learning Session - Let's Reschedule",
        content: "Dear Sarah,\n\nWe understand that things come up, and we noticed you had to cancel your consultation session scheduled for today.\n\nContinuous learning is essential for:\n• Achieving your professional goals\n• Building valuable skills\n• Staying competitive in your field\n• Making progress on your learning journey\n\nWe have these convenient session times available:\n• Tomorrow (Thursday) at 3:00 PM\n• Friday at 11:00 AM\n• Monday at 2:30 PM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour learning success is our priority, and we're here to support your schedule.\n\nBest regards,\nDr. Martinez & The Learning Academy Team\n\nP.S. Consistent learning sessions lead to better retention and faster skill development."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Student Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "school", message: "Hi Michael, this is Learning Academy. We noticed you needed to cancel your marketing consultation scheduled for tomorrow at 1 PM. We understand these things happen. Would you like to reschedule?" },
          { sender: "student", message: "Yes, but I'm concerned about keeping up with the pace of the program." },
          { sender: "school", message: "That's completely normal! Dr. Martinez offers personalized learning plans and can adjust the pace to match your learning style. Would a brief call help address your concerns about the program structure?" },
          { sender: "student", message: "That would be really helpful, thank you." },
          { sender: "school", message: "Perfect. Dr. Martinez can call you at 10 AM today to discuss your learning goals and adjust your plan. We also have an opening this Thursday at 1 PM if you'd like to continue. Consistent sessions help maintain momentum." },
          { sender: "student", message: "Thursday at 1 PM works. Please book me with the consultation call first." },
          { sender: "school", message: "Excellent! You're scheduled for Thursday, March 14th at 1 PM with Dr. Martinez, including the consultation call. We'll send you preparation materials shortly. Thank you for choosing Learning Academy." }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Learning Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Primary cancellation reason", value: "Schedule conflicts (28%)" },
          { metric: "Optimal contact time", value: "Within 90 minutes (87% response rate)" },
          { metric: "High-risk cancellation students", value: "6 students flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + learning progress email" },
          { metric: "Revenue recovered this month", value: "$12,450 from 23 rescheduled sessions" },
          { metric: "Average time to reschedule", value: "2.1 hours after cancellation" }
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
            How ReslotAI Works for Education Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help education providers recover sessions
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
                      className={`flex ${msg.sender === 'school' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'school'
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

export default EducationHowItWorks;
