import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant="orange" dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD33] to-[#FF7518]">
            {highlightText}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#B0B0B0] leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
