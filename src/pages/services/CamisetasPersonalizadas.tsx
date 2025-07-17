import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const CamisetasPersonalizadas = () => {
  useScrollToTop();
  
  const benefits = [
    "Impressão em silk-screen e transfer",
    "Camisetas de alta qualidade", 
    "Cores resistentes à lavagem",
    "Diversos modelos e tamanhos",
    "Design personalizado incluído",
    "Preços especiais para grandes quantidades"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Camisetas Personalizadas em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Camisetas personalizadas para eventos, empresas, equipes e promoções. 
                Qualidade e conforto para seu uniforme no Litoral Norte.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_30_08%20PM.png?raw=true"
                alt="Camisetas personalizadas"
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
                Camisetas de Qualidade com Personalização Completa
              </h2>
              <p className="text-gray-600 mb-6">
                As camisetas personalizadas são ideais para uniformizar equipes, promover eventos ou criar produtos promocionais. Na Vecinos, trabalhamos com camisetas de alta qualidade e técnicas de impressão duradouras, perfeitas para o clima do Litoral Norte.
              </p>
              <p className="text-gray-600 mb-8">
                Utilizamos silk-screen para grandes quantidades e transfer digital para pequenas tiragens ou designs complexos. Todas as camisetas passam por controle de qualidade para garantir conforto, durabilidade e cores que não desbotam.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens das Nossas Camisetas:</h3>
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
                <li>• Camisetas 100% algodão</li>
                <li>• Camisetas dryfit (poliéster)</li>
                <li>• Impressão silk-screen ou transfer</li>
                <li>• Bordado personalizado</li>
                <li>• Tamanhos PP ao GG</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vista Sua Marca com Qualidade!
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para camisetas personalizadas. 
            Uniformes e promocionais de qualidade no Litoral Norte!
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

export default CamisetasPersonalizadas;
