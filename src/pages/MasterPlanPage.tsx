import React, { useState } from 'react';
import { 
  Compass, FileText, ExternalLink, ShieldCheck, 
  MapPin, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Layers
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS } from '../data/documentsData';

interface MasterPlanPageProps {
  onNavigate: (page: string) => void;
}

export const MasterPlanPage: React.FC<MasterPlanPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'landuse' | 'infrastructure' | 'checklist'>('overview');

  const landUseCategories = [
    {
      code: "RESIDENTIAL",
      color: "bg-amber-100 text-amber-800 border-amber-300",
      description: "Dedicated residential sectors planned for planned housing densities, group housing societies, HSVP sectors, and DDJAY plotted colonies. Controlled by floor area ratio (FAR) and building height limits."
    },
    {
      code: "COMMERCIAL",
      color: "bg-blue-100 text-blue-800 border-blue-300",
      description: "Designated high-street commercial strips, wholesale markets, district centers (Sector 12, World Street Sector 79), and SCO plots along major 45m and 60m sector arterial roads."
    },
    {
      code: "INDUSTRIAL & LOGISTICS",
      color: "bg-purple-100 text-purple-800 border-purple-300",
      description: "Concentrated predominantly in IMT Faridabad (Sectors 68, 69, 70, 71, 72, 73, 74) and along Mathura Road (NH-44). Dedicated to non-polluting manufacturing, IT parks, logistics warehouses, and research institutes."
    },
    {
      code: "TRANSPORT & COMMUNICATION",
      color: "bg-teal-100 text-teal-800 border-teal-300",
      description: "Arterial road hierarchies: 90m & 75m outer ring roads, 60m primary sector divides, 45m secondary arterial roads, Dedicated Freight Corridor (DFC) tracks, and metro rail reservation corridors."
    },
    {
      code: "PUBLIC & SEMI-PUBLIC",
      color: "bg-rose-100 text-rose-800 border-rose-300",
      description: "Designated civic utility spaces: government colleges, university campuses, multispecialty hospitals (such as Amrita Hospital Sector 88, ABV Medical College Chhainsa), electrical substations, and water treatment plants."
    },
    {
      code: "OPEN SPACES & GREEN BELTS",
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "Mandatory regional green buffers along Agra Canal, Yamuna River flood plains, city-level green belts along expressways, and sector parks. Strictly zero-construction conservation zones."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-800 uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Statutory Urban Planning Resource</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Faridabad Master Plan 2031 & Urban Development
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Statutory planning documents, land-use classifications, infrastructure corridors, and official gazette notifications. 
          Learn how to verify zoning, road reservations, and government approvals before buying.
        </p>
      </div>

      {/* Segmented Section Navigation */}
      <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'overview' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          01. Statutory Overview
        </button>
        <button
          onClick={() => setActiveTab('landuse')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'landuse' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          02. Land-Use Classifications
        </button>
        <button
          onClick={() => setActiveTab('infrastructure')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'infrastructure' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          03. Mega Corridors & Expressways
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'checklist' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          04. Master Plan Buyer Checklist
        </button>
      </div>

      {/* Tab 1: Statutory Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              Understanding the Faridabad Development Plan 2031
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Faridabad’s development plans are statutory blueprints published under the Haryana Scheduled Roads and Controlled Areas 
              Restriction of Unregulated Development Act, 1963. They outline projected population growth, proposed land use zones, 
              and road alignments. 
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 space-y-1">
                <strong>Crucial Distinction:</strong>
                <p>
                  A Master Plan shows <em>future planned reservations</em>. It does <strong>NOT</strong> prove that a specific plot has already received 
                  civic sewer lines, electricity, or development permission, nor does it guarantee immediate construction readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Official Government Documents Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">Official Government Planning Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OFFICIAL_DOCUMENTS.filter(d => d.category === 'Master Plan' || d.category === 'Government Notifications').map(doc => (
                <div key={doc.id} className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-600">{doc.category}</div>
                    <h4 className="font-bold text-sm text-neutral-900">{doc.title}</h4>
                    <p className="text-xs text-neutral-500">{doc.description}</p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">{doc.issuingAuthority}</span>
                    <a 
                      href={doc.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                    >
                      <span>Open Document</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jurisdictional Boundary: Controlled Area vs Municipal Corporation */}
          <div className="bg-neutral-900 text-white p-8 rounded-2xl border border-neutral-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Jurisdictional Boundaries: Controlled Areas vs. MCF</h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              When verifying a property in Faridabad, you must determine which authority governs it:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-neutral-800 rounded-xl space-y-2">
                <strong className="text-teal-400 text-sm">Controlled Areas (DTCP Haryana)</strong>
                <p className="text-neutral-300 leading-relaxed">
                  Applies to expanding sectors of Greater Faridabad (Neharpar) outside old municipal limits. 
                  Regulated by the Directorate of Town and Country Planning (DTCP). Building licenses, CLU approvals, 
                  and colony layouts are sanctioned by DTCP Haryana.
                </p>
              </div>
              <div className="p-4 bg-neutral-800 rounded-xl space-y-2">
                <strong className="text-amber-400 text-sm">Municipal Corporation of Faridabad (MCF)</strong>
                <p className="text-neutral-300 leading-relaxed">
                  Applies to established urban sectors (Sectors 1 to 37, NIT, Old Faridabad). 
                  Regulated by MCF for property tax (NDC), building plan sanctions inside regularized colonies, 
                  and municipal services.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Land-Use Classifications */}
      {activeTab === 'landuse' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Faridabad Master Plan 2031: Land-Use Legend Explained
            </h2>
            <p className="text-neutral-600 text-sm">
              Every parcel in the official Master Plan is designated with a strict statutory land-use color and code. 
              Never buy land assuming you can convert it to residential or commercial without checking the official plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landUseCategories.map(cat => (
              <div key={cat.code} className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3 shadow-sm">
                <div className={`inline-block px-3 py-1 rounded text-xs font-bold border ${cat.color}`}>
                  {cat.code}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-neutral-100 rounded-2xl border border-neutral-200 text-xs text-neutral-600 space-y-2">
            <strong className="text-neutral-900 text-sm block">How to Read a Zoning Map Drawing:</strong>
            <p>1. Check the official drawing title and verify whether you are viewing the MCF municipal map or the Controlled Areas plan.</p>
            <p>2. Match the specific Khasra or Sector boundaries against the legend; do not infer land use from an adjoining color patch.</p>
            <p>3. Look for dashed or double-line markings that indicate future road widening reservations or high-tension power line buffers.</p>
          </div>
        </div>
      )}

      {/* Tab 3: Mega Corridors & Expressways */}
      {activeTab === 'infrastructure' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              The Mega Infrastructure Grid Shaping Greater Faridabad
            </h2>
            <p className="text-neutral-600 text-sm">
              Faridabad’s 2031 development trajectory is catalyzed by five major inter-state transport arteries.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Corridor 1 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-teal-600 tracking-wider">Operational / Primary Spur</span>
                <span className="text-xs text-neutral-400 font-mono">NHAI Project</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Delhi–Mumbai Expressway (DND-Faridabad-Ballabhgarh-Sohna Link)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A massive 12-lane controlled-access expressway running parallel to the canal and bypass road. 
                Provides direct connectivity from Maharani Bagh / DND in South Delhi through Greater Faridabad (interchanges near Sectors 80, 87, 110A) 
                and connects onwards to the main Delhi-Mumbai corridor at Sohna. Commute time from Greater Faridabad to South Delhi is reduced to approx 25 minutes.
              </p>
            </div>

            {/* Corridor 2 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Under Development / Strategic Airport Highway</span>
                <span className="text-xs text-neutral-400 font-mono">31.42 KM Length</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Faridabad–Jewar Airport Greenfield Expressway
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                As detailed in official Government of India (PIB) releases, this 31.42 km greenfield highway directly connects the 
                Delhi–Faridabad–Ballabhgarh spur with the upcoming Noida International Airport at Jewar. 
                Traverses southern Faridabad (near Sectors 119, 121, Mohna), placing international air connectivity within a 35-minute drive.
              </p>
            </div>

            {/* Corridor 3 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Regional Linkage</span>
                <span className="text-xs text-neutral-400 font-mono">Yamuna River Bridge</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Manjhawali Bridge & FNG (Faridabad-Noida-Ghaziabad) Expressway
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A high-priority bridge spanning the Yamuna River near Village Manjhawali, linking Greater Faridabad (near Sectors 97, 98) 
                directly to Sector 150, Noida. Eliminates the need to drive via Delhi’s Kalindi Kunj or Badarpur border, reducing Faridabad-Noida 
                travel time to approx 20–25 minutes.
              </p>
            </div>

            {/* Corridor 4 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-purple-600 tracking-wider">Rail Freight Corridor</span>
                <span className="text-xs text-neutral-400 font-mono">Elevated Sector Alignment</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Dedicated Freight Corridor (Western DFC)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Runs through designated infrastructure easements in Greater Faridabad. In prime residential sectors like Sector 97 and Sector 70, 
                the alignment is constructed with elevated tracks and underpasses to ensure zero disruption to local road traffic.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Tab 4: Master Plan Buyer Checklist */}
      {activeTab === 'checklist' && (
        <div className="space-y-8 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Master Plan Due Diligence: 5 Rules Before Buying Land
            </h2>
            <p className="text-neutral-600 text-sm">
              Avoid falling into illegal unapproved colonies or acquiring parcels affected by future road widening.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-700">
                <strong className="text-neutral-900 text-sm block">1. Obtain the Exact Khasra and Village Name</strong>
                <p>Never rely solely on a broker's sector name. Many unauthorized plotting layouts claim to be in "Sector 97" or "Sector 119", while officially sitting on agricultural land without DTCP colony license.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-700">
                <strong className="text-neutral-900 text-sm block">2. Check Road Widening Reservations</strong>
                <p>Master plans frequently reserve 24m, 45m, or 60m road strips. If a plot falls inside a planned road alignment, the government can acquire or demolish structures without standard commercial compensation.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-700">
                <strong className="text-neutral-900 text-sm block">3. Verify DTCP Colony License & Approved Layout</strong>
                <p>For plotted developments, confirm that the project has a valid Town & Country Planning license (e.g., DDJAY license) and that the specific plot number matches the sanctioned layout plan.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-700">
                <strong className="text-neutral-900 text-sm block">4. Cross-Reference with Haryana RERA (HRERA)</strong>
                <p>Commercial advertising or selling of any real estate project exceeding 500 sq.m. or 8 units is illegal without a valid HRERA registration number.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-700">
                <strong className="text-neutral-900 text-sm block">5. Inspect the Canal / High Tension Wire Buffers</strong>
                <p>Check whether the plot borders the Agra Canal buffer zone or passes directly underneath high-tension power grid corridors where construction is prohibited.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('guides')}
              className="px-5 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All 20 Plot Checks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('maps')}
              className="px-5 py-2.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold hover:bg-teal-100 transition-colors inline-flex items-center gap-2"
            >
              <span>Open Sector Maps</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
