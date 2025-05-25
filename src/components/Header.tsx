
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-ibm font-bold text-2xl text-gray-900">
          ReslotAI
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            aria-label="Navigate to Features section"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            aria-label="Navigate to Pricing section"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('results')}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            aria-label="Navigate to Results section"
          >
            Results
          </button>
          <Button 
            onClick={() => scrollToSection('hero')}
            className="bg-gradient-cta text-white hover:opacity-90 transition-opacity"
            aria-label="Start free trial"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Features section"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Results section"
              >
                Results
              </button>
              <Button 
                onClick={() => scrollToSection('hero')}
                className="bg-gradient-cta text-white hover:opacity-90 transition-opacity w-full"
                aria-label="Start free trial"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
