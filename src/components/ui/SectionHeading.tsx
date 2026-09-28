import React from 'react';

interface SectionHeadingProps {
  label: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  heading,
  subheading,
  centered = false,
  dark = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Category / Section Identifier Badge */}
      <div className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 ${
        dark
          ? 'bg-neutral-800 text-[#F27D9B] border border-neutral-700'
          : 'bg-[#FCE7ED] text-[#F27D9B] border border-[#F27D9B]/20'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D9B]" />
        <span>{label}</span>
      </div>

      {/* Main Serif Heading */}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-[1.15] mb-4 ${
        dark ? 'text-white' : 'text-[#171717]'
      }`}>
        {heading}
      </h2>

      {/* Subheading / Description */}
      {subheading && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-neutral-300' : 'text-[#66616A]'
        }`}>
          {subheading}
        </p>
      )}
    </div>
  );
};
