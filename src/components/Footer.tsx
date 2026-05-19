import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { SITE_LOGO_IMAGE } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] pt-12 pb-6 relative overflow-hidden">
      {/* Torn Edge Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#F3E6D3]" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 95% 60%, 90% 10%, 85% 70%, 80% 20%, 75% 90%, 70% 40%, 65% 80%, 60% 30%, 55% 85%, 50% 50%, 45% 90%, 40% 40%, 35% 80%, 30% 20%, 25% 70%, 20% 10%, 15% 60%, 10% 20%, 5% 50%, 0% 0%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Logo & Luffy (Mobile + Desktop) */}
        <div className="flex flex-row items-end justify-between mb-8 lg:mb-12">
          <div className="space-y-4 max-w-[50%] md:max-w-[40%]">
            <img
              src={SITE_LOGO_IMAGE}
              alt="FreCo Logo"
              loading="lazy"
              decoding="async"
              className="h-24 md:h-32 lg:h-40 w-auto object-contain rounded-lg"
            />
            <p className="text-warm-white/60 font-sans text-sm leading-relaxed">
              A modern anime-inspired cafe serving comfort food, good coffee and great memories.
            </p>
          </div>

          <div className="relative -mb-8 md:-mb-12 lg:-mb-16 z-20">
            <img
              src="/see-you-soon.png"
              alt="Luffy See You Soon"
              loading="lazy"
              decoding="async"
              className="h-56 md:h-72 lg:h-96 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Detailed Info Card */}
        <div className="bg-[#111111] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl mb-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Quick Links */}
            <div className="md:pr-8">
              <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-warm-white mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {['Home', 'Menu', 'Gallery', 'Events', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-warm-white/60 hover:text-primary-orange transition-colors font-sans">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="md:px-8 md:border-l md:border-white/10">
              <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-warm-white mb-6">OPENING HOURS</h3>
              <div className="space-y-6 font-sans text-sm text-warm-white/60">
                <div>
                  <p className="text-warm-white/80 mb-2 font-medium">Mon - Fri</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <p className="text-warm-white/80 mb-2 font-medium">Sat - Sun</p>
                  <p>9:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="md:pl-8 md:border-l md:border-white/10">
              <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-warm-white mb-6">CONTACT US</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-sm text-warm-white/60 font-sans">
                  <Phone className="w-5 h-5 text-primary-orange shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-warm-white/60 font-sans">
                  <Mail className="w-5 h-5 text-primary-orange shrink-0" />
                  <span>hello@frecocafe.com</span>
                </li>
                <li className="flex items-start gap-4 text-sm text-warm-white/60 font-sans">
                  <MapPin className="w-5 h-5 text-primary-orange shrink-0 mt-1" />
                  <span>Shop 4-6, A-1, Saraf Choudhary Nagar, Kandivali East, Mumbai</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top inside card bottom right for mobile feel */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-[#0A0A0A] hover:scale-110 transition-all active:scale-95 shadow-xl group"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center">
          <p className="text-[11px] text-warm-white/30 uppercase tracking-[0.2em] font-sans">
            © 2024 FreCo Cafe. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
