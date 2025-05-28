
import { ArrowRight, Check, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CamisetasPersonalizadas = () => {
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
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Camisetas Personalizadas em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Camisetas personalizadas para eventos, empresas, equipes e promoções. 
                Qualidade e conforto para seu uniforme no Litoral Norte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5512979790618" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-vecinos-orange text-white hover:bg-opacity-90 inline-flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Solicitar Orçamento
                </a>
                <Link to="/contato" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                  Fale Conosco
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1080&auto=format&fit=crop"
                alt="Camisetas personalizadas"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
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
                className="btn btn-primary inline-flex items-center"
              >
                Solicitar Orçamento Agora
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/3fe7386f-38dc-41d5-ae55-ccd3b021d4e6.png"
                alt="Camiseta personalizada com logo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vista Sua Marca com Qualidade!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para camisetas personalizadas. 
            Uniformes e promocionais de qualidade no Litoral Norte!
          </p>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn bg-vecinos-orange text-white hover:bg-opacity-90 text-lg px-8 py-3"
          >
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CamisetasPersonalizadas;
