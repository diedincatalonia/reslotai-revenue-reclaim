
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegalHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Client Follow-ups",
      description: "Automated emails and SMS for cancelled consultations",
      example: {
        type: "email",
        subject: "Your Legal Consultation - Let's Reschedule",
        content: "Dear Mr. Johnson,\n\nWe understand that unexpected situations arise, and we noticed you had to cancel your legal consultation scheduled for today.\n\nTimely legal advice is crucial for:\n• Protecting your rights and interests\n• Meeting important deadlines\n• Avoiding costly legal complications\n• Getting the guidance you need when you need it\n\nWe have these convenient consultation times available:\n• Tomorrow (Thursday) at 2:30 PM\n• Friday at 10:15 AM\n• Monday at 1:45 PM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour legal matters are our priority, and we're here to work with your schedule.\n\nBest regards,\nAttorney Sarah Wilson & The Legal Partners Team\n\nP.S. Remember, early legal intervention often prevents more complex and expensive issues down the road."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Client Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "firm", message: "Hello Jennifer, this is Legal Partners. We noticed you needed to cancel your consultation scheduled for tomorrow at 2 PM. We understand these things happen. Would you like to reschedule?" },
          { sender: "client", message: "Yes, but I'm worried about the costs. Can we discuss fee structure first?" },
          { sender: "firm", message: "Of course! Attorney Wilson offers free initial consultations and flexible payment plans. We also provide detailed fee estimates upfront. Would a brief call help address your concerns about costs?" },
          { sender: "client", message: "That would be helpful, thank you." },
          { sender: "firm", message: "Perfect. Attorney Wilson can call you at 11 AM today to discuss your case and our fee structure. We also have an opening this Thursday at 2 PM if you'd like to proceed. Early legal advice often saves money in the long run." },
          { sender: "client", message: "Thursday at 2 PM works. Please book me with the fee discussion." },
          { sender: "firm", message: "Excellent! You're scheduled for Thursday, March 14th at 2 PM with Attorney Wilson, including fee consultation. We'll send you preparation materials shortly. Thank you for choosing Legal Partners." }
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
          { metric: "Primary cancellation reason", value: "Schedule conflicts (31%)" },
          { metric: "Optimal contact time", value: "Within 2 hours (83% response rate)" },
          { metric: "High-risk cancellation clients", value: "4 clients flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + fee information email" },
          { metric: "Revenue recovered this month", value: "$18,650 from 19 rescheduled consultations" },
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
            How ReslotAI Works for Law Firms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help law firms recover consultations
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
                      className={`flex ${msg.sender === 'firm' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'firm'
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

export default LegalHowItWorks;
