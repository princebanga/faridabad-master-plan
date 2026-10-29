import React, { useState, useEffect } from 'react';
import { 
  Building2, Search, Filter, MapPin, CheckCircle2, 
  ExternalLink, Download, FileText, Phone, MessageCircle, X,
  Layers, ArrowUpRight, Sparkles, ChevronRight, Calculator
} from 'lucide-react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';

interface PropertiesPageProps {
  initialProjectId?: string;
  onSelectProject?: (p: PropertyProject) => void;
  selectedProjectFromHome?: PropertyProject | null;
  onClearSelectedProject?: () => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  initialProjectId,
  selectedProjectFromHome,
  onClearSelectedProject
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PropertyProject | null>(null);

  // Synchronize when opened from Home or URL
  useEffect(() => {
    if (selectedProjectFromHome) {
      setActiveProject(selectedProjectFromHome);
    } else if (initialProjectId) {
      const p = ALL_PROJECTS.find(item => item.id === initialProjectId);
      if (p) setActiveProject(p);
    }
  }, [selectedProjectFromHome, initialProjectId]);

  const categories = ['All', 'High-Rise', 'Plots', 'Low-Rise', 'Affordable', 'Commercial'];
  const statuses = ['All', 'RERA Approved', 'Approved & OC Received', 'LOI Received', 'Ongoing', 'Upcoming'];
  
  const sectors = ['All', ...Array.from(new Set(ALL_PROJECTS.map(p => p.sector)))];

  const filteredProjects = ALL_PROJECTS.filter(p => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchStatus = selectedStatus === 'All' || p.status === selectedStatus;
    const matchSector = selectedSector === 'All' || p.sector === selectedSector;
    const matchQuery = !searchQuery.trim() || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.reraNumber && p.reraNumber.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCategory && matchStatus && matchSector && matchQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5" />
          <span>Complete Faridabad Property Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Properties, Plots & Real Estate Directory
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Comprehensive project inventory across Greater Faridabad and central sectors. 
          Filter by category, statutory status, and sector with transparent specifications, pricing rules, and official documents.
        </p>
      </div>

      {/* Filter and Search Bar Control Strip */}
      <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name, developer, sector, or RERA registration..."
            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Rows */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mr-1">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white font-semibold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-neutral-200 hidden lg:block" />

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mr-1">Status:</span>
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedStatus === st
                    ? 'bg-neutral-900 text-white font-semibold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-neutral-200 hidden lg:block" />

          {/* Sector Select Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Sector:</span>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="bg-neutral-100 border border-neutral-200 text-xs font-semibold rounded-lg px-2.5 py-1.5 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {sectors.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {(searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All' || selectedSector !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSelectedSector('All');
              }}
              className="text-xs text-rose-600 hover:text-rose-800 font-semibold ml-auto"
            >
              Reset Filters
            </button>
          )}

        </div>

      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
        <span>Showing <strong>{filteredProjects.length}</strong> of {ALL_PROJECTS.length} verified projects</span>
        <span>Click any card for blueprints, payment plan, and direct advisor contact</span>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
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

                {project.reraNumber && (
                  <div className="text-[11px] text-neutral-500 truncate font-mono">
                    RERA: {project.reraNumber}
                  </div>
                )}

                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 truncate max-w-[60%]">
                  {project.configurations.join(', ')}
                </span>
                <span className="font-semibold text-teal-600 flex items-center gap-1 shrink-0">
                  View Specs <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
          <p className="text-neutral-600 text-sm font-medium">No projects found matching the active filter criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedStatus('All');
              setSelectedSector('All');
            }}
            className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* In-Depth Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-200 flex items-start justify-between gap-4 bg-neutral-50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200 text-neutral-800">
                    {activeProject.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                    {activeProject.status}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {activeProject.name}
                </h2>
                <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{activeProject.location}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveProject(null);
                  if (onClearSelectedProject) onClearSelectedProject();
                }}
                className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg bg-white border border-neutral-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* Image banner */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/anantya-true-habitat-sector-110a-faridabad-site_0be08361.jpg';
                  }}
                />
              </div>

              {/* Price & Rates */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900">Indicative Pricing</span>
                  <div className="text-2xl font-extrabold text-teal-800">{activeProject.price}</div>
                  {activeProject.baseRate && (
                    <div className="text-xs text-teal-900 font-medium">{activeProject.baseRate}</div>
                  )}
                </div>
                <a
                  href={`https://wa.me/919818811971?text=Hi%20Prince%2C%20please%20share%20the%20official%20quotation%20and%20availability%20for%20${encodeURIComponent(activeProject.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold text-center transition-colors shrink-0"
                >
                  Request Price Sheet
                </a>
              </div>

              {/* Specifications Matrix */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Project Parameters</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Developer</span>
                    <strong className="text-neutral-900 text-xs">{activeProject.developer}</strong>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Sector</span>
                    <strong className="text-neutral-900 text-xs">{activeProject.sector}</strong>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <span className="text-neutral-500 block text-[10px] uppercase font-semibold">RERA Number</span>
                    <strong className="text-neutral-900 text-xs truncate block">{activeProject.reraNumber || 'Verified in records'}</strong>
                  </div>
                  {activeProject.landArea && (
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Land Area / Scale</span>
                      <strong className="text-neutral-900 text-xs">{activeProject.landArea}</strong>
                    </div>
                  )}
                  {activeProject.units && (
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Total Units</span>
                      <strong className="text-neutral-900 text-xs">{activeProject.units}</strong>
                    </div>
                  )}
                  {activeProject.configurations.length > 0 && (
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 col-span-2 sm:col-span-1">
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Configurations</span>
                      <strong className="text-neutral-900 text-xs">{activeProject.configurations.join(', ')}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Overview</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Key Highlights</h3>
                <div className="space-y-1.5">
                  {activeProject.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Plan if present */}
              {activeProject.paymentPlan && (
                <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
                  <h3 className="text-sm font-bold text-neutral-900">{activeProject.paymentPlan.type}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{activeProject.paymentPlan.details}</p>
                </div>
              )}

              {/* External Media & Tour Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {activeProject.virtualTour360 && (
                  <a
                    href={activeProject.virtualTour360}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Open 360° Virtual Tour</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.brochurePdf && (
                  <a
                    href={activeProject.brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white border border-neutral-300 text-neutral-800 rounded-xl text-xs font-semibold hover:bg-neutral-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Download Brochure</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.layoutPdf && (
                  <a
                    href={activeProject.layoutPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white border border-neutral-300 text-neutral-800 rounded-xl text-xs font-semibold hover:bg-neutral-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Layout Plan</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.videoUrl && (
                  <a
                    href={activeProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold hover:bg-rose-100 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Watch Site Video</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-neutral-500">
                Contact Prince Banga (Apka Apna Property Advisor) for on-site inspection
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${activeProject.contactPhone}`}
                  className="flex-1 sm:flex-none px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold text-center"
                >
                  Call {activeProject.contactPhone}
                </a>
                <a
                  href={activeProject.contactWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 bg-teal-600 text-white rounded-lg text-xs font-bold text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
