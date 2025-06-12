
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X, Gift, AlertTriangle } from 'lucide-react';

interface SurveyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  couponAmount: string;
  setCouponAmount: (amount: string) => void;
}

const SurveyPopup = ({ isOpen, onClose, couponAmount, setCouponAmount }: SurveyPopupProps) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [customFeedback, setCustomFeedback] = useState('');
  const [showOffer, setShowOffer] = useState(false);

  const cancellationReasons = [
    { id: 'time', label: 'Scheduling/Time Conflict', offer: 'flexible scheduling' },
    { id: 'location', label: 'Location/Travel Issues', offer: 'mobile service option' },
    { id: 'price', label: 'Price Concerns', offer: 'discount' },
    { id: 'service', label: 'Not Happy with Service', offer: 'service guarantee' }
  ];

  const handleReasonSelect = (reasonId: string) => {
    setSelectedReason(reasonId);
    setShowOffer(true);
  };

  const getOfferMessage = () => {
    const reason = cancellationReasons.find(r => r.id === selectedReason);
    if (!reason) return '';

    switch (selectedReason) {
      case 'time':
        return "We understand scheduling can be challenging. We'd like to offer you priority booking for evening or weekend appointments.";
      case 'location':
        return "Travel can be difficult. We're exploring mobile service options in your area and would love to notify you when available.";
      case 'price':
        return `We value your business. Here's a $${couponAmount} discount for your next appointment as our way of saying thank you.`;
      case 'service':
        return "Your satisfaction is our priority. We'd like to offer you a complimentary service with our senior specialist to make things right.";
      default:
        return '';
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>Customer Experience Survey</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Survey Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Discount Amount for Price Objections ($)
                  </label>
                  <Input
                    type="number"
                    value={couponAmount}
                    onChange={(e) => setCouponAmount(e.target.value)}
                    placeholder="20"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Survey Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    May we ask what occurred?
                  </h4>
                  
                  <div className="space-y-2">
                    {cancellationReasons.map((reason) => (
                      <Button
                        key={reason.id}
                        variant={selectedReason === reason.id ? "default" : "outline"}
                        onClick={() => handleReasonSelect(reason.id)}
                        className="w-full justify-start text-sm"
                      >
                        {reason.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments (Optional)
                  </label>
                  <Textarea
                    placeholder="Please describe what happened..."
                    value={customFeedback}
                    onChange={(e) => setCustomFeedback(e.target.value)}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    <AlertTriangle className="w-3 h-3 inline mr-1" />
                    This feedback goes directly to management with an alert
                  </p>
                </div>

                {showOffer && selectedReason && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Personalized Offer</span>
                    </div>
                    <p className="text-sm text-green-700">{getOfferMessage()}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={onClose} className="w-full">
              Save Configuration
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SurveyPopup;
