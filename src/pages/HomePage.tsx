import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockArticles } from '../data/mockArticles';
import { mockProjects } from '../data/mockProjects';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 font-sans select-none animate-fade-in">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[65vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex items-center">
        {/* Animated background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&auto=format&fit=crop&q=80"
            alt="Elite Hotel Hero"
            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[4000ms] ease-out select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/45 to-transparent backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 md:px-16 flex flex-col gap-6 text-white animate-fade-in">
          <Badge variant="secondary" className="self-start text-white bg-secondary/30 backdrop-blur-md border-secondary/40 px-3 py-1 text-xs">
            Uncompromising Modern Luxury
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide leading-tight animate-fade-in">
            A New Horizon of Luxury
          </h1>
          <p className="text-slate-100 text-sm md:text-base leading-relaxed max-w-lg font-light tracking-wide animate-fade-in">
            Escape to elite retreats where stunning, world-class biophilic design converges with restorative wellness rituals and unforgettable gastronomy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/location">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg shadow-secondary/20">
                Explore Location <Compass size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/project">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:border-secondary">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations / Experiences Section */}
      <section className="flex flex-col gap-12">
        <SectionTitle
          title="Curated Locations & Experiences"
          subtitle="Where Luxury Meets Serenity"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop&q=80"
                alt="Tropical Paradise"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <Badge variant="accent" className="absolute top-4 right-4 bg-white/90 text-primary border-accent/30 font-semibold backdrop-blur-sm">
                Emerald Coast
              </Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Emerald Coast Resort & Spa</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Surround yourself with deep crystal lagoons and vibrant coastal flora. A bespoke destination for true relaxation.
                </p>
              </div>
              <Link to="/location" className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center group self-start">
                Plan Your Stay <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop&q=80"
                alt="Mountain Peaks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <Badge variant="accent" className="absolute top-4 right-4 bg-white/90 text-primary border-accent/30 font-semibold backdrop-blur-sm">
                Alpine Lodge
              </Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">The Zermatt Sanctuary</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Breathtaking mountain ridges, crackling fireplaces, and ski-in/ski-out access in the heart of Zermatt.
                </p>
              </div>
              <Link to="/project/serene-peak-lodge" className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center group self-start">
                View Lodge <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
                alt="Tropical Jungle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <Badge variant="accent" className="absolute top-4 right-4 bg-white/90 text-primary border-accent/30 font-semibold backdrop-blur-sm">
                Rainforest Canopy
              </Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Emerald Canopy Retreat</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Perched high above the canopy floor. An active rainforest conservation retreat prioritizing total silence and wildlife.
                </p>
              </div>
              <Link to="/project/emerald-canopy-retreat" className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center group self-start">
                View Canopy <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-12 bg-slate-50/70 border border-slate-100 rounded-3xl p-8 md:p-14">
        <SectionTitle
          title="Featured Projects"
          subtitle="Our Premium Portfolio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mockProjects.slice(0, 2).map((proj) => (
            <div key={proj.id} className="flex flex-col gap-6 group select-none">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src={proj.images[0]}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <Badge variant="secondary" className="absolute top-4 right-4 bg-secondary font-bold tracking-wide shadow-sm px-3 text-slate-800 backdrop-blur-md">
                  {proj.status}
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-secondary" />
                  <span className="font-sans font-medium text-xs text-slate-400 uppercase tracking-wide">
                    {proj.location}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {proj.description}
                </p>
                <Link to={`/project/${proj.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-all duration-300 flex items-center mt-1 self-start">
                  Explore Project Details <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/project">
            <Button variant="outline">View Complete Portfolio</Button>
          </Link>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="flex flex-col gap-12">
        <SectionTitle
          title="Latest Journal Entries"
          subtitle="Insights, Stories & Travel Advice"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockArticles.slice(0, 3).map((art) => (
            <Card key={art.id} className="flex flex-col group select-none h-full">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={art.featuredImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge variant="primary" className="absolute top-4 left-4 bg-white/90 text-primary border-primary/20 backdrop-blur-sm">
                  {art.category}
                </Badge>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-slate-400 font-sans tracking-wide">
                    {art.publishedAt} • {art.readTime} min read
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
                <Link to={`/article/${art.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-colors duration-300 flex items-center self-start mt-2">
                  Read Article <BookOpen size={14} className="ml-1.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/article">
            <Button variant="outline">Browse All Articles</Button>
          </Link>
        </div>
      </section>

      {/* Footer CTA Banner Section */}
      <section className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-primary border border-primary/20 px-8 py-14 md:py-20 flex flex-col items-center text-center gap-6 animate-fade-in select-none">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&auto=format&fit=crop&q=80"
            alt="Luxury Interior CTA"
            className="w-full h-full object-cover opacity-30 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/95" />
        </div>

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-4 text-white">
          <Badge variant="accent" className="bg-secondary text-primary font-bold px-3 py-1 text-xs select-none">
            Book an Elite Stay
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide">
            Experience Unmatched Luxury
          </h2>
          <p className="text-slate-200 text-sm md:text-base max-w-lg leading-relaxed font-light tracking-wide">
            Whether for a relaxing seaside wellness retreat or high-altitude mountain lodge getaways, our staff provides unparalleled, round-the-clock concierge services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-secondary/30"
              onClick={() => alert('Book Now is a mock CTA.')}
            >
              Reserve Your Stay
            </Button>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                Learn About Our Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
