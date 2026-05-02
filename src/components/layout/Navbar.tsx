import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', to: '/' },
    { name: 'Location', to: '/location' },
    { name: 'Articles', to: '/article' },
    { name: 'Projects', to: '/project' },
    { name: 'About Us', to: '/about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans border-b ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-slate-100 py-3'
          : 'bg-white border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group select-none cursor-pointer"
        >
          <span className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wider group-hover:text-secondary transition-colors duration-300">
            CRUAZ
          </span>
          <span className="font-sans text-[10px] bg-secondary/10 border border-secondary/30 text-slate-800 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
            Hotel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? 'text-secondary font-semibold'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-secondary rounded-full animate-scale-up" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="primary" size="sm" onClick={() => alert('Book Now is a mock CTA.')}>
            Book Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary p-1.5 rounded-md focus:outline-none hover:bg-slate-50 transition-colors duration-200 select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-md ${
          isOpen ? 'opacity-100 visible max-h-screen translate-y-0' : 'opacity-0 invisible max-h-0 -translate-y-2 overflow-hidden'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-sm select-none">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium tracking-wide py-1.5 border-b border-slate-50 transition-colors duration-300 ${
                  isActive ? 'text-secondary border-b-secondary' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-2 pt-2">
            <Button
              variant="primary"
              className="w-full text-center"
              onClick={() => alert('Book Now is a mock CTA.')}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
