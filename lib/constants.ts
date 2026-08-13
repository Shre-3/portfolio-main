export const PERSONAL_INFO = {
  name: "Shreya Acharya",
  title: "Data Scientist",
  email: "vsa.shreya@gmail.com",
  phone: "9686006811",
  location: "Hamburg, Germany",
  github: "Shre-3",
  linkedin: "shreya-acharya-75b27026b",
  cgpa: "9.2",
  bio: `Engineer with a practical background in cybersecurity and data science. I've built and deployed end-to-end solutions across AI, ML and security, and I'm seeking a Werkstudent opportunity in Data Science where I can contribute while continuing to grow as an engineer.`,
  longBio: `I'm a Data Science graduate student at Hamburg University of Technology (TUHH) with an engineering background in Cyber Security from VTU (CGPA 9.2/10). My work spans churn prediction and analytics platforms built with Scikit-Learn, XGBoost and FastAPI, retrieval-augmented generation pipelines built with LangChain and HuggingFace, and full-stack MERN applications. I care about shipping solutions end-to-end — from model training and evaluation to dockerized deployment.`,
  heroTagline: "I turn messy data into models, and models into products.",
  roles: ["Data Scientist"],
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Shre-3",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shreya-acharya-75b27026b",
    icon: "linkedin",
  },
];

export const NAV_LINKS = [
  { name: "Home",         href: "#home"         },
  { name: "About",        href: "#about"        },
  { name: "Education",    href: "#education"    },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact",      href: "#contact"      },
];

export const EDUCATION_TIMELINE = [
  {
    title: "Master of Science in Data Science",
    company: "Hamburg University of Technology (TUHH)",
    location: "Hamburg, Germany",
    period: "Oct 2026 – Present",
    type: "Master's",
    highlights: [
      "Pursuing an M.Sc. in Data Science, building on a cybersecurity and software engineering foundation",
      "Coursework and independent projects spanning machine learning, statistical modeling, and applied data engineering",
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering (Cyber Security)",
    company: "Visvesvaraya Technological University (VTU)",
    location: "India",
    period: "2022 – 2026",
    type: "Bachelor's",
    highlights: [
      "Graduated with a CGPA of 9.2/10, specializing in Cyber Security",
      "Published research at IEEE Xplore via COMP-SIF on 6G-enabled UAV communication",
      "Built and deployed end-to-end AI, ML, and full-stack projects throughout the degree",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "Java", "C"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Flask", "Express.js", "Node.js"],
  },
  {
    name: "Frontend",
    skills: ["React", "HTML5", "Tailwind CSS"],
  },
  {
    name: "AI & ML",
    skills: [
      "NumPy", "Pandas", "Scikit-learn", "LLMs",
      "OpenAI API", "RAG", "LangChain",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "ChromaDB"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Postman", "Nmap", "Kali Linux"],
  },
];

export const FEATURED_REPOS = [
  "Credit-Card-Customer-Churn-Analytics",
  "RAG-Study-Application",
  "RecipeHub4.0",
];

export const PROJECT_CATEGORIES: Record<string, string> = {
  "Credit-Card-Customer-Churn-Analytics": "Data Science",
  "RAG-Study-Application": "AI/ML",
  "AI-Powered-Job-Application-Assistant": "AI/ML",
  "RecipeHub4.0": "Full Stack",
};

export const PUBLICATIONS = [
  {
    title: "From Sky to Spectrum: Unveiling the Potential of 6G for UAV Communication",
    venue:
      "International Conference on Computing for Sustainability and Intelligent Future (COMP-SIF)",
    publisher: "IEEE Xplore",
    date: "April 2025",
    description:
      "Highlights the convergence of Machine Learning, security, and trajectory optimization in UAVs using 6G.",
    badge: "IEEE Xplore",
  },
];

export const CASE_STUDIES = [
  {
    id: "credit-card-churn",
    title: "Credit Card Customer Churn Analytics Platform",
    tagline: "Turning churn risk into retention dollars",
    description:
      "Analyzed 10,127 customer records to uncover a 16.07% churn rate through interactive dashboards and segmentation, then built a churn prediction model achieving ROC-AUC 0.993, identifying 1,354 high-risk customers and $152K in potential annual savings.",
    tech: ["Scikit-Learn", "XGBoost", "FastAPI", "PostgreSQL"],
    category: "Data Science",
    github: "https://github.com/Shre-3/Credit-Card-Customer-Churn-Analytics",
    demo: "",
    bgClass: "from-amber-700 to-orange-500",
    darkBgClass: "dark:from-amber-800 dark:to-orange-700",
  },
  {
    id: "study-smart",
    title: "RAG Study Application: Study Smart",
    tagline: "Turning PDFs into an interactive study buddy",
    description:
      "A dockerized RAG pipeline with 900-character chunking and dual-stage retrieval across a 1536-D vector space, reranked by a cross-encoder — powering document chat, summarization, and MCQ quiz generation.",
    tech: ["RAG", "LangChain", "HuggingFace", "LLM APIs"],
    category: "AI/ML",
    github: "https://github.com/Shre-3/RAG-Study-Application",
    demo: "",
    bgClass: "from-stone-700 to-amber-600",
    darkBgClass: "dark:from-stone-800 dark:to-amber-700",
  },
  {
    id: "recipehub",
    title: "RecipeHub",
    tagline: "Dockerized MERN app for smarter meal planning",
    description:
      "A full-stack recipe platform with live search, a pantry matcher that scores dish matches against ingredients on hand, and a dynamic meal planner handling 3-to-7 day schedules across dietary, allergy, and cuisine filters.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "Full Stack",
    github: "https://github.com/Shre-3/RecipeHub4.0",
    demo: "",
    bgClass: "from-orange-500 to-rose-500",
    darkBgClass: "dark:from-orange-600 dark:to-rose-700",
  },
];

export const CERTIFICATIONS: { name: string; issuer: string; description: string }[] = [
  {
    name: "CISCO Certified Support Technician",
    issuer: "Cisco",
    description: "Covers networking fundamentals, cybersecurity basics, and IT support essentials.",
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  default: "#b45309",
};
