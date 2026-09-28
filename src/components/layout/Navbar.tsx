import React, { useState, useEffect } from 'react';
import { navigationData } from '../../data/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCollaborateClick?: () => void;
  onNavigate?: (targetId: string) => void;
  isMobileViewport?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCollaborateClick, onNavigate, isMobileViewport }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'content', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock & Escape key dismissal for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollTo = (targetId: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
      return;
    }
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

  return (
    <header
      className={`transition-all duration-300 ${
        isMobileViewport ? 'sticky top-0 z-40 w-full' : 'fixed top-0 left-0 right-0 z-50'
      } ${
        isScrolled || isMobileViewport
          ? 'bg-[#FFFDFB]/95 backdrop-blur-md shadow-xs border-b border-[#E9E3E2] py-3'
          : 'bg-[#FFFDFB]/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="group flex items-center space-x-1 text-2xl font-serif font-bold tracking-tight text-[#171717]"
            aria-label="Mahi Goyal Homepage"
          >
            <span>{navigationData.logo.first}</span>
            <span className="text-[#F27D9B] group-hover:scale-110 inline-block transition-transform duration-200">
              {navigationData.logo.accent}
            </span>
          </a>

          {/* Desktop Navigation (Strictly Home, Content, Projects, Contact) */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#FAF5EF]/90 px-3 lg:px-4 py-1.5 rounded-full border border-[#E9E3E2]/80 shadow-xs"
            aria-label="Primary Navigation"
          >
            {navigationData.navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.targetId)}
                  className={`px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#171717] bg-white shadow-xs font-semibold'
                      : 'text-[#66616A] hover:text-[#171717] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F27D9B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => {
                if (onCollaborateClick) onCollaborateClick();
                else scrollTo('contact');
              }}
              className="inline-flex items-center space-x-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-[#171717] hover:bg-[#F27D9B] text-white text-xs lg:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
              id="nav-collaborate-btn"
            >
              <span>{navigationData.cta.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#FCE7ED]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#FAF5EF] border border-[#E9E3E2] text-[#171717] hover:text-[#F27D9B] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[65px] bg-black/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation-drawer"
            className="md:hidden relative z-50 bg-[#FFFDFB] border-b border-[#E9E3E2] px-6 py-6 shadow-xl max-h-[calc(100dvh-5rem)] overflow-y-auto pb-safe animate-in slide-in-from-top-4 duration-200"
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navigationData.navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.targetId)}
                  className={`text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between min-h-[48px] ${
                    activeSection === item.targetId
                      ? 'bg-[#FCE7ED] text-[#171717] font-semibold'
                      : 'text-[#66616A] hover:bg-[#FAF5EF] hover:text-[#171717]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.targetId && (
                    <span className="w-2 h-2 rounded-full bg-[#F27D9B]" />
                  )}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E9E3E2]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onCollaborateClick) onCollaborateClick();
                    else scrollTo('contact');
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-[#171717] hover:bg-[#F27D9B] text-white text-base font-semibold transition-colors shadow-sm min-h-[48px]"
                >
                  <span>{navigationData.cta.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FCE7ED]" />
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
