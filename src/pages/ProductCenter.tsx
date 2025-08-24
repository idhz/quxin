import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Product categories
const categories = [
  { id: 1, name: "全部产品", active: true },
  { id: 2, name: "硬件设备", active: false },
  { id: 3, name: "软件系统", active: false },
  { id: 4, name: "解决方案", active: false }
];

// Product data
const products = [
  {
    id: 3,
    name: "智能充电管理系统",
    category: "软件系统",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=charging%20management%20system%20dashboard&sign=7b4aa79932dbc965482e0dda9f1afb20",
    features: ["数据监控", "用户管理", "充电调度", "报表分析"],
    application: ["物业", "运营商", "政府", "企业"]
  },
  {
    id: 5,
    name: "智能充电解决方案",
    category: "解决方案",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=intelligent%20charging%20system%20solution%20architecture&sign=b841bdaa4133b768b3a39b91be94ed40",
    features: ["定制设计", "系统集成", "安装调试", "运维支持"],
    application: ["智慧城市", "智慧社区", "产业园区", "大型企业"]
  },
  {
    id: 26,
    name: "分布式智能充电终端",
    category: "硬件设备",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/252335646978/attachment/充电终端_20250824173425.png",
    features: ["智能识别", "多重保护", "远程监控", "防水设计"],
    application: ["小区", "办公楼", "商场", "园区"]
  },
  {
    id: 6,
    name: "移动端管理APP",
    category: "软件系统",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=mobile%20app%20interface%20for%20charging%20station%20management&sign=b3094160423e50362c9a3dca8e21b5bb",
    features: ["远程控制", "充值缴费", "充电预约", "故障上报"],
    application: ["个人用户", "物业管理人员", "运维人员"]
  }
];

export default function ProductCenter() {
  const [activeCategory, setActiveCategory] = useState("全部产品");
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check product visibility for animation
      const productElements = document.querySelectorAll('.product-card');
      productElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !visibleProducts.includes(index)) {
          setVisibleProducts(prev => [...prev, index]);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProducts]);
  
  // Filter products by category
  const filteredProducts = activeCategory === "全部产品" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation scrollY={scrollY} />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gray-900">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=electric%20vehicle%20charging%20station%20array%20at%20sunset&sign=c7f321cc0eb10fc45ba4292282fcb286" 
          alt="产品中心" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">产品中心</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              我们提供全方位的电动自行车智能充电系统解决方案，包括硬件设备、软件系统和整体解决方案
            </p>
          </div>
        </div>
      </section>
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">首页</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">产品中心</span>
          </nav>
        </div>
      </div>
      
      {/* Product Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 mr-4 whitespace-nowrap rounded-full transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`product-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group ${
                  visibleProducts.includes(index) 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">核心功能</h4>
                    <ul className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">应用场景</h4>
                    <ul className="flex flex-wrap gap-2">
                      {product.application.map((app, i) => (
                        <li key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200"
                      onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                    >
                      了解更多
                      <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                    </button>
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                    >
                      询价
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <i className="fa-solid fa-box-open text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无产品</h3>
              <p className="text-gray-500">该分类下暂无产品数据</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}