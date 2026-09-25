import { STUDIO_INFO } from '../data/barberData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16 px-6 sm:px-8 md:px-12 text-[#8c8982]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Brand */}
        <div className="space-y-2">
          <a
            href="#"
            className="text-lg font-bold tracking-[0.25em] text-[#f4f3ef] uppercase font-display block"
          >
            {STUDIO_INFO.fullName}
          </a>
          <p className="text-xs text-[#73716b] font-light">
            Modern barbering & bespoke grooming · Chicago, Illinois
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-8 text-xs tracking-widest uppercase text-[#a8a6a1]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f4f3ef] transition-colors"
          >
            Instagram
          </a>
          <a
            href={`mailto:${STUDIO_INFO.email}`}
            className="hover:text-[#f4f3ef] transition-colors"
          >
            Contact
          </a>
          <a
            href="#location"
            className="hover:text-[#f4f3ef] transition-colors"
          >
            Location
          </a>
          <a
            href="#services"
            className="hover:text-[#f4f3ef] transition-colors"
          >
            Services
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#5e5c57] font-mono">
          © {currentYear} {STUDIO_INFO.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
