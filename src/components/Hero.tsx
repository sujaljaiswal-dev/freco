import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { HERO_IMAGE, HERO_BG_IMAGE, JAPANESE_BADGE_IMAGE } from '../constants';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { x: -100, opacity: 0, filter: 'blur(8px)' },
    visible: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-[68vh] flex items-end pt-36 pb-10 lg:pt-24 lg:pb-14 overflow-hidden bg-deep-black">
      {/* 01. START - BLACK SCREEN & OVERLAY */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-0 z-[100] bg-black pointer-events-none"
      />

      {/* SUBTLE ORANGE EMBERS */}
      <div className="absolute inset-0 z-[60] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: '110vh',
              x: Math.random() * 100 + 'vw',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: '-10vh',
              x: (Math.random() * 100 - 50) + 'px'
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-primary-orange rounded-full blur-[1px] will-change-transform"
          />
        ))}
      </div>

      {/* 02. BACKGROUND FADE IN & SUBTLE ZOOM */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/35 to-transparent z-10"
        />
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          src={HERO_BG_IMAGE}
          alt="Cafe Interior"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover filter brightness-[0.8]"
        />
        {/* Soft Vignette & Cinematic Grain Overlay */}
        <div className="absolute inset-0 z-15 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex flex-row items-end justify-between mt-16 lg:mt-0 lg:pt-8">
        <div className="space-y-6 md:space-y-8 mb-12 lg:mb-12 w-[60%] sm:w-[55%] md:w-1/2 shrink-0 z-30 pb-4 md:pb-0">
          {/* 03. BADGE SLIDES IN (LEFT) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="hidden sm:block absolute -left-8 md:-left-12 lg:-left-24 top-0 lg:top-8 w-20 md:w-28 lg:w-36 z-20"
          >
            <img
              src={JAPANESE_BADGE_IMAGE}
              alt="Japanese Badge"
              loading="eager"
              decoding="sync"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* 04-07. TEXT ANIMATION - LINE BY LINE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 1.5,
                }
              }
            }}
            className="space-y-0"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-display leading-[0.75] tracking-tighter uppercase italic flex flex-col items-start md:ml-20 lg:ml-32">
              <motion.span variants={lineVariants} className="z-10 text-2xl sm:text-3xl md:text-5xl lg:text-7xl">Where</motion.span>
              <motion.span
                variants={lineVariants}
                className="text-6xl sm:text-7xl md:text-9xl lg:text-[9.5rem] text-primary-orange text-glow-orange -rotate-1 origin-left -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-5 z-20 relative"
              >
                Anime
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              </motion.span>
              <motion.span variants={lineVariants} className="-mt-0.5 sm:-mt-1 md:-mt-2 lg:-mt-3 z-30 text-xl sm:text-2xl md:text-4xl lg:text-5xl">Meets</motion.span>
              <motion.span
                variants={lineVariants}
                className="text-6xl sm:text-7xl md:text-9xl lg:text-[9.5rem] text-primary-orange text-glow-orange rotate-1 origin-left -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-5 z-40 relative"
              >
                Coffee
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
                />
              </motion.span>
            </h2>
          </motion.div>

          {/* 11. BUTTONS FADE & RISE IN */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 4.0,
                }
              }
            }}
            className="flex flex-row gap-3 md:gap-4 md:ml-20 lg:ml-32 items-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 bg-primary-orange text-deep-black font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 sm:gap-3 group text-xs sm:text-sm lg:text-base whitespace-nowrap shadow-[0_10px_20px_rgba(242,90,29,0.3)] hover:shadow-[0_15px_30px_rgba(242,90,29,0.5)] transition-all"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 border border-warm-white/20 hover:border-primary-orange/50 text-warm-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-sm transition-colors group text-xs sm:text-sm lg:text-base whitespace-nowrap"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-warm-white/10 flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current ml-0.5" />
              </div>
              Watch Video
            </motion.button>
          </motion.div>
        </div>

        {/* 08-09. LUFFY ENTRANCE + STEAM START */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 120, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 2.4 }}
          className="relative w-[50%] md:w-1/2 h-[45vh] lg:h-[60vh] flex items-end justify-center -ml-4 sm:-ml-8 md:ml-0 -mr-12 sm:mr-0 md:translate-x-24 lg:translate-x-0 lg:-mt-6"
        >
          {/* Subtle Idle floating motion for Luffy */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-end justify-center w-full h-full"
          >
            <div className="absolute top-1/4 -inset-10 bg-primary-orange/10 blur-[50px] lg:blur-[100px] rounded-full" />
            <img
              src={HERO_IMAGE}
              alt="Luffy Cafe Illustration"
              loading="eager"
              decoding="sync"
              className="relative z-10 w-[250%] sm:w-[200%] lg:w-[230%] h-auto max-h-[85vh] object-contain object-bottom drop-shadow-[0_0_50px_rgba(242,90,29,0.3)] origin-bottom -mb-2 max-w-none lg:translate-y-6"
            />

            {/* 10. POSTER POP IN (GOOD FOOD...) */}
            <motion.div
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 3.2 }}
              className="absolute -top-20 sm:-top-8 lg:-top-12 right-[40vw] sm:right-0 lg:-right-8 w-36 sm:w-32 md:w-40 lg:w-48 z-20 pointer-events-none"
            >
              <img
                src="/poster-img.png"
                alt="Good Food Good Mood Poster"
                loading="eager"
                decoding="sync"
                className="w-full h-auto object-contain drop-shadow-[5px_10px_20px_rgba(0,0,0,0.6)]"
              />
              {/* Manga Impact effect around poster */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.5, delay: 4.5 }}
                className="absolute inset-0 border-4 border-white/30 rounded-lg scale-150 blur-sm pointer-events-none"
              />
            </motion.div>

            {/* CINEMATIC COFFEE STEAM */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 3.8, duration: 1 }}
              className="steam-container absolute top-[-10%] left-[-30%] sm:top-[5%] sm:left-[5%] md:top-[0%] md:left-[10%] lg:top-[-5%] lg:left-[15%]"
            >
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 20 : -20), 0],
                    scale: [1, 1.5, 2],
                    filter: ['blur(4px)', 'blur(12px)']
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-full blur-xl"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Sketches/Doodles Decor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary-orange rotate-12" />
        <div className="absolute bottom-1/4 right-20 w-48 h-48 border-2 border-primary-orange -rotate-6 rounded-full" />
      </motion.div>

      <style>{`
        .text-glow-orange {
          text-shadow: 0 0 20px rgba(242, 90, 29, 0.4), 0 0 40px rgba(242, 90, 29, 0.2);
        }
      `}</style>
    </section>
  );
}
