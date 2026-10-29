export interface SectorInfo {
  sector: string;
  name: string;
  tagline: string;
  groundView: string;
  matureRating: 'Established Premium' | 'High-Growth Emerging' | 'Rapid Development' | 'Industrial & Plotted Core';
  keyEcosystems: string[];
  connectivityHighlights: { destination: string; approxTime: string; routeNotes?: string }[];
  priceRange: string;
  projectsInSector: string[];
  infrastructureConsiderations: string[];
  advisorVerdict: string;
}

export const SECTORS_DATA: SectorInfo[] = [
  {
    sector: "Sector 80",
    name: "Sector 80 — Established Greater Faridabad Premium Belt",
    tagline: "High-density social infrastructure, flagship schools, and premium high-rise residences",
    groundView: "Sector 80 is part of the established premium Greater Faridabad residential belt. Unlike purely speculative southern sectors, Sector 80 already enjoys immediate proximity to World Street retail, top tier educational institutions, multispecialty hospitals, and active urban neighborhoods.",
    matureRating: "Established Premium",
    keyEcosystems: [
      "Omaxe World Street shopping, dining and commercial promenade",
      "Premier schools: Delhi Public School (DPS) Greater Faridabad, Shiv Nadar School (3 mins away)",
      "Healthcare: Accord Hospital (6 mins), Amrita Hospital (10 mins), Fortis Hospital (18 mins)",
      "High-profile residential communities: BPTP Skynest, Discovery Park, Parkland Pride"
    ],
    connectivityHighlights: [
      { destination: "Delhi Public School & Shiv Nadar", approxTime: "3 mins" },
      { destination: "Accord Multispecialty Hospital", approxTime: "6 mins" },
      { destination: "Amrita Hospital (Asia's Largest)", approxTime: "10 mins" },
      { destination: "South Delhi via DND-KMP", approxTime: "25 mins" },
      { destination: "Noida via FNG Corridor", approxTime: "30 mins" },
      { destination: "Gurugram via NH-44 & KMP", approxTime: "40 mins" },
      { destination: "Noida International Airport (Jewar)", approxTime: "45 mins" }
    ],
    priceRange: "Apartments: ₹1.5 Cr – ₹4.8+ Cr | Plots/Floors: ₹2.15 Lakh/sq.yd. onwards",
    projectsInSector: ["BPTP Skynest Towers", "BPTP Wa Vana", "Discovery Park", "BPTP Parkland Pride"],
    infrastructureConsiderations: [
      "More mature residential environment with lower construction vacancy",
      "High competition between luxury high-rises (Skynest) and independent builder floors/plots",
      "High-end apartment buyers must calculate all-in cost (PLC, GST, power backup, IFMS)"
    ],
    advisorVerdict: "For buyers prioritizing immediate livability, school proximity, and premium lifestyle amenities, Sector 80 is a top choice. Comparing Skynest (~₹4.8 Cr) vs a plot with self-construction (~₹5.5–6 Cr) comes down to managed high-rise convenience versus land ownership."
  },
  {
    sector: "Sector 81",
    name: "Sector 81 — Commercial & Residential Twin Hub",
    tagline: "Commercial plazas, high-street retail, and established plotted/floor enclaves",
    groundView: "Sector 81 forms a contiguous premium corridor with Sector 80, centered around the 81 High Street / 81 Business Hub commercial district and established plotted enclaves. The area is bustling with everyday retail, clinics, and offices.",
    matureRating: "Established Premium",
    keyEcosystems: [
      "81 High Street / 81 Business Hub (HRERA-PKL-FBD-42-2018)",
      "Puri Aanand Vilas luxury high-rise community",
      "Puri Kohinoor residential belt",
      "Direct connection to Sector 14/15 central Faridabad across the bypass"
    ],
    connectivityHighlights: [
      { destination: "Bypass Road Interchange", approxTime: "2 mins" },
      { destination: "World Street Retail", approxTime: "4 mins" },
      { destination: "Neelam Flyover / Central FBD", approxTime: "12 mins" },
      { destination: "Badarpur Border Delhi", approxTime: "20 mins" }
    ],
    priceRange: "Commercial Shops: ₹12k–₹18k/sq.ft. | Residential Floors: ₹1.4 Cr – ₹2.5 Cr",
    projectsInSector: ["81 High Street", "Puri Aanand Vilas", "Park 81", "City Walk 81"],
    infrastructureConsiderations: [
      "Commercial occupancy has stabilized significantly with retail chains and banks",
      "Secondary resale transactions require strict title search and society clearance",
      "Always check exact RERA registration numbers across distinct phases"
    ],
    advisorVerdict: "Sector 81 is suited for end-users and investors seeking an established neighborhood with active commercial footfalls. It provides immediate daily convenience rather than multi-year speculative waiting."
  },
  {
    sector: "Sector 97",
    name: "Sector 97 — Emerging Growth & Plotted Hotspot",
    tagline: "The convergence of upcoming luxury high-rises, DDJAY plotted colonies and wide master avenues",
    groundView: "Sector 97 is one of Greater Faridabad's most dynamic emerging sectors. Flanked by 24-meter and 60-meter master roads, it is home to Emerald Highrise, Emerald Gulmohar plots, Maple floors, Amolik Concordia, and planned Double Heights commercial shops.",
    matureRating: "High-Growth Emerging",
    keyEcosystems: [
      "Emerald Highrise 2 & 3 BHK development (LOI Received)",
      "Emerald Gulmohar & Maple Floors gated DDJAY township",
      "Amolik Concordia Living & Amolik Blossom Woods (HRERA Approved)",
      "Double Heights Commercial Plaza along 90-meter master sector road",
      "Adore Smart City & Anushree Greens plotted developments"
    ],
    connectivityHighlights: [
      { destination: "Amrita Hospital (Sector 88)", approxTime: "8 mins" },
      { destination: "World Street Commercial", approxTime: "10 mins" },
      { destination: "Delhi-Mumbai Expressway Spur", approxTime: "6 mins" },
      { destination: "Upcoming FNG / Manjhawali Bridge", approxTime: "15 mins" }
    ],
    priceRange: "Plots: ₹1.15L – ₹1.50L/sq.yd. | High-Rise: ₹61.8L – ₹74.8L | Floors: ₹70L – ₹1.10 Cr",
    projectsInSector: ["Emerald Highrise", "Emerald Gulmohar & Maple", "Amolik Concordia Living", "Double Heights Shops", "Adore Smart City"],
    infrastructureConsiderations: [
      "Under-development roads are actively being paved by civic authorities",
      "Dedicated Freight Corridor (DFC) runs elevated in this sector — minimal surface noise",
      "High investor capital inflows due to DDJAY stilt+4 permissions"
    ],
    advisorVerdict: "Sector 97 is an exceptional investment corridor for buyers with a 2–4 year time horizon. Entry pricing is noticeably lower than Sector 80/81, while future expressway connectivity will drive significant capital appreciation."
  },
  {
    sector: "Sector 110A",
    name: "Sector 110A — Affordable Industrial Frontier",
    tagline: "Strategic connectivity directly adjoining IMT Faridabad and Delhi-Mumbai Expressway",
    groundView: "Sector 110A in Village Bhukharpur is strategically nestled right next to IMT Faridabad's manufacturing hub and the Delhi–Mumbai Expressway. It is the site of Anantya by True Habitat, providing planned affordable housing and commercial shopping.",
    matureRating: "Rapid Development",
    keyEcosystems: [
      "True Habitat Anantya residential & retail complex (HRERA-PKL-FBD-969-2026)",
      "Adjacent to IMT Faridabad corporate plants (Amul, IOCL R&D Centre, Escorts)",
      "Clean agricultural air with zero high-tension power lines over residential site"
    ],
    connectivityHighlights: [
      { destination: "IMT Faridabad Industrial Core", approxTime: "1 min" },
      { destination: "Delhi-Mumbai Expressway Entry", approxTime: "5 mins" },
      { destination: "Raja Nahar Singh Metro Station", approxTime: "8 mins" },
      { destination: "Jewar International Airport", approxTime: "35 mins" }
    ],
    priceRange: "Affordable Policy: ₹5,450/sq.ft. carpet | Commercial Shops: ₹16,000/sq.ft.",
    projectsInSector: ["Anantya by True Habitat"],
    infrastructureConsiderations: [
      "Residential draw is completed; commercial double-height retail now active",
      "Road widening and civic water connections are progressing rapidly",
      "Strong tenant demand from executives working in IMT manufacturing plants"
    ],
    advisorVerdict: "Ideal for end-users seeking affordable homes or retail shop investors targeting IMT workforce footfalls. Proximity to the expressway makes daily commutes into South Delhi or Gurugram very viable."
  },
  {
    sector: "Sector 119",
    name: "Sector 119 — Southern Growth & Greenfield Corridor",
    tagline: "Large-scale affordable housing, senior living concepts, and future Jewar Airport alignment",
    groundView: "Sector 119 (Village Fafunda / Dayalpur ST) is positioned along Faridabad's southern growth axis. It hosts Adore Legend-II (816 units), Adore Legend V (1,988 units), and Mansha Senior Living, benefiting from the planned Greenfield Jewar Airport expressway link.",
    matureRating: "Rapid Development",
    keyEcosystems: [
      "Adore Legend-II (HRERA-PKL-FBD-987-2026, 9 towers)",
      "Adore Legend V (20 towers, 2,032 car parks)",
      "Mansha Senior Living & retirement health campus",
      "Close to Shri Atal Bihari Vajpayee Government Medical College (Chhainsa)"
    ],
    connectivityHighlights: [
      { destination: "Atal Bihari Vajpayee Medical College", approxTime: "8 mins" },
      { destination: "Faridabad–Jewar Greenfield Corridor", approxTime: "Direct access point" },
      { destination: "World Street Sector 79", approxTime: "18 mins" },
      { destination: "Badarpur Border Delhi", approxTime: "35 mins" }
    ],
    priceRange: "Affordable: ₹5,450/sq.ft. | Senior Living Group Housing: ₹6,450/sq.ft.",
    projectsInSector: ["Adore Legend-II", "Adore Legend V", "Mansha Senior Living"],
    infrastructureConsiderations: [
      "Developing civic infrastructure: internal roads are currently being upgraded to 66-ft width",
      "Surrounding occupied social infrastructure will mature over a 4–5 year timeframe",
      "Do not confuse with central Faridabad; verify road routes during rush hour"
    ],
    advisorVerdict: "Suitable for long-term investors and budget homebuyers with a 4–5 year perspective. Greenfield expressway proximity offers massive upside once the Jewar International Airport link becomes fully operational."
  },
  {
    sector: "Sector 121",
    name: "Sector 121 — Ready-for-Possession Plotted Enclave",
    tagline: "Gated DDJAY plotted colonies with verified OC & CC certificates",
    groundView: "Sector 121 (Village Maujpur / Dayalpur) is home to DaMeera City, a fully developed plotted township that has formally received its Completion Certificate (CC) and Occupation Certificate (OC).",
    matureRating: "Rapid Development",
    keyEcosystems: [
      "DaMeera City plotted colony (131 freehold plots)",
      "45-meter wide master sector road with 9-meter internal network",
      "Fast connectivity to EPE (Eastern Peripheral Expressway) and KMP corridor"
    ],
    connectivityHighlights: [
      { destination: "Delhi-Mumbai Expressway", approxTime: "5 mins" },
      { destination: "EPE Corridor", approxTime: "2.2 km direct" },
      { destination: "Ballabhgarh Metro Station", approxTime: "10 mins" }
    ],
    priceRange: "Plots: ₹75,000 per sq. yard onwards*",
    projectsInSector: ["DaMeera City"],
    infrastructureConsiderations: [
      "OC & CC already received — minimal development or delivery risk",
      "Demarcated plots with instant registry and independent construction freedom"
    ],
    advisorVerdict: "For plot buyers who want immediate registry, clear title, and zero completion risk near the expressway, Sector 121 provides one of the safest entry points."
  },
  {
    sector: "Sector 70",
    name: "Sector 70 — Plotted Townships & Industrial Hub",
    tagline: "Townfit 70 and Brickklin Silicon Valley with massive central parks",
    groundView: "Sector 70 is directly linked to the IMT industrial corridor and Tigaon Road. Featuring Townfit 70 (102-acre township with 8-acre central park) and Brickklin Silicon Valley (OC received, 99 plots), it is a major plotted residential stronghold.",
    matureRating: "Industrial & Plotted Core",
    keyEcosystems: [
      "Townfit 70 (Ferrous Megapolis Phase 1)",
      "Brickklin Silicon Valley (HRERA-PKL-FBD-311-2022, OC Received)",
      "Propex City and IMT corporate campuses"
    ],
    connectivityHighlights: [
      { destination: "Raja Nahar Singh Metro Station", approxTime: "3.0 km" },
      { destination: "IMT Corporate Hub", approxTime: "0 km" },
      { destination: "DND-KMP Link", approxTime: "5 mins" }
    ],
    priceRange: "Plots: ₹1.05L – ₹1.50L per sq. yard*",
    projectsInSector: ["Townfit 70", "Brickklin Silicon Valley", "Propex City"],
    infrastructureConsiderations: [
      "High rental demand from corporate executives in IMT",
      "Stilt + 4 floors allowed for independent rental yields"
    ],
    advisorVerdict: "Excellent for rental cash flow and custom villa builders who want immediate proximity to the metro and industrial offices."
  }
];

