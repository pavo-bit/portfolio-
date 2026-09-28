import React from 'react';
import { profileData } from '../../data/profile';
import { navigationData } from '../../data/navigation';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#111111] text-white border-t border-[#222222] pt-16 pb-20 md:pb-12 pb-safe">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-1 text-2xl font-serif font-bold text-white tracking-tight">
              <span>{profileData.wordmarkFirst}</span>
              <span className="text-[#F27D9B]">{profileData.wordmarkLast}</span>
            </div>
            <p className="font-handwriting text-2xl text-[#FCE7ED] max-w-md tracking-wide">
              "{profileData.tagline}"
            </p>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Exploring the creative boundaries of short-form storytelling, digital marketing systems, and technology curiosity.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navigationData.navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.targetId)}
                    className="text-sm text-neutral-300 hover:text-[#F27D9B] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
              Connect Directly
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-[#F27D9B] text-neutral-300 hover:text-white transition-all text-xs font-medium"
                aria-label="Send email to Mahi Goyal"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-[#F27D9B] text-neutral-300 hover:text-white transition-all text-xs font-medium"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-[#F27D9B] text-neutral-300 hover:text-white transition-all text-xs font-medium"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-[#F27D9B] text-neutral-300 hover:text-white transition-all text-xs font-medium"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="text-xs text-neutral-500 pt-2">
              Based in {profileData.contact.location} • Available for collaborations
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center space-x-1.5">
            <span>© {currentYear} {profileData.name}. Designed & Built with care</span>
            <Heart className="w-3.5 h-3.5 text-[#F27D9B] inline fill-[#F27D9B]" />
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors py-1 px-2.5 rounded-md hover:bg-neutral-800"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
