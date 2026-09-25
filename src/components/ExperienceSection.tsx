import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ASSETS } from '../data/barberData';

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax subtle scale & translate for the dominant image
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], ['30px', '0px', '-20px']);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-24 md:py-36 bg-[#0b0b0b] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Lead Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              The Spatial Experience
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display">
              Designed For Stillness
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8c8982] max-w-md font-light leading-relaxed">
            Every square foot is calibrated to decelerate your day: warm architectural lighting, sound-dampened acoustics, and tactile honest materials.
          </p>
        </div>

        {/* Cinematic Dominant Image Frame with Parallax */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/10 bg-[#161616]">
          <motion.div
            style={{ scale, y }}
            className="w-full h-full will-change-transform"
          >
            <img
              src={ASSETS.interior}
              alt="Blessed Hands Barber Parlor Interior in Chicago"
              className="w-full h-full object-cover object-center brightness-[0.8] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Measured Scrim for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-[#0b0b0b]/40 pointer-events-none" />

          {/* Floating Editorial Card: PRECISION · TRADITION · STYLE */}
          <motion.div
            style={{ y: cardY, opacity: cardOpacity }}
            className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-sm sm:max-w-md bg-[#0f0f0f]/90 backdrop-blur-md p-6 sm:p-8 border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-[1px] bg-[#c29b68]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c29b68] font-semibold">
                Guiding Principles
              </span>
            </div>

            <div className="space-y-1 font-display text-lg sm:text-xl font-bold tracking-wide text-[#f4f3ef]">
              <p className="hover:text-[#c29b68] transition-colors">01. PRECISION</p>
              <p className="hover:text-[#c29b68] transition-colors">02. TRADITION</p>
              <p className="hover:text-[#c29b68] transition-colors">03. STYLE</p>
            </div>

            <p className="mt-4 text-xs text-[#a8a6a1] font-light leading-relaxed">
              No rushed chairs. No assembly line cutting. Only intentional barbering where millimeter margins matter.
            </p>
          </motion.div>

          {/* Top Right Live Studio Status */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0b0b0b]/80 backdrop-blur-sm border border-white/10 text-[11px] tracking-wider text-[#e8e6e1] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Studio Open · 3 Chairs In Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
