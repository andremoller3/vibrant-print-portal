
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import useScrollToTop from '@/hooks/useScrollToTop';

const FachadaLona = () => {
  useScrollToTop();
  
  const benefits = [
    "Lona vinílica de alta resistência",
    "Impressão digital em alta definição",
    "Proteção UV para maior durabilidade",
    "Instalação profissional com estrutura",
    "Cores vivas e duradouras",
    "Ideal para fachadas comerciais"
  ];

  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fachadas em Lona no Litoral Norte
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Transforme a fachada do seu estabelecimento com nossa impressão em lona de alta qualidade. 
                Destaque sua marca com cores vibrantes e durabilidade garantida.
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
                src="https://github.com/andremoller3/videos/blob/main/ChatGPT%20Image%20Jul%203,%202025,%2005_14_49%20PM.png?raw=true"
                alt="Fachada em lona profissional"
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
                Fachadas em Lona de Alta Qualidade
              </h2>
              <p className="text-gray-600 mb-6">
                Nossas fachadas em lona são produzidas com materiais de primeira linha, utilizando lona vinílica resistente a intempéries e impressão digital de alta definição. Perfeitas para destacar sua marca e atrair mais clientes.
              </p>
              <p className="text-gray-600 mb-8">
                Com instalação profissional e estrutura adequada, garantimos durabilidade e visual impecável para sua fachada comercial em Caraguatatuba e região.
              </p>
              
              <h3 className="text-xl font-semibold text-vecinos-orange mb-4">Vantagens da Fachada em Lona:</h3>
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
                <li>• Lona vinílica frontlit 440g/m²</li>
                <li>• Impressão em solvente eco</li>
                <li>• Acabamento com ilhós ou solda</li>
                <li>• Estrutura em metalon galvanizado</li>
                <li>• Instalação com fixação segura</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Destaque Sua Fachada!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para fachada em lona e transforme a visibilidade do seu negócio 
            no Litoral Norte!
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

export default FachadaLona;