export const REGIONAL_COMPARISON = [
  {
    factor: "Land Tenure & Ownership",
    faridabad: "Predominantly Freehold in plotted townships and HSVP/DDJAY projects. Full ownership of land.",
    noida: "Almost entirely 90-Year Leasehold under Noida Authority. Requires lease deed and transfer charges.",
    greaterNoida: "90-Year Leasehold under GNIDA / YEIDA. Subject to authority dues and sub-lease terms."
  },
  {
    factor: "Pricing & Ticket Size",
    faridabad: "Competitive entry points: ₹5,450/sq.ft. affordable, ₹6,000–8,000/sq.ft. mid-segment, ₹1–1.5L/sq.yd. plots.",
    noida: "Significantly higher: ₹10,000–25,000+/sq.ft. for modern high-rises in Sectors 150, 128, 79.",
    greaterNoida: "Moderate to high: ₹6,500–12,000/sq.ft.; Pari Chowk & Yamuna Expressway corridors vary."
  },
  {
    factor: "Key Growth Infrastructure",
    faridabad: "Delhi–Mumbai Expressway, FNG Expressway, Manjhawali Bridge to Noida, Jewar Greenfield highway.",
    noida: "Aqua Line metro extension, Jewar Airport, Film City, functional expressway network.",
    greaterNoida: "Noida International Airport (Jewar), Eastern Peripheral Expressway, Formula 1 / Tech zones."
  },
  {
    factor: "Buyer Suitability",
    faridabad: "Best for end-users seeking spacious freehold plots, independent floors, or affordable high-rises near Delhi.",
    noida: "Best for corporate tech professionals prioritizing mature metro infrastructure and high rental yields.",
    greaterNoida: "Best for long-term speculative investors eyeing airport corridors and large planned institutional zones."
  }
];
