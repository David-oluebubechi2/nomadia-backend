import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const destinations = [
  {
    slug: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    category: 'Adventure',
    description:
      'Discover dramatic coastlines, iconic mountains, beautiful beaches, and vibrant city life.',
    image:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1400&q=85',
    rating: 4.9,
    travelers: '2.4k',
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    category: 'Culture',
    description:
      'Wander through colorful souks, historic palaces, peaceful gardens, and lively medinas.',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=85',
    rating: 4.8,
    travelers: '1.8k',
  },
  {
    slug: 'zanzibar',
    name: 'Zanzibar',
    country: 'Tanzania',
    region: 'Africa',
    category: 'Beach',
    description:
      'Relax on white sandy beaches, explore the historic Stone Town, and dive into turquoise waters.',
    image:
      'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1400&q=85',
    rating: 4.7,
    travelers: '1.5k',
  },
  {
    slug: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    region: 'Africa',
    category: 'Culture',
    description:
      'Explore ancient pyramids, bustling bazaars, and the mighty Nile River in this timeless city.',
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1400&q=85',
    rating: 4.6,
    travelers: '2.1k',
  },
  {
    slug: 'victoria-falls',
    name: 'Victoria Falls',
    country: 'Zimbabwe',
    region: 'Africa',
    category: 'Nature',
    description:
      'Witness one of the Seven Natural Wonders of the World in breathtaking fashion.',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=85',
    rating: 4.9,
    travelers: '1.2k',
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    category: 'Beach',
    description:
      'Iconic blue-domed churches, stunning sunsets, volcanic beaches, and romantic cliffside villages.',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
    rating: 4.9,
    travelers: '3.1k',
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    category: 'Culture',
    description:
      'Experience ancient temples, traditional tea ceremonies, and serene bamboo forests.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
    rating: 4.8,
    travelers: '2.7k',
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    category: 'Nature',
    description:
      'Lush rice terraces, sacred temples, vibrant coral reefs, and world-class surfing.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85',
    rating: 4.8,
    travelers: '3.5k',
  },
  {
    slug: 'new-york',
    name: 'New York',
    country: 'United States',
    region: 'North America',
    category: 'Adventure',
    description:
      'The city that never sleeps — iconic skyline, Broadway shows, world-class dining, and endless energy.',
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=85',
    rating: 4.7,
    travelers: '4.2k',
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    country: 'Argentina',
    region: 'South America',
    category: 'Nature',
    description:
      'Endless glaciers, jagged peaks, pristine lakes, and some of the best trekking on Earth.',
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1400&q=85',
    rating: 4.9,
    travelers: '1.1k',
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Asia',
    category: 'Beach',
    description:
      'Crystal-clear lagoons, private overwater villas, and pristine coral reefs — pure paradise.',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a3934d?auto=format&fit=crop&w=1400&q=85',
    rating: 4.9,
    travelers: '2.0k',
  },
  {
    slug: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    category: 'Culture',
    description:
      'Dramatic cliffs, colorful villages, lemon groves, and some of the best coastal scenery in the world.',
    image:
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=1400&q=85',
    rating: 4.8,
    travelers: '2.6k',
  },
  {
    slug: 'banff',
    name: 'Banff',
    country: 'Canada',
    region: 'North America',
    category: 'Adventure',
    description:
      'Turquoise glacial lakes, towering Rocky Mountain peaks, and world-class outdoor adventure.',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85',
    rating: 4.8,
    travelers: '1.9k',
  },
  {
    slug: 'taj-mahal',
    name: 'Agra',
    country: 'India',
    region: 'Asia',
    category: 'Culture',
    description:
      'Home to the iconic Taj Mahal — a timeless symbol of love and one of the Seven Wonders of the World.',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85',
    rating: 4.7,
    travelers: '3.8k',
  },
];

