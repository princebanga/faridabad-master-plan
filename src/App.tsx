import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MasterPlanPage } from './pages/MasterPlanPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { MapsPage } from './pages/MapsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { GuidesPage } from './pages/GuidesPage';
import { ToolsPage } from './pages/ToolsPage';
import { ALL_PROJECTS, PropertyProject } from './data/projectsData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PropertyProject | null>(null);
  const [targetSector, setTargetSector] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Parse path and legacy URLs
  useEffect(() => {
    const handleUrlResolution = () => {
      const path = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);

      // Handle Scroll Top
      const onScroll = () => {
        if (window.scrollY > 400) setShowScrollTop(true);
        else setShowScrollTop(false);
      };
      window.addEventListener('scroll', onScroll);

      // 1. Direct Page Routing
      if (path === '/' || path === '/home' || path === '/index.html') {
        setActivePage('home');
      } else if (path.includes('master-plan') || path.includes('faridabad-master-plan-2031')) {
        setActivePage('master-plan');
      } else if (
        path.includes('properties') || 
        path.includes('runningprojects') || 
        path.includes('upcoming') ||
        path.includes('3-bhk-flats') ||
        path.includes('plots-in-faridabad') ||
        path.includes('compare') ||
        path.includes('dameera') ||
        path.includes('true-habitat') ||
        path.includes('skynest') ||
        path.includes('adore-legend') ||
        path.includes('aanandam') ||
        path.includes('townfit') ||
        path.includes('silicon-valley') ||
        path.includes('gulmohar') ||
        path.includes('107th-avenue') ||
        path.includes('sohaolivehomes') ||
        path.includes('mansha')
      ) {
        setActivePage('properties');
        
        // Match specific project if in URL
        if (path.includes('emerald') || path.includes('97')) {
          const p = ALL_PROJECTS.find(item => item.id === 'emerald-highrise-97');
          if (p) setSelectedProject(p);
        } else if (path.includes('skynest')) {
          const p = ALL_PROJECTS.find(item => item.id === 'bptp-skynest-80');
          if (p) setSelectedProject(p);
        } else if (path.includes('true-habitat') || path.includes('anantya')) {
          const p = ALL_PROJECTS.find(item => item.id === 'true-habitat-anantya-110a');
          if (p) setSelectedProject(p);
        } else if (path.includes('dameera')) {
          const p = ALL_PROJECTS.find(item => item.id === 'dameera-city-121');
          if (p) setSelectedProject(p);
        }
      } else if (
        path.includes('maps') || 
        path.includes('faridabad-map') || 
        path.includes('distance-assistant') ||
        path.includes('sector-80') ||
        path.includes('sector-81') ||
        path.includes('sector-97') ||
        path.includes('noida-greater-noida')
      ) {
        setActivePage('maps');
        if (path.includes('sector-80')) setTargetSector('Sector 80');
        else if (path.includes('sector-81')) setTargetSector('Sector 81');
        else if (path.includes('sector-97')) setTargetSector('Sector 97');
      } else if (
        path.includes('resources') || 
        path.includes('rera') || 
        path.includes('draw') ||
        path.includes('reconciliation') ||
        path.includes('promoter')
      ) {
        setActivePage('resources');
      } else if (
        path.includes('guides') || 
        path.includes('checklist') || 
        path.includes('freehold') || 
        path.includes('oc-vs-cc') || 
        path.includes('ddjay') || 
        path.includes('affordable-vs-regular')
      ) {
        setActivePage('guides');
      } else if (
        path.includes('tools') || 
        path.includes('about') || 
        path.includes('video')
      ) {
        setActivePage('tools');
      }
    };

    handleUrlResolution();
    window.addEventListener('popstate', handleUrlResolution);
    return () => window.removeEventListener('popstate', handleUrlResolution);
  }, []);

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newPath);

    if (params && params.sector) {
      setTargetSector(params.sector);
    }
  };

  const handleSelectProject = (project: PropertyProject) => {
    setSelectedProject(project);
    setActivePage('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({ page: 'properties' }, '', `/properties?project=${project.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans">
      
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Main Content Viewport with Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <HomePage 
                onNavigate={handleNavigate} 
                onSelectProject={handleSelectProject} 
              />
            )}
            {activePage === 'master-plan' && (
              <MasterPlanPage onNavigate={handleNavigate} />
            )}
            {activePage === 'properties' && (
              <PropertiesPage 
                selectedProjectFromHome={selectedProject} 
                onClearSelectedProject={() => setSelectedProject(null)} 
              />
            )}
            {activePage === 'maps' && (
              <MapsPage 
                initialSector={targetSector} 
                onSelectProject={handleSelectProject} 
              />
            )}
            {activePage === 'resources' && (
              <ResourcesPage />
            )}
            {activePage === 'guides' && (
              <GuidesPage />
            )}
            {activePage === 'tools' && (
              <ToolsPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActivePage={handleNavigate} />

      {/* Floating Action Hotline Pills for Quick Buyer Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md text-white border border-neutral-700 shadow-xl flex items-center justify-center hover:bg-neutral-800 transition-all mb-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
        <a
          href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20am%20exploring%20FaridabadMasterPlan.in%20and%20would%20like%20property%20advice."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl font-bold text-xs transition-transform hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Advisor</span>
        </a>
      </div>

    </div>
  );
}
