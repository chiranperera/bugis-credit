import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Banner - Hidden on mobile */}
      <div className="hidden sm:block bg-navy-dark text-center py-2 px-4">
        <p className="text-gray-300 font-inter leading-relaxed" style={{fontSize: '0.9rem', fontWeight: '400'}}>
          Bugis Credit Pte Ltd is a licensed moneylender (License No. 27/2025)
          listed in the Registry of Moneylenders, under the Ministry of Law in
          Singapore.
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Bugis-Credit-Logo-Black-V2.png" 
                alt="Bugis Credit Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
                <span>Home</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
                Types Of Loans
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-navy text-sm font-inter transition-colors" style={{fontWeight: '400'}}
              >
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
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
                Types Of Loans
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-navy text-sm font-inter" style={{fontWeight: '400'}}
              >
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
