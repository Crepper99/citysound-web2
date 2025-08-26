import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Truck, Construction, TrafficCone as Lift, ArrowRight, CheckCircle, Wrench, Users } from 'lucide-react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top first
    window.scrollTo(0, 0);
    
    // Then check if there's a hash and scroll to it
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const services = [
    {
      icon: Lift,
      title: 'Montážní plošina',
      description: 'Pronájem montážní plošiny Renault Maxity pro práce ve výškách až 18 metrů.',
      image: '/work/20241115_112046.jpg'
    },
    {
      icon: Construction,
      title: 'Zemní práce',
      description: 'Výkopy, terénní úpravy a pokládka kabelů pomocí minibagru Kubota KX-019.',
      image: '/nove-fotky-vyber-pridat/Zemní práce a NN sítě.jpg'
    },
    {
      icon: Truck,
      title: 'Autodoprava',
      description: 'Přeprava materiálu a poskytování kontejnerů pro stavební práce.',
      image: '/nove-fotky-vyber-pridat/Autodoprava kontejner.jpg'
    },
  ];

  const maxitySpecs = [
    { label: 'Maximální pracovní výška', value: '16 m' },
    { label: 'Nosnost košíku', value: '230 kg' },
    { label: 'Boční dosah', value: '9,5 m' },
    { label: 'Rozměry vozidla', value: '5,99 x 2,13 x 2,85 m' }
  ];

  const kubotaSpecs = [
    { label: 'Provozní hmotnost', value: '1 920 kg' },
    { label: 'Maximální hloubka kopání', value: '2 390 mm' },
    { label: 'Maximální dosah', value: '4 140 mm' },
    { label: 'Šířka podvozku', value: '990 mm' }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToService = (serviceId: string) => {
    document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-CitySound-green-50 to-CitySound-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Naše další <span className="text-CitySound-green-600">služby a technika</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Kromě veřejného osvětlení nabízíme komplexní služby včetně pronájmu specializované techniky 
              a provádění různých stavebních prací.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/ž/g, 'z').replace(/í/g, 'i').replace(/á/g, 'a').replace(/é/g, 'e').replace(/ř/g, 'r').replace(/ů/g, 'u').replace(/ý/g, 'y').replace(/č/g, 'c').replace(/š/g, 's').replace(/ť/g, 't').replace(/ď/g, 'd').replace(/ň/g, 'n');
              return (
              <div 
                key={index} 
                onClick={() => scrollToService(serviceId)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-CitySound-green-600 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Renault Maxity Section */}
      <section id="montazni-plosina" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/nove-fotky-vyber-pridat/Práce_s_montážní_plošinou.jpg"
                alt="Montážní plošina Renault Maxity"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Práce s montážní plošinou <span className="text-CitySound-green-600">Renault Maxity</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nabízíme pronájem plošiny na podvozku Renault Maxity - 3,5 t. 
                Ideální pro práce ve výškách, údržbu osvětlení, instalace nebo opravy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Výškový dosah plošiny</span>
                  <span className="font-bold text-CitySound-green-600">18 m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Stranivý dosah</span>
                  <span className="font-bold text-CitySound-green-600">7,5 m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Nosnost koše</span>
                  <span className="font-bold text-CitySound-green-600">200 kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Hmotnost vozidla</span>
                  <span className="font-bold text-CitySound-green-600">3,5 t</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Pronajmout montážní plošinu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kubota Section */}
      <section id="zemni-prace" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Zemní práce minibagrem <span className="text-CitySound-green-600">Kubota KX-019</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nabízíme pronájem minibagru Kubota KX-019 - 2t. Rybadlo je vybaveno lžicemi o šířce 25 mm, 40 mm 
                a naklápěcí svahovou lžici o šířce 1000 mm.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Hmotnost</span>
                  <span className="font-bold text-CitySound-green-600">2 t</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Hloubkový dosah</span>
                  <span className="font-bold text-CitySound-green-600">2680 mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Výsypná výška</span>
                  <span className="font-bold text-CitySound-green-600">2560 mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Šířka pásů (stavitelná)</span>
                  <span className="font-bold text-CitySound-green-600">990 - 1300 mm</span>
                </div>
              </div>
              
              <div className="bg-CitySound-green-50 p-4 rounded-lg mb-8">
                <h4 className="font-semibold text-CitySound-green-800 mb-2">Dostupné vybavení:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-CitySound-green-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Lžice 25 mm a 40 mm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Naklápěcí svahová lžice 1000 mm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Hydraulické kladivo (na přání)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Vrtací zařízení (na přání)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Objednat zemní práce
              </button>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col">
              <img
                src="/nove-fotky-vyber-pridat/Zamní_práce_minibagrem.jpg"
                alt="Minibagr Kubota KX-019"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="/nove-fotky-vyber-pridat/Zemní práce a NN sítě.jpg"
                  alt="Zemní práce"
                  className="rounded-lg shadow-md aspect-[4/3] w-full object-cover"
                />
                <img
                  src="/nove-fotky-vyber-pridat/Zamní_práce_minibagrem.jpg"
                  alt="Výkopové práce"
                  className="rounded-lg shadow-md aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="autodoprava" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/nove-fotky-vyber-pridat/Autodoprava kontejner.jpg"
                alt="Autodoprava a kontejnery"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-CitySound-green-600">Autodoprava</span> a kontejnery
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nabízíme možnost přepravy 3,5 t - 8 t. Máme k dispozici 
                vůz Fiat Talento a kontejnerový sklápěč DAF s možností různých typů kontejnerových nástaveb.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fiat Talento - dodávkový vůz</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">DAF - kontejnerový sklápěč</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Různé typy kontejnerových nástaveb</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Zajistit dopravu a kontejnery
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <ContactSection 
        customTitle="Máte zájem o některou z našich služeb?"
        customSubtitle="Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku."
      />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
