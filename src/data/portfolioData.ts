export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'Real-Time / Systems' | 'Mobile App';
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

export interface HackathonExperience {
  name: string;
  date: string;
  role: string;
  description: string;
  achievements: string[];
  certificateAvailable: boolean;
}

export const PERSONAL_INFO = {
  name: "Shrawan Kumar Yadav",
  title: "Software Developer | Full Stack & React Native Developer | CSE Student",
  brandName: "sky.devX",
  email: "shrawan29yadav@gmail.com",
  phone: "+91-6299307414",
  location: "Greater Noida, India",
  status: "Available for Internships & Full-time Roles",
  availabilityText: "Ready for immediate hiring & innovative engineering teams",
  heroSubtitle: "Building Digital Experiences Through Code, Creativity & Innovation.",
  heroSummary: "Computer Science Engineering student and developer passionate about building scalable web architectures, cross-platform mobile applications with React Native, and solving challenging algorithmic problems.",
  aboutIntro: "I am a dedicated Computer Science Engineering student, Full Stack Developer, and Mobile Application Engineer with a strong foundation in modern web systems, cross-platform mobile development (React Native & Expo), and algorithmic problem solving.",
  aboutHighlights: [
    "Solved 600+ Data Structures & Algorithms challenges across LeetCode, Codeforces, and GeeksforGeeks.",
    "Engineered production-grade mobile applications with React Native, Expo, and EAS Android builds.",
    "Built full-stack platforms with React, Node.js, TypeScript, Spring Boot, and MongoDB.",
    "Active hackathon contributor with hands-on experience in rapid prototyping and high-stakes teamwork."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/shrawan-kr-yadav-009008281/",
    github: "https://github.com/shrawanyadkr2",
    leetcode: "https://leetcode.com/u/sk8757/",
    instagram: "https://www.instagram.com/shrawanyadav27_/?hl=en"
  },
  stats: [
    { label: "DSA Problems Solved", value: "600+", subtext: "LeetCode, Codeforces, GFG" },
    { label: "B.Tech CGPA", value: "8.5", subtext: "ITS Engineering College" },
    { label: "Hackathons", value: "3+", subtext: "HackWithDelhi, Hackfed, HackTrics" },
    { label: "Mobile & Web Apps", value: "7+", subtext: "React Native & Full-Stack" }
  ]
};

