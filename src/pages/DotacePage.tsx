import React, { useState, useEffect } from 'react';
import { CheckCircle, Phone, Mail, FileText, Settings, Wrench, BarChart, ArrowRight, Clock, Euro, ChevronDown, ChevronUp, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DotacePage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Projektová a dotační příprava',
      description: 'Zanalyzujeme váš záměr a připravíme veškeré podklady. Zajistíme pasportizaci veřejného osvětlení, energetický posudek a světelně-technický projekt. Ověříme způsobilost a maximalizujeme vaše šance.',
      color: 'from-citysound-green-500 to-citysound-green-600'
    },
    {
      icon: Settings,
      title: 'Žádost a dotační management',
      description: 'Zkompletujeme a podáme žádost o dotaci vaším jménem. Postaráme se o veškerou administrativu a komunikaci s poskytovatelem dotace v průběhu schvalovacího procesu.',
      color: 'from-citysound-blue-500 to-citysound-blue-600'
    },
    {
      icon: Wrench,
      title: 'Kompletní realizace',
      description: 'Po schválení dotace převezmeme kompletní realizaci. Díky vlastní technice a zkušenému týmu provedeme zemní práce, pokládku kabeláže, montáž sloupů i moderních LED svítidel.',
      color: 'from-citysound-red-500 to-citysound-red-600'
    },
    {
      icon: BarChart,
      title: 'Administrace a podotační servis',
      description: 'Zajistíme finální vyúčtování, doložení všech dokumentů pro proplacení dotace a kompletní podotační management. Jsme váš partner po celou dobu udržitelnosti projektu.',
      color: 'from-purple-500 to-purple-600'
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
      question: 'Proč je spojení Citysound a Sunritek pro nás výhodou?',
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-citysound-green-50 via-white to-citysound-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-citysound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-citysound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Nová dotační výzva 2025: <span className="text-citysound-green-600">Získejte 75 % na modernizaci veřejného osvětlení</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Připravte svou obec na dotační programy SMARTNET a PUBGRID. Zajistíme pro vás vše od projektu a žádosti až po kompletní realizaci. Bez starostí a na klíč.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-citysound-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">75% míra dotace</h3>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-citysound-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-citysound-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vyhlášení Q3 2025</h3>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-citysound-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-citysound-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Kompletní servis na klíč</h3>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Chci konzultaci k dotaci zdarma</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Nebo nám zavolejte: <a href="tel:+420774456960" className="text-citysound-green-600 font-semibold hover:underline">+420 774 456 960</a>
            </p>
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Od prvotní myšlenky k rozsvícené obci ve 4 krocích
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš osvědčený proces zajišťuje úspěšné dokončení každého dotačního projektu
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center mb-12 last:mb-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Krok {index + 1}: {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 mt-24">
                    <ArrowRight className="w-8 h-8 text-gray-300 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vše, co potřebujete vědět o dotaci na rok 2025
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-citysound-green-600 mr-3" />
                Časový harmonogram a výše podpory
              </h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-citysound-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-citysound-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    75%
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Míra dotace</p>
                    <p className="text-sm text-gray-600">způsobilých výdajů</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-citysound-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-citysound-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q3
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Oficiální vyhlášení</p>
                    <p className="text-sm text-gray-600">Q3 2025 (červenec - září)</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-citysound-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-citysound-red-600 rounded-full flex items-center justify-center text-white font-bold">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-citysound-green-600 mr-3" />
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
                    <CheckCircle className="w-5 h-5 text-citysound-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jeden partner, kompletní expertiza. Žádní subdodavatelé.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Spojili jsme síly, abychom vám nabídli službu, která na trhu nemá obdoby. My v Citysound projekt fyzicky zrealizujeme vlastní technikou. Experti ze Sunritek zajistí bezchybnou projektovou a administrativní přípravu.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Citysound */}
            <div className="bg-gradient-to-br from-citysound-green-50 to-citysound-green-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-citysound-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Citysound.cz – Síla v realizaci</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Vlastní montážní plošiny a minibagry',
                  'Zkušení elektrikáři a montážní týmy',
                  'Kompletní zemní práce a pokládka sítí',
                  'Garance termínů a kvality provedení'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-citysound-green-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sunritek */}
            <div className="bg-gradient-to-br from-citysound-blue-50 to-citysound-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-citysound-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    <CheckCircle className="w-5 h-5 text-citysound-blue-600 flex-shrink-0 mt-1" />
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
      <section className="py-20 bg-gradient-to-r from-citysound-green-600 to-citysound-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Přes 150 úspěšných projektů mluví za nás
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
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
                  "Díky komplexnímu přístupu Citysound byl celý proces získání dotace a následné realizace nečekaně hladký. Ušetřili nám obrovské množství času a starostí a výsledek je perfektní."
                  <footer className="text-sm mt-2 opacity-80">— Starosta obce Oznice</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Odpovědi na vaše otázky
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-citysound-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-citysound-green-600" />
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
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nenechte si ujít příležitost pro rok 2025. Ozvěte se ještě dnes.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Čas na přípravu projektu je teď. Vyplňte formulář a my se vám co nejdříve ozveme na bezplatnou a nezávaznou konzultaci.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kontaktní formulář pro dotace
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-citysound-green-600 mx-auto mb-4" />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                      placeholder="Stručně popište váš záměr nebo případné otázky..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
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
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Kontaktní informace
              </h3>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-citysound-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Zavolejte nám</h4>
                    <a href="tel:+420774456960" className="text-lg font-medium text-citysound-green-600 hover:text-citysound-green-700">
                      +420 774 456 960
                    </a>
                    <p className="text-sm text-gray-600">Po-Pá: 7:00-16:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-citysound-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-citysound-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Napište nám</h4>
                    <a href="mailto:dotace@citysound.cz" className="text-lg font-medium text-citysound-blue-600 hover:text-citysound-blue-700">
                      dotace@citysound.cz
                    </a>
                    <p className="text-sm text-gray-600">Odpovídáme do 24 hodin</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-citysound-green-50 rounded-xl p-6 border border-citysound-green-200">
                <h4 className="font-bold text-citysound-green-800 mb-2">Začněte ještě dnes!</h4>
                <p className="text-citysound-green-700">
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