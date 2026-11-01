export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Abhi Dinkale",
  firstName: "Abhi",
  url: "https://abhidinkale.dev",
  quote: {
    text: "I don’t just want to use the future. I want to build it.",
    author: "Abhi Dinkale",
  },
  profileImages: [
    "/pfp.jpg",
    "/avatar-alt.jpg",
  ],
  bannerImage: "/banner.png",
  socialBannerImage: "/social-banner.png",
  initials: "AD",
  role: "AI Engineer & Product Builder",
  location: "Phagwara, Punjab, India",
  timezone: "Asia/Kolkata",
  email: "abhidinkale@gmail.com",
  greeting: "Hey, I'm Abhi",
  tagline: "Building AI-powered products for the real world.",
  about: [
    "I’m a Computer Science engineering student at Lovely Professional University focused on building AI-powered products and exploring how intelligent systems can solve real-world problems.",
    "I enjoy taking ideas from a blank page and turning them into working products: from healthcare platforms and autonomous financial systems to AI career agents and education tools.",
    "I learn by building: researching existing technology, experimenting with open-source systems, creating prototypes, breaking them, and iterating until the idea becomes something useful.",
  ],
  tldr: [
    "Building AI products.",
    "Autonomous agents & LLMs.",
    "HealthTech & Quant Finance.",
    "B.Tech CSE at LPU.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Agentic Architectures • Quantitative Systems • RAG • PyTorch",
    nowBuilding: "Proton & OBSEDIAN",
    nowListening: "deep focus",
  },
  socials: {
    github: "https://github.com/abhidinkale",
    twitter: "https://x.com/abhidinkale",
    linkedin: "https://linkedin.com/in/abhidinkale",
    email: "mailto:abhidinkale@gmail.com",
    resume: "",
    discord: "https://discord.gg/ra4kyKdTk",
    medium: "https://medium.com/@abhidinkale",
  },
  experience: [
    {
      company: "Independent AI Engineer & Product Builder",
      role: "AI Systems & Autonomous Agents Developer",
      period: "2025 – Present",
      blurb:
        "Architecting and building autonomous AI systems, intelligent medical workflows, multi-agent financial simulation engines, and full-stack AI-first platforms.",
      url: "https://github.com/abhidinkale",
    },
  ] as Job[],
  projects: [
    {
      title: "Proton",
      blurb:
        "An AI-powered healthcare intelligence platform designed to integrate medical documentation, OCR, FHIR standards, speech-to-text, and intelligent consultations into hospital workflows.",
      story:
        "Engineered with TypeScript, React, and Node.js. Integrates OpenAI Whisper speech-to-text with Tesseract OCR for digitizing physical lab notes. Connects clinical interactions with FHIR-compliant schema standards and PostgreSQL persistence to assist medical teams safely without diagnostic hallucination.",
      stack: ["React", "TypeScript", "Node.js", "FHIR", "PostgreSQL", "Whisper", "Tesseract", "AI"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: true,
      image: "/project-images/framelabs.png",
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "OBSEDIAN",
      blurb:
        "An AI-powered autonomous hedge fund in a box, running multiple specialized AI agents across market research, analysis, portfolio construction, risk management, and simulated execution.",
      story:
        "Designed strictly for quantitative simulation and backtesting. Implements a 9-stage multi-agent pipeline: Market Data ➔ Research Agents ➔ AI Analysts ➔ Strategy Engine ➔ Portfolio Engine ➔ Risk Engine ➔ Trade Engine ➔ Paper Trading ➔ Performance Analysis. Built using Python, backtesting libraries, and LLM orchestration.",
      stack: ["Python", "AI Agents", "LLMs", "Quant Finance", "Financial APIs", "PostgreSQL", "Backtesting"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: true,
      status: "In Progress",
      image: "/project-images/doodledash.png",
      categories: ["Backend"],
    },
    {
      title: "Open Opportunity",
      blurb:
        "An autonomous AI career agent that helps users discover jobs, build resumes, match opportunities, and prepare for interviews in one integrated system.",
      story:
        "Tackles the fragmented job-search pipeline. Features autonomous job discovery based on candidate skills, automated dynamic resume adaptation, automated role-specific interview simulation, and application tracking.",
      stack: ["Python", "AI Agents", "LLMs", "React", "APIs", "Automation"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: true,
      status: "Building",
      image: "/project-images/codeforge.png",
      categories: ["Fullstack"],
    },
    {
      title: "Teachly",
      blurb:
        "An AI teaching agent designed to help teachers plan lessons, create educational material, explain concepts, and prepare classroom activities.",
      story:
        "Autonomous multi-step educational workflow: Teacher gives topic ➔ Teachly adapts to class level ➔ Generates Lesson Plan ➔ Explanations ➔ Examples & Activities ➔ Practice Questions ➔ Quiz ➔ Homework.",
      stack: ["Python", "AI Agents", "LLMs", "React", "Node.js"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: false,
      status: "Building",
      image: "/project-images/swiftpoll.png",
      categories: ["Fullstack", "Frontend"],
    },
    {
      title: "UARA Health",
      blurb:
        "An AI-powered health companion designed to help people understand everyday health information, symptom tracking, and personal wellness organization.",
      story:
        "An AI companion for everyday health organization, conversations, and profile management. Designed strictly as an organizational aid, not a doctor replacement.",
      stack: ["React", "LLMs", "Mobile APIs", "AI"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: false,
      status: "Building",
      image: "/project-images/nexus.png",
      categories: ["Frontend"],
    },
    {
      title: "JEE Companion",
      blurb:
        "An AI-powered exam preparation platform designed around personalized study plans, previous-year question practice, topic analysis, and progress tracking.",
      story:
        "Personalized exam assistant with past paper retrieval, adaptive question drills, and weak-area performance diagnostics.",
      stack: ["Python", "React", "LLMs", "PostgreSQL"],
      year: "2026",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: false,
      status: "Building",
      categories: ["Fullstack"],
    },
    {
      title: "Orbit",
      blurb:
        "A learning and exam-preparation platform bringing notes, question banks, study resources, and AI learning tools into one place.",
      story:
        "Consolidates university study materials, digitized notes, question banks, and learning assistance into a fast web portal.",
      stack: ["React", "Node.js", "AI", "PostgreSQL"],
      year: "2025",
      links: {
        source: "https://github.com/abhidinkale",
      },
      featured: false,
      status: "Building",
      categories: ["Fullstack"],
    },
    {
      title: "Study Network",
      blurb:
        "An active education platform providing organized academic resources including notes, question banks, sample papers, and AI-powered learning tools.",
      story:
        "Live web application serving university students with curated notes and previous-year examination papers.",
      stack: ["React", "Node.js", "AI", "Render"],
      year: "2025",
      links: {
        live: "https://edu-network.onrender.com/",
        source: "https://github.com/abhidinkale",
      },
      featured: false,
      status: "Live",
      categories: ["Frontend", "Fullstack"],
    },
  ] as Project[],
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Node.js",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "Vector Databases",
    "LLMs",
    "Generative AI",
    "AI Agents",
    "RAG",
    "Prompt Engineering",
    "AI Automation",
    "Speech-to-Text",
    "OCR",
    "FHIR",
    "Git",
    "GitHub",
    "Docker",
    "Open Source",
  ],
  writing: [] as Post[],
  github: {
    username: "abhidinkale",
    contributionsLastYear: "500+",
  },
  footerNote: "Built with passion, AI agents, and clean code",
} as const;

export type Site = typeof site;
