import React, { useState } from 'react';
import { 
  Calculator, Phone, MessageCircle, Video, Play, 
  HelpCircle, User, CheckCircle2, ArrowRight, RefreshCw, Send
} from 'lucide-react';
import { VIDEO_LIBRARY, VideoItem } from '../data/videosData';
import { ALL_PROJECTS } from '../data/projectsData';

export const ToolsPage: React.FC = () => {
  // Tool selector
  const [activeTool, setActiveTool] = useState<'calculator' | 'clp' | 'converter' | 'videos' | 'about' | 'contact'>('calculator');

  // 1. Affordable Flat Calculator
  const [carpetArea, setCarpetArea] = useState<number>(645.52);
  const baseRate = 5450;
  const balconyCharge = 130000;
  const flatBsp = Math.round(carpetArea * baseRate);
  const flatSubtotal = flatBsp + balconyCharge;
  const flatGst = Math.round(flatSubtotal * 0.01);
  const flatTotal = flatSubtotal + flatGst;

  // 2. CLP Calculator
  const [clpTotalBsp, setClpTotalBsp] = useState<number>(3500000);
  const clpMilestones = [
    { stage: "1. On Application", pct: 5 },
    { stage: "2. On Allotment", pct: 20 },
    { stage: "3. On Start of Construction", pct: 10 },
    { stage: "4. Casting of Basement Roof Slab", pct: 5 },
    { stage: "5. Casting of 3rd Floor Roof Slab", pct: 5 },
    { stage: "6. Casting of 6th Floor Roof Slab", pct: 5 },
    { stage: "7. Casting of 9th Floor Roof Slab", pct: 5 },
    { stage: "8. Casting of Top Floor", pct: 5 },
    { stage: "9. On Start of Electrical Works", pct: 5 },
    { stage: "10. On Start of Internal Plaster", pct: 5 },
    { stage: "11. On Start of Flooring Work", pct: 5 },
    { stage: "12. On Start of Door/Window Frames", pct: 5 },
    { stage: "13. On Start of External Roads", pct: 5 },
    { stage: "14. External Development Works", pct: 5 },
    { stage: "15. External Plaster Work", pct: 5 },
    { stage: "16. Offer of Possession", pct: 5 }
  ];

  // 3. Area Converter
  const [convValue, setConvValue] = useState<number>(100);
  const [convUnit, setConvUnit] = useState<'sqyd' | 'sqft' | 'sqm' | 'acre'>('sqyd');

  // Convert everything to Sq. Yards first
  let inSqYards = convValue;
  if (convUnit === 'sqft') inSqYards = convValue / 9;
  else if (convUnit === 'sqm') inSqYards = convValue * 1.19599;
  else if (convUnit === 'acre') inSqYards = convValue * 4840;

  const convSqYards = Math.round(inSqYards * 100) / 100;
  const convSqFeet = Math.round(inSqYards * 9 * 100) / 100;
  const convSqMetres = Math.round((inSqYards / 1.19599) * 100) / 100;
  const convAcres = Math.round((inSqYards / 4840) * 10000) / 10000;

  // 4. Video Player State
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(VIDEO_LIBRARY[0]);

  // 5. Contact Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formRole, setFormRole] = useState<'Customer' | 'Property Dealer'>('Customer');
  const [formProject, setFormProject] = useState('Emerald Highrise (Sector 97)');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800 uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Calculators & Advisor Desk</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
          Tools, Help & Contact
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Interactive real estate cost calculators, area unit converters, video walkthroughs, 
          and verified advisory consultation with Prince Banga (Apka Apna Property Advisor).
        </p>
      </div>

      {/* Segmented Section Navigation */}
      <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTool('calculator')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'calculator' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          01. Affordable Flat Calculator
        </button>
        <button
          onClick={() => setActiveTool('clp')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'clp' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          02. Construction-Linked Plan (CLP)
        </button>
        <button
          onClick={() => setActiveTool('converter')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'converter' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          03. Land Area Converter
        </button>
        <button
          onClick={() => setActiveTool('videos')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'videos' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          04. Video Library ({VIDEO_LIBRARY.length})
        </button>
        <button
          onClick={() => setActiveTool('about')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'about' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          05. About Publisher
        </button>
        <button
          onClick={() => setActiveTool('contact')}
          className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeTool === 'contact' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          06. Direct Consultation
        </button>
      </div>

      {/* 1. AFFORDABLE FLAT CALCULATOR */}
      {activeTool === 'calculator' && (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Haryana Affordable Housing Pricing Calculator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Formula: (Carpet Area × ₹5,450) + ₹1,30,000 Balcony + 1% GST on the aggregate sum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                Unit Carpet Area (Sq.Ft.)
              </label>
              <input
                type="number"
                step="0.01"
                value={carpetArea}
                onChange={(e) => setCarpetArea(Number(e.target.value))}
                className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="space-y-1 text-xs text-neutral-500">
                <div>Standard 3 BHK: <strong>645.52 sq.ft.</strong></div>
                <div>Standard 2 BHK: <strong>532.38 sq.ft.</strong></div>
                <div>Compact 2 BHK: <strong>496.33 sq.ft.</strong></div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-neutral-900 text-white p-8 rounded-2xl border border-neutral-800 space-y-4 font-mono text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400 font-sans">Basic Flat Price ({carpetArea} × ₹5,450)</span>
                <strong className="text-white">₹{flatBsp.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400 font-sans">Fixed Balcony Charge</span>
                <strong className="text-white">₹{balconyCharge.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400 font-sans">Subtotal (Before GST)</span>
                <strong className="text-neutral-200">₹{flatSubtotal.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-800">
                <span className="text-neutral-400 font-sans">Statutory GST (1%)</span>
                <strong className="text-amber-400">₹{flatGst.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between pt-4 text-base sm:text-lg font-bold text-teal-400 border-t border-neutral-700">
                <span className="font-sans">Total Estimated All-In Cost</span>
                <strong className="text-white text-xl">₹{flatTotal.toLocaleString('en-IN')}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. CLP CALCULATOR */}
      {activeTool === 'clp' && (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Construction-Linked Payment Plan (CLP) Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Input your flat's Basic Sale Price (BSP) to view each milestone instalment as construction progresses.
            </p>
          </div>

          <div className="max-w-md space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
              Basic Sale Price (BSP) in INR
            </label>
            <input
              type="number"
              step="50000"
              value={clpTotalBsp}
              onChange={(e) => setClpTotalBsp(Number(e.target.value))}
              className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-neutral-100 text-neutral-800 border-b border-neutral-200">
                  <th className="p-3.5 font-bold">Construction Stage / Milestone</th>
                  <th className="p-3.5 font-bold">% of BSP</th>
                  <th className="p-3.5 font-bold">Amount Due</th>
                  <th className="p-3.5 font-bold">Cumulative Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700 font-mono">
                {clpMilestones.map((m, idx) => {
                  const amt = Math.round((clpTotalBsp * m.pct) / 100);
                  const cumPct = clpMilestones.slice(0, idx + 1).reduce((acc, curr) => acc + curr.pct, 0);
                  const cumAmt = Math.round((clpTotalBsp * cumPct) / 100);
                  return (
                    <tr key={idx} className="hover:bg-neutral-50/50">
                      <td className="p-3.5 font-sans font-medium text-neutral-900">{m.stage}</td>
                      <td className="p-3.5">{m.pct}%</td>
                      <td className="p-3.5 font-bold text-teal-800">₹{amt.toLocaleString('en-IN')}</td>
                      <td className="p-3.5 text-neutral-500">₹{cumAmt.toLocaleString('en-IN')} ({cumPct}%)</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. AREA CONVERTER */}
      {activeTool === 'converter' && (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Land & Real Estate Area Unit Converter
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Instantly convert between Indian land units (Gaj / Sq. Yards) and global measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Input Value
              </label>
              <input
                type="number"
                value={convValue}
                onChange={(e) => setConvValue(Number(e.target.value))}
                className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-base font-bold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Unit of Measure
              </label>
              <select
                value={convUnit}
                onChange={(e) => setConvUnit(e.target.value as any)}
                className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="sqyd">Square Yards (Gaj)</option>
                <option value="sqft">Square Feet (Sq.Ft.)</option>
                <option value="sqm">Square Metres (Sq.M.)</option>
                <option value="acre">Acres</option>
              </select>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl">
              <span className="text-xs uppercase font-bold text-teal-800 tracking-wider">Square Yards (Gaj)</span>
              <div className="text-2xl font-extrabold text-teal-950 font-mono mt-1">{convSqYards.toLocaleString('en-IN')}</div>
            </div>
            <div className="p-6 bg-neutral-100 border border-neutral-200 rounded-2xl">
              <span className="text-xs uppercase font-bold text-neutral-600 tracking-wider">Square Feet</span>
              <div className="text-2xl font-extrabold text-neutral-900 font-mono mt-1">{convSqFeet.toLocaleString('en-IN')}</div>
            </div>
            <div className="p-6 bg-neutral-100 border border-neutral-200 rounded-2xl">
              <span className="text-xs uppercase font-bold text-neutral-600 tracking-wider">Square Metres</span>
              <div className="text-2xl font-extrabold text-neutral-900 font-mono mt-1">{convSqMetres.toLocaleString('en-IN')}</div>
            </div>
            <div className="p-6 bg-neutral-100 border border-neutral-200 rounded-2xl">
              <span className="text-xs uppercase font-bold text-neutral-600 tracking-wider">Acres</span>
              <div className="text-2xl font-extrabold text-neutral-900 font-mono mt-1">{convAcres.toLocaleString('en-IN')}</div>
            </div>
          </div>
        </div>
      )}

      {/* 4. VIDEO LIBRARY */}
      {activeTool === 'videos' && (
        <div className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Authentic Site Visits & Monthly Market Analysis
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Watch real ground videos and drone walkthroughs from Prince Banga (Apka Apna Property Advisor).
            </p>
          </div>

          {/* Featured Video Player */}
          <div className="space-y-4">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-950 shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">{selectedVideo.category}</span>
              <h3 className="text-lg font-bold text-neutral-900">{selectedVideo.title}</h3>
              <p className="text-xs text-neutral-600 mt-1">{selectedVideo.description}</p>
            </div>
          </div>

          {/* Video Grid Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-neutral-200">
            {VIDEO_LIBRARY.map(vid => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                  selectedVideo.id === vid.id
                    ? 'border-teal-600 bg-teal-50/50 shadow-sm'
                    : 'border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-neutral-200 relative">
                  <img
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 line-clamp-2">{vid.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. ABOUT THE PUBLISHER */}
      {activeTool === 'about' && (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-8">
          <div className="space-y-3 pb-6 border-b border-neutral-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
              Publisher Profile & Legacy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              About Faridabad Master Plan & Prince Banga
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-2xl">
              Dedicated to organizing project information, location context, and buyer due-diligence checks for Faridabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900">Background & Philosophy</h3>
              <p>
                Faridabad Master Plan is maintained by <strong>Prince Banga</strong> (popularly known through the YouTube channel 
                <em>Apka Apna Property Advisor</em>). With a background in enterprise IT consulting and local real estate markets, 
                the platform brings a data-led approach to property information.
              </p>
              <p>
                Family heritage includes a multi-decade public service connection with the <strong>Faridabad Housing Board</strong> through 
                Sh. Daya Nand Banga. This historical familiarity with town planning regulations forms the foundation of our transparent buyer guidance.
              </p>
            </div>

            <div className="space-y-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h3 className="text-base font-bold text-neutral-900">Editorial & Verification Code</h3>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>We distinguish statutory project facts from promotional developer claims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Never fabricate property prices, government approvals, or appreciation timelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>All documents linked directly to verified Haryana RERA and DTCP gazette records.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 6. DIRECT CONSULTATION FORM */}
      {activeTool === 'contact' && (
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900">
              Direct Advisory Consultation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Submit your inquiry to receive project cost sheets, layout blueprints, and verified availability.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950">Inquiry Received Successfully</h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Thank you, <strong>{formName}</strong>. Our advisory desk has logged your request regarding <strong>{formProject}</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://wa.me/919818811971?text=Hi%20Prince,%20I%20am%20${encodeURIComponent(formName)}%20and%20I%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formProject)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2.5 border border-neutral-300 rounded-xl text-xs font-semibold text-neutral-700"
                >
                  New Submission
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rajesh Ahuja"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+91 98188 xxxxx"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    I am a:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormRole('Customer')}
                      className={`flex-1 py-2 text-xs rounded-lg font-semibold transition-colors ${
                        formRole === 'Customer' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      Homebuyer / Investor
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormRole('Property Dealer')}
                      className={`flex-1 py-2 text-xs rounded-lg font-semibold transition-colors ${
                        formRole === 'Property Dealer' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      Property Dealer
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Project of Interest
                  </label>
                  <select
                    value={formProject}
                    onChange={(e) => setFormProject(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {ALL_PROJECTS.map(p => (
                      <option key={p.id} value={`${p.name} (${p.sector})`}>
                        {p.name} ({p.sector})
                      </option>
                    ))}
                    <option value="General Faridabad Plotted Inquiry">General Plotted Land Inquiry</option>
                    <option value="Commercial Shops Inquiry">Commercial Shops Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Specific Requirements or Message
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell us your preferred budget, configuration (2/3/4 BHK or plot size), or questions..."
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry to Prince Banga Desk</span>
              </button>
            </form>
          )}

          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <span>Direct helpline: +91 98188 11971 / +91 98183 01350</span>
            <span className="text-teal-700 font-semibold">Strict zero-spam policy</span>
          </div>
        </div>
      )}

    </div>
  );
};
