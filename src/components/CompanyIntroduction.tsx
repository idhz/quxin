import { useEffect, useState } from 'react';

interface CompanyIntroductionProps {
  scrollY: number;
}

export default function CompanyIntroduction({ scrollY }: CompanyIntroductionProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Check if section is visible
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('company-intro');
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
      id="company-intro"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">关于取新智能</h2>
            <p className="text-lg text-gray-600 mb-6">
              杭州取新智能科技有限公司是一家专注于电动自行车智能充电系统研发、生产和销售的新兴技术企业。
              公司致力于通过技术创新，解决电动自行车充电安全问题，为用户提供安全、智能、高效的充电解决方案。
            </p>
            <p className="text-lg text-gray-600 mb-8">
              公司拥有一支由行业专家和技术精英组成的研发团队，拥有多项自主知识产权和发明专利。
              我们的产品已广泛应用于住宅小区、商业综合体、工业园区等场所，为政府、企业和个人用户提供全方位的充电安全保障。
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">专业团队</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">专利技术</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">合作客户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">业务领域</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                了解更多
              </a>
              <a href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                联系我们
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=modern%20tech%20company%20team%20working&sign=4b6942585c8fc2cc0516ec0065680527" 
                alt="公司团队" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-blue-600 mr-2">100%</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">客户满意度</div>
                    <div className="text-xs text-gray-500">值得信赖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}