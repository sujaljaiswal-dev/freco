import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';
import Scribbles from './Scribbles';

export default function Community() {
  return (
    <section className="relative py-12 lg:py-20 bg-charcoal overflow-hidden my-4 border-t-2 border-b-2 border-black/10">
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
        <div className="flex flex-col xl:flex-row items-center xl:items-center gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="w-full xl:w-[25%] flex flex-col items-center xl:items-start text-center xl:text-left shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-manga uppercase leading-none tracking-tight mb-4 flex flex-col items-center xl:items-start">
              <span className="text-warm-white transform -rotate-1 origin-left">Community</span>
              <span className="text-primary-orange">Is Our Power</span>
            </h2>
            
            <p className="text-warm-white/80 text-sm md:text-base font-sans mt-2 mb-6 max-w-sm">
              Anime nights, gaming sessions, cosplay events and more. This is your second home.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E65100] hover:bg-[#F57C00] text-white px-6 py-3 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors mb-6 xl:mb-0"
            >
              Join the Community <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Right Cards Slider */}
          <div className="w-full xl:w-[75%] overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none hidden xl:block" />
            
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {EVENTS.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="snap-center shrink-0 w-[260px] md:w-[280px] lg:w-[300px] flex flex-col rounded-xl border border-white/10 bg-deep-black/20 group relative overflow-hidden"
                >
                  {/* Event Image */}
                  <div className="h-48 md:h-56 w-full relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-5 md:p-6 relative z-20 flex-1 justify-between bg-charcoal/40">
                    <div>
                      <h3 className="font-manga text-xl md:text-2xl lg:text-3xl text-primary-orange tracking-wider uppercase leading-tight mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="text-[11px] md:text-xs font-sans text-warm-white/70 space-y-1 bg-black/20 p-2 rounded border border-white/5 inline-block">
                        {event.day && <p className="font-bold text-warm-white">{event.day}</p>}
                        <p>{event.time}</p>
                      </div>
                    </div>
                    
                    <button className="mt-6 self-start px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-warm-white border border-primary-orange/50 rounded-full hover:bg-primary-orange hover:text-white transition-all duration-300">
                      Join Event
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* End Title Doodle Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 w-[180px] md:w-[200px] flex flex-col items-center justify-center p-4 relative"
              >
                 <h3 className="font-manga text-xl md:text-2xl text-warm-white text-center transform -rotate-3 mb-6 uppercase tracking-wider">
                   Let's Make <br/> Memories <br/> Together!
                 </h3>
                 <div className="w-16 h-16 text-warm-white/70 rotate-6 drop-shadow-md">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                     <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                     <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                     <path d="M8 2v2M12 2v2M16 2v2" />
                     <path d="M6 21.5h12" />
                   </svg>
                 </div>
                 {/* Sparkle details */}
                 <div className="absolute top-4 right-4 w-4 h-4 text-warm-white">✦</div>
                 <div className="absolute bottom-1/3 left-4 w-3 h-3 text-primary-orange">✦</div>
                 <div className="absolute top-1/2 right-2 w-2 h-2 text-warm-white/50">✦</div>
              </motion.div>

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
