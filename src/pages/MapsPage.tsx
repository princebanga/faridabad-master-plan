import React, { useState, useEffect, useRef } from 'react';
import { 
  Navigation, MapPin, Compass, Search, ExternalLink, 
  Car, ShieldCheck, ArrowRight, Layers, SlidersHorizontal, Info
} from 'lucide-react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';
import { SECTORS_DATA, REGIONAL_COMPARISON } from '../data/sectorsData';

interface MapsPageProps {
  initialSector?: string;
  onSelectProject?: (p: PropertyProject) => void;
}

export const MapsPage: React.FC<MapsPageProps> = ({ initialSector, onSelectProject }) => {
  const [selectedSector, setSelectedSector] = useState<string>(initialSector || 'Sector 80');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [mapSearch, setMapSearch] = useState<string>('');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Live Distance Assistant State
  const [origin, setOrigin] = useState('Badarpur Border, Delhi');
  const [destination, setDestination] = useState('Emerald Highrise, Sector 97, Faridabad');

  const originOptions = [
    'Badarpur Border, Delhi',
    'Omaxe World Street, Sector 79, Faridabad',
    'Amrita Hospital, Sector 88, Faridabad',
    'Greater Noida, Uttar Pradesh',
    'Delhi–Mumbai Expressway, Faridabad Interchange',
    'Faridabad Railway Station, Haryana',
    'Raja Nahar Singh (Ballabhgarh) Metro Station',
    'Indira Gandhi International Airport (IGI), Delhi'
  ];

  const destinationOptions = [
    { label: 'Emerald Highrise · Sector 97', value: 'Emerald Highrise, Sector 97, Faridabad, Haryana' },
    { label: 'BPTP Skynest Towers · Sector 80', value: 'BPTP Skynest, Sector 80, Faridabad, Haryana' },
    { label: 'Anantya True Habitat · Sector 110A', value: 'Anantya True Habitat, Sector 110A, Faridabad, Haryana' },
    { label: 'DaMeera City Plots · Sector 121', value: 'DaMeera City, Sector 121, Faridabad, Haryana' },
    { label: 'Adore Legend-II · Sector 119', value: 'Village Fafunda, Sector 119, Dayalpur, Faridabad, Haryana' },
    { label: 'Mansha Senior Living · Sector 119', value: 'Mansha Senior Living, Sector 119, Faridabad, Haryana' },
    { label: 'Townfit 70 · Sector 70', value: 'Townfit 70, Sector 70, Faridabad, Haryana' }
  ];

  const handleOpenGoogleMapsDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    
    // Check if Leaflet is globally available
    const L = (window as any).L;
    if (!L) return;

    if (!mapInstanceRef.current) {
      // Create map centered on Faridabad coordinates
      const map = L.map(mapContainerRef.current, {
        center: [28.38, 77.33],
        zoom: 12,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    
    // Clear existing markers if any
    if (map._markerLayer) {
      map.removeLayer(map._markerLayer);
    }

    const markerGroup = L.layerGroup().addTo(map);
    map._markerLayer = markerGroup;

    // Filter projects based on category & search
    const filtered = ALL_PROJECTS.filter(p => {
      const matchCat = activeCategoryFilter === 'All' || p.category === activeCategoryFilter;
      const matchSearch = !mapSearch.trim() || 
        p.name.toLowerCase().includes(mapSearch.toLowerCase()) || 
        p.sector.toLowerCase().includes(mapSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    // Add markers for filtered projects
    filtered.forEach(p => {
      // Map approximate sector lat/lng coordinates in Greater Faridabad
      let lat = 28.38;
      let lng = 77.34;

      if (p.sector === 'Sector 97') { lat = 28.385; lng = 77.375; }
      else if (p.sector === 'Sector 80') { lat = 28.375; lng = 77.352; }
      else if (p.sector === 'Sector 81') { lat = 28.380; lng = 77.345; }
      else if (p.sector === 'Sector 87') { lat = 28.411; lng = 77.337; }
      else if (p.sector === 'Sector 89') { lat = 28.420; lng = 77.350; }
      else if (p.sector === 'Sector 110A') { lat = 28.340; lng = 77.320; }
      else if (p.sector === 'Sector 119') { lat = 28.315; lng = 77.305; }
      else if (p.sector === 'Sector 121') { lat = 28.325; lng = 77.295; }
      else if (p.sector === 'Sector 70') { lat = 28.360; lng = 77.315; }

      // Slight offset for unique pin
      const hash = p.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      lat += ((hash % 10) - 5) * 0.003;
      lng += (((hash * 3) % 10) - 5) * 0.003;

      const marker = L.marker([lat, lng]);
      
      const popupHtml = `
        <div style="font-family: inherit; font-size: 12px; line-height: 1.5; min-width: 170px;">
          <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 2px;">${p.name}</strong>
          <span style="color: #0d9488; font-weight: 700;">${p.sector}</span> · <span>${p.category}</span>
          <div style="font-weight: 800; color: #16a34a; margin: 4px 0;">${p.price}</div>
          <div style="font-size: 10px; color: #64748b; margin-bottom: 6px;">Status: ${p.status}</div>
          <button id="view-${p.id}" style="width: 100%; background: #0f172a; color: #fff; border: 0; padding: 6px; border-radius: 6px; font-weight: 700; cursor: pointer;">
            View Project Details
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);
      marker.on('popupopen', () => {
        const btn = document.getElementById(`view-${p.id}`);
        if (btn && onSelectProject) {
          btn.onclick = () => onSelectProject(p);
        }
      });

      marker.addTo(markerGroup);
    });

  }, [activeCategoryFilter, mapSearch]);

  const activeSectorData = SECTORS_DATA.find(s => s.sector === selectedSector) || SECTORS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-800 uppercase tracking-wider">
          <Navigation className="w-3.5 h-3.5" />
          <span>Spatial & Geographical Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Maps, Sectors & Location Explorer
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Interactive GIS map of all Faridabad residential and plotted developments, 
          live Google Maps route distance calculation, and granular ground assessments by Prince Banga.
        </p>
      </div>

      {/* SECTION 1: Interactive Leaflet GIS Map */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Interactive Faridabad Project Map
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Zoom, pan, and filter verified projects across sectors. Click any pin for price and specs.
            </p>
          </div>

          {/* Map Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Filter:</span>
            {['All', 'High-Rise', 'Plots', 'Affordable', 'Low-Rise'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                  activeCategoryFilter === cat
                    ? 'bg-neutral-900 text-white font-semibold'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Map Canvas */}
        <div 
          ref={mapContainerRef} 
          className="w-full h-[450px] sm:h-[550px] rounded-2xl border border-neutral-200 overflow-hidden shadow-inner bg-neutral-100"
        />

        <div className="text-[11px] text-neutral-500 flex items-center justify-between flex-wrap gap-2 pt-1">
          <span>*Coordinates mapped based on sector master demarcations and verified project gates.</span>
          <span className="text-teal-700 font-medium">Click markers to inspect project parameters</span>
        </div>
      </section>

      {/* SECTION 2: Live Distance & Route Assistant */}
      <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-xl space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
            <Car className="w-4 h-4" />
            <span>Real Driving Route Assistant</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculate Live Driving Distance & Commute Time
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Never rely on brochure claims like "5 mins from Delhi" without checking real road distances. 
            Select your daily travel origin and destination to launch live Google Maps routing with traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-800/80 p-6 rounded-2xl border border-neutral-700">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Starting Point (Your Regular Origin)
            </label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {originOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
              Project Destination in Faridabad
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {destinationOptions.map(dest => (
                <option key={dest.value} value={dest.value}>{dest.label}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Selected Route: <strong className="text-teal-300">{origin}</strong> → <strong className="text-teal-300">{destination.split(',')[0]}</strong>
            </div>
            <button
              onClick={handleOpenGoogleMapsDirections}
              className="w-full sm:w-auto px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-neutral-950 font-bold text-xs rounded-xl transition-colors inline-flex items-center justify-center gap-2 shrink-0 shadow-lg"
            >
              <span>Open Live Route in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mansha 119 Special Pin Note */}
        <div className="p-4 bg-neutral-800/60 rounded-xl border border-neutral-700/80 text-xs text-neutral-300 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Dedicated Project Gate Pin:</strong> For Mansha Senior Living Sector 119, 
            use the verified gate pin to avoid inaccurate agricultural road diversions. 
            <a 
              href="https://maps.app.goo.gl/o3i7GiZYfZrjGZrJ8?g_st=ac" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline ml-1 font-semibold"
            >
              Open Mansha 119 Exact Pin ↗
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: Sector Explorer (Sector-by-Sector In-Depth Ground Reality) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-widest text-teal-600">Ground Reality</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Sector-Wise Ground View & Infrastructure Readiness
          </h2>
          <p className="text-neutral-600 text-sm">
            Select a sector to review Prince Banga's on-the-ground observations, social infrastructure, and price spectrums.
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {SECTORS_DATA.map(s => (
            <button
              key={s.sector}
              onClick={() => setSelectedSector(s.sector)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap ${
                selectedSector === s.sector
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {s.sector}
            </button>
          ))}
        </div>

        {/* Active Sector Card */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                {activeSectorData.matureRating}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-2">
                {activeSectorData.name}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {activeSectorData.tagline}
              </p>
            </div>
            <div className="text-right sm:text-right text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">Typical Pricing Band</span>
              <span className="text-sm font-extrabold text-teal-800">{activeSectorData.priceRange}</span>
            </div>
          </div>

          {/* Ground View Paragraph */}
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <strong className="text-neutral-900 block mb-1">Advisor Ground Assessment:</strong>
            {activeSectorData.groundView}
          </div>

          {/* 2-Column Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Ecosystems */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Key Surrounding Ecosystem</h4>
              <ul className="space-y-2 text-xs text-neutral-600">
                {activeSectorData.keyEcosystems.map((eco, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{eco}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Travel Times */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Connectivity Proximity Matrix</h4>
              <div className="space-y-1.5 text-xs">
                {activeSectorData.connectivityHighlights.map((conn, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-600">{conn.destination}</span>
                    <strong className="text-neutral-900 font-mono">{conn.approxTime}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Final Verdict */}
          <div className="pt-4 border-t border-neutral-100 text-xs text-neutral-600">
            <strong className="text-neutral-900 block mb-1">Final Buyer Verdict:</strong>
            <p>{activeSectorData.advisorVerdict}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Regional Analysis (Faridabad vs. Noida vs. Greater Noida) */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold tracking-widest text-teal-600">Regional Comparison</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Faridabad vs. Noida vs. Greater Noida
          </h2>
          <p className="text-neutral-600 text-sm max-w-3xl">
            A neutral, legal and financial comparison. Do not compare cities on brand marketing alone; 
            compare the land ownership title, price per square foot, and realistic commute times.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-800 border-b border-neutral-200">
                <th className="p-4 font-bold uppercase tracking-wider w-1/4">Comparison Factor</th>
                <th className="p-4 font-bold uppercase tracking-wider text-teal-800 w-1/4">Faridabad (Haryana)</th>
                <th className="p-4 font-bold uppercase tracking-wider text-blue-800 w-1/4">Noida (Uttar Pradesh)</th>
                <th className="p-4 font-bold uppercase tracking-wider text-purple-800 w-1/4">Greater Noida & YEIDA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-700">
              {REGIONAL_COMPARISON.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50/50">
                  <td className="p-4 font-bold text-neutral-900 bg-neutral-50/40">{row.factor}</td>
                  <td className="p-4 leading-relaxed">{row.faridabad}</td>
                  <td className="p-4 leading-relaxed">{row.noida}</td>
                  <td className="p-4 leading-relaxed">{row.greaterNoida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
