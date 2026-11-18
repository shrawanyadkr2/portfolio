# sky.devX — Shrawan Kumar Yadav Portfolio Website

A personal developer portfolio and personal branding website built for **Shrawan Kumar Yadav** (Software Developer, Full-Stack Engineer, and Computer Science Engineering Student).

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, inspired by deep emerald green gradient accents, glassmorphic card compositions, and modern software engineering aesthetics.

---

## 🌟 Key Highlights & Features

- **Personal Brand Identity**: Custom `sky.devX` branding with glowing emerald accents and sleek typography (Plus Jakarta Sans, Outfit, JetBrains Mono).
- **Dark Mode & Light Mode**: Zero-flicker theme toggle, automatic system theme detection, and persistent preference stored in `localStorage`.
- **Integrated Resume & Headshot**:
  - Embedded portrait photography (`/public/profile.jpg`).
  - Direct, functional resume download button linking to Shrawan's actual resume (`/public/Shrawan_Kumar_Yadav_Resume.pdf`).
- **React Native & Mobile Products Showcase**:
  - Dedicated smartphone device mockup with interactive screen switching (Home, Detail, Cart, Delivery Tracker).
  - Highlights **CoffeeShop Mobile App** (React Native 0.88, Expo 58, Figma fidelity, EAS Android APK builds) and **Resume Genie Mobile** (React Native + Spring Boot).
- **Featured Web & Full-Stack Systems**:
  - **Doct-Book**: Full-stack healthcare booking platform with JWT authentication, bcrypt, Joi validation schemas, and MongoDB.
  - **Chess-App**: Real-time multiplayer chess engine using WebSockets and Harkirat Chess Library.
  - **E-legal Gate**: Accessible legal aid management portal.
  - **URL Shortener Microservice**: High-throughput URL shortening service with QR code generation.
  - Interactive deep-dive modal view for project architectures and technical achievements.
- **Problem Solving & Coding Profiles**:
  - Highlighted **600+ Data Structures & Algorithms** problems solved across LeetCode, Codeforces, and GeeksforGeeks.
  - Direct profile links: [LeetCode (@sk8757)](https://leetcode.com/u/sk8757/) and [GitHub (@shrawanyadkr2)](https://github.com/shrawanyadkr2).
  - Categorized breakdown across Arrays, Dynamic Programming, Trees, Graphs, Recursion, and Binary Search.
- **Hackathons & Academic Timeline**:
  - HackTrics (05/2024 - Backend Engineer)
  - Hackfed 0.1 (04/2024 - Frontend Lead)
  - HackWithDelhi (01/2024 - Backend ML Integration)
  - ITS Engineering College (Ongoing B.Tech CSE, 8.5 CGPA)
  - RLSY Jhumary Telaiya (JAC) (Intermediate, 88% Distinction)
- **Functional Contact Form & Socials**:
  - Pre-filled mailto generation to `shrawan29yadav@gmail.com` with input validation.
  - One-click copy email button with visual feedback.
  - Confetti particle celebration upon sending.

---

## 🛠️ Development & Deployment

### 1. Run Development Server
```bash
pnpm dev
# or
npm run dev
```

### 2. Build for Production
```bash
pnpm run build
# or
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### 3. Deploy to Vercel / Netlify
This repository is pre-configured and ready to deploy with 1-click on [Vercel](https://vercel.com) or [Netlify](https://netlify.com):
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
