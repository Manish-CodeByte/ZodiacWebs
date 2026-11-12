import React from 'react';

export default function GlowingZLogo({ size = 48, className = "", alt = "Zodiac Webs Logo" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none rounded-full group ${className}`}
      style={{ width: size, height: size }}
      aria-label="Zodiac Webs Logo"
    >
      {/* Outer ambient glow ring */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B00] via-[#FFD700] to-[#FF6B00] opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-75"
        aria-hidden="true"
      />

      {/* Official Zodiac Webs Logo Image */}
      <img
        src="/logo.jpg"
        alt={alt}
        width={size}
        height={size}
        className="relative z-10 w-full h-full rounded-full object-cover border border-[#FF6B00]/40 shadow-lg shadow-black/80 transition-transform duration-300 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
}
