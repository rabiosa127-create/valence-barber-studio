import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { ASSETS } from '../data/barberData';
import { GalleryImage } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryImage) => void;
}

export function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryImage[] = [
    {
      id: 'g-1',
      title: 'PRECISION SCISSOR ARCHITECTURE',
      subtitle: 'Geometric sectioning & weight balance',
      category: 'craft',
      image: ASSETS.hero,
      aspect: 'landscape',
      span: 'col-span-12 lg:col-span-7',
    },
    {
      id: 'g-2',
      title: 'LOW DROP SKIN TAPER',
      subtitle: 'Zero foil transition with crisp neckline',
      category: 'fades',
      image: ASSETS.fadeCraft,
      aspect: 'portrait',
      span: 'col-span-12 sm:col-span-6 lg:col-span-5',
    },
    {
      id: 'g-3',
      title: 'TAKARA BELMONT SANCTUARY',
      subtitle: 'Hand-stitched leather & natural morning light',
      category: 'space',
      image: ASSETS.interior,
      aspect: 'landscape',
      span: 'col-span-12 sm:col-span-6 lg:col-span-5',
    },
    {
      id: 'g-4',
      title: 'ARTISANAL CUTLERY & OILS',
      subtitle: 'Forged Japanese cobalt shears & organic beard tonics',
      category: 'tools',
      image: ASSETS.tools,
      aspect: 'landscape',
      span: 'col-span-12 lg:col-span-7',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'craft', label: 'Scissor Craft' },
    { id: 'fades', label: 'Tapers & Fades' },
    { id: 'space', label: 'Studio Interior' },
    { id: 'tools', label: 'Instruments' },
  ];

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#0b0b0b] text-[#e8e6e1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
              Visual Archive
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display">
              The Work In Focus
            </h2>
            <p className="text-[#a8a6a1] text-sm sm:text-base font-light">
              An unvarnished look at daily chairs, razor transitions, and the tactile materials shaping our Chicago parlor.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? 'border-b border-[#c29b68] text-[#f4f3ef] font-medium'
                    : 'text-[#73716b] hover:text-[#e8e6e1]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onOpenLightbox(item)}
              className={`${item.span} group relative cursor-pointer overflow-hidden bg-[#141414] border border-white/5 transition-all duration-500 hover:border-white/20`}
            >
              {/* Media Container with smooth zoom on hover */}
              <div className="w-full h-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/90 via-[#0b0b0b]/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Lightbox Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0b0b0b]/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={13} className="text-[#f4f3ef]" />
                </div>

                {/* Content Overlay pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c29b68] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#f4f3ef] font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a8a6a1] font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
