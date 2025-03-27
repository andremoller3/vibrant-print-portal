
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

  return (
    <div
      ref={cardRef}
      className={`service-card bg-white overflow-hidden transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className={`w-full h-full ${!imageLoaded ? 'image-loading' : ''}`}>
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 w-full p-4">
            <img 
              src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=1170&auto=format&fit=crop" 
              alt="Banner promocional" 
              className="w-full h-auto rounded-md shadow-lg mb-2"
            />
            <span className="text-white text-sm font-medium">Promoção especial</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-vecinos-blue mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
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
