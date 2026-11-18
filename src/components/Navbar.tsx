import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal, FileDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#050807]/85 backdrop-blur-md shadow-sm dark:shadow-emerald-950/20 border-b border-emerald-500/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="sky.devX Home"
          >
            <img
              src="/logo.png"
              alt="sky.devX"
              className="h-9 sm:h-10 w-auto object-contain rounded-xl shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-emerald-500/20 bg-slate-100/70 dark:bg-emerald-950/30 text-slate-700 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-200 hover:border-emerald-500/40 transition-all duration-200 focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/Shrawan_Kr_Yadav_Resume.pdf"
              download="Shrawan_Kr_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-emerald-500/20 bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-emerald-400" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-emerald-500/20 bg-slate-100 dark:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-500/10 bg-white/95 dark:bg-[#070c09]/95 backdrop-blur-xl px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/30'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-emerald-500/10 flex flex-col gap-2">
              <a
                href="/Shrawan_Kr_Yadav_Resume.pdf"
                download="Shrawan_Kr_Yadav_Resume.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/20"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
