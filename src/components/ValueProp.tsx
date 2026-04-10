import { motion } from 'motion/react';
import { Globe, Package, Zap, ShieldCheck } from 'lucide-react';

export default function ValueProp({ t }: any) {
  const items = [
    {
      title: t.valueProp.items[0].title,
      description: t.valueProp.items[0].description,
      icon: ShieldCheck,
    },
    {
      title: t.valueProp.items[1].title,
      description: t.valueProp.items[1].description,
      icon: Zap,
    },
    {
      title: t.valueProp.items[2].title,
      description: t.valueProp.items[2].description,
      icon: Globe,
    },
    {
      title: t.valueProp.items[3].title,
      description: t.valueProp.items[3].description,
      icon: Package,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">
                {t.valueProp.eyebrow}
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
                {t.valueProp.title}
              </h2>

              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {t.valueProp.description}
              </p>

              <div className="pt-4">
                <a
                  href="#products"
                  className="inline-flex items-center space-x-2 text-brand-navy font-bold hover:text-brand-blue transition-colors group"
                >
                  <span>{t.valueProp.cta}</span>
                  <div className="w-8 h-px bg-brand-navy group-hover:bg-brand-blue transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <item.icon size={24} />
                </div>

                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
