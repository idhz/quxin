import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品中心', path: '/product-center' },
    { name: '取新商城', path: '/store' },
    { name: '招贤纳士', path: '/recruitment' },
    { name: '联系我们', path: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrollY > 10 ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link to="/" className="flex items-center space-x-2">
              <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/252335646978/attachment/取新_20250824154049.png" 
              alt="取新科技logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-900 hover:text-blue-600 font-medium relative transition-colors duration-200"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-900 hover:text-blue-600 py-2 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}