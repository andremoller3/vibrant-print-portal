import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const PlacaPVC = () => {
  useScrollToTop();
  
  const benefits = [
    "Material resistente e durável",
    "Não deforma com umidade", 
    "Fácil limpeza e manutenção",
    "Cores vivas e duradouras",
    "Ideal para uso interno e externo",
    "Corte personalizado em qualquer formato"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Placas de PVC em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Placas de PVC resistentes e duráveis para sinalização interna e externa. 
                Qualidade superior para identificação e comunicação visual no Litoral Norte.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%204%20de%20jul.%20de%202025,%2019_10_48.png?raw=true"
                alt="Placas de PVC para sinalização"
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
                Placas de PVC: Resistência e Qualidade
              </h2>
              <p className="text-gray-600 mb-6">
                As placas de PVC são a escolha ideal para sinalização que precisa de durabilidade e resistência. Na Vecinos, utilizamos PVC expandido de alta qualidade, perfeito para o clima litorâneo de Caraguatatuba. Material que não resseca, não deforma e mantém as cores vivas por muito mais tempo.
              </p>
              <p className="text-gray-600 mb-8">
                Ideais para placas de identificação, sinalização de segurança, placas imobiliárias, comunicação visual corporativa e muito mais. Produzimos em diversas espessuras e tamanhos, com impressão digital de alta resolução e acabamento profissional.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens das Placas de PVC:</h3>
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
              <h4 className="font-semibold text-vecinos-blue mb-3">Aplicações:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Placas de identificação</li>
                <li>• Sinalização de segurança</li>
                <li>• Placas imobiliárias</li>
                <li>• Comunicação visual empresarial</li>
                <li>• Placas informativas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sinalize com Qualidade e Durabilidade!
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para placas de PVC personalizadas. 
            Sinalização profissional e resistente no Litoral Norte!
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

export default PlacaPVC;
