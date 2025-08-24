import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import ProductFeatures from '@/components/ProductFeatures';
import CompanyIntroduction from '@/components/CompanyIntroduction';
import Partners from '@/components/Partners';
import ProductShowcase from '@/components/ProductShowcase';
import ApplicationScenarios from '@/components/ApplicationScenarios';
import Footer from '@/components/Footer';

export default function Home() {
  // State for tracking scroll position for animations
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation Bar */}
      <Navigation scrollY={scrollY} />
      
      {/* Hero Banner with Carousel */}
      <HeroBanner />
      
      {/* Product Features Section */}
      <ProductFeatures scrollY={scrollY} />
      
      {/* Company Introduction */}
      <CompanyIntroduction scrollY={scrollY} />
      
      {/* Application Scenarios */}
      <ApplicationScenarios scrollY={scrollY} />
      
      {/* Featured Products Preview */}
      <ProductShowcase scrollY={scrollY} />
      
      {/* Partners Section */}
      <Partners scrollY={scrollY} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}