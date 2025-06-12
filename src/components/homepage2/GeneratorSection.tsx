
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Mail, Settings } from 'lucide-react';
import SurveyPopup from './SurveyPopup';

const GeneratorSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [showSurvey, setShowSurvey] = useState(false);
  const [couponAmount, setCouponAmount] = useState('20');

  const industries = [
    { name: 'Dental Services', sms: "Hi [Name], we noticed you missed your appointment. We'd love to reschedule - your dental health is important to us! Reply YES to book a new time.", email: "We understand life gets busy. Let's find a time that works better for you." },
    { name: 'Auto Services', sms: "Hi [Name], your car is still waiting for its service! We're offering a 15% discount if you reschedule this week. Reply YES to claim.", email: "Your vehicle's maintenance is crucial for safety. We're here when you're ready." },
    { name: 'Beauty & Wellness', sms: "Hi [Name], self-care shouldn't wait! We're holding your appointment slot for 24 more hours. Reply to confirm your new time.", email: "We believe everyone deserves to feel their best. Let's reschedule your appointment." },
    { name: 'Fitness Training', sms: "Hi [Name], missed your session? No worries! Your fitness journey continues. Reply to book your makeup session.", email: "Consistency is key to reaching your fitness goals. We're here to support you." },
    { name: 'Legal Services', sms: "Hi [Name], we understand legal matters are sensitive. When you're ready, we're here to help. Reply to reschedule.", email: "Legal issues require careful attention. We're available when you need us." }
  ];

  const generateMessage = (type: 'sms' | 'email') => {
    const industry = industries.find(i => i.name === selectedIndustry);
    if (industry) {
      return industry[type];
    }
    if (customInput) {
      return type === 'sms' 
        ? `Hi [Name], we noticed you missed your ${customInput} appointment. We'd love to help you reschedule!`
        : `We understand things come up. Let's find a better time for your ${customInput} service.`;
    }
    return '';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              See How We Win Back Your Customers
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Experience our AI-powered recovery messages in action
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Industry</h3>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <Button
                      key={industry.name}
                      variant={selectedIndustry === industry.name ? "default" : "outline"}
                      onClick={() => setSelectedIndustry(industry.name)}
                      className="text-sm"
                    >
                      {industry.name}
                    </Button>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Or describe your business:
                  </label>
                  <Input
                    placeholder="e.g., Massage therapy, Dog grooming, etc."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Live Message Preview</h3>
              
              <Tabs defaultValue="sms" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sms" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    SMS
                  </TabsTrigger>
                  <TabsTrigger value="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="sms" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">SMS Recovery Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <p className="text-sm">{generateMessage('sms') || 'Select an industry or enter your business type to see a preview'}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="email" className="mt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Email Recovery Message</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setShowSurvey(true)}
                        className="flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Configure Survey
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <p className="text-sm">{generateMessage('email') || 'Select an industry or enter your business type to see a preview'}</p>
                      </div>
                      <div className="text-xs text-gray-500">
                        * Includes smart survey to understand cancellation reasons and offer personalized solutions
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to See Real Results?</h4>
              <p className="text-gray-600 mb-4">
                Our AI personalizes every message based on customer behavior, timing, and your business needs.
              </p>
              <Button className="bg-gradient-cta text-white hover:opacity-90 font-semibold">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>

      <SurveyPopup 
        isOpen={showSurvey} 
        onClose={() => setShowSurvey(false)}
        couponAmount={couponAmount}
        setCouponAmount={setCouponAmount}
      />
    </section>
  );
};

export default GeneratorSection;
