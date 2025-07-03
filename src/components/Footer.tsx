
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 sm:mb-0 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-montserrat font-bold mb-6 text-vecinos-orange">
              Vecinos <span className="text-white">Comunicação Visual</span>
            </h3>
            <p className="mb-6 text-gray-300 text-sm sm:text-base">
              Comunicação visual de qualidade para empresas e negócios no Litoral Norte de São Paulo. Atendemos Caraguatatuba, Ubatuba, São Sebastião e Ilhabela.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 sm:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Serviços</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 sm:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Banners e Faixas</Link>
              </li>
              <li>
                <Link to="/servicos/adesivos-rotulos" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Adesivos e Rótulos</Link>
              </li>
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Placas e Fachadas</Link>
              </li>
              <li>
                <Link to="/servicos/adesivacao-veiculo" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Envelopamento de Veículos</Link>
              </li>
              <li>
                <Link to="/servicos/panfletos" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">Impressão Digital</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 sm:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-vecinos-orange flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">Av. Mal. Floriano Peixoto, 100 - Poiares, Caraguatatuba - SP, 11673-000</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-vecinos-orange flex-shrink-0" size={18} />
                <a href="tel:+5512979790618" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base">(12) 97979-0618</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-vecinos-orange flex-shrink-0" size={18} />
                <a href="mailto:contato@vecinos.com.br" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300 text-sm sm:text-base break-all">contato@vecinos.com.br</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 text-vecinos-orange flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">Seg-Sex: 9:00-18:00<br />Sáb-Dom: Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2023 Vecinos Comunicação Visual. Todos os direitos reservados.
            </p>
            <div>
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                Pedir Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
