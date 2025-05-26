import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Initialize Supabase client with proper error handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase environment variables not configured');
}

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
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
      features: ['1 user seat', '100 contacts', 'Email & SMS recovery', 'Basic analytics'],
      popular: false
    },
    growth: {
      name: 'Growth',
      monthlyPrice: 100,
      annualPrice: 1000,
      features: ['Unlimited seats', '2,000 contacts', 'Advanced analytics', 'Priority support'],
      popular: true
    },
    pro: {
      name: 'Pro',
      monthlyPrice: 150,
      annualPrice: 1500,
      features: ['Unlimited everything', 'Custom integrations', 'Dedicated manager', 'White-label option'],
      popular: false
    }
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      if (!supabase) {
        // Fallback for when Supabase is not configured
        toast.success('Demo mode: Checkout would redirect to payment processor');
        console.log('Checkout initiated:', { planType: selectedPlan, billingCycle });
        return;
      }

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
  const monthlyPrice = billingCycle === 'annual' 
    ? Math.round(currentPlan.annualPrice / 12)
    : Math.round(currentPlan.monthlyPrice * 0.75); // 25% discount

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Limited Time: 25% OFF</span>
            </div>
            <p>Expires in <span className="font-mono font-bold text-xl">{formatTime(timeLeft)}</span></p>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
            
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
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    <div className="text-3xl font-bold text-green-600">
                      ${billingCycle === 'annual' ? Math.round(plan.annualPrice / 12) : Math.round(plan.monthlyPrice * 0.75)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {billingCycle === 'annual' ? 'per month, billed annually' : 'per month'}
                    </div>
                    {billingCycle === 'monthly' && (
                      <div className="text-sm text-red-600 font-medium">
                        25% OFF - Limited Time!
                      </div>
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

          {/* Checkout Section */}
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">{currentPlan.name} Plan</span>
                <Badge variant="outline">{billingCycle}</Badge>
              </div>
              
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">
                  ${billingCycle === 'annual' ? currentPlan.annualPrice : monthlyPrice}
                  {billingCycle === 'annual' ? '/year' : '/month'}
                </span>
              </div>

              <Button 
                onClick={handleCheckout}
                disabled={isLoading || timeLeft === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
              >
                {isLoading ? 'Processing...' : `Get ${currentPlan.name} Plan`}
              </Button>

              <div className="text-center text-sm text-gray-600 space-y-1">
                <p>✓ 30-day money-back guarantee</p>
                <p>✓ Cancel anytime</p>
                <p>✓ Setup in under 5 minutes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
