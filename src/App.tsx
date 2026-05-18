import { useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ValueProp from './components/ValueProp';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { translations } from './i18n';
import type { Language } from './i18n';

type Page = 'home' | 'products';

type RouteState = {
  page: Page;
  productSlug: string | null;
};

function getRouteFromPath(pathname: string): RouteState {
  if (pathname === '/products') {
    return { page: 'products', productSlug: null };
  }

  if (pathname.startsWith('/products/')) {
    return { page: 'products', productSlug: pathname.replace('/products/', '').split('/')[0] || null };
  }

  return { page: 'home', productSlug: null };
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [route, setRoute] = useState<RouteState>(() => getRouteFromPath(window.location.pathname));
  const { page, productSlug } = route;
  const t = translations[lang];

  const scrollToHash = useCallback((hash: string) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const navigate = useCallback(
    (path: string) => {
      const url = new URL(path, window.location.origin);
      const nextRoute = getRouteFromPath(url.pathname);

      window.history.pushState(null, '', `${url.pathname}${url.hash}`);
      setRoute(nextRoute);

      if (nextRoute.page === 'home') {
        window.setTimeout(() => scrollToHash(url.hash), 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [scrollToHash],
  );

  useEffect(() => {
    const onPopState = () => {
      const nextRoute = getRouteFromPath(window.location.pathname);
      setRoute(nextRoute);

      if (nextRoute.page === 'home') {
        window.setTimeout(() => scrollToHash(window.location.hash), 0);
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [scrollToHash]);

  const commonProps = useMemo(
    () => ({ lang, setLang, t, page, navigate }),
    [lang, page, t, navigate],
  );

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar {...commonProps} />
      {page === 'products' ? (
        <main>
          <ProductSection t={t} isPage navigate={navigate} productSlug={productSlug} />
        </main>
      ) : (
        <main>
          <Hero t={t} navigate={navigate} />
          <ValueProp t={t} navigate={navigate} />
          <CTA t={t} />
        </main>
      )}
      <Footer t={t} navigate={navigate} />
    </div>
  );
}
