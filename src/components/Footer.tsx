import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/252335646978/attachment/取新_20250824154049.png" 
              alt="取新科技logo" 
              className="h-10 w-auto"
            />
            </div>
            <p className="text-gray-400 mb-6">
              专注于电动自行车智能充电系统的研发与应用，
              为用户提供安全、智能、高效的充电解决方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="微信">
                <i className="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="微博">
                <i className="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
           {/* Contact Info */}
           <div>
             <h3 className="text-lg font-semibold mb-6">联系我们</h3>
             <ul className="space-y-4">
               <li className="flex items-start">
                 <i className="fa-solid fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                 <span className="text-gray-400">杭州市萍水西路80号优盘时代中心4号楼15楼</span>
               </li>
               <li className="flex items-center">
                 <i className="fa-solid fa-phone text-blue-400 mr-3"></i>
                  <span className="text-gray-400">+86 153 8107 3452</span>
               </li>
               <li className="flex items-center">
                 <i className="fa-solid fa-envelope text-blue-400 mr-3"></i>
                  <span className="text-gray-400">info@quxin.online</span>
               </li>
               <li className="flex items-center">
                 <i className="fa-solid fa-clock text-blue-400 mr-3"></i>
                 <span className="text-gray-400">周一至周五: 9:00-18:00</span>
               </li>
             </ul>
           </div>
           
           {/* Quick Links */}
           <div>
             <h3 className="text-lg font-semibold mb-6">快速链接</h3>
             <ul className="space-y-3">
               <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">首页</Link></li>
               <li><Link to="/product-center" className="text-gray-400 hover:text-white transition-colors duration-200">产品中心</Link></li>
               <li><Link to="/store" className="text-gray-400 hover:text-white transition-colors duration-200">取新商城</Link></li>
               <li><Link to="/recruitment" className="text-gray-400 hover:text-white transition-colors duration-200">招贤纳士</Link></li>
               <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">联系我们</Link></li>
             </ul>
           </div>

        </div>
        
        <hr className="border-gray-800 my-10" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}. 保留所有权利.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">隐私政策</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">使用条款</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}