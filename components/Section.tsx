import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ className = '', children, id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};