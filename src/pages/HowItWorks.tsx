
import React, { useState } from 'react';
import { Play, Star, TrendingUp, Users, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      role: "Spa Owner",
      company: "Luxe Beauty Studio",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      quote: "ReslotAI recovered $3,200 in our first month. The automated surveys helped us understand why clients were cancelling - mostly scheduling conflicts. Now we offer flexible rebooking options.",
      videoUrl: "https://example.com/video1",
      insights: "Discovered 70% of cancellations were due to scheduling conflicts",
      recovery: "$3,200",
      timeframe: "First month"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Fitness Studio Owner",
      company: "Elite Fitness",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The personalized follow-ups are game-changing. Instead of generic 'come back' messages, ReslotAI sends targeted offers based on why they cancelled. Our rescheduling rate tripled.",
      videoUrl: "https://example.com/video2",
      insights: "Price sensitivity was the #1 reason for cancellations",
      recovery: "$4,800",
      timeframe: "6 weeks"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Wellness Coach",
      company: "Mindful Wellness",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The insights dashboard revealed patterns I never noticed. We learned that clients who cancelled due to 'time' often came back when offered evening slots. Revenue recovery increased 300%.",
      videoUrl: "https://example.com/video3",
      insights: "Evening appointments had 85% lower cancellation rates",
      recovery: "$2,900",
      timeframe: "2 months"
    }
  ];

  const statsData = [
    { month: 'Jan', recovered: 1200, cancellations: 45 },
    { month: 'Feb', recovered: 1800, cancellations: 52 },
    { month: 'Mar', recovered: 2400, cancellations: 48 },
    { month: 'Apr', recovered: 3200, cancellations: 38 },
    { month: 'May', recovered: 3800, cancellations: 32 },
    { month: 'Jun', recovered: 4200, cancellations: 28 }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-inter">
              Real Stories, Real Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
              See how businesses like yours are recovering thousands in lost revenue with ReslotAI
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-inter">
              Watch Their Success Stories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video Player */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative">
                    <img
                      src={currentReview.image}
                      alt={currentReview.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 absolute top-8 left-8"
                    />
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                    >
                      <Play className="w-6 h-6 mr-2" />
                      Watch {currentReview.name}'s Story
                    </Button>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 mb-6 italic font-inter">
                  "{currentReview.quote}"
                </blockquote>
                
                <div className="mb-6">
                  <div className="font-semibold text-lg text-gray-900">{currentReview.name}</div>
                  <div className="text-gray-600">{currentReview.role}</div>
                  <div className="text-blue-600">{currentReview.company}</div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-green-600">{currentReview.recovery}</div>
                      <div className="text-sm text-gray-600">Recovered in {currentReview.timeframe}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-semibold text-gray-900">Key Insight</div>
                      <div className="text-sm text-gray-600">{currentReview.insights}</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="p-2"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="p-2"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Insights Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-inter">
              Data-Driven Recovery Results
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              See the measurable impact ReslotAI has on revenue recovery and customer retention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Recovery Growth Chart */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Revenue Recovery</h3>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">+340%</div>
                <p className="text-gray-200 text-sm">Average increase in recovered revenue</p>
                
                {/* Simple Chart Visualization */}
                <div className="mt-4 space-y-2">
                  {statsData.map((data, index) => (
                    <div key={data.month} className="flex items-center">
                      <span className="text-xs text-gray-300 w-8">{data.month}</span>
                      <div className="flex-1 bg-white/20 rounded-full h-2 ml-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.recovered / 4200) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-300 ml-2">${data.recovered}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Retention */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Customer Retention</h3>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <p className="text-gray-200 text-sm">Of customers reschedule after personalized outreach</p>
                
                {/* Circular Progress */}
                <div className="mt-4 flex justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="2"
                        strokeDasharray="85, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Impact */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Average ROI</h3>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">12:1</div>
                <p className="text-gray-200 text-sm">Return on investment within 90 days</p>
                
                {/* ROI Breakdown */}
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Monthly Cost:</span>
                    <span>$99</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Avg. Recovery:</span>
                    <span>$1,200</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between text-white font-semibold">
                    <span>Net Gain:</span>
                    <span>$1,101</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Ready to Start Your Recovery Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Join 150+ businesses already using ReslotAI to automatically recover lost revenue. 
              No setup fees, no long-term contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-cta text-white hover:opacity-90 font-semibold px-8 py-4 text-lg"
              >
                Start Free 14-Day Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg"
              >
                Schedule a Demo
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">14 Days</div>
                <div className="text-gray-600">Free trial period</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5 Minutes</div>
                <div className="text-gray-600">Setup time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
