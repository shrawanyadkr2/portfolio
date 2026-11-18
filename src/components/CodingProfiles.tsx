import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Trophy,
  GitBranch, 
  Target
} from 'lucide-react';
import { PERSONAL_INFO, CODING_PROFILES } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  const dsaDomains = [
    { name: "Arrays & Two Pointers", status: "Mastered", count: "160+ Solved" },
    { name: "Dynamic Programming", status: "Advanced", count: "110+ Solved" },
    { name: "Trees & Binary Search Trees", status: "Proficient", count: "95+ Solved" },
    { name: "Graphs & Traversals (BFS/DFS)", status: "Proficient", count: "85+ Solved" },
    { name: "Recursion & Backtracking", status: "Advanced", count: "70+ Solved" },
    { name: "Binary Search & Sorting", status: "Mastered", count: "80+ Solved" },
    { name: "Strings & Sliding Window", status: "Advanced", count: "90+ Solved" },
    { name: "Stacks, Queues & Heaps", status: "Proficient", count: "70+ Solved" },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Competitive Programming</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Problem Solving & Profiles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            I solve algorithmic problems on LeetCode and Codeforces regularly to sharpen my problem-solving skills and write efficient, optimal code.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      LeetCode Profile
                    </h3>
                    <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                      @{CODING_PROFILES[0].username}
                    </div>
                  </div>
                </div>

                <a
                  href={CODING_PROFILES[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LeetCode Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-amber-500 border border-slate-200 dark:border-emerald-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Active problem solver practicing competitive algorithms in C++, Java, and JavaScript. Consistently competing in weekly contests with proven global rankings.
              </p>

              {/* Verified Big Stats: 800+ and Contest Rank 614 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                  <div className="text-2xl font-extrabold font-display text-amber-500">
                    800+ Problems
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    LeetCode • Codeforces • GFG
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="text-2xl font-extrabold font-display text-emerald-500">
                    Rank 614
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Contest 479 (Top 2% / 30,000+)
                  </div>
                </div>
              </div>
            </div>

            <a
              href={CODING_PROFILES[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-emerald-950/40 hover:bg-amber-500/20 hover:text-amber-500 border border-slate-200 dark:border-emerald-500/20 transition-all"
            >
              <span>View LeetCode @{CODING_PROFILES[0].username}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                      GitHub Activity
                    </h3>
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      @{CODING_PROFILES[1].username}
                    </div>
                  </div>
                </div>

                <a
                  href={CODING_PROFILES[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Open-source repositories spanning enterprise Spring Boot & Java microservices, React & Vite frontends, and React Native cross-platform mobile apps.
              </p>

              {/* Verified Big Stat */}
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between mb-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-500">
                    Production Systems
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Spring Boot • React • React Native • Docker
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Public Repos</span>
                </div>
              </div>
            </div>

            <a
              href={CODING_PROFILES[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-950 dark:hover:bg-emerald-900 border border-slate-800 dark:border-emerald-500/30 transition-all shadow-md"
            >
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Algorithmic Proficiency Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-emerald-500/15">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <Target className="w-4 h-4" />
                <span>Topic Mastery</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                Data Structures & Core Algorithmic Domains
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-emerald-400/80">
              800+ Total Problems Solved
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {dsaDomains.map((domain, idx) => (
              <div
                key={domain.name}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">
                      {domain.status}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                      #{idx + 1}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {domain.name}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-emerald-400/80 pt-2 border-t border-slate-200/40 dark:border-emerald-500/10">
                  {domain.count}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
