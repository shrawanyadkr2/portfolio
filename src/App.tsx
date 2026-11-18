import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { MobileShowcase } from './components/MobileShowcase';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafcfa] text-[#111816] dark:bg-[#050807] dark:text-[#ecf3f0] selection:bg-emerald-500/20 selection:text-emerald-400 relative">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <MobileShowcase />
        <Projects />
        <ExperienceTimeline />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
