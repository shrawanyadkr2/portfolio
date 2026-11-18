import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Instagram, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Mobile Apps', href: '#mobile-apps' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#030605] border-t border-slate-200 dark:border-emerald-500/15 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-emerald-500/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 group mb-4">
              <img
                src="/logo.png"
                alt="sky.devX"
                className="h-10 w-auto object-contain rounded-xl shadow-md shadow-cyan-500/10"
              />
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
              Personal portfolio of <strong className="text-slate-900 dark:text-white">Shrawan Kr. Yadav</strong> — Software Developer, Full-Stack Engineer, and Computer Science Student.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-all hover:scale-105"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-emerald-300 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-emerald-300 mb-3 md:text-right">
                Get In Touch
              </h4>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 md:text-right mb-1">
                Direct Email:
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline md:text-right block mb-6"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 border border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-500" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Shrawan Kr. Yadav. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
