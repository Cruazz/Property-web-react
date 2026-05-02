# Product Requirements Document (PRD)
## Hotel Website Frontend Mockup

---

## 1. Overview

| Field | Description |
|-------|-------------|
| **Project Name** | Hotel Website Frontend Mockup |
| **Version** | 1.0.0 |
| **Date** | May 2026 |
| **Type** | Frontend Mockup (React.js) |
| **Purpose** | A responsive, visually appealing hotel website for showcasing location, articles, projects, and company information. |

---

## 2. Goals & Objectives

- **Primary Goal**: Create a modern, elegant hotel website frontend that effectively presents the hotel's brand, location, stories, and projects.
- **Secondary Goals**:
  - Provide an intuitive navigation experience across all sections.
  - Ensure full responsiveness across desktop, tablet, and mobile devices.
  - Deliver a visually rich experience using high-quality imagery and smooth animations.
  - Serve as a clickable prototype/mockup for stakeholder review.

---

## 3. Target Audience

| Segment | Description |
|---------|-------------|
| **Potential Guests** | Travelers researching hotels, looking for location info and amenities. |
| **Investors / Partners** | Stakeholders reviewing hotel projects and company background. |
| **Media / Blog Readers** | Users interested in hotel-related articles and stories. |
| **General Visitors** | Casual browsers exploring the hotel brand. |

---

## 4. Tech Stack

| Layer | Technology | Justification |
|-------|------------|---------------|
| **Framework** | React.js 18+ | Component-based architecture, rich ecosystem. |
| **Language** | TypeScript | Type safety, better developer experience. |
| **Styling** | Tailwind CSS | Rapid UI development, consistent design system. |
| **Routing** | React Router v6 | Declarative routing, nested routes support. |
| **Animation** | Framer Motion | Smooth page transitions and scroll animations. |
| **Icons** | Lucide React | Lightweight, consistent iconography. |
| **Build Tool** | Vite | Fast development server and optimized builds. |

---

## 5. Page Structure & Routes

### 5.1 Route Map

```
/                          → Home (Landing Page)
├── /location              → Location Page
├── /article               → Article Listing Page
│   └── /article/:slug     → Article Detail Page
├── /project               → Project Listing Page
│   └── /project/:slug     → Project Detail Page
├── /about                 → About Us Page
└── *                      → 404 Not Found Page
```

### 5.2 Route Details

| Route | Page Name | Description | Key Sections |
|-------|-----------|-------------|--------------|
| `/` | **Home** | Landing page with hero, highlights, and CTAs. | Hero Banner, Featured Locations, Latest Articles, Featured Projects, Footer CTA |
| `/location` | **Location** | Detailed location information and map. | Location Hero, Address & Contact, Map Embed, Nearby Attractions, Getting There |
| `/article` | **Articles** | Blog/article listing page. | Article Grid, Category Filter, Search, Pagination |
| `/article/:slug` | **Article Detail** | Individual article view. | Article Header, Content Body, Author Bio, Related Articles, Share Buttons |
| `/project` | **Projects** | Hotel project/portfolio listing. | Project Grid, Filter by Status, Project Cards |
| `/project/:slug` | **Project Detail** | Individual project view. | Project Gallery, Description, Timeline, Amenities |
| `/about` | **About Us** | Company story, team, and values. | Mission/Vision, Company History, Team Members, Core Values, Awards |
| `*` | **404** | Page not found fallback. | Illustration, Back to Home CTA |

---

## 6. Component Architecture

### 6.1 Layout Components

```
Layout/
├── Navbar.tsx              → Fixed top navigation with logo + links + mobile hamburger
├── Footer.tsx              → Site footer with links, social icons, newsletter
├── PageTransition.tsx      → Framer Motion wrapper for route transitions
└── Container.tsx           → Max-width wrapper (max-w-7xl, responsive padding)
```

### 6.2 Shared Components

```
components/
├── ui/
│   ├── Button.tsx          → Primary, secondary, ghost variants
│   ├── Card.tsx            → Reusable card wrapper
│   ├── Badge.tsx           → Status/category labels
│   ├── SectionTitle.tsx    → Consistent section headings
│   └── Skeleton.tsx        → Loading placeholders
├── common/
│   ├── HeroSection.tsx     → Full-width hero with overlay text
│   ├── ImageGallery.tsx    → Grid/gallery with lightbox
│   ├── Breadcrumb.tsx      → Navigation breadcrumbs
│   ├── Pagination.tsx      → Page number controls
│   └── ScrollToTop.tsx     → Floating scroll-to-top button
```

### 6.3 Page-Specific Components

