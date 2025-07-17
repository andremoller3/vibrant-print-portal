
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import useScrollToTop from '@/hooks/useScrollToTop';

const Services = () => {
  useScrollToTop();
  
  const serviceSectionRef = useRef<HTMLDivElement>(null);

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
    
    if (serviceSectionRef.current) {
      const animateElements = serviceSectionRef.current.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossos Serviços de Comunicação Visual
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
            Oferecemos soluções completas em comunicação visual para empresas e negócios 
            em Caraguatatuba, Ubatuba, São Sebastião e Ilhabela.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section ref={serviceSectionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <span className="text-vecinos-orange font-semibold">Serviços Completos</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-vecinos-blue mt-2 mb-4">
              Tudo que Você Precisa em Comunicação Visual
            </h2>
            <p className="text-gray-600">
              Da criação à instalação, oferecemos serviços de alta qualidade com materiais premium 
              e acabamento profissional para destacar sua marca no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Banners, Faixas e Fachadas" 
              description="Impressão em lona de alta definição com acabamento em madeiras ou ilhós para fachadas comerciais e eventos." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/banner%20(2).jpg?raw=true" 
              link="/servicos/banners-faixas-fachadas" 
              delay={100} 
            />
            <ServiceCard 
              title="Fachada em Lona" 
              description="Fachadas comerciais em lona vinílica de alta resistência com impressão digital e instalação profissional." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_14_49%20PM.png?raw=true" 
              link="/servicos/fachada-lona" 
              delay={150} 
            />
            <ServiceCard 
              title="Fachada em ACM" 
              description="Painéis de ACM para fachadas modernas e sofisticadas com acabamento premium e durabilidade superior." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_06_14%20PM.png?raw=true" 
              link="/servicos/fachada-acm" 
              delay={200} 
            />
            <ServiceCard 
              title="Luminosos em Acrílico ou Lona" 
              description="Luminosos em LED para destacar sua marca 24 horas por dia com tecnologia e durabilidade superior." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_06_14%20PM.png?raw=true" 
              link="/servicos/luminosos" 
              delay={250} 
            />
            <ServiceCard 
              title="Adesivos e Rótulos" 
              description="Vinil branco, transparente, perfurado ou recorte, com acabamento brilho ou fosco para diversas aplicações." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/adesivos.jpg?raw=true" 
              link="/servicos/adesivos-rotulos" 
              delay={300} 
            />
            <ServiceCard 
              title="Envelopamento de Veículos" 
              description="Adesivação personalizada com impressão digital ou vinil recorte para carros, motos e frotas." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/96b9141a-f77f-4bcf-8428-5d3073319377.png?raw=true" 
              link="/servicos/adesivacao-veiculo" 
              delay={350} 
            />
            <ServiceCard 
              title="Cartão de Visita" 
              description="Impressão em papel couché com acabamento fosco ou brilho, laminação e verniz localizado." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_23_33%20PM.png?raw=true" 
              link="/servicos/cartao-visita" 
              delay={400} 
            />
            <ServiceCard 
              title="Panfletos e Flyers" 
              description="Impressão digital em alta qualidade para campanhas publicitárias e divulgação de eventos." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_26_54%20PM.png?raw=true" 
              link="/servicos/panfletos" 
              delay={450} 
            />
            <ServiceCard 
              title="Wind Banners" 
              description="Displays portáteis ideais para eventos, feiras e pontos de venda com fácil montagem." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_19_07%20PM.png?raw=true" 
              link="/servicos/wind-banners" 
              delay={500} 
            />
            <ServiceCard 
              title="Placas de PVC" 
              description="Placas rígidas em PVC para sinalização interna e externa com impressão direta." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%204%20de%20jul.%20de%202025,%2019_10_48.png?raw=true" 
              link="/servicos/placa-pvc" 
              delay={550} 
            />
            <ServiceCard 
              title="Cardápios" 
              description="Cardápios personalizados em diversos materiais com laminação para proteção e durabilidade." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_43_14%20PM.png?raw=true" 
              link="/servicos/cardapios" 
              delay={600} 
            />
            <ServiceCard 
              title="Camisetas Personalizadas" 
              description="Estampas em camisetas com técnicas de sublimação, serigrafia e transfer para eventos e uniformes." 
              imageUrl="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_30_08%20PM.png?raw=true" 
              link="/servicos/camisetas-personalizadas" 
              delay={650} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Precisa de um Orçamento Personalizado?
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento sob medida para suas necessidades 
            de comunicação visual no Litoral Norte.
          </p>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 font-medium text-lg mx-auto w-fit"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 2.011c-5.506 0-9.989 4.484-9.989 9.989 0 1.764.459 3.418 1.264 4.849L2.01 21.99l5.124-1.283a9.956 9.956 0 004.883 1.284c5.506 0 9.989-4.484 9.989-9.989s-4.484-9.99-9.989-9.99zM12.017 18.41a6.396 6.396 0 01-3.257-.895l-.233-.139-2.418.605.648-2.36-.152-.242a6.396 6.396 0 115.412 2.031z"/>
            </svg>
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
