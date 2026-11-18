import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Driven by Engineering, Passion & Purpose
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A look into my academic journey, core technical philosophy, and dedication to building scalable software.
          </p>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-[#0a110d]/80 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20"
          >
            <div>
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 mb-6">
                <Compass className="w-6 h-6" />
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                  My Development Journey
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                <p>
                  I am a <strong className="text-slate-900 dark:text-emerald-300">Computer Science Engineering student</strong> at ITS Engineering College (2023 – 2027) with an <strong className="text-slate-900 dark:text-emerald-300">8.1 CGPA</strong> and the distinction of ranking as the <strong className="text-slate-900 dark:text-emerald-300">6th Academic Topper in B.Tech 1st Year</strong>.
                </p>
                <p>
                  My engineering perspective is rooted in disciplined problem solving. Having solved <strong className="text-slate-900 dark:text-emerald-300">800+ algorithmic problems</strong> across LeetCode, Codeforces, and GeeksforGeeks, and achieving a <strong className="text-slate-900 dark:text-emerald-300">Global Rank 614 out of 30,000+ competitors (Top 2%)</strong> in LeetCode Weekly Contest 479, I write clean, optimized code with a focus on data structures, time complexity, and memory management.
                </p>
                <p>
                  I specialize in architecting full-stack systems with <strong className="text-slate-900 dark:text-emerald-300">Spring Boot, Java, and Spring Security</strong> for secure backend microservices, alongside reactive frontends in <strong className="text-slate-900 dark:text-emerald-300">React.js & Tailwind CSS</strong> and cross-platform mobile apps in <strong className="text-slate-900 dark:text-emerald-300">React Native & Expo</strong>.
                </p>
              </div>

              {/* Verified Highlights List */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-emerald-500/15">
                <h4 className="text-sm font-semibold uppercase font-mono tracking-wider text-slate-900 dark:text-emerald-300 mb-4">
                  Verified Resume Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PERSONAL_INFO.aboutHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/60 dark:border-emerald-500/10"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Goals Banner */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-500/20 flex items-center gap-3">
              <Trophy className="w-5 h-5 text-emerald-500 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-emerald-600 dark:text-emerald-400">Competitive Standout:</strong> LeetCode Weekly Contest 479 Global Rank 614 (Top 2% / 30,000+).
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Stats & Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/70 dark:bg-[#0a110d]/80 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xs hover:border-emerald-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Education Highlight Cards */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-[#0a110d]/80 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-4 font-display font-bold text-lg">
                <GraduationCap className="w-5 h-5" />
                <span>Academic Foundation</span>
              </div>

              {/* B.Tech */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15 mb-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    2023 – 2027 • B.Tech (CSE)
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                    CGPA: 8.1
                  </span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mt-1">
                  ITS Engineering College
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Greater Noida, India • Ranked 6th Academic Topper (1st Year)
                </div>
              </div>

              {/* Intermediate */}
              <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    2021 – 2023 • Intermediate (PCMC)
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300">
                    88.2% Distinction
                  </span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mt-1">
                  RLSY Jhumary Telaiya (JAC)
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Koderma, JH • Physics, Chemistry, Math & Computer Science
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
