import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import type { MouseEvent } from 'react';
import type { Product, ProductTab } from '../types';

const productImageDimensions: Record<string, { width: number; height: number }> = {
  '/ProductSection-Peach-CSD.png': { width: 1156, height: 1360 },
  '/ProductSection-Blueberry-CSD.png': { width: 1156, height: 1360 },
  '/ProductSection-Water.png': { width: 1156, height: 1360 },
  '/ProductSection-Honey.png': { width: 1156, height: 1360 },
  '/ProductSection-Electrolyte Water.png': { width: 1156, height: 1360 },
};

type ProductSectionProps = {
  t: any;
  isPage?: boolean;
  navigate?: (path: string) => void;
  productSlug?: string | null;
};

type ProductCardProps = {
  product: Product;
  index: number;
  exploreLabel: string;
  navigate?: (path: string) => void;
};

type ProductImageProps = {
  product: Product;
  priority?: boolean;
  mode?: 'card' | 'detail' | 'hero';
};

function navigateWithFallback(path: string, navigate?: (path: string) => void) {
  if (navigate) {
    navigate(path);
    return;
  }

  window.location.href = path;
}

function ProductImage({ product, priority = false, mode = 'card' }: ProductImageProps) {
  const dimensions = product.image ? productImageDimensions[product.image] : undefined;
  const imageTransformClass = `${product.imageScaleClass ?? 'scale-100'} ${product.imagePositionClass ?? ''}`;
  const hoverScaleClass = mode === 'detail' ? '' : 'group-hover:scale-[1.04]';

  return (
    <img
      src={product.image}
      alt={`${product.name} beverage product bottle`}
      width={dimensions?.width}
      height={dimensions?.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`absolute inset-0 z-10 h-full w-full object-cover object-center drop-shadow-[0_28px_28px_rgba(15,23,42,0.16)] transition-transform duration-700 ease-out ${hoverScaleClass} ${imageTransformClass}`}
    />
  );
}

function ProductVisualStage({ product, priority = false, mode = 'card' }: ProductImageProps) {
  const stageHeight = mode === 'detail' ? 'min-h-[32rem] lg:min-h-[42rem]' : mode === 'hero' ? 'h-80 lg:h-[28rem]' : 'h-[22rem]';

  return (
    <div
      className={`relative flex ${stageHeight} items-end justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${product.gradientClass} shadow-inner`}
    >
      <div className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-white/45" />
      <div className="absolute left-8 top-12 h-2 w-2 rounded-full bg-white/70 shadow-[42px_28px_0_rgba(255,255,255,0.45),90px_4px_0_rgba(255,255,255,0.35)]" />
      <div className="absolute bottom-7 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-slate-900/12 blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/35 to-transparent" />
      <ProductImage product={product} priority={priority} mode={mode} />
    </div>
  );
}

function ProductCollectionTabs({ tabs, activeTab, onChange }: { tabs: ProductTab[]; activeTab: ProductTab['id']; onChange: (tab: ProductTab['id']) => void }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" aria-label="Product category filters">
      <div className="inline-flex min-w-max rounded-full border border-sky-100 bg-white/85 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-brand-navy text-white shadow-lg shadow-slate-900/15'
                  : 'text-slate-600 hover:bg-sky-50 hover:text-brand-blue'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard({ product, index, exploreLabel, navigate }: ProductCardProps) {
  const href = `/products/${product.slug}`;
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateWithFallback(href, navigate);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '120px' }}
      transition={{ delay: index * 0.045, duration: 0.5, ease: 'easeOut' }}
      className="h-full"
    >
      <a
        href={href}
        onClick={handleClick}
        className="group flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.10)] outline-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_90px_rgba(14,165,233,0.20)] focus-visible:ring-4 focus-visible:ring-sky-200"
      >
        <ProductVisualStage product={product} priority={index === 0} />

        <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-900 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
              {product.categoryLabel}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {product.size}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold leading-tight text-brand-navy transition-colors group-hover:text-brand-blue">
            {product.name}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm font-light leading-7 text-slate-600">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-sky-100 bg-sky-50/80 px-3 py-1 text-xs font-semibold text-sky-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-7 text-sm font-bold text-brand-navy">
            <span>{exploreLabel}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-brand-blue group-hover:translate-x-1">
              <ArrowRight size={17} aria-hidden="true" />
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

