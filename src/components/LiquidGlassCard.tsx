import React, { ReactNode } from 'react';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function LiquidGlassCard({
  children,
  className = '',
  onClick,
  hover = true
}: LiquidGlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        transition-all duration-500
        ${hover ? 'hover:border-[#ffda75]/30 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(255,218,117,0.2)] cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#ffda75] opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
