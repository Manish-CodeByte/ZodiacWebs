import React from 'react';

export default function GlowingZLogo({ size = 48, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Zodiac Webs glowing Z logo"
    >
      {/* Background glow halo */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FF6B00] via-[#FFD700] to-[#FF6B00] opacity-40 blur-lg animate-pulse-glow"
        aria-hidden="true"
      />

      {/* SVG Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(255,107,0,0.7)]"
      >
        <defs>
          <linearGradient id="zGradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="60%" stopColor="#FFAA00" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          <linearGradient id="zGradFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.05" />
          </linearGradient>
          <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer geometric badge */}
        <polygon
          points="50,4 92,26 92,74 50,96 8,74 8,26"
          fill="url(#zGradFill)"
          stroke="url(#zGradStroke)"
          strokeWidth="2.5"
          strokeOpacity="0.6"
          strokeLinejoin="round"
        />

        {/* Glowing Z character path */}
        <path
          d="M32 32 H68 L36 68 H70"
          stroke="url(#zGradStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#neonBlur)"
        />

        {/* Constellation accent dots */}
        <circle cx="50" cy="18" r="2.5" fill="#FFD700" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="78" cy="62" r="2" fill="#FF6B00" />
        <circle cx="24" cy="48" r="2" fill="#FFD700" />
      </svg>
    </div>
  );
}
