import React from 'react';
import { profileData } from '../../data/profile';
import { PortraitFrame } from '../ui/PortraitFrame';
import { ArrowDown, Sparkles, Video, Share2, Code2, ArrowUpRight, MessageSquareHeart } from 'lucide-react';

interface HeroSectionProps {
  onViewWorkClick?: () => void;
  onCollaborateClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewWorkClick,
  onCollaborateClick
}) => {
  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 sm:pt-28 pb-16 lg:py-24 bg-gradient-to-b from-[#FFFDFB] via-[#FFFDFB] to-[#FAF5EF]/70 overflow-hidden w-full"
    >
      {/* Subtle atmospheric pastel background blobs with viewport constraints */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[min(700px,95vw)] h-[min(450px,70vh)] bg-gradient-to-tr from-[#FCE7ED]/50 via-[#DCEEFF]/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-0 w-[min(400px,80vw)] h-[min(300px,50vh)] bg-[#FCE7ED]/40 rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Responsive Grid: Stacks cleanly on mobile, 2-column + bottom row on tablet, 3-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Identity, Headline, Handwritten statement, Description, CTAs */}
          <div className="col-span-1 md:col-span-7 lg:col-span-5 space-y-5 text-left order-1">
            {/* Identity Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF5EF] border border-[#E9E3E2] text-xs font-semibold tracking-wider text-[#66616A] uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F27D9B] animate-pulse" />
              <span>{profileData.identityLabel}</span>
            </div>

            {/* Oversized Headline with fluid clamp sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-extrabold tracking-tight text-[#171717] leading-[1.12] sm:leading-[1.08] break-words">
              {profileData.wordmarkFirst}{' '}
              <span className="text-[#F27D9B] underline decoration-[#FCE7ED] decoration-wavy decoration-2 inline-block">
                {profileData.wordmarkLast}
              </span>
            </h1>

            {/* Handwritten Brand Statement */}
            <div className="relative pl-1">
              <p className="font-handwriting text-xl sm:text-2xl md:text-3xl text-[#F27D9B] tracking-wide leading-snug">
                "{profileData.tagline}"
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#66616A] leading-relaxed max-w-lg">
              {profileData.heroBio}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  if (onViewWorkClick) onViewWorkClick();
                  else scrollTo('content');
                }}
                className="inline-flex items-center justify-center space-x-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
                id="hero-view-work-btn"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#FCE7ED]" />
              </button>

              <button
                onClick={() => {
                  if (onCollaborateClick) onCollaborateClick();
                  else scrollTo('contact');
                }}
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF5EF] text-[#171717] hover:text-[#F27D9B] border border-[#E9E3E2] text-sm sm:text-base font-semibold transition-all duration-200 shadow-xs hover:shadow-md min-h-[48px]"
                id="hero-collaborate-btn"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4 text-[#F27D9B]" />
              </button>
            </div>

            {/* Quick trust pill */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#66616A]">
              <span className="flex items-center space-x-1.5 bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E9E3E2]">
                <Sparkles className="w-3.5 h-3.5 text-[#F27D9B]" />
                <span>Scripting • Reels • UGC • Tech</span>
              </span>
              <span className="text-neutral-400">•</span>
              <span>Open for freelance & brand campaigns</span>
            </div>
          </div>

          {/* CENTER COLUMN: Central Portrait Placeholder with Editorial / Polaroid Frame */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex items-center justify-center order-2">
            <PortraitFrame
              imageSrc={profileData.portraitConfig.primaryImage}
              alt={profileData.portraitConfig.altText}
              mode={profileData.portraitConfig.type}
              caption="hi, I'm Mahi ✨"
              tiltDirection="right"
            />
          </div>

          {/* RIGHT COLUMN: What She Does & Professional Highlights */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3 space-y-4 text-left order-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-3">
              {/* Mini Personal Brand Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E9E3E2] shadow-soft relative overflow-hidden flex flex-col justify-between">
                <div className="w-1.5 h-full bg-[#F27D9B] absolute left-0 top-0" />
                <p className="text-xs uppercase tracking-widest font-semibold text-[#F27D9B] mb-1.5 flex items-center space-x-1.5">
                  <MessageSquareHeart className="w-3.5 h-3.5 shrink-0" />
                  <span>Philosophy</span>
                </p>
                <p className="text-xs sm:text-sm text-[#171717] font-serif italic leading-relaxed">
                  "{profileData.personalQuote}"
                </p>
              </div>

              {/* Focus 1: UGC */}
              <div className="p-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#E9E3E2] transition-all hover:border-[#F27D9B]/50 hover:shadow-xs flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#FCE7ED] text-[#F27D9B] flex items-center justify-center shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#171717]">UGC & Short-form Reels</h3>
                  <p className="text-[11px] text-[#66616A]">Hooks, scripts & video storytelling</p>
                </div>
              </div>

              {/* Focus 2: Strategy */}
              <div className="p-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#E9E3E2] transition-all hover:border-[#F27D9B]/50 hover:shadow-xs flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF5EF] text-[#171717] border border-[#E9E3E2] flex items-center justify-center shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#171717]">Social Media Strategy</h3>
                  <p className="text-[11px] text-[#66616A]">Content pillars & audience research</p>
                </div>
              </div>

              {/* Focus 3: Tech */}
              <div className="p-3.5 rounded-xl bg-white/80 hover:bg-white border border-[#E9E3E2] transition-all hover:border-[#F27D9B]/50 hover:shadow-xs flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-[#DCEEFF] text-blue-700 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#171717]">Technology Curiosity</h3>
                  <p className="text-[11px] text-[#66616A]">Computer science, AI & web projects</p>
                </div>
              </div>
            </div>

            {/* Editorial stamp */}
            <div className="pt-1 px-1 flex items-center justify-between text-[11px] text-[#66616A]">
              <span>Verified Creator Portfolio</span>
              <span className="font-mono text-[#F27D9B]">Edition 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
