
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  link, 
  delay = 0 
}: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Unobserve after becoming visible
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Function to get specific service page link
  const getServiceLink = () => {
    if (title.includes("Banners") || title.includes("Faixas") || title.includes("Fachadas")) {
      return "/servicos/banners-faixas-fachadas";
    } else if (title.includes("Adesivos") || title.includes("Rótulos")) {
      return "/servicos/adesivos-rotulos";
    } else if (title.includes("Envelopamento") || title.includes("Veículos")) {
      return "/servicos/adesivacao-veiculo";
    } else if (title.includes("Cartão") || title.includes("Visita")) {
      return "/servicos/cartao-visita";
    } else if (title.includes("Panfletos")) {
      return "/servicos/panfletos";
    } else if (title.includes("Wind")) {
      return "/servicos/wind-banners";
    } else if (title.includes("Placa") && title.includes("PVC")) {
      return "/servicos/placa-pvc";
    } else if (title.includes("Cardápio")) {
      return "/servicos/cardapios";
    } else if (title.includes("Camiseta")) {
      return "/servicos/camisetas-personalizadas";
    }
    return link; // fallback to original link
  };

  // Adicionando imagem de capa com base no título do serviço
  const getCoverImage = () => {
    if (title.includes("Banners") || title.includes("Faixas") || title.includes("Fachadas")) {
      return "https://github.com/andremoller3/videos/blob/main/banner%20(2).jpg?raw=true";
    } else if (title.includes("Adesivos") || title.includes("Rótulos")) {
      return "https://github.com/andremoller3/videos/blob/main/adesivos.jpg?raw=true";
    } else if (title.includes("Envelopamento") || title.includes("Veículos")) {
      return "/lovable-uploads/20cc1627-98ba-4460-bb68-f82e51b5de7a.png";
    } else if (title.includes("Wind")) {
      return "https://github.com/andremoller3/videos/blob/main/wind.jpg?raw=true";
    } else {
      return imageUrl;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`service-card bg-white overflow-hidden transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="relative">
        {/* Imagem de capa no topo do card */}
        <div className="w-full h-12 bg-vecinos-blue flex items-center justify-center">
          <span className="text-white font-medium text-sm">Comunicação Visual</span>
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden">
        <div className={`w-full h-full ${!imageLoaded ? 'image-loading' : ''}`}>
          <img
            src={getCoverImage()}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-vecinos-blue mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={getServiceLink()}
          className="inline-flex items-center text-vecinos-orange font-medium hover:underline transition-all duration-300 group"
        >
          Ver mais{' '}
          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
