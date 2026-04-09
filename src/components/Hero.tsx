import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/hPWDGeS.jpeg"
          alt="Colorful Shangri-La"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Subtle Overlay for readability */}
        <div className="absolute inset-0 bg-brand-navy/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">CP (Shangri-la) Beverage Co.</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter">
            One Sip to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-cyan-300">
              Colorful Shangri-La.
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/95 font-medium leading-relaxed italic">
            "The rainbow clouds drifting above Kawaboge Peak—radiant, full, untouched by the world—are the rare purity and quiet blessing that belong only to Shangri-La."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#products" 
              className="group w-full sm:w-auto px-10 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-500 flex items-center justify-center space-x-2 shadow-xl shadow-brand-blue/20"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tropical Accent */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-[150px] animate-pulse delay-700" />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
