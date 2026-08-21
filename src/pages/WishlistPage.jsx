import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useStore } from '../contexts/StoreContext';

export default function WishlistPage() {
  const { wishlist } = useStore();

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Wishlist</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Saved pieces for later</h1>
        </div>
        {wishlist.length === 0 ? (
          <div className="rounded-[28px] border border-black/5 bg-white/70 p-10 text-center shadow-luxe">
            <p className="text-lg text-charcoal/70">Your wishlist is currently empty.</p>
            <Link to="/shop" className="mt-4 inline-flex rounded-full bg-gradient-to-r from-gold to-purple px-5 py-3 font-semibold text-white">Browse collection</Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {wishlist.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}
