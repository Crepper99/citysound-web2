import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Veřejné osvětlení', href: '/verejne-osvetleni' },
    { name: 'Práce s montážní plošinou', href: '/dalsi-sluzby#montazni-plosina' },
    { name: 'Zemní práce minibagrem', href: '/dalsi-sluzby#zemni-prace' },
    { name: 'Autodoprava a kontejnerizace', href: '/dalsi-sluzby#autodoprava' },
    { name: 'Montáž radarů', href: '/dalsi-sluzby#montaz-radaru' }
  ];

  const quickLinks = [
    { label: 'Domů', href: '/' },
    { label: 'Veřejné osvětlení', href: '/verejne-osvetleni' },
    { label: 'Služby', href: '/dalsi-sluzby' },
    { label: 'Dotace', href: '/dotace' },
    { label: 'Reference', href: '/reference' },
    { label: 'Kontakt', href: '/kontakt' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity duration-200">
              <div className="w-10 h-10 bg-CitySound-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <span className="text-xl font-bold">CitySound</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Komplexní realizace veřejného osvětlení od A do Z. Spolehlivý partner 
              pro stavební firmy i obce po celé České republice.
            </p>
            <div className="flex items-center space-x-2 text-CitySound-green-400">
              <span className="text-2xl font-bold">20+</span>
              <span className="text-sm">let zkušeností</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Naše služby</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-CitySound-green-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-CitySound-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Certifikovaní elektrikáři s oprávněním pro revize
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-CitySound-green-400 mt-0.5" />
                <div>
                  <a
                    href="tel:+420774456960"
                    className="text-gray-300 hover:text-CitySound-green-400 transition-colors"
                  >
                    +420 774 456 960
                  </a>
                  <p className="text-xs text-gray-400">Po-Pá: 7:00-16:00</p>
                  <a
                    href="tel:+420722113729"
                    className="text-gray-300 hover:text-CitySound-green-400 transition-colors text-sm mt-1 block"
                  >
                    +420 722 113 729 (servisní)
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-CitySound-green-400 mt-0.5" />
                <div>
                  <a
                    href="mailto:CitySound@CitySound.cz"
                    className="text-gray-300 hover:text-CitySound-green-400 transition-colors"
                  >
                    CitySound@CitySound.cz
                  </a>
                  <p className="text-xs text-gray-400">Odpovídáme do 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-CitySound-green-400 mt-0.5" />
                <div>
                  <span className="text-gray-300">
                    Hranická 272<br />
                    757 01 Valašské Meziříčí
                  </span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.facebook.com/CitySound"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-CitySound-green-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/_CitySound_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-CitySound-green-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CitySound.cz - Všechna práva vyhrazena
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/kontakt" className="text-gray-400 hover:text-CitySound-green-400 transition-colors">
                Ochrana osobních údajů
              </Link>
              <Link to="/kontakt" className="text-gray-400 hover:text-CitySound-green-400 transition-colors">
                Obchodní podmínky
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
