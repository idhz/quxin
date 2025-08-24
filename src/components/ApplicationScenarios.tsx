import { useEffect, useState } from 'react';

// Application scenarios data
const scenarios = [
  {
    id: 1,
    name: "ToG 政府/国央企",
    description: "为政府部门和国营企业提供智能充电解决方案，助力智慧城市建设和安全管理",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=government%20smart%20city%20project%20application&sign=efd0ce2eeee0451d165992b6b683239c",
    features: ["政策合规", "统一管理", "数据上报", "安全监管"]
  },
  {
    id: 2,
    name: "ToB 企业/物业",
    description: "为物业公司、商业综合体和工业园区提供专业的充电设施和管理系统",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=commercial%20property%20charging%20station&sign=90717dc2e8acd77e6fd9b04d24093446",
    features: ["集中管理", "收益分成", "安全保障", "品牌定制"]
  },
  {
    id: 3,
    name: "ToC 个人用户",
    description: "为个人用户提供便捷、安全的充电服务，支持多种支付方式和远程控制",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=individual%20user%20using%20smart%20charging%20station&sign=e60cc8a1e09802831b22c80c28a53603",
    features: ["便捷支付", "远程监控", "充电预约", "安全提醒"]
  }
];

interface ApplicationScenariosProps {
  scrollY: number;
}

export default function ApplicationScenarios({ scrollY }: ApplicationScenariosProps) {
  const [visibleScenarios, setVisibleScenarios] = useState<number[]>([]);
  
  // Check if element is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scenarioElements = document.querySelectorAll('.scenario-card');
      scenarioElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !visibleScenarios.includes(index)) {
          setVisibleScenarios(prev => [...prev, index]);
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleScenarios]);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">应用场景</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的智能充电系统适用于多种场景，为不同类型的用户提供定制化解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={scenario.id}
              className={`scenario-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group ${
                visibleScenarios.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={scenario.imageUrl} 
                  alt={scenario.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{scenario.name}</h3>
                  <p className="text-white/90">{scenario.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">核心优势</h4>
                <ul className="space-y-3">
                  {scenario.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-2"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a href="/product-center" className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200">
                    查看解决方案
                    <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}