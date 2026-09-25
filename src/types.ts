export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'beard' | 'packages' | 'all';
  duration: string;
  price: number;
  description: string;
  image?: string;
  recommendedFor?: string;
}

export interface Barber {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  specialties: string[];
  image: string;
  chairNumber: string;
  schedule: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape';
  span: string;
}

export interface BookingFormData {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}
