import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-vecinos-blue mb-4 animate-slide-in-top">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
            Estamos prontos para atender suas necessidades de comunicação visual em Caraguatatuba e todo o Litoral Norte.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Contact Info */}
          <div className="animate-slide-in-top">
            <h2 className="text-3xl font-bold text-vecinos-blue mb-8 text-center">Informações de Contato</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-vecinos-orange bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-vecinos-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-vecinos-blue mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Mal. Floriano Peixoto, 100 - Poiares<br />
                      Caraguatatuba - SP, 11673-000
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-vecinos-orange bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-vecinos-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-vecinos-blue mb-1">Telefone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+5512979790618" className="hover:text-vecinos-orange transition-colors duration-300">(12) 97979-0618</a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-vecinos-orange bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-vecinos-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-vecinos-blue mb-1">E-mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contato@vecinos.com.br" className="hover:text-vecinos-orange transition-colors duration-300">contato@vecinos.com.br</a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-vecinos-orange bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-vecinos-orange" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-vecinos-blue mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9:00 - 18:00<br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-vecinos-blue mb-8 text-center">Localização</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 animate-slide-in-bottom">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5!2d-45.408!3d-23.621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631551d2b977%3A0x4bb832a3afa2c0b0!2sAv.%20Mal.%20Floriano%20Peixoto%2C%20100%20-%20Poiares%2C%20Caraguatatuba%20-%20SP%2C%2011673-000!5e0!3m2!1spt-BR!2sbr!4v1621956578654!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da Vecinos Comunicação Visual"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-vecinos-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in-top">
              Precisa de Atendimento Rápido?
            </h2>
            <p className="text-orange-100 mb-8 text-lg animate-slide-in-top" style={{ animationDelay: '0.2s' }}>
              Entre em contato pelo WhatsApp e receba um atendimento imediato para seu projeto de comunicação visual.
            </p>
            <div className="flex justify-center animate-slide-in-top" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-white text-vecinos-orange hover:bg-gray-100 text-lg px-8"
              >
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
