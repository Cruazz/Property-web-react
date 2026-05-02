import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ImageGallery } from '../components/common/ImageGallery';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockProjects } from '../data/mockProjects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentProject = mockProjects.find((proj) => proj.slug === slug);

  if (!currentProject) {
    return (
      <div className="text-center py-24 flex flex-col items-center gap-4 select-none animate-fade-in">
        <Compass size={44} className="text-slate-300 animate-pulse" />
        <h2 className="text-2xl font-serif font-bold text-primary">Project Not Found</h2>
        <p className="text-sm text-slate-500 max-w-sm">
          We couldn't locate the specific hotel portfolio project you requested.
        </p>
        <Link to="/project">
          <Button variant="outline">Browse All Projects</Button>
        </Link>
      </div>
    );
  }

  // Related projects
  const relatedProjects = mockProjects
    .filter((p) => p.id !== currentProject.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col gap-12 font-sans select-none animate-fade-in">
      {/* Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            { label: 'Projects', to: '/project' },
            { label: currentProject.title }
          ]}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/project')}
          className="text-slate-500 hover:text-primary transition-colors flex items-center group"
        >
          <ArrowLeft size={16} className="mr-1.5 group-hover:-translate-x-1 transition-transform" /> Back
        </Button>
      </div>

      {/* Hero Header Section */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full text-center">
        <div className="flex justify-center items-center gap-3">
          <Badge variant="secondary" className="bg-secondary font-bold tracking-wide shadow-sm text-slate-800 backdrop-blur-md select-none">
            {currentProject.status}
          </Badge>
          <span className="text-xs text-slate-400 flex items-center gap-1 font-sans">
            <MapPin size={13} className="text-secondary" /> {currentProject.location}
          </span>
          {currentProject.completionDate && (
            <span className="text-xs text-slate-400 flex items-center gap-1 font-sans">
              <Calendar size={13} /> Launched {currentProject.completionDate}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-wide leading-tight">
          {currentProject.title}
        </h1>

        <p className="text-sm md:text-base font-light tracking-wide text-slate-500 leading-relaxed max-w-3xl mx-auto">
          {currentProject.description}
        </p>
      </div>

      {/* Project Image Gallery Component */}
      <section className="my-2 select-none">
        <ImageGallery images={currentProject.images} />
      </section>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full border-t border-slate-100 pt-12">
        {/* Timeline & details */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Project Development Timeline</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Track the exact milestones, architectural design choices, and construction lifecycle of this landmark property.
            </p>

            <div className="flex flex-col gap-6 border-l border-slate-200 ml-4 pl-6 relative">
              {currentProject.timeline.map((step, idx) => (
                <div key={idx} className="relative flex flex-col gap-1.5 pb-2">
                  <div className="absolute -left-[31px] top-1 bg-secondary w-3 h-3 rounded-full border-2 border-white shadow-sm" />
                  <span className="text-xs text-secondary font-bold uppercase tracking-widest">
                    {step.date}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-primary">
                    {step.phase}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Panel - Custom Amenities List */}
        <div className="flex flex-col gap-6 h-full">
          <Card className="p-6 flex flex-col gap-5 border border-slate-100 bg-slate-50/50 shadow-sm select-none">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider border-b border-slate-100 pb-2">
              Property Amenities
            </h4>
            <ul className="flex flex-col gap-3.5">
              {currentProject.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="text-secondary flex-shrink-0">
                    <Sparkles size={16} className="stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-slate-600 leading-relaxed">
                    {amenity}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Related projects section */}
      {relatedProjects.length > 0 && (
        <section className="flex flex-col gap-10 border-t border-slate-100 pt-16 mt-4">
          <SectionTitle
            title="Browse Alternative Landmarks"
            subtitle="Related Projects"
            align="left"
            className="mb-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <div key={proj.id} className="flex flex-col gap-6 group select-none">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  />
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-secondary font-bold tracking-wide shadow-sm px-3 text-slate-800 backdrop-blur-md select-none">
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
                  <Link to={`/project/${proj.slug}`} className="text-secondary font-semibold text-sm hover:text-primary transition-all duration-300 flex items-center mt-1 self-start">
                    Explore Details <ArrowLeft size={14} className="ml-1.5 rotate-180 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
