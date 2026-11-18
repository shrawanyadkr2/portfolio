import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles, Code, Terminal, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Real-Time / Systems', 'Frontend'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real software systems, full-stack applications, and real-time multiplayer platforms built from scratch with clean code and modern frameworks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
                filter === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                  : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-3xl bg-white/80 dark:bg-[#0a110d]/90 border border-slate-200/80 dark:border-emerald-500/15 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-emerald-950/20 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden group"
            >
              <div>
                {/* Visual Header Mockup */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-[#07130d] to-emerald-950/80 p-6 flex flex-col justify-between border-b border-emerald-500/15 overflow-hidden">
                  {/* Subtle Grid in thumbnail */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  
                  {/* Top Bar with decorative traffic lights & category badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-emerald-400/80">
                        {project.id}.tsx
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Center Graphic */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase mb-1">
                        {project.category}
                      </div>
                      <div className="text-white text-2xl font-extrabold font-display">
                        {project.title}
                      </div>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                      {project.category === 'Real-Time / Systems' ? (
                        <Terminal className="w-7 h-7" />
                      ) : project.category === 'Frontend' ? (
                        <Layers className="w-7 h-7" />
                      ) : (
                        <Code className="w-7 h-7" />
                      )}
                    </div>
                  </div>

                  {/* Bottom Metrics Chip */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span className="text-emerald-400/90 font-medium">
                      {project.metrics}
                    </span>
                    <span className="text-slate-400">
                      {project.status === 'In-Progress' ? '⚙️ Active Sprint' : '✓ Verified Stable'}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights from Resume */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-emerald-950/30 text-slate-700 dark:text-emerald-300 border border-slate-200/80 dark:border-emerald-500/15"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-lg text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 focus:outline-none group/btn"
                >
                  <span>Deep Dive Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-white border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View for Project Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
