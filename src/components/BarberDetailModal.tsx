import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Award } from 'lucide-react';
import { Barber } from '../types';

interface BarberDetailModalProps {
  barber: Barber | null;
  onClose: () => void;
  onBookBarber: (barberId: string) => void;
}

export function BarberDetailModal({ barber, onClose, onBookBarber }: BarberDetailModalProps) {
  if (!barber) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0b0b0b]/70 border border-white/10 flex items-center justify-center text-[#e8e6e1] hover:text-white hover:border-white/30 transition-colors"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Barber Portrait */}
            <div className="md:col-span-5 relative aspect-[3/4] md:aspect-auto min-h-[320px] bg-[#181818]">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase text-[#e8e6e1]/80 px-2 py-1 bg-[#0b0b0b]/60 backdrop-blur-sm border border-white/10">
                {barber.chairNumber}
              </div>
            </div>

            {/* Details Content */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#c29b68] font-semibold">
                    Resident Craftsman
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#f4f3ef] mt-1">
                    {barber.name}
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#a8a6a1] mt-0.5">
                    {barber.title} · {barber.experience}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#a8a6a1] font-light leading-relaxed">
                  {barber.bio}
                </p>

                {/* Specialties */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#c29b68]">
                    <Award size={14} />
                    <span className="tracking-wider uppercase font-medium">Signature Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs text-[#e8e6e1] px-2.5 py-1 bg-[#181818] border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-center gap-2 text-xs text-[#8c8982] pt-2">
                  <Calendar size={13} className="text-[#c29b68]" />
                  <span>In Studio: {barber.schedule}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    onBookBarber(barber.id);
                    onClose();
                  }}
                  className="w-full py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-colors"
                >
                  Book with {barber.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
