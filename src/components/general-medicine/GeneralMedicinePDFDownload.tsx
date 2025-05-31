
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Download } from 'lucide-react';

const GeneralMedicinePDFDownload = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Your free guide will be sent to your email shortly.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Download className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Want to Reduce Patient No-Shows Like a Pro?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Download our free PDF guide with proven strategies for medical practices
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Download:
              </h3>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  "How to Reduce Cancellations for Medical Practices"
                </h4>
                <p className="text-gray-600">
                  A comprehensive guide with actionable strategies used by successful medical practices
                </p>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-lg p-4"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-cta text-white hover:opacity-90 font-semibold text-lg p-4"
              >
                Download Free Guide
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              No spam. Just proven tips trusted by 400+ medical professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralMedicinePDFDownload;
