import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../contexts/StoreContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const product = useMemo(() => products.find((item) => item.id === Number(id)), [id]);

  if (!product) {
    return <div className="px-4 py-16 text-center text-charcoal/70">Product not found.</div>;
  }

  const isFaved = wishlist.some((item) => item.id === product.id);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/70 p-4 shadow-luxe">
          <img src={product.image} alt={product.name} className="h-[480px] w-full rounded-[24px] object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple">{product.category}</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-lg text-charcoal/70">{product.description}</p>
          <div className="mt-6 flex items-center gap-3 text-gold">
            <Star size={18} fill="currentColor" />
            <span className="font-semibold text-charcoal">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <div className="mt-6 flex items-end gap-4">
            <div>
              <p className="text-3xl font-semibold text-purple">${product.price}</p>
              <p className="text-sm text-charcoal/50 line-through">${product.originalPrice}</p>
            </div>
            <span className="rounded-full bg-sage/40 px-3 py-1 text-sm font-medium text-charcoal">In stock</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => addToCart(product)} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-purple px-5 py-3 font-semibold text-white"><ShoppingBag size={16} />Add to cart</button>
            <button onClick={() => toggleWishlist(product)} className={`flex items-center gap-2 rounded-full border px-5 py-3 font-semibold ${isFaved ? 'border-gold bg-gold/10 text-gold' : 'border-black/10 bg-white/80 text-charcoal'}`}><Heart size={16} />Wishlist</button>
          </div>
          <div className="mt-10 rounded-[24px] border border-black/5 bg-white/70 p-6 shadow-luxe">
            <h2 className="font-heading text-2xl">Benefits</h2>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
              <li>• Elegant symbolism and everyday luxury</li>
              <li>• Intentionally grounded in chakra and zodiac resonance</li>
              <li>• Ethically sourced and energetically cleansed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
