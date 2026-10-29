import React, { useState } from 'react';
import { 
  Search, ArrowRight, ShieldCheck, MapPin, Building2, 
  Compass, FileText, BookOpen, Calculator, Download, ExternalLink,
  CheckCircle2, Sparkles, Navigation, Layers, ChevronRight, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';
import { OFFICIAL_DOCUMENTS } from '../data/documentsData';
import { SECTORS_DATA } from '../data/sectorsData';
import { Cityscape3D } from '../components/Cityscape3D';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onSelectProject: (project: PropertyProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [calcCarpetArea, setCalcCarpetArea] = useState<number>(645.52);

  // Filter items matching search
  const searchResults = searchQuery.trim().length > 1
    ? {
        projects: ALL_PROJECTS.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.reraNumber && p.reraNumber.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
        sectors: SECTORS_DATA.filter(s =>
          s.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        documents: OFFICIAL_DOCUMENTS.filter(d =>
          d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
    : null;

  // Calculation logic for Affordable Flat Calculator:
  const calcBsp = Math.round(calcCarpetArea * 5450);
  const calcBalcony = 130000;
  const calcSubtotal = calcBsp + calcBalcony;
  const calcGst = Math.round(calcSubtotal * 0.01);
  const calcTotal = calcSubtotal + calcGst;

  const handleSelectFrom3D = (title: string) => {
    const matched = ALL_PROJECTS.find(p => title.toLowerCase().includes(p.sector.toLowerCase()) || title.toLowerCase().includes(p.name.toLowerCase().split(' ')[0]));
    if (matched) {
      onSelectProject(matched);
    } else {
      onNavigate('properties');
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION — Apple-inspired Minimalist Editorial Hero with Motion */}
      <section className="relative overflow-hidden bg-neutral-950 text-white pt-24 pb-32 border-b border-neutral-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-teal-400 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="tracking-wide uppercase font-semibold text-[11px]">Faridabad Real Estate & Urban Planning Intelligence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] text-balance"
          >
            Faridabad, organized. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-200 to-amber-200">
              Clear, verified, and complete.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance"
          >
            The single authoritative gateway to Faridabad’s Master Plan 2031, Haryana RERA public records, 
            verified residential and plotted projects, draw results, and impartial buyer due diligence.
          </motion.p>

          {/* Master Search Bar with Live Typeahead Results */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto relative text-left"
          >
            <div className="relative flex items-center shadow-2xl rounded-2xl bg-neutral-900/90 border border-neutral-700/80 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-400/20 transition-all backdrop-blur-xl">
              <Search className="w-5 h-5 text-neutral-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects (Emerald, Skynest, Anantya), sectors (97, 80), RERA numbers..."
                className="w-full bg-transparent px-4 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mr-4 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dropdown Search Results */}
            {searchResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                {searchResults.projects.length === 0 && searchResults.sectors.length === 0 && searchResults.documents.length === 0 ? (
                  <div className="p-4 text-sm text-neutral-400 text-center">
                    No verified records matching "{searchQuery}"
                  </div>
                ) : (
                  <div className="divide-y divide-neutral-800">
                    {searchResults.projects.length > 0 && (
                      <div className="p-3">
                        <div className="text-[10px] font-bold text-teal-400 uppercase tracking-wider mb-2">Projects</div>
                        {searchResults.projects.map(p => (
                          <button
                            key={p.id}
                            onClick={() => {
                              setSearchQuery('');
                              onSelectProject(p);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-xs text-white transition-colors"
                          >
                            <span className="font-semibold">{p.name} <span className="text-neutral-400 font-normal">({p.sector})</span></span>
                            <span className="text-teal-400 text-[11px] font-mono">{p.price}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {searchResults.sectors.length > 0 && (
                      <div className="p-3">
                        <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-2">Sectors & Locations</div>
                        {searchResults.sectors.map(s => (
                          <button
                            key={s.sector}
                            onClick={() => {
                              setSearchQuery('');
                              onNavigate('maps', { sector: s.sector });
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-xs text-white transition-colors"
                          >
                            <span className="font-semibold">{s.name}</span>
                            <span className="text-neutral-400 text-[11px]">{s.matureRating}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {searchResults.documents.length > 0 && (
                      <div className="p-3">
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">Documents & PDFs</div>
                        {searchResults.documents.map(d => (
                          <button
                            key={d.id}
                            onClick={() => {
                              setSearchQuery('');
                              onNavigate('resources');
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800 flex items-center justify-between text-xs text-white transition-colors"
                          >
                            <span className="truncate pr-4">{d.title}</span>
                            <span className="text-neutral-400 text-[10px] shrink-0">{d.category}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center"
          >
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl font-extrabold text-white">7 Pages</div>
              <div className="text-xs text-neutral-400 mt-1">Consolidated Architecture</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl font-extrabold text-teal-400 font-mono">100+ Records</div>
              <div className="text-xs text-neutral-400 mt-1">Haryana RERA Database</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl font-extrabold text-amber-400">Master Plan 2031</div>
              <div className="text-xs text-neutral-400 mt-1">Statutory Maps & Zoning</div>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl font-extrabold text-emerald-400">100% Real Data</div>
              <div className="text-xs text-neutral-400 mt-1">Developer & TCP Sources</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. REAL 3D SPATIAL CITYSCAPE INTERACTIVE VIEWPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Spatial Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Explore Greater Faridabad in 3D Space
          </h2>
          <p className="text-neutral-600 text-sm max-w-2xl">
            Inspect BPTP Skynest twin towers (~150m), Emerald Highrise (Sector 97), Anantya (Sector 110A), 
            and the Delhi-Mumbai Expressway corridor in full real-time 3D. Orbit, zoom, toggle lighting, and click towers.
          </p>
        </div>

        {/* 3D Model Component */}
        <Cityscape3D onSelectProjectName={handleSelectFrom3D} />
      </section>

      {/* 3. SIX GATEWAY PATHWAYS (To the other 6 pages) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10 text-center sm:text-left">
          <div className="text-xs uppercase font-bold tracking-widest text-teal-600">Site Architecture</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Explore the Six In-Depth Knowledge Hubs
          </h2>
          <p className="text-neutral-500 text-sm max-w-2xl">
            Everything previously fragmented across 50 separate pages is now systematically organized into six structured destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Master Plan */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('master-plan')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-teal-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-teal-700 transition-colors">
                Master Plan & Urban Development
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Official 2031 zoning diagrams, land-use classifications, arterial expressways, and government notifications outside municipal limits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-teal-600">
              <span>Explore Master Plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: Properties */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('properties')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-emerald-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                Properties & Real Estate Catalog
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                High-rises, plotted townships, affordable flats, and commercial shops. Filter by price, sector, and approval milestones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
              <span>View Property Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Maps & Sectors */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('maps')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-blue-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                Maps, Sectors & Route Assistant
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Interactive GIS map with project markers, live Google Maps route distance calculation, and Sector 80/81/97/119 ground reviews.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-blue-600">
              <span>Launch Interactive Map</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: Resources & Documents */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('resources')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-amber-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                Government Documents & RERA Library
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Downloadable Master Plan PDFs, developer brochures, 100+ RERA project records, promoter directory, and TCP draw results.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-amber-600">
              <span>Access Digital Library</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 5: Guides */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('guides')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-purple-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-purple-700 transition-colors">
                Property Guides, Rules & Knowledge
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                20-point plot buying checklist, title chain verification, Freehold vs Leasehold, OC vs CC, and Haryana affordable policy rules.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-purple-600">
              <span>Read Buyer Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 6: Tools & Contact */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('tools')}
            className="group p-6 bg-white rounded-2xl border border-neutral-200 hover:border-rose-500/50 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-rose-700 transition-colors">
                Interactive Tools & Advisor Helpdesk
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Affordable pricing calculator, CLP milestone schedule estimator, area unit converter, video tours, and direct inquiry with Prince Banga.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-rose-600">
              <span>Open Calculator & Help</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. FEATURED PROJECTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-teal-600">Curated Shortlist</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
              Featured Properties & Real Estate Opportunities
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Verified developments across Greater Faridabad with active documentation and real pricing metrics.
            </p>
          </div>
          <button
            onClick={() => onNavigate('properties')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All {ALL_PROJECTS.length} Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PROJECTS.slice(0, 6).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/anantya-true-habitat-sector-110a-faridabad-site_0be08361.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {project.status}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{project.sector}</span>
                    <span>·</span>
                    <span>{project.developer}</span>
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 group-hover:text-teal-700 transition-colors">
                    {project.name}
                  </h3>
                  <div className="text-sm font-extrabold text-teal-700">
                    {project.price}
                  </div>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">
                    {project.configurations[0]}
                  </span>
                  <span className="font-semibold text-teal-600 flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. MASTER PLAN & INFRASTRUCTURE ACCORDION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-teal-400">Regional Infrastructure</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Faridabad Master Plan 2031 & Mega Growth Corridors
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Urban planning is not just about plots and apartments—it is defined by arterial connectivity. 
              Greater Faridabad is witnessing the intersection of India’s most significant transportation backbones.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-200">
                  <strong className="text-white">Delhi–Mumbai Expressway (DND-Sohna Spur):</strong> Rapid 25-minute access to South Delhi and 40 minutes to Gurugram via KMP.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-200">
                  <strong className="text-white">Jewar International Airport Greenfield Highway:</strong> 31.42 km dedicated corridor connecting southern sectors directly to Noida International Airport.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-200">
                  <strong className="text-white">Manjhawali Bridge & FNG Expressway:</strong> Direct bridge linking Greater Faridabad (Sector 97/98) to Sector 150 Noida.
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('master-plan')}
                className="px-5 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 text-xs font-bold transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full Master Plan 2031 Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-700">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">Statutory Planning Documents</span>
              <span className="text-[10px] text-teal-400 font-mono">TCP / ULB Verified</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-neutral-900 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Final Development Plan 2031 (Controlled Areas)</div>
                  <div className="text-neutral-400 text-[11px]">Official map drawing for areas outside MC limits</div>
                </div>
                <a 
                  href="https://ulbharyana.gov.in/Website/Faridabad/Images/004862ba-be1e-4aaa-a362-642ff52c5e00.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-teal-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Gazette Notification DTP(F) 2774/18</div>
                  <div className="text-neutral-400 text-[11px]">Enacted 14 March 2018 statutory regulations</div>
                </div>
                <a 
                  href="https://www.greentribunal.gov.in/sites/default/files/news_updates/Rejoinder%20by%20Applicant%20to%20the%20Reply%20of%20R-%203%20in%20OA%20No.%20178%20of%202025%20%28Shiv%20Nadar%20Trust%20Vs.%20State%20of%20Haryana%20%26%20Ors.%29.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-teal-400 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE AFFORDABLE HOUSING PRICE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="text-xs uppercase font-bold tracking-widest text-teal-600">Interactive Due Diligence Tool</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Haryana Affordable Housing Cost Calculator
            </h2>
            <p className="text-neutral-500 text-sm">
              In Faridabad, government affordable housing policy fixes the basic rate at <strong>₹5,450 per sq.ft.</strong> of carpet area, 
              plus a fixed <strong>₹1,30,000</strong> balcony fee, and <strong>1% GST</strong> on the total value. Use this live calculator to estimate exact flat costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-1 space-y-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Select Unit Typology Preset
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcCarpetArea(496.33)}
                    className={`py-2 px-3 text-xs rounded-lg font-semibold transition-colors ${
                      calcCarpetArea === 496.33 ? 'bg-teal-600 text-white' : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    2 BHK (496 sq.ft.)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcCarpetArea(532.38)}
                    className={`py-2 px-3 text-xs rounded-lg font-semibold transition-colors ${
                      calcCarpetArea === 532.38 ? 'bg-teal-600 text-white' : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    2 BHK (532 sq.ft.)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcCarpetArea(645.52)}
                    className={`py-2 px-3 text-xs rounded-lg font-semibold transition-colors col-span-2 ${
                      calcCarpetArea === 645.52 ? 'bg-teal-600 text-white' : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    3 BHK Standard (645.52 sq.ft.)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Or Custom Carpet Area (Sq.Ft.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="300"
                  max="1200"
                  value={calcCarpetArea}
                  onChange={(e) => setCalcCarpetArea(Number(e.target.value))}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="text-[11px] text-neutral-500 pt-2">
                *Rate fixed at ₹5,450/sq.ft. carpet under relevant Faridabad town policy framework.
              </div>
            </div>

            {/* Live Breakdown Table */}
            <div className="lg:col-span-2 bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Official Cost Ledger</span>
                <span className="text-xs text-teal-400 font-mono">1% Affordable GST Tier</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Basic Flat Cost ({calcCarpetArea} sq.ft. × ₹5,450)</span>
                  <span className="font-mono font-bold text-white">₹{calcBsp.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Fixed Balcony Charge (Capped)</span>
                  <span className="font-mono font-bold text-white">₹{calcBalcony.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Subtotal Before GST</span>
                  <span className="font-mono font-bold text-neutral-200">₹{calcSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Statutory GST (1% on Subtotal)</span>
                  <span className="font-mono font-bold text-amber-400">₹{calcGst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-3 text-base sm:text-lg font-bold text-teal-400">
                  <span>Estimated Total All-In Unit Cost</span>
                  <span className="font-mono font-extrabold text-white text-xl">
                    ₹{calcTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-neutral-800/80 rounded-xl text-[11px] text-neutral-400">
                Notice: Stamp duty, registration charges, and possession-stage meter/utility fees are payable separately upon offer of possession.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. VERIFIED RERA & GOVERNMENT RECORDS ARCHIVE SHORTCUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-100 rounded-3xl p-8 sm:p-12 border border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-teal-700">Digital Archive</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                Downloadable Project Blueprints & Official Draw Results
              </h2>
            </div>
            <button
              onClick={() => onNavigate('resources')}
              className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View All Documents</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICIAL_DOCUMENTS.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between space-y-3 hover:shadow-md transition-all"
              >
                <div className="space-y-1.5">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-teal-600">{doc.category}</div>
                  <h3 className="font-bold text-xs text-neutral-900 line-clamp-2">{doc.title}</h3>
                  <p className="text-[11px] text-neutral-500 line-clamp-2">{doc.description}</p>
                </div>
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">{doc.fileType}</span>
                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                  >
                    <span>View / Download</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ADVISOR CONTEXT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Independent Real Estate Due Diligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Confused Between Projects, Sectors, or RERA Status?
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Every buyer has different budget thresholds, daily commute vectors, and risk appetites. 
              Talk directly with <strong>Prince Banga</strong> for honest, project-level ground realities 
              free from aggressive developer sales pitches.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+919818811971"
              className="px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-bold text-xs hover:bg-neutral-100 transition-colors text-center"
            >
              Call +91 98188 11971
            </a>
            <a
              href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20visited%20FaridabadMasterPlan.in%20and%20need%20property%20advice."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-teal-500 text-neutral-950 font-bold text-xs hover:bg-teal-400 transition-colors text-center"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
