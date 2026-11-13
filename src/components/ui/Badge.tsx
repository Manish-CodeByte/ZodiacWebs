import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'amber' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-3.5 py-1 font-medium tracking-wider'
  };

  const variantStyles = {
    orange: 'bg-[#FF7518]/10 text-[#FF7518] border border-[#FF7518]/30 shadow-[0_0_12px_rgba(255,117,24,0.15)]',
    amber: 'bg-[#FFAD33]/10 text-[#FFAD33] border border-[#FFAD33]/30',
    dark: 'bg-[#181818] text-[#B0B0B0] border border-[#282828]',
    outline: 'bg-transparent text-white/90 border border-white/15'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-[#FF7518] animate-pulse" />}
      {children}
    </span>
  );
};
