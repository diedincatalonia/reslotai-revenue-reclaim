
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Calculator, Tag } from 'lucide-react';

const BeautyFinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-ibm">
            Stop Losing Revenue to Cancellations
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 200+ beauty professionals already recovering thousands in lost revenue every month
          </p>

          {/* Promotional Code Banner */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/30">
            <div className="flex items-center justify-center gap-3">
              <Tag className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-semibold">Limited Time: Use code <span className="bg-yellow-300 text-blue-900 px-2 py-1 rounded font-bold">GLOW</span> for 10% off your first month!</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-blue-100">65% average recovery rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p className="text-blue-100">Live in under 5 minutes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Guaranteed ROI</h3>
              <p className="text-blue-100">30-day money back guarantee</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              Try It for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Calculate Your Revenue
            </Button>
          </div>

          <div className="text-blue-200 text-sm">
            ✓ No setup fees ✓ No contracts required ✓ Beauty industry compliant ✓ 24/7 support
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautyFinalCTA;
