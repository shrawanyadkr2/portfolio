import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileDown, Github, Linkedin, Code2, Instagram, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4">
              HI, I'M <br className="hidden sm:inline" />
              <span className="emerald-text-gradient dark:emerald-text-gradient-bright drop-shadow-sm">
                SHRAWAN KUMAR YADAV
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-emerald-100/90 tracking-tight mb-4">
              {PERSONAL_INFO.heroSubtitle}
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.heroSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/Shrawan_Kumar_Yadav_Resume.pdf"
                download="Shrawan_Kumar_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-emerald-500/30 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-emerald-950/40 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-200 dark:border-emerald-500/10 w-full">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 hover:scale-105"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait & Floating Developer Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glow Aura */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-emerald-500/25 to-teal-500/20 rounded-full blur-2xl -z-10 animate-pulse-slow" />

            {/* Portrait Frame Container */}
            <div className="relative w-64 sm:w-80 md:w-84 aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-emerald-500/40 via-teal-500/20 to-emerald-500/30 shadow-2xl shadow-emerald-900/30">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative group">
                <img
                  src="/profile.jpg"
                  alt="Shrawan Kumar Yadav - Software Developer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded Bottom Tag inside Portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Computer Science Engineer</span>
                  </div>
                  <div className="text-white text-sm font-bold font-display mt-0.5">
                    Full-Stack & Systems Focus
                  </div>
                </div>
              </div>

              {/* Floating Card 1: 600+ DSA Problems Solved */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -left-6 sm:-left-10 top-10 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-[#0c1410]/90 backdrop-blur-xl border border-slate-200 dark:border-emerald-500/30 shadow-xl shadow-slate-900/10 dark:shadow-emerald-950/40 flex items-center gap-3 animate-float-slow"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Problem Solving
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-emerald-300 font-display">
                    600+ DSA Solved
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: B.Tech CGPA 8.5 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-6 sm:-right-8 bottom-24 p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-[#0c1410]/90 backdrop-blur-xl border border-slate-200 dark:border-emerald-500/30 shadow-xl shadow-slate-900/10 dark:shadow-emerald-950/40 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Academics
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-emerald-300 font-display">
                    8.5 B.Tech CGPA
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
