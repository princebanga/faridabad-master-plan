import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'master-plan', label: 'Master Plan', path: '/master-plan' },
    { id: 'properties', label: 'Properties', path: '/properties' },
    { id: 'maps', label: 'Maps & Sectors', path: '/maps' },
    { id: 'resources', label: 'Resources', path: '/resources' },
    { id: 'guides', label: 'Guides', path: '/guides' },
    { id: 'tools', label: 'Tools & Contact', path: '/tools' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newPath = id === 'home' ? '/' : `/${id}`;
    window.history.pushState({ page: id }, '', newPath);
  };

  return (
    <>
      {/* Top Advisory Ticker */}
      <div className="bg-neutral-900 text-neutral-300 border-b border-neutral-800 text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-teal-400 font-semibold tracking-wide uppercase text-[10px] bg-teal-950/60 border border-teal-800/80 px-2 py-0.5 rounded">
              Verified Advisory
            </span>
            <span className="text-neutral-300 truncate">
              Master Plan 2031 Maps • Haryana RERA Public Database • Draw Results • Apka Apna Property Advisor
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <a
              href="https://whatsapp.com/channel/0029Vb7cMSv8fewwCtHsRn02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>Join WhatsApp Channel</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-neutral-600">|</span>
            <a href="tel:+919818811971" className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-teal-400" />
              <span>+91 98188 11971</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Apple-Inspired Navigation Bar */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-16">
            
            {/* Zone 1: Brand Wordmark (Single Text Element) */}
            <a
              href="/"
              onClick={(e) => handleNavClick('home', e)}
              className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 group-hover:scale-125 transition-transform"></span>
              <span>Faridabad<span className="text-teal-400 font-light">MasterPlan</span>.in</span>
            </a>

            {/* Zone 2: EXACTLY 7 Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={(e) => handleNavClick(link.id, e)}
                    className={`whitespace-nowrap transition-colors relative py-1 text-sm ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action Control */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20am%20visiting%20FaridabadMasterPlan.in%20and%20would%20like%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Talk to Advisor</span>
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2">
            <div className="text-xs uppercase font-semibold text-neutral-500 tracking-wider px-3 py-1">
              Primary Destinations
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activePage === link.id
                    ? 'bg-neutral-800 text-teal-400 font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
              <a
                href="tel:+919818811971"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-neutral-800 text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>Call Prince Banga (+91 98188 11971)</span>
              </a>
              <a
                href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20am%20visiting%20FaridabadMasterPlan.in%20and%20would%20like%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-teal-500 text-neutral-950 text-xs font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
