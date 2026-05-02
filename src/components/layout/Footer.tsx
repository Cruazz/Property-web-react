import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24 py-16 text-slate-600 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-serif font-bold text-primary tracking-wider group-hover:text-secondary transition-colors duration-300">
              CRUAZ
            </span>
            <span className="font-sans text-[9px] bg-secondary/10 border border-secondary/30 text-slate-800 px-1.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
              Hotel
            </span>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            Bespoke retreats that combine stunning biophilic design, elite wellness centers, and world-class gastronomic experiences.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-4 text-primary mt-2">
            <a href="#facebook" className="hover:text-secondary transition-colors duration-300 text-xs font-semibold">FB</a>
            <a href="#instagram" className="hover:text-secondary transition-colors duration-300 text-xs font-semibold">IG</a>
            <a href="#twitter" className="hover:text-secondary transition-colors duration-300 text-xs font-semibold">X</a>
            <Globe size={16} className="text-secondary" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors duration-300">Home</Link></li>
            <li><Link to="/location" className="hover:text-secondary transition-colors duration-300">Location</Link></li>
            <li><Link to="/article" className="hover:text-secondary transition-colors duration-300">Articles</Link></li>
            <li><Link to="/project" className="hover:text-secondary transition-colors duration-300">Projects</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors duration-300">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-secondary flex-shrink-0" />
              <span>102 Luxury Point Drive, Emerald Coast</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-secondary flex-shrink-0" />
              <span>+1 (555) 890-2400</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-secondary flex-shrink-0" />
              <span>concierge@antigravityresorts.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup (Mock) */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed">
            Subscribe to receive our latest stories, architectural highlights, and travel guides.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Newsletter signup successful!');
            }}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="px-4 py-2 bg-white border border-slate-200 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-md text-sm text-slate-800 focus:outline-none transition-colors duration-300 shadow-sm"
            />
            <Button type="submit" variant="primary" size="sm" className="w-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <span>© {currentYear} Cruaz Hotel. All Rights Reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-secondary transition-colors duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-secondary transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
