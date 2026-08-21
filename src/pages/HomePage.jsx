import { motion } from 'framer-motion';
import { ArrowRight, Compass, Gem, Heart, ShieldCheck, Sparkles, Star, Truck, Wallet } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const whyChoose = [
  { icon: ShieldCheck, title: '100% Authentic Crystals', text: 'Ethically sourced and independently verified.' },
  { icon: Sparkles, title: 'Premium Quality', text: 'Luxury finishes and hand-selected stones.' },
  { icon: Truck, title: 'Fast Shipping', text: 'White-glove delivery across the globe.' },
  { icon: Wallet, title: 'Secure Payment', text: 'Protected checkout with flexible methods.' },
];

const shopByCategories = [
  { title: 'Shop by Crystal', description: 'Bracelets curated by stone energy and elegance.', href: '/shop-by-crystal', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80', accent: 'from-purple/80 to-gold/70' },
  { title: 'Shop by Chakra', description: 'Align your ritual with chakra-inspired bracelets.', href: '/shop-by-chakra', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80', accent: 'from-gold/80 to-purple/70' },
  { title: 'Shop by Zodiac', description: 'Discover energetic bracelets tailored to your sign.', href: '/shop-by-zodiac', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80', accent: 'from-purple/80 to-sage/70' },
  { title: 'Shop by Numerology', description: 'Unlock your symbolic number with refined crystal pieces.', href: '/shop-by-numerology', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80', accent: 'from-gold/80 to-charcoal/70' },
];

const knowledgeCards = [
  { title: 'Rose Quartz', text: 'A stone of compassion and heart-opening energy for emotional balance.' },
  { title: 'Amethyst', text: 'Known for calm, clarity and soothing support during reflective rituals.' },
  { title: 'Tiger Eye', text: 'A radiant stone for courage, focus and grounded confidence.' },
];

const testimonials = [
  { name: 'Maya', quote: 'Every bracelet feels like a daily ritual of luxury and calm.' },
  { name: 'Ava', quote: 'The craftsmanship is exceptional and the energy is unmistakable.' },
  { name: 'Nadia', quote: 'Premium quality, beautiful presentation and genuinely meaningful gifts.' },
];

const instagramPosts = [
  { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80' },
  { image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80' },
  { image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80' },
  { image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80' },
];

const quizQuestions = [
  { prompt: 'What are you looking for?', options: ['Love', 'Money', 'Protection', 'Confidence'] },
  { prompt: 'How would you like to feel?', options: ['Calm', 'Grounded', 'Inspired', 'Balanced'] },
];

export default function HomePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    }
  };

  const result = answers[0] && answers[1] ? `${answers[0]} + ${answers[1]}` : 'Your ritual';

  return (
    <div>
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_35%),linear-gradient(135deg,_#F8F6F1_0%,_#ffffff_100%)]" />
        <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple/20 blur-3xl" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-sm text-purple backdrop-blur">
              <Gem size={16} /> Soulstonix — Premium Healing Crystal Jewellery
            </div>
            <h1 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-7xl">Welcome to Soulstonix</h1>
            <p className="mt-6 max-w-xl text-lg text-charcoal/70">Premium Healing Crystal Bracelets & Natural Crystals for Balance, Positivity & Well-being.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="rounded-full bg-gradient-to-r from-gold to-purple px-6 py-3 font-semibold text-white shadow-luxe transition hover:scale-[1.02]">Shop Now</Link>
              <Link to="/contact" className="rounded-full border border-gold/30 bg-white/80 px-6 py-3 font-semibold text-charcoal transition hover:scale-[1.02]">Consult Expert</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-charcoal/70">
              <div className="flex items-center gap-2"><Star size={16} className="text-gold" /> 4.9/5 from 2.4k reviews</div>
              <div className="flex items-center gap-2"><Compass size={16} className="text-gold" /> Guided by crystal experts</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel relative overflow-hidden p-4 sm:p-6">
            <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80" alt="Luxury crystal bracelet styling" className="h-[470px] w-full rounded-[24px] object-cover" />
            <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/30 bg-white/75 p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-purple">Featured curation</p>
              <p className="mt-2 font-heading text-2xl text-charcoal">The Aurora Energy Edit</p>
              <p className="mt-2 text-sm text-charcoal/70">Rose quartz, moonstone and amethyst bracelets for elevated ritual wear.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Featured Collections</p>
            <h2 className="section-title mt-3">Curated for intention and style</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-gold">Explore all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white/70 shadow-luxe">
              <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Collection</p>
                <h3 className="mt-2 font-heading text-2xl">{product.name}</h3>
                <Link to={`/product/${product.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sage">Discover <ArrowRight size={16} /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Shop By</p>
            <h2 className="section-title mt-3">Choose your crystal journey</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {shopByCategories.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8, scale: 1.01 }} className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/70 p-4 shadow-luxe backdrop-blur">
              <img src={item.image} alt={item.title} className="h-56 w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-105" />
              <div className={`absolute inset-x-5 bottom-5 rounded-[22px] bg-gradient-to-r ${item.accent} p-5 text-white shadow-2xl`}>
                <h3 className="font-heading text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.description}</p>
                <Link to={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sage">Explore <ArrowRight size={16} /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Best Sellers</p>
            <h2 className="section-title mt-3">Most loved in the atelier</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">New Arrivals</p>
            <h2 className="section-title mt-3">Fresh energy for your ritual wardrobe</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(1).map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[30px] border border-black/5 bg-white/70 p-4 shadow-luxe">
              <img src={product.image} alt={product.name} className="h-56 w-full rounded-[24px] object-cover" />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-lg">{product.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{product.crystal}</p>
                </div>
                <div className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">New</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] border border-black/5 bg-white/70 p-6 shadow-luxe">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-purple/20 text-purple">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple">Healing Crystal Knowledge</p>
              <h2 className="section-title mt-3">Guidance rooted in crystal symbolism</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {knowledgeCards.map((card, index) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] border border-black/5 bg-white/70 p-6 shadow-luxe">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-purple/20 text-purple"><Gem size={18} /></div>
                <h3 className="font-heading text-xl">{card.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-black/5 bg-white/70 p-8 shadow-luxe">
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Crystal Finder</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Find your ritual match</h2>
            <p className="mt-4 text-charcoal/70">Answer a few questions and discover your ideal bracelet energy.</p>
            <div className="mt-8 rounded-[24px] bg-gradient-to-r from-purple/10 to-gold/10 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-purple">Result</p>
              <p className="mt-3 font-heading text-2xl">{result}</p>
            </div>
          </div>
          <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-purple/90 to-gold/80 p-8 text-white shadow-luxe">
            <p className="text-sm uppercase tracking-[0.3em] text-sage">Quiz</p>
            <h3 className="mt-3 font-heading text-2xl">{quizQuestions[step].prompt}</h3>
            <div className="mt-6 grid gap-3">
              {quizQuestions[step].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)} className="rounded-full border border-white/30 bg-white/10 px-4 py-3 text-left font-medium backdrop-blur transition hover:bg-white/20">{option}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="glass-panel overflow-hidden bg-gradient-to-r from-purple/90 via-charcoal to-gold/70 p-8 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sage">Consultation</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">Need help choosing your crystal?</h2>
              <p className="mt-4 max-w-xl text-white/80">Our crystal experts are available to guide you through energy, meaning and styling with a personal consultation.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919999999999" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:scale-[1.02]">WhatsApp</a>
              <a href="tel:+919999999999" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:scale-[1.02]">Call Now</a>
              <a href="/contact" className="rounded-full bg-white px-5 py-3 font-semibold text-charcoal transition hover:scale-[1.02]">Book Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Testimonials</p>
            <h2 className="section-title mt-3">Loved by our ritual community</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[24px] border border-black/5 bg-white/70 p-6 shadow-luxe">
              <div className="flex items-center gap-1 text-gold"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
              <p className="mt-4 text-sm text-charcoal/70">“{item.quote}”</p>
              <p className="mt-4 font-heading text-lg">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple">Instagram Gallery</p>
            <h2 className="section-title mt-3">A closer look at the pieces</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {instagramPosts.map((item) => (
            <a key={item.image} href="https://www.instagram.com" className="group overflow-hidden rounded-[24px] border border-black/5 bg-white/70 shadow-luxe">
              <img src={item.image} alt="Soulstonix crystal jewellery" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="rounded-[32px] border border-black/5 bg-gradient-to-r from-white/80 to-cream/80 p-8 shadow-luxe">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple">Newsletter</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">Join the Soulstonix ritual list</h2>
              <p className="mt-4 text-charcoal/70">Receive early access to new bracelets, limited drops and crystal guidance.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input className="flex-1 rounded-full border border-black/10 bg-white px-4 py-3 outline-none" placeholder="Email address" />
              <button className="rounded-full bg-gradient-to-r from-gold to-purple px-5 py-3 font-semibold text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
