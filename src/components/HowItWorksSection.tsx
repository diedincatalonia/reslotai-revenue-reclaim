
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
      highlight: "Business owners can set logic like 'if price is the reason, offer discount.'",
      mockup: (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <div className="border-b pb-3 mb-4">
            <div className="text-sm text-gray-500">From: ReslotAI &lt;hello@reslotai.com&gt;</div>
            <div className="text-sm text-gray-500">To: jessica@email.com</div>
            <div className="font-semibold text-gray-800">We miss you! Come back with 15% off</div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <p>Hi Jessica,</p>
            <p>We noticed you had to cancel your massage appointment yesterday. Life happens - we totally get it!</p>
            <p>Here's <span className="font-semibold text-blue-600">15% off</span> your next booking to help you get back to feeling your best.</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center my-4">
              <Button className="bg-blue-600 text-white px-6 py-2 text-sm">
                Book Now - 15% Off
              </Button>
            </div>
            <p className="text-xs text-gray-500">This offer expires in 7 days. We can't wait to see you!</p>
          </div>
        </div>
      )
    },
    {
      icon: "💬",
      title: "Smart SMS Recovery",
      description: "Intelligent text messaging that responds to customer needs.",
      highlight: "Customer replies 'Yes,' and ReslotAI reschedules automatically.",
      mockup: (
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
          <div className="bg-white rounded-t-lg p-3 border-b">
            <div className="text-xs text-gray-500 text-center">Messages</div>
            <div className="text-sm font-semibold text-center">Bella's Spa</div>
          </div>
          <div className="bg-white rounded-b-lg p-3 space-y-3 h-64 overflow-y-auto">
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Hi Jessica! We saw you missed your appointment today. We have a spot tomorrow at 3PM. Want it? Reply YES to confirm! 😊
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs text-sm">
                Yes please!
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Perfect! ✅ You're all set for tomorrow at 3PM. See you then!
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: "📋",
      title: "AI-Driven Surveys + Insights",
      description: "Quick 10-second surveys that help us serve customers better.",
      highlight: "We track your most-cancelled services and show insights over time.",
      mockup: (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-800">Quick Feedback</h4>
            <p className="text-sm text-gray-600">Help us improve (takes 10 seconds)</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why did you cancel your appointment?
              </label>
              <div className="space-y-2">
                {['Price', 'Time', 'Location', 'Other'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input 
                      type="radio" 
                      name="reason" 
                      className="mr-2 text-blue-600"
                      defaultChecked={option === 'Time'}
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional feedback (optional)
              </label>
              <textarea 
                className="w-full border border-gray-300 rounded p-2 text-sm"
                rows={3}
                placeholder="Tell us more..."
              ></textarea>
            </div>
            <Button className="w-full bg-blue-600 text-white">
              Submit Feedback
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">
            This helps us understand your needs and serve you better next time.
          </p>
        </div>
      )
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
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center md:text-left">
              <div className="text-6xl mb-6 md:text-left">{slides[currentSlide].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-inter">
                {slides[currentSlide].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                {slides[currentSlide].description}
              </p>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-2">Key Feature:</h4>
                <p className="text-green-800">{slides[currentSlide].highlight}</p>
              </div>
            </div>

            {/* Mockup Side */}
            <div className="order-first md:order-last flex justify-center">
              {slides[currentSlide].mockup}
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
