import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Banner */}
      <div className="bg-navy-dark text-center py-2 px-4">
        <p className="text-xs sm:text-sm text-gray-300 font-inter font-bold leading-relaxed">
          Bugis Credit Pte Ltd is a licensed moneylender (License No. 27/2025) listed in the Registry of Moneylenders, under the Ministry of Law in Singapore.
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-navy-dark font-inter">Bugis</span>
                  <span className="text-2xl font-normal text-navy-light font-inter">Credit</span>
                </div>
                <span className="text-xs text-gray-400 font-inter uppercase tracking-wide">
                  Licensed Moneylender Since 2007
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                <span>Home</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                Types Of Loans
              </a>
              <a href="#" className="text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-navy text-sm font-medium font-inter transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-navy hover:bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-bold font-inter transition-colors">
                Request A Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                Home
              </a>
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                About Us
              </a>
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                Types Of Loans
              </a>
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                Portfolio
              </a>
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                Blog
              </a>
              <a href="#" className="block text-gray-600 hover:text-navy text-sm font-medium font-inter">
                Contact
              </a>
              <button className="w-full bg-navy hover:bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-bold font-inter transition-colors mt-4">
                Request A Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
