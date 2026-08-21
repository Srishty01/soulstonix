import { Link } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { useStore } from '../contexts/StoreContext';

export default function CartPage() {
  const { cart, updateQty } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Cart</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Your curated selection</h1>
        </div>
        {cart.length === 0 ? (
          <div className="rounded-[28px] border border-black/5 bg-white/70 p-10 text-center shadow-luxe">
            <p className="text-lg text-charcoal/70">Your cart is empty.</p>
            <Link to="/shop" className="mt-4 inline-flex rounded-full bg-gradient-to-r from-gold to-purple px-5 py-3 font-semibold text-white">Continue shopping</Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-[24px] border border-black/5 bg-white/70 p-4 shadow-luxe sm:flex-row sm:items-center">
                  <img src={item.image} alt={item.name} className="h-28 w-full rounded-[20px] object-cover sm:w-28" />
                  <div className="flex-1">
                    <h3 className="font-heading text-lg">{item.name}</h3>
                    <p className="text-sm text-charcoal/70">{item.crystal}</p>
                  </div>
                  <div className="flex items-center gap-3 rounded-full border border-black/10 bg-cream px-3 py-2">
                    <button onClick={() => updateQty(item.id, -1)} className="rounded-full p-1 hover:bg-white"><Minus size={16} /></button>
                    <span className="min-w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="rounded-full p-1 hover:bg-white"><Plus size={16} /></button>
                  </div>
                  <p className="text-lg font-semibold text-purple">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-black/5 bg-white/70 p-6 shadow-luxe">
              <h2 className="font-heading text-2xl">Order Summary</h2>
              <div className="mt-6 space-y-3 text-sm text-charcoal/70">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Complimentary</span></div>
                <div className="flex justify-between"><span>Estimated Total</span><span className="font-semibold text-purple">${subtotal.toFixed(2)}</span></div>
              </div>
              <button className="mt-6 w-full rounded-full bg-gradient-to-r from-gold to-purple px-5 py-3 font-semibold text-white">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
