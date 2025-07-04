import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Banners, Faixas e Fachadas', path: '/servicos/banners-faixas-fachadas' },
    { name: 'Fachada em Lona', path: '/servicos/fachada-lona' },
    { name: 'Fachada em ACM', path: '/servicos/fachada-acm' },
    { name: 'Adesivos e Rótulos', path: '/servicos/adesivos-rotulos' },
    { name: 'Adesivação de Veículo', path: '/servicos/adesivacao-veiculo' },
    { name: 'Cartão de Visita', path: '/servicos/cartao-visita' },
    { name: 'Panfletos', path: '/servicos/panfletos' },
    { name: 'Wind Banners', path: '/servicos/wind-banners' },
    { name: 'Placa de PVC', path: '/servicos/placa-pvc' },
    { name: 'Cardápios', path: '/servicos/cardapios' },
    { name: 'Camisetas Personalizadas', path: '/servicos/camisetas-personalizadas' },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/4f56fc66-5129-4d49-b397-1c14c98dcfcb.png" 
              alt="Vecinos Gráfica Logo" 
              className="h-12 md:h-14 mr-2" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-vecinos-primary active-nav-link' : ''}`}>Home</Link>
          <Link to="/sobre" className={`nav-link ${isActive('/sobre') ? 'text-vecinos-primary active-nav-link' : ''}`}>Sobre Nós</Link>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`nav-link flex items-center ${location.pathname.startsWith('/servicos/') ? 'text-vecinos-primary active-nav-link' : ''}`}>
              Serviços
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg border rounded-md p-1 min-w-[250px] z-50">
              {services.map((service) => (
                <DropdownMenuItem key={service.path} asChild>
                  <Link to={service.path} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-vecinos-primary rounded-sm">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/contato" className={`nav-link ${isActive('/contato') ? 'text-vecinos-primary active-nav-link' : ''}`}>Contato</Link>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-2 rounded-full flex items-center gap-2 ml-4 transition-colors duration-300 font-medium text-sm md:text-base"
          >
            <MessageCircle size={18} />
            <span className="hidden lg:inline">Pedir Orçamento</span>
            <span className="lg:hidden">Orçamento</span>
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-vecinos-primary" onClick={toggleMenu}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4f56fc66-5129-4d49-b397-1c14c98dcfcb.png" 
              alt="Vecinos Gráfica Logo" 
              className="h-12" 
            />
          </div>
          <button className="text-vecinos-primary" onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <div className="container mx-auto px-4 mt-10">
          <nav className="flex flex-col space-y-6">
            <Link to="/" onClick={closeMenu} className={`text-xl font-medium ${isActive('/') ? 'text-vecinos-primary' : 'text-vecinos-dark'}`}>Home</Link>
            <Link to="/sobre" onClick={closeMenu} className={`text-xl font-medium ${isActive('/sobre') ? 'text-vecinos-primary' : 'text-vecinos-dark'}`}>Sobre Nós</Link>
            
            {/* Mobile Services Section */}
            <div>
              <span className="text-xl font-medium block mb-3 text-vecinos-dark">Serviços</span>
              <div className="ml-4 space-y-3">
                {services.map((service) => (
                  <Link 
                    key={service.path}
                    to={service.path} 
                    onClick={closeMenu} 
                    className={`text-lg font-medium block ${isActive(service.path) ? 'text-vecinos-primary' : 'text-gray-600'}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/contato" onClick={closeMenu} className={`text-xl font-medium ${isActive('/contato') ? 'text-vecinos-primary' : 'text-vecinos-dark'}`}>Contato</Link>
            <a 
              href="https://wa.me/5512979790618" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 mt-6 transition-colors duration-300 font-medium w-fit"
            >
              <MessageCircle size={18} />
              Pedir Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
