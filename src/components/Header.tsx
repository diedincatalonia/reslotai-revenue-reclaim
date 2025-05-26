
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
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
        <Link to="/" className="font-ibm font-bold text-2xl text-gray-900">
          ReslotAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            aria-label="Navigate to Features section"
          >
            Features
          </button>
          <Link 
            to="/how-it-works"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            How It Works
          </Link>
          <Link 
            to="/about-us"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            About Us
          </Link>
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
          <Link to="/checkout">
            <Button className="bg-gradient-cta text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
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
              <Link 
                to="/how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/about-us"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
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
              <Link to="/checkout" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-cta text-white hover:opacity-90 transition-opacity w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
