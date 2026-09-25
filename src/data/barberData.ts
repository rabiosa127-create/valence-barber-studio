import { Barber, GalleryImage, ServiceItem } from '../types';

import heroImg from '../assets/images/hero_barber_craft_1790351688775.jpg';
import interiorImg from '../assets/images/barber_interior_studio_1790351702246.jpg';
import fadeCraftImg from '../assets/images/barber_craft_fade_1790351713569.jpg';
import portraitJames from '../assets/images/barber_portrait_master_1790351725271.jpg';
import portraitMarcus from '../assets/images/barber_portrait_marcus_1790351778490.jpg';
import portraitAlex from '../assets/images/barber_portrait_alex_1790351787168.jpg';
import toolsImg from '../assets/images/barber_tools_leather_1790351736455.jpg';

export const ASSETS = {
  hero: heroImg,
  interior: interiorImg,
  fadeCraft: fadeCraftImg,
  portraitJames,
  portraitMarcus,
  portraitAlex,
  tools: toolsImg,
};

export const STUDIO_INFO = {
  name: 'BLESSED HANDS',
  fullName: 'BLESSED HANDS BARBER PARLOR',
  tagline: 'Classic barbering, refined for today.',
  address: '558 W Roosevelt Rd',
  cityStateZip: 'Chicago, IL 60607, United States',
  phone: '(312) 558-0192',
  email: 'concierge@blessedhandsbarber.com',
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 7:30 PM' },
    { days: 'Saturday', time: '9:00 AM – 6:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 5:00 PM' },
  ],
  amenities: [
    'Complimentary single-malt scotch & cold brew',
    'Private client parking in rear',
    'Custom Takara Belmont leather reclining chairs',
    'Curated acoustic soundscape',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircut',
    name: 'HAIRCUT',
    category: 'cuts',
    duration: '45 MIN',
    price: 35,
    description: 'Precision scissor and clipper architecture tailored to head shape, texture, and natural growth patterns. Includes hot lather neck shave and styling finish.',
    image: ASSETS.hero,
    recommendedFor: 'Daily maintenance, signature clean silhouettes',
  },
  {
    id: 'skin-fade',
    name: 'SKIN FADE',
    category: 'cuts',
    duration: '50 MIN',
    price: 40,
    description: 'Seamless low, mid, or high taper blended down to raw skin using foil shaver and straight razor perimeter lines. Polished with lightweight matte pomade.',
    image: ASSETS.fadeCraft,
    recommendedFor: 'Sharp, ultra-clean gradient transitions',
  },
  {
    id: 'beard-trim',
    name: 'BEARD TRIM',
    category: 'beard',
    duration: '30 MIN',
    price: 25,
    description: 'Bespoke facial hair sculpting, length reduction, cheek line taper, and mustache shaping. Finished with botanical cedar beard oil and heated towel compress.',
    image: ASSETS.tools,
    recommendedFor: 'Refined beard contour and daily grooming',
  },
  {
    id: 'haircut-beard',
    name: 'HAIRCUT + BEARD',
    category: 'packages',
    duration: '75 MIN',
    price: 55,
    description: 'Our signature complete grooming session. Full precision haircut or skin fade paired with comprehensive beard architecture, hot towel, and razor finish.',
    image: ASSETS.fadeCraft,
    recommendedFor: 'Complete revitalization before key events',
  },
  {
    id: 'hot-towel-shave',
    name: 'HOT TOWEL SHAVE',
    category: 'beard',
    duration: '45 MIN',
    price: 35,
    description: 'Traditional straight razor shave with alternating steamed essential-oil towels, pre-shave emulsion, whipped warm badger lather, and soothing aftershave balm.',
    image: ASSETS.tools,
    recommendedFor: 'True timeless indulgence & total smoothness',
  },
  {
    id: 'royal-treatment',
    name: 'THE BLESSED HANDS RITUAL',
    category: 'packages',
    duration: '90 MIN',
    price: 75,
    description: 'Top-tier executive service: tailored haircut, charcoal exfoliating facial wash, straight razor shave or beard sculpt, scalp massage, and bespoke beverage.',
    image: ASSETS.interior,
    recommendedFor: 'The ultimate bespoke self-care experience',
  },
];

export const BARBERS: Barber[] = [
  {
    id: 'james-carter',
    name: 'JAMES CARTER',
    title: 'Master Barber',
    experience: '14 Years in Chicago & London',
    bio: 'Trained under heritage Savile Row barbers before founding Blessed Hands Barber Parlor. James specializes in geometric scissor architecture, natural hair movement, and traditional straight razor craftsmanship.',
    specialties: ['Scissor Geometry', 'Classic Tapers', 'Straight Razor Craft'],
    image: ASSETS.portraitJames,
    chairNumber: 'Chair 01',
    schedule: 'Tuesday – Saturday',
  },
  {
    id: 'marcus-reed',
    name: 'MARCUS REED',
    title: 'Fade Specialist',
    experience: '9 Years in New York & Miami',
    bio: 'Known for micro-precision gradient fades and immaculate edge work. Marcus blends street-culture aesthetics with runway-level finishing and tailored scalp conditioning.',
    specialties: ['Low & Drop Skin Fades', 'Beard Blending', 'Textured Crops'],
    image: ASSETS.portraitMarcus,
    chairNumber: 'Chair 02',
    schedule: 'Wednesday – Sunday',
  },
  {
    id: 'alex-morgan',
    name: 'ALEX MORGAN',
    title: 'Classic Cuts',
    experience: '11 Years in Chicago & San Francisco',
    bio: 'Master of relaxed editorial textures, pompadours, and modern gentleman silhouettes. Alex focuses on cuts that grow out seamlessly and require effortless everyday styling.',
    specialties: ['Classic Side Parts', 'Longer Scissor Cuts', 'Beard Sculpting'],
    image: ASSETS.portraitAlex,
    chairNumber: 'Chair 03',
    schedule: 'Monday – Friday',
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'CRAFT IN MOTION',
    subtitle: 'Precision scissor shear work on natural texture',
    category: 'Craftsmanship',
    image: ASSETS.hero,
    aspect: 'landscape',
    span: 'col-span-12 md:col-span-8',
  },
  {
    id: 'gal-2',
    title: 'SKIN FADE ARCHITECTURE',
    subtitle: 'Micro-taper transition with razor edge',
    category: 'Fades',
    image: ASSETS.fadeCraft,
    aspect: 'portrait',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'gal-3',
    title: 'THE INSTRUMENTS',
    subtitle: 'Hand-forged Japanese steel & botanical elixirs',
    category: 'Tools',
    image: ASSETS.tools,
    aspect: 'portrait',
    span: 'col-span-12 md:col-span-5',
  },
  {
    id: 'gal-4',
    title: 'THE STUDIO ENVIRONMENT',
    subtitle: 'Custom Belmont chairs, natural light & quiet focus',
    category: 'Space',
    image: ASSETS.interior,
    aspect: 'landscape',
    span: 'col-span-12 md:col-span-7',
  },
];

export const TIME_SLOTS = [
  '09:30 AM',
  '10:30 AM',
  '11:45 AM',
  '01:15 PM',
  '02:30 PM',
  '03:45 PM',
  '05:00 PM',
  '06:15 PM',
];
