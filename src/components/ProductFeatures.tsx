import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Product features data
const features = [
  {
    id: 1,
    icon: "fa-shield-halved",
    title: "多重安全防护",
    description: "多重安全防护机制，实时监测电压、电流、温度等关键参数，异常情况自动断电保护"
  },
  {
    id: 2,
    icon: "fa-brain",
    title: "智能充电管理",
    description: "AI智能识别电池类型，自动匹配最佳充电曲线，延长电池寿命，提高充电效率"
  },
  {
    id: 3,
    icon: "fa-exclamation-triangle",
    title: "实时预警系统",
    description: "多级预警机制，异常情况即时通知，支持声光、APP、短信等多种告警方式"
  },
  {
    id: 4,
    icon: "fa-history",
    title: "事故追溯分析",
    description: "完整记录充电过程数据，事故可追溯，提供数据分析报告，助力安全改进"
  },
  {
    id: 5,
    icon: "fa-sitemap",
    title: "分级管理系统",
    description: "多级权限管理，支持政府、物业、用户等不同角色，实现精细化运营管理"
  }
];

interface ProductFeaturesProps {
  scrollY: number;
}

export default function ProductFeatures({ scrollY }: ProductFeaturesProps) {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useState<HTMLDivElement | null>(null);
  
  // Check if element is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const featureElements = document.querySelectorAll('.feature-card');
      featureElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible && !visibleFeatures.includes(index)) {
          setVisibleFeatures(prev => [...prev, index]);
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleFeatures]);
  
 return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心技术优势
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            拥有自主知识产权和多项发明专利，打造安全、智能、高效的电动自行车充电解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={cn(
                "feature-card bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                visibleFeatures.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5 text-blue-600">
                <i className={`fa-solid ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Patent section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">自主知识产权与专利技术</h3>
              <p className="text-gray-600 mb-6">
                公司专注于电动自行车智能充电系统的研发与创新，拥有多项自主知识产权和发明专利，
                核心技术达到国内领先水平，为用户提供安全可靠的智能充电解决方案。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <i className="fa-solid fa-lightbulb text-blue-600 mr-2"></i>
                  <span className="text-gray-700">发明专利: 12项</span>
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <i className="fa-solid fa-copyright text-blue-600 mr-2"></i>
                  <span className="text-gray-700">软件著作权: 8项</span>
                </div>
                
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=patent%20certificate%20display%20for%20technology%20company&sign=206a4d034eadbfc020e8229ca18ec30a" 
                alt="专利证书展示" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}