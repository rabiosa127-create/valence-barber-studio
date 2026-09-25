import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { SERVICES, TIME_SLOTS, STUDIO_INFO } from '../data/barberData';
import { BookingFormData } from '../types';

interface BookingLocationSectionProps {
  preselectedServiceId?: string;
  onClearPreselections?: () => void;
}

export function BookingLocationSection({
  preselectedServiceId,
  onClearPreselections,
}: BookingLocationSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preselectedServiceId || SERVICES[0].id,
    barberId: '',
    date: '2026-09-26',
    time: TIME_SLOTS[1],
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState<BookingFormData | null>(null);

  // Sync external pre-selections
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  // Generate the next 5 days for easy date pills
  const availableDates = [
    { label: 'Today', date: '2026-09-25' },
    { label: 'Tomorrow', date: '2026-09-26' },
    { label: 'Sat, Sep 27', date: '2026-09-27' },
    { label: 'Sun, Sep 28', date: '2026-09-28' },
    { label: 'Tue, Sep 30', date: '2026-09-30' },
  ];

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number to reserve your chair.');
      return;
    }
    setConfirmationData({ ...formData });
    setBookingConfirmed(true);
    if (onClearPreselections) onClearPreselections();
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    setFormData({
      serviceId: SERVICES[0].id,
      barberId: '',
      date: '2026-09-26',
      time: TIME_SLOTS[1],
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
  };

  return (
    <section id="location" className="py-28 md:py-36 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Visit Us & Studio Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
                Visit The Parlor
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef] font-display">
                The Roosevelt Chair
              </h2>
              <p className="text-[#a8a6a1] text-sm sm:text-base font-light leading-relaxed">
                Located at 558 W Roosevelt Rd in Chicago, our parlor balances minimalist sanctuary aesthetics with world-class grooming craft.
              </p>
            </div>

            {/* Address & Hours */}
            <div className="space-y-6 border-t border-b border-white/10 py-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#c29b68] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-[#73716b]">Location</h4>
                  <p className="text-base text-[#f4f3ef] font-medium">{STUDIO_INFO.address}</p>
                  <p className="text-sm text-[#8c8982]">{STUDIO_INFO.cityStateZip}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-[#c29b68] shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-[#73716b]">Hours of Operation</h4>
                  <div className="text-sm space-y-1 text-[#e8e6e1]">
                    {STUDIO_INFO.hours.map((h) => (
                      <div key={h.days} className="flex items-center gap-6">
                        <span className="text-[#8c8982] w-32">{h.days}</span>
                        <span className="font-mono tabular-nums text-xs">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#c29b68] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-xs tracking-[0.2em] uppercase text-[#73716b]">Direct Line & Concierge</h4>
                  <p className="text-sm text-[#f4f3ef] font-mono tabular-nums">{STUDIO_INFO.phone}</p>
                  <p className="text-xs text-[#8c8982]">{STUDIO_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Studio Amenities */}
            <div className="space-y-3">
              <h4 className="text-xs tracking-[0.25em] uppercase text-[#73716b]">Client Amenities</h4>
              <ul className="space-y-2 text-xs text-[#a8a6a1]">
                {STUDIO_INFO.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2">
                    <span className="w-1.5 h-[1px] bg-[#c29b68]" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Booking Interface */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-6 sm:p-10 relative">
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-[0.3em] uppercase text-[#c29b68] font-medium">
                  Chair Reservation
                </p>
                <span className="text-[11px] tracking-wider uppercase text-[#73716b]">
                  Instant Confirmation
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f3ef] font-display">
                Book an Appointment
              </h3>
            </div>

            {bookingConfirmed && confirmationData ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 py-6"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={24} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display text-[#f4f3ef]">
                    Chair Reserved for {confirmationData.name}
                  </h4>
                  <p className="text-xs text-[#a8a6a1] leading-relaxed">
                    A confirmation SMS has been prepared for <span className="font-mono text-white">{confirmationData.phone}</span>. Please arrive 5 minutes prior to unwind with a drink.
                  </p>
                </div>

                <div className="p-4 bg-[#181818] border border-white/5 space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#8c8982]">Selected Service:</span>
                    <span className="font-medium text-[#f4f3ef]">{selectedService.name} (${selectedService.price})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-[#8c8982]">Date & Time:</span>
                    <span className="font-medium text-[#f4f3ef] font-mono">{confirmationData.date} at {confirmationData.time}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#8c8982]">Duration:</span>
                    <span className="font-medium text-[#c29b68]">{selectedService.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-colors"
                  >
                    Make Another Booking
                  </button>
                  <button
                    onClick={() => alert(`Calendar event created for ${confirmationData.date} at ${confirmationData.time}`)}
                    className="px-5 py-3 text-xs tracking-[0.2em] uppercase font-semibold text-[#f4f3ef] border border-white/20 hover:border-white/50 transition-colors"
                  >
                    Add to Calendar
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-[#8c8982] block">
                    1. Select Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICES.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setFormData({ ...formData, serviceId: s.id })}
                        className={`p-3 text-left border transition-all text-xs cursor-pointer flex justify-between items-center ${
                          formData.serviceId === s.id
                            ? 'border-[#c29b68] bg-[#c29b68]/10 text-[#f4f3ef]'
                            : 'border-white/10 bg-[#161616] text-[#a8a6a1] hover:border-white/30'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{s.name}</p>
                          <p className="text-[10px] text-[#73716b]">{s.duration}</p>
                        </div>
                        <span className="font-mono tabular-nums text-sm font-medium">${s.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Date Selection */}
                <div className="space-y-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-[#8c8982] block">
                    2. Preferred Date
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableDates.map((d) => (
                      <button
                        type="button"
                        key={d.date}
                        onClick={() => setFormData({ ...formData, date: d.date })}
                        className={`px-3 py-2 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                          formData.date === d.date
                            ? 'border-[#c29b68] bg-[#c29b68] text-[#0b0b0b] font-semibold'
                            : 'border-white/10 bg-[#161616] text-[#8c8982] hover:border-white/30'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Time Slot Selection */}
                <div className="space-y-2">
                  <label className="text-xs tracking-[0.2em] uppercase text-[#8c8982] block">
                    3. Available Time
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, time: t })}
                        className={`py-2 text-xs font-mono tabular-nums text-center border transition-all cursor-pointer ${
                          formData.time === t
                            ? 'border-[#c29b68] bg-[#f4f3ef] text-[#0b0b0b] font-bold'
                            : 'border-white/10 bg-[#161616] text-[#8c8982] hover:border-white/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Guest Contact Details */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] tracking-wider uppercase text-[#73716b] block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Julian Vance"
                        className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#f4f3ef] placeholder-[#555] focus:outline-none focus:border-[#c29b68]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] tracking-wider uppercase text-[#73716b] block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(310) 555-0199"
                        className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#f4f3ef] placeholder-[#555] focus:outline-none focus:border-[#c29b68]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] tracking-wider uppercase text-[#73716b] block mb-1">
                      Special Notes / Hair Texture (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Skin sensitivity, low taper preference"
                      className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#f4f3ef] placeholder-[#555] focus:outline-none focus:border-[#c29b68]"
                    />
                  </div>
                </div>

                {/* Pricing Summary & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <p className="text-[11px] uppercase tracking-wider text-[#73716b]">Total Due at Studio</p>
                    <p className="text-xl font-bold font-mono text-[#f4f3ef]">${selectedService.price}.00</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0b0b0b] bg-[#f4f3ef] hover:bg-[#c29b68] transition-colors cursor-pointer"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
