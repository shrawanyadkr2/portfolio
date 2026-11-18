import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { HACKATHONS_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [view, setView] = useState<'all' | 'hackathons' | 'education'>('all');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Hackathons, Experience & Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A chronological timeline of intensive hackathon engineering, collaborative backend/frontend builds, and academic excellence.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <button
            onClick={() => setView('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              view === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setView('hackathons')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              view === 'hackathons'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15'
            }`}
          >
            Hackathons & Development
          </button>
          <button
            onClick={() => setView('education')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              view === 'education'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15'
            }`}
          >
            Education & Degrees
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-emerald-500/10 -translate-x-1/2" />

          <div className="space-y-12">
            
            {/* Hackathon: HackTrics (05/2024) */}
            {(view === 'all' || view === 'hackathons') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10 shadow-lg shadow-emerald-500/30">
                  <Terminal className="w-3.5 h-3.5" />
                </div>

                {/* Left side spacer on desktop */}
                <div className="hidden sm:block sm:w-1/2 pr-10 text-right">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    05/2024
                  </span>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                    Backend Engineer
                  </div>
                </div>

                {/* Card on right */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        05/2024
                      </span>
                      <span className="text-xs text-slate-500">Backend Engineer</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      {HACKATHONS_DATA[0].name}
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 mb-3">
                      Role: {HACKATHONS_DATA[0].role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {HACKATHONS_DATA[0].description}
                    </p>
                    <div className="space-y-2">
                      {HACKATHONS_DATA[0].achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Hackathon: Hackfed 0.1 (04/2024) */}
            {(view === 'all' || view === 'hackathons') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-500 flex items-center justify-center text-teal-400 z-10 shadow-lg shadow-teal-500/30">
                  <Award className="w-3.5 h-3.5" />
                </div>

                {/* Card on Left */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 order-2 sm:order-1">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                        04/2024
                      </span>
                      <span className="text-xs text-slate-500">Frontend Lead</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      {HACKATHONS_DATA[1].name}
                    </h3>
                    <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-0.5 mb-3">
                      Role: {HACKATHONS_DATA[1].role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {HACKATHONS_DATA[1].description}
                    </p>
                    <div className="space-y-2">
                      {HACKATHONS_DATA[1].achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side date on desktop */}
                <div className="hidden sm:block sm:w-1/2 pl-10 text-left order-1 sm:order-2">
                  <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                    04/2024
                  </span>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                    Frontend Lead
                  </div>
                </div>
              </motion.div>
            )}

            {/* Hackathon: HackWithDelhi (01/2024) */}
            {(view === 'all' || view === 'hackathons') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 z-10 shadow-lg shadow-emerald-500/30">
                  <Terminal className="w-3.5 h-3.5" />
                </div>

                {/* Left side date on desktop */}
                <div className="hidden sm:block sm:w-1/2 pr-10 text-right">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    01/2024
                  </span>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                    Backend & ML Integration
                  </div>
                </div>

                {/* Card on right */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        01/2024
                      </span>
                      <span className="text-xs text-slate-500">Backend Developer</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      {HACKATHONS_DATA[2].name}
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 mb-3">
                      Role: {HACKATHONS_DATA[2].role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {HACKATHONS_DATA[2].description}
                    </p>
                    <div className="space-y-2">
                      {HACKATHONS_DATA[2].achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Education: ITS Engineering College (Ongoing) */}
            {(view === 'all' || view === 'education') && (
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

                {/* Card on Left */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-10 order-2 sm:order-1">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        Ongoing
                      </span>
                      <span className="text-xs font-bold text-emerald-500">8.5 CGPA</span>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        B.Tech Degree
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

                {/* Right side date on desktop */}
                <div className="hidden sm:block sm:w-1/2 pl-10 text-left order-1 sm:order-2">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Ongoing
                  </span>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                    ITS Engineering College
                  </div>
                </div>
              </motion.div>
            )}

            {/* Education: RLSY Jhumary Telaiya */}
            {(view === 'all' || view === 'education') && (
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

                {/* Left side date on desktop */}
                <div className="hidden sm:block sm:w-1/2 pr-10 text-right">
                  <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                    02/2021 – 03/2023
                  </span>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
                    RLSY Jhumary Telaiya (JAC)
                  </div>
                </div>

                {/* Card on right */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-10">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="sm:hidden flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                        2021 – 2023
                      </span>
                      <span className="text-xs font-bold text-teal-500">88%</span>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                        Intermediate
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
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
