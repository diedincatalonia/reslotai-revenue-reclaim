
import React from 'react';
import { Star } from 'lucide-react';

const TherapistTestimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "We recovered $7,200 in one month alone!",
      author: "Dr. Lisa Thompson",
      title: "Licensed Clinical Social Worker",
      business: "Mindful Healing Center",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "ReslotAI cut our no-show rate by 48% — clients appreciate the gentle reminders.",
      author: "Dr. Mark Rodriguez",
      title: "Licensed Marriage & Family Therapist", 
      business: "Family Connections Therapy",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: "Setup was incredibly easy. It's automatically rebooking cancelled sessions.",
      author: "Jennifer Kim",
      title: "Practice Manager",
      business: "Wellness Grove Counseling",
      image: "https://images.unsplash.com/photo-1594824388637-0d72c8c2d826?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            What Mental Health Professionals Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-white ml-2">4.8/5</span>
          </div>
          <p className="text-lg text-gray-200">Trusted by 300+ therapy practices</p>
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
              <span className="text-lg font-semibold text-white">4.8/5 Rating</span>
            </div>
            <p className="text-gray-200 text-sm">Based on 300+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistTestimonials;
