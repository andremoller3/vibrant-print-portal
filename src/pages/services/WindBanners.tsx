import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const WindBanners = () => {
  useScrollToTop();
  
  const benefits = [
    "Estrutura portátil e resistente",
    "Impressão em tecido dye-sublimation", 
    "Montagem rápida e fácil",
    "Ideal para eventos e feiras",
    "Resistente ao vento",
    "Design personalizado incluído"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wind Banners em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Wind banners portáteis para eventos, feiras e sinalização externa. 
                Solução prática e eficaz para divulgação no Litoral Norte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5512979790618" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
                >
                  <MessageCircle size={18} />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_19_07%20PM.png?raw=true"
                alt="Wind banners para eventos"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vecinos-blue mb-6">
                Wind Banners: Sinalização Portátil e Eficaz
              </h2>
              <p className="text-gray-600 mb-6">
                Os wind banners são a solução perfeita para quem precisa de sinalização portátil e de fácil instalação. Na Vecinos, produzimos wind banners com estrutura de fibra de vidro resistente e impressão em tecido dye-sublimation de alta qualidade, ideais para eventos ao ar livre no litoral.
              </p>
              <p className="text-gray-600 mb-8">
                Perfeitos para feiras, eventos, inaugurações, promoções e sinalização temporária. Sua base com água ou areia garante estabilidade mesmo com vento, característica importante para uso nas praias e áreas abertas do Litoral Norte.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Wind Banners:</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-vecinos-orange mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors duration-300 font-medium"
              >
                <MessageCircle size={18} />
                Pedir Orçamento Agora
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-vecinos-blue mb-3">Modelos Disponíveis:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Wind Banner Gota</li>
                <li>• Wind Banner Sail</li>
                <li>• Wind Banner Reta</li>
                <li>• Tamanhos variados</li>
                <li>• Base com água incluída</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Destaque-se em Eventos com Wind Banners!
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para wind banners personalizados. 
            Sinalização portátil e profissional para seus eventos!
          </p>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors duration-300 font-medium text-lg"
          >
            <MessageCircle size={20} />
            Pedir Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WindBanners;
