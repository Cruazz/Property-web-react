import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="text-secondary font-sans font-semibold tracking-widest text-xs uppercase block mb-3 animate-fade-in">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-wide">
        {title}
      </h2>
      <div className={`w-14 h-0.5 bg-secondary mt-4 ${align === 'center' ? 'mx-auto' : 'ml-0'}`} />
    </div>
  );
};