const hotels = [
  {
    name: 'The Twelve Apostles Hotel',
    location: 'Cape Town',
    country: 'South Africa',
    description:
      'A luxurious coastal retreat overlooking the Atlantic Ocean and the Twelve Apostles mountain range.',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85',
    price: 320,
    rating: 4.9,
    reviews: 428,
    category: 'Luxury',
    amenities: ['Ocean View', 'Pool', 'Spa'],
  },
  {
    name: 'Royal Mansour Marrakech',
    location: 'Marrakech',
    country: 'Morocco',
    description:
      'An elegant Moroccan retreat combining traditional architecture, private courtyards, and exceptional hospitality.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
    price: 410,
    rating: 4.9,
    reviews: 367,
    category: 'Luxury',
    amenities: ['Spa', 'Restaurant', 'Pool'],
  },
  {
    name: 'Zuri Zanzibar',
    location: 'Zanzibar',
    country: 'Tanzania',
    description:
      'A boutique beach resort offering pristine white sand beaches, lush gardens, and an unforgettable island experience.',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85',
    price: 250,
    rating: 4.8,
    reviews: 312,
    category: 'Boutique',
    amenities: ['Beach Access', 'Restaurant', 'Spa'],
  },
  {
    name: 'Marriott Mena House',
    location: 'Cairo',
    country: 'Egypt',
    description:
      'A historic hotel with stunning views of the Great Pyramids of Giza, offering world-class service and luxury.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85',
    price: 280,
    rating: 4.7,
    reviews: 521,
    category: 'Luxury',
    amenities: ['Pyramid View', 'Pool', 'Gym'],
  },
  {
    name: 'Canopy by Hilton Santorini',
    location: 'Santorini',
    country: 'Greece',
    description:
      'A stylish retreat perched on the caldera rim with breathtaking sunset views and infinity pool.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=85',
    price: 380,
    rating: 4.8,
    reviews: 445,
    category: 'Luxury',
    amenities: ['Caldera View', 'Pool', 'Restaurant'],
  },
  {
    name: 'Hoshinoya Kyoto',
    location: 'Kyoto',
    country: 'Japan',
    description:
      'A tranquil riverside ryokan blending traditional Japanese elegance with modern luxury and serene garden views.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85',
    price: 450,
    rating: 4.9,
    reviews: 289,
    category: 'Luxury',
    amenities: ['Garden View', 'Spa', 'Restaurant'],
  },
  {
    name: 'COMO Uma Ubud',
    location: 'Bali',
    country: 'Indonesia',
    description:
      'A wellness-focused retreat nestled in lush rice paddies offering yoga, spa, and authentic Balinese experiences.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85',
    price: 220,
    rating: 4.8,
    reviews: 376,
    category: 'Boutique',
    amenities: ['Rice Paddy View', 'Spa', 'Yoga'],
  },
  {
    name: 'The Plaza',
    location: 'New York',
    country: 'United States',
    description:
      'An iconic landmark overlooking Central Park, offering timeless elegance and unmatched New York City luxury.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
    price: 520,
    rating: 4.8,
    reviews: 1240,
    category: 'Luxury',
    amenities: ['Central Park View', 'Spa', 'Restaurant'],
  },
  {
    name: 'Explora Patagonia',
    location: 'Torres del Paine',
    country: 'Chile',
    description:
      'An all-inclusive lodge at the edge of the world with stunning views of the Paine massif and glacier lakes.',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85',
    price: 600,
    rating: 4.9,
    reviews: 198,
    category: 'Luxury',
    amenities: ['Mountain View', 'All Inclusive', 'Guided Treks'],
  },
  {
    name: 'Soneva Fushi',
    location: 'Maldives',
    country: 'Maldives',
    description:
      'A barefoot luxury resort on a private island with overwater villas, coral reefs, and unmatched tranquility.',
    image:
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=85',
    price: 800,
    rating: 4.9,
    reviews: 412,
    category: 'Luxury',
    amenities: ['Overwater Villa', 'Diving', 'Spa'],
  },
];

