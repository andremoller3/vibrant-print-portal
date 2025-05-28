
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Panfletos = () => {
  const benefits = [
    "Impressão offset e digital de alta qualidade",
    "Papel couché ou sulfite conforme necessidade",
    "Baixas e altas tiragens",
    "Design atrativo e persuasivo",
    "Entrega rápida para campanhas urgentes",
    "Preços acessíveis para todos os orçamentos"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Panfletos e Folhetos em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Panfletos impressos para divulgação, promoções e campanhas publicitárias. 
                Material promocional eficaz para seu negócio no Litoral Norte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5512979790618" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-300 font-medium justify-center"
                >
                  <MessageCircle size={18} />
                  Pedir Orçamento
                </a>
                <Link to="/contato" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                  Fale Conosco
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://github.com/andremoller3/videos/blob/main/panfletos.jpg?raw=true"
                alt="Panfletos e materiais promocionais"
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
                Panfletos Eficazes para Sua Campanha
              </h2>
              <p className="text-gray-600 mb-6">
                Os panfletos continuam sendo uma das formas mais eficazes de marketing direto. Na Vecinos, produzimos panfletos com design atrativo e impressão de qualidade, ideais para divulgar promoções, eventos, serviços e produtos em Caraguatatuba e todo o Litoral Norte.
              </p>
              <p className="text-gray-600 mb-8">
                Trabalhamos com diferentes formatos, papéis e acabamentos para atender suas necessidades específicas. Desde pequenas tiragens para testes até grandes volumes para campanhas massivas, garantimos qualidade e preço justo.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens dos Nossos Panfletos:</h3>
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
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/3fe7386f-38dc-41d5-ae55-ccd3b021d4e6.png"
                alt="Panfletos promocionais de qualidade"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-vecinos-blue mb-3">Formatos Disponíveis:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• A4 (21x29,7cm)</li>
                  <li>• A5 (14,8x21cm)</li>
                  <li>• 10x15cm</li>
                  <li>• Formatos personalizados</li>
                  <li>• Papel sulfite ou couché</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Divulgue Seu Negócio com Panfletos de Qualidade!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para panfletos e materiais promocionais. 
            Campanhas eficazes começam aqui!
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

export default Panfletos;
