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
  status: "Open for Software Engineering Internships & Roles",
  availabilityText: "Ready to join engineering teams and start contributing",
  heroSubtitle: "Building full-stack web applications and cross-platform mobile apps.",
  heroSummary: "Computer Science student at ITS Engineering College. I spend most of my time building backends with Java & Spring Boot, crafting frontends with React, creating mobile apps in React Native, and practicing DSA on LeetCode.",
  aboutIntro: "Hey, I'm Shrawan! I am a Computer Science Engineering student (2023–2027) with an 8.1 CGPA. I enjoy building things that live on the internet—from database models and secure REST APIs to clean, responsive interfaces. I also solve algorithmic problems consistently, having solved 800+ problems across LeetCode, Codeforces, and GeeksforGeeks.",
  aboutHighlights: [
    "Solved 800+ DSA problems across LeetCode, Codeforces, and GeeksforGeeks.",
    "Ranked 614 globally out of 30,000+ competitors (Top 2%) in LeetCode Contest 479.",
    "Finished 6th in my batch during 1st year at ITS Engineering College (8.1 CGPA).",
    "Built real full-stack systems with Spring Boot, Spring Security, React, Docker, and PostgreSQL/MongoDB.",
    "Developed and published mobile apps using React Native, Expo, and EAS Android builds."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/shrawan-kr-yadav-009008281/",
    github: "https://github.com/shrawanyadkr2",
    leetcode: "https://leetcode.com/u/sk8757/",
    instagram: "https://www.instagram.com/shrawanyadav27_/?hl=en"
  },
  stats: [
    { label: "DSA Problems Solved", value: "800+", subtext: "LeetCode, Codeforces, GFG" },
    { label: "LeetCode Contest 479", value: "Rank 614", subtext: "Top 2% out of 30,000+ coders" },
    { label: "1st Year Rank", value: "6th Topper", subtext: "ITS Engineering College" },
    { label: "B.Tech CGPA", value: "8.1", subtext: "CSE Batch 2023 – 2027" }
  ]
};