const tours = [
  {
    title: 'Santorini Sunset Sailing',
    location: 'Santorini, Greece',
    country: 'Greece',
    category: 'Water',
    description:
      'Cruise along the Aegean coast and watch the famous Santorini sunset from the sea.',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
    price: 180,
    rating: 4.9,
    reviews: 328,
    duration: '5 hours',
  },
  {
    title: 'Kyoto Cultural Walking Tour',
    location: 'Kyoto, Japan',
    country: 'Japan',
    category: 'Culture',
    description:
      'Explore ancient temples, traditional tea houses, and beautiful zen gardens in Kyoto.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
    price: 95,
    rating: 4.8,
    reviews: 256,
    duration: '6 hours',
  },
  {
    title: 'Marrakech Medina & Souks',
    location: 'Marrakech, Morocco',
    country: 'Morocco',
    category: 'Culture',
    description:
      'Navigate the winding alleys of the medina, shop for spices, carpets, and crafts.',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=85',
    price: 65,
    rating: 4.7,
    reviews: 189,
    duration: '4 hours',
  },
  {
    title: 'Banff Gondola & Lake Louise',
    location: 'Banff, Canada',
    country: 'Canada',
    category: 'Nature',
    description:
      'Soar above the Rockies on the Banff Gondola and visit the stunning turquoise Lake Louise.',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85',
    price: 140,
    rating: 4.9,
    reviews: 412,
    duration: 'Full day',
  },
  {
    title: 'Bali Rice Terrace Trek',
    location: 'Ubud, Bali',
    country: 'Indonesia',
    category: 'Adventure',
    description:
      'Trek through the iconic Tegallalang Rice Terraces and learn about traditional Balinese irrigation.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
    price: 55,
    rating: 4.8,
    reviews: 345,
    duration: '4 hours',
  },
  {
    title: 'New York City Food Tour',
    location: 'New York, USA',
    country: 'United States',
    category: 'Food',
    description:
      'Taste your way through NYC — from pizza in Brooklyn to dim sum in Chinatown and everything in between.',
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=85',
    price: 120,
    rating: 4.7,
    reviews: 278,
    duration: '5 hours',
  },
  {
    title: 'Maldives Snorkeling Adventure',
    location: 'Maldives',
    country: 'Maldives',
    category: 'Water',
    description:
      'Dive into crystal-clear waters to explore vibrant coral reefs and swim alongside manta rays.',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a3934d?auto=format&fit=crop&w=1200&q=85',
    price: 160,
    rating: 4.9,
    reviews: 198,
    duration: '3 hours',
  },
  {
    title: 'Amalfi Coast Boat Tour',
    location: 'Amalfi Coast, Italy',
    country: 'Italy',
    category: 'Water',
    description:
      'Sail along the stunning Amalfi coastline, visit hidden coves, and explore colorful seaside villages.',
    image:
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=1200&q=85',
    price: 195,
    rating: 4.8,
    reviews: 367,
    duration: '7 hours',
  },
  {
    title: 'Victoria Falls Helicopter Tour',
    location: 'Victoria Falls, Zimbabwe',
    country: 'Zimbabwe',
    category: 'Adventure',
    description:
      'Get a bird\'s-eye view of the magnificent Victoria Falls from a helicopter flight over the Zambezi.',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85',
    price: 250,
    rating: 4.9,
    reviews: 156,
    duration: '15 minutes',
  },
  {
    title: 'Patagonia W-Trek',
    location: 'Torres del Paine, Chile',
    country: 'Chile',
    category: 'Nature',
    description:
      'Multi-day trek through the world-famous W Circuit with glaciers, lakes, and granite towers.',
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=85',
    price: 850,
    rating: 4.9,
    reviews: 134,
    duration: '5 days',
  },
  {
    title: 'Cape Town Table Mountain Hike',
    location: 'Cape Town, South Africa',
    country: 'South Africa',
    category: 'Adventure',
    description:
      'Hike to the summit of Table Mountain and take in panoramic views of the city, ocean, and coastline.',
    image:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85',
    price: 75,
    rating: 4.8,
    reviews: 489,
    duration: '5 hours',
  },
  {
    title: 'Zanzibar Spice Plantation Tour',
    location: 'Zanzibar, Tanzania',
    country: 'Tanzania',
    category: 'Food',
    description:
      'Visit a working spice plantation, taste fresh tropical fruits, and learn about Zanzibar\'s spice trade history.',
    image:
      'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1200&q=85',
    price: 45,
    rating: 4.7,
    reviews: 212,
    duration: '3 hours',
  },
];

async function main() {
  console.log('Seeding database...');

  // Upsert destinations by slug
  for (const d of destinations) {
    await prisma.destination.upsert({
      where: { slug: d.slug },
      create: d,
      update: d,
    });
  }
  console.log(`  Seeded ${destinations.length} destinations`);

  // Upsert hotels by name (first one with same name wins)
  for (const h of hotels) {
    const existing = await prisma.hotel.findFirst({ where: { name: h.name } });
    if (existing) {
      await prisma.hotel.update({ where: { id: existing.id }, data: h });
    } else {
      await prisma.hotel.create({ data: h });
    }
  }
  console.log(`  Seeded ${hotels.length} hotels`);

  // Upsert tours by title
  for (const t of tours) {
    const existing = await prisma.tour.findFirst({ where: { title: t.title } });
    if (existing) {
      await prisma.tour.update({ where: { id: existing.id }, data: t });
    } else {
      await prisma.tour.create({ data: t });
    }
  }
  console.log(`  Seeded ${tours.length} tours`);

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });