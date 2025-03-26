
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-montserrat font-bold text-2xl text-vecinos-orange">
            Vecinos <span className="text-vecinos-blue">Comunicação Visual</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-vecinos-orange active-nav-link' : ''}`}>Home</Link>
          <Link to="/sobre" className={`nav-link ${isActive('/sobre') ? 'text-vecinos-orange active-nav-link' : ''}`}>Sobre Nós</Link>
          <Link to="/servicos" className={`nav-link ${isActive('/servicos') ? 'text-vecinos-orange active-nav-link' : ''}`}>Serviços</Link>
          <Link to="/contato" className={`nav-link ${isActive('/contato') ? 'text-vecinos-orange active-nav-link' : ''}`}>Contato</Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'text-vecinos-orange active-nav-link' : ''}`}>Blog</Link>
          <a 
            href="https://wa.me/5512979790618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary ml-4"
          >
            Solicite um Orçamento
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-vecinos-blue" onClick={toggleMenu}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-vecinos-orange">
            Vecinos <span className="text-vecinos-blue">Comunicação Visual</span>
          </div>
          <button className="text-vecinos-blue" onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <div className="container mx-auto px-4 mt-10">
          <nav className="flex flex-col space-y-6">
            <Link to="/" onClick={closeMenu} className={`text-xl font-medium ${isActive('/') ? 'text-vecinos-orange' : 'text-vecinos-blue'}`}>Home</Link>
            <Link to="/sobre" onClick={closeMenu} className={`text-xl font-medium ${isActive('/sobre') ? 'text-vecinos-orange' : 'text-vecinos-blue'}`}>Sobre Nós</Link>
            <Link to="/servicos" onClick={closeMenu} className={`text-xl font-medium ${isActive('/servicos') ? 'text-vecinos-orange' : 'text-vecinos-blue'}`}>Serviços</Link>
            <Link to="/contato" onClick={closeMenu} className={`text-xl font-medium ${isActive('/contato') ? 'text-vecinos-orange' : 'text-vecinos-blue'}`}>Contato</Link>
            <Link to="/blog" onClick={closeMenu} className={`text-xl font-medium ${isActive('/blog') ? 'text-vecinos-orange' : 'text-vecinos-blue'}`}>Blog</Link>
            <a 
              href="https://wa.me/5512979790618" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-block mt-6 text-center"
            >
              Solicite um Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
