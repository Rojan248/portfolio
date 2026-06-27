// All portfolio content for Rojan Kafle. Single source of truth.

export const PROFILE = {
  firstName: "ROJAN",
  lastName: "KAFLE",
  roles: ["Graphic Designer", "Visual Content Creator", "Aspiring Tech Builder"],
  location: "Kathmandu, Nepal",
  issue: "ISSUE No. 01",
  volume: "VOL. 2026",
  about:
    "I'm a developing visual designer with a strong interest in typography, composition, and clear communication. My portfolio includes promotional graphics and technical product visuals. I also build projects in Python, JavaScript, and web development \u2014 connecting visual thinking with implementation.",
  availability: {
    headline: "Available for Part-Time Remote Work",
    lines: [
      "Available after classes, during evenings, and on weekends.",
      "10\u201315 hours per week for flexible remote work.",
    ],
  },
  motto: ["ELEVATE", "ADAPT", "ASCEND"],
};

export const CONTACT = {
  email: "rojanrkafle@gmail.com",
  phone: "+977 9762117273",
  github: "github.com/Rojan248",
  githubUrl: "https://github.com/Rojan248",
};

export const NAV = [
  { id: "cover", num: "00", label: "Cover" },
  { id: "about", num: "01", label: "About" },
  { id: "work", num: "02", label: "Selected Work" },
  { id: "lab", num: "03", label: "Lab // Code" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "education", num: "05", label: "Education" },
  { id: "contact", num: "06", label: "Contact" },
];

// Featured work. Two are real poster images, two are CSS-rendered spec plates.
export const WORK = [
  {
    id: "summit",
    no: "01",
    kind: "image",
    title: "SUMMIT",
    subtitle: "Limited Edition Cover",
    thumb: process.env.PUBLIC_URL + "/assets/work/summit-thumb.webp",
    full: process.env.PUBLIC_URL + "/assets/work/summit-full.webp",
    ratio: "1055 / 1491",
    category: "Editorial / Cover",
    year: "2026",
    tags: ["Editorial", "Poster", "Typography", "Image Treatment"],
    blurb:
      "A vintage-print magazine cover for a competitive gaming season. Distressed paper stock, halftone landscape, an oversized broken masthead and a single green spot color \u2014 finished with a die-cut LIMITED EDITION stamp.",
  },
  {
    id: "the-rocks",
    no: "02",
    kind: "image",
    title: "THE ROCKS",
    subtitle: "Live Gig Poster",
    thumb: process.env.PUBLIC_URL + "/assets/work/the-rocks-thumb.webp",
    full: process.env.PUBLIC_URL + "/assets/work/the-rocks-full.webp",
    ratio: "1024 / 1536",
    category: "Music / Promo",
    year: "2026",
    tags: ["Poster", "Music", "Risograph", "Layout"],
    blurb:
      "An underground gig flyer built on oversized grotesque type, a halftone crowd, a perforated ticket-stub system and a vertical lineup index running up the margin.",
  },
  {
    id: "aprilia",
    no: "03",
    kind: "image",
    title: "APRILIA RSV4",
    subtitle: "Carbon Fiber Edition \u2014 Spec Poster",
    thumb: process.env.PUBLIC_URL + "/assets/work/aprilia-thumb.webp",
    full: process.env.PUBLIC_URL + "/assets/work/aprilia-full.webp",
    ratio: "1024 / 1536",
    category: "Automotive / Technical",
    year: "2024",
    tags: ["Automotive", "Technical Poster", "Typography", "Information Design"],
    blurb:
      "High-impact product poster with bold split-color layout and full technical-data visualization. A carbon-fiber Factory edition treatment, designed for both digital feeds and print-ready output.",
  },
  {
    id: "porsche",
    no: "04",
    kind: "image",
    title: "PORSCHE 911",
    subtitle: "GT3 RS \u2014 Spec Poster",
    thumb: process.env.PUBLIC_URL + "/assets/work/porsche-thumb.webp",
    full: process.env.PUBLIC_URL + "/assets/work/porsche-full.webp",
    ratio: "1055 / 1491",
    category: "Automotive / Brand",
    year: "2025",
    tags: ["Automotive", "Promotional", "Visual Hierarchy", "Spec Poster"],
    blurb:
      "Brand-aligned product showcase with an oversized '911' numeral, a clean technical-data column and a striking black / red palette. Optimized for social media and promotional use.",
  },
];

export const REPOS = [
  {
    no: "01",
    name: "nepse-stock-website",
    desc: "Web application for Nepali stock-market data visualization \u2014 demonstrates API integration and a data-driven UI.",
    stack: ["Python", "HTML/CSS", "JavaScript"],
    url: "https://github.com/Rojan248/nepse-stock-website",
  },
  {
    no: "02",
    name: "pseudocode-interpreter",
    desc: "Educational interpreter showing structured programming logic \u2014 demonstrates algorithmic thinking and problem-solving.",
    stack: ["Python"],
    url: "https://github.com/Rojan248/pseudocode-interpreter",
  },
  {
    no: "03",
    name: "autonomous-credit-orchestrator",
    desc: "Automation tool for financial / credit workflows \u2014 demonstrates process automation and n8n-style logic.",
    stack: ["Python"],
    url: "https://github.com/Rojan248/autonomous-credit-orchestrator",
  },
  {
    no: "04",
    name: "electric-luxury-website",
    desc: "Frontend design concept for a luxury automotive / e-commerce brand \u2014 demonstrates visual-design sensibility.",
    stack: ["HTML/CSS", "JavaScript"],
    url: "https://github.com/Rojan248/electric-luxury-website",
  },
];

export const SKILLS = [
  {
    label: "Design Practice",
    items: ["Typography", "Layout", "Promotional Graphics", "Technical Posters", "Basic UI Concepts"],
    highlight: "Typography",
  },
  {
    label: "Specialties",
    items: [
      "Social Media Graphics",
      "Brand-Aware Visuals",
      "Promotional Posters",
      "Technical Visuals",
      "Infographics",
    ],
    highlight: "Promotional Posters",
  },
  {
    label: "Technical",
    items: ["Python", "HTML/CSS", "JavaScript", "Git / GitHub", "n8n (learning)"],
    highlight: "JavaScript",
  },
  {
    label: "Soft Skills",
    items: ["Responsive to Feedback", "Self-Directed", "Detail-Oriented", "Remote-Ready"],
    highlight: "Remote-Ready",
  },
];

export const EDUCATION = {
  program: "A LEVELS",
  school: "Islington College, Kathmandu",
  timeline: "2025 \u2014 Present",
  subjects: ["Computer Science", "Economics", "Mathematics", "General Paper (GP)"],
};
