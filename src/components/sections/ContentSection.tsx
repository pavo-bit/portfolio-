import React, { useState } from 'react';
import { contentData } from '../../data/content';
import type { ContentItem } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { ScriptModal } from '../ui/ScriptModal';
import { Sparkles, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<ContentItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? contentData.items
    : contentData.items.filter(item => item.category === selectedCategory);

  return (
    <section id="content" className="py-20 lg:py-28 bg-[#FFFDFB] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            label={contentData.sectionLabel}
            heading={contentData.heading}
            subheading={contentData.subheading}
          />

          {/* Minimal Category Filter Tabs with Mobile Horizontal Swipe */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap" role="tablist" aria-label="Content Categories">
            {contentData.categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#171717] text-white shadow-xs'
                    : 'bg-[#FAF5EF] text-[#66616A] hover:bg-[#FCE7ED] hover:text-[#171717] border border-[#E9E3E2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Media Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={`rounded-3xl border border-[#E9E3E2] bg-white overflow-hidden shadow-xs hover:shadow-card transition-all duration-300 flex flex-col group hover:-translate-y-1 ${
                item.featured ? 'md:col-span-2 lg:col-span-1 border-[#F27D9B]/30' : ''
              }`}
            >
              {/* Top Banner / Script Visual Peek */}
              <div className="relative aspect-[16/10] bg-[#FAF5EF] border-b border-[#E9E3E2] p-5 flex flex-col justify-between overflow-hidden">
                {/* Badge tags */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-[#F27D9B] border border-[#E9E3E2] shadow-2xs">
                    {item.contentType}
                  </span>
                  {item.featured && (
                    <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FCE7ED] text-[#F27D9B]">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Concept</span>
                    </span>
                  )}
                </div>

                {/* Opening Hook Preview */}
                <div className="my-auto z-10">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#66616A] mb-1">
                    Opening Hook
                  </p>
                  <blockquote className="font-serif italic text-base sm:text-lg text-[#171717] leading-snug line-clamp-3">
                    {item.hook}
                  </blockquote>
                </div>

                {/* Subtle visual script lines graphic */}
                <div className="space-y-1.5 opacity-25 pointer-events-none" aria-hidden="true">
                  <div className="h-1.5 bg-[#66616A] rounded-full w-3/4" />
                  <div className="h-1.5 bg-[#66616A] rounded-full w-full" />
                  <div className="h-1.5 bg-[#66616A] rounded-full w-1/2" />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#171717]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/95 text-[#171717] text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <FileText className="w-3.5 h-3.5 text-[#F27D9B]" />
                    <span>Click to read full breakdown</span>
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#171717] group-hover:text-[#F27D9B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66616A] mt-2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E9E3E2]/60 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#66616A]">
                    <span className="font-medium">Target: {item.targetAudience}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-semibold text-[#F27D9B] bg-[#FCE7ED] px-2.5 py-1 rounded-md">
                      {item.role.split(',')[0]}
                    </span>

                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#171717] hover:text-[#F27D9B] transition-colors py-2 px-3 rounded-xl hover:bg-[#FAF5EF] active:bg-[#FCE7ED] min-h-[44px]"
                      aria-label={`View full details for ${item.title}`}
                    >
                      <span>Read Script</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF5EF] border border-[#E9E3E2] flex items-start sm:items-center space-x-3 text-xs text-[#66616A]">
          <CheckCircle2 className="w-4 h-4 text-[#F27D9B] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#171717]">Content Integrity:</strong> All scripts and concepts presented above are original work, creative samples, and exploratory treatments developed by Mahi Goyal based on verified research.
          </p>
        </div>

      </div>

      {/* Script Reader Modal */}
      <ScriptModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </section>
  );
};
