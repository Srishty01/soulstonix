import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_40%),linear-gradient(135deg,_#F8F6F1_0%,_#ffffff_100%)]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-[32px] border border-black/5 bg-white/80 px-8 py-10 text-center shadow-luxe backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-purple/20 text-gold">
          <Sparkles size={24} />
        </div>
        <p className="mt-4 font-heading text-2xl tracking-[0.25em]">Soulstonix</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-purple">Preparing your ritual</p>
      </motion.div>
    </div>
  );
}
