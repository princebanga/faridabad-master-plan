export interface PropertyProject {
  id: string;
  name: string;
  developer: string;
  sector: string;
  location: string;
  category: 'High-Rise' | 'Plots' | 'Low-Rise' | 'Affordable' | 'Commercial';
  price: string;
  baseRate?: string;
  status: 'Ongoing' | 'Approved & OC Received' | 'LOI Received' | 'RERA Approved' | 'Upcoming';
  reraNumber?: string;
  reraId?: string;
  landArea?: string;
  units?: string;
  towers?: string;
  configurations: string[];
  keyHighlights: string[];
  description: string;
  image: string;
  brochurePdf?: string;
  layoutPdf?: string;
  virtualTour360?: string;
  videoUrl?: string;
  paymentPlan?: {
    type: string;
    details: string;
    milestones?: { stage: string; percent: string; description?: string }[];
  };
  pricingBreakdown?: {
    bsp: string;
    balcony?: string;
    parking?: string;
    gst?: string;
    totalIllustration?: string;
    notes?: string;
  };
  contactPhone: string;
  contactWa: string;
  coordinates?: { x: number; y: number };
  pros?: string[];
  cons?: string[];
  featured?: boolean;
}

export const ALL_PROJECTS: PropertyProject[] = [
  {
    id: "emerald-highrise-97",
    name: "Emerald Highrise Residences",
    developer: "Emerald Group / Emarald Infraland LLP",
    sector: "Sector 97",
    location: "Sector 97, Greater Faridabad, Haryana",
    category: "High-Rise",
    price: "₹61.8 Lakh – ₹74.8 Lakh onwards*",
    baseRate: "₹5,600 – ₹6,800/sq.ft. (Floor-wise)",
    status: "LOI Received",
    reraNumber: "Applied post-LOI (TCP Haryana approved)",
    landArea: "High-Rise residential enclave",
    configurations: ["2 BHK (1,100 sq.ft.)", "3 BHK (1,500 sq.ft.)"],
    keyHighlights: [
      "Letter of Intent (LOI) officially received from TCP Haryana",
      "Near Delhi–Mumbai Expressway & FNG Corridor connectivity",
      "Close to World Street commercial zone & Amrita Hospital (approx 10 mins)",
      "Spacious layouts: 2 BHK (1100 sq.ft.) & 3 BHK (1500 sq.ft.) with 6-ft balconies",
      "Clubhouse, swimming pool, sports courts & landscaped open greens"
    ],
    description: "Emerald Highrise Residences is an upcoming residential landmark in Sector 97, Greater Faridabad. Designed with spacious 2 and 3 BHK homes, modern architectural facades, and generous 6-foot wide balconies, it bridges modern urban amenities with rapid expressway access.",
    image: "/assets/aistudio/Emerald-3BHK-Sector97_2a8b9977.png",
    layoutPdf: "/assets/aistudio/price-list-97-2bhk_0d4a95cb.pdf",
    videoUrl: "https://youtu.be/Us-jzN8HXdk",
    paymentPlan: {
      type: "40 : 30 : 30 Construction-Linked Plan",
      details: "EOI: ₹4 Lakh | On LOI: ₹8 Lakh | On RERA: 25% | On Start of Construction: 7.5% | On Casting of Raft: 7.5% | On 8th Floor: 15% | On Super Structure: 15% | On Applying OC: 20% | At Possession: 10%",
      milestones: [
        { stage: "EOI", percent: "₹4 Lakh" },
        { stage: "On LOI", percent: "₹8 Lakh" },
        { stage: "On RERA", percent: "25% of Total Sale Value" },
        { stage: "Start of Construction", percent: "7.5%" },
        { stage: "Casting of Raft", percent: "7.5%" },
        { stage: "Completion of 8th Floor", percent: "15%" },
        { stage: "Completion of Super Structure", percent: "15%" },
        { stage: "On Applying of OC", percent: "20%" },
        { stage: "At the Time of Possession", percent: "10%" }
      ]
    },
    pricingBreakdown: {
      bsp: "2nd–4th Floor: ₹6,800/sq.ft. (₹74.80L) | 5th–7th: ₹6,600 | 8th–10th: ₹6,400 | 11th–13th: ₹6,200 | 14th–16th: ₹6,000 | 17th–19th: ₹5,800 | 20th–22nd: ₹5,600 (₹61.80L)",
      parking: "Covered car parking: ₹4.50 Lakh",
      gst: "GST @ 5% as applicable",
      notes: "Flat value includes Club Membership & 2 KVA Power Backup. EDC/IDC at actuals. Park Facing PLC extra."
    },
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%2C%20I%20am%20interested%20in%20Emerald%20Highrise%20Sector%2097%20Faridabad.",
    coordinates: { x: 1005.0, y: 421.0 },
    featured: true
  },
  {
    id: "bptp-skynest-80",
    name: "BPTP Skynest Towers",
    developer: "BPTP Limited",
    sector: "Sector 80",
    location: "Sector 80, Greater Faridabad, Haryana",
    category: "High-Rise",
    price: "₹4.80 Cr Onwards*",
    baseRate: "Market-driven premium pricing",
    status: "Ongoing",
    reraNumber: "HRERA-PKL-FBD-881-2026 (Dated 09-04-2026)",
    landArea: "~150m Twin Towers | ~82,000 sq.ft. Amenities",
    configurations: ["3 BHK Luxury Residences", "4 BHK Luxury Residences", "Sky Penthouses"],
    keyHighlights: [
      "~150-metre twin residential skyscrapers — among Faridabad's tallest residential towers",
      "20 Sky Nests engineered across towers with vertical greenery and biophilic elements",
      "IGBC Platinum Pre-Certified green high-rise architecture",
      "Up to 100-ft long wraparound private balconies with uninterrupted city views",
      "9 high-speed elevators per tower, indoor heated pool, padel & pickleball courts",
      "3 mins from DPS and Shiv Nadar School, 10 mins from Amrita Hospital"
    ],
    description: "BPTP Skynest Towers in Sector 80 represents the ultra-luxury residential pinnacle of Greater Faridabad. Designed with 20 elevated sky lounges, all-weather indoor pool, fine dining restaurant, private suites, and seismic Zone V compliance.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    virtualTour360: "https://www.bptp.com/skynest-360/index.html",
    pricingBreakdown: {
      bsp: "₹4.80 Crore onwards (Unit-specific quotation)",
      notes: "Prices subject to floor-rise, PLC, taxes and bespoke fitouts."
    },
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=I%20am%20interested%20in%20BPTP%20Skynest%20Sector%2080%20Faridabad.",
    coordinates: { x: 927.0, y: 488.3 },
    featured: true
  },
  {
    id: "true-habitat-anantya-110a",
    name: "Anantya by True Habitat",
    developer: "Stardum Real Estate Private Limited / True Habitat",
    sector: "Sector 110A",
    location: "Village Bhukharpur, Sector 110A, Faridabad",
    category: "Affordable",
    price: "₹35.20 Lakh – ₹36.86 Lakh (Residences closed) | Double-Height Shops: ₹46.40 Lakh*",
    baseRate: "₹5,450/sq.ft. carpet + ₹1.30L balcony | Shops: ₹16,000/sq.ft.",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-969-2026 (Project ID RERA-PKL-2133-2026)",
    landArea: "Approx 6 Acres | 6 Stilt+14 Towers",
    configurations: [
      "2 BHK Type-4 (532 sq.ft. carpet)",
      "2 BHK Type-5 (496 sq.ft. carpet)",
      "3 BHK Type-1 & 2 (645 sq.ft. carpet + balcony)",
      "Double-Height Commercial Shops (290 sq.ft.)"
    ],
    keyHighlights: [
      "RERA approved with certificate uploaded; residential draw concluded (680 winners)",
      "IGBC Platinum rating for sustainable living and clean infrastructure",
      "Dedicated car parking — unique in affordable housing policy",
      "5 mins from Delhi–Mumbai Expressway interchange, 1 min from IMT Faridabad hub",
      "Active commercial retail plaza with double-height retail shops (~290 sq.ft.) at ₹16,000/sq.ft."
    ],
    description: "Anantya in Sector 110A by True Habitat is a benchmark affordable housing community featuring 6 stilt+14 towers, landscaped arrival, multi-purpose sport courts, and dedicated stilt parking. Residential draw results are declared; commercial shops now available for booking.",
    image: "/assets/aistudio/anantya-true-habitat-sector-110a-faridabad-site_0be08361.jpg",
    brochurePdf: "/assets/aistudio/Anantya_Brochure_b70ea0ed.pdf",
    layoutPdf: "/assets/aistudio/Anantya_Payment_Plan_e1d01465.pdf",
    virtualTour360: "https://teliportme.com/view/2586205",
    pricingBreakdown: {
      bsp: "₹5,450/sq.ft. × 645.52 sq.ft. = ₹35,18,084",
      balcony: "Fixed ₹1,30,000",
      gst: "1% GST on total = ~₹36,480",
      totalIllustration: "₹36,84,564 for 3 BHK standard layout",
      notes: "Commercial shop: ~290 sq.ft. @ ₹16,000/sq.ft. = ₹46,40,000 base amount."
    },
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=I%20am%20interested%20in%20Anantya%20True%20Habitat%20Sector%20110A%20Faridabad.",
    coordinates: { x: 735.9, y: 469.3 },
    featured: true
  },
  {
    id: "dameera-city-121",
    name: "DaMeera City Residential Plots",
    developer: "DaMeera Residencies LLP",
    sector: "Sector 121",
    location: "Village Maujpur (Dayalpur), Sector 121, Faridabad",
    category: "Plots",
    price: "₹75,000 per sq. yard onwards*",
    baseRate: "₹75k/sq.yd.",
    status: "Approved & OC Received",
    reraNumber: "HRERA-PKL-FBD-347-2022 (Project ID RERA-PKL-1117-2022)",
    landArea: "131 Premium Gated Residential Plots",
    configurations: ["Plots from 75 to 180 Sq. Yards"],
    keyHighlights: [
      "OC (Occupation Certificate) & CC (Completion Certificate) formally received",
      "Ready for immediate registry and construction under DDJAY policy",
      "5 mins drive to Delhi–Mumbai Expressway, 2.2 km direct from EPE corridor",
      "45-meter wide sector master road frontage with internal 9-meter roads",
      "Gated township with 24x7 security, underground utilities and community spaces"
    ],
    description: "DaMeera City in Sector 121 is a fully completed, ready-for-possession DDJAY residential plotted development. Having secured its Completion and Occupation Certificates, it offers buyers clear title, immediate plot demarcation, and high appreciation potential near the expressway.",
    image: "/assets/aistudio/dameera-map-with-plot-numbers_d6d6dc14.jpeg",
    virtualTour360: "https://teliportme.com/embed/2585107",
    videoUrl: "https://www.youtube.com/embed/Sv3XyNjT0h4",
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=Hi%2C%20please%20share%20DaMeera%20City%20Sector%20121%20plots%20availability%20and%20price.",
    coordinates: { x: 642.0, y: 361.6 },
    featured: true
  },
  {
    id: "adore-legend-ii-119",
    name: "Adore Legend-II (Adore Legend 2)",
    developer: "Adore Residency LLP (formerly LRG Residency LLP)",
    sector: "Sector 119",
    location: "Village Fafunda, Sector 119, Tehsil Dayalpur ST, Faridabad",
    category: "Affordable",
    price: "₹5,450 / sq.ft. (Illustrative 3 BHK MQ total ~₹36.86 Lakh)",
    baseRate: "₹5,450/sq.ft. carpet",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-987-2026 (Project ID RERA-PKL-2141-2026)",
    landArea: "5.54 Acres | 9 Towers | 816 Total Apartments",
    configurations: [
      "3 BHK MQ (645.84 sq.ft. carpet + 260 sq.ft. balcony)",
      "Regular 3 BHK (645.84 sq.ft. carpet + 225 sq.ft. balcony)",
      "1 BHK (28.37 sq.m. carpet / 108 units in 1 tower)"
    ],
    keyHighlights: [
      "Approved and certificate uploaded by HRERA Panchkula (Valid up to 06-Aug-2030)",
      "816 apartments across 9 towers; 708 3-BHK residences + 108 1-BHK residences",
      "Direct 66-ft road frontage on Fafunda/Dayalpur side",
      "Close to Shri Atal Bihari Vajpayee Government Medical College at Chhainsa",
      "Enquiry focused on 3 BHK Management Quota (MQ) with oversized 260 sq.ft. balconies",
      "Construction-Linked Payment Plan (CLP) tied to superstructure progress"
    ],
    description: "Adore Legend-II is an approved affordable housing development in Sector 119, Faridabad. Situated on a 5.54-acre footprint with parks, vehicle parking, club facility, and dual lifts per tower.",
    image: "/assets/aistudio/Emerald-2BHK-Sector97_35e8ecca.png",
    layoutPdf: "/assets/aistudio/adore-legend-ii-sector-119-brochure_d2e701a5.html",
    paymentPlan: {
      type: "Construction-Linked Plan (CLP)",
      details: "Application: 5% | Allotment: 20% | Start Construction: 10% | Basement Roof: 5% | 3rd Floor: 5% | 6th Floor: 5% | 9th Floor: 5% | Top Floor: 5% | Electricals: 5% | Plaster: 5% | Flooring: 5% | Doors/Windows: 5% | External Road: 5% | Development: 5% | Outer Plaster: 5% | Possession: 5% + Parking & Extras"
    },
    pricingBreakdown: {
      bsp: "645.84 sq.ft. × ₹5,450 = ₹35,19,828",
      balcony: "Fixed ₹1,30,000",
      gst: "1% GST on subtotal = ₹36,498.28",
      totalIllustration: "₹36,86,326.28 all-in estimated unit cost"
    },
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=Hi%2C%20I%20want%20to%20check%20latest%203%20BHK%20MQ%20availability%20for%20Adore%20Legend-II%20Sector%20119.",
    coordinates: { x: 675.0, y: 350.0 }
  },
  {
    id: "adore-legend-v-119",
    name: "Adore Legend V",
    developer: "Adore Group",
    sector: "Sector 119",
    location: "Sector 119, Faridabad, Haryana",
    category: "Affordable",
    price: "Affordable policy pricing on approval",
    status: "RERA Approved",
    reraNumber: "HRERA Detail Record 4338",
    landArea: "20 Tower Blocks | 1,988 Units Total (1,737 3BHK + 251 1BHK)",
    configurations: ["3 BHK (60.00 sq.m. carpet)", "1 BHK (28.19 sq.m. carpet)", "Commercial complex"],
    keyHighlights: [
      "Massive township development: 20 Tower Blocks (T1 to T19 are S+23/24; T20 is G+22)",
      "Total built-up area: 203,907 sq.m. for residential & commercial components",
      "Parking capacity for 2,032 cars (985 basement, 230 stilt, 662 surface, 155 under green)",
      "Official zoning plans, building elevation, and layout uploaded with HRERA"
    ],
    description: "Adore Legend V in Sector 119 represents one of the largest affordable group housing developments in Haryana, bringing 1,988 modern residences and an integrated commercial shopping arcade to the rapidly expanding Sector 119 corridor.",
    image: "/assets/aistudio/true-habitat-mq4_3bhk_affordable_flats_in_Faridabad_c5bbeb66.jpeg",
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=Hi%2C%20please%20share%20details%20for%20Adore%20Legend%20V%20Sector%20119.",
    coordinates: { x: 675.0, y: 355.0 }
  },
  {
    id: "aanandam-residency-89",
    name: "Aanandam Residency",
    developer: "Emarald Infraland LLP",
    sector: "Sector 89",
    location: "Sector 89, Greater Faridabad, Haryana",
    category: "High-Rise",
    price: "On Request (Competitive Luxury)",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-764-2025 (Project ID RERA-PKL-1788-2025)",
    landArea: "High-Rise Gated Community | Approved 18-Sep-2025",
    configurations: [
      "3 BHK · 2 Toilets (1,520 sq.ft. saleable)",
      "3 BHK · 3 Toilets (1,890 sq.ft. saleable)",
      "4 BHK · 3 Toilets (1,985 & 2,090 sq.ft. saleable)",
      "4 BHK · 4 Toilets (2,150, 2,250 & 2,350 sq.ft. saleable)"
    ],
    keyHighlights: [
      "RERA Approved with certificate uploaded; valid up to 31-Aug-2030",
      "Mivan monolithic construction for slabs, columns and load-bearing walls",
      "Swimming pool with deck, badminton court, open gym, jogging track, reflexology path",
      "Premium interior specs: vitrified flooring, granite counters, Kohler/Jaquar sanitaryware",
      "Proximity to Amrita Hospital, World Street, and upcoming transport corridors"
    ],
    description: "Aanandam Residency pairs spacious 3 and 4 BHK layouts with green community gardens, lifestyle recreation, and monolithic Mivan engineering in Sector 89.",
    image: "/assets/aistudio/true-habitat-mq2_3bhk_affordable_flats_in_Faridabad_bbd63b4e.jpeg",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%20Prince,%20please%20share%20Aanandam%20Residency%20Sector%2089%20details.",
    coordinates: { x: 1076.5, y: 579.1 }
  },
  {
    id: "emerald-gulmohar-maple-97",
    name: "Emerald Gulmohar Plots & Maple Floors",
    developer: "Emerald Infraland LLP / Emerald Home Developers",
    sector: "Sector 97",
    location: "Sector 97, Greater Faridabad, Haryana",
    category: "Plots",
    price: "Plots: ₹1.30 Lakh/sq.yd. | Maple Floors: ₹70 Lakh onwards",
    baseRate: "₹1.30 Lakh/sq.yd.",
    status: "RERA Approved",
    reraNumber: "Plots: HRERA-PKL-FBD-458-2023 | Floors: HRERA-PKL-FBD-755-2025",
    landArea: "~8.25 to 8.5 Acres (Low-Density DDJAY Layout)",
    configurations: [
      "Residential Freehold Plots (130 to 177 Sq. Yards)",
      "Maple 3 BHK Luxury Furnished Builder Floors with Lift & Parking"
    ],
    keyHighlights: [
      "Gated DDJAY township with Stilt + 4 independent floor construction permissions",
      "Flanked by 24-meter and 60-meter wide master connectivity avenues",
      "Near Dedicated Freight Corridor (DFC) and FNG Expressway link",
      "Just 5 km from 2,500-bed Amrita Hospital; walking distance to Modern Delhi Public School",
      "Underground electrification, LED-lit wide roads, shopping arcade, and landscaped parks"
    ],
    description: "Emerald Gulmohar and Maple Floors combine freehold residential land plots with low-rise boutique builder floors in Sector 97. Backed by DDJAY policy benefits and approved HRERA registrations.",
    image: "/assets/aistudio/Emerald-2BHK-Sector97_35e8ecca.png",
    virtualTour360: "https://teliportme.com/view/2592898",
    videoUrl: "https://www.youtube.com/embed/GIu0T7baRpI",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%2C%20I%20am%20interested%20in%20Emerald%20Gulmohar%20Plots%20and%20Maple%20Floors%20Sector%2097.",
    coordinates: { x: 1039.5, y: 412.6 }
  },
  {
    id: "townfit-70",
    name: "Townfit 70 Residential Plots",
    developer: "Ferrous Township Pvt. Ltd. (Branded as Townfit 70)",
    sector: "Sector 70",
    location: "IMT Sector 70, Faridabad, Haryana",
    category: "Plots",
    price: "₹1.20 Lakh – ₹1.50 Lakh per sq. yard*",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-373-2022 (Project ID RERA-PKL-1147-2022, Ferrous Megapolis Phase 1)",
    landArea: "102 Acres Total Integrated Layout | 8 Acres Central Park",
    configurations: ["Plots ranging from 100 to 250+ Sq. Yards"],
    keyHighlights: [
      "102-acre integrated township master layout with massive 8-acre central green park",
      "RERA extension certificate uploaded; valid up to 02-Jan-2027",
      "Direct 45-meter road frontage connecting IMT industrial and logistics corridor",
      "Wide 24-meter internal roads, hospital zone, and pre-designated school plots",
      "Surrounded by active hubs like Propex City, Silicon Valley, and DND-KMP link"
    ],
    description: "Townfit 70 is an expansive 102-acre plotted township in Sector 70, IMT Faridabad. Anchored by an 8-acre central park, wide dual-lane avenues, and immediate proximity to the Delhi Metro and expressway bypass.",
    image: "/assets/aistudio/dameera-map-with-plot-numbers_d6d6dc14.jpeg",
    layoutPdf: "/assets/aistudio/townfit-layout_170f72d4.pdf",
    virtualTour360: "https://teliportme.com/view/2592898",
    videoUrl: "https://www.youtube.com/embed/TL2Abh_JxvA",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%2C%20I%20am%20interested%20in%20Townfit%2070%20Sector%2070%20Faridabad%20Plots.",
    coordinates: { x: 805.5, y: 558.6 }
  },
  {
    id: "silicon-valley-70",
    name: "Brickklin Silicon Valley",
    developer: "M/S Brickklin LLP",
    sector: "Sector 70",
    location: "Village Mujeri, Sector 70, Near IMT Faridabad",
    category: "Plots",
    price: "₹1.05 Lakh per sq. yard onwards*",
    baseRate: "₹1.05L/sq.yd.",
    status: "Approved & OC Received",
    reraNumber: "HRERA-PKL-FBD-311-2022 (Project ID RERA-PKL-1042-2022)",
    landArea: "5.406 Acres | 99 Freehold Plots",
    configurations: ["112 Sq. Yds", "135 Sq. Yds (Executive)", "145 Sq. Yds (Corner)", "100-150+ Sq. Yds"],
    keyHighlights: [
      "Occupation Certificate (OC) received; fully completed gated township",
      "Stilt + 4 Floors independent residential construction allowed",
      "9-meter wide dense asphalt internal roads with underground electrical cables",
      "Zero KM from IMT Core; approx 3.0 KM to Raja Nahar Singh (Ballabgarh) Metro Station",
      "Dual water supply network, central green park and 24/7 security guard post"
    ],
    description: "Brickklin Silicon Valley is an OC-received, gated DDJAY plotted colony in Sector 70, Mujeri, Faridabad. Complete with 99 freehold units, stilt+4 building permissions, and ready infrastructure.",
    image: "/assets/aistudio/anantya-true-habitat-sector-110a-faridabad-site_0be08361.jpg",
    layoutPdf: "/assets/aistudio/siliconValley_9e8c34c8.pdf",
    virtualTour360: "https://teliportme.com/view/2593980",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=I%20am%20interested%20in%20Brickklin%20Silicon%20Valley%20Sector%2070%20Faridabad.",
    coordinates: { x: 805.5, y: 550.6 }
  },
  {
    id: "soha-olive-homes-98",
    name: "Soha Olive Homes",
    developer: "Soha Realty Private Limited",
    sector: "Sector 98",
    location: "Village Bhupani & Nachauli, Sector 98, Faridabad",
    category: "Affordable",
    price: "₹5,450 / sq.ft. carpet policy rate (Draw Completed)",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-705-2025 (DT: 27.05.2025, Lic 125 of 2024)",
    landArea: "8.206 Acres | 21 Towers | 1,184 Units",
    configurations: [
      "1 BHK Type-A & B (398 - 407 sq.ft. carpet)",
      "2 BHK Type-A & B (532 - 573 sq.ft. carpet)",
      "3 BHK Standard (644.99 sq.ft. carpet)"
    ],
    keyHighlights: [
      "RERA approved with certificate uploaded; draw conducted on 6th July 2026",
      "IGBC Pre-certified Silver green building rating",
      "Located directly on the 60-meter wide main sector road",
      "Immediate connectivity to Manjhawali Bridge (Faridabad-Noida Expressway)",
      "Commercial retail plaza, reflexology garden, skating rink, sports courts"
    ],
    description: "Soha Olive Homes in Sector 98 is a 21-tower affordable housing community spread across 8.2 acres on Manjhawali Road, bridging Faridabad directly with Sector 150, Noida. Official draw results and waiting lists are published.",
    image: "/assets/aistudio/soha-vs-advitya_6dbfc5ba.jpg",
    brochurePdf: "/assets/aistudio/Olive_Homes_Brochure__1__a390488a.pdf",
    layoutPdf: "/assets/aistudio/soha-result_eaacebfe.pdf",
    videoUrl: "https://www.youtube.com/embed/gRtNK6cBYPU",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%20Prince,%20I%20want%20information%20on%20Soha%20Olive%20Homes%20Sector%2098.",
    coordinates: { x: 1071.3, y: 428.4 }
  },
  {
    id: "mansha-senior-living-119",
    name: "Mansha Senior Living / Group Housing",
    developer: "Mansha Housing LLP / Mansha Buildwell",
    sector: "Sector 119",
    location: "Sector 119, Faridabad (Dayalpur / Fafunda side)",
    category: "High-Rise",
    price: "₹1.01 Cr (3 BHK) – ₹1.31 Cr (4 BHK) Base Indicative",
    baseRate: "₹6,750/sq.ft. (₹300/sq.ft. inaugural concession = ₹6,450/sq.ft.)",
    status: "LOI Received",
    configurations: [
      "3 BHK · 3 Toilets (1,570 sq.ft. unit area / approx 1,180 sq.ft. carpet)",
      "4 BHK · 3 Toilets (2,032 sq.ft. unit area / approx 1,525 sq.ft. carpet)"
    ],
    keyHighlights: [
      "Letter of Intent (LOI) reported received; verify site documents & HRERA filing",
      "Proximity to Greenfield Expressway and future Aero City / Jewar Airport connectivity",
      "Retirement & senior-living lifestyle concept with medical care ecosystem",
      "Basement car parking: ₹6,00,000 | Multiple payment plans (CLP, Flexi, 25:25:25:25)"
    ],
    description: "Mansha Senior Living in Sector 119 offers dedicated 3 and 4 BHK residential apartments tailored for comfortable multigenerational and senior living, located along the southern growth corridor towards Jewar Airport.",
    image: "/assets/aistudio/true-habitat-mq3_3bhk_affordable_flats_in_Faridabad_5426987b.jpeg",
    pricingBreakdown: {
      bsp: "3 BHK (1,570 sq.ft.): ₹1,01,26,500 | 4 BHK (2,032 sq.ft.): ₹1,31,06,400 after inaugural concession",
      parking: "Basement parking: ₹6.00 Lakh",
      notes: "PLC: Park facing ₹100–250/sq.ft., Floor PLC ₹100–300/sq.ft. depending on floor range."
    },
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=Hi%2C%20please%20share%20details%20of%20Mansha%20Senior%20Living%20Sector%20119%20Faridabad.",
    coordinates: { x: 670.0, y: 345.0 }
  },
  {
    id: "emerald-sector-87",
    name: "Emerald Sector 87 Luxury Floors",
    developer: "Emerald Group",
    sector: "Sector 87",
    location: "Sector 87, Greater Faridabad, Haryana",
    category: "Low-Rise",
    price: "₹2.25 Cr – ₹2.75 Cr* Onwards",
    status: "LOI Received",
    landArea: "32-Acre Masterpiece Gated Development",
    configurations: ["3 BHK Luxury Floors", "4 BHK Luxury Floors"],
    keyHighlights: [
      "Massive 32-Acre gated enclave with LOI approved from TCP Haryana",
      "Only 700 metres from the Delhi–Mumbai Expressway interchange",
      "2 dedicated covered car parking spaces allocated per floor",
      "Directly adjacent to Modern Delhi Public School (MDPS)"
    ],
    description: "Emerald Sector 87 features low-rise luxury floors in a 32-acre secure campus, providing villa-like privacy, private elevators, and dual dedicated car parkings.",
    image: "/assets/aistudio/Emerald-3BHK-Sector97_2a8b9977.png",
    virtualTour360: "https://teliportme.com/view/2582348",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=I%20am%20interested%20in%20Emerald%20Sector%2087%20Pre-Launch%20Deal.",
    coordinates: { x: 1076.5, y: 579.1 }
  },
  {
    id: "107th-avenue-107",
    name: "107th Avenue Plotted Development",
    developer: "HHC Realtors LLP",
    sector: "Sector 107",
    location: "Village Badrola, Sector 107, Faridabad",
    category: "Plots",
    price: "On Request (Market Plotted Rates)",
    status: "RERA Approved",
    reraNumber: "HRERA-PKL-FBD-913-2026 (Project ID RERA-PKL-1985-2026)",
    configurations: ["Freehold Residential Plots (100–180 sq.yds.)"],
    keyHighlights: [
      "HRERA Approved and certificate uploaded (Approved on 01-Jun-2026)",
      "Plotted development in Village Badrola, Sector 107, Faridabad",
      "Verified land title and sanctioned layout plan available on HRERA portal"
    ],
    description: "107th Avenue is an officially registered plotted development in Sector 107, Badrola, Faridabad, offering freehold plot ownership with verified RERA compliance.",
    image: "/assets/aistudio/dameera-map-with-plot-numbers_d6d6dc14.jpeg",
    contactPhone: "+919818811971",
    contactWa: "https://wa.me/919818811971?text=Hi%2C%20please%20share%20107th%20Avenue%20Sector%20107%20plots%20information.",
    coordinates: { x: 1050.0, y: 440.0 }
  },
  {
    id: "double-height-commercial-97",
    name: "Double Heights Commercial Shops",
    developer: "Double Heights / EHD Commercial Team",
    sector: "Sector 97",
    location: "Sector 97, Greater Faridabad (On 90-meter master road)",
    category: "Commercial",
    price: "Ground: ₹18,000/sq.ft. | First: ₹15,000/sq.ft. (Approx ~₹52.5L – ₹63L)",
    baseRate: "₹15,000 – ₹18,000/sq.ft.",
    status: "Upcoming",
    configurations: ["Double Heights Retail Shops (~350 sq.ft., 11 ft × 22 ft)"],
    keyHighlights: [
      "High-visibility frontage on a 90-meter wide master sector road",
      "Double-height ceiling allowance for mezzanine conversion",
      "EOI amount: ₹5 Lakh only | Limited commercial shop inventory",
      "Surrounded by high-density residential developments in Sector 97"
    ],
    description: "Double Heights Commercial Shops are planned high-street retail spaces positioned on a 90-meter sector road in Sector 97. Offering 350 sq.ft. double-height spaces suitable for retail, pharmacies, cafes, and business outlets.",
    image: "/assets/aistudio/anantya-true-habitat-sector-110a-faridabad-site_0be08361.jpg",
    contactPhone: "+919818301350",
    contactWa: "https://wa.me/919818301350?text=I%27m%20interested%20in%20commercial%20shops%20in%20Greater%20Faridabad.",
    coordinates: { x: 1005.0, y: 421.0 }
  }
];
