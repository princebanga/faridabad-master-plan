import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (id: string, hash?: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    const path = id === 'home' ? '/' : `/${id}`;
    window.history.pushState({ page: id }, '', hash ? `${path}#${hash}` : path);
    if (hash) {
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linkClass = (id: string) =>
    `whitespace-nowrap transition-colors relative py-2 text-sm ${activePage === id ? 'text-white font-semibold' : 'text-neutral-400 hover:text-neutral-100'}`;

  const Dropdown = ({ label, active, children }: { label: string; active?: boolean; children: React.ReactNode }) => (
    <div className="relative group">
      <button type="button" className={`inline-flex items-center gap-1 py-2 text-sm whitespace-nowrap transition-colors ${active ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'}`} aria-haspopup="true">
        {label}<ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 absolute left-0 top-full z-[60] min-w-56 rounded-xl border border-neutral-700 bg-neutral-900 p-2 shadow-2xl transition-all duration-150">
        {children}
      </div>
    </div>
  );

  const DropLink = ({ label, page, hash }: { label: string; page: string; hash?: string }) => (
    <button type="button" onClick={() => navigate(page, hash)} className="block w-full rounded-lg px-3 py-2.5 text-left text-sm text-neutral-300 hover:bg-neutral-800 hover:text-teal-300 transition-colors">
      {label}
    </button>
  );

  return (
    <>
      <div className="bg-neutral-900 text-neutral-300 border-b border-neutral-800 text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-teal-400 font-semibold tracking-wide uppercase text-[10px] bg-teal-950/60 border border-teal-800/80 px-2 py-0.5 rounded">Verified Advisory</span>
            <span className="text-neutral-300 truncate">Master Plan 2031 Maps • Haryana RERA Public Database • Draw Results • Apka Apna Property Advisor</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <a href="https://whatsapp.com/channel/0029Vb7cMSv8fewwCtHsRn02" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              <span>Join WhatsApp Channel</span><ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-neutral-600">|</span>
            <a href="tel:+919818811971" className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1"><Phone className="w-3 h-3 text-teal-400" /><span>+91 98188 11971</span></a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-5 min-h-16">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 group-hover:scale-125 transition-transform" />
              <span>Faridabad<span className="text-teal-400 font-light">MasterPlan</span>.in</span>
            </a>

            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-medium" aria-label="Main navigation">
              <button onClick={() => navigate('home')} className={linkClass('home')}>Home</button>
              <Dropdown label="Plots" active={activePage === 'properties'}>
                <DropLink label="Explore Plots & Properties" page="properties" />
                <DropLink label="Sector-wise Property Listings" page="maps" />
              </Dropdown>
              <button onClick={() => navigate('properties')} className={linkClass('properties')}>Group Housing</button>
              <Dropdown label="Affordable Housing" active={activePage === 'affordable-housing'}>
                <DropLink label="Affordable Housing Overview" page="affordable-housing" />
                <DropLink label="Affordable Projects" page="affordable-housing" hash="projects" />
                <DropLink label="Cost Calculator" page="affordable-housing" hash="calculator" />
                <DropLink label="Payment Plan" page="affordable-housing" hash="payment-plan" />
                <DropLink label="Policy & Buyer Preferences" page="affordable-housing" hash="policy" />
                <DropLink label="Draw Results" page="affordable-housing" hash="draw-results" />
                <DropLink label="FAQs" page="affordable-housing" hash="faqs" />
              </Dropdown>
              <Dropdown label="Master Plan" active={['master-plan', 'maps'].includes(activePage)}>
                <DropLink label="Master Plan 2031" page="master-plan" />
                <DropLink label="Maps & Connectivity" page="maps" />
                <DropLink label="Sector Explorer" page="maps" />
              </Dropdown>
              <button onClick={() => navigate('resources')} className={linkClass('resources')}>Resources</button>
              <Dropdown label="More" active={['guides', 'tools'].includes(activePage)}>
                <DropLink label="Buyer Guides" page="guides" />
                <DropLink label="Tools & Calculators" page="tools" />
                <a href="tel:+919818811971" className="block rounded-lg px-3 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-teal-300">Contact Us · 98188 11971</a>
              </Dropdown>
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <a href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20am%20visiting%20FaridabadMasterPlan.in%20and%20would%20like%20guidance." target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap">
                <MessageCircle className="w-3.5 h-3.5" /><span>Talk to Advisor</span>
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" aria-expanded={mobileMenuOpen} aria-label="Toggle Navigation Menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-1 max-h-[78vh] overflow-y-auto">
            <button onClick={() => navigate('home')} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800">Home</button>
            <details className="group rounded-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-200">Plots <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-3"><button onClick={() => navigate('properties')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Explore Plots & Properties</button><button onClick={() => navigate('maps')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Sector-wise Listings</button></div>
            </details>
            <button onClick={() => navigate('properties')} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800">Group Housing</button>
            <details className="group rounded-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-200">Affordable Housing <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-3">
                <button onClick={() => navigate('affordable-housing')} className="block w-full text-left px-3 py-2 text-sm text-teal-300">Overview</button>
                {['Projects|projects','Cost Calculator|calculator','Payment Plan|payment-plan','Policy & Buyer Preferences|policy','Draw Results|draw-results','FAQs|faqs'].map(item => { const [label, hash] = item.split('|'); return <button key={hash} onClick={() => navigate('affordable-housing', hash)} className="block w-full text-left px-3 py-2 text-sm text-neutral-400 hover:text-teal-300">{label}</button>; })}
              </div>
            </details>
            <details className="group rounded-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-200">Master Plan <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-3">
                <button onClick={() => navigate('master-plan')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Master Plan 2031</button>
                <button onClick={() => navigate('maps')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Maps & Connectivity</button>
                <button onClick={() => navigate('maps')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Sector Explorer</button>
              </div>
            </details>
            <button onClick={() => navigate('resources')} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800">Resources</button>
            <details className="group rounded-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-200">More <ChevronDown className="w-4 h-4" /></summary>
              <div className="pl-3">
                <button onClick={() => navigate('guides')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Buyer Guides</button>
                <button onClick={() => navigate('tools')} className="block w-full text-left px-3 py-2 text-sm text-neutral-400">Tools & Calculators</button>
                <a href="tel:+919818811971" className="block px-3 py-2 text-sm text-neutral-400">Contact Us · 98188 11971</a>
              </div>
            </details>
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
              <a href="tel:+919818811971" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-neutral-800 text-white text-xs font-semibold"><Phone className="w-3.5 h-3.5 text-teal-400" /><span>Call Advisor (+91 98188 11971)</span></a>
              <a href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20am%20visiting%20FaridabadMasterPlan.in%20and%20would%20like%20guidance." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-teal-500 text-neutral-950 text-xs font-bold"><MessageCircle className="w-3.5 h-3.5" /><span>WhatsApp Advisor</span></a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
