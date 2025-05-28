
import { ArrowRight, Check, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PlacaPVC = () => {
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
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-r from-vecinos-blue to-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Placas de PVC em Caraguatatuba
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Placas de PVC resistentes e duráveis para sinalização interna e externa. 
                Qualidade superior para identificação e comunicação visual no Litoral Norte.
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
                src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=987&auto=format&fit=crop"
                alt="Placas de PVC para sinalização"
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
                className="btn btn-primary inline-flex items-center"
              >
                Solicitar Orçamento Agora
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/3fe7386f-38dc-41d5-ae55-ccd3b021d4e6.png"
                alt="Placa de PVC personalizada"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sinalize com Qualidade e Durabilidade!
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Solicite seu orçamento para placas de PVC personalizadas. 
            Sinalização profissional e resistente no Litoral Norte!
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

export default PlacaPVC;
