import { chakraCards } from '../data/products';

export default function GuidePage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Crystal Guide</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">A luxury guide to chakra energy</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {chakraCards.map((card) => (
            <div key={card.name} className="rounded-[28px] border border-black/5 bg-white/70 p-6 shadow-luxe">
              <h3 className="font-heading text-xl">{card.name}</h3>
              <p className="mt-2 text-sm text-charcoal/70">Color: {card.color}</p>
              <p className="mt-2 text-sm text-charcoal/70">Meaning: {card.meaning}</p>
              <p className="mt-3 text-sm text-charcoal/70">Benefits: {card.benefits.join(', ')}</p>
              <p className="mt-4 text-sm font-semibold text-purple">Recommended Bracelet: {card.bracelet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
