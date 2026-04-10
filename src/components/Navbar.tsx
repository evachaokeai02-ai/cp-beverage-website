import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ lang, setLang, t }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#top" className="flex-shrink-0 flex items-center transition-opacity hover:opacity-90">
            <img    
              src="/logo-cpbeverage.png"    
              alt="CP Beverage"    
              className="h-11 w-auto object-contain"  
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              {t.nav.products}
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              {t.nav.story}
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-blue transition-all duration-300">
              {t.nav.inquiry}
            </a>

            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-3 py-1.5 text-sm font-semibold text-slate-600 border border-slate-300 rounded-full hover:text-brand-blue hover:border-brand-blue transition-colors"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-300 rounded-full"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#products" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
            {t.nav.products}
          </a>
          <a href="#about" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
            {t.nav.story}
          </a>
          <a href="#contact" className="block w-full text-center px-5 py-3 bg-brand-navy text-white font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
