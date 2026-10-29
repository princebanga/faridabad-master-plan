export interface DocumentItem {
  id: string;
  title: string;
  category: 'Master Plan' | 'RERA & Legal' | 'Brochures & Floor Plans' | 'Draw Results' | 'Government Notifications';
  description: string;
  fileType: 'PDF' | 'External Link' | 'Image';
  fileSize?: string;
  downloadUrl: string;
  publicationDate: string;
  issuingAuthority: string;
  projectOrSector?: string;
  isVerified: boolean;
}

export const OFFICIAL_DOCUMENTS: DocumentItem[] = [
  // Master Plan & Government
  {
    id: "fbd-masterplan-2031-ulb",
    title: "Faridabad Final Development Plan 2031 (Controlled Areas Drawing)",
    category: "Master Plan",
    description: "Official Haryana Government development plan drawing for controlled areas outside Municipal Corporation Faridabad limits showing land use, arterial corridors and green buffers.",
    fileType: "External Link",
    downloadUrl: "https://ulbharyana.gov.in/Website/Faridabad/Images/004862ba-be1e-4aaa-a362-642ff52c5e00.pdf",
    publicationDate: "Haryana Govt Gazette",
    issuingAuthority: "Urban Local Bodies (ULB) / Town & Country Planning Haryana",
    projectOrSector: "Faridabad Master Plan 2031",
    isVerified: true
  },
  {
    id: "fbd-masterplan-notification-2018",
    title: "Final Development Plan 2031 Official Notification DTP (F) 2774/18",
    category: "Government Notifications",
    description: "Government published notification and gazette schedule establishing the statutory framework for Faridabad Master Plan 2031.",
    fileType: "External Link",
    downloadUrl: "https://www.greentribunal.gov.in/sites/default/files/news_updates/Rejoinder%20by%20Applicant%20to%20the%20Reply%20of%20R-%203%20in%20OA%20No.%20178%20of%202025%20%28Shiv%20Nadar%20Trust%20Vs.%20State%20of%20Haryana%20%26%20Ors.%29.pdf",
    publicationDate: "14 March 2018",
    issuingAuthority: "Town and Country Planning Department, Haryana",
    projectOrSector: "Faridabad 2031",
    isVerified: true
  },
  {
    id: "pib-jewar-greenfield-expressway",
    title: "PIB Release: Delhi–Faridabad–Ballabhgarh–Sohna to Jewar Airport Greenfield Corridor",
    category: "Government Notifications",
    description: "Government of India Press Information Bureau (PIB) official release detailing the 31.42 km greenfield highway connecting Faridabad & Jewar International Airport.",
    fileType: "External Link",
    downloadUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2237576&lang=1&reg=1",
    publicationDate: "Ministry of Road Transport & Highways",
    issuingAuthority: "Government of India (PIB)",
    projectOrSector: "Jewar Airport Connectivity",
    isVerified: true
  },

  // Project Brochures & Plans
  {
    id: "anantya-brochure-pdf",
    title: "Anantya by True Habitat – Complete Project Brochure (Sector 110A)",
    category: "Brochures & Floor Plans",
    description: "Full architectural brochure featuring entrance gate, 3 BHK & 2 BHK cluster plans, typical floor plans, IGBC platinum specifications, and site layout.",
    fileType: "PDF",
    fileSize: "22.0 MB",
    downloadUrl: "/assets/aistudio/Anantya_Brochure_b70ea0ed.pdf",
    publicationDate: "August 2026",
    issuingAuthority: "Stardum Real Estate Pvt. Ltd.",
    projectOrSector: "Sector 110A, Faridabad",
    isVerified: true
  },
  {
    id: "anantya-payment-plan-pdf",
    title: "Anantya Construction Linked Payment Schedule (CLP)",
    category: "Brochures & Floor Plans",
    description: "Official 15-stage construction linked payment plan spanning booking, raft casting, super structure, and offer of possession.",
    fileType: "PDF",
    fileSize: "205 KB",
    downloadUrl: "/assets/aistudio/Anantya_Payment_Plan_e1d01465.pdf",
    publicationDate: "August 2026",
    issuingAuthority: "Stardum Real Estate Pvt. Ltd.",
    projectOrSector: "Sector 110A, Faridabad",
    isVerified: true
  },
  {
    id: "true-habitat-3bhk-brochure-pdf",
    title: "True Habitat 3 BHK Flats in Faridabad – Layout Reference",
    category: "Brochures & Floor Plans",
    description: "Detailed unit diagrams, carpet area breakdowns (645.52 sq.ft. carpet + 133.90 sq.ft. balcony), cluster plans, and site sections.",
    fileType: "PDF",
    fileSize: "12.0 MB",
    downloadUrl: "/assets/aistudio/True_Habitat_brochure_3BHK_flats_in_Faridabad_59441954.pdf",
    publicationDate: "2026",
    issuingAuthority: "True Habitat Development Desk",
    projectOrSector: "Sector 110A, Faridabad",
    isVerified: true
  },
  {
    id: "olive-homes-brochure-pdf",
    title: "Soha Olive Homes Sector 98 – Official Project Brochure",
    category: "Brochures & Floor Plans",
    description: "21-tower project brochure with 1, 2, and 3 BHK typologies, amenity map, 60-meter road frontage coordinates, and license disclosures.",
    fileType: "PDF",
    fileSize: "1.45 MB",
    downloadUrl: "/assets/aistudio/Olive_Homes_Brochure__1__a390488a.pdf",
    publicationDate: "May 2025",
    issuingAuthority: "Soha Realty Private Limited",
    projectOrSector: "Sector 98, Faridabad",
    isVerified: true
  },
  {
    id: "emerald-97-price-list-pdf",
    title: "Emerald Highrise Sector 97 – 2 BHK Price List & Payment Plan",
    category: "Brochures & Floor Plans",
    description: "Official price list showing floor-wise pricing from 2nd to 22nd floor (₹5,600 to ₹6,800/sq.ft.) and 40:30:30 payment schedule.",
    fileType: "PDF",
    fileSize: "156 KB",
    downloadUrl: "/assets/aistudio/price-list-97-2bhk_0d4a95cb.pdf",
    publicationDate: "October 2026",
    issuingAuthority: "Emerald Group / Emarald Infraland LLP",
    projectOrSector: "Sector 97, Faridabad",
    isVerified: true
  },
  {
    id: "townfit-70-layout-pdf",
    title: "Townfit 70 (Ferrous Megapolis) Master Layout Blueprint",
    category: "Brochures & Floor Plans",
    description: "High-resolution master layout map showing 102-acre layout, 8-acre park, 45-meter main road, internal 24m roads, and plot blocks A to E.",
    fileType: "PDF",
    fileSize: "1.93 MB",
    downloadUrl: "/assets/aistudio/townfit-layout_170f72d4.pdf",
    publicationDate: "2026",
    issuingAuthority: "Ferrous Township Pvt. Ltd. / Townfit",
    projectOrSector: "Sector 70, Faridabad",
    isVerified: true
  },
  {
    id: "silicon-valley-layout-pdf",
    title: "Brickklin Silicon Valley Sector 70 – Sanctioned Plotted Layout Plan",
    category: "Brochures & Floor Plans",
    description: "Approved DDJAY layout plan for 99 freehold plots, 24m entry road, green parks, commercial booth, and community facilities.",
    fileType: "PDF",
    fileSize: "468 KB",
    downloadUrl: "/assets/aistudio/siliconValley_9e8c34c8.pdf",
    publicationDate: "May 2022 (OC Approved)",
    issuingAuthority: "M/S Brickklin LLP / TCP Haryana",
    projectOrSector: "Sector 70, Faridabad",
    isVerified: true
  },

  // Draw Result PDFs
  {
    id: "soha-winner-list-pdf",
    title: "Soha Olive Homes Sector 98 – Official Draw Winner List (Project ID 218)",
    category: "Draw Results",
    description: "Complete list of successful allottees with applicant names, application numbers, flat allocations, and draw timestamps from TCP Haryana.",
    fileType: "PDF",
    fileSize: "157 KB",
    downloadUrl: "/assets/aistudio/soha-result_eaacebfe.pdf",
    publicationDate: "6 July 2026",
    issuingAuthority: "Town and Country Planning Department, Haryana",
    projectOrSector: "Sector 98, Faridabad",
    isVerified: true
  },
  {
    id: "soha-waiting-list-pdf",
    title: "Soha Olive Homes Sector 98 – Official Wait List (Project ID 218)",
    category: "Draw Results",
    description: "Complete waiting list record across 1 BHK, 2 BHK, and 3 BHK categories with preference order and application numbers.",
    fileType: "PDF",
    fileSize: "48 KB",
    downloadUrl: "/assets/aistudio/soha-waiting-list_9a43ba38.pdf",
    publicationDate: "6 July 2026",
    issuingAuthority: "Town and Country Planning Department, Haryana",
    projectOrSector: "Sector 98, Faridabad",
    isVerified: true
  },
  {
    id: "advitya-winner-list-pdf",
    title: "Advitya Homes-II Sector 143 – Official Draw Winner List (Project ID 220)",
    category: "Draw Results",
    description: "Official Town & Country Planning Department result document listing all 284 successful 2 BHK Type-I allottees and 108 2 BHK Type-II allottees.",
    fileType: "PDF",
    fileSize: "62 KB",
    downloadUrl: "/assets/aistudio/Advitya_Winner_83b5a856.pdf",
    publicationDate: "10 June 2026",
    issuingAuthority: "Town and Country Planning Department, Haryana",
    projectOrSector: "Sector 143, Faridabad",
    isVerified: true
  },
  {
    id: "advitya-waiting-list-pdf",
    title: "Advitya Homes-II Sector 143 – Official Wait List (Project ID 220)",
    category: "Draw Results",
    description: "Official waiting list for Advitya Homes-II covering 76 General category waiting applicants for Type-I and 27 for Type-II.",
    fileType: "PDF",
    fileSize: "24 KB",
    downloadUrl: "/assets/aistudio/Advitya_waiting_6983e013.pdf",
    publicationDate: "10 June 2026",
    issuingAuthority: "Town and Country Planning Department, Haryana",
    projectOrSector: "Sector 143, Faridabad",
    isVerified: true
  }
];
