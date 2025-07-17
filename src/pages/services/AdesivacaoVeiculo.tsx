import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const AdesivacaoVeiculo = () => {
  useScrollToTop();
  
  const benefits = [
    "Vinil automotivo de alta qualidade",
    "Proteção UV para maior durabilidade", 
    "Aplicação por profissionais especializados",
    "Design personalizado para sua marca",
    "Remoção sem danos à pintura original",
    "Transforme seu veículo em mídia móvel"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-orange to-orange-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Adesivação de Veículos no Litoral Norte
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Transforme seu veículo em uma ferramenta de marketing eficaz com nossa adesivação profissional. 
                Qualidade garantida e aplicação especializada no Litoral Norte.
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
                src="/lovable-uploads/20cc1627-98ba-4460-bb68-f82e51b5de7a.png"
                alt="Adesivação profissional de veículos"
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
                Adesivação Automotiva Profissional
              </h2>
              <p className="text-gray-600 mb-6">
                A adesivação de veículos é uma das formas mais eficazes de divulgar sua marca. Na Vecinos, utilizamos vinil automotivo premium com proteção UV, garantindo cores vivas e durabilidade superior, mesmo sob sol e chuva constantes do litoral.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa equipe especializada possui experiência em aplicação de adesivos em carros, motos, caminhões, vans e frotas comerciais. Criamos designs únicos que destacam sua marca nas ruas de Caraguatatuba e região.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Por Que Escolher Nossa Adesivação:</h3>
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
              <h4 className="font-semibold text-vecinos-blue mb-3">Tipos de Adesivação:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Adesivação total (envelopamento completo)</li>
                <li>• Adesivação parcial</li>
                <li>• Lettering e logotipos</li>
                <li>• Faixas decorativas</li>
                <li>• Identificação de frotas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforme Seu Veículo em Mídia Móvel!
          </h2>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para adesivação automotiva profissional. 
            Destaque sua marca nas ruas do Litoral Norte!
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

export default AdesivacaoVeiculo;
