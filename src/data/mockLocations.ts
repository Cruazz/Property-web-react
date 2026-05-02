import type { Location } from '../types/location';

export const mockLocation: Location = {
  name: 'Cruaz Signature Hotel & Spa',
  address: '102 Luxury Point Drive, Emerald Coast, EC 4092, USA',
  coordinates: {
    lat: 34.019454,
    lng: -118.491191
  },
  phone: '+1 (555) 890-2400',
  email: 'concierge@antigravityresorts.com',
  openingHours: '24/7 Front Desk, Guest Services',
  nearbyAttractions: [
    {
      name: 'Emerald Cove Marine Sanctuary',
      distance: '1.2 miles',
      type: 'Nature & Diving',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Mount Crystal Hiking Trails',
      distance: '3.5 miles',
      type: 'Outdoor Adventure',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Old Town Heritage Museum',
      distance: '4.8 miles',
      type: 'History & Culture',
      image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Golden Reef Shopping Center',
      distance: '2.1 miles',
      type: 'Luxury Boutique & Dining',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=80'
    }
  ]
};
