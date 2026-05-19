import { motion } from 'motion/react';
import { Plus, ArrowRight } from 'lucide-react';
import { SIGNATURE_DRINKS } from '../constants';
import Scribbles from './Scribbles';

export default function SignatureDrinks() {
  return (
    <section className="relative py-16 -mt-10 sm:-mt-8 lg:-mt-10 bg-paper overflow-hidden">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

      <Scribbles color="dark" />

      {/* Torn Edge Top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-deep-black" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 95% 40%, 90% 90%, 85% 30%, 80% 80%, 75% 10%, 70% 60%, 65% 20%, 60% 70%, 55% 15%, 50% 50%, 45% 10%, 40% 60%, 35% 20%, 30% 80%, 25% 30%, 20% 90%, 15% 40%, 10% 80%, 5% 50%, 0% 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wider text-charcoal">
              Signature <span className="text-primary-orange italic">Drinks</span> <span className="text-2xl opacity-50">★</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-charcoal font-bold uppercase tracking-widest group border-b-2 border-charcoal/20 pb-1">
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SIGNATURE_DRINKS.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-warm-white p-4 rounded-xl shadow-xl space-y-4 border border-charcoal/5 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-paper">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Character Kanji/Name Overlay */}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-deep-black text-warm-white font-manga text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {drink.character}
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <h3 className="font-manga text-xl text-primary-orange leading-none">{drink.name.split(' ')[0]}</h3>
                    <p className="text-[10px] uppercase font-bold text-charcoal/60 tracking-wider">
                      {drink.name.split(' ').slice(1).join(' ')}
                    </p>
                    <p className="text-lg font-bold text-charcoal">₹ {drink.price}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-primary-orange flex items-center justify-center text-deep-black shadow-lg"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Torn Edge Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-deep-black" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 95% 60%, 90% 10%, 85% 70%, 80% 20%, 75% 90%, 70% 40%, 65% 80%, 60% 30%, 55% 85%, 50% 50%, 45% 90%, 40% 40%, 35% 80%, 30% 20%, 25% 70%, 20% 10%, 15% 60%, 10% 20%, 5% 50%, 0% 0%)' }} />
    </section>
  );
}
