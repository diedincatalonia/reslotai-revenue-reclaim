
import React from 'react';
import { Button } from '@/components/ui/button';
import { Headset, Calendar, Wrench } from 'lucide-react';

const AutoRoleSpecificSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Built for Automotive Pros Who Need Less Chaos and More Appointments
            </h2>
          </div>

          {/* Three Column Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* BDC Teams */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headset className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 BDC Teams</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• Too many no-shows?</p>
                <p className="text-gray-600">• Leads not replying?</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-bold text-gray-900">✔ Automated follow-ups</p>
                <p className="font-bold text-gray-900">✔ Smart reschedule links</p>
              </div>
            </div>

            {/* Service Advisors */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🧰 Service Advisors</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• Manual rebooking sucks time?</p>
                <p className="text-gray-600">• Empty slots costing you?</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-bold text-gray-900">✔ 1-click rebook system</p>
                <p className="font-bold text-gray-900">✔ Fills gaps automatically</p>
              </div>
            </div>

            {/* Body Shops */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Body Shops</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• Forgotten drop-offs?</p>
                <p className="text-gray-600">• Canceled repairs?</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-bold text-gray-900">✔ SMS reminders</p>
                <p className="font-bold text-gray-900">✔ AI follow-ups for approvals</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-8 font-inter max-w-3xl mx-auto">
              ReslotAI runs in the background — so your team stays focused, and your bays stay full.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-cta text-white hover:opacity-90 font-semibold px-8 py-3 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 text-lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoRoleSpecificSection;
