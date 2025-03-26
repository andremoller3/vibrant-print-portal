
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ 
  name, 
  location, 
  content, 
  rating, 
  delay = 0 
}: TestimonialCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-vecinos-orange text-white flex items-center justify-center font-semibold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-vecinos-blue">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
