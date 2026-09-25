import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/barberData';

interface HeroSectionProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export function HeroSection({ onBookClick, onServicesClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax subtle scale & translate for the hero photo
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], ['0px', '40px']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-[#0b0b0b] pt-24 pb-16 md:pb-24 px-6 sm:px-8 md:px-12"
    >
      {/* Background Image Container with Parallax Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="w-full h-full will-change-transform"
        >
          <img
            src={ASSETS.hero}
            alt="Barber styling hair in modern studio"
            className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Cinematic Scrims: Dark gradient at bottom & top for legibility without color muddying */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-[#0b0b0b]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(11,11,11,0.6)_100%]" />
      </div>

      {/* Content Overlay */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16"
      >
        <div className="max-w-3xl space-y-6">
          {/* Subtle uppercase kicker */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c29b68]" />
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              The Modern Barber Shop
            </p>
          </div>

          {/* Large restrained headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f3ef] font-display leading-[1.08] [text-wrap:balance]">
            Sharp cuts.<br />
            Quiet confidence.
          </h1>

          {/* Short supporting sentence */}
          <p className="text-base sm:text-lg text-[#b8b5af] max-w-xl font-light leading-relaxed">
            Precision scissor architecture, tailored skin fades, and refined grooming in an architecturally quiet Chicago parlor.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onBookClick}
              className="px-7 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={onServicesClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#f4f3ef] border border-white/20 hover:border-white/60 hover:text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span>View Services</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Right Metadata Badge & Scroll cue */}
        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-6 text-xs text-[#8c8982] border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <div className="space-y-1 md:text-right">
            <p className="tracking-widest uppercase text-[#e8e6e1] font-medium">558 W Roosevelt Rd · Chicago</p>
            <p className="tracking-wider">Tuesday – Sunday / Walk-ins & Reserved</p>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#73716b] hover:text-[#c29b68] transition-colors"
          >
            <span>Scroll to Discover</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c29b68]/40 transition-colors">
              <ArrowDown size={12} className="animate-bounce" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