function ProductGrid({ products, exploreLabel, navigate }: { products: Product[]; exploreLabel: string; navigate?: (path: string) => void }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} exploreLabel={exploreLabel} navigate={navigate} />
      ))}
    </div>
  );
}

function ProductsHero({ products, t }: { products: Product[]; t: any }) {
  const heroProduct = products[0];

  return (
    <div className="relative mb-14 overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-white via-sky-50 to-blue-100/70 p-6 shadow-[0_28px_90px_rgba(14,165,233,0.16)] md:mb-16 md:p-10 lg:p-12">
      <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-brand-blue">
            {t.products.heroEyebrow}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] text-brand-navy md:text-7xl">
            {t.products.pageTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-slate-600 md:text-xl md:leading-9">
            {t.products.pageDescription}
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            {t.products.heroStats.map((stat: { value: string; label: string }) => (
              <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur">
                <div className="font-display text-2xl font-bold text-brand-navy">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {heroProduct && <ProductVisualStage product={heroProduct} priority mode="hero" />}
      </div>
    </div>
  );
}

function ProductListingPage({ t, navigate }: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState<ProductTab['id']>('all');
  const products: Product[] = t.products.items;
  const tabs: ProductTab[] = t.products.tabs;
  const filteredProducts = useMemo(
    () => (activeTab === 'all' ? products : products.filter((product) => product.category === activeTab)),
    [activeTab, products],
  );

  return (
    <section id="products" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-24 pb-24 md:pt-28 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.22),transparent_58%)]" />
      <div className="pointer-events-none absolute left-0 top-[36rem] h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-64 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductsHero products={products} t={t} />

        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">{t.products.catalogEyebrow}</p>
            <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">{t.products.catalogTitle}</h2>
          </div>
          <ProductCollectionTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <ProductGrid products={filteredProducts} exploreLabel={t.products.exploreCta} navigate={navigate} />
      </div>
    </section>
  );
}

function DetailInfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-sky-100 bg-white/80 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur">
      <h3 className="font-display text-lg font-bold text-brand-navy">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-sky-50 px-3 py-2 text-sm font-medium text-slate-600">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductDetailPage({ t, productSlug, navigate }: ProductSectionProps) {
  const products: Product[] = t.products.items;
  const product = products.find((item) => item.slug === productSlug) ?? products[0];
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateWithFallback('/products', navigate);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-24 pb-24 md:pt-28 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.20),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="/products" onClick={handleBack} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-brand-blue">
          <ArrowLeft size={17} aria-hidden="true" />
          {t.products.backToProducts}
        </a>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
            <ProductVisualStage product={product} priority mode="detail" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="rounded-[2.5rem] border border-white/80 bg-white/82 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur md:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">{product.categoryLabel}</span>
              <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">{product.flavor}</span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-none text-brand-navy md:text-7xl">{product.name}</h1>
            <p className="mt-6 text-xl font-light leading-9 text-slate-600">{product.longDescription}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.keySellingPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-brand-blue">
                    <Check size={15} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-6 text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{t.products.detailLabels.specification}</p>
                <p className="mt-2 font-display text-2xl font-bold text-brand-navy">{product.size}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{t.products.detailLabels.positioning}</p>
                <p className="mt-2 text-base font-medium leading-7 text-slate-700">{product.shortDescription}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-3">
          <DetailInfoCard title={t.products.detailLabels.ingredients} items={product.ingredientHighlights} />
          <DetailInfoCard title={t.products.detailLabels.channels} items={product.suggestedChannels} />
          <DetailInfoCard title={t.products.detailLabels.occasions} items={product.consumptionOccasions} />
        </section>

        <section className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-brand-blue"><Sparkles size={18} aria-hidden="true" /></span>
            <h2 className="font-display text-3xl font-bold text-brand-navy">{t.products.relatedTitle}</h2>
          </div>
          <ProductGrid products={relatedProducts} exploreLabel={t.products.exploreCta} navigate={navigate} />
        </section>
      </div>
    </section>
  );
}

export default function ProductSection({ t, isPage = false, navigate, productSlug = null }: ProductSectionProps) {
  if (productSlug) {
    return <ProductDetailPage t={t} productSlug={productSlug} navigate={navigate} />;
  }

  return <ProductListingPage t={t} isPage={isPage} navigate={navigate} />;
}
