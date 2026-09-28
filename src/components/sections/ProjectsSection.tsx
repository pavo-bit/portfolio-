import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import type { TechnicalProject } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { Code2, ArrowUpRight, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<TechnicalProject | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData.items
    : projectsData.items.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FFFDFB] relative">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label={projectsData.sectionLabel}
            heading={projectsData.heading}
            subheading={projectsData.subheading}
          />

          {/* Category Tabs with Mobile Horizontal Swipe */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap" role="tablist" aria-label="Project Categories">
            {projectsData.categories.map((cat) => (
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

        {/* Technical Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E9E3E2] shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with status and category */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${project.badgeColor}`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-[#66616A] font-medium bg-[#FAF5EF] px-3 py-1 rounded-full border border-[#E9E3E2]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-[#171717] group-hover:text-[#F27D9B] transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#66616A] leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF5EF] text-xs font-medium text-[#171717] border border-[#E9E3E2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-[#E9E3E2]/60 flex items-center justify-between">
                <span className="text-xs text-[#66616A] line-clamp-1 pr-2">
                  Role: {project.myContribution.split(',')[0]}
                </span>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-xs font-semibold transition-colors shrink-0 shadow-xs"
                  aria-label={`View full details for ${project.title}`}
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Analytical Differentiator Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FAF5EF] to-[#FCE7ED]/40 border border-[#E9E3E2] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F27D9B] flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4" />
              <span>The Technical Advantage</span>
            </span>
            <h4 className="text-xl font-serif font-bold text-[#171717]">
              Bridging Creative Storytelling with Computational Rigor
            </h4>
            <p className="text-xs sm:text-sm text-[#66616A] max-w-2xl">
              Having tackled the analytical intensity of JEE, I bring structured thinking to marketing funnels, data interpretation, and modern software development workflows.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#E9E3E2] text-xs font-semibold text-[#171717] shadow-xs">
              <Code2 className="w-4 h-4 text-[#F27D9B]" />
              <span>Full-Stack & AI Learning</span>
            </span>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
