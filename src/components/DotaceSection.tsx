import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, FileText, Award, ArrowRight, CheckCircle } from 'lucide-react';

const DotaceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-CitySound-blue-50 via-white to-CitySound-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-CitySound-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-CitySound-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-CitySound-green-100 text-CitySound-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Euro className="w-4 h-4" />
                <span>Získejte až 85% dotaci</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Pomoženme vám získat 
                <span className="text-CitySound-green-600"> dotaci na osvětlení</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specializujeme se na komplexní správu dotačních projektů pro veřejné osvětlení. 
                Od přípravy žádosti až po finální vyúčtování – vše za vás vyřídíme.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Až 85% úspory nákladů</span>
                    <p className="text-gray-600 text-sm">Získáme pro vás maximum z dostupných dotačních titulů</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Kompletní servis</span>
                    <p className="text-gray-600 text-sm">Od přípravy žádosti až po vyúčtování dotace</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-CitySound-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Vlastní realizace</span>
                    <p className="text-gray-600 text-sm">Veškeré práce provedeme naší technikou a lidmi</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                to="/dotace"
                className="group inline-flex items-center space-x-2 bg-CitySound-blue-600 hover:bg-CitySound-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Zjistit více o dotacích</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-CitySound-green-100 rounded-full mb-4">
                    <Award className="w-10 h-10 text-CitySound-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Úspěšnost našich žádostí
                  </h3>
                </div>

                {/* Success Rate Display */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-CitySound-green-600 mb-2">95%</div>
                  <p className="text-gray-600">schválených dotačních projektů</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-CitySound-blue-50 rounded-lg p-4">
                    <FileText className="w-8 h-8 text-CitySound-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">50+</div>
                    <div className="text-sm text-gray-600">úspěšných projektů</div>
                  </div>
                  <div className="bg-CitySound-green-50 rounded-lg p-4">
                    <Euro className="w-8 h-8 text-CitySound-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">15M+</div>
                    <div className="text-sm text-gray-600">získaných dotací</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-CitySound-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg transform rotate-12">
                Bezplatná konzultace
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DotaceSection;