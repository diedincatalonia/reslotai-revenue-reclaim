
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Success = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to ReslotAI! 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Your subscription has been successfully activated. Let's get you started!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold">Check your email</h3>
                    <p className="text-gray-600 text-sm">We've sent setup instructions and login details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold">Connect your systems</h3>
                    <p className="text-gray-600 text-sm">Integrate with your booking platform in 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold">Start recovering revenue</h3>
                    <p className="text-gray-600 text-sm">Watch your cancellation recovery rate improve</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-600" />
                  Support & Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Need help getting started?</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our team is here to help you succeed. Schedule a free onboarding call or access our resources.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Schedule Onboarding Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Access Help Center
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success;
