import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, Calculator, CheckCircle2, FileText, Home, MapPin,
  MessageCircle, ShieldCheck, Info, ExternalLink, ClipboardCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';

interface AffordableHousingPageProps {
  onSelectProject: (project: PropertyProject) => void;
}

const formatINR = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export const AffordableHousingPage: React.FC<AffordableHousingPageProps> = ({ onSelectProject }) => {
  const [carpetArea, setCarpetArea] = useState(645.52);

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
    const balcony = 130000;
    const subtotal = basicCost + balcony;
    const gst = Math.round(subtotal * 0.01);
    return { basicCost, balcony, subtotal, gst, total: subtotal + gst };
  }, [carpetArea]);

  const projects = ALL_PROJECTS.filter(project => project.category === 'Affordable');

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
      </section>

      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 p-7 sm:p-10">
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700">Interactive planning tool</div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Affordable flat cost calculator</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600">
              This restores the earlier website illustration: ₹5,450 per sq.ft. of carpet area, a fixed ₹1,30,000 balcony charge and 1% GST on the subtotal. These are legacy illustrative inputs, not a confirmation that every scheme or current allotment uses the same rates or tax treatment.
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
                <label htmlFor="carpet-area" className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">Custom carpet area (sq.ft.)</label>
                <input id="carpet-area" type="number" min="300" max="1200" step="0.01" value={carpetArea} onChange={e => setCarpetArea(Math.min(1200, Math.max(300, Number(e.target.value) || 300)))} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900"><Info className="mb-1 inline h-4 w-4" /> The calculator excludes stamp duty, registration, utility/meter charges, parking or other project-specific extras unless stated in a promoter cost sheet.</div>
            </div>
            <div className="space-y-5 bg-neutral-950 p-6 text-white sm:p-8 lg:col-span-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4"><span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Illustrative cost breakdown</span><span className="text-xs font-mono text-teal-300">INR</span></div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Basic cost ({carpetArea.toFixed(2)} × ₹5,450)</span><strong>{formatINR(estimates.basicCost)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Illustrative balcony charge</span><strong>{formatINR(estimates.balcony)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Subtotal before GST</span><strong>{formatINR(estimates.subtotal)}</strong></div>
                <div className="flex justify-between gap-4 border-b border-neutral-800 py-2"><span className="text-neutral-400">Illustrative GST (1%)</span><strong className="text-amber-300">{formatINR(estimates.gst)}</strong></div>
                <div className="flex flex-col gap-1 pt-3 sm:flex-row sm:items-end sm:justify-between"><span className="font-bold text-teal-300">Estimated illustrative total</span><strong className="text-2xl sm:text-3xl font-extrabold">{formatINR(estimates.total)}</strong></div>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-400">Always request the latest unit-wise demand / cost sheet and independently confirm applicable taxes and statutory charges before payment.</p>
            </div>
          </div>
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
