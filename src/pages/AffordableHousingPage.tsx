import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, Calculator, CheckCircle2, FileText, Home, MapPin,
  MessageCircle, ShieldCheck, Info, ExternalLink, ClipboardCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';
import { OFFICIAL_DRAWS } from '../data/drawsData';

interface AffordableHousingPageProps {
  onSelectProject: (project: PropertyProject) => void;
}

const formatINR = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export const AffordableHousingPage: React.FC<AffordableHousingPageProps> = ({ onSelectProject }) => {
  const [carpetArea, setCarpetArea] = useState(645.52);
  const [balconyArea, setBalconyArea] = useState(100);
  const [extraCharges, setExtraCharges] = useState(0);
  const [gstEnabled, setGstEnabled] = useState(true);
  const [parkingEnabled, setParkingEnabled] = useState(false);

  useEffect(() => {
    document.title = 'Affordable Housing in Faridabad | Projects, Policy & Cost Calculator';
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Explore affordable housing projects in Faridabad, understand Haryana policy basics, review project RERA details and use an illustrative flat-cost calculator.';
    return () => {
      document.title = 'FaridabadMasterPlan.in | Faridabad Real Estate & Urban Planning';
    };
  }, []);

  const estimates = useMemo(() => {
    const basicCost = Math.round(Math.max(0, carpetArea) * 5450);
    const chargeableBalconyArea = Math.min(Math.max(0, balconyArea), 100);
    const balcony = Math.round(chargeableBalconyArea * 1300);
    const parking = parkingEnabled ? Math.round((basicCost + balcony) * 0.10) : 0;
    const subtotal = basicCost + balcony + parking + Math.max(0, extraCharges);
    const gst = gstEnabled ? Math.round(subtotal * 0.01) : 0;
    return { basicCost, balcony, parking, subtotal, gst, total: subtotal + gst, chargeableBalconyArea };
  }, [carpetArea, balconyArea, extraCharges, gstEnabled, parkingEnabled]);

  const projects = ALL_PROJECTS.filter(project => project.category === 'Affordable');
  const policyPaymentSchedule = [
    { stage: 'At application / booking', pct: 5, timing: 'With application' },
    { stage: 'At allotment', pct: 20, timing: 'As per allotment letter' },
    { stage: '1st instalment', pct: 12.5, timing: 'Within 6 months' },
    { stage: '2nd instalment', pct: 12.5, timing: 'Within 12 months' },
    { stage: '3rd instalment', pct: 12.5, timing: 'Within 18 months' },
    { stage: '4th instalment', pct: 12.5, timing: 'Within 24 months' },
    { stage: '5th instalment', pct: 12.5, timing: 'Within 30 months' },
    { stage: '6th instalment', pct: 12.5, timing: 'Within 36 months' }
  ];
  const anantyaClp = [
    { stage: 'Application', pct: 5 }, { stage: 'Allotment', pct: 20 },
    { stage: 'Start of construction', pct: 10 }, { stage: 'Basement roof slab', pct: 5 },
    { stage: '3rd floor roof slab', pct: 5 }, { stage: '6th floor roof slab', pct: 5 },
    { stage: '9th floor roof slab', pct: 5 }, { stage: 'Top floor', pct: 5 },
    { stage: 'Start of electrical works', pct: 5 }, { stage: 'Start of internal plaster', pct: 5 },
    { stage: 'Start of flooring', pct: 5 }, { stage: 'Start of door/window frames', pct: 5 },
    { stage: 'Start of external roads', pct: 5 }, { stage: 'External development works', pct: 5 },
    { stage: 'External plaster', pct: 5 }, { stage: 'Offer of possession', pct: 5 }
  ];

  const whatsappUrl = 'https://wa.me/919818811971?text=Hi%20Prince%2C%20I%20am%20looking%20for%20affordable%20housing%20information%20in%20Faridabad.%20Please%20guide%20me.';

  return (
    <div className="pb-20 space-y-16">
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(20,184,166,0.22),transparent_35%),linear-gradient(135deg,#0a0a0a,#102522)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/60 bg-teal-950/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-300">
              <Home className="w-3.5 h-3.5" /> Dedicated affordable housing guide
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Affordable Housing in <span className="text-teal-300">Faridabad</span>
            </h1>
            <p className="max-w-2xl text-sm sm:text-lg leading-relaxed text-neutral-300">
              Understand the Haryana affordable housing framework, compare listed developments, review public RERA information and estimate an illustrative flat cost before making an enquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-teal-300">
                Explore listed projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#calculator" className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-600 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Estimate flat cost <Calculator className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs font-semibold text-teal-200">
              <a href="#policy" className="hover:text-white">Policy basics & 2026 updates</a>
              <a href="#payment-plan" className="hover:text-white">Payment plan</a>
              <a href="#preferences" className="hover:text-white">3rd & 4th preferences</a>
              <a href="#draw-results" className="hover:text-white">Draw results</a>
              <a href="#eligibility" className="hover:text-white">Eligibility & process</a>
              <a href="#faqs" className="hover:text-white">FAQs</a>
            </div>
            <p className="text-[11px] text-neutral-400">Independent information resource. Not a government portal, project promoter or guarantee of allotment or availability.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { title: 'Understand the policy', text: 'Learn how policy-based housing differs from regular market-priced residential projects.', icon: FileText },
          { title: 'Review project records', text: 'Check each project’s published RERA reference, location, status and available documents.', icon: ShieldCheck },
          { title: 'Plan your budget', text: 'Use the illustrative calculator, then confirm the current cost sheet with the promoter.', icon: Calculator }
        ].map((item, index) => {
          const Icon = item.icon;
          return <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><Icon className="w-5 h-5" /></div>
            <h2 className="font-bold text-neutral-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
          </motion.div>;
        })}
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Faridabad project directory</div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Affordable housing projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">Project information is drawn from the website’s project records. Status, pricing, draw details and inventory can change; verify the latest position before relying on it.</p>
          </div>
          <span className="text-xs font-semibold text-neutral-500">{projects.length} listed projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article key={project.id} whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute left-3 top-3 rounded-md bg-neutral-950/85 px-2.5 py-1 text-[10px] font-bold text-white">{project.status}</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500"><MapPin className="w-3.5 h-3.5 text-teal-700" />{project.sector} · {project.developer}</div>
                <h3 className="text-lg font-bold text-neutral-900">{project.name}</h3>
                <p className="text-sm font-extrabold text-teal-800">{project.price}</p>
                <p className="text-xs leading-relaxed text-neutral-600">{project.description}</p>
                <div className="space-y-1 border-t border-neutral-100 pt-3 text-xs text-neutral-600">
                  <p><strong>Configuration:</strong> {project.configurations.join(' · ')}</p>
                  {project.reraNumber && <p><strong>RERA reference:</strong> {project.reraNumber}</p>}
                  {project.landArea && <p><strong>Project scale:</strong> {project.landArea}</p>}
                </div>
                {project.keyHighlights.length > 0 && <ul className="space-y-1.5 text-xs text-neutral-600">
                  {project.keyHighlights.slice(0, 3).map((highlight, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700" />{highlight}</li>)}
                </ul>}
                {project.pricingBreakdown && <div className="rounded-xl bg-neutral-50 p-3 text-xs text-neutral-600 space-y-1.5">
                  <p className="font-bold text-neutral-800">Indicative price components</p>
                  <p><strong>Basic price:</strong> {project.pricingBreakdown.bsp}</p>
                  {project.pricingBreakdown.balcony && <p><strong>Balcony:</strong> {project.pricingBreakdown.balcony}</p>}
                  {project.pricingBreakdown.gst && <p><strong>GST:</strong> {project.pricingBreakdown.gst}</p>}
                  {project.pricingBreakdown.totalIllustration && <p><strong>Illustration:</strong> {project.pricingBreakdown.totalIllustration}</p>}
                  {project.pricingBreakdown.notes && <p>{project.pricingBreakdown.notes}</p>}
                </div>}
                {project.paymentPlan && <div className="rounded-xl border border-neutral-200 p-3 text-xs text-neutral-600 space-y-1.5">
                  <p className="font-bold text-neutral-800">Payment plan · {project.paymentPlan.type}</p>
                  <p className="leading-relaxed">{project.paymentPlan.details}</p>
                </div>}
                <div className="flex flex-wrap gap-2 pt-2">
                  <button onClick={() => onSelectProject(project)} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-2.5 text-xs font-bold text-white hover:bg-neutral-700">Project details <ArrowRight className="w-3.5 h-3.5" /></button>
                  {project.brochurePdf && <a href={project.brochurePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50">Brochure <ExternalLink className="w-3 h-3" /></a>}
                  {project.layoutPdf && <a href={project.layoutPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50">Plan / PDF <ExternalLink className="w-3 h-3" /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <article className="mt-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-wider text-teal-700">Additional Faridabad affordable-housing draw archive</p><h3 className="mt-1 text-lg font-bold text-neutral-900">Advitya Homes-II · Sector 143</h3><p className="mt-1 text-sm text-neutral-600">Project ID 220 · Draw recorded 10 June 2026 · The website holds winner and waiting-list PDFs. Verify the exact scheme and current status in the original records.</p></div>
            <div className="flex flex-wrap gap-2"><a href="/assets/aistudio/Advitya_Winner_83b5a856.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2.5 text-xs font-bold text-white">Winner list <ExternalLink className="h-3.5 w-3.5" /></a><a href="/assets/aistudio/Advitya_waiting_6983e013.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-xs font-bold text-neutral-700">Waiting list <ExternalLink className="h-3.5 w-3.5" /></a></div>
          </div>
        </article>
      </section>

      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 p-7 sm:p-10">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Interactive planning tool</div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Affordable flat cost calculator</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              Illustrative Faridabad calculation using ₹5,450 per sq.ft. carpet area and balcony recovery of ₹1,300 per sq.ft. up to 100 sq.ft. (maximum ₹1.30 lakh). Rate applicability depends on the project's licence/allotment stage and current government orders. GST and other charges must be confirmed from the project's demand letter.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="space-y-5 bg-neutral-50 p-6 sm:p-8 lg:col-span-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">Choose a sample unit size</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{label:'2 BHK · 496 sq.ft.',value:496.33},{label:'2 BHK · 532 sq.ft.',value:532.38},{label:'3 BHK · 645 sq.ft.',value:645.52}].map(preset => <button key={preset.value} type="button" onClick={() => setCarpetArea(preset.value)} className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors ${carpetArea === preset.value ? 'border-teal-700 bg-teal-700 text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:border-teal-500'}`}>{preset.label}</button>)}
                </div>
              </div>
              <div>
                <label htmlFor="carpet-area" className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">Carpet area (sq.ft.)</label>
                <input id="carpet-area" type="number" min="280" max="700" step="0.01" value={carpetArea} onChange={e => setCarpetArea(Math.min(700, Math.max(280, Number(e.target.value) || 280)))} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
              </div>
              <div>
                <label htmlFor="balcony-area" className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">Balcony area (sq.ft.)</label>
                <input id="balcony-area" type="number" min="0" max="200" step="1" value={balconyArea} onChange={e => setBalconyArea(Math.min(200, Math.max(0, Number(e.target.value) || 0)))} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
                <p className="mt-1 text-[11px] text-neutral-500">Chargeable area is capped at 100 sq.ft. in this illustration.</p>
              </div>
              <div>
                <label htmlFor="extra-charges" className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">Other charges (optional ₹)</label>
                <input id="extra-charges" type="number" min="0" step="1000" value={extraCharges} onChange={e => setExtraCharges(Math.max(0, Number(e.target.value) || 0))} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
              </div>
              <label className="flex items-center gap-2 text-xs font-semibold text-neutral-700"><input type="checkbox" checked={parkingEnabled} onChange={e => setParkingEnabled(e.target.checked)} className="h-4 w-4 accent-teal-700" /> Add illustrative mandatory parking at 10% (where 2026 amendment applies)</label>
              <label className="flex items-center gap-2 text-xs font-semibold text-neutral-700"><input type="checkbox" checked={gstEnabled} onChange={e => setGstEnabled(e.target.checked)} className="h-4 w-4 accent-teal-700" /> Include illustrative 1% GST estimate</label>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900"><Info className="mb-1 inline h-4 w-4" /> Stamp duty, registration, maintenance, utility/meter charges, parking and other project-specific charges may be extra. GST treatment depends on the transaction and project status.</div>
            </div>
            <div className="space-y-5 bg-neutral-950 p-6 text-white sm:p-8 lg:col-span-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4"><span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Illustrative cost breakdown</span><span className="text-xs font-mono text-teal-300">INR</span></div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Basic cost ({carpetArea.toFixed(2)} × ₹5,450)</span><strong>{formatINR(estimates.basicCost)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Illustrative balcony charge</span><strong>{formatINR(estimates.balcony)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Chargeable balcony area</span><strong>{estimates.chargeableBalconyArea.toLocaleString('en-IN')} sq.ft.</strong></div>
                {parkingEnabled && <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Illustrative parking (10%)</span><strong>{formatINR(estimates.parking)}</strong></div>}
                {extraCharges > 0 && <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Other charges entered</span><strong>{formatINR(extraCharges)}</strong></div>}
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Subtotal before GST</span><strong>{formatINR(estimates.subtotal)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">{gstEnabled ? 'Illustrative GST (1%)' : 'GST excluded'}</span><strong className="text-amber-300">{formatINR(estimates.gst)}</strong></div>
                <div className="flex flex-col gap-1 pt-3 sm:flex-row sm:items-end sm:justify-between"><span className="font-bold text-teal-300">Estimated illustrative total</span><strong className="text-2xl sm:text-3xl font-extrabold">{formatINR(estimates.total)}</strong></div>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-400">Always request the latest unit-wise demand / cost sheet and independently confirm applicable taxes and statutory charges before payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy payment plan example */}
      <section id="payment-plan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Buyer budgeting guide</div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">Affordable housing payment plan – 36-month example</h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-600">The commonly published Affordable Housing Policy 2013 schedule is 5% at application, 20% at allotment and the remaining 75% in six equal half-yearly instalments over three years. Project-specific amendments, allotment letters and demand schedules take priority.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="flex flex-col gap-1 border-b border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Example amount used</p><p className="text-xl font-extrabold text-neutral-900">{formatINR(estimates.basicCost + estimates.balcony)}</p></div>
            <p className="text-xs text-neutral-500">Illustrative flat + balcony base; GST, parking and other extras may be payable separately.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-neutral-100 text-xs uppercase tracking-wider text-neutral-600"><tr><th className="p-3">Payment stage</th><th className="p-3">Share</th><th className="p-3">Indicative amount</th><th className="p-3">When</th></tr></thead>
              <tbody className="divide-y divide-neutral-100">{policyPaymentSchedule.map((item, i) => <tr key={item.stage}><td className="p-3 font-medium text-neutral-800">{item.stage}</td><td className="p-3">{item.pct}%</td><td className="p-3 font-bold text-teal-800">{formatINR(Math.round((estimates.basicCost + estimates.balcony) * item.pct / 100))}</td><td className="p-3 text-neutral-600">{item.timing}</td></tr>)}</tbody>
              <tfoot className="bg-neutral-50 font-bold"><tr><td className="p-3">Total</td><td className="p-3">100%</td><td className="p-3">{formatINR(policyPaymentSchedule.reduce((sum, item) => sum + Math.round((estimates.basicCost + estimates.balcony) * item.pct / 100), 0))}*</td><td className="p-3 text-xs font-normal text-neutral-500">*Rounding may create a small difference.</td></tr></tfoot>
            </table>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-bold text-neutral-900">Anantya by True Habitat – project-specific CLP illustration</h3>
          <p className="mt-1 text-sm text-neutral-600">Your website also stores a separate 16-stage construction-linked schedule for Anantya. This is not the same as the general six-monthly policy schedule. Check the latest project payment-plan PDF before payment.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{anantyaClp.map((item, i) => <div key={item.stage} className="rounded-xl bg-neutral-50 p-3"><p className="text-[11px] text-neutral-500">{String(i + 1).padStart(2, '0')} · {item.stage}</p><p className="mt-1 text-lg font-extrabold text-neutral-900">{item.pct}%</p><p className="text-xs font-semibold text-teal-800">{formatINR(Math.round((estimates.basicCost + estimates.balcony) * item.pct / 100))}*</p></div>)}</div>
          <a href="/assets/aistudio/Anantya_Payment_Plan_e1d01465.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950">View Anantya payment plan PDF <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      {/* What the scheme is and latest policy notes */}
      <section id="policy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div><div className="text-xs font-bold uppercase tracking-widest text-teal-700">Policy explained simply</div><h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">What is Haryana Affordable Housing?</h2><p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">Haryana's Affordable Housing Policy 2013 provides a framework for licensed group-housing projects with defined apartment sizes, capped allotment rates, eligibility rules and an allotment process. It is not the same as regular market-priced group housing, DDJAY plotted colonies, or the separate Housing for All 2018 core-area scheme.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-teal-700">Apartment size</p><p className="mt-2 text-2xl font-extrabold text-neutral-900">28–60 m²</p><p className="mt-1 text-xs leading-relaxed text-neutral-600">The original 2013 policy defined the carpet-area range. Always verify the applicable amended policy and sanctioned unit plan.</p></div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-teal-700">Faridabad rate cap</p><p className="mt-2 text-2xl font-extrabold text-neutral-900">₹5,450/sq.ft.</p><p className="mt-1 text-xs leading-relaxed text-neutral-600">2026 reported revised maximum rate for applicable 2013-policy licences yet to make allotments; not every existing allotment is automatically repriced.</p></div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wider text-teal-700">Balcony recovery</p><p className="mt-2 text-2xl font-extrabold text-neutral-900">Up to ₹1.30 lakh</p><p className="mt-1 text-xs leading-relaxed text-neutral-600">Illustrative revised cap: ₹1,300/sq.ft. up to 100 sq.ft., subject to the project's licence and applicable notification.</p></div>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-amber-950">Important 2026 update – rate, balcony and parking</h3>
          <p className="mt-2 text-sm leading-relaxed text-amber-900">The 2026 amendment summary records a Faridabad maximum allotment rate of ₹5,450/sq.ft. carpet area, balcony recovery at ₹1,300/sq.ft. capped at 100 sq.ft. (₹1.30 lakh), and mandatory parking of one ECS per dwelling unit at 10% of flat cost for applicable projects. The revised rates apply to licences yet to make allotments; projects with applications already invited may have differential-demand and withdrawal/refund provisions. Parking changes have specific conditions for previously sanctioned projects and projects with all tower OCs.</p>
          <p className="mt-2 text-xs leading-relaxed text-amber-900">Do not apply these figures blindly to a project that has already completed its draw or received OCs. Confirm the licence date, allotment stage, sanctioned building plan, latest signed government memo and promoter's cost sheet.</p>
          <a href="https://www.affordablehomesgurgaon.in/amendment-in-affordable-housing-policy-2013-key-updates-and-impact-on-buyers-in-haryana/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-amber-950 underline">Read the published 2026 amendment summary <ExternalLink className="h-3.5 w-3.5" /></a>
        </div>
      </section>

      {/* Application preference and policy priority explainer */}
      <section id="preferences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Application form guide</div>
            <h2 className="mt-1 text-2xl font-extrabold text-neutral-900">What are 1st, 2nd, 3rd and 4th preferences?</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">Some promoter application forms provide four preference fields. In that form, the numbers normally indicate the order in which the applicant ranks the available choices: first choice, second choice, third choice and fourth choice. The form must specify what is being ranked – for example, unit type or another project option.</p>
            <div className="mt-5 space-y-3">
              {[['1st preference','Your first-choice option.'],['2nd preference','Your next choice if the first choice cannot be considered.'],['3rd preference','Your third-ranked option, considered only as the project’s application/allotment rules allow.'],['4th preference','Your fourth-ranked option, considered only if the form and available inventory permit.']].map(([label,desc]) => <div key={label} className="flex gap-3 rounded-xl bg-neutral-50 p-3"><span className="min-w-[112px] text-sm font-bold text-teal-800">{label}</span><span className="text-sm text-neutral-600">{desc}</span></div>)}
            </div>
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">Important: a preference number is not a guarantee of allotment, a reservation category or an automatic increase in draw probability. The exact meaning depends on the specific project's official application form and draw rules.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Government policy priority</div>
            <h2 className="mt-1 text-2xl font-extrabold text-neutral-900">Policy preference is different from form preference</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">The 2018 amendment to the 2013 policy describes priority for identified PMAY beneficiaries of the same town, then other identified PMAY beneficiaries in Haryana, followed by eligible applicants meeting the policy's property-ownership condition. This is a policy priority sequence, not the same as selecting 1st–4th options on a project form.</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" /><span><strong>Priority 1:</strong> identified PMAY beneficiaries of the same town, as applicable.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" /><span><strong>Priority 2:</strong> other identified PMAY beneficiaries in Haryana.</span></li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" /><span><strong>Next eligible group:</strong> applicants meeting the policy's stated no-property ownership condition.</span></li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500">The amended 2013 policy priority sequence above does not create a universal fourth preference tier. A fourth preference shown on a promoter's form is a separate ranked-choice field. Do not assume that every project or separate Housing for All scheme follows identical preference tiers. The current project brochure, official notification and application form govern.</p>
          </div>
        </div>
      </section>

      {/* Draw results and waitlists */}
      <section id="draw-results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Allotment transparency</div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">Affordable housing draw results & waiting lists</h2>
          <p className="mt-2 text-sm text-neutral-600">Use the linked official PDFs to check the complete applicant lists. A small sample record on this page is not a substitute for the full result PDF.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {OFFICIAL_DRAWS.filter(draw => draw.projectId !== '230').map(draw => <article key={draw.projectId} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Project ID {draw.projectId}</p><h3 className="mt-1 text-lg font-bold text-neutral-900">{draw.projectName}</h3><p className="mt-1 text-xs text-neutral-500">{draw.sector} · Draw: {draw.drawDate}</p></div><span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-bold text-neutral-700">Draw recorded</span></div>
            <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-neutral-50 p-3"><p className="text-xs text-neutral-500">Successful allotments</p><p className="text-xl font-extrabold text-neutral-900">{draw.totalWinners}</p></div><div className="rounded-xl bg-neutral-50 p-3"><p className="text-xs text-neutral-500">Waiting list entries</p><p className="text-xl font-extrabold text-neutral-900">{draw.totalWaitlist}</p></div></div>
            <p className="mt-3 text-xs text-neutral-500">Authority: {draw.authority}</p>
            <div className="mt-4 flex flex-wrap gap-2"><a href={draw.winnerPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2.5 text-xs font-bold text-white">Winner list PDF <ExternalLink className="h-3.5 w-3.5" /></a><a href={draw.waitlistPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2.5 text-xs font-bold text-neutral-700">Waiting list PDF <ExternalLink className="h-3.5 w-3.5" /></a></div>
          </article>)}
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Project ID 230</p><h3 className="mt-1 text-lg font-bold text-neutral-900">Anantya by True Habitat</h3><p className="mt-1 text-xs text-neutral-500">Sector 110A · Draw recorded: 16 October 2026</p><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-neutral-50 p-3"><p className="text-xs text-neutral-500">Reported winners</p><p className="text-xl font-extrabold text-neutral-900">680</p></div><div className="rounded-xl bg-neutral-50 p-3"><p className="text-xs text-neutral-500">Reported waitlist</p><p className="text-xl font-extrabold text-neutral-900">163</p></div></div><p className="mt-3 text-xs leading-relaxed text-amber-800">The current document index does not yet contain verified Anantya winner and waitlist PDFs. We have deliberately not linked the brochure or payment-plan PDF as draw results.</p>
          </article>
        </div>
      </section>

      {/* Eligibility, application and buyer checklist */}
      <section id="eligibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Before applying</div><h2 className="mt-1 text-2xl font-extrabold text-neutral-900">Eligibility & application checklist</h2>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            {['Read the exact policy and amendments named in the project brochure.','Check applicant, spouse and dependent-child property declarations under the applicable scheme.','Confirm whether the project has an open application window or only resale / management-quota inventory.','Keep PAN, identity/address proof, photographs, bank details and the required project-specific affidavits ready.','Submit only through the channel named in the official advertisement and keep the acknowledgement/application number.','Pay only into the verified account named in the official application documents.'].map(item => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />{item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Draw to allotment</div><h2 className="mt-1 text-2xl font-extrabold text-neutral-900">How the process usually works</h2>
          <ol className="mt-5 space-y-3 text-sm text-neutral-700 list-decimal pl-5">
            <li>Read the advertisement, project brochure, unit categories, price and payment schedule.</li>
            <li>Submit the application with the required booking amount and documents before the closing date.</li>
            <li>Application scrutiny takes place; deficiencies or ineligibility are handled under the applicable rules.</li>
            <li>Eligible applicants participate in the notified draw, where applicable.</li>
            <li>Check the winner list and waiting list against your application number and category.</li>
            <li>If successful, verify the allotment letter, unit, payment deadlines, agreement and refund/cancellation clauses.</li>
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-neutral-500">The exact steps, time limits, interest/refund rights and any waiting-list movement depend on the applicable policy version and project documents.</p>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-6"><div className="text-xs font-bold uppercase tracking-widest text-teal-700">Common buyer questions</div><h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">Affordable housing FAQs</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Is every affordable project governed by exactly the same policy?','No. Check whether it is licensed under Affordable Housing Policy 2013, Housing for All 2018 or another scheme. The policy, amendments and project-specific approvals matter.'],
            ['Does 3rd or 4th preference guarantee a flat?','No. These are ranked choices where a project form provides them. They do not guarantee allotment; the form and draw rules determine how they are used.'],
            ['Can I apply in more than one project?','The applicable policy and affidavit conditions must be checked. The 2013 policy restricts multiple applications within a specific colony and limits successful allotment across colonies; verify the current amended wording before applying.'],
            ['What happens if my application is unsuccessful?','Refund treatment and timing depend on the applicable notification and project terms. Read the official brochure and keep proof of payment.'],
            ['Is the waiting list the same as the winner list?','No. A waiting-list position is conditional and may move only under the applicable allotment rules and availability.'],
            ['Does the calculator show the final amount payable?','No. It is a planning estimate. Confirm the unit-specific demand letter, taxes, parking, registration, maintenance and other charges.']
          ].map(([q,a]) => <details key={q} className="group rounded-xl border border-neutral-200 bg-white p-5"><summary className="cursor-pointer list-none pr-6 text-sm font-bold text-neutral-900 marker:hidden">{q}</summary><p className="mt-3 text-sm leading-relaxed text-neutral-600">{a}</p></details>)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-7">
          <div className="mb-4 flex items-center gap-2 text-teal-800"><ClipboardCheck className="h-5 w-5" /><h2 className="font-bold text-neutral-900">Before applying or booking</h2></div>
          <ul className="space-y-3 text-sm text-neutral-600">
            {['Read the current Haryana policy and project-specific allotment terms.','Verify the project and promoter details on the official Haryana RERA portal.','Check the latest draw, waiting list, cancellation and availability status where applicable.','Ask for the complete unit-wise cost sheet, payment schedule and refund terms in writing.','Review the allotment letter, agreement, possession conditions and applicable charges before signing.'].map(item => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />{item}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
          <h2 className="font-bold text-neutral-900">Useful official references</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">Use the official portals to verify the latest policy notifications, project registrations and statutory records. This page is an independent guide and is not a substitute for official documents or professional advice.</p>
          <div className="mt-5 flex flex-col gap-3 text-sm font-semibold">
            <a href="https://haryanarera.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950">Haryana RERA portal <ExternalLink className="h-3.5 w-3.5" /></a>
            <a href="https://pmay-urban.gov.in/material/component1/Notification_AFFORDABLE_HOUSING_POLICY_2013_Finalised%2018_08_2013.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950">Affordable Housing Policy 2013 (notification PDF) <ExternalLink className="h-3.5 w-3.5" /></a>
            <a href="https://ulbharyana.gov.in/img/pdf/Affordable%20Housing%20Policy%20under%20Housing%20for%20All%20for%20Core%20Area_Notified%20on%2026.6.2018.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950">Housing for All 2018 policy (core area) <ExternalLink className="h-3.5 w-3.5" /></a>
            <a href="https://tcpharyana.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950">Town & Country Planning Haryana <ExternalLink className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-neutral-950 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-2xl"><h2 className="text-2xl font-extrabold">Need help understanding an affordable housing project?</h2><p className="mt-2 text-sm text-neutral-300">Share the project name or your question. We can help you review the available public information and identify what needs to be verified.</p></div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-teal-300"><MessageCircle className="h-4 w-4" /> WhatsApp +91 98188 11971</a>
        </div>
      </section>
    </div>
  );
};
