import { motion } from 'motion/react';
import { Globe, Package, Zap, ShieldCheck } from 'lucide-react';

const props = [
  {
    title: "Natural Water Source",
    description: "Sourced from pristine glaciers above 3,000 meters, delivering springs of clarity and gentle sweetness.",
    icon: ShieldCheck
  },
  {
    title: "Precious Ingredients",
    description: "Rare highland fruits and botanicals, distilled into rich layers of flavor and vitality by dramatic day-night shifts.",
    icon: Zap
  },
  {
    title: "Culture Heritage",
    description: "Rooted in the harmonious fusion of sky, land, and people of the mystical Greater Shangri-La region.",
    icon: Globe
  },
  {
    title: "Six Major Upgrades",
    description: "Flavor, Juicy, Freshness, Health, Refreshness, and Experience upgrades in every bottle.",
    icon: Package
  }
];

export default function ValueProp() {
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
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">Product Values</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy leading-tight">
                One Sip to Shangri-La
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Using rare and precious ingredients from the Greater Shangri-La region to create premium health beverages rooted in the purity and vitality of the highlands.
              </p>
              <div className="pt-4">
                <a href="#products" className="inline-flex items-center space-x-2 text-brand-navy font-bold hover:text-brand-blue transition-colors group">
                  <span>Discover the [Joy] Series</span>
                  <div className="w-8 h-px bg-brand-navy group-hover:bg-brand-blue transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {props.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                  <prop.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{prop.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