export const MOBILE_PROJECTS: Project[] = [
  {
    id: "coffeeshop-app",
    title: "CoffeeShop Mobile App",
    subtitle: "Premium E-Commerce Mobile Application crafted in React Native & Expo",
    description: "A complete, production-grade cross-platform mobile e-commerce application developed from Figma designs with 8 rich screens, tactile spring animations, and EAS Android APK build workflows.",
    detailedDescription: "Built with React Native 0.88 and Expo 58, this mobile app implements a pixel-perfect e-commerce shopping experience. It features tactile micro-interactions on product cards, animated screen transitions, full dark & light mode support, responsive phone & tablet layouts, and a dedicated REST API service layer with JWT header injection. Tested with Metro bundler and configured for Android APK generation using EAS Build.",
    technologies: [
      "React Native (0.88)", 
      "Expo (v58)", 
      "JavaScript / TypeScript", 
      "React Native Web", 
      "Safe Area Context", 
      "EAS Build (Android APK)", 
      "REST API Client", 
      "Figma Fidelity"
    ],
    features: [
      "8 full application screens: Onboarding, Home, Product Details, Cart, Order, Live Delivery Tracker, Favorites, and Profile",
      "Smooth slide-fade transition engine and tactile spring scaling on user touch interactions",
      "Full dark & light theme system with instant toggle and persistent theme preference",
      "Dynamic product category filtering, real-time search, and coffee bean customizer (size selection & add-ons)",
      "Configured EAS Build pipeline for automated Android APK artifact generation"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
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
  },
  {
    id: "resume-genie-app",
    title: "Resume Genie Mobile",
    subtitle: "Cross-Platform Mobile Resume Creator with PDF Export & Native Sharing",
    description: "React Native mobile client coupled with a Spring Boot Java backend that allows users to draft, preview, and generate professional resumes directly on their smartphones.",
    detailedDescription: "Designed for job seekers on the go, Resume Genie utilizes Expo Image Picker to crop profile photos, Expo Print for client-side PDF document generation, and Expo Sharing for native Android share sheet integration. It connects to a Spring Boot microservice with MongoDB persistence for synchronized cross-device resume templates.",
    technologies: [
      "React Native", 
      "Expo Print", 
      "Expo Sharing", 
      "Expo Image Picker", 
      "Spring Boot (Java Backend)", 
      "MongoDB", 
      "Android Testing"
    ],
    features: [
      "Native mobile camera and gallery integration for profile headshots",
      "Instant PDF generation on mobile device using Expo Print engine",
      "One-click sharing via Android native share sheet (WhatsApp, Email, Drive)",
      "Robust REST API synchronization with custom Spring Boot backend"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Mobile App",
    status: "Completed",
    badge: "Native Utility App",
    metrics: "PDF Engine • Native Share Sheet",
    isMobile: true
  }
];

export const PROJECTS: Project[] = [
  ...MOBILE_PROJECTS,
  {
    id: "doct-book",
    title: "Doct-Book",
    subtitle: "Full-Stack Doctor-Patient Communication & Appointment Platform",
    description: "A secure healthcare platform enabling doctor-patient appointments, digital medical records, and role-based communication.",
    detailedDescription: "Doct-Book provides a streamlined healthcare workflow bridging doctors and patients. Built using React.js and Node.js with MongoDB, the application features rigorous JWT authentication, role-based authorization, and schema validation with Joi to safeguard sensitive patient data and appointment logistics.",
    technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Joi Validations", "Vercel"],
    features: [
      "End-to-end doctor-patient booking system with real-time slot selection",
      "Role-based access control (RBAC) separating patient and doctor dashboards",
      "Secure password hashing with bcrypt and stateless JWT authentication",
      "Robust payload validation using Joi schemas preventing malformed requests",
      "Deployed and optimized on Vercel with responsive, accessible UI"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Full Stack",
    status: "Completed",
    badge: "Featured Full-Stack",
    metrics: "Secure RBAC • Schema Validations"
  },
  {
    id: "chess-app",
    title: "Chess-App (Real-Time Multiplayer)",
    subtitle: "High-Performance WebSocket Multiplayer Chess Platform",
    description: "Developing a real-time multiplayer chess application with WebSockets for instantaneous move synchronization and game state management.",
    detailedDescription: "Designed for competitive online chess, this application leverages WebSocket connections for ultra-low latency board synchronization between remote players. It integrates Harkirat Chess Library for move validations, turn enforcement, and check/checkmate detection, built with strict TypeScript type safety across both client and server.",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Chess Library", "Tailwind CSS", "Framer Motion"],
    features: [
      "Bi-directional WebSocket communication for sub-millisecond game state updates",
      "Harkirat Chess Library integration for accurate move validation and checkmate engine",
      "Responsive chessboard UI with fluid drag-and-drop piece interactions and animations",
      "End-to-end TypeScript types guaranteeing scalable state logic and zero runtime mismatches",
      "Player lobby, clock timers, and turn-based state synchronization"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Real-Time / Systems",
    status: "In-Progress",
    badge: "In Active Development",
    metrics: "Real-Time WebSockets • Full TypeScript"
  },
  {
    id: "e-legal-gate",
    title: "E-legal Gate",
    subtitle: "Accessible Legal Aid & Case Management Portal",
    description: "A web application engineered to streamline legal case management, lawyer-client communication, and appointment scheduling.",
    detailedDescription: "E-legal Gate democratizes access to legal assistance by connecting underserved clients with legal professionals. The portal provides dedicated workflows for tracking case histories, booking lawyer consultations, and reviewing legal advice in an intuitive and responsive interface.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
    features: [
      "Streamlined legal case tracking system with timeline progress updates",
      "Direct appointment scheduling workflow between lawyers and clients",
      "Purpose-built accessible interface tailored to first-time legal service seekers",
      "Clean client-side state handling and modular component architecture"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Frontend",
    status: "Completed",
    badge: "Social Impact Project",
    metrics: "Case Tracking • Accessible UI"
  },
  {
    id: "url-shortener",
    title: "URL Shortener & Analytics Microservice",
    subtitle: "Scalable URL Redirection Service with Analytics & QR Generation",
    description: "High-throughput URL shortening service featuring click metrics, QR code generation, and rapid redirection.",
    detailedDescription: "Engineered to deliver fast, reliable URL compression and real-time link click analytics. Includes QR code generation for instant mobile sharing, URL validation, and responsive dashboard interface.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "QR Code Engine"],
    features: [
      "High-speed redirection engine with unique hash generation",
      "Dynamic QR code creation for shortened URLs",
      "Comprehensive click analytics and metadata tracking",
      "Clean, modern user dashboard with copy-to-clipboard utilities"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Full Stack",
    status: "Completed",
    badge: "Utility Service",
    metrics: "Instant QR • Analytics"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Development (React Native & Cross-Platform)",
    description: "Cross-platform smartphone engineering for Android and iOS devices",
    skills: [
      { name: "React Native (0.88+)", level: "Production App Architecture", featured: true },
      { name: "Expo (v58)", level: "SDK, Modules & Native APIs", featured: true },
      { name: "React Native Navigation", level: "Stack, Tabs & Drawer Flows", featured: true },
      { name: "Android Builds & EAS", level: "APK Generation & Profile Config", featured: true },
      { name: "Mobile UI & Safe Area", level: "Responsive Phone & Tablet Layouts", featured: true },
      { name: "Mobile Testing & Debugging", level: "Metro Bundler & Flipper", featured: false },
      { name: "React Native Web", level: "Cross-Platform Code Sharing", featured: false }
    ]
  },
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving and application development",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced & Async Patterns", featured: true },
      { name: "TypeScript", level: "Strict Typing & Interfaces", featured: true },
      { name: "C++", level: "Advanced (DSA focus)", featured: true },
      { name: "Python", level: "Intermediate", featured: false },
      { name: "C", level: "Strong Foundation", featured: false }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting fluid, accessible, and reactive user interfaces",
    skills: [
      { name: "React.js", level: "Advanced Component Patterns", featured: true },
      { name: "Next.js", level: "SSR & App Router", featured: true },
      { name: "Tailwind CSS", level: "Utility-first Responsive UI", featured: true },
      { name: "Redux & Recoil", level: "Global State Management", featured: false },
      { name: "Framer Motion", level: "Interactive Micro-animations", featured: true },
      { name: "Material UI (MUI)", level: "Design Systems", featured: false },
      { name: "HTML5 / CSS3", level: "Modern Semantic Standards", featured: false }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Building resilient REST APIs, real-time protocols, and server architectures",
    skills: [
      { name: "Node.js", level: "Runtime & Event Loop", featured: true },
      { name: "Express.js", level: "Microservices & Endpoints", featured: true },
      { name: "WebSockets", level: "Sub-millisecond Real-Time", featured: true },
      { name: "RESTful APIs", level: "Architecture & Integration", featured: true },
      { name: "JWT & bcrypt", level: "Authentication & Authorization", featured: true },
      { name: "Zod & Joi", level: "Schema Validation Guards", featured: false }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Data modeling, schema design, and persistence management",
    skills: [
      { name: "MongoDB", level: "NoSQL Modeling & Aggregations", featured: true },
      { name: "Mongoose ODM", level: "Schema Validation & Hooks", featured: true },
      { name: "Data Structures", level: "In-memory optimization", featured: true }
    ]
  },
  {
    title: "Developer Tools & Cloud",
    description: "Version control, mobile tooling workflows, and deployment pipelines",
    skills: [
      { name: "Git & GitHub", level: "Version Control & Branching", featured: true },
      { name: "Metro & Expo CLI", level: "Mobile Hot Reloading & Build", featured: true },
      { name: "VS Code & Git Bash", level: "Development Environment", featured: false },
      { name: "Vercel & EAS", level: "Web & Mobile Deployment", featured: true },
      { name: "AWS & Docker", level: "Currently Exploring", featured: false }
    ]
  },
  {
    title: "Computer Science Core",
    description: "Fundamental principles guiding software architecture and problem solving",
    skills: [
      { name: "Data Structures & Algorithms", level: "600+ Problems Solved", featured: true },
      { name: "Operating Systems", level: "Processes, Memory, Concurrency", featured: false },
      { name: "Object-Oriented Programming", level: "Design Patterns & Modularity", featured: true },
      { name: "System Design Concepts", level: "Client-Server, Scalability", featured: false }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "ITS Engineering College",
    location: "Greater Noida, Uttar Pradesh, India",
    period: "2023 – Present (Ongoing)",
    grade: "8.5 CGPA",
    gradeType: "CGPA",
    highlights: [
      "Strong academic standing with an 8.5 CGPA in Computer Science curriculum.",
      "Key coursework: Data Structures, Operating Systems, Database Management Systems, Computer Networks.",
      "Active participant in technical symposiums, hackathons, and developer coding groups."
    ]
  },
  {
    degree: "Intermediate / Higher Secondary (Science)",
    institution: "RLSY Jhumary Telaiya (JAC)",
    location: "Koderma, Jharkhand, India",
    period: "02/2021 – 03/2023",
    grade: "88%",
    gradeType: "Percentage",
    highlights: [
      "Completed higher secondary education with distinction (88% marks).",
      "Focused study in Physics, Chemistry, Mathematics, and Computer Fundamentals."
    ]
  }
];

export const HACKATHONS_DATA: HackathonExperience[] = [
  {
    name: "HackTrics (Hackathon)",
    date: "05/2024",
    role: "Backend Developer",
    description: "Engineered backend services and resilient REST endpoints for secure application data interchange.",
    achievements: [
      "Designed and deployed an authenticated REST API for secure data handling under hackathon time constraints.",
      "Recognized with a verified participation certificate for backend architectural contribution."
    ],
    certificateAvailable: true
  },
  {
    name: "Hackfed 0.1 (Hackathon)",
    date: "04/2024",
    role: "Frontend Lead",
    description: "Spearheaded frontend client architecture with robust authentication and access control workflows.",
    achievements: [
      "Implemented streamlined authentication and authorization flows that improved login efficiency by 30%.",
      "Reduced unauthorized route access by 25% through client-side state guard wrappers.",
      "Led team frontend development, guaranteeing consistent UI delivery before final judging."
    ],
    certificateAvailable: true
  },
  {
    name: "HackWithDelhi (Hackathon)",
    date: "01/2024",
    role: "Backend Developer",
    description: "Collaborated on machine learning integration and reliable asynchronous communication pipelines.",
    achievements: [
      "Contributed as backend engineer, successfully integrating a machine learning model into the project stack.",
      "Ensured smooth, error-free API communication between the Python ML inference layer and Node.js backend.",
      "Awarded a verified participation certificate."
    ],
    certificateAvailable: true
  }
];

export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    username: "sk8757",
    url: "https://leetcode.com/u/sk8757/",
    tagline: "Algorithmic Problem Solving & Daily Coding Challenges",
    highlight: "Consistent problem solver tackling Arrays, Trees, Dynamic Programming, and Graph algorithms.",
    badgeColor: "from-amber-500/20 to-emerald-500/20 text-amber-500",
    metrics: "Part of 600+ solved across platforms"
  },
  {
    platform: "GitHub",
    username: "shrawanyadkr2",
    url: "https://github.com/shrawanyadkr2",
    tagline: "Open Source Codebases & Project Repositories",
    highlight: "Full-stack codebases, React Native mobile apps, backend microservices, real-time WebSocket applications, and hackathon prototypes.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    metrics: "Active repositories & constant commits"
  }
];
