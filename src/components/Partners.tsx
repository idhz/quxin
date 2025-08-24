import { useState, useEffect } from 'react';

// Partner data
// 清空合作伙伴数据
const partners = [];

// 创建3个空白框数据
const emptyBoxes = Array(3).fill(null);

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Check visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('partners-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        setIsVisible(visible);
      }
    };
    
    // Initial check and scroll listener
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="partners-section" 
       className="py-16 bg-white" 
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">战略合作伙伴</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            携手行业领先企业，共同推动智能充电生态建设
          </p>
        </div>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {partners.length > 0 ? (
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
            
          ) : (
            
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <i className="fa-solid fa-handshake text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">寻求合作伙伴</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                我们正在寻找志同道合的合作伙伴，共同开拓智能充电市场
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                联系我们
              </button>
            </div>
            
          )}
        </div>
      </div>
    </section>
  );
}