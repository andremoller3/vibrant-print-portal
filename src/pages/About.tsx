import { useEffect, useRef } from 'react';
import { Users, Target, Clock, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  
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

    const sections = [historyRef.current, valuesRef.current];

    sections.forEach(section => {
      if (section) {
        const animateElements = section.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => observer.observe(el));
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-vecinos-blue mb-4 animate-slide-in-top">
            Sobre a Vecinos Comunicação Visual
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
            Conheça nossa história, missão e visão como a gráfica de referência em Caraguatatuba e no Litoral Norte de São Paulo.
          </p>
        </div>
      </div>

      {/* History Section */}
      <section ref={historyRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <span className="text-vecinos-orange font-semibold">Nossa História</span>
              <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-6">
                Uma Trajetória de Excelência em Comunicação Visual
              </h2>
              <p className="text-gray-600 mb-6">
                Fundada em 2015, a Vecinos Comunicação Visual nasceu do sonho de oferecer serviços de comunicação visual de alta qualidade para empresas e negócios em Caraguatatuba e região. Começamos como uma pequena gráfica com foco em atendimento personalizado e, ao longo dos anos, conquistamos a confiança de centenas de clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Com investimento constante em tecnologias de impressão avançadas e uma equipe altamente qualificada, expandimos nossos serviços para atender todo o Litoral Norte de São Paulo, incluindo Ubatuba, São Sebastião e Ilhabela.
              </p>
              <p className="text-gray-600">
                Hoje, somos reconhecidos pela excelência em banners, adesivos, fachadas, impressão digital e envelopamento de veículos, sempre entregando cores vivas e acabamento impecável em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision and Values Section */}
      <section ref={valuesRef} className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Nossa Filosofia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600">
              Conheça os princípios que orientam nossa atuação e nossa busca constante pela excelência em comunicação visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Missão</h3>
              <p className="text-gray-600">
                Fornecer soluções de comunicação visual de alta qualidade, que ajudem nossos clientes a destacar suas marcas e mensagens de forma eficaz, com excelência em atendimento e prazos ágeis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll animate-delay-200">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a melhor gráfica do Litoral Norte de São Paulo, referência em inovação, qualidade e atendimento, expandindo constantemente nosso portfólio de serviços.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll animate-delay-400">
              <div className="w-16 h-16 bg-vecinos-orange bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-vecinos-orange" size={30} />
              </div>
              <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excelência na qualidade</li>
                <li>• Comprometimento com prazos</li>
                <li>• Atendimento personalizado</li>
                <li>• Inovação contínua</li>
                <li>• Responsabilidade socioambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
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
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-orange-100 mb-8 text-lg animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
              Descubra como a Vecinos Comunicação Visual pode ajudar seu negócio a se destacar com soluções personalizadas de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in-top" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-white text-vecinos-orange hover:bg-gray-100"
              >
                Solicite um Orçamento
              </a>
              <a 
                href="/contato" 
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-vecinos-orange"
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

export default About;
