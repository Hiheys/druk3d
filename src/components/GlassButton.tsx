import React, { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function GlassButton({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: GlassButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className={`
          group relative overflow-hidden rounded-xl
          bg-[#ffda75] px-8 py-4
          font-semibold text-black
          shadow-[0_8px_32px_0_rgba(255,218,117,0.3)]
          transition-all duration-300
          hover:bg-[#e6c05a]
          hover:shadow-[0_8px_48px_0_rgba(255,218,117,0.5)]
          hover:scale-105
          ${className}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-xl
        border border-white/20
        bg-white/5 backdrop-blur-xl
        px-8 py-4
        font-semibold text-white
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        transition-all duration-300
        hover:border-[#ffda75]/30
        hover:bg-white/10
        hover:shadow-[0_8px_32px_0_rgba(255,218,117,0.2)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
