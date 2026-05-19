import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ANIME_WALL } from '../constants';
import Scribbles from './Scribbles';

export default function AnimeWall() {
  return (
    <section className="relative py-24 bg-paper overflow-hidden">
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      <Scribbles color="dark" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wider text-charcoal">
              Our <span className="text-primary-orange italic">Anime Wall</span>
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed font-sans max-w-sm">
              Every frame has a story. <br />
              What's yours?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary-orange text-primary-orange font-bold uppercase tracking-widest rounded-lg flex items-center gap-3 transition-colors group"
            >
              View Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="lg:col-span-3">
             <div className="relative group">
                {/* Glowing Border Background */}
                <div className="absolute -inset-4 bg-primary-orange/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative rounded-2xl overflow-hidden border-8 border-charcoal shadow-2xl">
                   <img 
                    src={ANIME_WALL} 
                    alt="Anime Poster Wall" 
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-video object-cover brightness-75 transition-all duration-700 group-hover:brightness-100 group-hover:scale-105"
                  />
                  {/* Gallery Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
                  
                  {/* Decorative Seating Illustration Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-charcoal/40 backdrop-blur-sm p-4 flex items-center justify-around border-t border-white/10">
                    <div className="w-12 h-1 text-primary-orange/50 rounded-full" />
                    <div className="w-12 h-1 text-primary-orange/50 rounded-full" />
                    <div className="w-12 h-1 text-primary-orange/50 rounded-full" />
                  </div>
                </div>

                {/* Vertical Decorative Bar */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 h-1/2 w-1.5 bg-primary-orange shadow-[0_0_15px_rgba(242,90,29,0.5)]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
