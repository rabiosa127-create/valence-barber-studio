import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export function ServicesSection({ onSelectServiceToBook }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cuts' | 'beard' | 'packages'>('all');
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(SERVICES[0]);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cuts', label: 'Cuts & Fades' },
    { id: 'beard', label: 'Beard & Shave' },
    { id: 'packages', label: 'Full Rituals' },
  ] as const;

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              Menu of Services
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display">
              Precision Grooming
            </h2>
            <p className="text-[#a8a6a1] text-sm sm:text-base font-light">
              Every appointment includes consultation, hot lather neck cleanup, steamed towel compress, and personalized styling recommendations.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-[#141414] border border-white/10 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs tracking-wider uppercase font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#f4f3ef] text-[#0b0b0b] shadow-sm'
                    : 'text-[#8c8982] hover:text-[#f4f3ef]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Split Layout: Left Table + Right Dynamic Image Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Services Rows List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service)}
                className="group py-6 sm:py-8 transition-all duration-300 hover:pl-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 cursor-pointer"
                onClick={() => onSelectServiceToBook(service.id)}
              >
                <div className="space-y-2 max-w-lg">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-[#f4f3ef] group-hover:text-[#c29b68] transition-colors font-display">
                      {service.name}
                    </h3>
                    <span className="flex items-center gap-1 text-[11px] font-mono tabular-nums text-[#73716b] tracking-wider">
                      <Clock size={11} />
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8c8982] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0">
                  <span className="text-lg sm:text-xl font-semibold font-mono tabular-nums text-[#f4f3ef] group-hover:text-[#c29b68] transition-colors">
                    ${service.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceToBook(service.id);
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] tracking-wider uppercase text-[#a8a6a1] border border-white/10 group-hover:border-[#c29b68] group-hover:text-[#f4f3ef] transition-colors"
                  >
                    <span>Reserve</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="border border-white/10 bg-[#121212] p-4 relative overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181818]">
                <AnimatePresence mode="wait">
                  {hoveredService && (
                    <motion.img
                      key={hoveredService.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      src={hoveredService.image || SERVICES[0].image}
                      alt={hoveredService.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />
              </div>

              {hoveredService && (
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#c29b68]">Selected Experience</span>
                    <span className="text-sm font-mono tabular-nums font-semibold text-[#f4f3ef]">${hoveredService.price}</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#f4f3ef]">{hoveredService.name}</h4>
                  {hoveredService.recommendedFor && (
                    <p className="text-xs text-[#8c8982] italic">
                      Recommended: {hoveredService.recommendedFor}
                    </p>
                  )}
                  <button
                    onClick={() => onSelectServiceToBook(hoveredService.id)}
                    className="w-full mt-3 py-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-colors"
                  >
                    Select & Book Time
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
