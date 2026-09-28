import React from 'react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Award, Film, Target, Code, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreWorkClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreWorkClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#F27D9B]" />;
      case 'Film': return <Film className="w-5 h-5 text-[#F27D9B]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#F27D9B]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#F27D9B]" />;
      default: return <Award className="w-5 h-5 text-[#F27D9B]" />;
    }
  };

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
    <section id="about" className="py-20 lg:py-28 bg-[#FAF5EF]/50 border-y border-[#E9E3E2]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Alternate Editorial Visual & Personal Note */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-[290px] xs:max-w-[340px] sm:max-w-[400px]">
              {/* Tape accent */}
              <div 
                className="washi-tape -top-3 left-8 w-24 rounded-xs transform rotate-2 opacity-80" 
                aria-hidden="true" 
              />
              
              {/* Photo Frame */}
              <div className="bg-white p-3.5 sm:p-4 rounded-3xl shadow-polaroid border border-[#E9E3E2] -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF5EF]">
                  <img
                    src={profileData.portraitConfig.aboutImage}
                    alt="Mahi Goyal speaking at event"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between">
                  <span className="font-handwriting text-xl text-[#171717]">
                    speaking & connecting ~
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#F27D9B] bg-[#FCE7ED] px-2 py-0.5 rounded-full">
                    Speaker
                  </span>
                </div>
              </div>

              {/* Hand-annotated floating stamp for tablet/desktop */}
              <div className="absolute -bottom-6 -right-4 bg-white p-3.5 rounded-2xl shadow-card border border-[#E9E3E2] max-w-[210px] hidden sm:block">
                <p className="font-handwriting text-lg text-[#F27D9B] leading-tight">
                  "Cleared JEE & pursuing creativity without limits."
                </p>
              </div>
            </div>

            {/* Mobile-friendly inline quote badge (never overflows screen) */}
            <div className="sm:hidden max-w-[290px] mx-auto bg-white p-3 rounded-2xl border border-[#E9E3E2] shadow-xs text-center">
              <p className="font-handwriting text-base text-[#F27D9B]">
                "Cleared JEE & pursuing creativity without limits."
              </p>
            </div>

            {/* Quick Skills Pills */}
            <div className="pt-2 sm:pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#66616A] mb-3 text-center sm:text-left">
                Favorite Creative Tools
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {profileData.skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#E9E3E2] text-xs font-medium text-[#171717] shadow-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Section Label, Heading, Paragraphs, Highlight Cards, CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <SectionHeading
              label="ABOUT ME"
              heading={profileData.aboutMe.heading}
              subheading={profileData.aboutMe.subheading}
            />

            {/* 4 Clean Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#66616A] leading-relaxed">
              {profileData.aboutMe.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Compact Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {profileData.aboutMe.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#E9E3E2] shadow-xs hover:border-[#F27D9B]/50 transition-all hover:shadow-soft"
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <div className="p-2 rounded-lg bg-[#FCE7ED]/70">
                      {getIcon(item.iconName)}
                    </div>
                    <h3 className="text-sm font-bold text-[#171717]">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-[#66616A] leading-normal pl-9">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contextual CTA to Work */}
            <div className="pt-4">
              <button
                onClick={() => {
                  if (onExploreWorkClick) onExploreWorkClick();
                  else scrollTo('content');
                }}
                className="group inline-flex items-center space-x-2 text-sm font-bold text-[#171717] hover:text-[#F27D9B] transition-colors"
              >
                <span>Explore my content creation samples</span>
                <ArrowRight className="w-4 h-4 text-[#F27D9B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
