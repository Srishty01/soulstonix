import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, ChevronDown, Gem, Heart, Menu, Search, ShoppingBag, Sparkles, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';
import { useScrollProgress } from '../hooks/useScrollProgress';

const shopByItems = [
  { label: 'Shop by Crystal', to: '/shop-by-crystal', description: 'Discover luminous bracelets and crystals by stone.', icon: Gem },
  { label: 'Shop by Chakra', to: '/shop-by-chakra', description: 'Choose your energy alignment with intention.', icon: Sparkles },
  { label: 'Shop by Zodiac', to: '/shop-by-zodiac', description: 'Find the bracelet that supports your sign.', icon: Gem },
  { label: 'Shop by Numerology', to: '/shop-by-numerology', description: 'Explore meaning through your personal numbers.', icon: Sparkles },
];

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Crystal Guide', to: '/guide' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { wishlist, cart, theme, setTheme } = useStore();
  const progress = useScrollProgress();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-white/30">
        <div className="h-full bg-gradient-to-r from-purple via-gold to-sage" style={{ width: `${progress}%` }} />
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-black/5 bg-white/90 shadow-lg backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="section-shell flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-purple/10 text-gold">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="font-heading text-lg tracking-[0.3em]">Soulstonix</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-purple">Crystal Atelier</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-gold' : 'text-charcoal hover:text-gold'}`}>
                {item.label}
              </NavLink>
            ))}
            <div className="relative" onMouseEnter={() => setMegaMenuOpen(true)} onMouseLeave={() => setMegaMenuOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-charcoal transition hover:text-gold">
                Shop By <ChevronDown size={16} />
              </button>
              {megaMenuOpen && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="absolute left-1/2 top-full mt-4 w-[560px] -translate-x-1/2 rounded-[28px] border border-white/60 bg-white/90 p-5 shadow-luxe backdrop-blur-xl">
                  <div className="grid gap-3 md:grid-cols-2">
                    {shopByItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.to} to={item.to} className="group rounded-[22px] border border-black/5 bg-gradient-to-br from-white to-cream/70 p-4 transition hover:-translate-y-1 hover:shadow-xl">
                          <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-purple/20 text-purple"><Icon size={18} /></div>
                            <span className="text-sm font-semibold text-gold">Explore</span>
                          </div>
                          <h3 className="mt-4 font-heading text-lg">{item.label}</h3>
                          <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-gold/30 bg-white/80 p-2.5 text-charcoal transition hover:-translate-y-0.5 hover:bg-cream">
              <Search size={18} />
            </button>
            <Link to="/wishlist" className="relative rounded-full border border-gold/30 bg-white/80 p-2.5 text-charcoal transition hover:-translate-y-0.5 hover:bg-cream">
              <Heart size={18} />
              <span className="absolute -right-1 -top-1 rounded-full bg-purple px-1.5 py-0.5 text-[10px] font-semibold text-white">{wishlist.length}</span>
            </Link>
            <Link to="/cart" className="relative rounded-full border border-gold/30 bg-white/80 p-2.5 text-charcoal transition hover:-translate-y-0.5 hover:bg-cream">
              <ShoppingBag size={18} />
              <span className="absolute -right-1 -top-1 rounded-full bg-gold px-1.5 py-0.5 text-[10px] font-semibold text-white">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </Link>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hidden rounded-full border border-gold/30 bg-white/80 p-2.5 text-charcoal transition hover:-translate-y-0.5 hover:bg-cream sm:flex">
              <User size={18} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-gold/30 bg-white/80 p-2.5 text-charcoal lg:hidden">
              <Menu size={18} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/5 bg-white/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-gold' : 'text-charcoal'}`}>
                  {item.label}
                </NavLink>
              ))}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple">Shop By</p>
                {shopByItems.map((item) => (
                  <Link key={item.to} to={item.to} className="block rounded-[18px] border border-black/5 bg-cream/70 px-3 py-2 text-sm text-charcoal">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pb-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-black/10 bg-charcoal px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="section-shell grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-heading text-xl tracking-[0.3em]">Soulstonix</p>
            <p className="mt-4 text-sm text-white/70">Luxury crystal jewellery curated with intention, heritage and modern elegance.</p>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg">Policies</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a href="#">Privacy</a>
              <a href="#">Shipping</a>
              <a href="#">Refund</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-lg">Newsletter</h3>
            <p className="text-sm text-white/70">Receive first access to new releases and monthly crystal wisdom.</p>
          </div>
        </div>
      </footer>
      <div className="border-t border-black/5 bg-white/5 px-4 py-4">
        <div className="section-shell text-sm text-white/70">© 2026 Soulstonix. All Rights Reserved.</div>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-gold to-purple p-3 text-white shadow-2xl transition hover:scale-105">
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
