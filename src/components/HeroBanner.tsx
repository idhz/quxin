import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Carousel data for hero banner
const carouselItems = [
  {
    id: 1,
    title: "智能安全 为您守护",
    description: "电动自行车智能充电系统，全方位保障充电安全",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=electric%20bicycle%20charging%20station%20in%20residential%20area%20modern%20tech%20design&sign=1c51c7294734c75b8ff9f8442be7e536",
    ctaText: "了解更多",
    ctaLink: "/product-center"
  },
  {
    id: 2,
    title: "智能充电 科技赋能",
    description: "物联网+AI技术，打造智能、高效、安全的充电解决方案",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=smart%20charging%20system%20dashboard%20interface%20showing%20data%20analytics&sign=441514faa28be7ef38d6e69f1f174a95",
    ctaText: "产品中心",
    ctaLink: "/product-center"
  },
  {
    id: 3,
    title: "多重防护 全面预警",
    description: "多级安全防护机制，实时监测预警，事故可追溯",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=security%20monitoring%20system%20for%20electric%20vehicle%20charging%20stations&sign=2a09f38fa1014c71952a49d938cb5c73",
    ctaText: "查看技术",
    ctaLink: "/product-center"
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  
  // Handle next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? (0) : (prev + 1)));
  };
  
  // Handle previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? (carouselItems.length - 1) : (prev - 1)));
  };
  
  // Reset transition state after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  // Auto play carousel
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentSlide, isTransitioning]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };
  
  // Resume autoplay on mouse leave
  const handleMouseLeave = () => {
    autoplayRef.current = setInterval(nextSlide, 5000);
  };
  
  return (
    <div 
      ref={carouselRef}
      className="relative h-[80vh] min-h-[500px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative min-w-full h-full">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-left duration-700">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-in fade-in slide-in-from-left duration-700 delay-150">
                {item.description}
              </p>
              <Link 
                to={item.ctaLink}
                 className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-left duration-700 delay-300 text-center whitespace-nowrap"
              >
                {item.ctaText}
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentSlide && !isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                
                // Reset autoplay timer
                if (autoplayRef.current) {
                  clearInterval(autoplayRef.current);
                  autoplayRef.current = setInterval(nextSlide, 5000);
                }
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    
    </div>
  );
}