import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  t: any;
  navigate: (path: string) => void;
};

export default function Hero({ t, navigate }: HeroProps) {
  const handleProductsClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/products');
  };

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate('/#contact');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <img
          src="/hero-shangrila.jpg"
          alt="Colorful Shangri-La"
          width="5440"
          height="3448"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-shangrila.jpg"
          aria-hidden="true"
        >
          <source src="/hero-shangrila%20video" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/25 to-brand-navy/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(90deg,rgba(15,23,42,0.35),transparent_28%,transparent_72%,rgba(15,23,42,0.35))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter">
            <span className="block leading-tight">{t.hero.title1}</span>
            <span
              className={`block leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-blue to-cyan-300 ${
                t.hero.title1.length > 5 ? 'mt-3' : 'mt-2'
              }`}
            >
              {t.hero.title2}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/95 font-medium leading-relaxed italic">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/products"
              onClick={handleProductsClick}
              className="group w-full sm:w-auto px-10 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-orange-500 transition-all duration-500 flex items-center justify-center space-x-2 shadow-xl shadow-brand-blue/20"
            >
              <span>{t.hero.explore}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              {t.hero.touch}
            </a>
          </div>
        </motion.div>
      </div>

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
