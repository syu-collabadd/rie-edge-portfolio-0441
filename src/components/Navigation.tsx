import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navigation() {
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
              RIE-Edge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>

            {/* Ventures Dropdown */}
            <div className="relative">
              <button
                onClick={() => setVenturesOpen(!venturesOpen)}
                onMouseEnter={() => setVenturesOpen(true)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>Ventures</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${venturesOpen ? 'rotate-180' : ''}`} />
              </button>

              {venturesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-navy-secondary rounded-lg shadow-xl border border-gray-700 py-2"
                  onMouseLeave={() => setVenturesOpen(false)}
                >
                  <Link
                    to="/ventures/rouzyverse"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <div className="font-medium">RouzyVerse</div>
                    <div className="text-sm text-gray-500">Photography & Media</div>
                  </Link>
                  <Link
                    to="/ventures/books"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <div className="font-medium">RIE-Edge Books</div>
                    <div className="text-sm text-gray-500">Publishing Portfolio</div>
                  </Link>
                  <Link
                    to="/ventures/investments"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <div className="font-medium">RIE-Edge Investments</div>
                    <div className="text-sm text-gray-500">Investment Ventures</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <div className="space-y-2 pl-4 border-l-2 border-gray-700">
              <div className="text-sm font-medium text-gray-500">Ventures</div>
              <Link to="/ventures/rouzyverse" className="block py-2 text-gray-300 hover:text-white transition-colors">
                RouzyVerse
              </Link>
              <Link to="/ventures/books" className="block py-2 text-gray-300 hover:text-white transition-colors">
                RIE-Edge Books
              </Link>
              <Link to="/ventures/investments" className="block py-2 text-gray-300 hover:text-white transition-colors">
                RIE-Edge Investments
              </Link>
            </div>
            <Link to="/contact" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
