import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Phone, Mail, FileText, Settings, Wrench, BarChart, ArrowRight, Clock, Euro, ChevronDown, ChevronUp, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DotacePage: React.FC = () => {
  // Add custom styles for smooth animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      .animate-scale-in {
        animation: scaleIn 0.8s ease-out forwards;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; }
      .delay-500 { animation-delay: 500ms; }
      .delay-600 { animation-delay: 600ms; }
      .delay-700 { animation-delay: 700ms; }
      .delay-800 { animation-delay: 800ms; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set up intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev.add(entry.target.id)));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    // Use a timeout to ensure DOM elements are rendered
    const setupObserver = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        if (observerRef.current && el.id) {
          observerRef.current.observe(el);
        }
      });
    };
    
    // Set up observer after a short delay to ensure all elements are rendered
    setTimeout(setupObserver, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Projektová a dotační příprava',
      description: 'Zanalyzujeme váš záměr a připravíme veškeré podklady. Zajistíme pasportizaci veřejného osvětlení, energetický posudek a světelně-technický projekt. Ověříme způsobilost a maximalizujeme vaše šance.',
      color: 'from-CitySound-green-500 to-CitySound-green-600',
      image: '/nove-fotky-vyber-pridat/ikonka1-1krok.png'
    },
    {
      icon: Settings,
      title: 'Žádost a dotační management',
      description: 'Zkompletujeme a podáme žádost o dotaci vaším jménem. Postaráme se o veškerou administrativu a komunikaci s poskytovatelem dotace v průběhu schvalovacího procesu.',
      color: 'from-CitySound-blue-500 to-CitySound-blue-600',
      image: '/nove-fotky-vyber-pridat/ikonka-krok2.png'
    },
    {
      icon: Wrench,
      title: 'Kompletní realizace',
      description: 'Po schválení dotace převezmeme kompletní realizaci. Díky vlastní technice a zkušenému týmu provedeme zemní práce, pokládku kabeláže, montáž sloupů i moderních LED svítidel.',
      color: 'from-CitySound-red-500 to-CitySound-red-600',
      image: '/nove-fotky-vyber-pridat/ikonka3-krok3.png'
    },
    {
      icon: BarChart,
      title: 'Administrace a podotační servis',
      description: 'Zajistíme finální vyúčtování, doložení všech dokumentů pro proplacení dotace a kompletní podotační management. Jsme váš partner po celou dobu udržitelnosti projektu.',
      color: 'from-purple-500 to-purple-600',
      image: '/nove-fotky-vyber-pridat/ikonka-krok4.png'
    }
  ];

  const faqs = [
    {
      question: 'Kdo může o dotaci z výzvy SMARTNET a PUBGRID žádat?',
      answer: 'Oprávněnými žadateli jsou především obce, města, městské části a svazky obcí. Rádi s vámi zdarma ověříme, zda splňujete podmínky.'
    },
    {
      question: 'Jaká je přesně výše podpory a co zbylých 25 %?',
      answer: 'Dotace pokrývá 75 % tzv. způsobilých výdajů. Zbylou část lze financovat z rozpočtu obce, případně vám pomůžeme najít možnosti výhodného úvěrování.'
    },
    {
      question: 'Proč je spojení CitySound a Sunritek pro nás výhodou?',
      answer: 'Nemusíte koordinovat 3-4 různé firmy (projektanta, dotačního specialistu, realizační firmu...). My jsme jeden partner, jeden kontakt a neseme plnou zodpovědnost za výsledek od začátku do konce. Tím eliminujeme chyby, zpoždění a nedorozumění.'
    },
    {
      question: 'Co když žádost o dotaci nebude úspěšná?',
      answer: 'Díky naší expertíze a detailní přípravě dosahujeme maximální možné úspěšnosti. Pokud by přesto žádost nebyla schválena, zpracování žádosti vás nic nestojí. Navrhneme vám další postup, například vyčkání na další výzvu nebo alternativní řešení.'
    },
    {
      question: 'Kolik stojí vaše služby?',
      answer: 'Úvodní konzultace a analýza vašeho záměru je vždy zdarma. Náklady na kompletní přípravu a administraci projektu jsou způsobilým výdajem, na který se z velké části vztahuje samotná dotace. Vše transparentně naceníme předem.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dotace form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        city: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="hero" 
        data-animate 
        className={`pt-32 pb-20 bg-gradient-to-br from-CitySound-green-50 via-white to-CitySound-blue-50 relative overflow-hidden transition-all duration-1000 ${
          visibleElements.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-CitySound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-CitySound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Nová dotační výzva 2025: <span className="text-CitySound-green-600">Získejte 75 % na modernizaci veřejného osvětlení</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Připravte svou obec na dotační programy SMARTNET a PUBGRID. Zajistíme pro vás vše od projektu a žádosti až po kompletní realizaci. Bez starostí a na klíč.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-CitySound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-CitySound-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">75% míra dotace</h3>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-CitySound-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-CitySound-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vyhlášení Q3 2025</h3>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-CitySound-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-CitySound-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kompletní servis na klíč</h3>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Chci konzultaci k dotaci zdarma</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Nebo nám zavolejte: <a href="tel:+420774456960" className="text-CitySound-green-600 font-semibold hover:underline">+420 774 456 960</a>
            </p>
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="process-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleElements.has('process-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Od prvotní myšlenky k rozsvícené obci ve 4 krocích
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš osvědčený proces zajišťuje úspěšné dokončení každého dotačního projektu
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const stepId = `step-${index + 1}`;
              
              return (
                <div 
                  key={index} 
                  id={stepId}
                  data-animate
                  className={`mb-20 last:mb-0 transition-all duration-1000 delay-${index * 200} ${
                    visibleElements.has(stepId) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-16 scale-95'
                  }`}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}>
                    {/* Image */}
                    <div className={`flex items-center justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <div className="relative group transform group-hover:scale-105 transition-all duration-500">
                        <img
                          src={step.image}
                          alt={`Ilustrace pro krok ${index + 1}: ${step.title}`}
                          className="w-full h-auto max-w-md mx-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          Krok {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="flex items-center space-x-2 pt-4">
                        {steps.map((_, stepIndex) => (
                          <div
                            key={stepIndex}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              stepIndex <= index 
                                ? `bg-gradient-to-r ${step.color} w-8` 
                                : 'bg-gray-200 w-4'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mt-16">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent opacity-30"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section 
        id="info-section" 
        data-animate 
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          visibleElements.has('info-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="info-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleElements.has('info-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vše, co potřebujete vědět o dotaci na rok 2025
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Timeline */}
            <div 
              id="timeline-card" 
              data-animate 
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-500 ${
                visibleElements.has('timeline-card') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-CitySound-green-600 mr-3" />
                Časový harmonogram a výše podpory
              </h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-CitySound-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-CitySound-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    75%
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Míra dotace</p>
                    <p className="text-sm text-gray-600">způsobilých výdajů</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-CitySound-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-CitySound-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q3
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Oficiální vyhlášení</p>
                    <p className="text-sm text-gray-600">Q3 2025 (červenec - září)</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-CitySound-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-CitySound-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q4
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Příjem žádostí</p>
                    <p className="text-sm text-gray-600">Q4 2025 (říjen - prosinec)</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Možnost realizace</p>
                    <p className="text-sm text-gray-600">Až 5 let od schválení dotace</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Eligible Expenses */}
            <div 
              id="expenses-card" 
              data-animate 
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-700 ${
                visibleElements.has('expenses-card') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-CitySound-green-600 mr-3" />
                Na co lze dotaci využít?
              </h3>
              <div className="space-y-4">
                {[
                  'Výměna a doplnění úsporných LED svítidel',
                  'Rekonstrukce a modernizace rozvaděčů a vedení',
                  'Instalace inteligentního řídicího systému',
                  'Nezbytné stavební práce (včetně zemních prací)',
                  'Projektová dokumentace (všechny stupně)',
                  'Energetický posudek a pasportizace',
                  'Administrace výběrového řízení a dotační management'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-CitySound-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section 
        id="partnership-section" 
        data-animate 
        className={`py-20 bg-white transition-all duration-1000 ${
          visibleElements.has('partnership-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="partnership-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleElements.has('partnership-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jeden partner, kompletní expertiza. Žádní subdodavatelé.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Spojili jsme síly, abychom vám nabídli službu, která na trhu nemá obdoby. My v CitySound projekt fyzicky zrealizujeme vlastní technikou. Experti ze Sunritek zajistí bezchybnou projektovou a administrativní přípravu.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CitySound */}
            <div 
              id="CitySound-card" 
              data-animate 
              className={`bg-gradient-to-br from-CitySound-green-50 to-CitySound-green-100 rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-500 hover:shadow-2xl hover:scale-105 ${
                visibleElements.has('CitySound-card') ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-10 -rotate-3'
              }`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-CitySound-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">CitySound.cz – Síla v realizaci</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Vlastní montážní plošiny a minibagry',
                  'Zkušení elektrikáři a montážní týmy',
                  'Kompletní zemní práce a pokládka sítí',
                  'Garance termínů a kvality provedení'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-CitySound-green-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sunritek */}
            <div 
              id="sunritek-card" 
              data-animate 
              className={`bg-gradient-to-br from-CitySound-blue-50 to-CitySound-blue-100 rounded-2xl p-8 shadow-lg transition-all duration-1000 delay-700 hover:shadow-2xl hover:scale-105 ${
                visibleElements.has('sunritek-card') ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-3'
              }`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-CitySound-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Sunritek s.r.o. – Jistota v přípravě</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Projekce a DSP:', desc: 'Kompletní projektová dokumentace VO včetně stavebního povolení.' },
                  { label: 'Energetika (ENEP):', desc: 'Energetické posudky, pasporty a analýzy.' },
                  { label: 'Dotace (Consulting):', desc: 'Zpracování a kompletní vyřízení dotačních žádostí.' },
                  { label: 'Optimalizace (KEPS):', desc: 'Analýza sazeb a poradenství od energetického specialisty.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-CitySound-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-gray-800 font-semibold">{item.label}</span>
                      <span className="text-gray-700"> {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Project */}
      <section 
        id="reference-section" 
        data-animate 
        className={`py-20 bg-gradient-to-r from-CitySound-green-600 to-CitySound-blue-600 transition-all duration-1000 ${
          visibleElements.has('reference-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="reference-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleElements.has('reference-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Přes 150 úspěšných projektů mluví za nás
            </h2>
          </div>
          
          <div 
            id="reference-card" 
            data-animate 
            className={`max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-1000 delay-500 ${
              visibleElements.has('reference-card') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/work/20241115_112046.jpg"
                  alt="Rekonstrukce veřejného osvětlení Oznice"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Projekt: Kompletní rekonstrukce VO v obci Oznice</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span><strong>Rozsah:</strong> 45 nových úsporných LED svítidel</span>
                  </p>
                  <p className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span><strong>Výsledek:</strong> Úspora 65 % nákladů na energie a výrazně vyšší bezpečnost</span>
                  </p>
                </div>
                <blockquote className="border-l-4 border-white/50 pl-4 italic text-lg">
                  "Díky komplexnímu přístupu CitySound byl celý proces získání dotace a následné realizace nečekaně hladký. Ušetřili nám obrovské množství času a starostí a výsledek je perfektní."
                  <footer className="text-sm mt-2 opacity-80">— Starosta obce Oznice</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq-section" 
        data-animate 
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          visibleElements.has('faq-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="faq-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleElements.has('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Odpovědi na vaše otázky
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                id={`faq-${index}`}
                data-animate
                className={`bg-white rounded-xl shadow-lg mb-4 overflow-hidden transition-all duration-1000 hover:shadow-xl ${
                  visibleElements.has(`faq-${index}`) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-98'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-CitySound-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-CitySound-green-600" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="contact-form" 
        data-animate 
        className={`py-20 bg-white transition-all duration-1000 ${
          visibleElements.has('contact-form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            id="cta-header" 
            data-animate 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${
              visibleElements.has('cta-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nenechte si ujít příležitost pro rok 2025. Ozvěte se ještě dnes.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Čas na přípravu projektu je teď. Vyplňte formulář a my se vám co nejdříve ozveme na bezplatnou a nezávaznou konzultaci.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              id="contact-form-card" 
              data-animate 
              className={`bg-gray-50 rounded-2xl p-8 transition-all duration-1000 delay-500 ${
                visibleElements.has('contact-form-card') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kontaktní formulář pro dotace
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-CitySound-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Děkujeme za vaši poptávku!</h4>
                  <p className="text-gray-600">Ozveme se vám do 24 hodin s nezávaznou konzultací.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      Obec/Město *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                      placeholder="Název obce nebo města"
                    />
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
                        placeholder="jan@obec.cz"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Krátká zpráva
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-CitySound-green-500 focus:border-transparent transition-colors"
                      placeholder="Stručně popište váš záměr nebo případné otázky..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Odeslat poptávku</span>
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Povinné údaje. Vaše data zpracováváme v souladu s GDPR.
                  </p>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div 
              id="contact-info-card" 
              data-animate 
              className={`space-y-6 transition-all duration-1000 delay-700 ${
                visibleElements.has('contact-info-card') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kontaktní informace
              </h3>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-CitySound-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-CitySound-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Zavolejte nám</h4>
                    <a href="tel:+420774456960" className="text-lg font-medium text-CitySound-green-600 hover:text-CitySound-green-700">
                      +420 774 456 960
                    </a>
                    <p className="text-sm text-gray-600">Po-Pá: 7:00-16:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-CitySound-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-CitySound-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Napište nám</h4>
                    <a href="mailto:dotace@citysound.cz" className="text-lg font-medium text-CitySound-blue-600 hover:text-CitySound-blue-700">
                      dotace@citysound.cz
                    </a>
                    <p className="text-sm text-gray-600">Odpovídáme do 24 hodin</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-CitySound-green-50 rounded-xl p-6 border border-CitySound-green-200">
                <h4 className="font-bold text-CitySound-green-800 mb-2">Začněte ještě dnes!</h4>
                <p className="text-CitySound-green-700">
                  Příprava kvalitního dotačního projektu trvá několik měsíců. Čím dříve začneme, tím lepší šanci na úspěch budete mít.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DotacePage;