import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { SOCIAL_GALLERY } from '../constants';

export default function SocialGallery() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wider text-charcoal">
                Follow our <span className="text-primary-orange italic">Journey</span>
              </h2>
              <p className="text-charcoal/60 font-sans tracking-[0.3em] uppercase mt-2">@frecocafe</p>
           </div>
           
           <div className="flex items-center gap-6">
             {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#F25A1D' }}
                  className="w-14 h-14 rounded-full border-2 border-charcoal/10 flex items-center justify-center text-charcoal transition-colors hover:border-primary-orange/30"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
             ))}
           </div>
        </div>
      </div>

      {/* Horizontal Scrolling Tape */}
      <div className="flex overflow-hidden py-8 -rotate-1 scale-105 bg-deep-black shadow-2xl relative z-20">
         <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 px-2"
         >
           {[...SOCIAL_GALLERY, ...SOCIAL_GALLERY].map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="w-72 h-80 flex-shrink-0 bg-charcoal rounded-xl overflow-hidden border border-white/10 group relative"
              >
                <img 
                  src={img} 
                  alt="Cafe Social" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Instagram className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6" />
              </motion.div>
           ))}
         </motion.div>
      </div>
      
      {/* Decorative Text Strip */}
      <div className="mt-8 flex gap-12 text-sm font-manga text-charcoal/20 uppercase tracking-[0.5em] select-none">
         {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>Anime Culture • Coffee Lovers • Foodies • Creative Vibes</span>
         ))}
      </div>
    </section>
  );
}
