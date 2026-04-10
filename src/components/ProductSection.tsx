import { motion } from 'motion/react';
import { Product } from '../types';

export default function ProductSection({ t }: any) {
  const joySeries: Product[] = t.products.joySeries;
  const otherProducts: Product[] = t.products.portfolio;

  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Joy Series Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4"
            >
              {t.products.joyTitle}
            </motion.h2>

            <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-6">
              {t.products.joySubtitle}
            </p>

            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {joySeries.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100 mb-6">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center p-8 text-center ${
                        product.name.includes('桃') || product.name.includes('Peach')
                          ? 'bg-gradient-to-br from-pink-400 to-rose-300'
                          : 'bg-gradient-to-br from-brand-blue to-cyan-300'
                      }`}
                    >
                      <span className="text-white font-display font-bold text-xl mb-2">
                        {t.products.joyComingSoon}
                      </span>
                      <span className="text-white/80 text-xs uppercase tracking-widest">
                        {t.products.joyComingTag}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Products Section */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4"
            >
              {t.products.portfolioTitle}
            </motion.h2>

            <div className="w-16 h-1 bg-slate-200 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100 mb-6">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-brand-blue to-cyan-300">
                      <span className="text-white font-display font-bold text-xl mb-2">
                        {t.products.joyComingSoon}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-display font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
