import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Building, Building2, User, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useCounter } from '../hooks/useCounter';

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  projectType: string;
}

const ReferencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('Všechny');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Osvětlení multifunkčního hřiště',
      client: 'Obec Prostřední Bečva',
      location: 'Prostřední Bečva',
      year: '2024',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Osvětlení multifunkčního hřiště, Prostřední bečva, 2024 .jpg',
      images: ['/nove-fotky-vyber-pridat/Osvětlení multifunkčního hřiště, Prostřední bečva, 2024 .jpg'],
      description: 'Instalace moderního a úsporného osvětlení pro multifunkční hřiště.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '2',
      title: 'Osvětlení prodejny firmy Coleman S.I.',
      client: 'Coleman S.I., a.s.',
      location: 'Ostrava - Třebovice',
      year: '2020',
      category: 'Průmyslové osvětlení',
      image: '/nove-fotky-vyber-pridat/Osvětlení prodejny firmy Colleman, Ostrava, 2020.jpg',
      images: ['/nove-fotky-vyber-pridat/Osvětlení prodejny firmy Colleman, Ostrava, 2020.jpg'],
      description: 'Kompletní návrh a realizace osvětlení prodejních prostor.',
      projectType: 'Průmyslové osvětlení'
    },
    {
      id: '3',
      title: 'Rozšíření veřejného osvětlení',
      client: 'Obec Kateřinice',
      location: 'Kateřinice',
      year: '2023',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Rozšíření VO, Kateřinice, 2023.jpg',
      images: ['/nove-fotky-vyber-pridat/Rozšíření VO, Kateřinice, 2023.jpg'],
      description: 'Rozšíření sítě veřejného osvětlení do nových částí obce.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '4',
      title: 'Výměna rozvaděče veřejného osvětlení',
      client: 'Obec Prostřední Bečva',
      location: 'Prostřední Bečva',
      year: '2021',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Výměna rozvaděče VO, Prostřední Bečva, 2021.jpg',
      images: ['/nove-fotky-vyber-pridat/Výměna rozvaděče VO, Prostřední Bečva, 2021.jpg'],
      description: 'Modernizace a výměna hlavního rozvaděče pro veřejné osvětlení.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '5',
      title: 'Výměna veřejného osvětlení',
      client: 'Město Valašské Meziříčí',
      location: 'Valašské Meziříčí',
      year: '2025',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Výměna_VO,_Valašské_Meziříčí,_2025.jpg',
      images: ['/nove-fotky-vyber-pridat/Výměna_VO,_Valašské_Meziříčí,_2025.jpg'],
      description: 'Kompletní výměna zastaralého veřejného osvětlení za moderní LED technologii.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '6',
      title: 'Výstavba bezbariérového chodníku a VO',
      client: 'Obec Hutisko-Solanec',
      location: 'Hutisko-Solanec',
      year: '2022',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Výstavba bezbariérový chodník, Hutisko Solanec VO, 2022 .jpg',
      images: ['/nove-fotky-vyber-pridat/Výstavba bezbariérový chodník, Hutisko Solanec VO, 2022 .jpg'],
      description: 'Výstavba nového veřejného osvětlení podél bezbariérového chodníku.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '7',
      title: 'Výstavba VO v zanádražním prostoru',
      client: 'Město Vsetín',
      location: 'Vsetín',
      year: '2023',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Výstavba VO zanádražní prostor, Vsetín, 2023.jpg',
      images: ['/nove-fotky-vyber-pridat/Výstavba VO zanádražní prostor, Vsetín, 2023.jpg'],
      description: 'Nové osvětlení pro zvýšení bezpečnosti v prostoru u nádraží.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '8',
      title: 'Výstavba veřejného osvětlení',
      client: 'Obec Líšnice',
      location: 'Líšnice',
      year: '2024',
      category: 'Veřejné osvětlení',
      image: '/nove-fotky-vyber-pridat/Výstavba VO, Líšnice, 2024.jpg',
      images: ['/nove-fotky-vyber-pridat/Výstavba VO, Líšnice, 2024.jpg'],
      description: 'Kompletní výstavba nového veřejného osvětlení v obci.',
      projectType: 'Veřejné osvětlení'
    },
    {
      id: '9',
      title: 'NN a datové rozvody',
      client: 'Continental Frenštát pod Radhoštěm',
      location: 'Frenštát pod Radhoštěm',
      year: '2024',
      category: 'Zemní práce',
      image: '/nove-fotky-vyber-pridat/NN rozvody, Datové rozvody Continental Frenštát p.R. , 2024.jpg',
      images: ['/nove-fotky-vyber-pridat/NN rozvody, Datové rozvody Continental Frenštát p.R. , 2024.jpg'],
      description: 'Realizace nových NN a datových rozvodů v průmyslovém areálu.',
      projectType: 'Zemní práce'
    }
  ];

  const categories = ['Všechny', 'Veřejné osvětlení', 'Zemní práce', 'Práce s plošinou', 'Kontejnery', 'Montáž radarů'];

  const filteredProjects = activeFilter === 'Všechny' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const statistics = [
    { number: 150, suffix: '+', label: 'realizovaných projektů' },
    { number: 80, suffix: '+', label: 'spokojených měst a obcí' },
    { number: 20, suffix: '+', label: 'let zkušeností v oboru' }
  ];

  // Counter hooks for statistics
  const counter1 = useCounter({ end: statistics[0].number, suffix: statistics[0].suffix });
  const counter2 = useCounter({ end: statistics[1].number, suffix: statistics[1].suffix });
  const counter3 = useCounter({ end: statistics[2].number, suffix: statistics[2].suffix });

  const cities = [
    'Ostrava', 'Brno', 'Zlín', 'Olomouc', 'Plzeň', 'Hradec Králové',
    'Praha', 'Pardubice', 'Jihlava', 'Havířov', 'Mladá Boleslav', 'Černá Hora',
    'Opava', 'Frýdek-Místek', 'Rožnov pod Radhoštěm', 'Vsetín', 'Ostravice'
  ];

  const companyLogos = {
    municipalities: [
      { name: 'Prostřední Bečva', logoPath: '/loga%20obce/prostredni-becva.svg' },
      { name: 'Hutisko Solanec', logoPath: '/loga%20obce/Hutiskos.jpg', hasEmblem: true },
      { name: 'Troubky', logoPath: '/loga%20obce/troubky.png', hasEmblem: true },
      { name: 'Valašské Meziříčí', logoPath: '/loga%20obce/valmez-logo.png' },
      { name: 'Nový Hrozenkov', logoPath: '/loga%20obce/novy%20hrozenkov.jpg', hasEmblem: true },
      { name: 'Líšnice', logoPath: '/loga%20obce/lisnice2.png', hasEmblem: true }
    ],
    companies: [
      { name: 'Porr', logoPath: '/loga%20spolecnosti/csm_PORR_RGB_01_fa09b25e5c.png' },
      { name: 'Cobbler', logoPath: '/loga%20spolecnosti/logo-retina-cobbler.png' },
      { name: 'Commodum', logoPath: '/loga%20spolecnosti/logo-commodum.svg' },
      { name: 'Swietelsky', logoPath: '/loga%20spolecnosti/swietelsky-logo.svg' },
      { name: 'Marius Pedersen', logoPath: '/loga%20spolecnosti/Marius-Pedersen.png' },
      { name: 'Empemont', logoPath: '/loga%20spolecnosti/Empemont-CZ-vertical.svg' }
    ]
  };


  // Carousel navigation functions
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Reset image index when modal opens
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-CitySound-green-50 via-white to-CitySound-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-CitySound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-CitySound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Naše práce <span className="text-CitySound-green-600">mluví za nás</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Za více než dvě dekády v oboru jsme úspěšně realizovali stovky projektů pro města, společnosti, 
              zákazníky i řad stavebních firem, měst a obcí. Podívejte se na výběr z naší práce.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div ref={counter1.elementRef} className="text-4xl md:text-5xl font-bold text-CitySound-green-600 mb-2">
                {counter1.displayValue}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {statistics[0].label}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div ref={counter2.elementRef} className="text-4xl md:text-5xl font-bold text-CitySound-green-600 mb-2">
                {counter2.displayValue}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {statistics[1].label}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div ref={counter3.elementRef} className="text-4xl md:text-5xl font-bold text-CitySound-green-600 mb-2">
                {counter3.displayValue}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {statistics[2].label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Naše realizované projekty
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-CitySound-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Zobrazit detaily</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{project.client}</p>
                  <p className="text-gray-500 text-sm mb-3">{project.location} • {project.year}</p>
                  <span className="inline-block bg-CitySound-green-100 text-CitySound-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage Section */}
      <section className="py-20 bg-gradient-to-r from-CitySound-green-600 to-CitySound-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Působíme po celém regionu
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Naše realizace najdete v desítkách měst a obcí po celé České republice. Podívejte se, 
              kde všude jsme již úspěšně dokončili projekty.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <span
                key={index}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30">
              Máte projekt v jiném regionu? Kontaktujte nás a domluvme se!
            </div>
          </div>
        </div>
      </section>

      {/* Client Collaboration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Spolupracují s námi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naše zkušenosti a spolehlivost oceňují jak přední stavební firmy, tak desítky měst a 
              obcí po celé České republice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Municipalities */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-CitySound-green-600 mr-3" />
                Města a obce
              </h3>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {companyLogos.municipalities.map((municipality, index) => (
                    <div
                      key={index}
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

            {/* Companies */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Building2 className="w-6 h-6 text-CitySound-green-600 mr-3" />
                Stavební a průmyslové firmy
              </h3>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {companyLogos.companies.map((company, index) => (
                    <div
                      key={index}
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
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - obrázek ${currentImageIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>
              
              {/* Dot Indicators */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedProject.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-CitySound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Klient: </span>
                      <span className="text-gray-600">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-CitySound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Lokalita: </span>
                      <span className="text-gray-600">{selectedProject.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-CitySound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Rok: </span>
                      <span className="text-gray-600">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 text-CitySound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Typ projektu: </span>
                      <span className="text-gray-600">{selectedProject.projectType}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <ContactSection 
        customTitle="Přesvědčila vás naše práce?"
        customSubtitle="Staňte se našim dalším spokojným zákazníkem."
      />
      
      <Footer />
    </div>
  );
};

export default ReferencePage;