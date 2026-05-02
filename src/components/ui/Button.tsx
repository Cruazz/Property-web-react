import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none select-none';
  
  const variants = {
    primary: 'bg-primary hover:bg-opacity-90 text-white rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-secondary hover:bg-opacity-90 text-primary font-bold rounded-md hover:shadow-md hover:-translate-y-0.5',
    outline: 'border border-primary text-primary hover:bg-primary/5 hover:border-secondary rounded-md',
    ghost: 'text-primary hover:bg-primary/10 rounded-md'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg font-semibold'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
