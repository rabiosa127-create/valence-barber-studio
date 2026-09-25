import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { BARBERS } from '../data/barberData';
import { Barber } from '../types';

interface BarbersSectionProps {
  onSelectBarberModal: (barber: Barber) => void;
  onBookBarber: (barberId: string) => void;
}

export function BarbersSection({ onSelectBarberModal, onBookBarber }: BarbersSectionProps) {
  return (
    <section id="barbers" className="py-28 md:py-36 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              The Craftsmen
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display">
              Masters of the Chair
            </h2>
            <p className="text-[#a8a6a1] text-sm sm:text-base font-light">
              Each barber at Blessed Hands Barber Parlor operates as an independent artisan with dedicated chair discipline, decades of combined tenure, and distinct signature techniques.
            </p>
          </div>

          <div className="text-xs text-[#8c8982] tracking-wider uppercase">
            Click any artisan for bio & signature portfolio
          </div>
        </div>

        {/* 3-Column Editorial Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BARBERS.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectBarberModal(barber)}
              className="group cursor-pointer flex flex-col bg-[#121212] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20"
            >
              {/* Image Frame with subtle scale & overlay transition */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Chair Tag */}
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase text-[#e8e6e1]/80 px-2 py-1 bg-[#0b0b0b]/60 backdrop-blur-sm border border-white/10">
                  {barber.chairNumber}
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={14} className="text-[#f4f3ef]" />
                </div>
              </div>

              {/* Info Block: subtle upward shift on hover */}
              <div className="p-6 sm:p-7 space-y-4 transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f3ef] font-display group-hover:text-[#c29b68] transition-colors">
                    {barber.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#a8a6a1] mt-1 font-medium">
                    {barber.title}
                  </p>
                </div>

                <p className="text-xs text-[#8c8982] line-clamp-2 font-light leading-relaxed">
                  {barber.bio}
                </p>

                {/* Specialties Unboxed Text */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-[#73716b]">
                  {barber.specialties.map((spec, sIdx) => (
                    <span key={spec}>
                      {spec}
                      {sIdx < barber.specialties.length - 1 && <span className="ml-2 text-[#c29b68]">·</span>}
                    </span>
                  ))}
                </div>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookBarber(barber.id);
                    }}
                    className="w-full py-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#f4f3ef] border border-white/15 hover:border-[#c29b68] hover:bg-[#c29b68] hover:text-[#0b0b0b] transition-all duration-300"
                  >
                    Reserve Chair
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
