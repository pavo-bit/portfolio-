import React, { useState, useEffect } from 'react';
import { Home, User, Film, Compass, Send } from 'lucide-react';

interface MobileBottomDockProps {
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  onNavigate?: (targetId: string) => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({
  scrollContainerRef,
  onNavigate
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [dockVisible, setDockVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'content', label: 'Work', icon: Film },
    { id: 'marketing', label: 'Strategy', icon: Compass },
    { id: 'contact', label: 'Connect', icon: Send }
  ];

  useEffect(() => {
    const container = scrollContainerRef?.current;
    const target = container || window;

    const handleScroll = () => {
      const currentScrollY = container ? container.scrollTop : window.scrollY;

      // Subtle hide on fast scroll down, reveal on scroll up
      if (currentScrollY > 100 && currentScrollY > lastScrollY + 20) {
        setDockVisible(false);
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 150) {
        setDockVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section spy
      const sections = ['hero', 'about', 'content', 'marketing', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'projects' ? 'content' : sectionId);
            break;
          }
        }
      }
    };

    target.addEventListener('scroll', handleScroll, { passive: true });
    return () => target.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef, lastScrollY]);

  const handleItemClick = (targetId: string) => {
    if (onNavigate) {
      onNavigate(targetId);
      return;
    }

    const container = scrollContainerRef?.current;
    const el = document.getElementById(targetId);
    if (el) {
      if (container) {
        container.scrollTo({
          top: el.offsetTop - 70,
          behavior: 'smooth'
        });
      } else {
        const navOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[360px] transition-all duration-300 pointer-events-auto ${
        dockVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="bg-white/90 backdrop-blur-xl border border-[#E9E3E2]/80 shadow-[0_10px_35px_rgba(23,23,23,0.12)] rounded-full px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-[#F27D9B] font-semibold scale-105'
                  : 'text-[#66616A] hover:text-[#171717]'
              }`}
              aria-label={`Jump to ${item.label} section`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-[#FCE7ED]/80 rounded-full -z-10 animate-in fade-in zoom-in-90 duration-150" />
              )}
              <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] mt-0.5 tracking-tight font-medium leading-none">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#F27D9B] mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
