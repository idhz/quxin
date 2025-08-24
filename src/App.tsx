import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ProductCenter from "@/pages/ProductCenter";
import Store from "@/pages/Store";
import Recruitment from "@/pages/Recruitment";
import Contact from "@/pages/Contact";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showChat, setShowChat] = useState(false);
  
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-center" element={<ProductCenter />} />
          <Route path="/store" element={<Store />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="text-center text-xl py-10">页面未找到</div>} />
        </Routes>
        
        {/* AI客服按钮 */}
        <button 
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          aria-label="联系客服"
        >
          <i className="fa-solid fa-comments text-xl"></i>
        </button>
        
        {/* AI客服弹窗 */}
        {showChat && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-t-xl rounded-l-xl shadow-2xl w-full max-w-md h-[80vh] flex flex-col animate-in slide-in-from-bottom duration-300">
              <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
                <h3 className="font-semibold text-lg">AI客服咨询</h3>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-white hover:text-gray-200"
                  aria-label="关闭"
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-robot text-blue-600 text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">智能客服</h4>
                  <p className="text-gray-600 mb-6">您好！我是取新智能的AI客服，有什么可以帮助您的？</p>
                  <div className="space-y-3">
                    <button className="w-full text-left bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-sm transition-colors duration-200">
                      产品咨询
                    </button>
                    <button className="w-full text-left bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-sm transition-colors duration-200">
                      价格查询
                    </button>
                    <button className="w-full text-left bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-sm transition-colors duration-200">
                      安装服务
                    </button> 
                    <button className="w-full text-left bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg shadow-sm transition-colors duration-200">
                      技术支持
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="请输入您的问题..." 
                    className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthContext.Provider>
  );
}
