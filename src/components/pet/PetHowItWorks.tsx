
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PetHowItWorks = () => {
  const [activeExample, setActiveExample] = useState(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Smart Pet Owner Follow-ups",
      description: "Automated emails and SMS for cancelled pet appointments",
      example: {
        type: "email",
        subject: "Your Pet's Appointment - Let's Reschedule",
        content: "Dear Maria,\n\nWe understand that pet emergencies and unexpected situations happen, and we noticed you had to cancel Buddy's grooming appointment scheduled for today.\n\nRegular pet care is essential for:\n• Maintaining your pet's health and hygiene\n• Preventing matting and skin issues\n• Early detection of health problems\n• Keeping your furry friend comfortable and happy\n\nWe have these convenient appointment times available:\n• Tomorrow (Thursday) at 11:00 AM\n• Friday at 2:30 PM\n• Monday at 9:15 AM\n\nTo reschedule, simply reply to this email or call us at (555) 123-4567.\n\nYour pet's wellbeing is our priority, and we're here to work with your schedule.\n\nBest regards,\nDr. Sarah & The Pawsome Team\n\nP.S. Remember, regular grooming helps prevent health issues and keeps your pet looking and feeling their best."
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Pet Owner Engagement",
      description: "SMS conversations that convert cancellations into rebookings",
      example: {
        type: "sms",
        conversation: [
          { sender: "clinic", message: "Hello Jennifer, this is Pawsome Grooming. We noticed you needed to cancel Max's nail trim scheduled for tomorrow at 3 PM. We understand these things happen. Would you like to reschedule?" },
          { sender: "client", message: "Yes, but Max gets really anxious. Can we discuss ways to make him more comfortable?" },
          { sender: "clinic", message: "Of course! Our groomer Lisa specializes in anxious pets and uses calming techniques. We also offer pre-appointment consultations. Would that help ease your concerns?" },
          { sender: "client", message: "That sounds perfect, thank you." },
          { sender: "clinic", message: "Wonderful. Lisa can do a quick meet-and-greet this Thursday at 2 PM before the actual appointment. We also have an opening Friday at 3 PM for the nail trim. Consistent care helps pets feel more comfortable over time." },
          { sender: "client", message: "Friday at 3 PM works great. Please book us with the consultation." },
          { sender: "clinic", message: "Perfect! You're scheduled for Friday, March 15th at 3 PM with Lisa, including the consultation. We'll send you calming tips for Max beforehand. Thank you for choosing Pawsome Grooming." }
        ]
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Pet Care Insights",
      description: "Smart analytics to prevent future cancellations",
      example: {
        type: "insights",
        data: [
          { metric: "Primary cancellation reason", value: "Pet illness/emergency (32%)" },
          { metric: "Optimal contact time", value: "Within 2 hours (86% response rate)" },
          { metric: "High-risk cancellation clients", value: "7 pet owners flagged for this week" },
          { metric: "Most effective follow-up", value: "Personal SMS + pet care tips email" },
          { metric: "Revenue recovered this month", value: "$8,920 from 34 rescheduled appointments" },
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
            How ReslotAI Works for Pet Care Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see a real example of how we help pet care businesses recover appointments
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
                      className={`flex ${msg.sender === 'clinic' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          msg.sender === 'clinic'
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

export default PetHowItWorks;