```
pages/
├── Home/
│   ├── HeroBanner.tsx
│   ├── FeaturedLocations.tsx
│   ├── LatestArticles.tsx
│   └── FeaturedProjects.tsx
├── Location/
│   ├── LocationHero.tsx
│   ├── ContactInfo.tsx
│   ├── MapSection.tsx
│   └── NearbyAttractions.tsx
├── Article/
│   ├── ArticleCard.tsx
│   ├── ArticleGrid.tsx
│   ├── CategoryFilter.tsx
│   └── ArticleContent.tsx
├── Project/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectFilter.tsx
│   └── ProjectGallery.tsx
└── About/
    ├── MissionVision.tsx
    ├── Timeline.tsx
    ├── TeamGrid.tsx
    └── ValuesGrid.tsx
```

---

## 7. User Workflow & Journey

### 7.1 Primary User Flows

#### Flow A: Discovering the Hotel (First Visit)
```
Landing Page (/) 
    → Browse Hero & Featured Sections
    → Click "Explore Location" CTA
    → Location Page (/location)
    → Review Map & Nearby Attractions
    → Click "Read Our Stories" or "View Projects"
    → Article (/article) or Project (/project) Page
    → Return to Home or Navigate to About
```

#### Flow B: Reading Articles
```
Any Page → Click "Articles" in Navbar
    → Article Listing (/article)
    → Filter by Category or Search
    → Click Article Card
    → Article Detail (/article/:slug)
    → Read Content, Share, or Browse Related
```

#### Flow C: Exploring Projects
```
Any Page → Click "Projects" in Navbar
    → Project Listing (/project)
    → Filter by Status (Ongoing / Completed / Upcoming)
    → Click Project Card
    → Project Detail (/project/:slug)
    → View Gallery & Details
```

#### Flow D: Learning About the Company
```
Any Page → Click "About Us" in Navbar
    → About Page (/about)
    → Scroll through Mission, History, Team, Values
    → Click "Contact Us" or Return to Home
```

### 7.2 Navigation Structure

```
[NAVBAR - Fixed Top]
├── Logo (Left) → Click → Home (/)
├── Nav Links (Center)
│   ├── Home (/)
│   ├── Location (/location)
│   ├── Articles (/article)
│   ├── Projects (/project)
│   └── About Us (/about)
└── CTA Button (Right) → "Book Now" / "Contact" (Mock)

[FOOTER - Bottom]
├── Column 1: Logo + Short Description
├── Column 2: Quick Links (All Routes)
├── Column 3: Contact Info
├── Column 4: Newsletter Signup (Mock)
└── Bottom Bar: Copyright + Social Icons
```

---

## 8. UI/UX Requirements

### 8.1 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Primary Color** | `#1a365d` (Navy Blue) | Headers, buttons, accents |
| **Secondary Color** | `#d4af37` (Gold) | Highlights, hover states, luxury feel |
| **Background** | `#fafafa` (Off-white) | Page backgrounds |
| **Surface** | `#ffffff` (White) | Cards, modals |
| **Text Primary** | `#1a202c` (Dark Gray) | Body text |
| **Text Secondary** | `#718096` (Medium Gray) | Captions, meta info |
| **Font Heading** | Playfair Display / Serif | Elegant, hotel luxury feel |
| **Font Body** | Inter / Sans-serif | Clean, readable |

### 8.2 Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| Mobile | < 640px | Single column, hamburger menu, stacked cards |
| Tablet | 640px - 1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, multi-column grids, expanded nav |

### 8.3 Animation Specifications

| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Page Fade In | Route change | 400ms | ease-out |
| Section Reveal | Scroll into view | 600ms | cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Card Hover | Mouse enter | 200ms | ease-in-out |
| Navbar Scroll | Scroll > 50px | 300ms | ease |
| Image Zoom | Hover on card | 300ms | ease-out |

### 8.4 Mock Data Requirements

| Section | Mock Data Needed |
|---------|------------------|
| Location | Address, coordinates, phone, email, opening hours, 4-6 nearby attractions |
| Articles | 6-8 articles with title, excerpt, category, author, date, image, slug |
| Projects | 4-6 projects with title, description, status, location, images, slug, amenities |
| About | Company history timeline (4-5 milestones), 3-4 team members, 4 core values |

---

## 9. Page Specifications

### 9.1 Home Page (`/`)

| Section | Content | Priority |
|---------|---------|----------|
| Hero Banner | Full-screen background image, headline, subheadline, CTA buttons | P0 |
| Featured Locations | 3 location cards with images and brief descriptions | P1 |
| Latest Articles | Horizontal scroll or grid of 3 latest articles | P1 |
| Featured Projects | 2-3 highlighted projects with large imagery | P1 |
| Footer CTA | "Experience Luxury" call-to-action banner | P2 |

### 9.2 Location Page (`/location`)

| Section | Content | Priority |
|---------|---------|----------|
| Location Hero | Page title with background image | P0 |
| Contact Info | Address, phone, email, opening hours in card layout | P0 |
| Map Section | Embedded map (Google Maps iframe or static mock) | P0 |
| Nearby Attractions | Grid of 4-6 nearby points of interest with distances | P1 |
| Getting There | Transport options (airport, train, car) | P2 |

### 9.3 Articles Page (`/article`)

