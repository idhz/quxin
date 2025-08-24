import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Job categories
const jobCategories = [
  { id: 1, name: "全部职位", active: true },
  { id: 2, name: "技术研发", active: false },
  { id: 3, name: "市场营销", active: false },
  { id: 4, name: "运营管理", active: false },
  { id: 5, name: "销售业务", active: false }
];

// Job listings
const jobs = [
  {
    id: 1,
    title: "高级软件工程师",
    category: "技术研发",
    location: "杭州",
    experience: "3-5年",
    education: "本科及以上",
    description: "负责智能充电系统软件的设计与开发，参与系统架构设计和技术选型，解决复杂技术问题。",
    requirements: [ "计算机相关专业本科及以上学历", "3年以上Java/Python开发经验", "熟悉物联网相关技术", "有智能硬件开发经验者优先" ]
  },
  {
    id: 2,
    title: "硬件工程师",
    category: "技术研发",
    location: "杭州",
    experience: "2-4年",
    education: "本科及以上",
    description: "负责智能充电桩硬件设计与开发，参与硬件方案评估和选型，进行硬件测试和问题调试。",
    requirements: [ "电子、自动化等相关专业", "2年以上硬件开发经验", "熟悉电路设计和PCB layout", "有充电设备开发经验者优先" ]
  },
  {
    id: 3,
    title: "产品经理",
    category: "运营管理",
    location: "杭州",
    experience: "3-5年",
    education: "本科及以上",
    description: "负责智能充电产品的规划与设计，进行市场调研和用户需求分析，制定产品 roadmap。",
    requirements: [ "3年以上智能硬件产品经理经验", "优秀的产品思维和用户洞察力", "良好的沟通协调能力", "有物联网或充电相关行业经验者优先" ]
  },
  {
    id: 4,
    title: "销售经理",
    category: "销售业务",
    location: "杭州",
    experience: "2-4年",
    education: "大专及以上",
    description: "负责智能充电产品的市场开拓和销售工作，维护客户关系，完成销售目标。",
    requirements: [ "2年以上ToB销售经验", "优秀的沟通表达和谈判能力", "能承受销售压力", "有政府或物业资源者优先" ]
  },
  {
    id: 5,
    title: "市场专员",
    category: "市场营销",
    location: "杭州",
    experience: "1-3年",
    education: "本科及以上",
    description: "负责公司产品的市场推广和品牌建设，策划并执行市场活动，撰写市场文案。",
    requirements: [ "市场营销相关专业", "1年以上市场推广经验", "良好的文案撰写能力", "熟悉新媒体运营" ]
  }
];

export default function Recruitment() {
  const [activeCategory, setActiveCategory] = useState("全部职位");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle job expansion
  const toggleJobExpand = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };
  
  // Filter jobs by category
  const filteredJobs = activeCategory === "全部职位" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation scrollY={scrollY} />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gray-900">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20office%20team%20collaboration%20technology%20company&sign=8435068c03bb2aaace8f87bdf66280b7" 
          alt="招贤纳士" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">招贤纳士</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              加入取新智能，共同开创智能充电新时代
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
            <span className="text-gray-900">招贤纳士</span>
          </nav>      
        </div>
      </div>
      
      {/* Recruitment Content */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-6">
          {/* Company Culture */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"><div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的企业文化</h2>
                <p className="text-gray-600 mb-6">
                  杭州取新智能科技有限公司致力于打造安全、智能的电动自行车充电解决方案。
                  我们倡导创新、协作、诚信、责任的价值观，为员工提供良好的工作环境和发展空间。
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fa-solid fa-lightbulb text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">鼓励创新</h3>
                      <p className="text-sm text-gray-600">支持员工创新想法，提供创新激励机制</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fa-solid fa-users text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">团队协作</h3>
                      <p className="text-sm text-gray-600">开放沟通，协作共赢的团队氛围</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fa-solid fa-handshake text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">诚信正直</h3>
                      <p className="text-sm text-gray-600">诚信经营，正直做人的企业品格</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <i className="fa-solid fa-shield text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">社会责任</h3>
                      <p className="text-sm text-gray-600">致力于解决充电安全问题，创造社会价值</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">员工福利</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">五险一金</span>
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">年终奖金</span>
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">带薪年假</span>
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">节日福利</span>
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">定期团建</span>
                    <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">职业培训</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=modern%20tech%20company%20office%20environment&sign=f72d3140f3ac71656e066777aa6b4128" 
                  alt="公司环境" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 mr-2">20+</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">专业团队</div>
                      <div className="text-xs text-gray-500">优秀人才</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Categories */}
          <div className="flex overflow-x-auto pb-4 mb-10 scrollbar-hide">
            {jobCategories.map((category) => (
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
          
          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Job Header */}
                <div 
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
                  onClick={() => toggleJobExpand(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap text-sm text-gray-600 gap-x-6 gap-y-2">
                      <span className="flex items-center">
                        <i className="fa-solid fa-briefcase mr-1"></i> {job.category}
                      </span>
                      <span className="flex items-center">
                        <i className="fa-solid fa-map-marker-alt mr-1"></i> {job.location}
                      </span>
                      <span className="flex items-center">
                        <i className="fa-solid fa-clock mr-1"></i> {job.experience}
                      </span>
                      <span className="flex items-center"> 
                        <i className="fa-solid fa-graduation-cap mr-1"></i> {job.experience}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="text-blue-600 mr-3">查看详情</span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${expandedJob === job.id ? 'transform rotate-180' : ''}`}></i>
                  </div>
                </div>
                
                {/* Job Details */}
                {expandedJob === job.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50 animate-in slide-in-from-top duration-300">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">职位描述</h4>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">任职要求</h4>
                      <ul className="space-y-2 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <i className="fa-solid fa-check-circle text-blue-600 mt-1 mr-2"></i>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                      >
                        申请该职位
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Application Info */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">加入我们</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              我们正在寻找优秀的人才加入团队，共同推动智能充电行业的发展。
              如果您对我们的职位感兴趣，请通过以下方式联系我们。
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              onClick={() => { window.dispatchEvent(new Event('openChat')); }}
            >
              联系招聘负责人
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}