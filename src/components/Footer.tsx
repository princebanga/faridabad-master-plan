import React from 'react';
import { Phone, Mail, MapPin, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const navigateTo = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newPath);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              <span className="text-base font-bold text-white tracking-tight">
                Faridabad<span className="text-teal-400 font-light">MasterPlan</span>.in
              </span>
            </div>
            <p className="text-neutral-400 max-w-md text-xs leading-relaxed">
              An independent, data-led property information and urban planning platform published by 
              <strong className="text-neutral-200"> Prince Banga (Apka Apna Property Advisor)</strong>. 
              Bringing together verified Haryana RERA records, Master Plan 2031 maps, draw result databases, 
              and step-by-step buyer due diligence for Faridabad and Delhi-NCR.
            </p>
            <div className="space-y-1.5 text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Greater Faridabad & Central Faridabad, Haryana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="tel:+919818811971" className="hover:text-white transition-colors">+91 98188 11971</a>
                <span>·</span>
                <a href="tel:+919818301350" className="hover:text-white transition-colors">+91 98183 01350</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="mailto:prince.banga@gmail.com" className="hover:text-white transition-colors">prince.banga@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: The 7 Core Destinations */}
          <div>
            <h3 className="text-neutral-200 font-semibold tracking-wider uppercase text-[11px] mb-3">
              Core Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" onClick={(e) => navigateTo('home', e)} className="hover:text-white transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="/master-plan" onClick={(e) => navigateTo('master-plan', e)} className="hover:text-white transition-colors">
                  02. Master Plan 2031
                </a>
              </li>
              <li>
                <a href="/properties" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  03. Properties & Real Estate
                </a>
              </li>
              <li>
                <a href="/maps" onClick={(e) => navigateTo('maps', e)} className="hover:text-white transition-colors">
                  04. Maps & Sectors
                </a>
              </li>
              <li>
                <a href="/resources" onClick={(e) => navigateTo('resources', e)} className="hover:text-white transition-colors">
                  05. Resources & RERA
                </a>
              </li>
              <li>
                <a href="/guides" onClick={(e) => navigateTo('guides', e)} className="hover:text-white transition-colors">
                  06. Buyer Guides
                </a>
              </li>
              <li>
                <a href="/tools" onClick={(e) => navigateTo('tools', e)} className="hover:text-white transition-colors">
                  07. Tools & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div>
            <h3 className="text-neutral-200 font-semibold tracking-wider uppercase text-[11px] mb-3">
              Featured Projects
            </h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="/properties?project=emerald-highrise-97" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  Emerald Highrise (Sec 97)
                </a>
              </li>
              <li>
                <a href="/properties?project=bptp-skynest-80" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  BPTP Skynest Towers (Sec 80)
                </a>
              </li>
              <li>
                <a href="/properties?project=true-habitat-anantya-110a" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  Anantya True Habitat (Sec 110A)
                </a>
              </li>
              <li>
                <a href="/properties?project=dameera-city-121" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  DaMeera City Plots (Sec 121)
                </a>
              </li>
              <li>
                <a href="/properties?project=adore-legend-ii-119" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  Adore Legend-II (Sec 119)
                </a>
              </li>
              <li>
                <a href="/properties?project=townfit-70" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  Townfit 70 Plots (Sec 70)
                </a>
              </li>
              <li>
                <a href="/properties?project=silicon-valley-70" onClick={(e) => navigateTo('properties', e)} className="hover:text-white transition-colors">
                  Brickklin Silicon Valley (Sec 70)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Government Links & Channels */}
          <div>
            <h3 className="text-neutral-200 font-semibold tracking-wider uppercase text-[11px] mb-3">
              Official Portals
            </h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="https://haryanarera.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Haryana RERA (HRERA)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://tcpharyana.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>DTCP Haryana Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://hsvphry.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>HSVP (HUDA) Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@apkaapnapropertyadvisor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029Vb7cMSv8fewwCtHsRn02" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-amber-400">
                  <span>WhatsApp Community</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-neutral-900 bg-neutral-950/40 rounded-xl p-5 border border-neutral-900">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-2 text-neutral-400 text-[11px] leading-relaxed">
              <p>
                <strong className="text-neutral-300">Statutory Disclosure & Advisory Disclaimer:</strong> FaridabadMasterPlan.in 
                is an independent real estate advisory and consumer information portal managed by Apka Apna Property Advisor / Prince Banga. 
                It is <strong>NOT</strong> an official portal of the Government of Haryana, Haryana RERA, DTCP, or HSVP, and does not act as 
                the project promoter unless explicitly specified.
              </p>
              <p>
                All data, RERA registration numbers, Project IDs, layout blueprints, indicative pricing rates (e.g. ₹5,450/sq.ft. affordable BSP), 
                and infrastructure timelines are transcribed directly from public regulatory disclosures (HRERA Form REP-I), developer brochures, 
                and official gazette publications for research convenience. Neither FaridabadMasterPlan.in nor its publishers guarantee investment returns, 
                title defect freedom, or statutory completion dates. Homebuyers must independently verify the latest official RERA orders, licensed land titles, 
                and sanctioned building plans before making any financial commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legacy Compatibility Bar */}
        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} FaridabadMasterPlan.in. All original research and editorial content preserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-600">Reorganized from ~50 legacy pages into exactly 7 master destinations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
