import { motion } from 'motion/react';
import type { Product } from '../types';

const productImageDimensions: Record<string, { width: number; height: number }> = {
  '/ProductSection-Peach-CSD.png': { width: 1122, height: 1402 },
  '/ProductSection-Blueberry-CSD.png': { width: 1122, height: 1402 },
  '/ProductSection-Honey.png': { width: 1887, height: 2335 },
  '/ProductSection-Electrolyte Water.jpeg': { width: 4000, height: 6000 },
  '/ProductSection-water.jpg': { width: 1600, height: 992 },
};

type ProductCardMeta = {
  tags: string[];
  accent: string;
};

type ProductCollection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  products: Product[];
};

type ProductImageProps = {
  product: Product;
  priority?: boolean;
};

type ProductCardProps = {
  product: Product;
  index: number;
  meta: ProductCardMeta;
  ctaLabel: string;
};

function ProductImage({ product, priority = false }: ProductImageProps) {
  const dimensions = product.image ? productImageDimensions[product.image] : undefined;

  return (
    <img
      src={product.image}
      alt={product.name}
      width={dimensions?.width}
      height={dimensions?.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className="h-full max-h-[18rem] w-full object-contain object-bottom px-6 pt-7 pb-0 transition-transform duration-700 ease-out group-hover:scale-105 md:max-h-[21rem]"
    />
  );
}

function ProductCard({ product, index, meta, ctaLabel }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '120px' }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: 'easeOut' }}
      className="group h-full"
    >
      <div className="relative flex h-full min-h-[640px] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-sky-50/70 to-slate-50 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(14,165,233,0.18)] md:p-6">
        <div className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${meta.accent} opacity-20 blur-3xl`} />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white/90 to-transparent" />

        <div className="relative mb-7 flex h-80 items-end justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-white/85 via-sky-50/70 to-white/55 shadow-inner md:h-96">
          <div className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${meta.accent} opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
          <div className="absolute bottom-8 left-1/2 h-8 w-44 -translate-x-1/2 rounded-full bg-slate-900/10 blur-xl" />

          {product.image ? (
            <ProductImage product={product} priority={index === 0} />
          ) : (
            <div className={`relative z-10 flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${meta.accent} p-8 text-center`}>
              <span className="font-display text-xl font-bold text-white">Coming Soon</span>
              <span className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">CP Beverage</span>
            </div>
          )}
        </div>

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mb-5 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sky-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mb-3 font-display text-2xl font-bold text-brand-navy transition-colors group-hover:text-brand-blue">
            {product.name}
          </h3>

          <p className="mb-8 text-sm font-light leading-7 text-slate-600">
            {product.description}
          </p>

          <button className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-brand-blue hover:shadow-sky-400/25">
            {ctaLabel}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ProductCollectionSection({ collection, t }: { collection: ProductCollection; t: any }) {
  return (
    <section className="relative">
      <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">
            {collection.eyebrow}
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-brand-navy md:text-5xl"
          >
            {collection.title}
          </motion.h2>
        </div>

        <p className="max-w-md text-sm font-light leading-7 text-slate-600 md:text-right">
          {collection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">
        {collection.products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            meta={t.products.productMeta[product.id]}
            ctaLabel={t.products.exploreCta}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProductSection({ t, isPage = false }: any) {
  const portfolio: Product[] = t.products.portfolio;
  const collections: ProductCollection[] = [
    {
      id: 'sparkling',
      title: t.products.collections.sparkling.title,
      eyebrow: t.products.collections.sparkling.eyebrow,
      description: t.products.collections.sparkling.description,
      products: t.products.joySeries,
    },
    {
      id: 'functional',
      title: t.products.collections.functional.title,
      eyebrow: t.products.collections.functional.eyebrow,
      description: t.products.collections.functional.description,
      products: portfolio.filter((product) => ['p-1', 'p-2'].includes(product.id)),
    },
    {
      id: 'water',
      title: t.products.collections.water.title,
      eyebrow: t.products.collections.water.eyebrow,
      description: t.products.collections.water.description,
      products: portfolio.filter((product) => product.id === 'p-3'),
    },
  ];

  return (
    <section
      id="products"
      className={`${isPage ? 'pt-20' : 'py-24 md:py-32'} relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pb-24 md:pb-32`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.20),transparent_55%)]" />
      <div className="pointer-events-none absolute left-0 top-96 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-64 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isPage && (
          <div className="relative mb-20 overflow-hidden rounded-b-[2.5rem] rounded-t-[1.5rem] border border-white/80 bg-gradient-to-br from-white/90 via-sky-50 to-blue-100/70 px-6 py-20 text-center shadow-[0_28px_90px_rgba(14,165,233,0.16)] md:mb-24 md:px-12 md:py-24">
            <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
            <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

            <div className="relative mx-auto max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-brand-blue">
                {t.products.heroEyebrow}
              </p>
              <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-brand-navy md:text-7xl">
                {t.products.pageTitle}
              </h1>
              <p className="mx-auto max-w-2xl text-lg font-light leading-8 text-slate-600 md:text-xl md:leading-9">
                {t.products.pageDescription}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-24 md:space-y-32">
          {collections.map((collection) => (
            <ProductCollectionSection key={collection.id} collection={collection} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
