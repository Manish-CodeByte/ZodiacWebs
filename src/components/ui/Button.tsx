import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow-pill';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF7518]/50 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#FF7518] to-[#FFAD33] text-black font-semibold shadow-[0_0_20px_rgba(255,117,24,0.35)] hover:shadow-[0_0_28px_rgba(255,173,51,0.5)] hover:brightness-105 border border-white/20',
    secondary: 'bg-[#141414] hover:bg-[#1c1c1c] text-white border border-[#2c2c2c] hover:border-[#FF7518]/50 hover:text-[#FFAD33]',
    outline: 'bg-transparent text-white border border-[#333333] hover:border-[#FF7518] hover:text-[#FF7518] hover:bg-[#FF7518]/5',
    ghost: 'bg-transparent text-muted hover:text-white hover:bg-white/5',
    'glow-pill': 'bg-black/60 backdrop-blur-md text-white border border-[#FF7518]/70 hover:border-[#FFAD33] shadow-[0_0_20px_rgba(255,117,24,0.25)] hover:shadow-[0_0_30px_rgba(255,173,51,0.4)] tracking-wide uppercase font-semibold'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
