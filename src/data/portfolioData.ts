export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
  videoUrl?: string;
  videoUrl2?: string;
  image?: string;
  category: 'Full Stack' | 'Mobile App';
  status: 'Completed' | 'In-Progress';
  badge: string;
  metrics?: string;
  isMobile?: boolean;
  mobileScreens?: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  metric: string;
  description: string;
  tag: string;
}

export const PERSONAL_INFO = {
  name: "Shrawan Kumar Yadav",
  title: "Software Developer | Full Stack (Spring Boot & React) | React Native",
  brandName: "sky.devX",
  email: "shrawan29yadav@gmail.com",
  phone: "+91-6299307414",
  location: "Greater Noida, India",
  status: "Available for Internships & Software Engineering Roles",
  availabilityText: "Ready for immediate hiring & innovative development teams",
  heroSubtitle: "Building Scalable Web Systems & Cross-Platform Mobile Apps.",
  heroSummary: "Computer Science Engineering student at ITS Engineering College specializing in Spring Boot & Java backends, modern React & Vite frontends, and React Native mobile applications.",
  aboutIntro: "I am a dedicated Computer Science Engineering student and Full Stack Software Developer specializing in Java, Spring Boot, React.js, and React Native. With a proven competitive track record of solving 800+ DSA problems and securing Global Rank 614 in LeetCode Weekly Contest 479 (Top 2%), I combine rigorous algorithmic discipline with robust software architecture.",
  aboutHighlights: [
    "Solved 800+ Data Structures & Algorithms problems across LeetCode, Codeforces, and GeeksforGeeks.",
    "Achieved Global Rank 614 out of 30,000+ participants (Top 2%) in LeetCode Weekly Contest 479.",
    "Ranked 6th Academic Topper in B.Tech 1st Year at ITS Engineering College (CGPA: 8.1).",
    "Engineered production full-stack systems with Spring Boot, Spring Security, React, Docker, and PostgreSQL/MongoDB.",
    "Built and published cross-platform mobile products using React Native and Expo."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/shrawan-kr-yadav-009008281/",
    github: "https://github.com/shrawanyadkr2",
    leetcode: "https://leetcode.com/u/sk8757/",
    instagram: "https://www.instagram.com/shrawanyadav27_/?hl=en"
  },
  stats: [
    { label: "DSA Problems Solved", value: "800+", subtext: "LeetCode, Codeforces, GFG" },
    { label: "LeetCode Contest 479", value: "Rank 614", subtext: "Top 2% / 30,000+ worldwide" },
    { label: "Academic Topper", value: "6th Rank", subtext: "B.Tech 1st Year (ITS Engg)" },
    { label: "B.Tech CGPA", value: "8.1", subtext: "ITS Engineering College (2023-27)" }
  ]
};

