import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 select-none animate-fade-in font-sans max-w-lg mx-auto p-6">
      <div className="relative">
        <Compass size={64} className="text-secondary/40 animate-pulse animate-spin duration-[4000ms] stroke-[1]" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl font-extrabold text-primary select-none">
          404
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-wide">
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light tracking-wide max-w-sm">
          We're sorry, but the specific corner of our resort you're searching for does not seem to exist.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link to="/">
          <Button variant="secondary" size="md" className="flex items-center gap-2">
            <Home size={16} /> Return to Home
          </Button>
        </Link>
        <Link to="/project">
          <Button variant="outline" size="md">
            View Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
