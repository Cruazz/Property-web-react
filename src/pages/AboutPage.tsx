import React from 'react';
import { Leaf, Globe, Sparkles, Crown, Award } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockTeam, mockValues, mockHistory } from '../data/mockTeam';

export const AboutPage: React.FC = () => {
  // Mapping string icon keys to dynamic Lucide icons
  const iconMapping: { [key: string]: any } = {
    Crown: <Crown size={28} className="text-secondary stroke-[2]" />,
    Leaf: <Leaf size={28} className="text-secondary stroke-[2]" />,
    Globe: <Globe size={28} className="text-secondary stroke-[2]" />,
    Sparkles: <Sparkles size={28} className="text-secondary stroke-[2]" />
  };

  return (
    <div className="flex flex-col gap-20 font-sans select-none animate-fade-in">
      {/* Breadcrumbs */}
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <SectionTitle
          title="The Story Behind Antigravity"
          subtitle="Heritage, Mission & Vision"
        />
        <p className="text-sm md:text-base font-light tracking-wide text-slate-500 leading-relaxed -mt-6">
          We believe high-end hospitality works hand-in-hand with biophilic architecture and ecological responsibility, resulting in restorative sanctuaries for the global voyager.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <Badge variant="accent" className="self-start bg-secondary text-primary font-bold px-3 py-0.5 text-xs select-none">
            Our Purpose
          </Badge>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
            Elevating the Human Escape
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light tracking-wide">
            Founded in 2021, Antigravity was established with a singular mission: to strip away the noise of modern environments and create sensory-rich physical escapes.
          </p>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light tracking-wide">
            Our properties are physically grounded within exceptional natural landscapes. Through rigorous environmental assessments, our architects protect local flora and build low-impact structures that respect and magnify their surroundings.
          </p>
        </div>

        <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
            alt="Biophilic Design Workspace"
            className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="flex flex-col gap-12 border-t border-slate-100 pt-16">
        <SectionTitle
          title="Our Guiding Core Principles"
          subtitle="Our Values"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mockValues.map((v) => (
            <Card key={v.id} className="p-6 md:p-8 flex flex-col justify-between gap-6 h-full select-none bg-slate-50/40 border-slate-100/80">
              <div className="flex flex-col gap-4">
                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm self-start text-secondary">
                  {iconMapping[v.icon] || <Award size={28} className="text-secondary" />}
                </div>
                <h4 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-light tracking-wide">
                  {v.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Company History Section */}
      <section className="flex flex-col gap-12 bg-slate-50/70 border border-slate-100 rounded-3xl p-8 md:p-14">
        <SectionTitle
          title="Company Milestones"
          subtitle="The Journey Thus Far"
        />

        <div className="flex flex-col gap-10 border-l-2 border-slate-200 ml-4 pl-6 md:pl-10 relative max-w-4xl mx-auto">
          {mockHistory.map((h, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row gap-2 md:gap-10 pb-4 select-none">
              <div className="absolute -left-[36px] md:-left-[50px] top-1 bg-secondary w-4 h-4 rounded-full border-2 border-white shadow-sm" />
              <div className="md:w-36 flex-shrink-0">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest font-sans">
                  {h.date}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-xl font-bold text-primary">
                  {h.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl font-light tracking-wide font-sans">
                  {h.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col gap-12 border-t border-slate-100 pt-16">
        <SectionTitle
          title="Meet Our Visionaries"
          subtitle="The Leadership Team"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {mockTeam.map((m) => (
            <Card key={m.id} className="flex flex-col group select-none h-full bg-white">
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between gap-3">
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {m.name}
                  </h4>
                  <span className="text-[11px] text-secondary font-sans font-semibold tracking-widest uppercase mb-2 block">
                    {m.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-light tracking-wide line-clamp-4">
                    {m.bio}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
