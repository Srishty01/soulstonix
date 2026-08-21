import { motion } from 'framer-motion';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const isFaved = wishlist.some((item) => item.id === product.id);

  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="group overflow-hidden rounded-[28px] border border-black/5 bg-white/80 shadow-luxe">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-purple">{product.badge}</div>
        <button onClick={() => toggleWishlist(product)} className={`absolute right-4 top-4 rounded-full p-2 transition ${isFaved ? 'bg-gold text-white' : 'bg-white/90 text-charcoal'}`}>
          <Heart size={16} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.3em]">{product.category}</p>
            <p className="mt-1 text-sm font-semibold">{product.crystal}</p>
          </div>
          <Link to={`/product/${product.id}`} className="rounded-full border border-white/40 bg-white/10 px-3 py-2 text-sm backdrop-blur">View</Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-lg">{product.name}</h3>
          <div className="flex items-center gap-1 text-gold">
            <Star size={14} fill="currentColor" />
            <span className="text-sm text-charcoal">{product.rating}</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-charcoal/70">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-purple">${product.price}</p>
            <p className="text-xs text-charcoal/50 line-through">${product.originalPrice}</p>
          </div>
          <button onClick={() => addToCart(product)} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-purple px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]">
            <ShoppingBag size={15} /> Add
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-charcoal/70">
          <span className="rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Save 20%</span>
          <button className="flex items-center gap-1 rounded-full border border-black/10 bg-cream px-3 py-1.5">
            <Eye size={14} /> Quick View
          </button>
        </div>
      </div>
    </motion.article>
  );
}
