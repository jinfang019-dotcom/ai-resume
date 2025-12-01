import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Download, Play, MessageCircle, ExternalLink, Menu, X as XIcon, ChevronDown, ArrowRight, Brain, Briefcase, PenTool } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import ChatInterface from './components/ChatInterface';
import { EXPERIENCES, PROJECTS, AVATAR_IMG, PDF_RESUME_URL, PROJECT_IMAGES } from './constants';
import { SectionId } from './types';
import { motion } from 'framer-motion';

// Helper to get helper text for SectionId
const getSectionLabel = (id: SectionId) => {
  switch(id) {
    case SectionId.HERO: return '首页';
    case SectionId.ABOUT: return '关于我';
    case SectionId.EXPERIENCE: return '实习经历';
    case SectionId.PORTFOLIO: return '作品集';
    default: return id;
  }
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HERO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleContactClick = (type: 'email' | 'phone' | 'wechat') => {
    let msg = '';
    if (type === 'email') msg = "2578246199@qq.com";
    if (type === 'phone') msg = "18272849060";
    if (type === 'wechat') msg = "WX18272849060";
    alert(`${type.toUpperCase()}: ${msg}`);
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-200 selection:bg-blue-500/30">
      <ThreeBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-wider text-blue-400">
              JIN<span className="text-white">FANGBO</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {Object.values(SectionId).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item 
                        ? 'text-blue-400 bg-blue-900/20' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {getSectionLabel(item)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700"
              >
                {mobileMenuOpen ? <XIcon /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/5">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               {Object.values(SectionId).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                  >
                    {getSectionLabel(item)}
                  </button>
                ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section id={SectionId.HERO} className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative inline-block mb-8"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                <img src={AVATAR_IMG} alt="Jin Fangbo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full border border-slate-900">
                AI PM
              </div>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              晋芳博
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-400 mb-8 font-light"
            >
              AI产品经理 | 2026届毕业生 | 科技爱好者
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            >
              <a 
                href={PDF_RESUME_URL}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center gap-2 transition-all hover:scale-105 border border-slate-600 hover:border-blue-400"
              >
                <Download size={18} />
                下载简历
              </a>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <MessageCircle size={18} />
                与我对话
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-6"
            >
              <button onClick={() => handleContactClick('email')} className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-transparent hover:border-blue-500/50 group">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button onClick={() => handleContactClick('phone')} className="p-3 bg-slate-800/50 rounded-full hover:bg-green-600/20 hover:text-green-400 transition-all border border-transparent hover:border-green-500/50 group">
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button onClick={() => handleContactClick('wechat')} className="p-3 bg-slate-800/50 rounded-full hover:bg-emerald-600/20 hover:text-emerald-400 transition-all border border-transparent hover:border-emerald-500/50 group">
                <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
                onClick={() => scrollTo(SectionId.ABOUT)}
            >
                <ChevronDown />
            </motion.div>
          </div>
        </section>

        {/* About Section - Bento Grid */}
        <section id={SectionId.ABOUT} className="py-24 bg-slate-900/50 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
              关于我
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Self Intro Card */}
                <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">自我介绍</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    我是一名性格温和但做事很有冲劲的AI产品经理候选人。拥有四段不同行业的实习经历，适应能力强，喜欢从0到1学习新东西。
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                       <span className="text-blue-400 font-bold whitespace-nowrap">主动性强</span>
                       <span className="text-slate-400 text-sm">不满足于只做被安排的任务，喜欢主动探索和优化。</span>
                    </div>
                    <div className="flex gap-3">
                       <span className="text-blue-400 font-bold whitespace-nowrap">爱反思</span>
                       <span className="text-slate-400 text-sm">做每件事都会想“为什么做？能不能做得更好？”</span>
                    </div>
                  </div>
                </div>

                {/* Education Card */}
                <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/20 p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-6">教育背景</h3>
                    <h4 className="text-2xl font-bold text-white mb-2">中国传媒大学</h4>
                    <p className="text-slate-300 font-medium mb-1">经济学（传媒经济方向）</p>
                    <p className="text-slate-500 text-sm mb-6">2022.09 - 2026.07 | 绩点: 3.63/4</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-blue-300 mb-3">核心课程</h5>
                    <div className="flex flex-wrap gap-2">
                      {['计量经济学', '新媒体创新创业', 'AI融创实践', '数据分析'].map(course => (
                        <span key={course} className="px-3 py-1 bg-slate-900/50 rounded-full text-xs text-slate-300 border border-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Passion Card (Full Width) */}
                <div className="md:col-span-2 bg-gradient-to-r from-orange-900/40 via-red-900/20 to-slate-900/40 p-8 rounded-3xl border border-orange-500/20 relative overflow-hidden group">
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                          <Brain size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-orange-100">对AI的热爱和运用</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-all">
                           <h4 className="text-lg font-bold text-orange-300 mb-1">工具运用</h4>
                           <p className="text-orange-100/60 text-sm">AI工具辅助图书编辑</p>
                        </div>
                        {/* Column 2 */}
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-all">
                           <h4 className="text-lg font-bold text-blue-300 mb-1">智能体开发</h4>
                           <p className="text-blue-100/60 text-sm">Coze、FastGPT平台开发</p>
                        </div>
                        {/* Column 3 */}
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-all">
                           <h4 className="text-lg font-bold text-green-300 mb-1">学习创意</h4>
                           <p className="text-green-100/60 text-sm">PPT、图表AI制作</p>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Vertical Timeline */}
        <section id={SectionId.EXPERIENCE} className="py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
              <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
              实习经历
            </h2>

            <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-6 space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 md:pl-12">
                   {/* Timeline Dot */}
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 ring-4 ring-slate-900"></div>
                   
                   {/* Content */}
                   <div className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                         <div>
                            <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-bold rounded-full mb-2">
                              {exp.period}
                            </span>
                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            <p className="text-slate-400 font-medium">{exp.role}</p>
                         </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                          <p className="text-slate-300 text-sm leading-relaxed flex-1">
                             {exp.description}
                          </p>
                          {/* Optional Thumbnail for timeline */}
                          <div className="w-full md:w-32 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-900/50">
                             <img src={exp.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={exp.company} />
                          </div>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section - Refined List View */}
        <section id={SectionId.PORTFOLIO} className="py-24 bg-slate-900/50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
              作品集
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((project, index) => (
                <a 
                  key={project.id} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row bg-slate-800/40 hover:bg-slate-800/80 rounded-xl overflow-hidden border border-white/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
                >
                    {/* Content Left */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-500">
                                    #{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            查看详情 <ArrowRight size={12} className="ml-1" />
                        </div>
                    </div>

                    {/* Image Right (Fixed Aspect Ratio 4:3) */}
                    <div className="sm:w-48 sm:h-auto h-40 shrink-0 relative">
                        <img 
                            src={PROJECT_IMAGES[project.id]} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950">
          <p>© 2025 晋芳博. Designed with React & Gemini.</p>
        </footer>

      </main>

      {/* Chatbot Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Floating Chat Trigger (if chat closed) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all z-30 hover:scale-110 animate-bounce"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default App;