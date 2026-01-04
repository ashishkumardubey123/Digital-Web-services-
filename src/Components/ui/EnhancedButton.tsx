import React from 'react';
import { Phone, Sparkles, ArrowRight, Zap, PhoneCall } from 'lucide-react';

interface EnhancedButtonProps {
  variant?: 'primary' | 'glow' | 'minimal' | 'glass' | 'cta';
  phoneNumber: string;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({ 
  variant = 'primary', 
  phoneNumber 
}) => {
  
  // 0. The "Ultimate CTA" Version (Requested Fix)
  // Features: High visibility, pulse animation, clear iconography
  if (variant === 'cta') {
    return (
      <a
        href={`tel:${phoneNumber}`}
        className="
          group relative inline-flex items-center gap-3 px-8 py-3 rounded-full
          bg-gradient-to-r from-violet-600 to-indigo-600
          text-white font-bold text-lg tracking-wide
          shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)]
          border border-violet-500/50
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(124,58,237,0.6)]
          hover:-translate-y-1
          active:scale-95
        "
      >
        {/* Pulse Indicator (Always active to show availability) */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
        </span>

        {/* Text Content */}
        <span>{phoneNumber}</span>

        {/* Animated Icon */}
        <PhoneCall className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
        
        {/* Shine effect overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
             <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.75s_ease-in-out_1]" />
        </div>
      </a>
    );
  }

  // 1. The "Primary" Enhanced Version (Best for general use)
  if (variant === 'primary') {
    return (
      <a
        href={`tel:${phoneNumber}`}
        className="
          group relative inline-flex items-center justify-center
          px-6 py-2.5 overflow-hidden rounded-full
          bg-gradient-to-r from-purple-900 via-fuchsia-950 to-purple-600
          bg-[length:200%_auto]
          text-white font-medium shadow-lg shadow-purple-500/30
          transition-all duration-300 ease-out
          hover:scale-[1.03] hover:shadow-purple-500/50 hover:bg-right
        "
      >
        <span className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        <Phone className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        <span className="tracking-wide">{phoneNumber}</span>
      </a>
    );
  }

  // 2. The "Glow" Version (High attention)
  if (variant === 'glow') {
    return (
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href={`tel:${phoneNumber}`}
          className="relative inline-flex items-center justify-center px-6 py-2.5 text-white transition-all duration-200 bg-gray-900 font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          <Zap className="w-4 h-4 mr-2 text-fuchsia-400 group-hover:text-yellow-300 transition-colors" />
          <span>{phoneNumber}</span>
        </a>
      </div>
    );
  }

  // 3. The "Glass" Version (Modern, Subtle)
  if (variant === 'glass') {
    return (
      <a
        href={`tel:${phoneNumber}`}
        className="
          relative inline-flex items-center px-6 py-2.5 rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
          text-white font-medium
          transition-all duration-300
          hover:bg-white/20 hover:border-purple-300/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
          group
        "
      >
        <span className="relative flex h-2 w-2 mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        {phoneNumber}
        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </a>
    );
  }

  // Fallback / Minimal
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-400 transition-colors"
    >
      <Phone className="w-5 h-5" />
      {phoneNumber}
    </a>
  );
};
