export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  completionDate?: string;
  images: string[];
  amenities: string[];
  timeline: {
    phase: string;
    date: string;
    description: string;
  }[];
}
