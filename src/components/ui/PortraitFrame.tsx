import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface PortraitFrameProps {
  imageSrc?: string;
  alt?: string;
  mode?: '2d-image' | 'cutout' | '3d-placeholder';
  className?: string;
  caption?: string;
  tiltDirection?: 'left' | 'right' | 'none';
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({
  imageSrc = '/images/mahi/mahi_hero_vintage.png',
  alt = 'Portrait of Mahi Goyal',
  mode = '2d-image',
  className = '',
  caption = "hi, I'm Mahi ✨",
  tiltDirection = 'right'
}) => {
  const [imageError, setImageError] = useState(false);

  const tiltClass = {
    right: 'rotate-2 hover:rotate-0',
    left: '-rotate-2 hover:rotate-0',
    none: 'rotate-0'
  }[tiltDirection];

  return (
    <div className={`relative mx-auto w-full max-w-[270px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] transition-all duration-500 ease-out group ${tiltClass} ${className}`}>
      {/* Decorative Washi Tape on top */}
      <div 
        className="washi-tape top-[-10px] left-1/2 -translate-x-1/2 w-28 rounded-xs transform -rotate-1 opacity-90 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Decorative floating heart */}
      <div className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#F27D9B] animate-bounce-subtle pointer-events-none">
        <Heart className="w-4 h-4 fill-[#F27D9B]" />
      </div>

      {/* Decorative floating sparkle */}
      <div className="absolute -bottom-2 -left-3 z-20 w-7 h-7 rounded-full bg-[#FAF5EF] border border-[#E9E3E2] shadow-xs flex items-center justify-center text-[#F27D9B] pointer-events-none">
        <Sparkles className="w-3.5 h-3.5" />
      </div>

      {/* Polaroid / Editorial Card Container */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-polaroid border border-[#E9E3E2]/80 transition-shadow duration-300 group-hover:shadow-2xl">
        {/* Inner Frame */}
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#FAF5EF] border border-[#E9E3E2]/50 flex items-center justify-center">
          {mode === '3d-placeholder' ? (
            /* Future 3D Canvas Slot (Placeholder with graceful 2D fallback) */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FAF5EF] to-[#FCE7ED]/40">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[#F27D9B] mb-3">
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F27D9B] mb-1">
                Interactive 3D Portal
              </p>
              <p className="text-xs text-[#66616A] max-w-[200px]">
                Reserved 3D model slot. Seamless 2D fallback active.
              </p>
            </div>
          ) : !imageError && imageSrc ? (
            /* 2D Portrait or Cutout */
            <img
              src={imageSrc}
              alt={alt}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                mode === 'cutout' ? 'object-contain' : ''
              }`}
              loading="eager"
            />
          ) : (
            /* Refined Neutral Silhouette Placeholder (When photo is unavailable or failing) */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FAF5EF] to-[#FCE7ED]/30">
              <div className="w-24 h-24 rounded-full bg-[#FCE7ED] border-2 border-white shadow-inner flex items-center justify-center text-[#F27D9B] mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <p className="font-serif text-lg font-bold text-[#171717]">Mahi Goyal</p>
              <p className="text-xs text-[#66616A] mt-1">Portrait Slot</p>
            </div>
          )}

          {/* Subtle vignette gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Polaroid Bottom Margin with Handwritten Note */}
        <div className="pt-3.5 pb-1 px-1 flex items-center justify-between">
          <span className="font-handwriting text-2xl text-[#171717] tracking-wide">
            {caption}
          </span>
          <span className="text-[10px] tracking-widest font-mono uppercase text-[#66616A] bg-[#FAF5EF] px-2 py-0.5 rounded-full border border-[#E9E3E2]">
            Editorial
          </span>
        </div>
      </div>
    </div>
  );
};
