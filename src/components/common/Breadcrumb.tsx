import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 font-sans text-sm select-none">
      <ol className="flex items-center flex-wrap gap-2 text-slate-500">
        <li>
          <Link
            to="/"
            className="flex items-center hover:text-secondary text-primary transition-colors duration-200"
          >
            <Home size={16} className="mr-1 inline pb-0.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-slate-400" />
              {isLast || !item.to ? (
                <span className="text-secondary font-medium tracking-wide truncate max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-secondary text-slate-600 transition-colors duration-200 truncate max-w-[150px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
