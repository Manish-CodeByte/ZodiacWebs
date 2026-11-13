import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  hover = true
}) => {
  return (
    <div
      className={`
        relative bg-[#111111] border rounded-2xl p-6 sm:p-8 
        ${glow ? 'border-[#FF7518]/30 shadow-[0_0_25px_rgba(255,117,24,0.12)]' : 'border-[#222222]'}
        ${hover ? 'transition-all duration-300 hover:border-[#FF7518]/50 hover:shadow-[0_12px_35px_-10px_rgba(255,117,24,0.18)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
