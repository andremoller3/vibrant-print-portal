
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-vecinos-blue mb-8">Envie uma Mensagem</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-vecinos-blue mb-8">Informações de Contato</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-vecinos-orange bg-opacity-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-vecinos-orange" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-vecinos-blue mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Oswaldo Cruz, 557, Centro<br />
                        Caraguatatuba, SP, 11660-300
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

              {/* Social Media */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-vecinos-blue mb-4">Redes Sociais</h3>
                <p className="text-gray-600 mb-6">
                  Siga-nos nas redes sociais para conhecer nossos trabalhos e ficar por dentro das novidades.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5155249630735!2d-45.40803178441418!3d-23.620742869819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631551d2b977%3A0x4bb832a3afa2c0b0!2sAv.%20Oswaldo%20Cruz%2C%20557%20-%20Centro%2C%20Caraguatatuba%20-%20SP%2C%2011660-300!5e0!3m2!1spt-BR!2sbr!4v1621956578654!5m2!1spt-BR!2sbr"
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
