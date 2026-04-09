export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-2xl font-display font-bold text-brand-blue tracking-tighter">
              CP<span className="text-brand-navy">BEVERAGE</span>
            </span>
            <p className="max-w-xs text-slate-500 font-light leading-relaxed">
              CP (Shangri-la) Beverage Co. is a leader in functional hydration, dedicated to quality and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-brand-navy mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#products" className="hover:text-brand-blue transition-colors">Our Products</a></li>
              <li><a href="#about" className="hover:text-brand-blue transition-colors">Brand Story</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-navy mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>info@cpbeverage.com</li>
              <li>CP (Shangri-la) Beverage Co.</li>
              <li>China / International</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 CP (Shangri-la) Beverage Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Trade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
