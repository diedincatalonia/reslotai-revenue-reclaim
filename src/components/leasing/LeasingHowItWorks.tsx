
import React, { useState } from 'react';
import { Mail, MessageSquare, BarChart3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LeasingHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Automated Emails",
      description: "Send follow-ups with exclusive offers",
      detail: "Personalized recovery emails with apartment-specific incentives to bring prospects back.",
      example: {
        type: "email",
        title: "Automated Recovery Email Example",
        content: "Subject: Still interested in that 2BR at Skyline Apartments, Jessica?\n\nHi Jessica,\n\nWe noticed you had to cancel your apartment tour yesterday. No worries - life happens!\n\nGood news: Your 2-bedroom apartment with city views is still available, and we're offering an exclusive $200 move-in credit just for you.\n\n🏠 2BR/2BA - Unit 304 - City Views\n💰 Monthly Rent: $2,850 → Your Price: $2,650 (first month)\n⏰ Limited time offer expires in 48 hours\n\n📅 Schedule your tour:\n• Today 2:00 PM - 6:00 PM\n• Tomorrow 10:00 AM - 7:00 PM\n• Weekend tours available\n\n[SCHEDULE TOUR] [VIEW FLOOR PLANS]\n\nQuestions? Reply to this email or call Sarah directly at (555) 123-4567.\n\nBest regards,\nSarah Martinez\nSkyline Apartments Leasing Team"
      }
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Smart SMS Recovery",
      description: "Remind and reschedule via text automatically",
      detail: "Intelligent text messaging that responds to prospect needs and reschedules instantly.",
      example: {
        type: "sms",
        title: "Smart SMS Recovery Conversation",
        content: "Skyline Apartments (1:30 PM):\nHi Jessica! We understand you had to cancel your apartment tour. Still interested in the 2BR with city views? We have these times open: Today 4PM, Tomorrow 11AM, Saturday 3PM. Reply with your preferred time!\n\nJessica (1:45 PM):\nSaturday 3pm works\n\nSkyline Apartments (1:46 PM):\nPerfect! You're confirmed for Saturday 3:00 PM tour - 2BR Unit 304. Address: 456 Downtown Ave. Ask for Sarah at the leasing office. We'll have the keys ready! 🏠\n\nJessica (1:47 PM):\nGreat thanks!\n\nSkyline Apartments (Saturday 2:45 PM):\nSee you in 15 minutes Jessica! Your apartment tour is ready. Sarah will meet you at the front desk with refreshments."
      }
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "AI-Driven Insights",
      description: "Learn why prospects cancel and when they rebook",
      detail: "Track patterns and optimize your leasing process based on real prospect behavior.",
      example: {
        type: "insights",
        title: "AI-Driven Prospect Insights Dashboard",
        content: "🔍 PROSPECT BEHAVIOR INSIGHTS\n\nTop Cancellation Reasons:\n• 'Schedule conflict' - 38% (recoverable)\n• 'Still looking at options' - 31% (high-value targets)\n• 'Need to discuss with roommate' - 19% (decision makers)\n• 'Pricing concerns' - 12% (incentive opportunities)\n\n📊 Recovery Success Patterns:\n• Same-day follow-up: 81% response rate\n• Weekend rescheduling: 72% show rate\n• Incentive offers: +52% conversion\n• Text vs Email: 4.1x faster response\n\n💡 AI Recommendations:\n• Target 'still looking' prospects with comparison guides\n• Offer virtual tours for 'pricing concerns' responses\n• Schedule group tours for roommate decisions\n• Send move-in specials during peak season\n\n🎯 This Month's Impact:\n• 34 cancelled tours recovered\n• $89,000 in saved revenue\n• 27% improvement in leasing efficiency"
      }
    }
  ];

  const closeExample = () => setActiveExample(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Recovers Your Lost Leases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Our AI works 24/7 to bring cancelled prospects back to your leasing office
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

export default LeasingHowItWorks;
