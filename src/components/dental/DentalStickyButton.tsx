
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

const DentalStickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
        >
          <Calendar className="w-6 h-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Ready to recover revenue?</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Book a free demo and see how much you can recover
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
              Book Demo
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Calculator
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DentalStickyButton;
