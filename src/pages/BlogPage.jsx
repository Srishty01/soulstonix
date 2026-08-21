export default function BlogPage() {
  const posts = [
    { title: 'How to choose your crystal bracelet', category: 'Healing' },
    { title: 'Meditation rituals for moonstone energy', category: 'Meditation' },
    { title: 'The meaning of numbers in crystal rituals', category: 'Numerology' },
  ];

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-10 rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <p className="text-sm uppercase tracking-[0.3em] text-purple">Journal</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl">Insightful stories from the crystal atelier</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="rounded-[28px] border border-black/5 bg-white/70 p-8 shadow-luxe">
              <p className="text-sm uppercase tracking-[0.3em] text-gold">{post.category}</p>
              <h3 className="mt-3 font-heading text-xl">{post.title}</h3>
              <p className="mt-3 text-sm text-charcoal/70">A refined guide to crystal care, symbolism and intentional living.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