export const MOBILE_PROJECTS: Project[] = [
  {
    id: "resume-genie-app",
    title: "Resume Genie Mobile App",
    subtitle: "React Native app that lets you build and export PDF resumes right from your phone",
    description: "A mobile resume builder where you can type your info, choose a template, and export a clean PDF or send it straight to WhatsApp/Email.",
    detailedDescription: "I built Resume Genie so anyone can build a professional resume directly from their phone without needing a computer. The frontend is built with React Native and Expo, using Expo Print to generate the PDF file on the device and Expo Sharing to open the native Android share menu. It also connects to a Spring Boot & MongoDB backend to sync user data.",
    technologies: [
      "React Native", 
      "Expo", 
      "Expo Print (PDF)", 
      "Expo Sharing", 
      "Expo Image Picker", 
      "Spring Boot", 
      "Java", 
      "MongoDB", 
      "Android APK"
    ],
    features: [
      "Actual screen recording above shows the app generating a resume in real time",
      "Compiles ATS-friendly PDF documents directly on the phone using Expo Print",
      "One-tap sharing to WhatsApp, Gmail, or Google Drive via Android share menu",
      "Camera and gallery access to add profile pictures using Expo Image Picker",
      "REST backend built with Java, Spring Boot, and MongoDB",
      "Full compiled Android APK (75.7 MB) ready to install and test"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/ResumeBuilderApp",
    apkUrl: "/ResumeGenie.apk",
    videoUrl: "/resume_app_demo_1.mp4",
    videoUrl2: "/resume_app_demo_2.mp4",
    category: "Mobile App",
    status: "Completed",
    badge: "Android APK + Video Demo",
    metrics: "75.7 MB APK • Video Demo • On-Device PDF",
    isMobile: true
  },
  {
    id: "coffeeshop-app",
    title: "CoffeeShop Mobile App",
    subtitle: "Coffee ordering mobile app made in React Native based on a Figma design",
    description: "An 8-screen mobile e-commerce app with smooth card animations, dark & light mode, and order/delivery tracking.",
    detailedDescription: "I turned a complete Figma design into a functioning React Native app. It features 8 full screens (Onboarding, Home, Details, Cart, Checkout, Order Tracking, Favorites, and Profile), smooth animations when tapping buttons and cards, an active search with category filters, and an EAS preview configuration to build Android APKs.",
    technologies: [
      "React Native", 
      "Expo", 
      "JavaScript / TypeScript", 
      "Safe Area Context", 
      "EAS Build", 
      "REST API Client", 
      "Figma UI",
      "Metro Bundler"
    ],
    features: [
      "8 full screens: Onboarding, Home, Product Details, Cart, Order, Live Delivery Tracker, Favorites, and Profile",
      "Smooth slide transitions and spring tap animations on cards and buttons",
      "Built-in light and dark theme toggle that saves your preference",
      "Category tabs (Cappuccino, Latte, Espresso), search bar, and size selector (S/M/L)",
      "Set up with EAS Build scripts for generating standalone Android APKs"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    image: "/coffeeshop_figma.png",
    category: "Mobile App",
    status: "Completed",
    badge: "8 Mobile Screens",
    metrics: "8 Mobile Screens • EAS Ready",
    isMobile: true,
    mobileScreens: [
      { name: "Home & Catalog", description: "Search, promo banner, category tabs & coffee card grid", tag: "Home" },
      { name: "Product Detail", description: "Description, size selector (S/M/L) and bottom price bar", tag: "Details" },
      { name: "Cart & Checkout", description: "Quantity buttons, discount voucher, and order total", tag: "Cart" },
      { name: "Live Delivery Tracker", description: "Simulated courier GPS route and delivery status", tag: "Tracking" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "advance-school-erp",
    title: "Advance School ERP",
    subtitle: "Full-stack school management web application with role permissions and fee payments",
    description: "A complete web portal for schools to handle student admissions, attendance tracking, fee collections via Razorpay, timetables, and report cards.",
    detailedDescription: "I developed this ERP system to help schools manage daily operations digitally. The backend is written in Java with Spring Boot, using Spring Security and JWT to handle authentication and role permissions for Admins, Teachers, and Students. I chose MongoDB to keep data structures flexible for class schedules, attendance logs, and fee history. The React frontend uses AuthContext so users stay logged in across refreshes. I also integrated Razorpay for fees, Brevo for email confirmations, Cloudinary for picture uploads, and packaged the backend with Docker for Render.",
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
      "Role-based authentication (Admin, Teacher, Student) using Spring Security & JWT",
      "MongoDB database structure storing student records, timetables, and attendance logs cleanly",
      "React & Tailwind frontend with AuthContext session handling across browser tabs",
      "Razorpay integration to process online student fee payments directly",
      "Automated verification emails using Brevo and profile photo uploads via Cloudinary",
      "Packaged into a Docker container and deployed live on Render"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/schoolmanagement-frontend",
    githubFrontendUrl: "https://github.com/shrawanyadkr2/schoolmanagement-frontend",
    githubBackendUrl: "https://github.com/shrawanyadkr2/schoolmanagement-backend",
    image: "/school_erp_screenshot.png",
    category: "Full Stack",
    status: "Completed",
    badge: "Full-Stack ERP",
    metrics: "Docker • Razorpay • Spring Security"
  },
  {
    id: "resumebuilder-apps",
    title: "ResumeBuilder Apps (sky.devX SaaS)",
    subtitle: "Web app to build clean, ATS-friendly resumes with real-time live preview",
    description: "A full-stack resume builder where you can fill in your experience, projects, and education, pick templates, and download clean PDFs.",
    detailedDescription: "I created this project to make it easy for students and developers to create ATS-friendly resumes without struggling with Word formatting. The backend runs on Java and Spring Boot with Spring Security for JWT logins and token handling. MongoDB stores user accounts and resume sections. The React frontend provides an instant live preview as you type, with Brevo handling email verification and Cloudinary storing profile pictures. Frontend is on Vercel and backend is on Render.",
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
      "Instant side-by-side preview that updates live as you type your resume details",
      "Secure user login and token authentication using Spring Security & JWT",
      "Modular MongoDB data model saving work history, education, skills, and links",
      "React & Tailwind CSS frontend with AuthContext for persistent sessions",
      "Brevo email verification on signup and Cloudinary for uploading headshots",
      "Live deployment split between Vercel (frontend) and Render (backend)"
    ],
    githubUrl: "https://github.com/shrawanyadkr2/resumebuilder-frontend",
    githubFrontendUrl: "https://github.com/shrawanyadkr2/resumebuilder-frontend",
    githubBackendUrl: "https://github.com/shrawanyadkr2/resumebuilder-backend",
    image: "/resumebuilder_dark_screenshot.png",
    category: "Full Stack",
    status: "Completed",
    badge: "SaaS Resume Builder",
    metrics: "ATS Live Preview • Vercel + Render"
  },
  {
    id: "shortiex-apps",
    title: "shortieX Apps",
    subtitle: "Fast URL shortener with Base62 encoding and click analytics charts",
    description: "A URL shortening tool that turns long links into short URLs, with a dashboard showing clicks by device, browser, and location.",
    detailedDescription: "shortieX was built to handle high link volume and give useful analytics. The backend uses Spring Boot, Java, and Spring Security (JWT), connected to PostgreSQL on NeonDB. I wrote a custom Base62 short-code generator with retry logic for collisions and checks against reserved words. The frontend is built with React and Vite, using TanStack Query for fast caching and Recharts for click breakdown charts.",
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
      "Custom Base62 encoding engine with collision retries and reserved-keyword checks",
      "PostgreSQL on NeonDB storing links and click data (browser, device, OS, IP)",
      "Interactive charts built with Recharts showing daily click trends and referrer stats",
      "TanStack Query on the frontend for smooth caching and fewer redundant API calls",
      "Documented all REST endpoints cleanly using Swagger UI",
      "Dockerized backend deployed on Render and frontend deployed on Vercel"
    ],
    githubUrl: "https://github.com/shrawanyadkr2",
    category: "Full Stack",
    status: "Completed",
    badge: "URL Shortener & Analytics",
    metrics: "Base62 Engine • NeonDB • Recharts"
  },
  ...MOBILE_PROJECTS
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Computer Science Core",
    description: "Core subjects from my coursework and regular practice",
    skills: [
      { name: "Data Structures & Algorithms", level: "800+ Solved", featured: true },
      { name: "Operating Systems", level: "Processes & Memory", featured: true },
      { name: "DBMS", level: "SQL & NoSQL", featured: true },
      { name: "Computer Networks", level: "Protocols & TCP/IP", featured: false },
      { name: "OOPs", level: "Design Principles", featured: true }
    ]
  },
  {
    title: "Programming Languages",
    description: "Languages I write code in regularly",
    skills: [
      { name: "Java", level: "Daily / Spring Boot", featured: true },
      { name: "JavaScript", level: "ES6+ / React", featured: true },
      { name: "C++", level: "DSA & LeetCode", featured: true },
      { name: "C", level: "Foundational", featured: false },
      { name: "HTML5", level: "Semantic Markup", featured: false }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Frameworks and libraries I use to build server APIs",
    skills: [
      { name: "Spring Boot", level: "REST APIs & Services", featured: true },
      { name: "Spring Security", level: "Auth & Roles", featured: true },
      { name: "JWT", level: "Token Authentication", featured: true },
      { name: "REST APIs", level: "Design & Swagger UI", featured: true },
      { name: "Docker", level: "Container Packaging", featured: true }
    ]
  },
  {
    title: "Frontend Development",
    description: "Tools I use to build interactive user interfaces",
    skills: [
      { name: "React.js", level: "Hooks & Context", featured: true },
      { name: "Tailwind CSS", level: "Responsive Layouts", featured: true },
      { name: "TanStack Query", level: "Data Fetching & Caching", featured: true },
      { name: "Recharts", level: "Charts & Visuals", featured: false },
      { name: "Material UI (MUI)", level: "Components", featured: false },
      { name: "AOS", level: "Scroll Animations", featured: false }
    ]
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform apps for phones",
    skills: [
      { name: "React Native (0.88+)", level: "Mobile App Logic", featured: true },
      { name: "Expo (v58)", level: "Modules & APIs", featured: true },
      { name: "EAS Build", level: "Android APKs", featured: true },
      { name: "Mobile UI", level: "Responsive Screens", featured: true }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Where my apps store and query data",
    skills: [
      { name: "PostgreSQL (NeonDB)", level: "Relational Cloud DB", featured: true },
      { name: "MongoDB", level: "Document Storage", featured: true },
      { name: "MySQL", level: "Relational Queries", featured: true },
      { name: "Cloudinary", level: "Image Hosting", featured: false }
    ]
  },
  {
    title: "Tools & Integrations",
    description: "Services and dev tools I use in my workflow",
    skills: [
      { name: "VS Code", level: "Code Editor", featured: false },
      { name: "Git & GitHub", level: "Version Control", featured: true },
      { name: "Razorpay", level: "Payment Gateway", featured: true },
      { name: "Brevo SMTP", level: "Transactional Emails", featured: true }
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
      "Ranked 6th in my batch during B.Tech 1st Year at ITS Engineering College.",
      "Maintained an 8.1 CGPA across Computer Science subjects.",
      "Key Courses: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOPs."
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
      "Completed 12th Intermediate with 88.2% marks.",
      "Subjects: Physics, Chemistry, Mathematics, and Computer Science."
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "800+ DSA Problems Solved",
    metric: "800+ Solved",
    description: "Solved 800+ algorithmic problems across LeetCode, Codeforces, and GeeksforGeeks, focusing on graph algorithms, dynamic programming, and data structures.",
    tag: "Problem Solving"
  },
  {
    title: "LeetCode Weekly Contest 479",
    metric: "Global Rank 614",
    description: "Placed 614th out of 30,000+ coders globally (Top 2%) in LeetCode Weekly Contest 479.",
    tag: "Contest Ranking"
  },
  {
    title: "6th Academic Topper (B.Tech 1st Year)",
    metric: "6th Batch Rank",
    description: "Ranked 6th in the entire 1st year engineering batch at ITS Engineering College with an 8.1 CGPA.",
    tag: "Academics"
  }
];

export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    username: "sk8757",
    url: "https://leetcode.com/u/sk8757/",
    tagline: "800+ Problems Solved & Top 2% Contest Rank",
    highlight: "Rank 614 in Weekly Contest 479. Regular practice in C++, Java, and Python on arrays, dynamic programming, trees, and graphs.",
    badgeColor: "from-amber-500/20 to-emerald-500/20 text-amber-500",
    metrics: "800+ solved on LeetCode, Codeforces, GFG"
  },
  {
    platform: "GitHub",
    username: "shrawanyadkr2",
    url: "https://github.com/shrawanyadkr2",
    tagline: "Real Codebases & Open Repositories",
    highlight: "Spring Boot backends, React web frontends, and React Native mobile apps with full source code available.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    metrics: "Active repositories"
  }
];
