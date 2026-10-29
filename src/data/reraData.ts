export interface ReraProjectRecord {
  serial?: number;
  regNumber: string;
  projectId: string;
  projectName: string;
  promoter: string;
  location: string;
  district: string;
  validity: string;
  status: 'APPROVED AND CERTIFICATE UPLOADED' | 'REGISTERED' | 'LAPSED' | 'ADJOURNMENT' | 'APPROVED AND READY FOR CERTIFICATE ISSUING PROCESS' | 'EXTENSION CERTIFICATE UPLOADED' | 'CURRENT ADVERSE FLAG';
  tone: 'green' | 'orange' | 'red';
  latestEvent?: string;
  history?: string;
  rid?: number;
}

export interface ReraPromoter {
  company: string;
  districts: string[];
  people: { name: string; role: string }[];
  projects: { name: string; district: string; reg?: string; pid?: string; status: string }[];
}

export const RERA_MASTER_RECORDS: ReraProjectRecord[] = [
  {
    serial: 1,
    regNumber: "211 OF 2017",
    projectId: "RERA-PKL-589-2019",
    projectName: "AFFORDABLE PLOTTED COLONY ON 11.85 ACRES",
    promoter: "INFORMATION TV PVT. LTD.",
    location: "KANWALA. SECTOR 27, AMBALA, HARYANA",
    district: "AMBALA",
    validity: "17/09/2024",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 2,
    regNumber: "HRERA-PKL-AMB-812-2025",
    projectId: "RERA-PKL-1825-2025",
    projectName: "ARCADIA INDUSTRIAL PARK",
    promoter: "GANPATI INFRA",
    location: "VILLAGE KAKKARMAJRA AND BICHPADI",
    district: "AMBALA",
    validity: "11/08/2030",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 35,
    regNumber: "117 OF 2017",
    projectId: "RERA-PKL-459-2019",
    projectName: "10241.29 SQ. MTRS.",
    promoter: "ROBUST BUILDWELL PVT. LTD.",
    location: "VILLAGE BHATOLA, SECTOR-79",
    district: "FARIDABAD",
    validity: "31/12/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 36,
    regNumber: "HRERA-PKL-FBD-913-2026",
    projectId: "RERA-PKL-1985-2026",
    projectName: "107TH AVENUE",
    promoter: "HHC REALTORS LLP",
    location: "VILL BADROLA, SECTOR-107",
    district: "FARIDABAD",
    validity: "23/12/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4005
  },
  {
    serial: 39,
    regNumber: "HRERA-PKL-FBD-829-2026",
    projectId: "RERA-PKL-1804-2025",
    projectName: "12TH AVENUE",
    promoter: "12TH AVENUES LLP",
    location: "SECTOR-27C, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/12/2034",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 45,
    regNumber: "HRERA-PKL-FBD-42-2018",
    projectId: "RERA-PKL-771-2019",
    projectName: "81 HIGH STREET",
    promoter: "PURI CONSTRUCTION PVT. LTD.",
    location: "SECTOR-81, FARIDABAD",
    district: "FARIDABAD",
    validity: "02/11/2018",
    status: "LAPSED",
    tone: "red"
  },
  {
    serial: 46,
    regNumber: "HRERA-PKL-FBD-933-2026",
    projectId: "RERA-PKL-2065-2026",
    projectName: "87TH AVENUE",
    promoter: "M/S ELITE HOUSING ESTATE MAINTENANCE SERVICES LLP",
    location: "SECTOR 87",
    district: "FARIDABAD",
    validity: "14/05/2029",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 48,
    regNumber: "HRERA-PKL-FBD-451-2023",
    projectId: "RERA-PKL-1222-2023",
    projectName: "AAGYA ENTERPRISES",
    promoter: "AAGYA ENTERPRISES PRIVATE LIMITED",
    location: "VILLAGE TAJUPUR SECTOR 97",
    district: "FARIDABAD",
    validity: "05/01/2030",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 49,
    regNumber: "HRERA-PKL-FBD-764-2025",
    projectId: "RERA-PKL-1788-2025",
    projectName: "AANANDAM RESIDENCY",
    promoter: "EMARALD INFRALAND LLP",
    location: "SECTOR-89, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/08/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3660
  },
  {
    serial: 51,
    regNumber: "HRERA-PKL-FBD-858-2026",
    projectId: "RERA-PKL-1880-2025",
    projectName: "AARVISTA",
    promoter: "ALWAYS BUILDTECH INDIA PRIVATE LIMITED",
    location: "VILLAGE BUDENA, SECTOR-86",
    district: "FARIDABAD",
    validity: "12/03/2030",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 54,
    regNumber: "HRERA-PKL-FBD-781-2025",
    projectId: "RERA-PKL-1813-2025",
    projectName: "ADORE ARPANAM",
    promoter: "ADORE BUILDINFRA LLP",
    location: "VILLAGE BHATOLA, SECTOR 83",
    district: "FARIDABAD",
    validity: "30/01/2030",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 55,
    regNumber: "HRERA-PKL-FBD-912-2026",
    projectId: "RERA-PKL-2047-2026",
    projectName: "ADORE ARPANAM 2.0",
    promoter: "ADORE REAL INFRA LLP",
    location: "VILLAGE BUDHENA SECTOR 86",
    district: "FARIDABAD",
    validity: "30/06/2030",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 56,
    regNumber: "HRERA-PKL-FBD-423-2023",
    projectId: "RERA-PKL-1119-2022",
    projectName: "ADORE FANTASY STREET",
    promoter: "K J BUILTECH LLP",
    location: "SECTOR 79 VILLAGE BADOLI",
    district: "FARIDABAD",
    validity: "16/08/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 57,
    regNumber: "HRERA-PKL-FBD-344-2022",
    projectId: "RERA-PKL-1041-2022",
    projectName: "ADORE LEGEND",
    promoter: "SINGHANIA INFRATECH",
    location: "SECTOR 84 VILLAGE KHERIKALAN",
    district: "FARIDABAD",
    validity: "31/12/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 58,
    regNumber: "HRERA-PKL-FBD-987-2026",
    projectId: "RERA-PKL-2141-2026",
    projectName: "ADORE LEGEND-II",
    promoter: "ADORE RESIDENCY LLP (FORMERLY LRG RESIDENCY LLP)",
    location: "VILLAGE FAFUNDA, SECTOR-119",
    district: "FARIDABAD",
    validity: "06/08/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4283
  },
  {
    serial: 59,
    regNumber: "HRERA-PKL-FBD-595-2024",
    projectId: "RERA-PKL-1466-2024",
    projectName: "ADORE LEGEND III",
    promoter: "ADORE PROPINFRA LLP",
    location: "VILLAGE TIGAON, SECTOR 104",
    district: "FARIDABAD",
    validity: "11/11/2028",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 60,
    regNumber: "HRERA-PKL-FBD-652-2025",
    projectId: "RERA-PKL-1570-2024",
    projectName: "ADORE PRIMA",
    promoter: "ADORE HOMES LLP",
    location: "VILLAGE MIRTAZAPUR & NEEMKA, SECTOR 72 & 73",
    district: "FARIDABAD",
    validity: "31/01/2029",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 63,
    regNumber: "HRERA-PKL-FBD-387-2022",
    projectId: "RERA-PKL-1118-2022",
    projectName: "ADORE SMART CITY",
    promoter: "ADORE PROPBUILD LLP",
    location: "SECTOR 97 VILLAGE NACHAULI",
    district: "FARIDABAD",
    validity: "16/08/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 64,
    regNumber: "HRERA-PKL-FBD-400-2023",
    projectId: "RERA-PKL-1168-2022",
    projectName: "ADORE SMART CITY 2",
    promoter: "ADORE PROPBUILD LLP",
    location: "SECTOR 97 VILLAGE KHERIKALAN",
    district: "FARIDABAD",
    validity: "26/09/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 65,
    regNumber: "HRERA-PKL-FBD-602-2024",
    projectId: "RERA-PKL-1475-2024",
    projectName: "ADVITYA HEIGHTS",
    promoter: "ADVITYA RESIDENCY LLP",
    location: "SECTOR-143, FARIDABAD",
    district: "FARIDABAD",
    validity: "10/11/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 67,
    regNumber: "HRERA-PKL-FBD-883-2026",
    projectId: "RERA-PKL-1989-2026",
    projectName: "ADVITYA HOMES-2",
    promoter: "ADVITYA RESIDENCY LLP",
    location: "VILLAGE SIKRI SECTOR 143",
    district: "FARIDABAD",
    validity: "31/12/2029",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4009
  },
  {
    serial: 75,
    regNumber: "HRERA-PKL-FBD-475-2023",
    projectId: "RERA-PKL-1289-2023",
    projectName: "AMOLIK BLOSSOM WOODS",
    promoter: "G AND G BUILDTECH PRIVATE LIMITED",
    location: "SECTOR 97, FARIDABAD",
    district: "FARIDABAD",
    validity: "17/07/2028",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 2502
  },
  {
    serial: 76,
    regNumber: "HRERA-PKL-FBD-552-2024",
    projectId: "RERA-PKL-1338-2023",
    projectName: "AMOLIK CONCORDIA LIVING",
    promoter: "LOGERS REAL ESTATE BUILDERS LLP",
    location: "SECTOR-97, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/08/2028",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 77,
    regNumber: "HRERA-PKL-FBD-914-2026",
    projectId: "RERA-PKL-2033-2026",
    projectName: "AMOLIK CONCORDIA LIVING-I",
    promoter: "LOGERS REAL ESTATE BUILDERS LLP",
    location: "SECTOR-97, FARIDABAD",
    district: "FARIDABAD",
    validity: "17/03/2031",
    status: "REGISTERED",
    tone: "green",
    rid: 4082
  },
  {
    serial: 81,
    regNumber: "HRERA-PKL-FBD-570-2024",
    projectId: "RERA-PKL-1438-2024",
    projectName: "AMOLIK VIBRANTE 79",
    promoter: "LOGERS REAL ESTATE BUILDERS LLP",
    location: "SECTOR-79, FARIDABAD",
    district: "FARIDABAD",
    validity: "08/02/2029",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 2848
  },
  {
    serial: 82,
    regNumber: "HRERA-PKL-FBD-512-2023",
    projectId: "RERA-PKL-1291-2023",
    projectName: "AMOLIK VIBRANTE 82",
    promoter: "AMOLIK BUILDCON LLP",
    location: "SECTOR 82, FARIDABAD",
    district: "FARIDABAD",
    validity: "14/09/2028",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 2505
  },
  {
    serial: 84,
    regNumber: "HRERA-PKL-FBD-969-2026",
    projectId: "RERA-PKL-2133-2026",
    projectName: "ANANTYA",
    promoter: "STARDUM REAL ESTATE PRIVATE LIMITED",
    location: "BHUKHARPUR, SECTOR-110A",
    district: "FARIDABAD",
    validity: "05/11/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4262
  },
  {
    serial: 87,
    regNumber: "HRERA-PKL-FBD-421-2023",
    projectId: "RERA-PKL-1216-2023",
    projectName: "ANUSHREE GREENS",
    promoter: "LANDSPECT BUILDERS & DEVELOPERS LLP",
    location: "SECTOR-97, FARIDABAD",
    district: "FARIDABAD",
    validity: "24/01/2028",
    status: "REGISTERED",
    tone: "green",
    rid: 2340
  },
  {
    serial: 93,
    regNumber: "HRERA-PKL-FBD-447-2023",
    projectId: "RERA-PKL-1192-2022",
    projectName: "BPTP DISTRICT 4",
    promoter: "RIDGECRAFT HOMES PRIVATE LIMITED",
    location: "SECTOR 84, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/12/2027",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 103,
    regNumber: "HRERA-PKL-FBD-586-2024",
    projectId: "RERA-PKL-1441-2024",
    projectName: "BPTP PARKLANDS",
    promoter: "COUNTRYWIDE PROMOTERS PRIVATE LIMITED",
    location: "SECTOR 82 TO 89, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/03/2029",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 104,
    regNumber: "HRERA-PKL-FBD-939-2026",
    projectId: "RERA-PKL-1963-2026",
    projectName: "BPTP WA VANA",
    promoter: "LOGICAL BUILDERS PRIVATE LIMITED",
    location: "SECTOR-80, FARIDABAD",
    district: "FARIDABAD",
    validity: "30/06/2032",
    status: "REGISTERED",
    tone: "green"
  },
  {
    serial: 105,
    regNumber: "HRERA-PKL-FBD-744-2025",
    projectId: "RERA-PKL-1739-2025",
    projectName: "BROADWAY RESIDENCES",
    promoter: "ADORE PROJECTS LLP",
    location: "VILLAGE BHATOLA, SECTOR-78",
    district: "FARIDABAD",
    validity: "30/11/2029",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3554
  },
  {
    serial: 110,
    regNumber: "HRERA-PKL-FBD-663-2025",
    projectId: "RERA-PKL-1616-2025",
    projectName: "CLARKEE",
    promoter: "OMAXE WORLD STREET PRIVATE LIMITED",
    location: "SECTOR 79 O OMAXE CITY CENTRE",
    district: "FARIDABAD",
    validity: "31/12/2029",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3305
  },
  {
    serial: 113,
    regNumber: "HRERA-PKL-FBD-569-2024",
    projectId: "RERA-PKL-1396-2023",
    projectName: "CORAL PARK",
    promoter: "NEWSTONE INFRATECH PRIVATE LIMITED",
    location: "VILLAGE KHERI KALAN SECTOR 84A",
    district: "FARIDABAD",
    validity: "16/11/2028",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 2739
  },
  {
    serial: 115,
    regNumber: "HRERA-PKL-FBD-347-2022",
    projectId: "RERA-PKL-1117-2022",
    projectName: "DAMEERA CITY",
    promoter: "DAMEERA RESIDENCIES LLP",
    location: "SEC-121, VILLAGE MAUJPUR (DAYALPUR)",
    district: "FARIDABAD",
    validity: "09/08/2027",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green"
  },
  {
    serial: 126,
    regNumber: "HRERA-PKL-FBD-988-2026",
    projectId: "RERA-PKL-2093-2026",
    projectName: "ELLINGTON-86",
    promoter: "TRIKAAYN REAL ESTATE LLP",
    location: "VILLAGE BASELWA, SECTOR 86",
    district: "FARIDABAD",
    validity: "18/12/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4188
  },
  {
    serial: 127,
    regNumber: "HRERA-PKL-FBD-801-2025",
    projectId: "RERA-PKL-1858-2025",
    projectName: "EPIC HOMES",
    promoter: "PROSPER BUILDSQUARE LLP",
    location: "VILLAGE BHUPANI SECTOR 89",
    district: "FARIDABAD",
    validity: "26/06/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3793
  },
  {
    serial: 133,
    regNumber: "HRERA-PKL-FBD-373-2022",
    projectId: "RERA-PKL-1147-2022",
    projectName: "TOWNFIT 70 (FERROUS MEGAPOLIS PHASE 1)",
    promoter: "FERROUS TOWNSHIP PVT. LTD.",
    location: "SECTOR 70, FARIDABAD",
    district: "FARIDABAD",
    validity: "02/01/2027",
    status: "EXTENSION CERTIFICATE UPLOADED",
    tone: "green",
    rid: 2156
  },
  {
    serial: 140,
    regNumber: "HRERA-PKL-FBD-881-2026",
    projectId: "RERA-PKL-2015-2026",
    projectName: "SKYNEST TOWERS",
    promoter: "BPTP LIMITED",
    location: "SECTOR-80, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/12/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green"
  },
  {
    serial: 141,
    regNumber: "HRERA-PKL-FBD-705-2025",
    projectId: "RERA-PKL-1669-2025",
    projectName: "OLIVE HOMES",
    promoter: "SOHA REALTY PRIVATE LIMITED",
    location: "VILLAGE BHUPANI & NACHAULI, SECTOR 98",
    district: "FARIDABAD",
    validity: "22/10/2029",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3416
  },
  {
    serial: 142,
    regNumber: "HRERA-PKL-FBD-458-2023",
    projectId: "RERA-PKL-1264-2023",
    projectName: "EMERALD GULMOHAR",
    promoter: "EMARALD INFRALAND LLP",
    location: "SECTOR 97, FARIDABAD",
    district: "FARIDABAD",
    validity: "09/04/2028",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green"
  },
  {
    serial: 143,
    regNumber: "HRERA-PKL-FBD-755-2025",
    projectId: "RERA-PKL-1781-2025",
    projectName: "MAPLE FLOORS",
    promoter: "EMARALD INFRALAND LLP",
    location: "SECTOR 97, FARIDABAD",
    district: "FARIDABAD",
    validity: "30/06/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3644
  },
  {
    serial: 144,
    regNumber: "HRERA-PKL-FBD-311-2022",
    projectId: "RERA-PKL-1042-2022",
    projectName: "SILLICON VALLEY",
    promoter: "M/S BRICKKLIN LLP",
    location: "VILLAGE MUJERI, SECTOR 70",
    district: "FARIDABAD",
    validity: "03/04/2027",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 1920
  },
  {
    serial: 145,
    regNumber: "HRERA-PKL-FBD-970-2026",
    projectId: "RERA-PKL-2122-2026",
    projectName: "SKYA INDUSTRIAL TOWN",
    promoter: "SKYA REALTECH LLP",
    location: "VILLAGE PIYALA, SECTOR 144",
    district: "FARIDABAD",
    validity: "09/07/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4247
  },
  {
    serial: 146,
    regNumber: "HRERA-PKL-FBD-817-2026",
    projectId: "RERA-PKL-1898-2025",
    projectName: "TARANG ATLANTIS",
    promoter: "AMBARVAN HOMES LLP",
    location: "VILLAGE ITMADPUR, SECTOR 31",
    district: "FARIDABAD",
    validity: "31/12/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3858
  },
  {
    serial: 147,
    regNumber: "HRERA-PKL-FBD-837-2026",
    projectId: "RERA-PKL-1904-2025",
    projectName: "THE MARQ",
    promoter: "EMARALD LANDPLANER LLP",
    location: "SECTOR 20, FARIDABAD",
    district: "FARIDABAD",
    validity: "31/12/2030",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3866
  },
  {
    serial: 148,
    regNumber: "HRERA-PKL-FBD-889-2026",
    projectId: "RERA-PKL-1969-2026",
    projectName: "NEOLIV GOLF ONE",
    promoter: "NORTHARK INFRASTRUCTURE LLP",
    location: "VILLAGE KHERI KALAN, SECTOR 98",
    district: "FARIDABAD",
    validity: "11/03/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3971
  },
  {
    serial: 149,
    regNumber: "HRERA-PKL-FBD-768-2025",
    projectId: "RERA-PKL-1782-2025",
    projectName: "MANSHA EVERNEST",
    promoter: "MANSHA BUILDWELL PVT. LTD.",
    location: "VILLAGE SADPURA, SECTOR 104",
    district: "FARIDABAD",
    validity: "05/08/2032",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3645
  },
  {
    serial: 150,
    regNumber: "Pending Registration",
    projectId: "RERA-GRG-2157-2026",
    projectName: "DLF PRIVANA WEST",
    promoter: "DLF LIMITED",
    location: "SECTOR 76/77, MANESAR, GURUGRAM",
    district: "GURUGRAM",
    validity: "Under Process",
    status: "APPROVED AND READY FOR CERTIFICATE ISSUING PROCESS",
    tone: "orange",
    rid: 3929,
    latestEvent: "Matter adjourned; deficit documents/directions compliance under review"
  },
  {
    serial: 151,
    regNumber: "Pending Registration",
    projectId: "RERA-GRG-2180-2026",
    projectName: "TREHAN SEVENTY ONE - D",
    promoter: "TREHAN HOSPITALITY AND REALITY PRIVATE LIMITED",
    location: "VILLAGE FAZILPUR JHARSA, SECTOR 71, GURUGRAM",
    district: "GURUGRAM",
    validity: "Under Process",
    status: "ADJOURNMENT",
    tone: "orange",
    rid: 3981,
    latestEvent: "Application-stage status with next hearing listed and deficiency history"
  },
  {
    serial: 152,
    regNumber: "Pending Registration",
    projectId: "RERA-GRG-2230-2026",
    projectName: "MARBELLA PHASE 7",
    promoter: "EMAAR INDIA LIMITED",
    location: "SECTOR 66, GURUGRAM",
    district: "GURUGRAM",
    validity: "Under Process",
    status: "APPROVED AND READY FOR CERTIFICATE ISSUING PROCESS",
    tone: "orange",
    rid: 4098
  },
  {
    serial: 153,
    regNumber: "Pending Registration",
    projectId: "RERA-GRG-2237-2026",
    projectName: "M3M RESIDENCES BY ELIE SAAB",
    promoter: "METRO EDUCATION & WELFARE PRIVATE LIMITED",
    location: "SECTOR 111, GURUGRAM",
    district: "GURUGRAM",
    validity: "Under Process",
    status: "APPROVED AND READY FOR CERTIFICATE ISSUING PROCESS",
    tone: "orange",
    rid: 4116
  },
  {
    serial: 154,
    regNumber: "HRERA-PKL-PWL-923-2026",
    projectId: "RERA-PKL-2062-2026",
    projectName: "PINEWOOD CITY",
    promoter: "ANJANI PUTRA BUILDCON LLP",
    location: "VILLAGE PRITHLA, SECTOR 6, PRITHLA",
    district: "PALWAL",
    validity: "25/06/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4136
  },
  {
    serial: 155,
    regNumber: "HRERA-PKL-PWL-981-2026",
    projectId: "RERA-PKL-2107-2026",
    projectName: "LAVENDER ESTATE",
    promoter: "SSM PEAK ASSOCIATE REALTY LLP",
    location: "VILLAGE PALWAL SECTOR 7",
    district: "PALWAL",
    validity: "14/09/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4219
  },
  {
    serial: 156,
    regNumber: "HRERA-PKL-PWL-873-2026",
    projectId: "RERA-PKL-1967-2026",
    projectName: "RASA ENCLAVE",
    promoter: "SANCHIT GARG AND ANKUR GARG",
    location: "VILLAGE DHATIR AND ALLIKA",
    district: "PALWAL",
    validity: "21/01/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3969
  },
  {
    serial: 157,
    regNumber: "GGM/1079/811/2026/51",
    projectId: "RERA-GRG-2236-2026",
    projectName: "PRIVANA ENCLAVE",
    promoter: "DLF LIMITED",
    location: "SECTOR 76/77, MANESAR",
    district: "GURUGRAM",
    validity: "28/07/2031",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 4114
  },
  {
    serial: 158,
    regNumber: "GGM/1057/789/2026/29",
    projectId: "RERA-GRG-2107-2025",
    projectName: "ANTARES BY ROF",
    promoter: "ROF INFRATECH AND HOUSING PRIVATE LIMITED",
    location: "VILLAGE SOHNA, SECTOR 7",
    district: "GURUGRAM",
    validity: "31/05/2032",
    status: "APPROVED AND CERTIFICATE UPLOADED",
    tone: "green",
    rid: 3790
  }
];

