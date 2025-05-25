import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResultsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We recovered $3,200/month with ReslotAI in just 3 weeks. It's completely transformed how we handle cancellations.",
      author: "Sarah Williams",
      role: "Salon Owner",
      company: "Luxe Beauty Studio",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "This tool automated what used to take hours every week. Our rescheduling success rate tripled overnight.",
      author: "Daniel Martinez",
      role: "Pet Groomer",
      company: "Paws & Claws Grooming",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The insights dashboard helped us identify why clients were cancelling. We've improved our service offerings significantly.",
      author: "Emily Chen",
      role: "Fitness Coach",
      company: "Elite Personal Training",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="results" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Performance Highlights */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-inter">
            Data-Driven Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-xl text-gray-300">Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">$76,728</div>
              <div className="text-xl text-gray-300">Revenue Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">3.5x</div>
              <div className="text-xl text-gray-300">Rescheduling Success vs Manual</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 font-inter">What Our Customers Say</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center mb-8 font-inter italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].author} profile picture`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                  <div className="text-blue-300">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="p-2 border-white/30 text-white hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-blue-400' : 'bg-white/30'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-2 border-white/30 text-white hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Split Screen Comparison */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 font-inter">Why Choose ReslotAI?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ReslotAI Side */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="text-center mb-6">
                <h4 className="font-bold text-2xl text-blue-400 mb-4">ReslotAI</h4>
                <p className="text-green-400 font-semibold">The Smart Choice</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Personalized SMS & Email</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>1-Click Smart Surveys</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Setup in 5 Minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Cancellation Insights Dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Industry-Tailored Messaging</span>
                </li>
              </ul>
            </div>
            
            {/* Other Tools Side */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <div className="text-center mb-6">
                <h4 className="font-bold text-2xl text-gray-400 mb-4">Other Tools</h4>
                <p className="text-red-400 font-semibold">Limited Solutions</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Generic Messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">No Smart Surveys</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Complex Setup Process</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">Limited Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-400">One-Size-Fits-All Approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
