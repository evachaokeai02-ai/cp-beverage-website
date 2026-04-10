import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ValueProp from './components/ValueProp';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { translations, Language } from './i18n';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <ProductSection />
      <ValueProp />
      <CTA />
      <Footer t={t} />
    </div>
  );
}
