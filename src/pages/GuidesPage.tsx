import React, { useState } from 'react';
import { 
  BookOpen, CheckSquare, ShieldCheck, HelpCircle, 
  FileText, CheckCircle2, AlertTriangle, ArrowRight, Printer, Share2
} from 'lucide-react';
import { PROPERTY_GUIDES, GuideTopic } from '../data/guidesData';

export const GuidesPage: React.FC = () => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(PROPERTY_GUIDES[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const activeGuide = PROPERTY_GUIDES.find(g => g.id === selectedGuideId) || PROPERTY_GUIDES[0];

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const interactive20Checks = [
    "1. Official HRERA Plotted Registration status confirmed online",
    "2. DTCP Haryana Colony License verified against current validity",
    "3. Sanctioned Layout Plan obtained with exact plot number highlighted",
    "4. Land Title Deed confirms unencumbered freehold ownership",
    "5. 30-Year Revenue Search Report prepared by an independent advocate",
    "6. Physical ground demarcation with boundary stones matches drawing",
    "7. Sanctioned internal road width verified (minimum 9m or 12m/24m)",
    "8. External Development Charges (EDC/IDC) itemized in writing",
    "9. Underground water supply lines physically laid and operational",
    "10. Underground sewerage connection and drainage slope inspected",
    "11. Electrical substation allotted and cabling laid underground",
    "12. Permitted floor construction confirmed (e.g. Stilt + 4 under DDJAY)",
    "13. Preferred Location Charges (PLC) for park/corner clearly written",
    "14. Completion Certificate (CC) issued by DTCP for internal services",
    "15. Tehsildar mutation (Intakal) and Jamabandi revenue records inspected",
    "16. Absence of High-Tension (HT) overhead power lines or canal buffers",
    "17. Site inspected during peak morning and evening rush-hour traffic",
    "18. All booking payments made strictly to RERA-declared project account",
    "19. Written schedule of possession with RERA delay interest remedies",
    "20. Agreement for Sale / Conveyance draft reviewed by personal property lawyer"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-800 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Consumer Protection & Property Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Property Guides, Rules & Due Diligence
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          In-depth educational guides written to protect homebuyers. 
          Demystifying land titles, statutory approval stages, loan documents, and legal pitfalls in Haryana.
        </p>
      </div>

      {/* Main Dual-Column Guide Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Guide Navigation Menu */}
        <div className="lg:col-span-4 space-y-3 sticky top-24">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
            Table of Contents ({PROPERTY_GUIDES.length} Guides)
          </div>
          <div className="space-y-1.5 bg-white p-3 rounded-2xl border border-neutral-200 shadow-sm">
            {PROPERTY_GUIDES.map(guide => (
              <button
                key={guide.id}
                onClick={() => {
                  setSelectedGuideId(guide.id);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className={`w-full text-left p-3 rounded-xl transition-all flex flex-col space-y-1 ${
                  selectedGuideId === guide.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'hover:bg-neutral-100 text-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    selectedGuideId === guide.id ? 'text-teal-400' : 'text-neutral-400'
                  }`}>
                    {guide.category}
                  </span>
                  <span className={`text-[10px] ${
                    selectedGuideId === guide.id ? 'text-neutral-300' : 'text-neutral-400'
                  }`}>
                    {guide.readingTime}
                  </span>
                </div>
                <strong className="text-xs font-bold leading-snug">
                  {guide.title}
                </strong>
              </button>
            ))}
          </div>

          {/* Quick Helpline Box */}
          <div className="p-5 bg-teal-50 border border-teal-200 rounded-2xl space-y-2">
            <span className="text-[10px] uppercase font-bold text-teal-800 tracking-wider">Independent Advisory</span>
            <h4 className="text-xs font-bold text-teal-950">Have a legal or title question?</h4>
            <p className="text-[11px] text-teal-800 leading-relaxed">
              Before paying any non-refundable token, get an independent property verification review.
            </p>
            <a
              href="https://wa.me/919818811971?text=Hi%20Prince%20Banga,%20I%20have%20a%20property%20verification%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-bold text-teal-900 underline"
            >
              Ask Prince Banga on WhatsApp →
            </a>
          </div>
        </div>

        {/* Right: Active Guide Content Reader */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-10">
          
          {/* Article Header */}
          <div className="space-y-3 pb-8 border-b border-neutral-100">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-bold text-teal-700 uppercase tracking-wider">{activeGuide.category}</span>
              <span>·</span>
              <span>{activeGuide.readingTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              {activeGuide.title}
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {activeGuide.summary}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {activeGuide.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-teal-500 rounded-full shrink-0" />
                  <span>{sec.heading}</span>
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {sec.body}
                </p>

                {sec.callout && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                    sec.callout.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' :
                    sec.callout.type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}>
                    <strong className="block font-bold">{sec.callout.title}</strong>
                    <p>{sec.callout.text}</p>
                  </div>
                )}

                {sec.list && (
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 pl-2">
                    {sec.list.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.table && (
                  <div className="overflow-x-auto rounded-xl border border-neutral-200 mt-2">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-neutral-100 text-neutral-800 border-b border-neutral-200">
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 font-bold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 text-neutral-700">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-neutral-50/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-3 leading-relaxed ${cIdx === 0 ? 'font-bold text-neutral-900 bg-neutral-50/40' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Interactive 20-Point Plot Due Diligence Tool */}
      <section className="bg-neutral-900 text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
              <CheckSquare className="w-4 h-4" />
              <span>Interactive Due Diligence Checklist</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              The 20-Point Plot Due Diligence Checklist
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Mark each check as you verify with your seller or builder. Keep your score above 18 before signing.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-mono">
              Score: <strong className="text-teal-400 text-base">{Object.values(checkedItems).filter(Boolean).length} / 20</strong>
            </span>
            <button
              onClick={() => setCheckedItems({})}
              className="text-xs text-neutral-400 hover:text-white underline font-semibold"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {interactive20Checks.map((check, i) => {
            const isChecked = !!checkedItems[i];
            return (
              <div
                key={i}
                onClick={() => toggleCheck(i)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                  isChecked 
                    ? 'bg-teal-950/40 border-teal-600 text-teal-200' 
                    : 'bg-neutral-800/80 border-neutral-700 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCheck(i)}
                  className="mt-0.5 rounded text-teal-500 focus:ring-teal-400 pointer-events-none"
                />
                <span className="leading-snug">{check}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
          <span>Print or save this checklist before your on-site visits in Sector 97, 121, or 70.</span>
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-white font-semibold inline-flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Checklist</span>
          </button>
        </div>
      </section>

    </div>
  );
};
