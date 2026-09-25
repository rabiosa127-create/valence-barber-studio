import { motion } from 'motion/react';
import { ASSETS } from '../data/barberData';

export function IntroSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0b0b0b] text-[#e8e6e1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Subheader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              Crafted With Intention
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display leading-[1.15] [text-wrap:balance]">
              Classic barbering, refined for today.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-[#a8a6a1] text-base sm:text-lg leading-relaxed font-light"
          >
            <p>
              At Blessed Hands Barber Parlor, we stripped away the noise of high-volume franchise shops to return to the essence of the craft: time, undivided attention, and relentless precision. Every haircut begins with an architectural evaluation of cranial geometry and natural growth flow.
            </p>
            <p>
              We merge the disciplined heritage of Savile Row straight razor etiquette with progressive contemporary scissor techniques. The result is a cut that doesn't just look pristine leaving the chair, but evolves effortlessly as it grows.
            </p>

            {/* Unboxed Metadata Highlights with subtle typographic separators */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-y-3 gap-x-6 text-xs text-[#8c8982] tracking-wider uppercase">
              <span>Bespoke Consultation</span>
              <span aria-hidden="true" className="text-[#c29b68]">·</span>
              <span>Takara Belmont Recliners</span>
              <span aria-hidden="true" className="text-[#c29b68]">·</span>
              <span>Steamed Cedar Towels</span>
              <span aria-hidden="true" className="text-[#c29b68]">·</span>
              <span>Complimentary Bar</span>
            </div>
          </motion.div>
        </div>

        {/* Editorial Overlapping Image & Quote Card */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 relative group overflow-hidden rounded-sm"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#161616]">
              <img
                src={ASSETS.fadeCraft}
                alt="Detail of precision fade scissor sculpting"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-xs tracking-[0.2em] uppercase text-[#e8e6e1]/80">
              Session 04 · Chicago Parlor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 md:-ml-8 z-10 bg-[#121212] p-8 md:p-12 border border-white/5 shadow-2xl relative"
          >
            <div className="w-8 h-[1px] bg-[#c29b68] mb-6" />
            <blockquote className="text-xl sm:text-2xl font-light text-[#f4f3ef] font-display leading-snug [text-wrap:balance]">
              "A great haircut shouldn't announce itself with loud gimmicks. It commands the room in silence."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
