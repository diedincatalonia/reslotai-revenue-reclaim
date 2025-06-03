
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutoSalesHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Automated Emails",
      description: "Send follow-ups with exclusive offers",
      detail: "Personalized recovery emails with vehicle-specific discounts to bring customers back.",
      example: {
        type: "email",
        title: "Automated Recovery Email Example",
        content: "Subject: Still interested in that 2023 Honda Accord, Sarah?\n\nHi Sarah,\n\nWe noticed you had to cancel your test drive appointment yesterday. No worries - life happens!\n\nGood news: Your 2023 Honda Accord LX is still available, and we're offering an exclusive $500 loyalty discount just for you.\n\n🚗 2023 Honda Accord LX - Silver\n💰 MSRP: $28,400 → Your Price: $27,900\n⏰ Limited time offer expires in 48 hours\n\n📅 Book your test drive:\n• Today 4:00 PM - 6:00 PM\n• Tomorrow 10:00 AM - 7:00 PM\n• Weekend slots available\n\n[SCHEDULE TEST DRIVE] [VIEW VEHICLE DETAILS]\n\nQuestions? Reply to this email or call Mike directly at (555) 123-4567.\n\nBest regards,\nMike Johnson\nHonda Downtown Sales"
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart SMS Recovery",
      description: "Remind and reschedule via text automatically",
      detail: "Intelligent text messaging that responds to customer needs and reschedules instantly.",
      example: {
        type: "sms",
        title: "Smart SMS Recovery Conversation",
        content: "Honda Downtown (2:15 PM):\nHi Sarah! We understand you had to cancel your test drive. Still interested in the 2023 Accord? We have these times open: Today 4PM, Tomorrow 11AM, Saturday 2PM. Reply with your preferred time!\n\nSarah (2:23 PM):\nSaturday 2pm works\n\nHonda Downtown (2:24 PM):\nPerfect! You're confirmed for Saturday 2:00 PM test drive - 2023 Honda Accord LX. Address: 123 Auto Blvd. Ask for Mike. We'll have the keys ready! 🚗\n\nSarah (2:25 PM):\nGreat thanks!\n\nHonda Downtown (Saturday 1:45 PM):\nSee you in 15 minutes Sarah! Your Accord is ready for the test drive. Mike will meet you at the front desk."
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Insights",
      description: "Learn why customers cancel and when they rebook",
      detail: "Track patterns and optimize your service offerings based on real customer behavior.",
      example: {
        type: "insights",
        title: "AI-Driven Customer Insights Dashboard",
        content: "🔍 CUSTOMER BEHAVIOR INSIGHTS\n\nTop Cancellation Reasons:\n• 'Schedule conflict' - 34% (recoverable)\n• 'Still shopping around' - 28% (high-value targets)\n• 'Need to think about it' - 22% (finance hesitation)\n• 'Family discussion needed' - 16% (decision makers)\n\n📊 Recovery Success Patterns:\n• Same-day follow-up: 73% response rate\n• Weekend rescheduling: 68% show rate\n• Discount offers: +45% conversion\n• Text vs Email: 3.2x faster response\n\n💡 AI Recommendations:\n• Target 'shopping around' customers with competitive pricing alerts\n• Offer financing pre-approval for 'thinking about it' responses\n• Schedule family-friendly appointment times for multi-decision households\n\n🎯 This Month's Impact:\n• 47 cancelled appointments recovered\n• $186,000 in saved revenue\n• 23% improvement in sales efficiency"
      }
    }
  ];

  const closeExample = () => setActiveExample(null);

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
              onClick={() => setActiveExample(index)}
              className="text-center p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 font-inter font-semibold">
                {step.description}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {step.detail}
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
                  {steps[activeExample].example.title}
                </h3>
                <button
                  onClick={closeExample}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="whitespace-pre-line text-gray-700">
                  {steps[activeExample].example.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutoSalesHowItWorks;
