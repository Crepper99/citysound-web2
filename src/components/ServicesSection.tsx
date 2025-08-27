import React from 'react';
import { Lightbulb, Radio, TrafficCone as Lift, Truck, ArrowRight, Construction } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const mainServices = [
    {
      icon: Lightbulb,
      title: 'Veřejné osvětlení',
      description: 'Naše hlavní specializace - kompletní realizace moderního a úsporného veřejného osvětlení od projektové přípravy až po finální předání.',
      benefits: [
        'Úspora až 70% nákladů na elektřinu',
        'Zvýšení bezpečnosti v nočních hodinách', 
        'Moderní LED technologie',
        'Komplexní servis a údržba'
      ],
      image: '/work/20250511_213123.jpg',
      highlight: true,
      imagePosition: 'right'
    },
    {
      icon: Radio,
      title: 'Obecní a městský rozhlas',
      description: 'Specializujeme se na instalaci a údržbu rozhlasových systémů pro obce a veřejné prostory s moderní digitální technologií.',
      benefits: [
        'Digitální rozhlasové systémy',
        'Dálkové ovládání a monitoring',
        'Integrace s varovnými systémy'
      ],
      image: '/work/rozhlas.jpg',
      highlight: true,
      imagePosition: 'left'
    }
  ];

  const additionalServices = [
    {
      icon: Lift,
      title: 'Práce s montážní plošinou',
      description: 'Díky vlastní plošině jsme flexibilní a efektivní při montážních pracích ve výškách.',
      image: '/nove-fotky-vyber-pridat/Práce_s_montážní_plošinou.jpg',
      link: '/dalsi-sluzby#montazni-plosina'
    },
    {
      icon: Construction,
      title: 'Zemní práce minibagrem',
      description: 'Disponujeme vlastní technikou pro výkopy a terénní úpravy v těžko dostupných místech.',
      image: '/nove-fotky-vyber-pridat/Zamní_práce_minibagrem.jpg',
      link: '/dalsi-sluzby#zemni-prace'
    },
    {
      icon: Truck,
      title: 'Autodoprava a kontejnerizace',
      description: 'Zajišťujeme dopravu materiálu i odvoz sutě během realizace projektů.',
      image: '/nove-fotky-vyber-pridat/Autodoprava kontejner.jpg',
      link: '/dalsi-sluzby#autodoprava'
}
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Co všechno pro vás zajistíme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše hlavní specializace je veřejné osvětlení, ale díky vlastní technice a zkušenému týmu 
            dokážeme pokrýt i související služby.
          </p>
        </div>

        {/* Main Services - Featured */}
        <div className="mb-16 space-y-16">
          {mainServices.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-gradient-to-r from-CitySound-green-600 to-CitySound-green-700 rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <div className={`grid lg:grid-cols-2 gap-0 h-full ${service.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 text-white ${service.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold">{service.title}</h3>
                      {service.title === 'Veřejné osvětlení' && (
                        <span className="bg-CitySound-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full ml-auto">
                          Hlavní specializace
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xl text-green-100 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-CitySound-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-green-100 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {service.title === 'Veřejné osvětlení' ? (
                      <Link 
                        to="/verejne-osvetleni"
                        className="group inline-flex items-center space-x-2 bg-white text-CitySound-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        <span>Zjistit více</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : null}
                  </div>

                  {/* Image */}
                  <div
                    className={`relative flex items-center ${service.imagePosition === 'left' ? 'lg:col-start-1' : ''}`}
                    style={service.title === 'Veřejné osvětlení' ? { transform: 'translateY(-10%)' } : {}}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className={`absolute inset-0 ${service.imagePosition === 'left' ? 'bg-gradient-to-r from-transparent to-CitySound-green-600/20' : 'bg-gradient-to-l from-transparent to-CitySound-green-600/20'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Doplňkové služby
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-CitySound-green-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-CitySound-green-600 text-sm font-medium group-hover:text-CitySound-green-700">
                    <span>Zjistit více</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-CitySound-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Potřebujete kombinaci více služeb?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Rádi pro vás připravíme komplexní nabídku šitou na míru vašemu projektu.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Poptat kombinaci služeb
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;