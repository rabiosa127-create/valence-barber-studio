import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { BrandBannerSection } from './components/BrandBannerSection';
import { BookingLocationSection } from './components/BookingLocationSection';
import { Footer } from './components/Footer';
import { GalleryLightbox } from './components/GalleryLightbox';
import { GalleryImage } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryImage | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBookFromHero = useCallback(() => {
    scrollToSection('location');
  }, [scrollToSection]);

  const handleServicesFromHero = useCallback(() => {
    scrollToSection('services');
  }, [scrollToSection]);

  const handleSelectServiceToBook = useCallback((serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToSection('location');
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#e8e6e1] selection:bg-[#c29b68] selection:text-[#0b0b0b] flex flex-col font-sans">
      {/* 1. Header / Navbar */}
      <Navbar onBookClick={handleBookFromHero} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onBookClick={handleBookFromHero}
          onServicesClick={handleServicesFromHero}
        />

        {/* 3. Intro / Brand Statement Section */}
        <IntroSection />

        {/* 4. Services Section */}
        <ServicesSection
          onSelectServiceToBook={handleSelectServiceToBook}
        />

        {/* 5. Featured Image / Experience Section */}
        <ExperienceSection />

        {/* 6. Gallery Section */}
        <GallerySection
          onOpenLightbox={setActiveLightboxItem}
        />

        {/* 7. Brand Statement Photographic Banner */}
        <BrandBannerSection
          onBookClick={handleBookFromHero}
        />

        {/* 8. Location & Interactive Booking Section */}
        <BookingLocationSection
          preselectedServiceId={selectedServiceId}
          onClearPreselections={() => {
            setSelectedServiceId(undefined);
          }}
        />
      </main>

      {/* 9. Minimal Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <GalleryLightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </div>
  );
}
