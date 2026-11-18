import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  CheckCircle,
  Binary
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const getCategoryIcon = (title: string) => {
  switch (title) {
    case 'Programming Languages':
      return <Code2 className="w-5 h-5 text-emerald-500" />;
    case 'Frontend Engineering':
      return <Layout className="w-5 h-5 text-teal-500" />;
    case 'Backend & Systems':
      return <Server className="w-5 h-5 text-emerald-500" />;
    case 'Databases & Storage':
      return <Database className="w-5 h-5 text-teal-400" />;
    case 'Developer Tools & Cloud':
      return <Wrench className="w-5 h-5 text-emerald-400" />;
    case 'Computer Science Core':
      return <Cpu className="w-5 h-5 text-emerald-500" />;
    default:
      return <Binary className="w-5 h-5 text-emerald-500" />;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const displayedCategories = activeTab === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.title === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Skills & Technical Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of programming languages, frameworks, developer tools, and computer science foundations from my real-world projects and coursework.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
                activeTab === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                  : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.featured
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-semibold'
                          : 'bg-slate-100/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-emerald-500/10'
                      }`}
                    >
                      {skill.featured && (
                        <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-400 dark:text-emerald-400/60 font-mono ml-0.5">
                        • {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-emerald-400/70">
                <span>Verified from Projects & Experience</span>
                <span>{category.skills.length} competencies</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
