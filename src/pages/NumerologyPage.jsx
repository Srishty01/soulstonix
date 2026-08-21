import { numerologyNumbers } from '../data/products';

export default function NumerologyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Shop By Numerology</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Numbers that shape your energy</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {numerologyNumbers.map((number) => (
            <div key={number} className="rounded-[28px] border border-black/5 bg-white/70 p-6 shadow-luxe">
              <h3 className="font-heading text-xl">Number {number}</h3>
              <p className="mt-3 text-sm text-charcoal/70">Meaning: Growth and alignment</p>
              <p className="mt-2 text-sm text-charcoal/70">Recommended Crystals: Clear Quartz, Rose Quartz</p>
              <p className="mt-2 text-sm text-charcoal/70">Lucky Colors: Cream, Gold</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
