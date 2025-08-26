import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  customTitle?: string;
  customSubtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  customTitle = "Máte projekt nebo se chcete jen poradit?",
  customSubtitle = "Napište nám nebo zavolejte. První konzultace je zdarma a bez závazků."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+420 774 456 960',
      href: 'tel:+420774456960',
      description: 'Volejte kdykoliv během pracovní doby'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'CitySound@CitySound.cz',
      href: 'mailto:CitySound@CitySound.cz',
      description: 'Odpovídáme do 24 hodin'
    },
    {
      icon: MapPin,
      title: 'Adresa',
      value: 'Hranická 272, 757 01 Valašské Meziříčí',
      href: 'https://mapy.com/s/pukosahuvo',
      target: '_blank',
      rel: 'noopener noreferrer',
      description: 'Možnost osobní konzultace'
    },
    {
      icon: Clock,
      title: 'Pracovní doba',
      value: 'Po-Pá: 7:00-16:00',
      href: '#',
      description: 'Pro urgentní případy volejte kdykoliv'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {customTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {customSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Nezávazná poptávka
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
                    <span>Odeslat poptávku</span>
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

            {/* Quick CTA */}
            <div className="mt-8 bg-gradient-to-r from-CitySound-green-600 to-CitySound-green-700 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Potřebujete rychlou odpověď?</h4>
              <p className="mb-4">Zavolejte nám přímo, rádi si s vámi promluvíme o vašem projektu.</p>
              <a
                href="tel:+420774456960"
                className="inline-block bg-white text-CitySound-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Zavolat +420 774 456 960
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
