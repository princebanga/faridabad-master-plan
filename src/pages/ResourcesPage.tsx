import React, { useState } from 'react';
import { 
  FileText, Search, Download, ExternalLink, ShieldCheck, 
  Users, CheckCircle2, AlertCircle, Clock, Database, ArrowUpRight
} from 'lucide-react';
import { RERA_MASTER_RECORDS, RERA_PROMOTERS } from '../data/reraData';
import { OFFICIAL_DOCUMENTS } from '../data/documentsData';
import { OFFICIAL_DRAWS, ProjectDraw } from '../data/drawsData';

export const ResourcesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'rera-db' | 'draws' | 'promoters' | 'downloads' | 'reconciliation'>('rera-db');
  
  // RERA DB filter states
  const [reraQuery, setReraQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');

  // Draws filter states
  const [selectedDrawProject, setSelectedDrawProject] = useState<string>('218');
  const [drawApplicantSearch, setDrawApplicantSearch] = useState('');
  const [drawTab, setDrawTab] = useState<'all' | 'winner' | 'waitlist'>('all');

  // Promoter search state
  const [promoterQuery, setPromoterQuery] = useState('');

  // Documents search state
  const [docQuery, setDocQuery] = useState('');
  const [docCategory, setDocCategory] = useState('All');

  // Filtered RERA records
  const filteredRera = RERA_MASTER_RECORDS.filter(r => {
    const matchDistrict = selectedDistrict === 'ALL' || r.district === selectedDistrict;
    const matchStatus = selectedStatusFilter === 'ALL' || 
      (selectedStatusFilter === 'APPROVED' ? r.tone === 'green' :
       selectedStatusFilter === 'PENDING' ? r.tone === 'orange' : r.tone === 'red');
    const matchQ = !reraQuery.trim() ||
      r.projectName.toLowerCase().includes(reraQuery.toLowerCase()) ||
      r.promoter.toLowerCase().includes(reraQuery.toLowerCase()) ||
      r.regNumber.toLowerCase().includes(reraQuery.toLowerCase()) ||
      r.projectId.toLowerCase().includes(reraQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(reraQuery.toLowerCase());

    return matchDistrict && matchStatus && matchQ;
  });

  const activeDraw = OFFICIAL_DRAWS.find(d => d.projectId === selectedDrawProject) || OFFICIAL_DRAWS[0];

  const filteredDrawRecords = activeDraw.featuredRecords.filter(rec => {
    const matchTab = drawTab === 'all' || 
      (drawTab === 'winner' ? rec.status === 'Allocated' : rec.status === 'Waitlist');
    const matchSearch = !drawApplicantSearch.trim() ||
      rec.applicantName.toLowerCase().includes(drawApplicantSearch.toLowerCase()) ||
      rec.applicationNo.includes(drawApplicantSearch) ||
      (rec.flatNo && rec.flatNo.toLowerCase().includes(drawApplicantSearch.toLowerCase()));

    return matchTab && matchSearch;
  });

  // Filtered Promoters
  const filteredPromoters = RERA_PROMOTERS.filter(p => {
    const q = promoterQuery.toLowerCase().trim();
    if (!q) return true;
    return p.company.toLowerCase().includes(q) ||
      p.people.some(peep => peep.name.toLowerCase().includes(q) || peep.role.toLowerCase().includes(q)) ||
      p.projects.some(proj => proj.name.toLowerCase().includes(q));
  });

  // Filtered Documents
  const filteredDocs = OFFICIAL_DOCUMENTS.filter(d => {
    const matchCat = docCategory === 'All' || d.category === docCategory;
    const matchQ = !docQuery.trim() ||
      d.title.toLowerCase().includes(docQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(docQuery.toLowerCase()) ||
      d.issuingAuthority.toLowerCase().includes(docQuery.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 uppercase tracking-wider">
          <Database className="w-3.5 h-3.5" />
          <span>Statutory Data & Intelligence Center</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Government Documents, RERA Database & Resources
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Search the verified Haryana RERA project database, examine declared company directors, 
          inspect electronic lottery draw results, and download official Master Plan gazette publications.
        </p>
      </div>

      {/* Main Section Tabs */}
      <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveSection('rera-db')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSection === 'rera-db' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          01. RERA Master Database ({RERA_MASTER_RECORDS.length})
        </button>
        <button
          onClick={() => setActiveSection('draws')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSection === 'draws' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          02. Official Draw Results
        </button>
        <button
          onClick={() => setActiveSection('promoters')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSection === 'promoters' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          03. Promoter & Director Directory
        </button>
        <button
          onClick={() => setActiveSection('downloads')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSection === 'downloads' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          04. Download Center (PDFs)
        </button>
        <button
          onClick={() => setActiveSection('reconciliation')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSection === 'reconciliation' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          05. HRERA Status Reconciliation
        </button>
      </div>

      {/* 1. RERA MASTER DATABASE */}
      {activeSection === 'rera-db' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  Haryana Real Estate Regulatory Authority (HRERA) Project Archive
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Transcribed directly from official Haryana RERA public records. Search by project, promoter, RERA number, or Project ID.
                </p>
              </div>
              <a
                href="https://haryanarera.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 shrink-0"
              >
                <span>Official HRERA Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={reraQuery}
                onChange={(e) => setReraQuery(e.target.value)}
                placeholder="Search project name (e.g., Anantya, Skynest, Coral Park), promoter, sector, or RERA ID..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-neutral-400 text-[11px] uppercase tracking-wider">District:</span>
                {['ALL', 'FARIDABAD', 'GURUGRAM', 'PALWAL', 'AMBALA'].map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDistrict(d)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      selectedDistrict === d ? 'bg-neutral-900 text-white font-semibold' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className="h-4 w-px bg-neutral-200 hidden sm:block" />

              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-neutral-400 text-[11px] uppercase tracking-wider">Status:</span>
                {[
                  { id: 'ALL', label: 'All' },
                  { id: 'APPROVED', label: 'Approved (🟢)' },
                  { id: 'PENDING', label: 'Process (🟠)' },
                  { id: 'LAPSED', label: 'Lapsed / Adverse (🔴)' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStatusFilter(s.id)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      selectedStatusFilter === s.id ? 'bg-neutral-900 text-white font-semibold' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
            <span>Showing <strong>{filteredRera.length}</strong> verified project records</span>
            <span>Always verify the latest live certificate before making a payment</span>
          </div>

          {/* RERA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRera.map((record, i) => (
              <div
                key={record.serial || record.projectId || i}
                className={`bg-white p-5 rounded-2xl border shadow-sm flex flex-col justify-between space-y-4 ${
                  record.tone === 'green' ? 'border-neutral-200' :
                  record.tone === 'orange' ? 'border-amber-200 bg-amber-50/20' : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                      {record.district}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      record.tone === 'green' ? 'bg-emerald-100 text-emerald-800' :
                      record.tone === 'orange' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {record.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-neutral-900 leading-snug">
                    {record.projectName}
                  </h3>
                  
                  <div className="text-xs text-neutral-500">
                    📍 {record.location}
                  </div>

                  <div className="space-y-1 pt-2 border-t border-neutral-100 text-xs font-mono">
                    <div className="flex justify-between text-neutral-600">
                      <span className="text-neutral-400 font-sans">RERA No:</span>
                      <strong className="text-neutral-900">{record.regNumber || 'Pending'}</strong>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span className="text-neutral-400 font-sans">Project ID:</span>
                      <strong className="text-neutral-900">{record.projectId}</strong>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span className="text-neutral-400 font-sans">Promoter:</span>
                      <strong className="text-neutral-900 font-sans truncate max-w-[65%]">{record.promoter}</strong>
                    </div>
                    {record.validity && (
                      <div className="flex justify-between text-neutral-600">
                        <span className="text-neutral-400 font-sans">Valid Up To:</span>
                        <strong className="text-neutral-900">{record.validity}</strong>
                      </div>
                    )}
                  </div>

                  {record.latestEvent && (
                    <div className="p-2.5 bg-neutral-50 rounded-lg text-[11px] text-neutral-600 border border-neutral-200">
                      <strong className="text-neutral-800 block text-[10px] uppercase">Latest Proceeding:</strong>
                      {record.latestEvent}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. OFFICIAL DRAW RESULTS */}
      {activeSection === 'draws' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Haryana Affordable Housing Electronic Lottery Draws
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500">
                Official draw winner lists and waiting lists conducted under the supervision of the Town and Country Planning Department, Haryana.
              </p>
            </div>

            {/* Project Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {OFFICIAL_DRAWS.map(draw => (
                <button
                  key={draw.projectId}
                  onClick={() => setSelectedDrawProject(draw.projectId)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedDrawProject === draw.projectId
                      ? 'border-teal-600 bg-teal-50/50 shadow-sm'
                      : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Project ID {draw.projectId}</div>
                  <strong className="text-sm text-neutral-900 block mt-1">{draw.projectName}</strong>
                  <div className="text-xs text-neutral-500 mt-0.5">{draw.sector} · {draw.drawDate}</div>
                  <div className="text-[11px] text-neutral-600 mt-2 font-mono">
                    {draw.totalWinners} Winners · {draw.totalWaitlist} Waitlist
                  </div>
                </button>
              ))}
            </div>

            {/* Active Draw Header & PDF Downloads */}
            <div className="p-6 bg-neutral-900 text-white rounded-2xl border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-400">Selected Draw Archive</span>
                <h3 className="text-xl font-bold text-white">{activeDraw.projectName} (Project {activeDraw.projectId})</h3>
                <p className="text-xs text-neutral-400">{activeDraw.developer} · {activeDraw.sector} · Conducted on {activeDraw.drawDate}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={activeDraw.winnerPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-neutral-950 rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Winner List PDF</span>
                </a>
                <a
                  href={activeDraw.waitlistPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Waitlist PDF</span>
                </a>
              </div>
            </div>

            {/* Applicant Quick Search */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={drawApplicantSearch}
                    onChange={(e) => setDrawApplicantSearch(e.target.value)}
                    placeholder="Search applicant name, application number (e.g. 324415), or flat number..."
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDrawTab('all')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold ${drawTab === 'all' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600'}`}
                  >
                    All Records
                  </button>
                  <button
                    onClick={() => setDrawTab('winner')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold ${drawTab === 'winner' ? 'bg-emerald-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
                  >
                    Allocated Only
                  </button>
                  <button
                    onClick={() => setDrawTab('waitlist')}
                    className={`px-3 py-1.5 text-xs rounded-lg font-semibold ${drawTab === 'waitlist' ? 'bg-amber-600 text-white' : 'bg-neutral-100 text-neutral-600'}`}
                  >
                    Waitlist Only
                  </button>
                </div>
              </div>

              {/* Records Table */}
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 text-neutral-800 border-b border-neutral-200">
                      <th className="p-3 font-bold">Applicant Name</th>
                      <th className="p-3 font-bold">Application No.</th>
                      <th className="p-3 font-bold">Unit Category</th>
                      <th className="p-3 font-bold">Allocation / Flat</th>
                      <th className="p-3 font-bold">Status</th>
                      <th className="p-3 font-bold">Allocated Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700">
                    {filteredDrawRecords.map((r, i) => (
                      <tr key={i} className="hover:bg-neutral-50/60 font-mono">
                        <td className="p-3 font-bold font-sans text-neutral-900">{r.applicantName}</td>
                        <td className="p-3 text-neutral-600">{r.applicationNo}</td>
                        <td className="p-3 font-sans text-neutral-600">{r.unitCategory}</td>
                        <td className="p-3 font-bold text-teal-800">{r.flatNo || `Waitlist #${r.preference}`}</td>
                        <td className="p-3 font-sans">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            r.status === 'Allocated' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="p-3 text-neutral-500 text-[11px]">{r.allocatedOn || 'See PDF'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-[11px] text-neutral-500">
                *Records transcribed directly from official Town & Country Planning Department result PDFs. 
                Download full PDF above for the complete multi-page rosters.
              </div>

            </div>

          </div>
        </div>
      )}

      {/* 3. PROMOTER & DIRECTOR DIRECTORY */}
      {activeSection === 'promoters' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Haryana RERA Promoter & Corporate Leadership Directory
            </h2>
            <p className="text-xs text-neutral-500">
              Disclosed partners, managing directors, and authorised signatories filed under HRERA Form REP-I. 
              Search across company entities and individuals.
            </p>
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={promoterQuery}
                onChange={(e) => setPromoterQuery(e.target.value)}
                placeholder="Search promoter company (e.g. Emerald, BPTP, DLF) or director name..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPromoters.map((promoter, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                      RERA Disclosed Promoter
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {promoter.districts.join(' · ')}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-neutral-900">
                    {promoter.company}
                  </h3>

                  {/* People */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Disclosed Leadership & Signatories</div>
                    <div className="space-y-1 text-xs">
                      {promoter.people.map((person, idx) => (
                        <div key={idx} className="flex items-center justify-between py-1 border-b border-neutral-50">
                          <strong className="text-neutral-800">{person.name}</strong>
                          <span className="text-neutral-500 text-[11px]">{person.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Linked Projects */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Linked Projects Across Haryana</div>
                    <div className="space-y-1 text-xs">
                      {promoter.projects.map((proj, idx) => (
                        <div key={idx} className="flex items-center justify-between py-0.5">
                          <span className="text-neutral-700 font-medium">{proj.name}</span>
                          <span className="text-[10px] text-teal-700 font-mono font-bold">{proj.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DOWNLOAD CENTER */}
      {activeSection === 'downloads' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  Verified PDF Document Repository
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  Direct access to all developer brochures, layout maps, and government notifications.
                </p>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
              {['All', 'Master Plan', 'Brochures & Floor Plans', 'Draw Results', 'Government Notifications'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setDocCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                    docCategory === cat ? 'bg-neutral-900 text-white font-semibold' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map(doc => (
              <div key={doc.id} className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-teal-600 bg-teal-50 px-2 py-0.5 rounded">{doc.category}</span>
                    <span className="text-neutral-400">{doc.fileType}</span>
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900 leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="pt-2 text-[11px] text-neutral-400 space-y-0.5 font-mono">
                    <div>Authority: {doc.issuingAuthority}</div>
                    <div>Date: {doc.publicationDate}</div>
                    {doc.fileSize && <div>Size: {doc.fileSize}</div>}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <a
                    href={doc.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download / Open PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. HRERA RECONCILIATION DASHBOARD */}
      {activeSection === 'reconciliation' && (
        <div className="space-y-8 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Haryana RERA Project Status Reconciliation Matrix
            </h2>
            <p className="text-neutral-600 text-sm">
              We monitor project proceedings across Haryana to classify records into four regulatory stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certificate Uploaded</span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-900">96+ Records</div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Projects whose official Haryana RERA public record shows "APPROVED AND CERTIFICATE UPLOADED".
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Application Underway</span>
              </div>
              <div className="text-3xl font-extrabold text-amber-900">Pre-RERA Watch</div>
              <p className="text-xs text-amber-700 leading-relaxed">
                Applications undergoing scrutiny, defect compliance, or awaiting certificate issuance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Lapsed / Delisted</span>
              </div>
              <div className="text-3xl font-extrabold text-rose-900">Adverse Records</div>
              <p className="text-xs text-rose-700 leading-relaxed">
                Expired registration validity dates, delisting agendas, or regulatory hearings.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
