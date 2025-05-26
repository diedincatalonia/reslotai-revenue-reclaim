
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const DentalPricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-ibm">
            Investment That Pays for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our software costs less than a single recovered appointment
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Professional Plan</h3>
            <div className="text-5xl font-bold mb-2">$99</div>
            <div className="text-blue-200 mb-6">per month</div>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Unlimited appointment tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Automated email & SMS follow-ups</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Revenue recovery dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Smart micro-surveys</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>HIPAA compliant security</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Priority support</span>
              </li>
            </ul>

            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 mb-4">
              Start Free 14-Day Trial
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <Shield className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">14 Days</div>
              <div className="text-gray-600">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">5 Minutes</div>
              <div className="text-gray-600">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalPricing;
