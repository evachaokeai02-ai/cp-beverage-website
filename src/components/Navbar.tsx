import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display font-bold text-brand-blue tracking-tighter">
              CP<span className="text-brand-navy">BEVERAGE</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Our Products</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Brand Story</a>
            <a href="#contact" className="px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-blue transition-all duration-300">
              Inquiry
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#products" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#about" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Global Trade</a>
          <a href="#contact" className="block w-full text-center px-5 py-3 bg-brand-navy text-white font-semibold rounded-xl" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
        </motion.div>
      )}
    </nav>
  );
}
