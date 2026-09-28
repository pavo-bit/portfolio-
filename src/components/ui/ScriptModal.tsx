import React, { useEffect } from 'react';
import type { ContentItem } from '../../data/content';
import { X, Sparkles, BookOpen, Layers, Users, Image as ImageIcon } from 'lucide-react';

interface ScriptModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const ScriptModal: React.FC<ScriptModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-script-title"
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
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FCE7ED] text-[#F27D9B] border border-[#F27D9B]/30">
                {item.contentType}
              </span>
              <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-white text-[#66616A] border border-[#E9E3E2]">
                {item.category}
              </span>
            </div>
            <h3 id="modal-script-title" className="text-xl sm:text-3xl font-serif font-bold text-[#171717]">
              {item.title}
            </h3>
            {item.brandContext && (
              <p className="text-xs text-[#F27D9B] font-semibold mt-1">
                Context: {item.brandContext}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#FCE7ED] text-[#171717] hover:text-[#F27D9B] border border-[#E9E3E2] transition-colors shadow-xs shrink-0"
            aria-label="Close script modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Hook Highlight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FCE7ED]/50 border border-[#F27D9B]/20">
            <div className="flex items-center space-x-2 text-[#F27D9B] text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Opening Hook (0–3s)</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-[#171717]">
              {item.hook}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF5EF] border border-[#E9E3E2]">
              <div className="flex items-center space-x-1.5 text-[#66616A] font-semibold uppercase tracking-wider mb-1">
                <Layers className="w-3.5 h-3.5 text-[#F27D9B]" />
                <span>My Contribution</span>
              </div>
              <p className="text-[#171717] font-medium">{item.role}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF5EF] border border-[#E9E3E2]">
              <div className="flex items-center space-x-1.5 text-[#66616A] font-semibold uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5 text-[#F27D9B]" />
                <span>Target Audience</span>
              </div>
              <p className="text-[#171717] font-medium">{item.targetAudience}</p>
            </div>
          </div>

          {/* Script Beats Breakdown */}
          {item.scriptLines && item.scriptLines.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase text-[#171717]">
                <BookOpen className="w-4 h-4 text-[#F27D9B]" />
                <span>Script Breakdown & Visual Cues</span>
              </div>

              <div className="space-y-3">
                {item.scriptLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E9E3E2] shadow-xs space-y-2 hover:border-[#F27D9B]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#FAF5EF] text-[#F27D9B] border border-[#E9E3E2]">
                        {line.beat || `Scene ${idx + 1}`}
                      </span>
                      {line.speaker && (
                        <span className="text-xs text-[#66616A] font-medium">
                          Speaker: {line.speaker}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
                      "{line.text}"
                    </p>
                    {line.visualCue && (
                      <p className="text-xs text-[#66616A] italic bg-[#FAF5EF]/60 p-2 rounded-lg border-l-2 border-[#F27D9B]">
                        🎥 Visual Direction: {line.visualCue}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Original Source Document / Handwritten Script Preview */}
          {item.scriptImage && (
            <div className="pt-4 border-t border-[#E9E3E2]">
              <div className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase text-[#171717] mb-3">
                <ImageIcon className="w-4 h-4 text-[#F27D9B]" />
                <span>Original Source Script Reference</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E9E3E2] bg-white shadow-xs p-2">
                <img
                  src={item.scriptImage}
                  alt={`${item.title} handwritten or typed source script document`}
                  className="w-full max-h-[350px] object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E9E3E2] bg-[#FAF5EF]/60 flex items-center justify-between">
          <p className="text-xs text-[#66616A]">
            Verified script concept by Mahi Goyal
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-xs font-semibold transition-colors"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
