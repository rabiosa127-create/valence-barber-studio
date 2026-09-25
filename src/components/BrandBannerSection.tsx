import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../data/barberData';

interface BrandBannerSectionProps {
  onBookClick: () => void;
}

export function BrandBannerSection({ onBookClick }: BrandBannerSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.0]);
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0b0b0b] py-24 px-6 sm:px-8"
    >
      {/* Background Image with Slow Parallax Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ scale, y }} className="w-full h-full will-change-transform">
          <img
            src={ASSETS.hero}
            alt="Blessed Hands Barber Parlor Craftsmanship"
            className="w-full h-full object-cover object-center brightness-[0.4] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-[#0b0b0b]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_30%,_#0b0b0b_90%]" />
      </div>

      {/* Center Statement Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#c29b68] font-medium">
            The Philosophy
          </p>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f3ef] font-display leading-[1.08] [text-wrap:balance]">
            Good Hair.<br />
            Good Energy.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#b8b5af] max-w-xl mx-auto font-light leading-relaxed pt-2">
            Stepping out of the chair should feel like an immediate reset. Unhurried conversation, clinical scissor work, and honest craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={onBookClick}
            className="px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-all duration-300 active:scale-[0.98] shadow-2xl cursor-pointer"
          >
            Book Your Chair
          </button>
        </motion.div>
      </div>
    </section>
  );
}
