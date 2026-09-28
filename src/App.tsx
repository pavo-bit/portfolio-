import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContentSection } from './components/sections/ContentSection';
import { MarketingSection } from './components/sections/MarketingSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ViewportSimulator } from './components/layout/ViewportSimulator';

export const App: React.FC = () => {
  return (
    <ViewportSimulator>
      {({ isMobileViewport, scrollContainerRef }) => {
        const scrollTo = (targetId: string) => {
          if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const el = container.querySelector('#' + targetId) as HTMLElement;
            if (el) {
              const navOffset = 60;
              container.scrollTo({
                top: el.offsetTop - navOffset,
                behavior: 'smooth'
              });
            }
            return;
          }

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
          <div className="min-h-[100dvh] bg-[#FFFDFB] text-[#171717] flex flex-col selection:bg-[#FCE7ED] selection:text-[#171717] relative">
            {/* Approved Sticky Navigation */}
            <Navbar
              onCollaborateClick={() => scrollTo('contact')}
              onNavigate={scrollTo}
              isMobileViewport={isMobileViewport}
            />

            {/* Main Content Sections (Strictly in requested order 01 to 06) */}
            <main className="flex-1 w-full" id="main-content">
              {/* 01. Hero */}
              <HeroSection
                onViewWorkClick={() => scrollTo('content')}
                onCollaborateClick={() => scrollTo('contact')}
              />

              {/* 02. About Mahi */}
              <AboutSection onExploreWorkClick={() => scrollTo('content')} />

              {/* 03. Content Creation */}
              <ContentSection />

              {/* 04. Marketing and Strategy */}
              <MarketingSection />

              {/* 05. Projects and Technology */}
              <ProjectsSection />

              {/* 06. Contact */}
              <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        );
      }}
    </ViewportSimulator>
  );
};

export default App;