| Section | Content | Priority |
|---------|---------|----------|
| Page Header | Title + subtitle | P0 |
| Category Filter | Horizontal filter chips (All, News, Stories, Tips) | P1 |
| Search Bar | Text input for article search | P2 |
| Article Grid | Responsive grid of article cards (image + title + meta) | P0 |
| Pagination | Page numbers or "Load More" | P1 |

### 9.4 Article Detail Page (`/article/:slug`)

| Section | Content | Priority |
|---------|---------|----------|
| Article Header | Title, category badge, author, date, read time | P0 |
| Featured Image | Full-width hero image | P0 |
| Article Body | Rich text content with headings, paragraphs, quotes | P0 |
| Author Bio | Author card with avatar and short bio | P1 |
| Related Articles | 3 related article cards at bottom | P1 |
| Share Buttons | Social share icons (mock functionality) | P2 |

### 9.5 Projects Page (`/project`)

| Section | Content | Priority |
|---------|---------|----------|
| Page Header | Title + subtitle | P0 |
| Status Filter | Tabs: All / Ongoing / Completed / Upcoming | P1 |
| Project Grid | Responsive grid of project cards | P0 |
| Project Card | Image, title, location, status badge, short description | P0 |

### 9.6 Project Detail Page (`/project/:slug`)

| Section | Content | Priority |
|---------|---------|----------|
| Project Gallery | Image carousel/gallery (3-5 images) | P0 |
| Project Info | Title, status, location, completion date | P0 |
| Description | Detailed project description | P0 |
| Amenities | Grid of amenity icons and labels | P1 |
| Timeline | Project milestones (if applicable) | P2 |
| Related Projects | 2-3 related project cards | P1 |

### 9.7 About Us Page (`/about`)

| Section | Content | Priority |
|---------|---------|----------|
| Mission & Vision | Two-column layout with text and image | P0 |
| Company History | Vertical timeline with milestones | P1 |
| Team Members | Grid of team cards (photo, name, role, bio) | P1 |
| Core Values | 4 value cards with icons | P1 |
| Awards / Recognition | Grid of award badges (optional) | P2 |

---

## 10. State Management

Since this is a frontend mockup with no backend, all state will be local:

| State | Scope | Management |
|-------|-------|------------|
| Active Route | Global | React Router |
| Mobile Menu Open | Global | useState in Layout |
| Article Filter | Page | useState in Article Page |
| Project Filter | Page | useState in Project Page |
| Search Query | Page | useState in Article Page |
| Scroll Position | Global | useEffect + window listener |
| Page Transition | Global | Framer Motion AnimatePresence |

---

## 11. File Structure

```
hotel-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── locations/
│   │   ├── articles/
│   │   ├── projects/
│   │   └── team/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/               → Reusable UI primitives
│   │   ├── common/           → Shared section components
│   │   ├── layout/           → Navbar, Footer, Layout wrapper
│   │   ├── home/             → Home page sections
│   │   ├── location/         → Location page sections
│   │   ├── article/          → Article page sections
│   │   ├── project/          → Project page sections
│   │   └── about/            → About page sections
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LocationPage.tsx
│   │   ├── ArticleListPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── ProjectListPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   ├── mockArticles.ts
│   │   ├── mockProjects.ts
│   │   ├── mockLocations.ts
│   │   ├── mockTeam.ts
│   │   └── mockAttractions.ts
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   ├── article.ts
│   │   ├── project.ts
│   │   ├── location.ts
│   │   └── team.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 12. Development Milestones

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1: Setup** | Day 1 | Project scaffolding, routing, layout shell, design tokens |
| **Phase 2: Core Pages** | Day 2-3 | Home, About, Location pages with mock data |
| **Phase 3: Content Pages** | Day 4-5 | Article listing + detail, Project listing + detail |
| **Phase 4: Polish** | Day 6 | Animations, responsive fixes, loading states, 404 page |
| **Phase 5: Review** | Day 7 | Code cleanup, performance check, cross-browser testing |

---

## 13. Success Criteria

- [ ] All 7 routes are accessible and render correctly.
- [ ] Navigation works seamlessly across all pages.
- [ ] Design is fully responsive (mobile, tablet, desktop).
- [ ] All mock data is displayed appropriately.
- [ ] Page transitions and scroll animations are smooth.
- [ ] No console errors or broken links.
- [ ] Code is modular, reusable, and well-documented.

---

## 14. Appendix

### 14.1 Mock Data Examples

**Article Object:**
```typescript
interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'story' | 'tips';
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: number; // minutes
  featuredImage: string;
  tags: string[];
}
```

**Project Object:**
```typescript
interface Project {
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
```

**Location Object:**
```typescript
interface Location {
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  email: string;
  openingHours: string;
  nearbyAttractions: {
    name: string;
    distance: string;
    type: string;
    image: string;
  }[];
}
```

---

*Document Version: 1.0.0*
*Status: Draft*
*Prepared for: Frontend Development Team*
