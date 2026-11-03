import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Calculator, Check, CheckCircle2,
  ChevronDown, ClipboardCheck, ExternalLink, FileCheck2, Home, Info,
  Landmark, MapPin, MessageCircle, ShieldCheck, Wallet
} from 'lucide-react';
import { motion } from 'motion/react';
import { ALL_PROJECTS, PropertyProject } from '../data/projectsData';
import { OFFICIAL_DRAWS } from '../data/drawsData';

interface AffordableHousingPageProps {
  onSelectProject: (project: PropertyProject) => void;
}

const formatINR = (value: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const policyPaymentSchedule = [
  { stage: 'Application / booking', pct: 5, timing: 'At application' },
  { stage: 'Allotment', pct: 20, timing: 'As per allotment letter' },
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
  { stage: 'Electrical works', pct: 5 }, { stage: 'Internal plaster', pct: 5 },
  { stage: 'Flooring', pct: 5 }, { stage: 'Door / window frames', pct: 5 },
  { stage: 'External roads', pct: 5 }, { stage: 'External development', pct: 5 },
  { stage: 'External plaster', pct: 5 }, { stage: 'Offer of possession', pct: 5 }
];

const navItems = [
  ['Projects', '#projects'], ['Cost calculator', '#calculator'], ['Payment plan', '#payment-plan'],
  ['Policy & preferences', '#policy'], ['Draw results', '#draw-results'], ['FAQs', '#faqs']
];

export const AffordableHousingPage: React.FC<AffordableHousingPageProps> = ({ onSelectProject }) => {
  const [carpetArea, setCarpetArea] = useState(645.52);
  const [balconyArea, setBalconyArea] = useState(100);
  const [extraCharges, setExtraCharges] = useState(0);
  const [gstEnabled, setGstEnabled] = useState(true);
  const [parkingEnabled, setParkingEnabled] = useState(false);
  const [paymentExample, setPaymentExample] = useState<'policy' | 'anantya'>('policy');
  const [projectSearch, setProjectSearch] = useState('');

  useEffect(() => {
    document.title = 'Affordable Flats in Faridabad | Projects, Cost Calculator & Haryana Policy';
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = 'Compare affordable housing projects in Faridabad, check Haryana RERA references, understand eligibility and 1st–4th preferences, review draw lists and estimate flat cost with an interactive calculator.';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://faridabadmasterplan.in/affordable-housing';
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

  const projects = useMemo(() => ALL_PROJECTS
    .filter(project => project.category === 'Affordable')
    .filter(project => `${project.name} ${project.sector} ${project.developer}`.toLowerCase().includes(projectSearch.toLowerCase())),
    [projectSearch]);

  const selectedSchedule = paymentExample === 'policy' ? policyPaymentSchedule : anantyaClp;
  const paymentBase = 5450 * 645.52 + 130000;
  const whatsappUrl = 'https://wa.me/919818811971?text=Hi%2C%20I%20am%20looking%20for%20affordable%20housing%20information%20in%20Faridabad.%20Please%20guide%20me.';

  const projectAccent = (id: string) => {
    if (id.includes('anantya')) return 'from-cyan-400/25 via-teal-500/10 to-slate-950';
    if (id.includes('maulshree')) return 'from-amber-300/20 via-orange-500/10 to-slate-950';
    if (id.includes('soha')) return 'from-emerald-400/20 via-teal-500/10 to-slate-950';
    if (id.includes('legend')) return 'from-indigo-400/25 via-blue-500/10 to-slate-950';
    return 'from-teal-400/20 via-cyan-500/10 to-slate-950';
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_72%_18%,rgba(45,212,191,.17),transparent_36%),radial-gradient(ellipse_at_8%_80%,rgba(59,130,246,.13),transparent_38%),linear-gradient(135deg,#080d16_0%,#101d2c_58%,#07111b_100%)]" />
        <div className="absolute -right-28 top-12 -z-10 h-[34rem] w-[34rem] rounded-full border border-teal-200/10 shadow-[0_0_120px_rgba(45,212,191,.09)]" />
        <div className="absolute right-10 top-24 -z-10 h-[27rem] w-[27rem] rounded-full border border-blue-300/10" />
        <div className="sticky top-0 z-30 border-b border-white/10 bg-[#080d16]/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a href="/" className="text-[11px] font-black tracking-[.18em] text-teal-300">FARIDABAD MASTER PLAN</a>
            <nav className="hidden items-center gap-5 lg:flex">
              {navItems.map(([label, href]) => <a key={href} href={href} className="text-xs font-semibold text-slate-300 transition hover:text-teal-200">{label}</a>)}
            </nav>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-4 py-2 text-xs font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200">
              <MessageCircle className="h-3.5 w-3.5" /> Enquire
            </a>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-teal-200">
              <Home className="h-3.5 w-3.5" /> Faridabad · Buyer information hub
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.98] tracking-[-.065em] text-white sm:text-6xl lg:text-[76px]">
              Affordable homes.<br /><span className="bg-gradient-to-r from-teal-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Clear decisions.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore Haryana affordable housing projects in Faridabad, understand the policy, compare published project information and estimate your budget — with facts and verification links in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_12px_45px_rgba(45,212,191,.16)] transition hover:-translate-y-1 hover:bg-teal-200">Explore projects <ArrowRight className="h-4 w-4" /></a>
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"><Calculator className="h-4 w-4" /> Calculate cost</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-300" /> RERA references</span>
              <span className="inline-flex items-center gap-2"><Wallet className="h-4 w-4 text-teal-300" /> Payment plan guide</span>
              <span className="inline-flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-teal-300" /> Draw & policy information</span>
            </div>
            <p className="mt-7 max-w-2xl text-[11px] leading-5 text-slate-500">Independent information resource. Not a government portal, promoter, allotment authority or guarantee of price, availability or allotment.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto flex h-[330px] w-full max-w-[520px] items-center justify-center sm:h-[430px]">
            <div className="absolute h-[280px] w-[280px] rounded-full bg-teal-300/10 blur-3xl sm:h-[360px] sm:w-[360px]" />
            <div className="absolute h-[260px] w-[260px] rounded-full border border-teal-200/25 bg-[radial-gradient(circle_at_28%_25%,rgba(204,251,241,.8),rgba(45,212,191,.25)_22%,rgba(15,44,62,.92)_58%,rgba(5,12,22,.98)_78%)] shadow-[inset_-35px_-25px_70px_rgba(0,0,0,.65),0_0_90px_rgba(45,212,191,.15)] sm:h-[330px] sm:w-[330px]">
              <div className="absolute inset-0 grid place-items-center text-center">
                <div><div className="text-[10px] font-black uppercase tracking-[.3em] text-teal-100/80">Faridabad</div><div className="mt-2 text-6xl font-black tracking-[-.08em] text-white sm:text-7xl">HOME<span className="text-teal-300">.</span></div><div className="mt-2 text-[10px] font-bold uppercase tracking-[.24em] text-slate-300">Know before you choose</div></div>
              </div>
            </div>
            <div className="absolute left-[2%] top-[18%] h-40 w-[92%] rotate-[-24deg] rounded-[50%] border border-blue-300/40" />
            <div className="absolute left-[2%] top-[27%] h-40 w-[92%] rotate-[25deg] rounded-[50%] border border-teal-200/35" />
            <div className="absolute bottom-[8%] left-0 rounded-2xl border border-white/15 bg-slate-900/80 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <div className="text-2xl font-black text-teal-200">{projects.length} projects</div><div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">Currently listed in our directory</div>
            </div>
            <div className="absolute right-0 top-[12%] rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-white"><BadgeCheck className="h-4 w-4 text-teal-300" /> Verify first</div><div className="mt-1 text-[10px] text-slate-400">Check the latest official record</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-1 grid max-w-7xl gap-3 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          { n: '01', title: 'Understand the scheme', desc: 'Know the policy, eligibility and allotment process.' },
          { n: '02', title: 'Compare project records', desc: 'Review locations, RERA references and available documents.' },
          { n: '03', title: 'Plan the full cost', desc: 'Estimate the budget and verify every charge before booking.' }
        ].map((item, i) => <motion.div key={item.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#152438] to-[#0c1522] p-5 shadow-[0_20px_60px_rgba(0,0,0,.18)]">
          <div className="text-[10px] font-black tracking-[.22em] text-teal-300">{item.n} / BUYER GUIDE</div><h2 className="mt-3 text-lg font-extrabold text-white">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
        </motion.div>)}
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/10 bg-[#0b1421] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">The project directory</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Affordable housing projects<br /><span className="text-slate-400">in Faridabad</span></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">A growing directory of policy-based housing projects. Project status, application windows, draw outcomes, inventory and prices are not interchangeable — check the project record and current documents before making a decision.</p></div>
            <div className="w-full md:max-w-xs"><label htmlFor="affordable-project-search" className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">Find a project</label><div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3"><MapPin className="h-4 w-4 text-teal-300" /><input id="affordable-project-search" value={projectSearch} onChange={e => setProjectSearch(e.target.value)} placeholder="Project, sector or developer" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></div></div>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * .05, .2) }} className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#101d2c] shadow-[0_18px_55px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-teal-200/35 hover:shadow-[0_24px_65px_rgba(0,0,0,.35)]">
                <div className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${projectAccent(project.id)} p-5`}>
                  <div className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/15" /><div className="absolute -right-2 -top-8 h-44 w-44 rounded-full border border-white/10" />
                  <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_25%,rgba(255,255,255,.04)_25.2%,transparent_25.8%,transparent_50%,rgba(255,255,255,.03)_50.2%,transparent_50.8%)]" />
                  <div className="relative z-10"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-100/80">Affordable homes · Faridabad</div><div className="mt-2 text-4xl font-black tracking-[-.06em] text-white">{project.sector.replace('Sector ', 'S')}</div><div className="mt-1 text-xs font-semibold text-slate-300">{project.name}</div></div>
                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-[10px] font-bold text-white backdrop-blur">{project.status}</span>
                </div>
                <div className="space-y-4 p-5">
                  <div><div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400"><MapPin className="h-3.5 w-3.5 text-teal-300" />{project.location}</div><h3 className="mt-2 text-xl font-extrabold tracking-tight text-white">{project.name}</h3><p className="mt-1 text-xs text-slate-400">{project.developer}</p></div>
                  <div className="rounded-xl border border-white/10 bg-white/[.035] p-3"><div className="text-[9px] font-black uppercase tracking-[.18em] text-slate-500">Published price / status note</div><div className="mt-1 text-sm font-bold leading-6 text-teal-200">{project.price}</div></div>
                  <p className="text-xs leading-6 text-slate-400">{project.description}</p>
                  <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-slate-300">
                    <p><strong className="text-slate-100">Configuration:</strong> {project.configurations.join(' · ')}</p>
                    {project.reraNumber && <p className="leading-5"><strong className="text-slate-100">RERA:</strong> {project.reraNumber} {project.reraUrl && <a href={project.reraUrl} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-1 font-bold text-teal-300 underline">Official record <ArrowUpRight className="h-3 w-3" /></a>}</p>}
                    {project.landArea && <p><strong className="text-slate-100">Project scale:</strong> {project.landArea}</p>}
                  </div>
                  {project.keyHighlights.length > 0 && <ul className="space-y-2 text-xs leading-5 text-slate-400">{project.keyHighlights.slice(0, 3).map((highlight, i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" />{highlight}</li>)}</ul>}
                  {project.pricingBreakdown && <details className="rounded-xl border border-white/10 bg-black/10 p-3"><summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-slate-200">Indicative price components <ChevronDown className="h-4 w-4 text-teal-300" /></summary><div className="mt-3 space-y-2 text-xs leading-5 text-slate-400"><p><strong className="text-slate-200">Basic price:</strong> {project.pricingBreakdown.bsp}</p>{project.pricingBreakdown.balcony && <p><strong className="text-slate-200">Balcony:</strong> {project.pricingBreakdown.balcony}</p>}{project.pricingBreakdown.gst && <p><strong className="text-slate-200">GST:</strong> {project.pricingBreakdown.gst}</p>}{project.pricingBreakdown.totalIllustration && <p><strong className="text-slate-200">Illustration:</strong> {project.pricingBreakdown.totalIllustration}</p>}{project.pricingBreakdown.notes && <p>{project.pricingBreakdown.notes}</p>}</div></details>}
                  {project.paymentPlan && <details className="rounded-xl border border-white/10 bg-black/10 p-3"><summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-slate-200">Project payment plan <ChevronDown className="h-4 w-4 text-teal-300" /></summary><p className="mt-3 text-xs leading-5 text-slate-400">{project.paymentPlan.type}: {project.paymentPlan.details}</p></details>}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button onClick={() => onSelectProject(project)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-300 px-3 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-teal-200">Project details <ArrowRight className="h-3.5 w-3.5" /></button>
                    {project.brochurePdf && <a href={project.brochurePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-3 text-xs font-bold text-slate-200 transition hover:border-teal-200/50 hover:text-teal-200">Brochure <ExternalLink className="h-3 w-3" /></a>}
                    {project.layoutPdf && <a href={project.layoutPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-3 py-3 text-xs font-bold text-slate-200 transition hover:border-teal-200/50 hover:text-teal-200">Plan / PDF <ExternalLink className="h-3 w-3" /></a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {projects.length === 0 && <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-400">No matching affordable projects. Try another project name or sector.</div>}

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#17283b] to-[#101a28] p-6">
              <div className="text-[10px] font-black uppercase tracking-[.2em] text-amber-200">Draw archive · Sector 143</div><h3 className="mt-2 text-xl font-extrabold text-white">Advitya Homes-II</h3><p className="mt-2 text-sm leading-6 text-slate-400">Project ID 220 · Draw recorded 10 June 2026. The site holds winner and waiting-list PDFs; confirm the scheme and latest status in the original records.</p>
              <div className="mt-4 flex flex-wrap gap-2"><a href="/assets/aistudio/Advitya_Winner_83b5a856.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-4 py-2.5 text-xs font-extrabold text-slate-950">Winner list PDF ↗</a><a href="/assets/aistudio/Advitya_waiting_6983e013.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-4 py-2.5 text-xs font-bold text-white">Waiting list PDF ↗</a></div>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[.06] p-6">
              <div className="text-[10px] font-black uppercase tracking-[.2em] text-amber-200">Draw document verification</div><h3 className="mt-2 text-xl font-extrabold text-white">Anantya by True Habitat</h3><p className="mt-2 text-sm leading-6 text-slate-300">Draw recorded: 16 October 2026 · Reported: 680 winners and 163 waiting-list entries. Verified winner and waiting-list PDFs are not yet in the site document index, so no substitute PDF is linked.</p>
            </article>
            {OFFICIAL_DRAWS.filter(draw => draw.projectId !== '230').map(draw => <article key={draw.projectId} className="rounded-2xl border border-white/10 bg-[#101d2c] p-6">
              <div className="text-[10px] font-black uppercase tracking-[.2em] text-teal-300">Official draw archive · Project ID {draw.projectId}</div><h3 className="mt-2 text-xl font-extrabold text-white">{draw.projectName}</h3><p className="mt-1 text-xs text-slate-400">{draw.sector} · Draw date: {draw.drawDate} · Authority: {draw.authority}</p>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/5 p-3"><div className="text-[10px] text-slate-400">Successful allotments</div><div className="mt-1 text-2xl font-black text-white">{draw.totalWinners}</div></div><div className="rounded-xl bg-white/5 p-3"><div className="text-[10px] text-slate-400">Waiting list</div><div className="mt-1 text-2xl font-black text-white">{draw.totalWaitlist}</div></div></div>
              <div className="mt-4 flex flex-wrap gap-2"><a href={draw.winnerPdf} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-teal-300 px-4 py-2.5 text-xs font-extrabold text-slate-950">Winner PDF ↗</a><a href={draw.waitlistPdf} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-2.5 text-xs font-bold text-white">Waiting list ↗</a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">Plan your budget</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Affordable flat cost calculator</h2><p className="mt-4 text-sm leading-7 text-slate-400">A transparent illustration using the published 2026 Faridabad rate reference. Change the area and optional charges to understand how the estimate moves. This is not a project quotation or a final demand letter.</p></div>
          <div className="mt-9 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#101d2c] shadow-[0_30px_80px_rgba(0,0,0,.28)] lg:grid-cols-[.92fr_1.08fr]">
            <div className="space-y-6 bg-[#152438] p-6 sm:p-9">
              <div><div className="text-[10px] font-black uppercase tracking-[.18em] text-teal-200">01 / Unit selection</div><div className="mt-3 grid grid-cols-2 gap-2">
                {[{ label: '2 BHK · 496 sq.ft.', value: 496.33 }, { label: '2 BHK · 532 sq.ft.', value: 532.38 }, { label: '3 BHK · 645 sq.ft.', value: 645.52 }].map(preset => <button key={preset.value} type="button" onClick={() => setCarpetArea(preset.value)} className={`rounded-xl border px-3 py-3 text-xs font-bold transition ${carpetArea === preset.value ? 'border-teal-200 bg-teal-300 text-slate-950' : 'border-white/10 bg-white/5 text-slate-200 hover:border-teal-200/50'}`}>{preset.label}</button>)}
              </div></div>
              <div><label htmlFor="carpet-area" className="mb-2 block text-xs font-bold text-slate-200">Carpet area (sq.ft.)</label><input id="carpet-area" type="number" min="280" max="700" step="0.01" value={carpetArea} onChange={e => setCarpetArea(Math.min(700, Math.max(280, Number(e.target.value) || 280)))} className="w-full rounded-xl border border-white/15 bg-[#0b1421] px-4 py-3 text-sm font-bold text-white outline-none focus:border-teal-300" /></div>
              <div><label htmlFor="balcony-area" className="mb-2 block text-xs font-bold text-slate-200">Balcony area (sq.ft.)</label><input id="balcony-area" type="number" min="0" max="200" step="1" value={balconyArea} onChange={e => setBalconyArea(Math.min(200, Math.max(0, Number(e.target.value) || 0)))} className="w-full rounded-xl border border-white/15 bg-[#0b1421] px-4 py-3 text-sm font-bold text-white outline-none focus:border-teal-300" /><p className="mt-2 text-[10px] leading-5 text-slate-400">Chargeable balcony area is capped at 100 sq.ft. in this illustration.</p></div>
              <div><label htmlFor="extra-charges" className="mb-2 block text-xs font-bold text-slate-200">Other charges (optional ₹)</label><input id="extra-charges" type="number" min="0" step="1000" value={extraCharges} onChange={e => setExtraCharges(Math.max(0, Number(e.target.value) || 0))} className="w-full rounded-xl border border-white/15 bg-[#0b1421] px-4 py-3 text-sm font-bold text-white outline-none focus:border-teal-300" /></div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/[.035] p-4">
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-300"><input type="checkbox" checked={parkingEnabled} onChange={e => setParkingEnabled(e.target.checked)} className="mt-0.5 h-4 w-4 accent-teal-300" /><span><strong className="text-white">Include 10% parking illustration</strong><br />Only where the 2026 amendment and project conditions apply.</span></label>
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-300"><input type="checkbox" checked={gstEnabled} onChange={e => setGstEnabled(e.target.checked)} className="mt-0.5 h-4 w-4 accent-teal-300" /><span><strong className="text-white">Include 1% GST illustration</strong><br />Actual GST treatment depends on transaction and project status.</span></label>
              </div>
              <div className="rounded-xl border border-amber-200/20 bg-amber-200/[.06] p-4 text-[11px] leading-5 text-amber-100"><Info className="mr-1 inline h-3.5 w-3.5" /> Stamp duty, registry, maintenance, utility/meter charges and other project-specific costs may be extra. Confirm the signed unit cost sheet before payment.</div>
            </div>
            <div className="flex flex-col justify-between bg-[radial-gradient(ellipse_at_80%_0%,rgba(45,212,191,.12),transparent_45%),#0c1522] p-6 sm:p-9">
              <div><div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="text-[10px] font-black uppercase tracking-[.2em] text-slate-400">02 / Estimated cost breakdown</div><span className="text-[10px] font-bold text-teal-200">INR</span></div>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between gap-4"><span className="text-slate-400">Basic cost · {carpetArea.toFixed(2)} × ₹5,450</span><strong className="text-white">{formatINR(estimates.basicCost)}</strong></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-400">Balcony · {estimates.chargeableBalconyArea} × ₹1,300</span><strong className="text-white">{formatINR(estimates.balcony)}</strong></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-400">Parking illustration</span><strong className="text-white">{formatINR(estimates.parking)}</strong></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-400">Other charges</span><strong className="text-white">{formatINR(Math.max(0, extraCharges))}</strong></div>
                  <div className="flex justify-between gap-4"><span className="text-slate-400">Illustrative GST</span><strong className="text-white">{formatINR(estimates.gst)}</strong></div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-teal-200/25 bg-teal-200/[.08] p-5">
                <div className="text-[10px] font-black uppercase tracking-[.2em] text-teal-200">Estimated total</div><div className="mt-2 text-4xl font-black tracking-[-.05em] text-white sm:text-5xl">{formatINR(estimates.total)}</div><div className="mt-2 text-xs text-slate-400">Illustrative only · subject to applicable policy and project-specific charges</div>
                <a href={`${whatsappUrl}%20My%20calculator%20estimate%20is%20${encodeURIComponent(formatINR(estimates.total))}.`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-teal-200"><MessageCircle className="h-4 w-4" /> Discuss this estimate</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[10px] leading-5 text-slate-500">Rate reference: 2026 published amendment summary. The revised rate is not automatically applicable to every previously allotted or draw-completed unit. Check the relevant licence date, allotment stage, official notification and project demand letter.</p>
        </div>
      </section>

      <section id="payment-plan" className="scroll-mt-24 border-y border-white/10 bg-[#0b1421] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">Understand the instalments</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Payment plan, explained</h2><p className="mt-4 text-sm leading-7 text-slate-400">See how a general 36-month policy schedule differs from a project-specific construction-linked plan. Use the example amounts for planning, not as a payment demand.</p></div>
          <div className="mt-8 flex flex-wrap gap-2"><button onClick={() => setPaymentExample('policy')} className={`rounded-full px-5 py-3 text-xs font-extrabold transition ${paymentExample === 'policy' ? 'bg-teal-300 text-slate-950' : 'border border-white/15 bg-white/5 text-slate-300'}`}>General 36-month schedule</button><button onClick={() => setPaymentExample('anantya')} className={`rounded-full px-5 py-3 text-xs font-extrabold transition ${paymentExample === 'anantya' ? 'bg-teal-300 text-slate-950' : 'border border-white/15 bg-white/5 text-slate-300'}`}>Anantya CLP example</button></div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#17283b] to-[#101a28] p-6">
              <div className="text-[10px] font-black uppercase tracking-[.18em] text-teal-200">Illustrative base for example</div><div className="mt-3 text-3xl font-black text-white">{formatINR(paymentBase)}</div><p className="mt-2 text-xs leading-5 text-slate-400">3 BHK sample: 645.52 sq.ft. × ₹5,450 plus ₹1.30 lakh balcony. Excludes GST, parking and other charges.</p><div className="mt-6 space-y-3 border-t border-white/10 pt-5"><div className="flex justify-between text-xs"><span className="text-slate-400">Schedule total</span><strong className="text-teal-200">{selectedSchedule.reduce((sum, item) => sum + item.pct, 0)}%</strong></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-blue-300" style={{ width: `${selectedSchedule.reduce((sum, item) => sum + item.pct, 0)}%` }} /></div><p className="text-[10px] leading-5 text-slate-500">{paymentExample === 'policy' ? 'General schedule reference based on the 2013 policy payment structure.' : 'Project-specific Anantya construction-linked example. Confirm the latest signed schedule.'}</p></div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101d2c]">
              <div className="grid grid-cols-[1fr_76px_1fr] gap-3 border-b border-white/10 bg-white/[.04] px-5 py-4 text-[9px] font-black uppercase tracking-[.16em] text-slate-400"><span>Milestone</span><span className="text-right">Share</span><span className="text-right">Example amount</span></div>
              <div className="divide-y divide-white/[.07]">{selectedSchedule.map((item, i) => <div key={item.stage} className="grid grid-cols-[1fr_76px_1fr] items-center gap-3 px-5 py-3 text-xs"><div><div className="font-bold text-slate-200">{item.stage}</div>{'timing' in item && <div className="mt-1 text-[10px] text-slate-500">{item.timing}</div>}</div><div className="text-right font-extrabold text-teal-200">{item.pct}%</div><div className="text-right font-bold text-white">{formatINR(paymentBase * item.pct / 100)}</div></div>)}</div>
              <div className="flex items-center justify-between bg-white/[.04] px-5 py-4 text-xs"><strong className="text-white">Total</strong><strong className="text-teal-200">100% · {formatINR(paymentBase)}</strong></div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-amber-200/20 bg-amber-200/[.05] p-4 text-xs leading-6 text-amber-100"><Info className="mr-1 inline h-4 w-4" /> The original policy schedule is not a substitute for the actual allotment letter. A project's approved construction-linked schedule and signed demand notices take precedence. Never pay based only on this illustration.</div>
        </div>
      </section>

      <section id="policy" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">Policy, eligibility & application</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Know the rules before you apply.</h2><p className="mt-4 text-sm leading-7 text-slate-400">Haryana's Affordable Housing Policy 2013 provides a framework for licensed group-housing projects with defined apartment sizes, allotment rates, eligibility rules and an allotment process. It is different from regular market-priced group housing, DDJAY plotted colonies and the separate Housing for All 2018 core-area scheme.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[{label:'Original carpet-area range',value:'28–60 m²',desc:'As defined in the 2013 policy; check applicable amendments and sanctioned unit plans.'},{label:'2026 Faridabad rate reference',value:'₹5,450 / sq.ft.',desc:'Reported revised maximum rate for applicable licences yet to make allotments; not a blanket repricing.'},{label:'Balcony recovery reference',value:'Up to ₹1.30 lakh',desc:'₹1,300/sq.ft. up to 100 sq.ft. where the relevant amendment applies.'}].map(item => <div key={item.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#152438] to-[#0e1826] p-6"><div className="text-[10px] font-black uppercase tracking-[.16em] text-teal-200">{item.label}</div><div className="mt-3 text-3xl font-black tracking-[-.04em] text-white">{item.value}</div><p className="mt-3 text-xs leading-6 text-slate-400">{item.desc}</p></div>)}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-amber-200/20 bg-amber-200/[.05] p-6"><div className="flex items-center gap-2 text-amber-200"><Info className="h-4 w-4" /><h3 className="text-sm font-extrabold">2026 rate, balcony and parking update</h3></div><p className="mt-3 text-xs leading-6 text-slate-300">The published 2026 amendment summary records a Faridabad maximum allotment rate of ₹5,450/sq.ft. carpet area, balcony recovery at ₹1,300/sq.ft. capped at 100 sq.ft. and mandatory parking of one ECS per dwelling unit at 10% of flat cost for applicable projects. Applicability depends on licence and allotment stage; projects with applications already invited may have differential-demand and withdrawal/refund provisions. Parking amendments also have project-specific conditions.</p><p className="mt-3 text-[10px] leading-5 text-slate-500">This is a summary of a published secondary explanation, not the government memo itself. Verify the signed government notification and the project's written cost sheet before relying on it.</p><a href="https://www.affordablehomesgurgaon.in/amendment-in-affordable-housing-policy-2013-key-updates-and-impact-on-buyers-in-haryana/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-200 underline">Read the published amendment explanation <ExternalLink className="h-3.5 w-3.5" /></a></article>
            <article className="rounded-2xl border border-white/10 bg-[#101d2c] p-6"><div className="flex items-center gap-2 text-teal-200"><Landmark className="h-4 w-4" /><h3 className="text-sm font-extrabold text-white">Eligibility & application checklist</h3></div><ul className="mt-4 space-y-3 text-xs leading-5 text-slate-300">{['Read the exact policy and amendments named in the project brochure.','Check applicant, spouse and dependent-child property declarations under the applicable scheme.','Confirm whether applications are open or only resale / management-quota inventory is being offered.','Keep identity, PAN, address proof, bank details and project-specific affidavits ready.','Apply only through the channel named in the official advertisement and retain acknowledgement.','Pay only to the verified account named in the official application documents.'].map(item => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />{item}</li>)}</ul></article>
          </div>
          <div id="preferences" className="mt-5 grid scroll-mt-24 gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#101d2c] p-6"><div className="text-[10px] font-black uppercase tracking-[.18em] text-teal-200">Application form guide</div><h3 className="mt-2 text-2xl font-black text-white">What do 1st–4th preferences mean?</h3><p className="mt-3 text-xs leading-6 text-slate-400">Some promoter application forms provide four preference fields. They usually rank the applicant's choices, but the form must say what is being ranked — for example, unit type or another project option. A preference column in a draw or waiting-list PDF must be read using that document's own legend.</p><div className="mt-5 space-y-2">{[['1st preference','Your first-choice option.'],['2nd preference','Your next choice if the first cannot be considered.'],['3rd preference','Your third-ranked option, subject to the project rules and available inventory.'],['4th preference','Your fourth-ranked option, if the form and inventory allow.']].map(([label, desc]) => <div key={label} className="flex gap-3 rounded-xl bg-white/[.04] p-3"><span className="w-32 shrink-0 text-xs font-extrabold text-teal-200">{label}</span><span className="text-xs leading-5 text-slate-300">{desc}</span></div>)}</div><p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/[.05] p-3 text-[11px] leading-5 text-amber-100">A preference number is not a reservation category, guarantee of allotment or automatic increase in draw probability. The specific application form and draw rules govern.</p></article>
            <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#17283b] to-[#101a28] p-6"><div className="text-[10px] font-black uppercase tracking-[.18em] text-blue-200">Government policy priority</div><h3 className="mt-2 text-2xl font-black text-white">Policy priority is different.</h3><p className="mt-3 text-xs leading-6 text-slate-400">The 2018 amendment to the 2013 policy describes a priority sequence involving identified PMAY beneficiaries of the same town, then other identified PMAY beneficiaries in Haryana, followed by eligible applicants meeting the policy's property-ownership condition.</p><ol className="mt-5 space-y-3 text-xs leading-5 text-slate-300"><li className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-300/15 font-black text-teal-200">1</span><span>Identified PMAY beneficiaries of the same town, as applicable.</span></li><li className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-300/15 font-black text-teal-200">2</span><span>Other identified PMAY beneficiaries in Haryana.</span></li><li className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-300/15 font-black text-teal-200">3</span><span>Other eligible applicants meeting the policy's stated ownership condition.</span></li></ol><p className="mt-4 text-[10px] leading-5 text-slate-500">This amended 2013-policy sequence does not create a universal fourth preference tier. It is distinct from a project's ranked-choice form and from the separate Housing for All scheme.</p></article>
          </div>
        </div>
      </section>

      <section id="draw-results" className="scroll-mt-24 border-y border-white/10 bg-[#0b1421] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">Transparency matters</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Draw results & waiting lists</h2><p className="mt-4 text-sm leading-7 text-slate-400">Use the available result PDFs to check the complete applicant lists. Always compare your application number and category against the original authority document.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {OFFICIAL_DRAWS.filter(draw => draw.projectId !== '230').map(draw => <article key={draw.projectId} className="rounded-2xl border border-white/10 bg-[#101d2c] p-6"><div className="text-[10px] font-black uppercase tracking-[.18em] text-teal-200">Project ID {draw.projectId} · {draw.sector}</div><h3 className="mt-2 text-xl font-extrabold text-white">{draw.projectName}</h3><p className="mt-1 text-xs text-slate-400">Draw: {draw.drawDate} · {draw.authority}</p><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.05] p-4"><div className="text-[10px] text-slate-400">Successful allotments</div><div className="mt-1 text-2xl font-black text-white">{draw.totalWinners}</div></div><div className="rounded-xl bg-white/[.05] p-4"><div className="text-[10px] text-slate-400">Waiting list entries</div><div className="mt-1 text-2xl font-black text-white">{draw.totalWaitlist}</div></div></div><div className="mt-5 flex flex-wrap gap-2"><a href={draw.winnerPdf} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-teal-300 px-4 py-2.5 text-xs font-extrabold text-slate-950">Winner list PDF ↗</a><a href={draw.waitlistPdf} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-2.5 text-xs font-bold text-white">Waiting list ↗</a></div></article>)}
            <article className="rounded-2xl border border-amber-200/20 bg-amber-200/[.05] p-6"><div className="text-[10px] font-black uppercase tracking-[.18em] text-amber-200">Document verification pending</div><h3 className="mt-2 text-xl font-extrabold text-white">Anantya by True Habitat</h3><p className="mt-1 text-xs text-slate-400">Sector 110A · Draw recorded 16 October 2026</p><div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.05] p-3"><div className="text-[10px] text-slate-400">Reported winners</div><div className="mt-1 text-2xl font-black text-white">680</div></div><div className="rounded-xl bg-white/[.05] p-3"><div className="text-[10px] text-slate-400">Reported waiting list</div><div className="mt-1 text-2xl font-black text-white">163</div></div></div><p className="mt-4 text-xs leading-5 text-amber-100">Verified winner and waiting-list PDFs are not yet in the site's document index. We have not linked the brochure or payment-plan PDF as draw results.</p></article>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-black uppercase tracking-[.22em] text-teal-300">Buyer questions</div><h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">Affordable housing FAQs</h2></div>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              ['Is every affordable project governed by the same policy?','No. Check whether the project is licensed under Affordable Housing Policy 2013, Housing for All 2018 or another scheme. The licence, policy version, amendments and project approvals matter.'],
              ['Does 3rd or 4th preference guarantee a flat?','No. These are ranked choices where a project form provides them. They do not guarantee allotment or change draw probability by themselves.'],
              ['Can I apply in more than one project?','Check the exact applicable policy and affidavit conditions. The 2013 policy has restrictions on multiple applications and successful allotments; read the current amended wording before applying.'],
              ['What if my application is unsuccessful?','Refund treatment and timing depend on the applicable notification and project terms. Keep payment proof and read the official brochure.'],
              ['Is the waiting list the same as the winner list?','No. A waiting-list position is conditional and may move only under the applicable allotment rules and availability.'],
              ['Does this calculator show the final payable amount?','No. It is a planning estimate. Confirm the unit-specific demand letter, GST, parking, registration, maintenance and other charges.'],
              ['Are applications open in every listed project?','Not necessarily. A project may have completed its draw or be offering resale or other inventory. Confirm the current application window and sales channel.'],
              ['How do I verify a project's RERA status?','Open the linked Haryana RERA project record and review its latest certificate, orders, extensions and uploaded documents. A past approval alone does not guarantee current availability.']
            ].map(([question, answer]) => <details key={question} className="group rounded-2xl border border-white/10 bg-[#101d2c] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-white">{question}<ChevronDown className="h-4 w-4 shrink-0 text-teal-300 transition group-open:rotate-180" /></summary><p className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1421] py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-white/10 bg-[#101d2c] p-6"><div className="flex items-center gap-2 text-teal-200"><ClipboardCheck className="h-5 w-5" /><h2 className="font-extrabold text-white">Before you book or apply</h2></div><ul className="mt-4 space-y-3 text-xs leading-5 text-slate-300">{['Read the latest Haryana policy and project-specific allotment terms.','Verify the promoter and project on the official Haryana RERA portal.','Check the latest draw, waiting list, cancellation and availability position.','Ask for the full unit-wise cost sheet and payment schedule in writing.','Review allotment letter, agreement, possession conditions and refund clauses before signing.'].map(item => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />{item}</li>)}</ul></article>
          <article className="rounded-2xl border border-white/10 bg-[#101d2c] p-6"><div className="flex items-center gap-2 text-teal-200"><Landmark className="h-5 w-5" /><h2 className="font-extrabold text-white">Official policy & verification links</h2></div><p className="mt-3 text-xs leading-6 text-slate-400">Use the official portals and policy documents to verify the latest statutory position. This page is an independent guide, not legal or financial advice.</p><div className="mt-4 grid gap-3 text-xs font-bold text-slate-200 sm:grid-cols-2"><a href="https://haryanarera.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 p-3 hover:border-teal-200/40">Haryana RERA <ArrowUpRight className="h-4 w-4 text-teal-300" /></a><a href="https://pmay-urban.gov.in/material/component1/Notification_AFFORDABLE_HOUSING_POLICY_2013_Finalised%2018_08_2013.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 p-3 hover:border-teal-200/40">Policy 2013 <ArrowUpRight className="h-4 w-4 text-teal-300" /></a><a href="https://ulbharyana.gov.in/img/pdf/Affordable%20Housing%20Policy%20under%20Housing%20for%20All%20for%20Core%20Area_Notified%20on%2026.6.2018.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 p-3 hover:border-teal-200/40">Housing for All 2018 <ArrowUpRight className="h-4 w-4 text-teal-300" /></a><a href="https://tcpharyana.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 p-3 hover:border-teal-200/40">TCP Haryana <ArrowUpRight className="h-4 w-4 text-teal-300" /></a></div></article>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-teal-200/20 bg-[radial-gradient(ellipse_at_80%_0%,rgba(45,212,191,.18),transparent_45%),linear-gradient(120deg,#142b3b,#0d1928)] p-7 sm:p-10">
          <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border border-teal-200/10" /><div className="absolute -right-4 -top-16 h-56 w-56 rounded-full border border-teal-200/10" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div className="max-w-2xl"><div className="text-[10px] font-black uppercase tracking-[.2em] text-teal-200">Talk to our team</div><h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-white">Need help understanding an affordable project?</h2><p className="mt-3 text-sm leading-7 text-slate-300">Share the project name or your question. We can help you review the public information and identify what still needs verification.</p></div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-300 px-6 py-4 text-sm font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-teal-200"><MessageCircle className="h-4 w-4" /> WhatsApp +91 98188 11971 <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </section>
      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] leading-5 text-slate-500">Faridabad Master Plan · Affordable Housing Information Hub · Last content review: 3 November 2026 · Verify current records and terms with the relevant authority and promoter.</div>
    </main>
  );
};
