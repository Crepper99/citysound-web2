import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Domů', href: '/', type: 'route' },
    { label: 'Veřejné osvětlení', href: '/verejne-osvetleni', type: 'route' },
    { label: 'Další služby', href: '/dalsi-sluzby', type: 'route' },
    { label: 'Dotace', href: '/dotace', type: 'route' },
    { label: 'Reference', href: '/reference', type: 'route' },
    { label: 'Kontakt', href: '/kontakt', type: 'route' },
  ];



  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-CitySound-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="text-xl font-bold text-gray-800">CitySound</span>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      location.pathname === item.href 
                        ? 'text-CitySound-green-600' 
                        : 'text-gray-700 hover:text-CitySound-green-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-CitySound-green-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </nav>

          {/* Right Side - Contact, Social, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+420774456960"
              className="flex items-center space-x-2 text-gray-700 hover:text-CitySound-green-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+420 774 456 960</span>
            </a>
            
            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/CitySound"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-CitySound-green-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/_CitySound_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-CitySound-green-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
            
            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="group bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <span className="flex items-center space-x-2">
                <span>Nezávazně poptat</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-medium py-2 ${
                      location.pathname === item.href 
                        ? 'text-CitySound-green-600' 
                        : 'text-gray-700 hover:text-CitySound-green-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-CitySound-green-600 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <a
                  href="tel:+420774456960"
                  className="flex items-center space-x-2 text-gray-700 py-2"
                >
                  <Phone size={16} />
                  <span>+420 774 456 960</span>
                </a>
                <div className="flex items-center space-x-4 py-2">
                  <a
                    href="https://www.facebook.com/CitySound"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/_CitySound_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                </div>
                <Link
                  to="/kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-CitySound-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm mt-2 text-center inline-block"
                >
                  Nezávazně poptat
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
