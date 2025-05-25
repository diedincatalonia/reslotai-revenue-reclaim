
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FinalHeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "We'll be in touch soon to start your revenue recovery.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main value proposition recap */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            Ready to Stop Losing Money on Cancellations?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
            Join 150+ businesses recovering lost revenue automatically with ReslotAI
          </p>

          {/* Key benefits recap */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100/20 rounded-full mb-4 mx-auto">
                <Check className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">35% Recovery Rate</h3>
              <p className="text-gray-300">Automatically recover lost appointments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100/20 rounded-full mb-4 mx-auto">
                <Check className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">5-Minute Setup</h3>
              <p className="text-gray-300">Get started in minutes, not hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100/20 rounded-full mb-4 mx-auto">
                <Check className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Zero Manual Work</h3>
              <p className="text-gray-300">Fully automated smart outreach</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 font-inter">
              Start Your Free Trial Today
            </h3>
            <p className="text-gray-200 mb-6">
              No setup fees. No long-term contracts. Cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                aria-label="Start your free trial"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                aria-label="Schedule a demo"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Email capture */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                required
                aria-label="Email address"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 font-semibold px-6"
                aria-label="Get started"
              >
                Get Started
              </Button>
            </form>
          </div>

          {/* Trust badges and social proof */}
          <div className="space-y-8">
            {/* Customer rating */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-lg font-semibold ml-2">4.9/5</span>
              </div>
              <p className="text-gray-300">Rated by 150+ happy customers</p>
            </div>

            {/* Trust badges */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
                {['TechCorp', 'HealthPlus', 'BeautyMax', 'FitZone', 'ServicePro', 'WellnessCo'].map((company, index) => (
                  <div key={index} className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-white font-medium text-sm">{company}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final guarantee */}
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-200 font-semibold">
                💡 30-day money-back guarantee. Setup takes 5 minutes. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalHeroSection;
