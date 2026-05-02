import type { Article } from '../types/article';

export const mockArticles: Article[] = [
  {
    id: 'art-1',
    slug: 'sustainable-luxury-architecture',
    title: 'Sustainable Luxury: Merging Modernity with Nature',
    excerpt: 'Explore how our latest projects balance uncompromising comfort with eco-friendly architectural design.',
    content: `<p>Architecture today is no longer just about building high and wide. It is about integrating with the natural ecosystem and ensuring that the environmental footprint is minimized while the human experience is maximized.</p>
    <p>At Antigravity Resorts, we have adopted a philosophy that centers on "biophilic" design—bringing the natural world into the heart of our hospitality concepts. This involves using locally sourced, renewable materials such as cross-laminated timber, passive cooling systems, and advanced greywater recycling techniques.</p>
    <h2>Design That Breathes</h2>
    <p>In our newly constructed Ocean View Villas, we have integrated green roofs that not only insulate the buildings but also encourage local flora to flourish. This naturally lowers heating and cooling costs while blending the building seamlessly into the hillside.</p>
    <p>We invite you to experience this synthesis of luxury and sustainability in our properties worldwide.</p>`,
    category: 'architecture' as any,
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      bio: 'Lead Architect & Eco-Design Specialist at Antigravity Resorts.'
    },
    publishedAt: '2026-04-15',
    readTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80',
    tags: ['Sustainability', 'Design', 'Luxury']
  },
  {
    id: 'art-2',
    slug: 'ultimate-relaxation-wellness',
    title: 'The Ultimate Guide to Wellness & Relaxation',
    excerpt: 'Transform your vacation into a personal wellness retreat. Discover our curated spa rituals and mental well-being practices.',
    content: `<p>Wellness is more than a momentary escape from a busy routine. It is an intentional practice that aligns mind, body, and spirit. In our modern environments, stress often accumulates quietly, affecting our energy and presence.</p>
    <p>Our wellness centers are built with the understanding that quietness and aesthetic harmony are healing in themselves. Whether through mindfulness meditation overlooking the coast or sensory deprivation chambers, every experience is designed to restore balance.</p>
    <h2>Ancient Practices Meet Modern Healing</h2>
    <p>We have partnered with international therapists to bring together traditional healing practices—such as Ayurvedic therapies and sound healing—combined with the latest in modern hydrotherapy.</p>
    <p>Step away from the demands of daily life and immerse yourself in a journey of complete restoration.</p>`,
    category: 'tips' as any,
    author: {
      name: 'Julian Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: 'Holistic Health Director & Wellness Expert.'
    },
    publishedAt: '2026-04-20',
    readTime: 4,
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=80',
    tags: ['Wellness', 'Spa', 'Retreat']
  },
  {
    id: 'art-3',
    slug: 'culinary-journey-gastronomy',
    title: 'A Culinary Journey: Redefining Gastronomy',
    excerpt: 'Taste the finest seasonal flavors meticulously prepared by our Michelin-starred guest chefs.',
    content: `<p>Food has the ability to connect us to our surroundings more deeply than almost any other experience. When you dine at any Antigravity Resort property, you are experiencing the distinct geography, climate, and culture of the region.</p>
    <p>Our chefs prioritize seasonal and locally sourced ingredients. We partner directly with small-scale farmers and artisanal fishers to bring you ingredients harvested at peak freshness. This not only supports regional economies but guarantees unmatched quality on the plate.</p>
    <h2>Art on a Plate</h2>
    <p>Our culinary masters treat every dish as a canvas. From the visual balance of textures and vibrant colors to the delicate layering of complex flavors, our menus are crafted to surprise and delight the senses.</p>
    <p>Indulge in our private chef tastings and wine pairing events this season.</p>`,
    category: 'story' as any,
    author: {
      name: 'Marcus Bell',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      bio: 'Executive Gastronomy Director at Antigravity Resorts.'
    },
    publishedAt: '2026-04-28',
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80',
    tags: ['Fine Dining', 'Gastronomy', 'Culinary']
  }
];
