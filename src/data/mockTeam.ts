import type { TeamMember, CoreValue } from '../types/team';

export const mockTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Eleanor Sterling',
    role: 'Founder & CEO',
    bio: 'Eleanor holds over two decades of global hospitality experience, striving to redefine high-end hospitality through biophilic design and ecological integrity.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-2',
    name: 'David Harrington',
    role: 'Chief Operations Officer',
    bio: 'David oversees guest relations and luxury property management across all Antigravity properties, specializing in personalized concierge care.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'team-3',
    name: 'Isabella Cruz',
    role: 'Lead Architect & Design Director',
    bio: 'Isabella merges natural landscapes with interior luxury. Her award-winning architecture features airy, natural-lit structures.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80'
  }
];

export const mockValues: CoreValue[] = [
  {
    id: 'val-1',
    title: 'Uncompromising Luxury',
    description: 'We believe premium aesthetics and ultimate comfort should exceed guest expectations in every space.',
    icon: 'Crown'
  },
  {
    id: 'val-2',
    title: 'Ecological Stewardship',
    description: 'Our architecture works hand in hand with the natural environment, promoting biodiversity and conservation.',
    icon: 'Leaf'
  },
  {
    id: 'val-3',
    title: 'Cultural Connection',
    description: 'Every property is directly inspired by local history, materials, traditions, and culinary masterpieces.',
    icon: 'Globe'
  },
  {
    id: 'val-4',
    title: 'Impeccable Concierge Care',
    description: 'Our staff provides round-the-clock, customized service tailored to individual needs.',
    icon: 'Sparkles'
  }
];

export const mockHistory = [
  {
    date: 'Jan 2021',
    title: 'Company Foundation',
    description: 'Antigravity Resorts was founded by Eleanor Sterling with a bold vision for eco-luxury hospitality.'
  },
  {
    date: 'Sep 2022',
    title: 'First Landmark Project',
    description: 'Our first property, Azure Lagoon Villas, breaks ground with fully solar-powered, overwater bungalows.'
  },
  {
    date: 'Dec 2023',
    title: 'Sustainability Award',
    description: 'Received the International Eco-Hospitality Award for groundbreaking biophilic architecture.'
  },
  {
    date: 'Nov 2025',
    title: 'Portfolio Expansion',
    description: 'Azure Lagoon Villas officially opens, and two additional large-scale resort projects groundbreak.'
  }
];
