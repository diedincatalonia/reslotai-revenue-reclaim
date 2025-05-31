
import React from 'react';
import { Star, Car } from 'lucide-react';

const AutomotiveDetailingTestimonials = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Elite Auto Detailing",
      image: "/placeholder.svg",
      rating: 5,
      quote: "ReslotAI helped us recover $4,200 in the first month alone. Our cancellation rate dropped by 68% and our shop stays busy.",
      results: "+$4,200 recovered"
    },
    {
      name: "Sarah Johnson", 
      business: "Premium Car Care",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The AI messaging feels natural and professional. Customers appreciate the flexibility to reschedule easily.",
      results: "68% cancellation recovery"
    },
    {
      name: "David Chen",
      business: "Mobile Detail Pro",
      image: "/placeholder.svg", 
      rating: 5,
      quote: "As a mobile detailer, cancelled appointments used to kill my schedule. Now ReslotAI fills those gaps automatically.",
      results: "+25% revenue increase"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Car className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Trusted by 300+ Automotive Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            See what detailing shop owners are saying about their revenue recovery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomotiveDetailingTestimonials;
