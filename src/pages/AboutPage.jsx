export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Our Story</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">About Soulstonix</h1>
          <p className="mt-4 max-w-3xl text-charcoal/70">Soulstonix began as a passion project to blend refined design with the timeless healing power of natural crystals. We curate premium bracelets, pendants and ritual kits sourced from ethical miners and crafted by skilled artisans. Our pieces are selected for authenticity, energetic integrity and exceptional finish — designed to be worn, gifted and cherished. We believe in spiritual wellness rooted in quality, transparency and trust; every Soulstonix product is quality-checked, cleansed, and packaged with intention to honour your ritual practice.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-black/5 bg-white/70 p-8 shadow-luxe"><h2 className="font-heading text-2xl">Mission</h2><p className="mt-4 text-charcoal/70">To make crystal healing feel refined, accessible and deeply personal.</p></div>
          <div className="rounded-[28px] border border-black/5 bg-white/70 p-8 shadow-luxe"><h2 className="font-heading text-2xl">Vision</h2><p className="mt-4 text-charcoal/70">To build a global home for conscious luxury with timeless design and spiritual resonance.</p></div>
        </div>
      </div>
    </div>
  );
}
