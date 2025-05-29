import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const CartaoVisita = () => {
  useScrollToTop();
  
  const benefits = [
    "Impressão em papel couché de alta qualidade",
    "Acabamento fosco ou brilho",
    "Laminação plastificada disponível",
    "Design profissional incluído",
    "Entrega rápida em todo Litoral Norte",
    "Preços competitivos para todas as quantidades"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cartões de Visita Profissionais em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Cartões de visita de alta qualidade para causar uma primeira impressão marcante. 
                Design profissional e impressão premium no Litoral Norte.
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
                src="https://github.com/andremoller3/videos/blob/main/cartao.jpg?raw=true"
                alt="Cartões de visita profissionais"
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
                Cartões de Visita que Impressionam
              </h2>
              <p className="text-gray-600 mb-6">
                Um cartão de visita bem feito é fundamental para o networking e apresentação profissional. Na Vecinos, produzimos cartões em papel couché de alta gramatura, com impressão offset de qualidade superior, garantindo cores vibrantes e acabamento impecável.
              </p>
              <p className="text-gray-600 mb-8">
                Oferecemos serviço completo: desde a criação do design até a impressão final. Nossos cartões são produzidos em diferentes gramaturas e acabamentos, adequados para todos os tipos de profissionais e empresas em Caraguatatuba e região.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Nossos Cartões:</h3>
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
                <li>• Papel couché 250g ou 300g</li>
                <li>• Acabamento fosco ou brilho</li>
                <li>• Laminação plastificada</li>
                <li>• Verniz localizado</li>
                <li>• Design personalizado incluído</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Cause uma Primeira Impressão Marcante!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para cartões de visita profissionais. 
            Design e impressão de qualidade no Litoral Norte!
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

export default CartaoVisita;
