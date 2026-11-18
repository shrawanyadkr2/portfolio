import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award, MapPin, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Education & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            My college background at ITS Engineering College and competitive programming ranks.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-emerald-500/10 -translate-x-1/2" />

          <div className="space-y-12">
            
            {/* Milestone 1: LeetCode Weekly Contest 479 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 z-10 shadow-lg shadow-amber-500/30">
                <Trophy className="w-3.5 h-3.5" />
              </div>

              {/* Left side text on desktop */}
              <div className="hidden sm:block sm:w-1/2 pr-10 text-right">
                <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Global Rank 614
                </span>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  LeetCode Weekly Contest 479
                </div>
              </div>

              {/* Card on right */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="sm:hidden flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      Global Rank 614
                    </span>
                    <span className="text-xs text-amber-500 font-semibold">Top 2% Worldwide</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    LeetCode Weekly Contest 479
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-0.5 mb-3">
                    Out of 30,000+ Participants Globally
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Achieved Global Rank 614 competing against software engineers and competitive programmers worldwide, demonstrating advanced algorithmic execution speed and accuracy.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Top 2% Worldwide Benchmark</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Milestone 2: 6th Academic Topper in B.Tech 1st Year */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10 shadow-lg shadow-emerald-500/30">
                <Award className="w-3.5 h-3.5" />
              </div>

              {/* Card on Left */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 order-2 sm:order-1">
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="sm:hidden flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Rank 6th Topper
                    </span>
                    <span className="text-xs text-emerald-500">B.Tech 1st Year</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    6th Academic Topper
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 mb-3">
                    B.Tech 1st Year • ITS Engineering College
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Ranked 6th Academic Topper across the entire 1st Year engineering cohort, establishing an exceptional foundational record in mathematics, computer programming, and core engineering concepts.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Academic Distinction</span>
                  </div>
                </div>
              </div>

              {/* Right side date on desktop */}
              <div className="hidden sm:block sm:w-1/2 pl-10 text-left order-1 sm:order-2">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Academic Rank 6th
                </span>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  ITS Engineering College
                </div>
              </div>
            </motion.div>

            {/* Milestone 3: B.Tech (CSE) 2023 - 2027 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 z-10 shadow-lg shadow-emerald-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Left side text on desktop */}
              <div className="hidden sm:block sm:w-1/2 pr-10 text-right">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  2023 – 2027
                </span>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  B.Tech (CSE) • CGPA: 8.1
                </div>
              </div>

              {/* Card on right */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="sm:hidden flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      2023 – 2027
                    </span>
                    <span className="text-xs font-bold text-emerald-500">CGPA: 8.1</span>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      Bachelor of Technology
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300">
                      {EDUCATION_DATA[0].grade}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {EDUCATION_DATA[0].institution}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {EDUCATION_DATA[0].degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-4 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{EDUCATION_DATA[0].location}</span>
                  </p>

                  <div className="space-y-2">
                    {EDUCATION_DATA[0].highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Milestone 4: Intermediate (PCMC) 2021 - 2023 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start group"
            >
              {/* Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center text-teal-400 z-10 shadow-lg shadow-teal-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card on Left */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 order-2 sm:order-1">
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="sm:hidden flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                      2021 – 2023
                    </span>
                    <span className="text-xs font-bold text-teal-500">{EDUCATION_DATA[1].grade}</span>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                      Intermediate (PCMC)
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300">
                      {EDUCATION_DATA[1].grade}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {EDUCATION_DATA[1].institution}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {EDUCATION_DATA[1].degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-4 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    <span>{EDUCATION_DATA[1].location}</span>
                  </p>

                  <div className="space-y-2">
                    {EDUCATION_DATA[1].highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side date on desktop */}
              <div className="hidden sm:block sm:w-1/2 pl-10 text-left order-1 sm:order-2">
                <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                  2021 – 2023
                </span>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  RLSY Jhumary Telaiya (JAC)
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
