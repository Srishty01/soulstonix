import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ['All', 'Bracelets', 'Healing Crystals', 'Crystal Trees', 'Pendants', 'Gift Boxes', 'Healing Kits'];
const crystals = ['All', 'Rose Quartz', 'Amethyst', 'Tiger Eye', 'Clear Quartz'];
const chakras = ['All', 'Heart', 'Third Eye', 'Crown', 'Solar Plexus'];

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [crystal, setCrystal] = useState('All');
  const [chakra, setChakra] = useState('All');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const result = [...products].filter((product) => {
      const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      const matchesCrystal = crystal === 'All' || product.crystal === crystal;
      const matchesChakra = chakra === 'All' || product.chakra === chakra;
      return matchesSearch && matchesCategory && matchesCrystal && matchesChakra;
    });

    result.sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'popular') return b.rating - a.rating;
      return 0;
    });

    return result;
  }, [search, category, crystal, chakra, sort]);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Luxury collection</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">The atelier collection</h1>
          <p className="mt-3 max-w-2xl text-charcoal/70">Curated crystals, bracelets and healing objects chosen for beauty, intention and timeless wear.</p>
        </div>

        <div className="mb-8 grid gap-4 rounded-[28px] border border-black/5 bg-white/70 p-4 shadow-luxe md:grid-cols-4">
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the collection" className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none" />
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={crystal} onChange={(event) => setCrystal(event.target.value)} className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none">
            {crystals.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-black/10 bg-cream px-4 py-3 outline-none">
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="price-low">Price Low</option>
            <option value="price-high">Price High</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}
