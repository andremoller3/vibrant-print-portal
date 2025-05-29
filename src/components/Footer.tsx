
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-montserrat font-bold mb-6 text-vecinos-orange">
              Vecinos <span className="text-white">Comunicação Visual</span>
            </h3>
            <p className="mb-6 text-gray-300">
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
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Serviços</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Contato</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Banners e Faixas</Link>
              </li>
              <li>
                <Link to="/servicos/adesivos-rotulos" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Adesivos e Rótulos</Link>
              </li>
              <li>
                <Link to="/servicos/banners-faixas-fachadas" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Placas e Fachadas</Link>
              </li>
              <li>
                <Link to="/servicos/adesivacao-veiculo" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Envelopamento de Veículos</Link>
              </li>
              <li>
                <Link to="/servicos/panfletos" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">Impressão Digital</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-montserrat font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-vecinos-orange flex-shrink-0" />
                <span className="text-gray-300">Av. Oswaldo Cruz, 557, Centro, Caraguatatuba, SP, 11660-300</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-vecinos-orange flex-shrink-0" />
                <a href="tel:+5512979790618" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">(12) 97979-0618</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-vecinos-orange flex-shrink-0" />
                <a href="mailto:contato@vecinos.com.br" className="text-gray-300 hover:text-vecinos-orange transition-colors duration-300">contato@vecinos.com.br</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 text-vecinos-orange flex-shrink-0" />
                <span className="text-gray-300">Seg-Sex: 9:00-18:00<br />Sáb-Dom: Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Vecinos Comunicação Visual. Todos os direitos reservados.
            </p>
            <div>
              <a 
                href="https://wa.me/5512979790618" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 font-medium"
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
