
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

const DentalUrgency = () => {
  const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60); // 7 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const mins = Math.floor((seconds % (60 * 60)) / 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-ibm">
            Limited Time: Free Onboarding & Setup
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-semibold">Offer expires in:</span>
            </div>
            <div className="text-4xl font-bold font-mono mb-4">
              {formatTime(timeLeft)}
            </div>
            <p className="text-orange-100">
              Save $299 on professional setup and training (normally included only with annual plans)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-orange-100">Demo slots left this week</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">24h</div>
              <div className="text-orange-100">Average setup time</div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
            Book Your Free Demo Now
          </Button>
          
          <p className="text-sm text-orange-100 mt-4">
            No credit card required • Cancel anytime • HIPAA compliant
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalUrgency;