export const RERA_PROMOTERS: ReraPromoter[] = [
  {
    company: "Emarald Infraland LLP / Emerald Group",
    districts: ["FARIDABAD"],
    people: [
      { name: "Emerald Home Developers Pvt. Ltd.", role: "Corporate Partner" },
      { name: "Ajay Gaur", role: "Designated Partner" },
      { name: "Bharat Pal Singh", role: "Authorised Person" }
    ],
    projects: [
      { name: "Aanandam Residency", district: "FARIDABAD", reg: "HRERA-PKL-FBD-764-2025", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "Emerald Gulmohar", district: "FARIDABAD", reg: "HRERA-PKL-FBD-458-2023", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "Maple Floors", district: "FARIDABAD", reg: "HRERA-PKL-FBD-755-2025", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "Emerald Highrise Sector 97", district: "FARIDABAD", status: "LOI Received (TCP Haryana)" },
      { name: "Emerald Sector 87", district: "FARIDABAD", status: "LOI Received" }
    ]
  },
  {
    company: "BPTP Limited / Countrywide Promoters",
    districts: ["FARIDABAD", "GURUGRAM"],
    people: [
      { name: "Kabul Chawla", role: "Managing Director / CEO" },
      { name: "Sudhanshu Tripathi", role: "Director" },
      { name: "Mansoor Ali", role: "Authorised Representative" }
    ],
    projects: [
      { name: "BPTP Skynest Towers", district: "FARIDABAD", reg: "HRERA-PKL-FBD-881-2026", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "BPTP Wa Vana", district: "FARIDABAD", reg: "HRERA-PKL-FBD-939-2026", status: "REGISTERED" },
      { name: "BPTP Parklands Pride Plots", district: "FARIDABAD", reg: "HRERA-PKL-FBD-641-2024", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "102 Eden Estate III", district: "GURUGRAM", reg: "GGM/940/672/2025/43", status: "REGISTERED" }
    ]
  },
  {
    company: "Stardum Real Estate Private Limited / True Habitat",
    districts: ["FARIDABAD"],
    people: [
      { name: "Senior Management Desk", role: "Board of Directors" },
      { name: "Statutory Filing Officers", role: "Designated Representative" }
    ],
    projects: [
      { name: "Anantya (Sector 110A)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-969-2026", status: "APPROVED AND CERTIFICATE UPLOADED" }
    ]
  },
  {
    company: "DaMeera Residencies LLP",
    districts: ["FARIDABAD"],
    people: [
      { name: "Designated Partners", role: "LLP Management" },
      { name: "Project Authorised Signatory", role: "Technical Officer" }
    ],
    projects: [
      { name: "DaMeera City (Sector 121)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-347-2022", status: "OC & CC Received" }
    ]
  },
  {
    company: "Adore Group (Adore Residency LLP, Adore Homes, Adore Buildtech)",
    districts: ["FARIDABAD"],
    people: [
      { name: "Designated Partners", role: "Promoter Desk" },
      { name: "Legal Counsel", role: "Compliance Officers" }
    ],
    projects: [
      { name: "Adore Legend-II (Sector 119)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-987-2026", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "Adore Legend V (Sector 119)", district: "FARIDABAD", reg: "HRERA Record 4338", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "Adore Prima & Prima 2", district: "FARIDABAD", reg: "HRERA-PKL-FBD-652-2025", status: "REGISTERED" },
      { name: "Adore Smart City 1 & 2", district: "FARIDABAD", reg: "HRERA-PKL-FBD-387-2022", status: "REGISTERED" }
    ]
  },
  {
    company: "DLF Limited / DLF Home Developers",
    districts: ["GURUGRAM"],
    people: [
      { name: "Rajiv Singh", role: "Chairman" },
      { name: "Devinder Singh", role: "Managing Director / CEO" },
      { name: "A.S. Minocha", role: "Director" },
      { name: "K.K. Sheera", role: "Authorised Representative" }
    ],
    projects: [
      { name: "Privana Enclave", district: "GURUGRAM", reg: "GGM/1079/811/2026/51", status: "APPROVED AND CERTIFICATE UPLOADED" },
      { name: "DLF Privana West", district: "GURUGRAM", pid: "RERA-GRG-2157-2026", status: "APPROVED AND READY FOR CERTIFICATE ISSUING" },
      { name: "Central 67 & 74", district: "GURUGRAM", status: "REGISTERED" }
    ]
  },
  {
    company: "M/S Brickklin LLP",
    districts: ["FARIDABAD"],
    people: [
      { name: "Rishabh Dhingra", role: "Partner / Authorised Person" },
      { name: "Tushar Dhingra", role: "Partner" },
      { name: "Mahavir Parsad", role: "Partner" }
    ],
    projects: [
      { name: "Brickklin Silicon Valley (Sector 70)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-311-2022", status: "APPROVED AND CERTIFICATE UPLOADED (OC Received)" }
    ]
  },
  {
    company: "Ferrous Township Pvt. Ltd.",
    districts: ["FARIDABAD"],
    people: [
      { name: "Directorate & Legal Desk", role: "Authorised Signatories" }
    ],
    projects: [
      { name: "Townfit 70 (Ferrous Megapolis City Phase 1)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-373-2022", status: "EXTENSION CERTIFICATE UPLOADED" }
    ]
  },
  {
    company: "Soha Realty Private Limited",
    districts: ["FARIDABAD"],
    people: [
      { name: "Executive Committee", role: "Board of Directors" }
    ],
    projects: [
      { name: "Olive Homes (Sector 98)", district: "FARIDABAD", reg: "HRERA-PKL-FBD-705-2025", status: "APPROVED AND CERTIFICATE UPLOADED (Draw Completed)" },
      { name: "Neal City & Olive Town", district: "FARIDABAD", status: "Plotted Townships" }
    ]
  }
];
