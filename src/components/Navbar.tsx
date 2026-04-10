import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ lang, setLang, t }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#top"
            className="flex-shrink-0 flex items-center transition-opacity hover:opacity-90"
          >
            <img
              src="/logo-cpbeverage.png"
              alt="CP Beverage"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <a
              href="#products"
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {t.nav.products}
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {t.nav.story}
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-blue transition-all duration-300 shadow-sm"
            >
              {t.nav.inquiry}
            </a>

            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-300 rounded-full bg-white hover:text-brand-blue hover:border-brand-blue transition-colors"
            >
              <span className="text-base leading-none">
                {lang === 'en' ? '🇨🇳' : '🇺🇸'}
              </span>
              <span>{lang === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-full bg-white"
            >
              <span className="text-sm leading-none">
                {lang === 'en' ? '🇨🇳' : '🇺🇸'}
              </span>
              <span>{lang === 'en' ? '中文' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-700 bg-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6"
        >
          <div className="space-y-3">
            <a
              href="#products"
              className="block text-base font-medium text-slate-700 px-2 py-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.products}
            </a>

            <a
              href="#about"
              className="block text-base font-medium text-slate-700 px-2 py-2 rounded-lg hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.story}
            </a>

            <a
              href="#contact"
              className="block w-full text-center px-5 py-3 bg-brand-navy text-white font-semibold rounded-xl hover:bg-brand-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
