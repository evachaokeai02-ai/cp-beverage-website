import { motion } from 'motion/react';
import { Product } from '../types';

const joySeries: Product[] = [
  {
    id: 'joy-1',
    name: 'Peach CSD [Joy Series]',
    description: 'Beauty & Skin Nourishment. Crafted with real highland white peach juice, enriched with niacinamide and collagen peptides. 0 sugar, dreamy pink bubbles.',
    image: '' // Placeholder for upcoming product
  },
  {
    id: 'joy-2',
    name: 'Blueberry CSD [Joy Series]',
    description: 'Aesthetic Eye Guard. Crafted from plateau blueberries, enriched with lutein and carotene to support eye comfort and clarity. 0 sugar, blue bubbles.',
    image: '' // Placeholder for upcoming product
  }
];

const otherProducts: Product[] = [
  {
    id: 'p-1',
    name: 'Freshly Shaken Honey Water',
    description: 'Real honey stored in the cap. Twist and shake for a fresh, natural honey lime beverage. Zero additives, pure refreshment.',
    image: 'https://i.imgur.com/CsfmMK1.jpeg'
  },
  {
    id: 'p-2',
    name: 'CP Electrolyte Beverage',
    description: 'High-performance hydration with ≥500mg/L electrolyte content. Low sugar, refreshing lemon flavor for rapid recovery.',
    image: 'https://i.imgur.com/QsqVhJm.jpeg'
  },
  {
    id: 'p-3',
    name: 'CP Natural Mineral Water',
    description: 'Premium natural mineral water sourced from pristine springs. Crystal-clear hydration with a balanced mineral profile.',
    image: 'https://i.imgur.com/dud0Gg5.jpeg'
  }
];

export default function ProductSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* [Joy] Series Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4"
            >
              The [Joy] Series
            </motion.h2>
            <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-6">Shangri-La Sparkling Water (Coming 2026)</p>
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
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className={`w-full h-full flex flex-col items-center justify-center p-8 text-center ${
                      product.name.includes('Peach') 
                        ? 'bg-gradient-to-br from-pink-400 to-rose-300' 
                        : 'bg-gradient-to-br from-brand-blue to-cyan-300'
                    }`}>
                      <span className="text-white font-display font-bold text-xl mb-2">COMING SOON</span>
                      <span className="text-white/80 text-xs uppercase tracking-widest">
                        Shangri-La Joy Series
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
              Premium Portfolio
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
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-brand-blue to-cyan-300">
                      <span className="text-white font-display font-bold text-xl mb-2">COMING SOON</span>
                      <span className="text-white/80 text-xs uppercase tracking-widest">
                        Vibrant Tropical Flavors
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
