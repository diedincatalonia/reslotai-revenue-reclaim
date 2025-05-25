
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: "✉️",
      title: "Automated Email Recovery",
      description: "AI sends personalized recovery emails based on cancellations.",
      example: "We noticed you cancelled — here's 10% off to get back on track!",
      highlight: "Business owners can set logic like 'if price is the reason, offer discount.'"
    },
    {
      icon: "💬",
      title: "Smart SMS",
      description: "Intelligent text messaging that responds to customer needs.",
      example: "Hi Jess! We saw you missed your appointment. We have a spot tomorrow at 3PM. Want it?",
      highlight: "Customer replies 'Yes,' and ReslotAI reschedules automatically."
    },
    {
      icon: "📋",
      title: "AI-Driven Surveys + Insights",
      description: "Collect feedback and gain valuable insights from cancellations.",
      example: "Quick survey with pre-selected options: price, schedule, found alternative, etc.",
      highlight: "We track your most-cancelled services and show insights over time."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Three powerful tools that work together to automatically recover lost revenue from cancellations
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex justify-center mb-8">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-all ${
                  currentSlide === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={`View ${slide.title} details`}
              >
                {slide.icon} {slide.title}
              </button>
            ))}
          </div>
        </div>

        {/* Slide Content */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">{slides[currentSlide].icon}</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-inter">
              {slides[currentSlide].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              {slides[currentSlide].description}
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Example:</h4>
              <p className="text-blue-800 italic">"{slides[currentSlide].example}"</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-2">Key Feature:</h4>
              <p className="text-green-800">{slides[currentSlide].highlight}</p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="p-2"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
