import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation scrollY={scrollY} />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gray-900">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=contact%20us%20modern%20office%20building&sign=a323af7f9aea57cbe5b767eaa0b7b9d5" 
          alt="联系我们" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              欢迎随时与我们联系，了解更多关于智能充电系统的信息
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
            <span className="text-gray-900">联系我们</span>
          </nav>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">联系方式</h2>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <i className="fa-solid fa-map-marker-alt text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">公司地址</h3>
                      <p className="text-gray-600">杭州市萍水西路80号优盘时代中心4号楼15楼</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <i className="fa-solid fa-phone text-blue-600 text-xl"></i>
                    </div>
                    <div>
                     <h3 className="font-semibold text-gray-900 mb-1">联系电话</h3>
                     <p className="text-gray-600">+86 153 8107 3452</p>
                     // <p className="text-gray-600">0571-8888-7777</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <i className="fa-solid fa-envelope text-blue-600 text-xl"></i>
                    </div>
                    <div>
                     <h3 className="font-semibold text-gray-900 mb-1">电子邮箱</h3>
                     <p className="text-gray-600">info@quxin.online</p>
                     // <p className="text-gray-600">sales@quxintech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <i className="fa-solid fa-clock text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">工作时间</h3>
                      <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                      <p className="text-gray-600">周六至周日: 休息</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-semibold text-gray-900 mb-4">关注我们</h3>
                <div className="flex space-x-6">
                  <a href="#" className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300" aria-label="微信">
                    <i className="fa-brands fa-weixin text-2xl text-gray-700"></i>
                  </a>
                  <a href="#" className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300" aria-label="微博">
                    <i className="fa-brands fa-weibo text-2xl text-gray-700"></i>
                  </a>
                  <a href="#" className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin text-2xl text-gray-700"></i>
                  </a>
                  <a href="#" className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300" aria-label="抖音">
                    <i className="fa-brands fa-tiktok text-2xl text-gray-700"></i>
                  </a>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">微信公众号</h4>
                  <div className="bg-white p-3 inline-block rounded-lg shadow-sm">
                    <img 
                      src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=wechat%20official%20account%20qrcode&sign=3b688879c24b82dd8f4f98fbd649524e" 
                      alt="微信公众号二维码" 
                      className="w-32 h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">发送消息</h2>
              
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        placeholder="请输入您的电话"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">主题</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    >
                      <option value="">请选择咨询主题</option>
                      <option value="product">产品咨询</option>
                      <option value="cooperation">商务合作</option>
                      <option value="support">技术支持</option>
                      <option value="recruitment">招聘咨询</option>
                      <option value="other">其他问题</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="请输入您的留言内容..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                    onClick={() => { window.dispatchEvent(new Event('openChat')); }}
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">公司位置</h2>
            <div className="bg-gray-50 rounded-xl overflow-hidden h-96">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=office%20building%20location%20map&sign=2eb9b04b68eef947a9aac86a7193bcde" 
                alt="公司位置地图" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}