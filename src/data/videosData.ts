export interface VideoItem {
  id: string;
  title: string;
  category: 'Site Visit' | 'Market Analysis' | 'Master Plan' | 'RERA Updates';
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  duration?: string;
  featured?: boolean;
}

export const VIDEO_LIBRARY: VideoItem[] = [
  {
    id: "vid-faridabad-market-update",
    title: "Faridabad Real Estate Market Update 2026: Master Plan, Expressways & Investment Hotspots",
    category: "Market Analysis",
    youtubeId: "TL2Abh_JxvA",
    youtubeUrl: "https://www.youtube.com/watch?v=TL2Abh_JxvA",
    description: "In-depth review of Greater Faridabad real estate trends, Delhi-Mumbai expressway connectivity, sector comparisons, and upcoming plotted vs high-rise developments.",
    featured: true
  },
  {
    id: "vid-emerald-sector-97-walkthrough",
    title: "Emerald Highrise & Gulmohar Plots Sector 97 Ground Reality & Construction Update",
    category: "Site Visit",
    youtubeId: "GIu0T7baRpI",
    youtubeUrl: "https://www.youtube.com/watch?v=GIu0T7baRpI",
    description: "Detailed site inspection of Sector 97, showing 60-meter master road, Emerald Highrise site, Gulmohar plots, and proximity to Amrita Hospital.",
    featured: true
  },
  {
    id: "vid-dameera-sector-121-tour",
    title: "DaMeera City Sector 121: OC Received Plotted Colony Ground Visit & Boundary Check",
    category: "Site Visit",
    youtubeId: "Sv3XyNjT0h4",
    youtubeUrl: "https://www.youtube.com/watch?v=Sv3XyNjT0h4",
    description: "Visual inspection of 131 demarcated plots, 45m master road access, and verified Completion and Occupation certificates in Sector 121.",
    featured: true
  },
  {
    id: "vid-soha-olive-homes-sector-98",
    title: "Soha Olive Homes Sector 98: Manjhawali Bridge Road & Affordable Draw Overview",
    category: "Site Visit",
    youtubeId: "gRtNK6cBYPU",
    youtubeUrl: "https://www.youtube.com/watch?v=gRtNK6cBYPU",
    description: "Comprehensive site walkthrough of Sector 98 along the 60m road, reviewing draw allocations and the rapid progress of the Manjhawali Bridge corridor to Sector 150 Noida.",
    featured: true
  },
  {
    id: "vid-townfit-70-imt-faridabad",
    title: "Townfit 70 & Brickklin Silicon Valley: Plotted Townships in IMT Sector 70",
    category: "Site Visit",
    youtubeId: "TL2Abh_JxvA",
    youtubeUrl: "https://www.youtube.com/watch?v=TL2Abh_JxvA",
    description: "Tour of the 102-acre Townfit township, 8-acre central park, internal wide roads, and ready OC possession at Brickklin Silicon Valley."
  }
];
