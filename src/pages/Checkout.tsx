
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Shield, Users, TrendingUp, Star } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isLoading, setIsLoading] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const plans = {
    starter: {
      name: 'Starter',
      monthlyPrice: 50,
      annualPrice: 500,
      monthlyDiscount: 62.5, // 25% off from $67
      features: ['1 user seat', '100 contacts', 'Email & SMS recovery', 'Basic analytics'],
      popular: false
    },
    growth: {
      name: 'Growth',
      monthlyPrice: 100,
      annualPrice: 1000,
      monthlyDiscount: 125, // 25% off from $133
      features: ['Unlimited seats', '2,000 contacts', 'Advanced analytics', 'Priority support'],
      popular: true
    },
    pro: {
      name: 'Pro',
      monthlyPrice: 150,
      annualPrice: 1500,
      monthlyDiscount: 187.5, // 25% off from $200
      features: ['Unlimited everything', 'Custom integrations', 'Dedicated manager', 'White-label option'],
      popular: false
    }
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planType: selectedPlan, billingCycle }
      });

      if (error) throw error;
      
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to start checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const savings = billingCycle === 'annual' 
    ? Math.round(((currentPlan.monthlyPrice * 12) - currentPlan.annualPrice) / (currentPlan.monthlyPrice * 12) * 100)
    : 25;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">Limited Time Offer!</span>
            </div>
            <p className="text-lg">25% OFF expires in <span className="font-mono font-bold text-xl">{formatTime(timeLeft)}</span></p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Selection */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Plan</h1>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8 bg-white rounded-lg p-1 w-fit mx-auto">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    billingCycle === 'monthly' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
                    billingCycle === 'annual' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                    Save 40%
                  </Badge>
                </button>
              </div>

              {/* Plans */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(plans).map(([key, plan]) => (
                  <Card 
                    key={key}
                    className={`relative cursor-pointer transition-all ${
                      selectedPlan === key 
                        ? 'ring-2 ring-blue-500 transform scale-105' 
                        : 'hover:shadow-lg'
                    } ${plan.popular ? 'border-blue-500' : ''}`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="space-y-1">
                        {billingCycle === 'monthly' ? (
                          <>
                            <div className="text-3xl font-bold text-green-600">
                              ${plan.monthlyDiscount}
                            </div>
                            <div className="text-sm text-gray-500 line-through">
                              ${plan.monthlyPrice}/month
                            </div>
                            <div className="text-sm text-red-600 font-medium">
                              25% OFF - Limited Time!
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-3xl font-bold text-green-600">
                              ${Math.round(plan.annualPrice / 12)}
                            </div>
                            <div className="text-sm text-gray-500">per month, billed annually</div>
                            <div className="text-sm text-gray-500 line-through">
                              ${plan.monthlyPrice}/month if billed monthly
                            </div>
                            <div className="text-sm text-green-600 font-medium">
                              Save ${(plan.monthlyPrice * 12) - plan.annualPrice}/year!
                            </div>
                          </>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 bg-white rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold">Join 2,500+ businesses already recovering revenue</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">$2.3M+</div>
                    <div className="text-sm text-gray-600">Revenue Recovered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">35%</div>
                    <div className="text-sm text-gray-600">Average Recovery Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{currentPlan.name} Plan</span>
                      <Badge variant="outline">{billingCycle}</Badge>
                    </div>
                    
                    {billingCycle === 'monthly' ? (
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Regular price:</span>
                          <span className="line-through text-gray-500">${currentPlan.monthlyPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-600 font-medium">Discounted price:</span>
                          <span className="text-green-600 font-bold">${currentPlan.monthlyDiscount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-600">You save:</span>
                          <span className="text-red-600 font-medium">${currentPlan.monthlyPrice - currentPlan.monthlyDiscount}/month</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">If billed monthly:</span>
                          <span className="line-through text-gray-500">${currentPlan.monthlyPrice * 12}/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-600 font-medium">Annual price:</span>
                          <span className="text-green-600 font-bold">${currentPlan.annualPrice}/year</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-600">You save:</span>
                          <span className="text-red-600 font-medium">${(currentPlan.monthlyPrice * 12) - currentPlan.annualPrice}/year</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-green-600">
                        ${billingCycle === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyDiscount}
                        {billingCycle === 'annual' ? '/year' : '/month'}
                      </span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleCheckout}
                    disabled={isLoading || timeLeft === 0}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                  >
                    {isLoading ? 'Processing...' : `Start ${currentPlan.name} Plan Now`}
                  </Button>

                  {/* Guarantees */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-green-600">
                      <Shield className="w-4 h-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Star className="w-4 h-4" />
                      <span>Cancel anytime, no questions asked</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600">
                      <Check className="w-4 h-4" />
                      <span>Setup in under 5 minutes</span>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "ReslotAI helped us recover $15,000 in the first month alone. The ROI is incredible!"
                    </p>
                    <p className="text-gray-600 font-medium">- Sarah M., Wellness Studio Owner</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
