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

function getPageFromPath(pathname: string): Page {
  return pathname === '/products' ? 'products' : 'home';
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [page, setPage] = useState<Page>(() => getPageFromPath(window.location.pathname));
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
      const nextPage = getPageFromPath(url.pathname);

      window.history.pushState(null, '', `${url.pathname}${url.hash}`);
      setPage(nextPage);

      if (nextPage === 'home') {
        window.setTimeout(() => scrollToHash(url.hash), 0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [scrollToHash],
  );

  useEffect(() => {
    const onPopState = () => {
      const nextPage = getPageFromPath(window.location.pathname);
      setPage(nextPage);

      if (nextPage === 'home') {
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
          <ProductSection t={t} isPage />
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
