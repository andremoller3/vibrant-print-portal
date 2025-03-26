import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Clock, Truck, Zap, Award, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const serviceSectionRef = useRef<HTMLDivElement>(null);
  const whySectionRef = useRef<HTMLDivElement>(null);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);
  
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

    const sections = [
      aboutSectionRef.current,
      serviceSectionRef.current,
      whySectionRef.current,
      testimonialSectionRef.current
    ];

    sections.forEach(section => {
      if (section) {
        const animateElements = section.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));
      }
    });

    return () => observer.disconnect();
  }, []);

  const heroImageUrl = "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop";

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Gráfica em Caraguatatuba: Banners, Adesivos e Impressão Digital"
        subtitle="Transforme sua ideia em realidade com impressões de alta qualidade e cores vivas!"
        buttonText="Entre em Contato Agora"
        buttonLink="https://wa.me/5512979790618"
        imageUrl={heroImageUrl}
      />

      {/* About Section */}
      <section ref={aboutSectionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-on-scroll">
                <span className="text-vecinos-orange font-semibold">Sobre Nós</span>
                <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-6">
                  Sua Gráfica de Confiança em Caraguatatuba
                </h2>
                <p className="text-gray-600 mb-6">
                  A Vecinos Comunicação Visual é a sua gráfica em Caraguatatuba, SP, especializada em impressão de alta qualidade. Com equipamentos modernos e mão de obra especializada, oferecemos o melhor em banners, adesivos, fachadas e impressão digital para clientes de Caraguatatuba, Ubatuba, São Sebastião e Ilhabela.
                </p>
                <p className="text-gray-600 mb-8">
                  Nossa missão é garantir a máxima qualidade e rapidez, com cores vivas que destacam sua marca. Com 4,9 estrelas no Google Meu Negócio, somos a escolha confiável para suas necessidades de impressão no litoral norte!
                </p>
                <Link to="/sobre" className="btn btn-primary inline-flex items-center">
                  Conheça Nossa História 
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="animate-on-scroll animate-delay-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Equipe da Vecinos Comunicação Visual" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg md:max-w-xs">
                  <div className="flex items-center text-vecinos-blue font-bold text-xl">
                    <Award className="mr-2 text-vecinos-orange" size={24} />
                    <span>Reconhecidos pela qualidade</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    4.9/5 ⭐ com mais de 100 avaliações no Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={serviceSectionRef} className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              Soluções Completas em Comunicação Visual
            </h2>
            <p className="text-gray-600">
              Oferecemos uma ampla gama de serviços de impressão e comunicação visual para atender às necessidades do seu negócio no Litoral Norte de São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Banners, Faixas e Fachadas"
              description="Impressão em lona de alta definição com acabamento em madeiras ou ilhós."
              imageUrl="https://images.unsplash.com/photo-1588412079929-791b400dbd85?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              link="/servicos"
              delay={100}
            />
            <ServiceCard 
              title="Adesivos, Rótulos e Placas"
              description="Vinil branco, transparente, perfurado ou recorte, com acabamento brilho ou fosco."
              imageUrl="https://images.unsplash.com/photo-1600003263592-b42a89535fa8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              link="/servicos"
              delay={300}
            />
            <ServiceCard 
              title="Envelopamento de Veículos"
              description="Adesivação personalizada com impressão digital ou vinil recorte."
              imageUrl="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              link="/servicos"
              delay={500}
            />
          </div>

          <div className="text-center mt-12 animate-on-scroll animate-delay-400">
            <Link to="/servicos" className="btn btn-outline inline-flex items-center">
              Ver Todos os Serviços
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whySectionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Por Que Nos Escolher</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              Excelência em Cada Impressão
            </h2>
            <p className="text-gray-600">
              Na Vecinos, estamos comprometidos em fornecer serviços de impressão da mais alta qualidade para nossos clientes em todo o Litoral Norte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-3">Qualidade Premium</h3>
              <p className="text-gray-600">
                Utilizamos materiais e equipamentos de última geração para garantir a mais alta qualidade em cada projeto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll animate-delay-200">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">
                Valorizamos seu tempo com prazos de entrega rápidos sem comprometer a qualidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll animate-delay-400">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-3">Atendimento Local</h3>
              <p className="text-gray-600">
                Atendemos todo o Litoral Norte: Caraguatatuba, Ubatuba, São Sebastião e Ilhabela.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center animate-on-scroll animate-delay-600">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-3">Cores Vivas</h3>
              <p className="text-gray-600">
                Impressões com cores vibrantes que destacam sua marca e capturam a atenção.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll">
              Pronto para Transformar Suas Ideias em Realidade?
            </h2>
            <p className="text-blue-100 mb-8 text-lg animate-on-scroll animate-delay-200">
              Entre em contato hoje mesmo e descubra como podemos ajudar seu negócio a se destacar com nossa comunicação visual de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-delay-400">
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-vecinos-orange text-white hover:bg-opacity-90"
              >
                Solicite um Orçamento
              </a>
              <Link to="/contato" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialSectionRef} className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600">
              Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços de comunicação visual no Litoral Norte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="João Silva"
              location="Caraguatatuba"
              content="A Vecinos Comunicação Visual fez um banner incrível para o meu negócio! As cores são vivas e a entrega foi super rápida. Recomendo!"
              rating={5}
              delay={100}
            />
            <TestimonialCard 
              name="Maria Rodrigues"
              location="Ubatuba"
              content="Melhor gráfica em Caraguatatuba! Adesivos de alta qualidade e atendimento excelente. Certamente voltarei a fazer negócios."
              rating={5}
              delay={300}
            />
            <TestimonialCard 
              name="Pedro Alves"
              location="São Sebastião"
              content="Enveloparam meu veículo comercial e ficou simplesmente perfeito! Ótimo acabamento, preço justo e prazo cumprido. Satisfação total!"
              rating={5}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
