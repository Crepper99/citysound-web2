import React from 'react';
import { Building2, MapPin, Users, Award } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

const ReferencesSection: React.FC = () => {
  const constructionCompanies = [
    { name: 'Porr', logoPath: '/loga%20spolecnosti/csm_PORR_RGB_01_fa09b25e5c.png' },
    { name: 'Cobbler', logoPath: '/loga%20spolecnosti/logo-retina-cobbler.png' },
    { name: 'Commodum', logoPath: '/loga%20spolecnosti/logo-commodum.svg' },
    { name: 'Swietelsky', logoPath: '/loga%20spolecnosti/swietelsky-logo.svg' },
    { name: 'Marius Pedersen', logoPath: '/loga%20spolecnosti/Marius-Pedersen.png' },
    { name: 'Empemont', logoPath: '/loga%20spolecnosti/Empemont-CZ-vertical.svg' }
  ];

  const municipalities = [
    { name: 'Prostřední Bečva', logoPath: '/loga%20obce/prostredni-becva.svg' },
    { name: 'Hutisko Solanec', logoPath: '/loga%20obce/Hutiskos.jpg', hasEmblem: true },
    { name: 'Troubky', logoPath: '/loga%20obce/troubky.png', hasEmblem: true },
    { name: 'Valašské Meziříčí', logoPath: '/loga%20obce/Pro%20obrazovka-logo-valmez-pozitiv.png' },
    { name: 'Nový Hrozenkov', logoPath: '/loga%20obce/novy%20hrozenkov.jpg', hasEmblem: true },
    { name: 'Líšnice', logoPath: '/loga%20obce/lisnice2.png', hasEmblem: true }
  ];

  const stats = [
    { icon: Building2, value: 150, suffix: '+', label: 'Realizovaných projektů' },
    { icon: MapPin, value: 80, suffix: '+', label: 'Spokojených obcí' },
    { icon: Users, value: 20, suffix: '', label: 'Let zkušeností' },
    { icon: Award, value: 100, suffix: '%', label: 'Spokojenost klientů' },
  ];

  // Counter hooks for statistics
  const counter1 = useCounter({ end: stats[0].value, suffix: stats[0].suffix });
  const counter2 = useCounter({ end: stats[1].value, suffix: stats[1].suffix });
  const counter3 = useCounter({ end: stats[2].value, suffix: stats[2].suffix });
  const counter4 = useCounter({ end: stats[3].value, suffix: stats[3].suffix });

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Spolupracujeme s lídry v oboru i veřejné správě
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše reference hovoří za nás. Důvěřují nám přední stavební firmy i desítky měst a obcí po celé České republice.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-scale-in" style={{ animationDelay: '0s' }}>
            <div className="w-16 h-16 bg-CitySound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-CitySound-green-600" />
            </div>
            <div ref={counter1.elementRef} className="text-3xl font-bold text-gray-800 mb-1">{counter1.displayValue}</div>
            <div className="text-gray-600 text-sm">{stats[0].label}</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-CitySound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-CitySound-green-600" />
            </div>
            <div ref={counter2.elementRef} className="text-3xl font-bold text-gray-800 mb-1">{counter2.displayValue}</div>
            <div className="text-gray-600 text-sm">{stats[1].label}</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-CitySound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-CitySound-green-600" />
            </div>
            <div ref={counter3.elementRef} className="text-3xl font-bold text-gray-800 mb-1">{counter3.displayValue}</div>
            <div className="text-gray-600 text-sm">{stats[2].label}</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-CitySound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-CitySound-green-600" />
            </div>
            <div ref={counter4.elementRef} className="text-3xl font-bold text-gray-800 mb-1">{counter4.displayValue}</div>
            <div className="text-gray-600 text-sm">{stats[3].label}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Construction Companies */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Building2 className="w-6 h-6 text-CitySound-green-600 mr-3" />
              Stavební firmy
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {constructionCompanies.map((company, index) => (
                  <div
                    key={company.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-CitySound-green-50 transition-colors duration-300 p-4">
                      <div className="logo-container">
                        <img
                          src={company.logoPath}
                          alt={`${company.name} logo`}
                          className="logo-image"
                        />
                        <div className="tooltip">
                          {company.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Municipalities */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-CitySound-green-600 mr-3" />
              Města a obce
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {municipalities.map((municipality, index) => (
                  <div
                    key={municipality.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-CitySound-green-50 transition-colors duration-300 p-4">
                      <div className="logo-container">
                        {municipality.hasEmblem ? (
                          <div className="flex flex-col items-center space-y-1">
                            <img
                              src={municipality.logoPath}
                              alt={`${municipality.name} znak`}
                              className="logo-image max-h-10"
                            />
                            <span className="text-xs text-gray-600 font-medium text-center leading-tight">
                              {municipality.name}
                            </span>
                          </div>
                        ) : (
                          <img
                            src={municipality.logoPath}
                            alt={`${municipality.name} logo`}
                            className="logo-image"
                          />
                        )}
                        <div className="tooltip">
                          {municipality.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-CitySound-green-100 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-CitySound-green-600" />
            <span className="text-CitySound-green-800 font-semibold">
              Certifikovaní elektrikáři s odbornou způsobilostí
            </span>
          </div>
        </div>
        
        {/* Our Work Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Naše realizace
            </h3>
            <p className="text-lg text-gray-600">
              Prohlédněte si výběr z našich úspěšných projektů
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              '/nove-fotky-vyber-pridat/Osvětlení multifunkčního hřiště, Prostřední bečva, 2024 .jpg',
              '/nove-fotky-vyber-pridat/Výstavba VO, Líšnice, 2024.jpg',
              '/nove-fotky-vyber-pridat/NN rozvody, Datové rozvody Continental Frenštát p.R. , 2024.jpg',
              '/nove-fotky-vyber-pridat/Rozšíření VO, Kateřinice, 2023.jpg',
              '/nove-fotky-vyber-pridat/Výstavba VO zanádražní prostor, Vsetín, 2023.jpg',
              '/nove-fotky-vyber-pridat/Výměna_VO,_Valašské_Meziříčí,_2025.jpg',
              '/nove-fotky-vyber-pridat/Výstavba bezbariérový chodník, Hutisko Solanec VO, 2022 .jpg',
              '/work/20210107_150459.jpg',
              '/work/20210630_145321.jpg', 
              '/work/20230219_150700.jpg',
              '/work/20241115_112046.jpg',
              '/work/20241213_085617.jpg',
              '/work/20250226_091248.jpg',
              '/work/20250412_091130.jpg',
              '/work/20250511_205703.jpg',
              '/work/20250511_210358.jpg',
              '/work/20250511_211440.jpg',
              '/work/20250511_212135.jpg'
            ].map((imagePath, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={imagePath}
                  alt={`Realizace č. ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
