
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const FachadaACM = () => {
  useScrollToTop();
  
  const benefits = [
    "Material ACM de alta resistência",
    "Acabamento moderno e sofisticado",
    "Resistente a intempéries",
    "Fácil manutenção e limpeza",
    "Variedade de cores e acabamentos",
    "Instalação com estrutura profissional"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fachadas em ACM no Litoral Norte
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Modernize sua fachada com painéis de ACM (Aluminium Composite Material). 
                Elegância, durabilidade e sofisticação para seu estabelecimento.
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
                src="https://github.com/andremoller3/videos/blob/main/banner%20(2).jpg?raw=true"
                alt="Fachada em ACM profissional"
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
                Fachadas em ACM Premium
              </h2>
              <p className="text-gray-600 mb-6">
                O ACM (Aluminium Composite Material) é a escolha ideal para fachadas modernas e sofisticadas. Composto por duas chapas de alumínio com núcleo de polietileno, oferece leveza, resistência e acabamento impecável.
              </p>
              <p className="text-gray-600 mb-8">
                Perfeito para estabelecimentos que buscam um visual contemporâneo e profissional, o ACM valoriza a arquitetura e transmite credibilidade ao seu negócio em Caraguatatuba e região.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens do ACM:</h3>
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
              <h4 className="font-semibold text-vecinos-blue mb-3">Especificações Técnicas:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Painel ACM 3mm ou 4mm</li>
                <li>• Acabamentos: fosco, brilho, escovado</li>
                <li>• Corte e dobra em CNC</li>
                <li>• Estrutura em alumínio ou aço</li>
                <li>• Fixação com rebites ou parafusos</li>
                <li>• Aplicação de adesivos ou impressão UV</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Modernize Sua Fachada com ACM!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para fachada em ACM e dê um visual moderno e profissional 
            ao seu estabelecimento!
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

export default FachadaACM;
