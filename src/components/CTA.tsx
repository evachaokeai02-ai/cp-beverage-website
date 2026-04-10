import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function CTA({ t }: any) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            {t.cta.title}
          </h2>

          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <div className="pt-6">
            <a
              href="mailto:yujg@cpgroup.cn"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-xl shadow-brand-blue/20"
            >
              <Mail size={20} />
              <span>{t.cta.button}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
