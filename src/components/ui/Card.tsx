import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-surface border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:shadow-xl hover:border-slate-200 hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
