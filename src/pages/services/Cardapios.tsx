import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const Cardapios = () => {
  useScrollToTop();
  
  const benefits = [
    "Impressão em papel couché plastificado",
    "Resistente a respingos e umidade",
    "Design atrativo e funcional",
    "Diferentes formatos e dobras",
    "Cores vivas que destacam os pratos",
    "Acabamento profissional"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cardápios Profissionais em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Cardápios impressos com qualidade premium para restaurantes, bares e lanchonetes. 
                Design atrativo e materiais resistentes no Litoral Norte.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_43_14%20PM.png?raw=true"
                alt="Cardápios para restaurantes"
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
                Cardápios que Despertam o Apetite
              </h2>
              <p className="text-gray-600 mb-6">
                Um cardápio bem projetado é uma ferramenta de vendas poderosa para restaurantes e bares. Na Vecinos, criamos cardápios com design atrativo e impressão de alta qualidade, utilizando materiais resistentes que suportam o uso diário em estabelecimentos do Litoral Norte.
              </p>
              <p className="text-gray-600 mb-8">
                Trabalhamos com papel couché plastificado que resiste a respingos e umidade, mantendo a qualidade visual por muito mais tempo. Nossos cardápios são projetados para destacar seus pratos e influenciar positivamente a experiência do cliente.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Nossos Cardápios:</h3>
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
                <li>• Cardápio dobrável (bifold, trifold)</li>
                <li>• Cardápio formato A4 ou A3</li>
                <li>• Plastificação fosca ou brilho</li>
                <li>• Design personalizado incluído</li>
                <li>• Diferentes gramaturas de papel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Desperte o Apetite dos Seus Clientes!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para cardápios profissionais. 
            Design e impressão de qualidade para seu restaurante!
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

export default Cardapios;
