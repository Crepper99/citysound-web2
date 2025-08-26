import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showLights, setShowLights] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLights(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/lightsOff.png"
          alt="Veřejné osvětlení zhasnuté"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/hero/lightsOn.jpg"
          alt="Veřejné osvětlení rozsvícené"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            showLights ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content with Frosted Glass Effect - Left Aligned */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
        <div className="max-w-4xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6">
            <CheckCircle size={16} className="text-CitySound-green-400" />
            <span className="text-sm font-medium text-white">Jediní, kdo realizují veřejné osvětlení kompletně</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left">
            Veřejné osvětlení
            <span className="block text-CitySound-green-400">od A do Z</span>
          </h1>

          {/* Subheading */}
          <div className="backdrop-blur-md bg-black/40 border border-white/30 rounded-xl p-6 mb-8 max-w-3xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed text-left">
              Zajistíme vše od výkopu a položení sítí až po finální instalaci a revizi. 
              <strong className="text-CitySound-green-300"> Kompletní řešení pro stavební firmy i obce.</strong>
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              'Vlastní technika',
              'Zkušený tým',
              'Komplexní řešení',
              'Dodržujeme termíny'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
                <CheckCircle size={16} className="text-CitySound-green-400" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-CitySound-red-600 hover:bg-CitySound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-CitySound-red-500/25"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Nezávazně poptat</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black/40 hover:bg-black/50 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Více o nás
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;