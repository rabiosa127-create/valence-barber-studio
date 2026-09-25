import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0b0b0b]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
            : 'bg-gradient-to-b from-[#0b0b0b]/80 via-[#0b0b0b]/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] text-[#f4f3ef] hover:text-[#c29b68] transition-colors uppercase font-display"
          >
            BLESSED HANDS
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase text-[#a8a6a1]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#f4f3ef] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c29b68] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] hover:text-[#0b0b0b] transition-all duration-300 rounded-none shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              Book Appointment
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f4f3ef] hover:text-[#c29b68] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0b0b]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 pt-24 animate-in fade-in duration-200">
          <div className="space-y-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#73716b]">Navigation</p>
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-2xl font-display uppercase tracking-wider text-[#e8e6e1] hover:text-[#c29b68] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-colors"
            >
              Book Appointment
            </button>
            <div className="flex justify-between text-xs text-[#73716b] pt-2">
              <span>Chicago, IL</span>
              <span>(312) 558-0192</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
