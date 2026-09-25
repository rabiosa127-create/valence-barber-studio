import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GalleryImage } from '../types';

interface GalleryLightboxProps {
  item: GalleryImage | null;
  onClose: () => void;
}

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#000000]/95 backdrop-blur-xl">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center text-[#e8e6e1] hover:text-white hover:border-[#c29b68] transition-colors cursor-pointer"
          aria-label="Close image viewer"
        >
          <X size={18} />
        </button>

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl max-h-[90vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[75vh] overflow-hidden border border-white/10 bg-[#0e0e0e]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-auto max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full mt-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c29b68] font-semibold">
                {item.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold font-display text-[#f4f3ef]">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-[#8c8982]">
              {item.subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