export const MOBILE_PROJECTS: Project[] = [
  {
    id: "resume-genie-app",
    title: "Resume Genie Mobile App",
    subtitle: "React Native Mobile App with On-Device PDF Engine & Native Android Sharing",
    description: "Cross-platform mobile resume builder allowing users to input career history, preview formatted ATS templates in real-time, generate PDF resumes locally, and share via Android native intents.",
    detailedDescription: "Resume Genie delivers an intuitive mobile resume crafting suite. Developed using React Native and Expo, it integrates Expo Image Picker for headshot cropping, Expo Print for real-time PDF compilation on mobile devices, and Expo Sharing for instant export to WhatsApp, Gmail, or Google Drive. Synchronized with a custom Java & Spring Boot backend with MongoDB persistence.",
    technologies: [
      "React Native (0.88)", 
      "Expo (v58)", 
      "Expo Print (PDF)", 
      "Expo Sharing", 
      "Expo Image Picker", 
      "Spring Boot (Java Backend)", 
      "MongoDB", 
      "Android APK Build"
    ],
    features: [
      "Live screen recording demonstration of real-time mobile resume editing and generation",
      "Native on-device PDF compilation using Expo Print engine",
      "One-tap export to Android native share sheet (WhatsApp, Email, Drive)",
      "Native image gallery and camera integration for profile headshots",
      "Full integration with custom Java & Spring Boot REST backend",
      "Direct compiled Android APK binary download available"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/ResumeBuilderApp",
    apkUrl: "/ResumeGenie.apk",
    videoUrl: "/resume_app_demo_1.mp4",
    videoUrl2: "/resume_app_demo_2.mp4",
    category: "Mobile App",
    status: "Completed",
    badge: "Live Video & APK Available",
    metrics: "75.7 MB APK • Video Demo • On-Device PDF",
    isMobile: true
  },
  {
    id: "coffeeshop-app",
    title: "CoffeeShop Mobile App",
    subtitle: "Premium E-Commerce Mobile Application crafted in React Native & Expo",
    description: "Production-grade cross-platform mobile e-commerce application developed with React Native from Figma designs featuring 8 rich screens, tactile spring animations, and EAS Android APK generation.",
    detailedDescription: "Crafted with React Native 0.88 and Expo 58, this mobile application replicates a pixel-perfect Figma coffee commerce workflow. Features tactile micro-interactions on product cards, animated screen transitions, dark/light theme system, responsive phone and tablet layouts, and a dedicated REST API service layer with JWT header injection. Tested with Metro bundler and configured for Android APK generation using EAS Build.",
    technologies: [
      "React Native (0.88)", 
      "Expo (v58)", 
      "JavaScript / TypeScript", 
      "Safe Area Context", 
      "EAS Build (Android APK)", 
      "REST API Client", 
      "Figma Fidelity",
      "Metro Bundler"
    ],
    features: [
      "8 full application screens: Onboarding, Home, Product Details, Cart, Order, Live Delivery Tracker, Favorites, and Profile",
      "Smooth slide-fade transition engine and tactile spring scaling on user touch interactions",
      "Full dark & light theme system with instant toggle and persistent theme preference",
      "Dynamic product category filtering, real-time search, and coffee bean customizer (size selection & add-ons)",
      "Configured EAS Build pipeline for automated Android APK artifact generation"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    image: "/coffeeshop_figma.png",
    category: "Mobile App",
    status: "Completed",
    badge: "Featured Mobile App",
    metrics: "8 Mobile Screens • EAS APK Ready",
    isMobile: true,
    mobileScreens: [
      { name: "Home & Catalog", description: "Search, promo banner, category filters & 2-column coffee grid", tag: "Discovery" },
      { name: "Product Detail", description: "Bean origin details, size selector (S/M/L) & pricing bar", tag: "E-Commerce" },
      { name: "Cart & Checkout", description: "Quantity stepper, discount vouchers, delivery options & order total", tag: "Transaction" },
      { name: "Live Delivery Tracker", description: "Real-time courier route simulation, rider status & contact", tag: "Logistics" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "advance-school-erp",
    title: "Advance School ERP",
    subtitle: "Enterprise School Management Web App with Spring Security & Online Payments",
    description: "A comprehensive school management platform built to manage student admissions, attendance, online fee payments, timetables, and report cards.",
    detailedDescription: "Advance School ERP streamlines academic institution operations. The backend is built using Spring Boot & Java with Spring Security & JWT for role-based permissions (Admin, Teacher, Student). MongoDB persists student records, attendance logs, and fee transactions without complex SQL joins. The React & Tailwind frontend uses AuthContext for seamless session persistence across browser refreshes, integrated with Razorpay for online fees, Brevo for account verification, Cloudinary for media uploads, and containerized with Docker for Render deployment.",
    technologies: [
      "React.js", 
      "Spring Boot", 
      "Java", 
      "Spring Security", 
      "JWT", 
      "MongoDB", 
      "Razorpay", 
      "Docker", 
      "Brevo API", 
      "Cloudinary", 
      "Tailwind CSS", 
      "Render"
    ],
    features: [
      "Engineered backend using Spring Boot & Java with Spring Security & JWT for role-based permissions (Admin, Teacher, Student)",
      "MongoDB document architecture storing student profiles, class timetables, attendance logs, and fee records",
      "Interactive frontend built with React & Tailwind CSS using AuthContext to preserve user sessions across tabs",
      "Integrated Razorpay gateway for seamless online fee processing",
      "Automated verification emails via Brevo and Cloudinary profile photo uploads",
      "Packaged backend with Dockerfile and deployed to Render"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/schoolmanagement-frontend",
    githubFrontendUrl: "https://github.com/shrawanyadkr2/schoolmanagement-frontend",
    githubBackendUrl: "https://github.com/shrawanyadkr2/schoolmanagement-backend",
    image: "/school_erp_screenshot.png",
    category: "Full Stack",
    status: "Completed",
    badge: "Enterprise Web App",
    metrics: "Dockerized • Razorpay • Spring Security"
  },
  {
    id: "resumebuilder-apps",
    title: "ResumeBuilder Apps (sky.devX SaaS)",
    subtitle: "Full-Stack SaaS Platform for ATS-Friendly Professional Resumes",
    description: "A full-stack SaaS platform empowering users to construct ATS-friendly professional resumes with real-time live preview.",
    detailedDescription: "ResumeBuilder Apps provides a complete SaaS resume generation workflow. The Java & Spring Boot backend enforces JWT and Spring Security authentication, backed by MongoDB for modular resume section storage (experience, education, skills, tokens). The React & Tailwind frontend incorporates AuthContext for persistent sessions, Brevo API for email verification, and Cloudinary for photo uploads, deployed across Render (backend) and Vercel (frontend).",
    technologies: [
      "React.js", 
      "Spring Boot", 
      "Java", 
      "Spring Security", 
      "JWT", 
      "MongoDB", 
      "Brevo API", 
      "Cloudinary", 
      "Tailwind CSS", 
      "Vercel", 
      "Render"
    ],
    features: [
      "Full-stack SaaS architecture generating ATS-compliant resumes with real-time live preview",
      "Spring Boot & Java backend featuring Spring Security & JWT authentication",
      "MongoDB document model storing user profiles, customizable resume sections, and tokens",
      "React & Tailwind CSS frontend with AuthContext session persistence",
      "Brevo API integration for verification emails and Cloudinary for headshot hosting",
      "Production deployment on Vercel (frontend) and Render (backend)"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/resumebuilder-frontend",
    githubFrontendUrl: "https://github.com/shrawanyadkr2/resumebuilder-frontend",
    githubBackendUrl: "https://github.com/shrawanyadkr2/resumebuilder-backend",
    image: "/resumebuilder_dark_screenshot.png",
    category: "Full Stack",
    status: "Completed",
    badge: "SaaS Resume Engine",
    metrics: "ATS Live Preview • Vercel + Render"
  },
  {
    id: "shortiex-apps",
    title: "shortieX Apps",
    subtitle: "Scalable URL Shortener & Click Analytics Platform",
    description: "High-throughput URL shortening service featuring Base62 encoding, collision retries, and comprehensive click analytics.",
    detailedDescription: "shortieX is an enterprise-grade URL shortening and analytics platform. Its Spring Boot & Java backend leverages Spring Security (JWT) and PostgreSQL (NeonDB) to record granular click metrics (device, browser, OS, IP address). Uses a custom Base62 short code generator with collision retries and reserved word protection. The React + Vite frontend uses TanStack Query for efficient API caching and Recharts for analytics dashboards, with Swagger UI documentation and Dockerized Render/Vercel deployment.",
    technologies: [
      "React.js", 
      "Vite", 
      "Spring Boot", 
      "Java", 
      "PostgreSQL (NeonDB)", 
      "Spring Security (JWT)", 
      "TanStack Query", 
      "Recharts", 
      "Base62", 
      "Swagger UI", 
      "Docker", 
      "Tailwind CSS"
    ],
    features: [
      "Spring Boot, Java, and Spring Security (JWT) backend for authenticated URL management",
      "PostgreSQL (Neon DB) tracking granular analytics: device type, browser, OS, and client IP",
      "Base62 short code generator with collision retries and reserved word checks for custom aliases",
      "React & Vite frontend with TanStack Query caching and interactive Recharts data visualizations",
      "Brevo SMTP email verification, password reset flows, and Swagger UI API documentation",
      "Containerized with Docker for Render backend and Vercel frontend"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Full Stack",
    status: "Completed",
    badge: "High-Throughput Analytics",
    metrics: "Base62 Engine • NeonDB • Recharts"
  },
  ...MOBILE_PROJECTS
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Computer Science Core",
    description: "Core academic and engineering fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: "800+ Solved", featured: true },
      { name: "Operating Systems", level: "Processes & Memory", featured: true },
      { name: "DBMS", level: "Relational & NoSQL", featured: true },
      { name: "Computer Networks", level: "Protocols & TCP/IP", featured: false },
      { name: "OOPs", level: "Design Principles", featured: true }
    ]
  },
  {
    title: "Programming Languages",
    description: "Languages used across full-stack and algorithmic problem solving",
    skills: [
      { name: "Java", level: "Advanced & Spring Boot", featured: true },
      { name: "JavaScript", level: "Advanced ES6+", featured: true },
      { name: "C++", level: "DSA & Competitive", featured: true },
      { name: "C", level: "Foundational", featured: false },
      { name: "HTML5", level: "Semantic Markup", featured: false }
    ]
  },
  {
    title: "Backend & Frameworks",
    description: "Server architecture, enterprise APIs, and security",
    skills: [
      { name: "Spring Boot", level: "Enterprise Microservices", featured: true },
      { name: "Spring Security", level: "RBAC & Authorization", featured: true },
      { name: "JWT Authentication", level: "Stateless Auth", featured: true },
      { name: "REST APIs", level: "Design & Swagger UI", featured: true },
      { name: "Docker", level: "Containerization", featured: true }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Client application development and state management",
    skills: [
      { name: "React.js", level: "Components & Hooks", featured: true },
      { name: "Tailwind CSS", level: "Responsive Styling", featured: true },
      { name: "TanStack Query", level: "Async State & Caching", featured: true },
      { name: "Recharts", level: "Data Visualization", featured: false },
      { name: "Material UI (MUI)", level: "Component Library", featured: false },
      { name: "AOS", level: "Scroll Animations", featured: false }
    ]
  },
  {
    title: "Mobile Development (React Native & Cross-Platform)",
    description: "Cross-platform smartphone engineering for Android and iOS",
    skills: [
      { name: "React Native (0.88+)", level: "App Architecture", featured: true },
      { name: "Expo (v58)", level: "Native APIs & Modules", featured: true },
      { name: "EAS Build", level: "Android APK Generation", featured: true },
      { name: "Mobile UI & Safe Area", level: "Phone & Tablet Layouts", featured: true }
    ]
  },
  {
    title: "Databases & Cloud Storage",
    description: "Relational, document, and cloud database persistence",
    skills: [
      { name: "PostgreSQL (NeonDB)", level: "Cloud Relational DB", featured: true },
      { name: "MongoDB", level: "Document Storage", featured: true },
      { name: "MySQL", level: "Relational Modeling", featured: true },
      { name: "Cloudinary", level: "Cloud Media Storage", featured: false }
    ]
  },
  {
    title: "Developer Tools & Services",
    description: "Development environments, version control, and cloud services",
    skills: [
      { name: "VS Code", level: "Primary IDE", featured: false },
      { name: "Git & GitHub", level: "Version Control", featured: true },
      { name: "Razorpay", level: "Payment Gateway", featured: true },
      { name: "Brevo SMTP", level: "Email & Verification", featured: true }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering (CSE)",
    institution: "ITS Engineering College",
    location: "Greater Noida, India",
    period: "2023 – 2027",
    grade: "8.1 CGPA",
    gradeType: "CGPA",
    highlights: [
      "Ranked 6th Academic Topper in B.Tech 1st Year at ITS Engineering College.",
      "Maintained strong 8.1 CGPA across core Computer Science curriculum.",
      "Key Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOPs."
    ]
  },
  {
    degree: "Intermediate (PCMC)",
    institution: "RLSY Jhumary Telaiya (JAC)",
    location: "Koderma, JH",
    period: "2021 – 2023",
    grade: "88.2%",
    gradeType: "Percentage",
    highlights: [
      "Completed Higher Secondary Intermediate with 88.2% distinction.",
      "Specialization in Physics, Chemistry, Mathematics, and Computer Science (PCMC)."
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "800+ DSA Problems Solved",
    metric: "800+ Solved",
    description: "Solved 800+ Data Structures and Algorithms problems across LeetCode, Codeforces, and GeeksforGeeks, strengthening problem-solving and analytical skills.",
    tag: "Problem Solving"
  },
  {
    title: "LeetCode Weekly Contest 479",
    metric: "Global Rank 614",
    description: "Achieved Global Rank 614 out of 30,000+ participants worldwide (Top 2% Globally) in LeetCode Weekly Contest 479.",
    tag: "Competitive Programming"
  },
  {
    title: "6th Academic Topper (B.Tech 1st Year)",
    metric: "Rank 6th Topper",
    description: "Ranked 6th Academic Topper in B.Tech 1st Year at ITS Engineering College with an 8.1 CGPA.",
    tag: "Academic Excellence"
  }
];

export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    username: "sk8757",
    url: "https://leetcode.com/u/sk8757/",
    tagline: "Algorithmic Mastery & Global Contest Ranking",
    highlight: "Global Rank 614 in Weekly Contest 479 (Top 2% / 30,000+). Consistent problem solver across Arrays, DP, Graphs, and Trees.",
    badgeColor: "from-amber-500/20 to-emerald-500/20 text-amber-500",
    metrics: "Part of 800+ solved across platforms"
  },
  {
    platform: "GitHub",
    username: "shrawanyadkr2",
    url: "https://github.com/shrawanyadkr2",
    tagline: "Full-Stack Enterprise & Mobile Codebases",
    highlight: "Production-grade Spring Boot & Java backends, React applications, and React Native mobile apps with Docker & CI/CD.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    metrics: "Spring Boot • React • React Native"
  }
];
