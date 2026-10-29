export interface GuideTopic {
  id: string;
  title: string;
  category: 'RERA & Legal' | 'Plot Buying' | 'Ownership & Title' | 'Affordable Housing' | 'Checklists & Procedures';
  readingTime: string;
  summary: string;
  content: {
    heading: string;
    body: string;
    table?: { headers: string[]; rows: string[][] };
    list?: string[];
    callout?: { title: string; text: string; type: 'info' | 'warning' | 'success' };
  }[];
  relatedLinks?: { title: string; href: string }[];
}

export const PROPERTY_GUIDES: GuideTopic[] = [
  {
    id: "rera-buyer-guide",
    title: "Haryana RERA (HRERA) Buyer Guide & Legal Safeguards",
    category: "RERA & Legal",
    readingTime: "6 min read",
    summary: "Understand the statutory protections of the Real Estate (Regulation and Development) Act 2016, how the 70% separate account works, and what RERA does NOT guarantee.",
    content: [
      {
        heading: "What is RERA and Why Does it Matter?",
        body: "The Real Estate (Regulation and Development) Act, 2016 was enacted by Parliament to protect real estate buyers, establish financial accountability, and provide statutory remedies for project delay or misrepresentation. In Haryana, projects are regulated under the Haryana Real Estate Regulatory Authority (HRERA) with benches in Panchkula and Gurugram."
      },
      {
        heading: "The 70% Escrow Account Mandate",
        body: "Under Section 4(2)(l)(D) of the RERA Act, developers are legally obligated to deposit 70% of all monies received from homebuyers into a dedicated scheduled-bank escrow account. This money can only be withdrawn to cover construction and land costs in proportion to certified project completion milestones."
      },
      {
        heading: "RERA Does NOT Mean Zero Risk",
        body: "Registration with HRERA is a mandatory regulatory licensing step, but it is not an investment guarantee. It does not certify future resale appreciation, financial solvency of the builder, or guarantee absence of construction defects.",
        callout: {
          title: "Crucial Due Diligence Rule",
          text: "Never make a booking deposit before confirming the live registration certificate on the official Haryana RERA portal (haryanarera.gov.in). Check Form REP-I for approved building plans, sanctioned floors, and delivery timelines.",
          type: "warning"
        }
      },
      {
        heading: "5-Minute RERA Quick Verification Checklist",
        body: "Before signing any application or agreement, complete these 5 steps:",
        list: [
          "Verify the official registration number format (e.g. HRERA-PKL-FBD-xxx-2026).",
          "Match the legal promoter company name on the title deed with the RERA record.",
          "Examine Form REP-I uploaded on HRERA portal to verify sanctioned unit carpet areas.",
          "Check declared contractual possession date and statutory delay compensation clauses.",
          "Ensure payments are deposited only into the RERA-declared project bank account."
        ]
      }
    ]
  },
  {
    id: "property-documents-checklist",
    title: "Complete Property Buying Documents Checklist in Haryana",
    category: "Checklists & Procedures",
    readingTime: "8 min read",
    summary: "A practical guide for bank-loan purchases, self-funded transactions, registry day preparation, and unbroken title chain verification.",
    content: [
      {
        heading: "The Three Critical Document Buckets",
        body: "Every property transaction involves three distinct categories of documents: 1) Buyer Identity & Financial KYC, 2) Developer Project Sanctions & Title, and 3) Regulatory & Revenue Registrations."
      },
      {
        heading: "What to Ask the Builder Before Signing the BBA",
        body: "Before executing the Builder-Buyer Agreement (BBA) or paying more than 10% of unit value:",
        list: [
          "RERA registration certificate and full Form REP-I disclosure annexures",
          "Land ownership title deed and registered Collaboration / JDA Agreement if builder is not land owner",
          "Town and Country Planning (TCP Haryana) License and Change of Land Use (CLU) order",
          "Sanctioned Building Plan and Demarcation Layout approved by competent authority",
          "NOCs from Fire Department, Airport Authority (if applicable), and State Pollution Control Board",
          "Draft Builder-Buyer Agreement conforming to the Model Form of Agreement under HRERA rules"
        ]
      },
      {
        heading: "The Title Chain: What Does 'Chain' Mean?",
        body: "A property title chain is the unbroken sequence of historical legal transfers demonstrating how ownership flowed from the original agricultural landholder down to the current developer or seller. Any missing deed or unreleased mortgage breaks the chain."
      },
      {
        heading: "Registry Day Verification",
        body: "On the day of conveyance at the Sub-Registrar / Tehsil office, ensure the following are present in original:",
        list: [
          "Final stamp duty calculation and e-stamp paper issued in buyers' names",
          "Original Allotment Letter, BBA, and all payment receipts with bank clearance notes",
          "Occupation Certificate (OC) or Completion Certificate (CC) issued by the Directorate",
          "No Dues Certificate (NDC) from the developer and municipal property tax clearance",
          "Authorized Signatory Power of Attorney (POA) and Board Resolution for company sellers"
        ]
      }
    ]
  },
  {
    id: "plot-buying-checklist-haryana",
    title: "20-Point Plot Buying Checklist for Haryana",
    category: "Plot Buying",
    readingTime: "7 min read",
    summary: "Everything you must inspect before buying residential plots in DDJAY townships, private colonies, or HSVP sectors.",
    content: [
      {
        heading: "Essential Safeguards for Plotted Real Estate",
        body: "Buying vacant land requires scrutiny of layout approvals, physical demarcation, and utility provisioning. Marketing brochures and digital GPS pins carry no legal weight in court."
      },
      {
        heading: "The 20 Mandatory Verifications",
        body: "Review every point prior to issuing token money:",
        list: [
          "1. HRERA Plotted Registration status and certificate validity",
          "2. DTCP Haryana Colony License and sanctioned layout plan",
          "3. Freehold land title free from bank mortgages or court injunctions",
          "4. 30-year Revenue Search Report prepared by an independent property advocate",
          "5. Physical corner demarcation and exact plot dimensions on ground",
          "6. Sanctioned road width (minimum 9 meters internal, 24/45/60m arterial)",
          "7. Clear itemization of External Development Charges (EDC) & IDC",
          "8. Underground water piping, sewerage line connection, and stormwater drainage",
          "9. Electrical substation allotment and underground cabling status",
          "10. Specific construction permissions (e.g. Stilt + 4 Floors under DDJAY)",
          "11. Demarcation of park facing, corner, or wide road Preferred Location Charges (PLC)",
          "12. Completion Certificate (CC) issued by DTCP for basic township works",
          "13. Tehsildar mutation (Intakal) and Jamabandi revenue record verification",
          "14. Absence of High-Tension (HT) overhead electrical wires or canal buffer restrictions",
          "15. Soil testing and drainage slope to prevent monsoon waterlogging",
          "16. RERA-mandated separate bank account for all booking cheques",
          "17. Written schedule of possession and default interest rates",
          "18. Clear conveyance deed terms without hidden maintenance escalation clauses",
          "19. Physical inspection during peak morning and evening traffic hours",
          "20. Independent legal review before signing any token receipt or mou"
        ]
      }
    ]
  },
  {
    id: "freehold-vs-leasehold",
    title: "Freehold vs. Leasehold Property in NCR (Faridabad vs. Noida)",
    category: "Ownership & Title",
    readingTime: "5 min read",
    summary: "Demystifying land tenure in Delhi-NCR: why Noida and Greater Noida operate on 90-year leases and how Haryana plotted property differs.",
    content: [
      {
        heading: "The Core Difference in Ownership Rights",
        body: "In Freehold property, the buyer purchases absolute, perpetual ownership of the land and any structure built upon it. In Leasehold property, ownership remains with a government authority (e.g., Noida Authority, YEIDA), which leases the land for a fixed term (typically 90 years in UP)."
      },
      {
        heading: "Why You Should Not Assume '99 Years'",
        body: "A common myth is that all leasehold land in India runs for 99 years. Official records for Noida and Greater Noida show 90-year lease deeds. Upon expiry, renewal terms or conversion fees are subject to state government policy."
      },
      {
        heading: "Comparison Matrix",
        body: "Key parameters differentiating the two ownership structures:",
        table: {
          headers: ["Parameter", "Freehold (Faridabad / Haryana)", "Leasehold (Noida / Greater Noida)"],
          rows: [
            ["Land Ownership", "Buyer owns the land perpetually", "Authority owns the land; buyer is a lessee"],
            ["Transfer Charges", "Zero authority transfer fee (only state stamp duty)", "Transfer of Memorandum (TM) fee payable to authority"],
            ["Mortgage & Home Loans", "Straightforward title search by bank legal panel", "Bank requires Authority tripartite agreement & permission"],
            ["Building Modifications", "Governed by municipal building bylaws", "Requires written sanction from the development authority"]
          ]
        }
      }
    ]
  },
  {
    id: "oc-vs-cc-explained",
    title: "OC vs CC: Occupation Certificate vs. Completion Certificate",
    category: "RERA & Legal",
    readingTime: "5 min read",
    summary: "Why you cannot legally move into a building without an Occupation Certificate, even if construction looks 100% finished.",
    content: [
      {
        heading: "Defining the Certificates",
        body: "Completion Certificate (CC) certifies that the developer has completed construction according to the approved building bylaws, layout, and fire safety norms. Occupation Certificate (OC) certifies that the building is structurally safe, sanitary, and fit for human habitation with working water, sewerage, and electricity connections."
      },
      {
        heading: "Key Legal Ramifications",
        body: "Taking handover or living in an apartment without an official OC is illegal under Haryana Municipal and DTCP laws. Utility connections may be disconnected, and registering the final sale deed is often restricted by sub-registrars.",
        callout: {
          title: "Tower-by-Tower Verification",
          text: "Never assume an OC for Phase 1 covers the entire project. Always verify that the specific tower number and unit floor you are buying are explicitly listed in the sanction schedule of the OC.",
          type: "info"
        }
      }
    ]
  },
  {
    id: "ddjay-haryana-policy-guide",
    title: "Deen Dayal Jan Awas Yojna (DDJAY) Plotted Policy Guide",
    category: "Plot Buying",
    readingTime: "6 min read",
    summary: "The policy framework powering affordable plotted colonies like DaMeera City, Emerald Gulmohar, Townfit 70, and Silicon Valley.",
    content: [
      {
        heading: "What is DDJAY?",
        body: "The Deen Dayal Jan Awas Yojna (DDJAY) was launched by the Government of Haryana to encourage low-density, organized plotted housing colonies with high standard infrastructure, paved roads, and community facilities across urban areas of the state."
      },
      {
        heading: "Key Policy Parameters",
        body: "Important guidelines governing DDJAY plotted colonies:",
        list: [
          "Plot sizes capped between 60 sq. yards and 180 sq. yards for optimal density.",
          "Stilt + 4 Floors construction allowed with independent floor registry rights.",
          "Developer must transfer 50% of the saleable area to DTCP as collateral until basic infrastructure (roads, sewerage, water) is delivered.",
          "Internal roads must be minimum 9 meters wide to support emergency vehicles and parking.",
          "Freehold land title with standard conveyance registry upon issuance of completion."
        ]
      }
    ]
  },
  {
    id: "affordable-vs-regular-housing",
    title: "Affordable Housing vs. Regular Group Housing in Haryana",
    category: "Affordable Housing",
    readingTime: "5 min read",
    summary: "Comparing policy-controlled ₹5,450/sq.ft. affordable flats with market-driven luxury high-rises.",
    content: [
      {
        heading: "Pricing Model Disparity",
        body: "In Haryana's Affordable Housing Policy, the Basic Sale Price (BSP) is capped by government policy (currently ₹5,450 per sq.ft. of carpet area in the relevant Faridabad category, plus fixed balcony charges). In contrast, regular group housing (e.g. BPTP Skynest, Aanandam) is entirely market-driven based on luxury amenities, location prestige, and private finishes."
      },
      {
        heading: "Amenities & Density Comparison",
        body: "Understanding the trade-offs between affordability and luxury:",
        table: {
          headers: ["Attribute", "Affordable Housing (Anantya, Adore, Soha)", "Regular High-Rise (BPTP, Aanandam)"],
          rows: [
            ["Pricing", "Capped policy rate (₹5,450/sq.ft. carpet)", "Market rate (₹6,000 to ₹18,000+/sq.ft.)"],
            ["Allotment", "Government electronic lottery draw by TCP", "Direct developer selection & booking"],
            ["Density", "Higher density (approx. 200–300 units/acre)", "Lower density (approx. 50–100 units/acre)"],
            ["Amenities", "Community hall, play area, basic green lawns", "Clubhouse, swimming pool, sports courts, valet, spa"],
            ["Parking", "Generally unallocated / shared (Anantya has dedicated stilt)", "Dedicated basement car parking bays"]
          ]
        }
      }
    ]
  }
];
