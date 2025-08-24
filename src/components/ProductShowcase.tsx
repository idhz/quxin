import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Featured products data
const featuredProducts = [
  {
    id: 4,
    name: "年度维护保养套餐",
    price: "¥800/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=maintenance%20service%20for%20charging%20equipment&sign=43efcb4c2fd05f92c3fc523f8fec0c0d",
    tag: "服务"
  },
  {
    id: 26,
    name: "分布式智能充电终端",
    price: "¥1000/套",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/252335646978/attachment/充电终端_20250824173425.png",
    tag: "热销产品"
  }
];

interface ProductShowcaseProps {
  scrollY: number;
}

export default function ProductShowcase({ scrollY }: ProductShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Check visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('product-showcase');
      if (section) {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        setIsVisible(visible);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="product-showcase"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">热门产品</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              精选热门智能充电产品，为您提供安全、智能的充电体验
            </p>
          </div>
          
          <Link 
            to="/store"
            className="mt-6 md:mt-0 text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200"
          >
            查看全部产品
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.tag}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="text-xl font-bold text-gray-500 line-through mb-4">
                  {product.price}
                </div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                >
                  询价
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}