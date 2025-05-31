
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GeneralMedicineHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Patient Follow-ups",
      description: "Automated emails and SMS for cancelled appointments",
      example: {
        type: "email",
        subject: "Your Health Matters - Let's Reschedule Your Appointment",
        content: "Dear Sarah,\n\nWe understand that unexpected things come up, and we noticed you had to cancel your medical appointment scheduled for today.\n\nRegular medical check-ups are crucial for:\n• Early detection of health issues\n• Preventive care and health monitoring\n• Managing chronic conditions effectively\n• Maintaining optimal wellness\n\nWe have these convenient appointment times available:\n• Tomorrow (Thursday) at 11:00 AM\n• Friday at 3:30 PM\n• Monday at 9:15 AM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour health is our priority, and we're here to provide the care you need.\n\nBest regards,\nDr. James Mitchell & The Family Care Team\n\nP.S. Regular check-ups help catch potential issues early, often saving thousands in treatment costs later."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Patient Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "practice", message: "Hello Michael, this is Family Care Medical. We noticed you needed to cancel your annual check-up scheduled for tomorrow at 10 AM. We understand these things happen. Would you like to reschedule?" },
          { sender: "patient", message: "Yes, but I'm concerned about some symptoms I've been having. Can we discuss this?" },
          { sender: "practice", message: "Of course! Dr. Mitchell would be happy to address your concerns. We can schedule a consultation to discuss your symptoms and determine if any tests are needed. Would you prefer to come in sooner?" },
          { sender: "patient", message: "That would be great. What's the earliest available?" },
          { sender: "practice", message: "We have an opening this Thursday at 2:30 PM. Dr. Mitchell can do a thorough evaluation and discuss any concerns you have. Would you like me to book this for you?" },
          { sender: "patient", message: "Perfect, Thursday at 2:30 PM works. Thank you for being so accommodating." },
          { sender: "practice", message: "Excellent! You're scheduled for Thursday, March 14th at 2:30 PM with Dr. Mitchell. Please bring any medications you're taking. Thank you for choosing Family Care Medical." }
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
          { metric: "Primary cancellation reason", value: "Work schedule conflicts (32%)" },
          { metric: "Optimal contact time", value: "Within 2 hours (84% response rate)" },
          { metric: "High-risk cancellation patients", value: "7 patients flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal call + follow-up SMS" },
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
            How ReslotAI Works for Medical Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help medical practices recover appointments
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

export default GeneralMedicineHowItWorks;
