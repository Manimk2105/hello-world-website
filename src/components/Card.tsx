import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-[hsl(var(--card))] retro-border retro-shadow-large p-8 ${className}`}>
      {title && (
        <div className="border-b-2 border-[hsl(var(--border))] pb-4 mb-6">
          <h3 className="text-2xl font-black uppercase tracking-tighter">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};
