import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href, 
  className = '',
  icon = false,
  size = 'md',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    // Solid dark green, flat, slight rounded corners
    primary: "border border-transparent text-white bg-agro-900 hover:bg-agro-800 focus:ring-agro-500 rounded-md shadow-sm hover:shadow-md hover:-translate-y-0.5",
    // Earthy tone, subtle background
    secondary: "border border-transparent text-earth-900 bg-earth-100 hover:bg-earth-200 focus:ring-earth-500 rounded-md",
    // Sharp border, transparent
    outline: "border-2 border-stone-800 text-stone-900 bg-transparent hover:bg-stone-800 hover:text-white focus:ring-stone-500 rounded-md",
    // Clean text
    ghost: "border-transparent text-stone-600 hover:text-agro-800 hover:bg-agro-50 rounded-md"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 -mr-1 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};