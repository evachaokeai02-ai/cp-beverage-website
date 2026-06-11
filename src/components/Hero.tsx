import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  t: any;
  navigate: (path: string) => void;
};

const shangrilaHeroVideo =
  '/Gen-4%20Turbo%20-%20Transform%20this%20static%20iceberg%20and%20snow%20mountain%20scene%20into%20a%20premium%20cinematic%20website.mp4';

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
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover motion-safe:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-shangrila.jpg"
          aria-hidden="true"
        >
          <source src={shangrilaHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/20 to-brand-navy/75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,28,0.72),rgba(4,12,28,0.18)_28%,rgba(4,12,28,0.1)_62%,rgba(4,12,28,0.66)),radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.24),transparent_31%),radial-gradient(circle_at_70%_18%,rgba(56,189,248,0.2),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/80 to-transparent" />
        <div className="absolute inset-0 opacity-[0.16] mix-blend-screen bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.45)_0_1px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35)_0_1px,transparent_1px)] bg-[length:72px_72px,118px_118px]" />
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
