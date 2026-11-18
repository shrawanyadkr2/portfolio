import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Tag, Download } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-600 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/10">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-300 mb-6">
            {project.subtitle}
          </p>

          {/* Real Project Screenshot if available */}
          {project.image && (
            <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-emerald-500/20 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 space-y-3">
            <p>{project.detailedDescription}</p>
          </div>

          {/* Key Architectural Features */}
          <div className="mb-6 p-5 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200/80 dark:border-emerald-500/15">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-emerald-300 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Key Features & Technical Implementations</span>
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-emerald-300 border border-slate-200 dark:border-emerald-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-emerald-500/20">
            {project.apkUrl && (
              <a
                href={project.apkUrl}
                download="ResumeGenie.apk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Android APK (75.7 MB)</span>
              </a>
            )}

            {/* Separate Frontend and Backend GitHub links if available */}
            {project.githubFrontendUrl && project.githubBackendUrl ? (
              <>
                <a
                  href={project.githubFrontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-950 dark:hover:bg-emerald-900 border border-slate-800 dark:border-emerald-500/30 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>Frontend Code (GitHub)</span>
                </a>

                <a
                  href={project.githubBackendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-950 dark:hover:bg-emerald-900 border border-slate-800 dark:border-emerald-500/30 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>Backend Code (GitHub)</span>
                </a>
              </>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-950 dark:hover:bg-emerald-900 border border-slate-800 dark:border-emerald-500/30 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Deployment</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
