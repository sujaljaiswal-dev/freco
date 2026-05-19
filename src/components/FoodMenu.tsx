import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FOOD_MENU } from '../constants';
import Scribbles from './Scribbles';

export default function FoodMenu() {
  return (
    <section className="relative py-12 lg:py-20 bg-charcoal overflow-hidden my-4">
      <Scribbles color="light" />
      {/* Torn Paper Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20 pointer-events-none">
        <svg className="block w-full h-[15px] sm:h-[20px] max-h-12 text-[#F3E6D3]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Decorative Doodles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l3 12 12 3-12 3-3 12-3-12-12-3 12-3 3-12zm15 30l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-8 pb-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="w-full xl:w-[30%] flex flex-col items-center xl:items-start text-center xl:text-left shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-manga uppercase leading-none tracking-tight mb-4 flex flex-col">
              <span className="text-warm-white transform -rotate-2 origin-left">What's on</span>
              <span className="text-primary-orange">The Menu?</span>
            </h2>
            
            <p className="text-warm-white/80 text-sm md:text-base font-sans mt-2 mb-6 max-w-sm">
              From sizzling burgers to cheesy pizzas, every bite is pure comfort.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E65100] hover:bg-[#F57C00] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mb-6 xl:mb-0"
            >
              Explore Full Menu <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right Cards Slider */}
          <div className="w-full xl:w-[70%] overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none hidden xl:block" />
            
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {FOOD_MENU.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="snap-center shrink-0 w-[180px] md:w-[220px] lg:w-[240px] flex flex-col rounded-xl border border-white/10 p-3 md:p-4 bg-deep-black/40 group relative overflow-hidden"
                >
                  <div className="flex flex-col h-full relative z-10">
                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center -mx-2 mt-0 mb-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[140px] md:h-[160px] lg:h-[180px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Text Container at bottom */}
                    <div className="mt-2 flex flex-col items-start text-left">
                      <h3 className="font-manga text-xl md:text-2xl text-primary-orange tracking-wider uppercase leading-none mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[10px] md:text-xs font-sans text-warm-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn Paper Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg className="block w-full h-[15px] sm:h-[20px] max-h-12 text-[#F3E6D3]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}

