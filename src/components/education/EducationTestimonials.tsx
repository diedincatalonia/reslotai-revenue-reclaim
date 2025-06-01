import React from 'react';
import { Star, User } from 'lucide-react';

const EducationTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Director, Learning Excellence Academy",
      content: "ReslotAI has been a game-changer for our tutoring center. We've recovered over $8,000 in lost revenue from cancellations in just the first two months. The automated follow-ups are so professional and effective.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, Business Consulting Pro",
      content: "As a business consultant, my time is incredibly valuable. ReslotAI has helped me recover 72% of my cancelled consultations without any effort on my part. It's like having a dedicated assistant working 24/7.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Liu",
      role: "Owner, Skills Development Institute",
      content: "The insights dashboard helped us identify patterns in cancellations we never noticed before. Now we proactively reach out to students who might cancel, and our no-show rate has dropped by 40%.",
      rating: 5,
      avatar: "JL"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            What Education Providers Say About ReslotAI
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-inter">
            Real results from real education businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 font-inter leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white font-inter">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-white font-inter">
              <strong>Join 150+ education providers</strong> who've recovered over $76k in lost revenue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTestimonials;
