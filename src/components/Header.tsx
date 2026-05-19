import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Calendar, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Menu', 'Gallery', 'Events', 'About Us', 'Contact'];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-deep-black via-deep-black/80 to-transparent pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between relative">
        {/* Left Side: Hamburger Menu (Mobile) */}
        <div className="lg:hidden flex items-center z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-warm-white p-2"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Center: Logo (Mobile) / Left: Logo (Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 z-50">
          <img 
            src="/logo.jpg" 
            alt="FreCo Logo" 
            loading="eager"
            decoding="sync"
            className="h-28 md:h-40 lg:h-48 w-auto object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 pl-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary-orange transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side: Action Button */}
        <div className="z-50 shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-primary-orange p-2.5 md:px-6 md:py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider shadow-[0_5px_15px_rgba(242,90,29,0.3)] group transition-all duration-300"
          >
            <span className="hidden md:inline">Reserve</span>
            <Calendar className="w-5 h-5 md:w-4 md:h-4 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display uppercase tracking-[0.2em] italic text-warm-white hover:text-primary-orange transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            {/* Visual Accents in Mobile Menu */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center opacity-10 pointer-events-none">
              <img src="/logo.jpg" className="w-64 grayscale invert" alt="" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
