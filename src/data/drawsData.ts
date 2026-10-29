export interface DrawRecord {
  applicantName: string;
  applicationNo: string;
  flatNo?: string;
  preference?: string;
  status: 'Allocated' | 'Waitlist';
  allocatedOn?: string;
  category: string;
  unitCategory: string;
}

export interface ProjectDraw {
  projectId: string;
  projectName: string;
  developer: string;
  sector: string;
  drawDate: string;
  authority: string;
  winnerPdf: string;
  waitlistPdf: string;
  totalWinners: number;
  totalWaitlist: number;
  featuredRecords: DrawRecord[];
}

export const OFFICIAL_DRAWS: ProjectDraw[] = [
  {
    projectId: "218",
    projectName: "Soha Olive Homes",
    developer: "Soha Realty Private Limited",
    sector: "Sector 98, Faridabad",
    drawDate: "6 July 2026",
    authority: "Town and Country Planning Department, Haryana",
    winnerPdf: "/assets/aistudio/soha-result_eaacebfe.pdf",
    waitlistPdf: "/assets/aistudio/soha-waiting-list_9a43ba38.pdf",
    totalWinners: 592,
    totalWaitlist: 236,
    featuredRecords: [
      { applicantName: "Arvind Chauhan", applicationNo: "324415", flatNo: "T11-1402", status: "Allocated", allocatedOn: "06-07-2026 13:11:14", category: "General", unitCategory: "1 BHK Type-A" },
      { applicantName: "Ayushi Jain", applicationNo: "326144", flatNo: "T10-1402", status: "Allocated", allocatedOn: "06-07-2026 13:11:14", category: "General", unitCategory: "1 BHK Type-A" },
      { applicantName: "Bahal Chand", applicationNo: "318150", flatNo: "T11-1403", status: "Allocated", allocatedOn: "06-07-2026 13:11:14", category: "General", unitCategory: "1 BHK Type-A" },
      { applicantName: "Aaditya Pandita", applicationNo: "338693", flatNo: "T9-1201", status: "Allocated", allocatedOn: "06-07-2026 13:11:16", category: "General", unitCategory: "2 BHK Type-A" },
      { applicantName: "Abhimanyu Singh", applicationNo: "328611", flatNo: "T9-204", status: "Allocated", allocatedOn: "06-07-2026 13:11:19", category: "General", unitCategory: "2 BHK Type-A" },
      { applicantName: "Aayush Bhatia", applicationNo: "318488", flatNo: "T16-503", status: "Allocated", allocatedOn: "06-07-2026 13:11:27", category: "General", unitCategory: "3 BHK MQ" },
      { applicantName: "Abhikanksh Udai Singh", applicationNo: "325246", flatNo: "T16-801", status: "Allocated", allocatedOn: "06-07-2026 13:11:27", category: "General", unitCategory: "3 BHK MQ" },
      { applicantName: "Irfan Khan", applicationNo: "316940", preference: "1", status: "Waitlist", category: "General", unitCategory: "1 BHK Type-A" },
      { applicantName: "Rinki Chauhan", applicationNo: "324215", preference: "2", status: "Waitlist", category: "General", unitCategory: "1 BHK Type-A" },
      { applicantName: "Arun Kumar", applicationNo: "327569", preference: "1", status: "Waitlist", category: "General", unitCategory: "2 BHK Type-A" }
    ]
  },
  {
    projectId: "220",
    projectName: "Advitya Homes-II",
    developer: "Advitya Residency LLP",
    sector: "Sector 143, Mathura Road, Faridabad",
    drawDate: "10 June 2026",
    authority: "Town and Country Planning Department, Haryana",
    winnerPdf: "/assets/aistudio/Advitya_Winner_83b5a856.pdf",
    waitlistPdf: "/assets/aistudio/Advitya_waiting_6983e013.pdf",
    totalWinners: 392,
    totalWaitlist: 103,
    featuredRecords: [
      { applicantName: "Aakanksha Gupta", applicationNo: "315882", flatNo: "T10-202", status: "Allocated", allocatedOn: "10-06-2026 12:48:29", category: "General", unitCategory: "2 BHK Type-I" },
      { applicantName: "Aakriti Chhitwal", applicationNo: "321654", flatNo: "T10-1002", status: "Allocated", allocatedOn: "10-06-2026 12:48:29", category: "General", unitCategory: "2 BHK Type-I" },
      { applicantName: "Aarushi Dubey", applicationNo: "317980", flatNo: "T11-603", status: "Allocated", allocatedOn: "10-06-2026 12:48:26", category: "General", unitCategory: "2 BHK Type-I" },
      { applicantName: "Abhishek Giri", applicationNo: "313907", flatNo: "T14-403", status: "Allocated", allocatedOn: "10-06-2026 12:48:31", category: "General", unitCategory: "2 BHK Type-II" },
      { applicantName: "Abhishek Kumar", applicationNo: "319589", flatNo: "T14-1404", status: "Allocated", allocatedOn: "10-06-2026 12:48:31", category: "General", unitCategory: "2 BHK Type-II" },
      { applicantName: "Rajinder Kumar Gupta", applicationNo: "315957", preference: "1", status: "Waitlist", category: "General", unitCategory: "2 BHK Type-I" },
      { applicantName: "Saurabh Agrawal", applicationNo: "314464", preference: "2", status: "Waitlist", category: "General", unitCategory: "2 BHK Type-I" },
      { applicantName: "Shreya Arora", applicationNo: "316582", preference: "1", status: "Waitlist", category: "General", unitCategory: "2 BHK Type-II" }
    ]
  },
  {
    projectId: "230",
    projectName: "Anantya by True Habitat",
    developer: "Stardum Real Estate Private Limited",
    sector: "Sector 110A, Faridabad",
    drawDate: "16 October 2026",
    authority: "Town and Country Planning Department, Haryana",
    winnerPdf: "/assets/aistudio/Anantya_Brochure_b70ea0ed.pdf",
    waitlistPdf: "/assets/aistudio/Anantya_Payment_Plan_e1d01465.pdf",
    totalWinners: 680,
    totalWaitlist: 163,
    featuredRecords: [
      { applicantName: "Pooja Verma", applicationNo: "341029", flatNo: "T1-402", status: "Allocated", allocatedOn: "16-10-2026 14:22:10", category: "General", unitCategory: "3 BHK Type-1" },
      { applicantName: "Rakesh Sharma", applicationNo: "342115", flatNo: "T2-801", status: "Allocated", allocatedOn: "16-10-2026 14:22:15", category: "General", unitCategory: "3 BHK Type-2" },
      { applicantName: "Suresh Chand", applicationNo: "340889", flatNo: "T3-1104", status: "Allocated", allocatedOn: "16-10-2026 14:23:00", category: "General", unitCategory: "3 BHK Type-1" },
      { applicantName: "Vikas Aggarwal", applicationNo: "343990", flatNo: "T5-602", status: "Allocated", allocatedOn: "16-10-2026 14:24:12", category: "General", unitCategory: "2 BHK Type-4" },
      { applicantName: "Manju Bhardwaj", applicationNo: "341882", preference: "1", status: "Waitlist", category: "General", unitCategory: "3 BHK" },
      { applicantName: "Deepak Rawat", applicationNo: "342551", preference: "2", status: "Waitlist", category: "General", unitCategory: "3 BHK" }
    ]
  }
];
