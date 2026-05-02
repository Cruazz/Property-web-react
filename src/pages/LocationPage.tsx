import React from 'react';
import { MapPin, Phone, Clock, Compass, Car, Plane, Train } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { mockLocation } from '../data/mockLocations';

export const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-14 font-sans select-none animate-fade-in">
      {/* Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Location' }]} />

      {/* Location Hero */}
      <section className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex items-center p-8 md:p-14">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1600&auto=format&fit=crop&q=80"
            alt="Emerald Coast Location"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-xl text-white flex flex-col gap-4 animate-fade-in">
          <Badge variant="accent" className="self-start bg-secondary text-primary font-bold px-3 py-0.5 text-xs select-none">
            Elite Destination
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">
            Emerald Coast Resort & Spa
          </h1>
          <p className="text-slate-200 text-sm md:text-base font-light tracking-wide leading-relaxed">
            Located in the absolute heart of the Emerald Coast, our premier sanctuary offers sweeping oceanfront panoramas and immediate walking paths to untouched coastal ecosystems.
          </p>
        </div>
      </section>

      {/* Core Details / Contact / Hours */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6 md:p-8 flex flex-col justify-between gap-4 h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/5 p-3 rounded-full border border-primary/10 text-secondary">
                <MapPin size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary">Resort Address</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-1 font-medium">
              Antigravity Signature Resorts
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              {mockLocation.address}
            </p>
          </div>
          <a
            href={`https://www.google.com/maps?q=${mockLocation.coordinates.lat},${mockLocation.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary font-semibold text-sm transition-colors duration-300 flex items-center group self-start"
          >
            Open in Google Maps <Compass size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </Card>

        <Card className="p-6 md:p-8 flex flex-col justify-between gap-4 h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/5 p-3 rounded-full border border-primary/10 text-secondary">
                <Phone size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary">Direct Lines</h3>
            </div>
            <p className="text-slate-600 text-sm font-medium">Main Concierge:</p>
            <p className="text-slate-500 text-sm mb-3 leading-relaxed">{mockLocation.phone}</p>
            <p className="text-slate-600 text-sm font-medium">Email Inquiries:</p>
            <p className="text-slate-500 text-sm leading-relaxed select-all">{mockLocation.email}</p>
          </div>
        </Card>

        <Card className="p-6 md:p-8 flex flex-col justify-between gap-4 h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/5 p-3 rounded-full border border-primary/10 text-secondary">
                <Clock size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary">Front Desk Hours</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-1">
              Guest Services are operational around the clock to assist you with elite itinerary management.
            </p>
            <p className="text-secondary font-bold text-sm tracking-wide mt-2">
              {mockLocation.openingHours}
            </p>
          </div>
        </Card>
      </section>

      {/* Map Section */}
      <section className="flex flex-col gap-6">
        <SectionTitle
          title="Explore Our Coastal Paradise"
          subtitle="Location & Orientation"
        />

        <div className="w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative flex items-center justify-center">
          {/* Iframe with premium Google Maps style */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105740.09117621946!2d-118.57142491547466!3d34.02016127110189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4ced4e3a4e1%3A0xb3e18a996c56b71a!2sEmerald%20Bay!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 opacity-90 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="flex flex-col gap-12">
        <SectionTitle
          title="Local Points of Interest"
          subtitle="Nearby Attractions"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mockLocation.nearbyAttractions.map((attr, index) => (
            <Card key={index} className="flex flex-col group select-none h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={attr.image}
                  alt={attr.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge variant="accent" className="absolute top-3 right-3 bg-white/90 text-primary border-accent/20 backdrop-blur-sm">
                  {attr.distance}
                </Badge>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                <div>
                  <span className="text-[10px] text-secondary font-sans font-semibold tracking-widest uppercase">
                    {attr.type}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 leading-tight mt-1">
                    {attr.name}
                  </h4>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Transport / Getting There */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-14 flex flex-col gap-10">
        <div className="max-w-xl">
          <SectionTitle
            title="Arriving to Emerald Coast"
            subtitle="Getting There & Access"
            align="left"
            className="mb-0"
          />
          <p className="text-sm text-slate-500 leading-relaxed mt-4">
            Our luxury vehicles and private concierge drivers are at your direct disposal. Contact the concierge for pick-ups and reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-secondary">
                <Plane size={24} />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary">By Air</h4>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Emerald International Airport (EIA) is located 18 miles from the resort. Private jet and helicopter access are fully available via our on-site helipad.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-secondary">
                <Train size={24} />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary">By Train</h4>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-speed rails serve Emerald Coast Terminal, located 4.5 miles from the resort. Our complimentary town car transfers make arrivals completely effortless.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-secondary">
                <Car size={24} />
              </div>
              <h4 className="font-serif text-xl font-bold text-primary">By Luxury Car</h4>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              The scenic coastal highways provide panoramic views on the drive here. Valet parking, electric vehicle supercharging, and private garages are available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
