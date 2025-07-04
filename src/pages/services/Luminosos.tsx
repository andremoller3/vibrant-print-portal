
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const Luminosos = () => {
  useScrollToTop();
  
  const benefits = [
    "LED de alta eficiência energética",
    "Acrílico cristal de primeira qualidade",
    "Lona translúcida para grandes formatos",
    "Instalação elétrica profissional",
    "Design personalizado incluído",
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Luminosos em Acrílico e Lona no Litoral Norte
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Luminosos em LED para destacar sua marca 24 horas por dia. 
                Soluções em acrílico e lona translúcida para máxima visibilidade em Caraguatatuba.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%204%20de%20jul.%20de%202025,%2017_34_43.png?raw=true"
                alt="Luminosos em acrílico e lona"
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
                Luminosos de Alta Qualidade e Durabilidade
              </h2>
              <p className="text-gray-600 mb-6">
                Os luminosos são fundamentais para destacar sua marca e garantir visibilidade noturna. Na Vecinos, produzimos luminosos em acrílico cristal e lona translúcida com tecnologia LED, oferecendo máxima eficiência energética e durabilidade superior.
              </p>
              <p className="text-gray-600 mb-8">
                Nossos luminosos são ideais para fachadas comerciais, pontos de venda e sinalização externa. Com instalação profissional e garantia estendida, seus luminosos funcionarão perfeitamente por anos, resistindo às condições do litoral.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Nossos Luminosos:</h3>
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
              <h4 className="font-semibold text-vecinos-blue mb-3">Opções Disponíveis:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Luminoso em acrílico cristal</li>
                <li>• Luminoso em lona translúcida</li>
                <li>• LED branco frio ou quente</li>
                <li>• Estrutura em alumínio</li>
                <li>• Instalação elétrica incluída</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ilumine Sua Marca com Qualidade!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para luminosos em acrílico ou lona. 
            Visibilidade garantida 24 horas por dia no Litoral Norte!
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

export default Luminosos;
