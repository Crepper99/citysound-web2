import React from 'react';
import { FileText, Shovel, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Projekt & Konzultace',
      description: 'Analyzujeme vaše potřeby a navrhneme optimální řešení včetně výběru svítidel a technologií.',
      details: ['Technická konzultace zdarma', 'Návrh optimálního řešení', 'Výpočet úspor energie'],
      bgImage: '/work/dokumentace.jpg'
    },
    {
      icon: Shovel,
      title: 'Zemní práce & NN sítě',
      description: 'Pomocí vlastní techniky připravíme terén a profesionálně položíme kabeláž nízkého napětí.',
      details: ['Vlastní bagr a technika', 'Příprava výkopů', 'Pokládka elektrických sítí'],
      bgImage: '/work/20210630_145321.jpg'
    },
    {
      icon: Lightbulb,
      title: 'Montáž osvětlení',
      description: 'Nainstalujeme stožáry, výložníky a moderní úsporná LED svítidla podle projektové dokumentace.',
      details: ['Montáž stožárů a výložníků', 'Instalace LED svítidel', 'Připojení rozvodů'],
      bgImage: '/work/elektroinstalace.jpeg'
    },
    {
      icon: CheckCircle,
      title: 'Revize & Předání',
      description: 'Vše odborně zapojíme, provedeme povinné revize a předáme vám kompletně funkční osvětlení.',
      details: ['Odborné zapojení', 'Elektrické revize', 'Předání dokumentace'],
      bgImage: '/nove-fotky-vyber-pridat/hand-shake.jpg'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Jak vypadá spolupráce od A do Z?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Náš unikátní přístup spočívá v tom, že nemusíte koordinovat více dodavatelů. 
            Vše zajistíme vlastními silami a technikou.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-CitySound-green-300 via-CitySound-green-500 to-CitySound-green-300"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step Card with Split Layout */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Image Background with Icon - Top Half */}
                  <div 
                    className="relative h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                  >
                    {/* Dark overlay for better icon visibility */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Icon in Top-Left Corner */}
                    <div className="absolute top-4 left-4 z-10 w-12 h-12 bg-CitySound-green-600 group-hover:bg-CitySound-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content - Bottom Half */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-CitySound-green-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-base">
                      {step.description}
                    </p>
                    
                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-CitySound-green-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="w-6 h-6 text-CitySound-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-CitySound-green-50 to-CitySound-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Proč je náš přístup unikátní?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Zatímco jiné firmy pouze část prací zadávají subdodavatelům, my máme vše pod kontrolou. 
              <strong> Výsledek? Rychlejší realizace, lepší kvalita a žádné prostoje.</strong>
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Chci konzultaci zdarma
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;