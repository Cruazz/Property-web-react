import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { mockProjects } from '../data/mockProjects';

export const ProjectListPage: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const statuses = ['All', 'completed', 'ongoing', 'upcoming'];

  const filteredProjects = mockProjects.filter((proj) => {
    return selectedStatus === 'All' || proj.status === selectedStatus;
  });

  return (
    <div className="flex flex-col gap-12 font-sans select-none animate-fade-in">
      {/* Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Projects' }]} />

      {/* Hero / Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <SectionTitle
          title="The Portfolio"
          subtitle="Architectural Landmarks"
        />
        <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto font-light tracking-wide -mt-6">
          Explore our premier hospitality milestones, upcoming eco-tourism escapes, and ongoing construction retreats.
        </p>
      </div>

      {/* Category Chips filtering */}
      <section className="flex items-center justify-center gap-2 overflow-x-auto pb-4 select-none">
        {statuses.map((stat) => (
          <button
            key={stat}
            onClick={() => setSelectedStatus(stat)}
            className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider border transition-all duration-300 whitespace-nowrap ${
              selectedStatus === stat
                ? 'bg-primary text-white border-primary shadow-sm hover:bg-opacity-95'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-primary/5 hover:text-primary hover:border-primary/40'
            }`}
          >
            {stat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="min-h-[300px]">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="flex flex-col gap-6 group select-none">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  />
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-secondary font-bold tracking-wide shadow-sm px-3 text-slate-800 backdrop-blur-md">
                    {proj.status}
                  </Badge>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <span className="font-sans font-medium text-xs text-slate-400 uppercase tracking-wide">
                      {proj.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                  <Link to={`/project/${proj.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-all duration-300 flex items-center mt-1 self-start">
                    Explore Project <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center gap-2">
            <Compass size={40} className="text-slate-300 animate-pulse" />
            <h4 className="text-lg font-serif text-primary font-bold">No projects match your query.</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              Try choosing a different status filter chip.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
