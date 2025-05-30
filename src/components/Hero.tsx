
import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const Hero = ({ title, subtitle, buttonText, buttonLink, imageUrl }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Overlay with improved gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div 
          className="max-w-4xl mx-auto"
        >
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-in-top leading-tight"
            style={{ animationDelay: '0.3s' }}
          >
            {title}
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 animate-slide-in-top px-4"
            style={{ animationDelay: '0.5s' }}
          >
            {subtitle}
          </p>
          <a 
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-colors duration-300 font-medium text-base sm:text-lg animate-slide-in-top w-auto max-w-xs sm:max-w-none mx-auto"
            style={{ animationDelay: '0.7s' }}
          >
            <MessageCircle size={20} />
            <span className="text-center">{buttonText}</span>
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
