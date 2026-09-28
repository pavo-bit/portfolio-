import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Monitor, RotateCw, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import { MobileBottomDock } from './MobileBottomDock';

interface ViewportSimulatorProps {
  children: (props: { isMobileViewport: boolean; scrollContainerRef: React.RefObject<HTMLDivElement | null> }) => React.ReactNode;
}

export const ViewportSimulator: React.FC<ViewportSimulatorProps> = ({ children }) => {
  // Mobile viewport toggle state
  const [isMobileMode, setIsMobileMode] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0.92);
  const [currentTime, setCurrentTime] = useState<string>('9:41');
  const [isUserOnSmallScreen, setIsUserOnSmallScreen] = useState<boolean>(false);
  const phoneContainerRef = useRef<HTMLDivElement | null>(null);

  // Detect if actual device is already a small mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsUserOnSmallScreen(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Update mock iOS status bar time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Dimensions for iPhone 16 Pro
  const phoneWidth = isLandscape ? 852 : 393;
  const phoneHeight = isLandscape ? 393 : 852;

  // If on actual mobile device or Mobile Viewport mode is off, render normal full-screen layout
  if (isUserOnSmallScreen || !isMobileMode) {
    return (
      <div className="relative w-full min-h-[100dvh]">
        {/* Floating Viewport Mode Switcher (Visible on desktop) */}
        {!isUserOnSmallScreen && (
          <aside
            aria-label="Viewport Switcher"
            className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
          >
            <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/15 text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] rounded-full p-1.5 flex items-center space-x-1">
              <button
                onClick={() => setIsMobileMode(false)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 bg-white/15 text-white transition-all shadow-xs"
                title="Full Responsive Desktop View"
              >
                <Monitor className="w-3.5 h-3.5 text-[#F27D9B]" />
                <span>Responsive Desktop</span>
              </button>

              <button
                onClick={() => setIsMobileMode(true)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 text-neutral-300 hover:text-white hover:bg-white/10 transition-all group"
                title="Switch to Luxury Mobile Viewport"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#F27D9B] group-hover:scale-110 transition-transform" />
                <span>Mobile Viewport</span>
                <span className="text-[10px] bg-[#F27D9B] text-white px-1.5 py-0.2 rounded-full font-mono">
                  Pro
                </span>
              </button>
            </div>
          </aside>
        )}

        {/* Regular Portfolio Output */}
        {children({ isMobileViewport: isUserOnSmallScreen, scrollContainerRef: { current: null } })}

        {/* Mobile floating dock when viewing on actual mobile screen */}
        {isUserOnSmallScreen && (
          <MobileBottomDock />
        )}
      </div>
    );
  }

  // LUXURY MOBILE VIEWPORT SIMULATOR (Desktop Showcase Mode)
  return (
    <div className="fixed inset-0 z-50 bg-[#16151A] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,125,155,0.18),rgba(255,255,255,0))] text-neutral-200 overflow-hidden flex flex-col">
      {/* Studio Header Toolbar */}
      <header className="h-16 px-6 border-b border-white/10 bg-[#1A1920]/80 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F27D9B] animate-pulse" />
            <span className="font-serif font-bold text-white text-base tracking-tight">
              Mahi Goyal
            </span>
            <span className="text-neutral-400 font-mono text-xs">/</span>
            <span className="text-xs font-medium text-neutral-300 flex items-center space-x-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <Smartphone className="w-3 h-3 text-[#F27D9B]" />
              <span>iPhone 16 Pro Viewport ({phoneWidth} × {phoneHeight})</span>
            </span>
          </div>
        </div>

        {/* Controls: Rotate, Zoom, and Exit */}
        <div className="flex items-center space-x-2">
          {/* Zoom controls */}
          <div className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs">
            <button
              onClick={() => setScale((prev) => Math.max(0.7, prev - 0.05))}
              className="p-1 hover:text-white text-neutral-400 transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] px-1 text-neutral-300">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((prev) => Math.min(1.0, prev + 0.05))}
              className="p-1 hover:text-white text-neutral-400 transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Rotate toggle */}
          <button
            onClick={() => setIsLandscape(!isLandscape)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Rotate Device Orientation"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* Exit Viewport Mode */}
          <button
            onClick={() => setIsMobileMode(false)}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#F27D9B] hover:bg-[#e06886] text-white text-xs font-semibold transition-all shadow-md ml-2"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Return to Desktop</span>
          </button>
        </div>
      </header>

      {/* Main Studio Canvas with Realistic iPhone 16 Pro Frame */}
      <main className="flex-1 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Soft studio ambient glow */}
        <div 
          className="absolute w-[600px] h-[600px] bg-[#F27D9B]/10 rounded-full blur-[120px] pointer-events-none -z-10" 
          aria-hidden="true" 
        />

        {/* Scaled Device Container */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s ease, height 0.3s ease',
            width: `${phoneWidth + 24}px`,
            height: `${phoneHeight + 24}px`
          }}
          className="relative shrink-0 flex items-center justify-center select-none"
        >
          {/* Exterior Hardware Buttons */}
          {!isLandscape ? (
            <>
              {/* Action Button */}
              <div className="absolute -left-[14px] top-[115px] w-[4px] h-[28px] bg-[#3B3A40] rounded-l-xs shadow-inner" />
              {/* Volume Up */}
              <div className="absolute -left-[14px] top-[160px] w-[4px] h-[52px] bg-[#3B3A40] rounded-l-xs shadow-inner" />
              {/* Volume Down */}
              <div className="absolute -left-[14px] top-[225px] w-[4px] h-[52px] bg-[#3B3A40] rounded-l-xs shadow-inner" />
              {/* Side / Power Button */}
              <div className="absolute -right-[14px] top-[175px] w-[4px] h-[75px] bg-[#3B3A40] rounded-r-xs shadow-inner" />
            </>
          ) : null}

          {/* iPhone 16 Pro Chassis Frame */}
          <div
            style={{ width: `${phoneWidth}px`, height: `${phoneHeight}px` }}
            className="relative rounded-[50px] bg-[#0E0E11] p-[4px] shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_0_2px_#38373D] flex flex-col overflow-hidden"
          >
            {/* Screen Inner Bezel */}
            <div className="relative w-full h-full rounded-[46px] overflow-hidden bg-[#FFFDFB] flex flex-col">
              
              {/* iOS Status Bar Overlay */}
              <div className="h-11 w-full bg-[#FFFDFB]/95 backdrop-blur-md px-7 flex items-center justify-between z-30 shrink-0 select-none border-b border-transparent">
                {/* Time */}
                <span className="text-[13px] font-semibold text-[#171717] tracking-tight pl-1">
                  {currentTime}
                </span>

                {/* Dynamic Island */}
                <div className="w-[108px] h-[28px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#20202E]" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>
                </div>

                {/* Cellular, Wi-Fi & Battery Icons */}
                <div className="flex items-center space-x-1.5 text-[#171717] pr-1">
                  {/* Cellular */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M2 17h3v4H2v-4zm5-4h3v8H7v-8zm5-4h3v12h-3V9zm5-4h3v16h-3V5z" />
                  </svg>
                  {/* Wi-Fi */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.6 0 6.9 1.4 9.3 3.8L12 18.5 2.7 11.3C5.1 8.9 8.4 7.5 12 7.5z" />
                  </svg>
                  {/* Battery */}
                  <div className="w-5 h-2.5 border border-[#171717] rounded-xs p-[1px] flex items-center">
                    <div className="h-full w-[90%] bg-[#171717] rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Scrollable Viewport Content Pane */}
              <div
                ref={phoneContainerRef}
                className="flex-1 w-full overflow-y-auto overflow-x-hidden no-scrollbar relative select-text"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Render child portfolio components */}
                {children({ isMobileViewport: true, scrollContainerRef: phoneContainerRef })}

                {/* Safe padding at the bottom of the scroll view */}
                <div className="h-20 w-full" />
              </div>

              {/* Mobile Bottom Dock (Floating inside phone viewport) */}
              <MobileBottomDock
                scrollContainerRef={phoneContainerRef}
                onNavigate={(targetId) => {
                  const container = phoneContainerRef.current;
                  if (container) {
                    const el = container.querySelector('#' + targetId) as HTMLElement;
                    if (el) {
                      container.scrollTo({
                        top: el.offsetTop - 50,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
              />

              {/* iOS Home Indicator Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/35 rounded-full pointer-events-none z-40" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info Pill */}
      <footer className="h-10 px-6 border-t border-white/5 bg-[#121115] text-[11px] text-neutral-400 flex items-center justify-between shrink-0 select-none z-20">
        <span className="flex items-center space-x-1.5">
          <Sparkles className="w-3 h-3 text-[#F27D9B]" />
          <span>Luxury Mobile Viewport Active • Fully responsive touch & scroll testing</span>
        </span>
        <span className="font-mono text-neutral-500">
          CSS: max-width 393px | DPR: 3x
        </span>
      </footer>
    </div>
  );
};
