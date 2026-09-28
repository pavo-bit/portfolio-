import React from 'react';
import { marketingData } from '../../data/marketing';
import { SectionHeading } from '../ui/SectionHeading';
import { Share2, Calendar, Sparkles, Users, CheckCircle, Lightbulb, Compass } from 'lucide-react';

export const MarketingSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return <Share2 className="w-5 h-5 text-[#F27D9B]" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-[#F27D9B]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#F27D9B]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#F27D9B]" />;
      default: return <Compass className="w-5 h-5 text-[#F27D9B]" />;
    }
  };

  return (
    <section id="marketing" className="py-20 lg:py-28 bg-[#FAF5EF]/70 border-y border-[#E9E3E2] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Strategic Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <SectionHeading
              label={marketingData.sectionLabel}
              heading={marketingData.heading}
              subheading={marketingData.subheading}
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#E9E3E2] shadow-soft space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#F27D9B]">
              <Lightbulb className="w-4 h-4" />
              <span>Strategic Framework</span>
            </div>
            <p className="text-base text-[#171717] leading-relaxed">
              {marketingData.introduction}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#66616A]">
              <span className="bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E9E3E2]">
                Audience Persona Research
              </span>
              <span className="bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E9E3E2]">
                Algorithm Pacing
              </span>
              <span className="bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E9E3E2]">
                Retention Optimization
              </span>
            </div>
          </div>
        </div>

        {/* Part B — 4 Compact Capability Blocks */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#66616A] mb-6 text-center">
            Core Strategic Capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingData.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-6 rounded-3xl bg-white border border-[#E9E3E2] shadow-xs hover:border-[#F27D9B]/50 transition-all hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#FCE7ED] flex items-center justify-center mb-4">
                    {getIcon(cap.iconName)}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#171717] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#66616A] leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E9E3E2]/60 space-y-1.5">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-[#66616A]">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1 text-xs text-[#171717]">
                    {cap.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#F27D9B]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part C — Featured Strategic Work / Planning Examples */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F27D9B] bg-[#FCE7ED] px-3.5 py-1 rounded-full">
              Planning & Case Study Deep-Dives
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#171717] mt-3">
              How Strategy Drives the Story
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketingData.caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E9E3E2] shadow-soft space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FCE7ED] text-[#F27D9B] border border-[#F27D9B]/30">
                      {cs.badge}
                    </span>
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-[#171717]">
                    {cs.title}
                  </h4>

                  {/* Context & Approach */}
                  <div className="space-y-3 text-sm text-[#171717]">
                    <div className="p-3.5 rounded-xl bg-[#FAF5EF] border border-[#E9E3E2]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#66616A] mb-1">
                        Context & Market Friction
                      </p>
                      <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                        {cs.context}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#E9E3E2]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#F27D9B] mb-1">
                        Strategic Approach
                      </p>
                      <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                        {cs.approach}
                      </p>
                    </div>
                  </div>

                  {/* Contribution & Deliverable */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF5EF]/80 border border-[#E9E3E2]">
                      <span className="font-bold uppercase tracking-wider text-[#66616A] block mb-1">
                        My Contribution
                      </span>
                      <p className="text-[#171717]">{cs.contribution}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF5EF]/80 border border-[#E9E3E2]">
                      <span className="font-bold uppercase tracking-wider text-[#66616A] block mb-1">
                        Final Deliverable
                      </span>
                      <p className="text-[#171717]">{cs.deliverable}</p>
                    </div>
                  </div>
                </div>

                {/* Key Learning & Tags */}
                <div className="pt-4 border-t border-[#E9E3E2] space-y-3">
                  <div className="flex items-start space-x-2 text-xs text-[#171717] bg-[#FCE7ED]/40 p-3 rounded-xl border border-[#F27D9B]/20">
                    <CheckCircle className="w-4 h-4 text-[#F27D9B] shrink-0 mt-0.5" />
                    <p>
                      <strong>Key Insight:</strong> {cs.keyLearning}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-[#FAF5EF] text-[11px] font-medium text-[#66616A] border border-[#E9E3E2]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
