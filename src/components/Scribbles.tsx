interface ScribblesProps {
  className?: string;
  color?: 'light' | 'dark';
}

export default function Scribbles({ className = "", color = 'light' }: ScribblesProps) {
  const baseColor = color === 'light' ? 'text-warm-white' : 'text-charcoal';
  const accentColor = 'text-primary-orange';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
      {/* Hand drawn Star 1 */}
      <svg className={`absolute top-[10%] left-[5%] w-12 h-12 md:w-16 md:h-16 ${baseColor} opacity-20 transform -rotate-12`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      
      {/* Hand drawn Star 2 */}
      <svg className={`absolute top-[40%] right-[8%] w-14 h-14 md:w-20 md:h-20 ${accentColor} opacity-20 transform rotate-12`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      
      {/* Hand drawn Star 3 */}
      <svg className={`absolute bottom-[25%] left-[2%] w-8 h-8 md:w-10 md:h-10 ${baseColor} opacity-10 transform rotate-45`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      {/* Scribble Lines */}
      <svg className={`absolute bottom-[10%] left-[30%] w-32 h-32 md:w-48 md:h-48 ${baseColor} opacity-10 transform -rotate-6`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 50 Q 25 20, 50 50 T 90 50" strokeLinecap="round" />
        <path d="M10 60 Q 35 30, 60 70 T 90 60" strokeLinecap="round" />
        <path d="M20 70 Q 45 40, 70 80 T 100 70" strokeLinecap="round" />
      </svg>
      
      {/* Scribble Spiral */}
      <svg className={`absolute top-[15%] right-[30%] w-16 h-16 md:w-24 md:h-24 ${accentColor} opacity-20 transform rotate-12`} viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 30 m 0 -5 a 5 5 0 1 1 0 10 a 10 10 0 1 1 0 -20 a 15 15 0 1 1 0 30 a 20 20 0 1 1 0 -40" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Crosshatch Shading */}
      <svg className={`absolute bottom-[15%] right-[5%] w-24 h-24 md:w-32 md:h-32 ${baseColor} opacity-20 transform rotate-6`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="10" y1="10" x2="90" y2="90" />
        <line x1="20" y1="10" x2="100" y2="90" />
        <line x1="30" y1="10" x2="110" y2="90" />
        <line x1="40" y1="10" x2="120" y2="90" />
        <line x1="10" y1="20" x2="90" y2="100" />
        <line x1="10" y1="30" x2="90" y2="110" />
        
        <line x1="90" y1="10" x2="10" y2="90" />
        <line x1="100" y1="20" x2="20" y2="100" />
        <line x1="110" y1="30" x2="30" y2="110" />
        <line x1="80" y1="10" x2="0" y2="90" />
        <line x1="70" y1="10" x2="-10" y2="90" />
      </svg>

      {/* Anime "Impact" lines (Manga style) */}
      <svg className={`absolute top-[50%] right-[-50px] w-40 h-40 ${baseColor} opacity-10 transform scale-150 rotate-45`} viewBox="0 0 100 100">
        <path d="M0,50 L40,50 M0,45 L42,48 M0,55 L42,52" stroke="currentColor" strokeWidth="0.5" />
        <path d="M100,50 L60,50 M100,45 L58,48 M100,55 L58,52" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Sparkles */}
       <svg className={`absolute top-[60%] left-[15%] w-8 h-8 md:w-12 md:h-12 ${baseColor} opacity-20`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 l 2 6 l 6 2 l -6 2 l -2 6 l -2 -6 l -6 -2 l 6 -2 z" strokeLinejoin="round" />
       </svg>
       
       <svg className={`absolute top-[5%] right-[40%] w-6 h-6 md:w-8 md:h-8 ${accentColor} opacity-30`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 l 2 6 l 6 2 l -6 2 l -2 6 l -2 -6 l -6 -2 l 6 -2 z" strokeLinejoin="round" />
       </svg>

       {/* Angular manga lines */}
       <svg className={`absolute top-[70%] right-[30%] w-16 h-16 md:w-20 md:h-20 ${baseColor} opacity-10 transform -rotate-12`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
         <path d="M10 90 L 30 70 L 50 85 L 70 60 L 90 80" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M15 95 L 35 75 L 55 90 L 75 65 L 95 85" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
    </div>
  );
}
