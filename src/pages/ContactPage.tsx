import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDnFrxpDkGB83y-OrTTQg6RY_MbjkuWfGQ&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Set a timeout to detect if map fails to load (common with API key issues)
      const mapTimeout = setTimeout(() => {
        if (!mapLoaded) {
          setMapError(true);
        }
      }, 10000); // 10 seconds timeout
      
      window.initMap = () => {
        clearTimeout(mapTimeout);
        initializeMap();
      };
      
      script.onerror = () => {
        clearTimeout(mapTimeout);
        setMapError(true);
      };
      
      // Also listen for global Google Maps API errors
      window.gm_authFailure = () => {
        clearTimeout(mapTimeout);
        setMapError(true);
      };
      
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        const coordinates = { lat: 49.4810689, lng: 17.9651569 };
        console.log('Coordinates being used:', coordinates);
        
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 9,
          center: coordinates,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        });

      // Add CSS for pulsing animation based on your provided code
      const style = document.createElement('style');
      style.textContent = `
        .pulse-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .pulse-marker {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: bold;
          box-shadow: 
            0 4px 12px rgba(0,0,0,0.3),
            0 0 20px rgba(16, 185, 129, 0.6),
            0 0 40px rgba(16, 185, 129, 0.4),
            0 0 60px rgba(16, 185, 129, 0.2);
          animation: pulse-scale 1.5s infinite;
          cursor: pointer;
        }
        
        .pulse-layer-0 {
          position: absolute;
          width: 48px;
          height: 48px;
          background: transparent;
          border: 2px solid #10b981;
          border-radius: 50%;
          z-index: 2;
          animation: pulse-wave 1.5s infinite;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .pulse-layer-1 {
          position: absolute;
          width: 60px;
          height: 60px;
          background: transparent;
          border: 2px solid #10b981;
          border-radius: 50%;
          z-index: 1;
          animation: pulse-wave 1.5s infinite;
          animation-delay: 0.2s;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        @keyframes pulse-wave {
          0%, 10% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
          80% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.3);
          }
          81%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes pulse-scale {
          0% {
            transform: scale(1);
            box-shadow: 
              0 4px 12px rgba(0,0,0,0.3),
              0 0 20px rgba(16, 185, 129, 0.6),
              0 0 40px rgba(16, 185, 129, 0.4),
              0 0 60px rgba(16, 185, 129, 0.2);
          }
          35%, 80% {
            transform: scale(1.1);
            box-shadow: 
              0 4px 16px rgba(0,0,0,0.4),
              0 0 30px rgba(16, 185, 129, 0.8),
              0 0 60px rgba(16, 185, 129, 0.6),
              0 0 90px rgba(16, 185, 129, 0.4);
          }
          100% {
            transform: scale(1);
            box-shadow: 
              0 4px 12px rgba(0,0,0,0.3),
              0 0 20px rgba(16, 185, 129, 0.6),
              0 0 40px rgba(16, 185, 129, 0.4),
              0 0 60px rgba(16, 185, 129, 0.2);
          }
        }
      `;
      document.head.appendChild(style);

      // Create clickable marker area
      const marker = new window.google.maps.Marker({
        position: coordinates,
        map: map,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><circle cx="30" cy="30" r="30" fill="transparent"/></svg>'),
          scaledSize: new window.google.maps.Size(60, 60),
          anchor: new window.google.maps.Point(30, 30)
        },
        title: 'CitySound s.r.o.',
        animation: window.google.maps.Animation.DROP
      });

      // Create pulsing overlay based on your provided component
      class PulseOverlay extends window.google.maps.OverlayView {
        private position: any;
        private div: HTMLDivElement | null = null;

        constructor(position: any) {
          super();
          this.position = position;
        }

        onAdd() {
          this.div = document.createElement('div');
          this.div.className = 'pulse-container';
          this.div.innerHTML = `
            <div class="pulse-layer-1"></div>
            <div class="pulse-layer-0"></div>
            <div class="pulse-marker">🏢</div>
          `;
          
          // Make the overlay clickable
          this.div.addEventListener('click', () => {
            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 18px; font-weight: 700;">CitySound s.r.o.</h3>
                  <p style="margin: 0 0 6px 0; color: #374151; font-weight: 600;">📍 Hranická 272, 757 01 Valašské Meziříčí</p>
                  <p style="margin: 0 0 6px 0; color: #374151; font-weight: 600;">📞 +420 774 456 960</p>
                  <p style="margin: 0; color: #374151; font-weight: 600;">✉️ citysound@citysound.cz</p>
                </div>
              `
            });
            infoWindow.setPosition(this.position);
            infoWindow.open(marker.getMap());
          });
          
          const panes = this.getPanes()!;
          panes.overlayMouseTarget.appendChild(this.div);
        }

        draw() {
          const overlayProjection = this.getProjection();
          const position = overlayProjection.fromLatLngToDivPixel(this.position);
          
          if (this.div && position) {
            this.div.style.left = (position.x - 30) + 'px';
            this.div.style.top = (position.y - 30) + 'px';
            this.div.style.position = 'absolute';
          }
        }

        onRemove() {
          if (this.div && this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
          }
        }
      }

      const pulseOverlay = new PulseOverlay(coordinates);
      pulseOverlay.setMap(map);

      // Info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 18px; font-weight: 700;">CitySound s.r.o.</h3>
            <p style="margin: 0 0 6px 0; color: #374151; font-weight: 600;">📍 Hranická 272, 757 01 Valašské Meziříčí</p>
            <p style="margin: 0 0 6px 0; color: #374151; font-weight: 600;">📞 +420 774 456 960</p>
            <p style="margin: 0; color: #374151; font-weight: 600;">✉️ citysound@citysound.cz</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        setMapError(true);
      }
    };


    loadGoogleMaps();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const subjectOptions = [
    'Nezávazná poptávka - veřejné osvětlení',
    'Pronájem montážní plošiny',
    'Zemní práce minibagrem',
    'Autodoprava a kontejnery',
    'Montáž radarů',
    'Obecný dotaz'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+420 774 456 960',
      href: 'tel:+420774456960',
      description: 'Volejte kdykoliv během pracovní doby'
    },
    {
      icon: Phone,
      title: 'Servisní linka',
      value: '+420 722 113 729',
      href: 'tel:+420722113729',
      description: 'Technická podpora a servis'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'citysound@citysound.cz',
      href: 'mailto:citysound@citysound.cz',
      description: 'Odpovídáme do 24 hodin'
    },
    {
      icon: MapPin,
      title: 'Adresa sídla',
      value: 'CitySound s.r.o., Hranická 272, 757 01 Valašské Meziříčí',
      href: 'https://mapy.com/s/pukosahuvo',
      description: 'Možnost osobní konzultace'
    },
    {
      icon: Clock,
      title: 'Pracovní doba',
      value: 'Po-Pá: 7:00-16:00',
      href: '#',
      description: 'Pro urgentní případy volejte kdykoliv'
    },
    {
      icon: Building,
      title: 'Identifikační údaje',
      value: 'IČO: 06689108',
      href: '#',
      description: 'DIČ: CZ06689108'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-CitySound-green-50 via-white to-CitySound-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-CitySound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-CitySound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Máte projekt? <span className="text-CitySound-green-600">Pojďme se bavit!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ozvěte se nám kdykoliv. První konzultace je zdarma a bez závazků. 
              Rádi si s vámi promluvíme o vašich potřebách.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+420774456960"
                className="bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zavolat +420 774 456 960</span>
              </a>
              <a
                href="mailto:citysound@citysound.cz"
                className="border-2 border-CitySound-green-600 text-CitySound-green-600 hover:bg-CitySound-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>citysound@citysound.cz</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Napište nám
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vyplňte formulář níže a my se vám ozveme do 24 hodin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Kontaktní formulář
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-CitySound-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Děkujeme za vaši poptávku!</h4>
                    <p className="text-gray-600">Ozveme se vám do 24 hodin.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Jméno a příjmení *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                          placeholder="Jan Novák"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Firma / Obec
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                          placeholder="Název firmy nebo obce"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                          placeholder="jan@firma.cz"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Předmět dotazu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Vyberte předmět dotazu</option>
                        {subjectOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Stručný popis poptávky *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                        placeholder="Popište stručně váš projekt nebo požadavky..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Odeslat zprávu</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Povinné údaje. Vaše data zpracováváme v souladu s GDPR.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Kontaktní informace
                </h3>

                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-CitySound-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-CitySound-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-lg font-medium text-CitySound-green-600 hover:text-CitySound-green-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-lg font-medium text-gray-700">{info.value}</span>
                        )}
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kde nás najdete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naše firma sídlí ve Valašském Meziříčí, odkud pokrýváme celou Moravskoslezskou oblast.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {mapError ? (
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-CitySound-green-600" />
                    <p className="text-xl font-semibold mb-2">Chyba při načítání mapy</p>
                    <p className="text-lg text-gray-700 font-medium">Hranická 272, 757 01 Valašské Meziříčí</p>
                    <p className="text-sm text-gray-500 mt-2">Možnost osobní konzultace po předchozí domluvě</p>
                    <div className="mt-4">
                      <a 
                        href="https://mapy.cz/s/pukosahuvo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-CitySound-green-600 hover:bg-CitySound-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Zobrazit na Mapy.cz
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {!mapLoaded && (
                    <div className="absolute inset-0 bg-gray-200 rounded-xl flex items-center justify-center z-10">
                      <div className="text-center text-gray-600">
                        <div className="w-8 h-8 border-4 border-CitySound-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-lg font-medium">Načítání mapy...</p>
                      </div>
                    </div>
                  )}
                  <div 
                    ref={mapRef} 
                    className="w-full h-96 rounded-xl"
                    style={{ minHeight: '384px' }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
