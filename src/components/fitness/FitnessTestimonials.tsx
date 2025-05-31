
import React from 'react';
import { Star } from 'lucide-react';

const FitnessTestimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "We recovered $2,800/month in just 2 weeks!",
      author: "Jessica M.",
      title: "Personal Training Director",
      business: "Elite Fitness Club",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "ReslotAI reduced our no-show rate by 38% — members love the reminders.",
      author: "Marcus T.",
      title: "Gym Manager", 
      business: "PowerZone Fitness",
      image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=300&h=300&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "Setup took hours, not days. It's rebooking cancelled sessions automatically.",
      author: "Sarah K.",
      title: "Studio Owner",
      business: "Zen Wellness Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            What Fitness Professionals Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-white ml-2">4.9/5</span>
          </div>
          <p className="text-lg text-gray-200">Trusted by 150+ fitness businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-white mb-6 font-inter">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-gray-200">
                <div className="font-semibold">— {testimonial.author}</div>
                <div className="text-sm">{testimonial.title}</div>
                <div className="text-sm text-gray-300">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5 Rating</span>
            </div>
            <p className="text-gray-200 text-sm">Based on 150+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessTestimonials;
