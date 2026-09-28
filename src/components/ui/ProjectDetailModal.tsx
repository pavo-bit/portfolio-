import React, { useEffect } from 'react';
import type { TechnicalProject } from '../../data/projects';
import { X, Code2, CheckCircle2, Target, Cpu, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: TechnicalProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card (iOS Sheet on mobile, Dialog on desktop) */}
      <div className="relative bg-[#FFFDFB] rounded-t-[32px] sm:rounded-3xl max-w-3xl w-full max-h-[90vh] sm:max-h-[88vh] overflow-hidden shadow-2xl border border-[#E9E3E2] z-10 flex flex-col my-0 sm:my-auto animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-250">
        
        {/* Mobile Pull Handle Indicator */}
        <div className="pt-3 pb-1 sm:hidden flex justify-center bg-[#FAF5EF]/80">
          <div className="w-12 h-1.5 rounded-full bg-[#D1C7C5]" />
        </div>

        {/* Header */}
        <div className="p-5 sm:p-8 border-b border-[#E9E3E2] bg-[#FAF5EF]/80 flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${project.badgeColor}`}>
                {project.status}
              </span>
              <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-white text-[#66616A] border border-[#E9E3E2]">
                {project.category}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-3xl font-serif font-bold text-[#171717]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#FCE7ED] text-[#171717] hover:text-[#F27D9B] border border-[#E9E3E2] transition-colors shadow-xs shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#66616A] flex items-center space-x-1.5">
              <Code2 className="w-4 h-4 text-[#F27D9B]" />
              <span>Project Overview</span>
            </h4>
            <p className="text-base text-[#171717] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Objective */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF5EF] border border-[#E9E3E2]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F27D9B] flex items-center space-x-1.5 mb-1.5">
              <Target className="w-4 h-4" />
              <span>Core Objective</span>
            </h4>
            <p className="text-sm sm:text-base text-[#171717]">
              {project.objective}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#66616A] flex items-center space-x-1.5 mb-3">
              <Cpu className="w-4 h-4 text-[#F27D9B]" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E9E3E2] text-xs font-semibold text-[#171717] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-xl bg-white border border-[#E9E3E2] shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#66616A] mb-1">
              Mahi's Role & Contribution
            </h4>
            <p className="text-sm text-[#171717] leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#66616A]">
                Key Highlights & Capabilities
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#F27D9B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E9E3E2] bg-[#FAF5EF]/60 flex items-center justify-between">
          <p className="text-xs text-[#66616A]">
            Technical dimension of Mahi Goyal's portfolio
          </p>
          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#FCE7ED] text-[#F27D9B] hover:bg-[#F27D9B] hover:text-white transition-colors text-xs font-semibold"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
