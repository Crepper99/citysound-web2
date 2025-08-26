import React from 'react';
import { Shield, Clock, Wrench, Users, CheckCircle, Star } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Wrench,
      title: 'Vlastní technika',
      description: 'Žádné prostoje kvůli čekání na subdodavatele. Máme vlastní bagr, plošinu i specializované nástroje.',
      bgImage: '/work/vlastniTechnika.jpg',
      details: 'Kompletní technické vybavení pro realizaci projektů bez závislosti na třetích stranách.'
    },
    {
      icon: Users,
      title: 'Zkušený tým',
      description: 'Desítky let praxe v oboru elektroinstalací a veřejného osvětlení. Certifikovaní elektrikáři s oprávněním pro revize.',
      bgImage: '/work/tym.jpg',
      details: 'Náš tým tvoří odborníci s dlouholetou praxí a průběžnými školeními.'
    },
    {
      icon: Shield,
      title: 'Komplexní řešení',
      description: 'Jeden partner pro celý projekt od přípravy až po předání. Nemusíte koordinovat více dodavatelů.',
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      details: 'Zajistíme projektovou přípravu, realizaci i následný servis z jedné ruky.'
    },
    {
      icon: Clock,
      title: 'Spolehlivost a termíny',
      description: 'Zakládáme si na dodržování dohod a termínů. Naše reference hovoří za nás.',
      bgImage: '/nove-fotky-vyber-pridat/spolehlivost.jpg',
      details: 'Pečlivé plánování a koordinace zajišťuje dodržení stanovených termínů.'
    }
  ];

  const testimonials = [
    {
      name: 'Ing. Pavel Novák',
      position: 'Projektový manažer, STRABAG',
      text: 'CitySound je náš dlouhodobý partner pro veřejné osvětlení. Oceňujeme jejich komplexní přístup a dodržování termínů.',
      rating: 5
    },
    {
      name: 'Marie Svobodová',
      position: 'Místostarostka, Město Brno-Kohoutovice',
      text: 'Profesionální přístup a kvalitní práce. Modernizace našeho osvětlení proběhla bez problémů a ve stanovených termínech.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proč si vybrat CitySound?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Co nás odlišuje od konkurence a proč nám klienti důvěřují svoje projekty.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Background with Icon - Top Half */}
              <div 
                className="relative h-48 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${benefit.bgImage})` }}
              >
                {/* Dark overlay for better icon visibility */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                
                {/* Floating Icon */}
                <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm group-hover:bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white group-hover:text-CitySound-green-200" />
                </div>
              </div>

              {/* Content - Bottom Half */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-CitySound-green-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-CitySound-green-50 to-CitySound-green-100 border-2 border-CitySound-green-200 rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-CitySound-green-800 mb-8 text-center">
            Co říkají naši klienti
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-CitySound-green-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-CitySound-green-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-CitySound-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-CitySound-green-600" />
              <span className="text-gray-700 font-medium">Pojištění odpovědnosti</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-CitySound-green-600" />
              <span className="text-gray-700 font-medium">Certifikovaní elektrikáři</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-CitySound-green-600" />
              <span className="text-gray-700 font-medium">Záruka na všechny práce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
