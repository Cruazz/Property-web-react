import type { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'azure-lagoon-villas',
    title: 'Azure Lagoon Villas',
    description: 'An ultra-luxurious eco-resort nestled on a secluded peninsula, offering private infinity pools, overwater bungalows, and breathtaking sunsets.',
    location: 'Maldives, Indian Ocean',
    status: 'completed',
    completionDate: '2025-11',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207def5?w=1200&auto=format&fit=crop&q=80'
    ],
    amenities: ['Overwater Suites', 'Private Infinity Pools', 'Underwater Dining', 'Helipad Access', '24/7 Butler Service'],
    timeline: [
      {
        phase: 'Concept & Architecture',
        date: 'Jan 2023',
        description: 'Collaborating with award-winning eco-architects to map the villas onto the peninsula without disrupting existing coral structures.'
      },
      {
        phase: 'Structural Engineering',
        date: 'Aug 2023',
        description: 'Advanced, environmentally sound piling to ensure absolute stability over moving ocean currents.'
      },
      {
        phase: 'Interior & Custom Design',
        date: 'Jun 2024',
        description: 'Custom, local teakwood furniture and minimalist, luxurious fabrics selected for high durability.'
      },
      {
        phase: 'Inaugural Launch',
        date: 'Nov 2025',
        description: 'Fully opened to international guests with top-tier premium ratings.'
      }
    ]
  },
  {
    id: 'proj-2',
    slug: 'serene-peak-lodge',
    title: 'Serene Peak Lodge',
    description: 'A masterpiece in Scandinavian-inspired winter hospitality. This mountain escape features cozy timber architecture, roaring fire pits, and panoramic mountain views.',
    location: 'Zermatt, Switzerland',
    status: 'ongoing',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&auto=format&fit=crop&q=80'
    ],
    amenities: ['Private Spa & Saunas', 'Direct Ski-in/Ski-out Access', 'Heated Outdoor Pool', 'Panoramic Observatory Deck', 'Fireside Library'],
    timeline: [
      {
        phase: 'Design Phase',
        date: 'Mar 2024',
        description: 'Balancing thermal insulation with massive structural glass openings to optimize breathtaking mountain views.'
      },
      {
        phase: 'Foundation Works',
        date: 'Jul 2024',
        description: 'Embedding structural supports into steady, solid granite mountain foundations.'
      },
      {
        phase: 'Interior Fit-Out',
        date: 'Apr 2025',
        description: 'Installing local Swiss pine carpentry and high-tech underfloor heating systems.'
      },
      {
        phase: 'Planned Opening',
        date: 'Dec 2026',
        description: 'Final completion and grand opening ahead of the winter sports season.'
      }
    ]
  },
  {
    id: 'proj-3',
    slug: 'emerald-canopy-retreat',
    title: 'Emerald Canopy Retreat',
    description: 'Escape to a tranquil tropical paradise hidden within the Amazon rainforest. Treehouse-inspired cabins that emphasize wildlife conservation and ultimate quietness.',
    location: 'Amazon Rainforest, Brazil',
    status: 'upcoming',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521783988139-89397d761dce?w=1200&auto=format&fit=crop&q=80'
    ],
    amenities: ['Ecotourism Safari Guides', 'Solar Power Grid', 'Rooftop Bird-Watching', 'Organic Farm-to-Table Meals', 'Private Jungle Spa'],
    timeline: [
      {
        phase: 'Environmental Impact Assessment',
        date: 'Nov 2025',
        description: 'Rigorous ecological surveys to prevent tree-clearing and guarantee carbon-neutral construction.'
      },
      {
        phase: 'Site Preparation',
        date: 'Aug 2026',
        description: 'Building non-intrusive trails and securing localized, sustainable construction logistics.'
      },
      {
        phase: 'Structural Construction',
        date: 'Feb 2027',
        description: 'Treehouse engineering and canopy boardwalk assembly.'
      },
      {
        phase: 'Expected Launch',
        date: 'Jan 2028',
        description: 'Welcoming eco-travelers to the rainforest canopy.'
      }
    ]
  }
];
