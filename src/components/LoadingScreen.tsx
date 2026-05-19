import { motion } from 'motion/react';
import { SITE_LOGO_IMAGE } from '../constants';

interface LoadingScreenProps {
  progress: number;
  key?: string;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      exit={{ x: '100%' }}
      transition={{
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1], // circOut for a very smooth but energetic finish
      }}
      className="fixed inset-0 z-[1000] bg-deep-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 text-center px-4">
        {/* Logo/Icon Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={SITE_LOGO_IMAGE}
            alt="FreCo Logo"
            className="h-32 md:h-40 w-auto object-contain rounded-xl shadow-2xl"
          />
          {/* Pulsing ring around logo */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 border border-primary-orange/30 rounded-2xl pointer-events-none"
          />
        </motion.div>

        {/* Loading Text */}
        <div className="space-y-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display text-2xl md:text-3xl uppercase tracking-[0.3em] italic text-warm-white"
          >
            Brewing <span className="text-primary-orange">Greatness</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] font-sans text-warm-white/60"
          >
            Initializing Cafe Memories
          </motion.p>
        </div>

        {/* Progress Container */}
        <div className="w-64 md:w-80 space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary-orange">EST. 2024</span>
            <span className="text-sm font-display italic text-warm-white">{Math.round(progress)}%</span>
          </div>

          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-primary-orange shadow-[0_0_15px_rgba(242,90,29,0.8)] relative"
            >
              {/* Shine effect on bar */}
              <motion.div
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Embers for Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: '110vh',
              x: Math.random() * 100 + 'vw',
              scale: Math.random() * 0.5 + 0.3
            }}
            animate={{
              opacity: [0, 1, 0],
              y: '-10vh',
              x: (Math.random() * 60 - 30) + 'px'
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-primary-orange rounded-full blur-[0.5px]"
          />
        ))}
      </div>
    </motion.div>
  );
}
