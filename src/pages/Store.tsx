import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Store categories
const storeCategories = [
  { id: 1, name: "全部商品", active: true },
  { id: 2, name: "硬件设备", active: false },
  { id: 3, name: "维护保养", active: false },
  { id: 4, name: "安装服务", active: false }
];

// Product data for store (simplified for demo)
const storeProducts = [
  // Hardware products 
  {
    id: 21,
    name: "主控机柜",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=main%20control%20cabinet%20for%20charging%20system&sign=10ca6eaadb1520eb618615b10bff76d3",
    price: "¥1000-5000/套",
    description: "落地式/壁挂式柜体；安装板及支架；线槽连接件等；"
  },
  {
    id: 22,
    name: "基本主控单元",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=basic%20main%20control%20unit%20for%20charging%20system&sign=3686ab0c3bcb6e13ede7b9df279cdaae",
    price: "¥4000-5000/组",
    description: "5路/10路主控制板及支架；机架式配电箱；电气单元；工业级路由器；工业级交换机；多通道天线；"
  },
  {
    id: 23,
    name: "主控扩展单元",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=main%20control%20expansion%20unit&sign=8a13f51aa4b93678f21e8732dd1ef338",
    price: "¥3000-4000/组",
    description: "5路/10路扩展板及支架；电气单元；交换机等；"
  },
  {
    id: 24,
    name: "监控单元",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=monitoring%20unit%20with%20cameras%20for%20charging%20station&sign=b3f56edc5c73d8e79c3e36d4a53b8bac",
    price: "¥5000-20000/套",
    description: "安保/热成像摄像机2台；硬盘录像机；硬盘等；"
  },
  {
    id: 25,
    name: "显示单元",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=display%20unit%20with%20monitor%20for%20charging%20station&sign=45d280128cb465ef38ada2ce90d038ec",
    price: "¥2000/套",
    description: "广告机；定制安装件；"
  },
  {
    id: 26,
    name: "分布式智能充电终端",
    category: "硬件设备",
    imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/252335646978/attachment/充电终端_20250824173425.png",
    price: "¥1000/套",
    description: "PCB；TFT；各型传感器；插座等；"
  },
  {
    id: 27,
    name: "线缆套件",
    category: "硬件设备",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cable%20kit%20for%20charging%20system&sign=ebe633c225dbd0cecc3b4eb518770b22",
    price: "¥300/套",
    description: "线槽；电缆；数据线等；"
  },
  
  // Installation service
    {
     id: 20,
     name: "充电终端安装调试服务",
     category: "安装服务",
     imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=professional%20installation%20service%20for%20charging%20station&sign=d45e0223fc066bf8ea4aaf3cdb7255c2",
     price: "¥400-700/台",
     description: "硬件安装；主设备编码；各传感器设备编码；各设备、传感器、显示屏首次接入系统调试；"
   },
  
  // Maintenance services
   {
    id: 18,
    name: "充电终端维护保养",
    category: "维护保养",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=maintenance%20service%20for%20charging%20equipment&sign=43efcb4c2fd05f92c3fc523f8fec0c0d",
    price: "¥1000/年",
    description: "充电终端硬件月度维保、抽检；充电终端数据处理；故障件48小时内替换等；"
  },
   {
    id: 19,
    name: "站点维护保养",
     category: "维护保养",
     imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=premium%20maintenance%20service%20contract&sign=855db774612c58a736a5f247547d2f12",
     price: "¥40000/年",
    description: "站点主控硬件季度、月度维保；站点数据处理等；"
  }
];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("全部商品");
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check product visibility for animation
      const productElements = document.querySelectorAll('.store-product-card');
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
  
  // Filter products by category with price sorting
  const filteredProducts = activeCategory === "全部商品" 
    ? [...storeProducts].sort((a, b) => {
        // Extract numeric price values for sorting
        const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
        return priceA - priceB;
      }) 
    : [...storeProducts]
        .filter(product => product.category === activeCategory)
        .sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
          return priceA - priceB;
        });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation scrollY={scrollY} />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gray-900">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=electric%20vehicle%20charging%20products%20display&sign=07de591a3312a53c1a956d33faffb714" 
          alt="取新商城" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">取新商城</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              提供电动自行车智能充电系统硬件产品及相关服务
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
            <span className="text-gray-900">取新商城</span>
          </nav>
        </div>
      </div>
      
      {/* Store Content */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-6">
          {/* Store Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-10 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fa-solid fa-info-circle text-blue-600 text-xl"></i>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">商城说明</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>本商城仅展示产品及价格信息，不提供直接购买功能。如需购买，请点击"询价"联系我们的客服。</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Categories */}
          <div className="flex overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {storeCategories.map((category) => (
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
                className={`store-product-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group ${
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                   <div className="text-2xl font-bold text-gray-500 line-through mb-4">
                    {product.price}                  
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                  >
                    <i className="fa-solid fa-comment-dots mr-2"></i>
                    询价
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          {activeCategory === "硬件设备" && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-200">
                查看更多硬件产品
                <i className="fa-solid fa-chevron-down ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}