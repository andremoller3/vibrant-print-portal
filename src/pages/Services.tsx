import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = [servicesRef.current, processRef.current];

    sections.forEach(section => {
      if (section) {
        const animateElements = section.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Banners, Faixas e Fachadas",
      description: "Impressão em lona de alta definição com acabamento em madeiras ou ilhós. Ideais para fachadas comerciais, eventos, feiras e divulgação.",
      imageUrl: "https://images.unsplash.com/photo-1588412079929-791b400dbd85?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Alta resolução de impressão",
        "Materiais resistentes a intempéries",
        "Opções de acabamento personalizadas",
        "Tamanhos variados, conforme necessidade"
      ]
    },
    {
      title: "Adesivos, Rótulos e Placas",
      description: "Vinil branco, transparente, perfurado ou recorte, com acabamento brilho ou fosco. Perfeitos para personalização de superfícies, identificação e decoração.",
      imageUrl: "https://images.unsplash.com/photo-1600003263592-b42a89535fa8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Impressão com cores vivas e vibrantes",
        "Alta durabilidade mesmo em ambientes externos",
        "Aplicação profissional disponível",
        "Recorte eletrônico para formas personalizadas"
      ]
    },
    {
      title: "Envelopamento de Veículos",
      description: "Adesivação personalizada com impressão digital ou vinil recorte. Transforme seu veículo em uma ferramenta eficaz de marketing móvel.",
      imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Vinil de alta qualidade com proteção UV",
        "Aplicação por profissionais especializados",
        "Design personalizado para sua marca",
        "Remoção sem danos à pintura original"
      ]
    },
    {
      title: "Impressão Digital de Grande Formato",
      description: "Impressão em alta resolução para projetos de todos os tamanhos. Ideal para banners, pôsteres, displays e muito mais.",
      imageUrl: "https://images.unsplash.com/photo-1572728096076-34ff486ee01a?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Impressão em resolução de até 1440 dpi",
        "Ampla gama de substratos disponíveis",
        "Cores precisas e vibrantes",
        "Opções para uso interno e externo"
      ]
    },
    {
      title: "Placas e Sinalizações",
      description: "Placas em diversos materiais como PVC, ACM, PS e acrílico para sinalização comercial, industrial e informativa.",
      imageUrl: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Materiais de alta durabilidade",
        "Acabamento profissional",
        "Instalação disponível",
        "Conformidade com normas de sinalização"
      ]
    },
    {
      title: "Materiais Promocionais",
      description: "Impressão de materiais para ações de marketing, como panfletos, cartões de visita, folders, catálogos e muito mais.",
      imageUrl: "https://images.unsplash.com/photo-1616078115392-a9b4a16d53e3?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: [
        "Impressão digital de alta qualidade",
        "Ampla variedade de papéis e acabamentos",
        "Baixas tiragens com preço justo",
        "Entregas rápidas para suas campanhas"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Conversamos sobre suas necessidades, objetivos e ideias para o projeto.",
      icon: "https://img.icons8.com/color/96/000000/chat--v1.png"
    },
    {
      number: "02",
      title: "Orçamento Detalhado",
      description: "Enviamos um orçamento transparente com todas as especificações do projeto.",
      icon: "https://img.icons8.com/color/96/000000/document--v1.png"
    },
    {
      number: "03",
      title: "Design e Aprovação",
      description: "Nossa equipe de design cria ou adapta sua arte para aprovação final.",
      icon: "https://img.icons8.com/color/96/000000/design--v1.png"
    },
    {
      number: "04",
      title: "Produção",
      description: "Produzimos seu material com equipamentos de última geração e materiais de qualidade.",
      icon: "https://img.icons8.com/color/96/000000/print--v1.png"
    },
    {
      number: "05",
      title: "Entrega e Instalação",
      description: "Entregamos seu projeto finalizado e oferecemos serviço de instalação quando necessário.",
      icon: "https://img.icons8.com/color/96/000000/delivery--v1.png"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-vecinos-blue mb-4 animate-slide-in-top">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
            Soluções completas em comunicação visual para empresas e negócios no Litoral Norte de São Paulo.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4" id="servicos">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`animate-on-scroll ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h2 className="text-3xl font-bold text-vecinos-blue mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Benefícios:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-vecinos-orange mr-2 flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="https://wa.me/5512979790618" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary inline-flex items-center"
                  >
                    Solicitar Orçamento 
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
                <div className={`animate-on-scroll animate-delay-200 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Nosso Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-gray-600">
              Nosso processo simplificado garante eficiência, qualidade e satisfação em cada projeto.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`relative md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className={`mb-8 md:mb-0 ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="flex items-center md:justify-end mb-4">
                        <span className="text-4xl font-bold text-vecinos-orange mr-3">{step.number}</span>
                        <h3 className="text-2xl font-bold text-vecinos-blue">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Timeline dot for desktop */}
                    <div className="hidden md:block absolute top-6 right-0 transform translate-x-1/2 w-6 h-6 rounded-full bg-vecinos-orange border-4 border-white shadow-md"></div>
                  </div>
                  
                  {/* Empty div for layout on desktop */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in-top">
              Vamos Transformar Suas Ideias em Realidade
            </h2>
            <p className="text-blue-100 mb-8 text-lg animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
              Estamos prontos para ajudar seu negócio a se destacar com nossa comunicação visual de alta qualidade. Entre em contato hoje mesmo!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-top" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-vecinos-orange text-white hover:bg-opacity-90"
              >
                Solicite um Orçamento
              </a>
              <a 
                href="/contato" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
