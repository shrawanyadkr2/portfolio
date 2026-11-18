import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Coffee, 
  FileText,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BatteryMedium,
  Wifi,
  Signal,
  Check
} from 'lucide-react';
import { MOBILE_PROJECTS } from '../data/portfolioData';

export const MobileShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resume-genie' | 'coffeeshop'>('resume-genie');
  
  // For CoffeeShop screens
  const [activeCoffeeScreen, setActiveCoffeeScreen] = useState(0);

  // For Resume Genie videos
  const [activeVideo, setActiveVideo] = useState<'/resume_app_demo_1.mp4' | '/resume_app_demo_2.mp4'>('/resume_app_demo_1.mp4');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const resumeApp = MOBILE_PROJECTS[0];
  const coffeeApp = MOBILE_PROJECTS[1];

  const coffeeScreens = coffeeApp.mobileScreens || [];

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="mobile-apps" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Mobile Apps I've Built
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Cross-platform mobile apps built with React Native and Expo. You can watch the real app in action below and test the compiled Android APK directly.
          </p>
        </div>

        {/* Mobile Project Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('resume-genie')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'resume-genie'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 scale-105'
                : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15 hover:border-emerald-500/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Resume Genie (Live Video & APK)</span>
          </button>

          <button
            onClick={() => setActiveTab('coffeeshop')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'coffeeshop'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 scale-105'
                : 'bg-white/80 dark:bg-emerald-950/20 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-500/15 hover:border-emerald-500/40'
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>CoffeeShop Mobile (Figma UI)</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: RESUME GENIE (LIVE SCREEN RECORDING & APK DOWNLOAD) */}
        {/* ========================================================= */}
        {activeTab === 'resume-genie' && (
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/80 dark:bg-[#09110d]/90 border border-slate-200/80 dark:border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Realistic Smartphone Mockup playing Screen Recording */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                
                <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] rounded-[48px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl shadow-emerald-950/60 border-4 border-slate-700/60">
                  
                  {/* Smartphone Screen Viewport */}
                  <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black border border-white/10 flex flex-col justify-between">
                    
                    {/* Status Bar */}
                    <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400 z-20 bg-black/80 backdrop-blur-sm">
                      <span className="font-semibold text-white">6:16 PM</span>
                      {/* Notch / Dynamic Island */}
                      <div className="w-16 h-3.5 rounded-full bg-black mx-auto border border-white/10" />
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <BatteryMedium className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Actual Screen Recording Video */}
                    <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
                      <video
                        ref={videoRef}
                        key={activeVideo}
                        src={activeVideo}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />

                      {/* Video Controls Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        <button
                          onClick={togglePlay}
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                          className="p-1 text-white hover:text-emerald-400 transition-colors"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>

                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                          Screen Recording
                        </span>

                        <button
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                          className="p-1 text-white hover:text-emerald-400 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Home Indicator Bar */}
                    <div className="py-1 bg-black flex justify-center">
                      <div className="w-24 h-1 rounded-full bg-slate-600" />
                    </div>
                  </div>
                </div>

                {/* Video Switcher Buttons */}
                <div className="flex items-center gap-2 mt-5 bg-slate-100 dark:bg-emerald-950/30 p-1.5 rounded-2xl border border-slate-200 dark:border-emerald-500/15">
                  <button
                    onClick={() => setActiveVideo('/resume_app_demo_1.mp4')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      activeVideo === '/resume_app_demo_1.mp4'
                        ? 'bg-emerald-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500'
                    }`}
                  >
                    Demo 1 (Form & Flow)
                  </button>
                  <button
                    onClick={() => setActiveVideo('/resume_app_demo_2.mp4')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      activeVideo === '/resume_app_demo_2.mp4'
                        ? 'bg-emerald-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500'
                    }`}
                  >
                    Demo 2 (Preview & Share)
                  </button>
                </div>
              </div>

              {/* Right Column: App Details & APK Download CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {resumeApp.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                      React Native + Spring Boot
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/10">
                      Direct APK Binary
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-2">
                    {resumeApp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {resumeApp.subtitle}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {resumeApp.detailedDescription}
                  </p>

                  {/* Architecture Features */}
                  <div className="space-y-3 mb-8">
                    {resumeApp.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                      Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {resumeApp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-emerald-950/30 text-slate-800 dark:text-emerald-300 border border-slate-200/80 dark:border-emerald-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary APK Download & GitHub Buttons */}
                <div className="pt-6 border-t border-slate-200 dark:border-emerald-500/15 flex flex-wrap items-center gap-4">
                  <a
                    href="/ResumeGenie.apk"
                    download="ResumeGenie.apk"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Android APK (75.7 MB)</span>
                  </a>

                  <a
                    href={resumeApp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-emerald-500/30 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-all hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: COFFEESHOP (FIGMA UI INTERACTIVE WORKFLOW)          */}
        {/* ========================================================= */}
        {activeTab === 'coffeeshop' && (
          <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/80 dark:bg-[#09110d]/90 border border-slate-200/80 dark:border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Interactive Smartphone Mockup */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                
                <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] rounded-[48px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl shadow-emerald-950/60 border-4 border-slate-700/60">
                  
                  <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0d0f0e] border border-white/10 flex flex-col justify-between text-white select-none">
                    
                    {/* Status Bar */}
                    <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400 z-20">
                      <span className="font-semibold text-white">9:41</span>
                      <div className="w-20 h-4 rounded-full bg-black mx-auto border border-white/5" />
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <BatteryMedium className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* App Screen Content Simulation */}
                    <div className="flex-1 px-4 py-2 overflow-hidden flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        {activeCoffeeScreen === 0 && (
                          <motion.div
                            key="cs-screen-0"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</span>
                                  <div className="text-xs font-bold text-white">Greater Noida, IN</div>
                                </div>
                                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                                  <Coffee className="w-3.5 h-3.5" />
                                </div>
                              </div>

                              <div className="p-3 rounded-2xl bg-gradient-to-r from-[#C67C4E] to-amber-700 text-white mb-3 shadow-md">
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-500/80 uppercase">Promo</span>
                                <div className="text-sm font-extrabold mt-1">Buy one get one FREE</div>
                                <div className="text-[10px] text-amber-100 opacity-90">Crafted with Sora Font & Figma Fidelity</div>
                              </div>

                              <div className="flex gap-1.5 mb-3 text-[10px]">
                                <span className="px-2.5 py-1 rounded-lg bg-[#C67C4E] text-white font-semibold">Cappuccino</span>
                                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Latte</span>
                                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Espresso</span>
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 rounded-xl bg-slate-900 border border-white/5">
                                  <div className="h-14 rounded-lg bg-amber-950/60 flex items-center justify-center text-xl mb-1">
                                    ☕
                                  </div>
                                  <div className="text-xs font-bold text-white truncate">Caffe Mocha</div>
                                  <div className="text-[10px] text-slate-400">Deep Foam</div>
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs font-extrabold text-[#C67C4E]">$4.53</span>
                                    <span className="w-5 h-5 rounded-md bg-[#C67C4E] flex items-center justify-center text-white text-[11px] font-bold">+</span>
                                  </div>
                                </div>

                                <div className="p-2 rounded-xl bg-slate-900 border border-white/5">
                                  <div className="h-14 rounded-lg bg-emerald-950/60 flex items-center justify-center text-xl mb-1">
                                    🧋
                                  </div>
                                  <div className="text-xs font-bold text-white truncate">Flat White</div>
                                  <div className="text-[10px] text-slate-400">Espresso</div>
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs font-extrabold text-[#C67C4E]">$3.90</span>
                                    <span className="w-5 h-5 rounded-md bg-[#C67C4E] flex items-center justify-center text-white text-[11px] font-bold">+</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeCoffeeScreen === 1 && (
                          <motion.div
                            key="cs-screen-1"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full justify-between"
                          >
                            <div>
                              <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-900 to-slate-950 p-3 flex flex-col justify-end mb-3 border border-white/10">
                                <span className="text-[9px] font-mono text-amber-300">Product Detail View</span>
                                <div className="text-base font-extrabold text-white">Caramel Macchiato</div>
                              </div>
                              <div className="text-xs font-bold text-white mb-1">Description</div>
                              <p className="text-[11px] text-slate-400 leading-snug mb-3">
                                Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with caramel drizzle.
                              </p>
                              <div className="text-xs font-bold text-white mb-1.5">Select Size</div>
                              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                <div className="py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300">S</div>
                                <div className="py-1.5 rounded-lg border border-[#C67C4E] bg-[#C67C4E]/20 text-[#C67C4E] font-bold">M</div>
                                <div className="py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300">L</div>
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 flex justify-between items-center mt-2">
                              <div>
                                <span className="text-[9px] text-slate-400">Total Price</span>
                                <div className="text-sm font-extrabold text-[#C67C4E]">$5.20</div>
                              </div>
                              <span className="px-3 py-1.5 rounded-lg bg-[#C67C4E] text-white text-xs font-bold">Buy Now</span>
                            </div>
                          </motion.div>
                        )}

                        {activeCoffeeScreen === 2 && (
                          <motion.div
                            key="cs-screen-2"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full justify-between"
                          >
                            <div>
                              <div className="text-xs font-bold text-white mb-2 pb-1 border-b border-white/10 flex justify-between items-center">
                                <span>Cart & Checkout</span>
                                <span className="text-[10px] text-emerald-400 font-mono">2 items</span>
                              </div>
                              <div className="space-y-2 mb-3">
                                <div className="p-2 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs">
                                  <div>
                                    <div className="font-bold text-white">Caffe Mocha (M)</div>
                                    <div className="text-[10px] text-[#C67C4E] font-semibold">$4.53</div>
                                  </div>
                                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono">Qty: 1</span>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between text-xs">
                                  <div>
                                    <div className="font-bold text-white">Caramel Macchiato (M)</div>
                                    <div className="text-[10px] text-[#C67C4E] font-semibold">$5.20</div>
                                  </div>
                                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono">Qty: 1</span>
                                </div>
                              </div>
                              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-[10px] text-emerald-300">
                                ✓ Free Delivery Voucher Applied
                              </div>
                            </div>
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                              <div className="flex justify-between text-xs font-bold text-white mb-1.5">
                                <span>Order Total</span>
                                <span className="text-[#C67C4E]">$9.73</span>
                              </div>
                              <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#C67C4E] to-amber-600 text-center text-xs font-bold text-white shadow-sm">
                                Place Order
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeCoffeeScreen === 3 && (
                          <motion.div
                            key="cs-screen-3"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full justify-between"
                          >
                            <div>
                              <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 p-3 relative border border-emerald-500/20 flex flex-col justify-between mb-3">
                                <div className="flex justify-between text-[10px] text-emerald-400 font-mono">
                                  <span>GPS Route Tracking</span>
                                  <span className="animate-pulse">● LIVE</span>
                                </div>
                                <div className="text-center py-2 text-3xl">🛵 ➔ 🏠</div>
                                <div className="text-center text-xs font-bold text-white">10 mins remaining</div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                                <div className="text-xs font-bold text-white">Courier: Rajesh Sharma</div>
                                <div className="text-[10px] text-slate-400">Order #SKY-8757 • Handover pending</div>
                              </div>
                            </div>
                            <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center text-xs font-bold text-emerald-300">
                              Contact Courier Rider
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-around text-slate-400 text-xs">
                        <span className={activeCoffeeScreen === 0 ? "text-[#C67C4E] font-bold" : ""}>Home</span>
                        <span className={activeCoffeeScreen === 1 ? "text-[#C67C4E] font-bold" : ""}>Catalog</span>
                        <span className={activeCoffeeScreen === 2 ? "text-[#C67C4E] font-bold" : ""}>Cart</span>
                        <span className={activeCoffeeScreen === 3 ? "text-[#C67C4E] font-bold" : ""}>Track</span>
                      </div>
                    </div>

                    <div className="pb-1.5 flex justify-center">
                      <div className="w-28 h-1 rounded-full bg-slate-600" />
                    </div>
                  </div>
                </div>

                {/* Screen Selector Controls */}
                <div className="flex items-center gap-1.5 mt-5 bg-slate-100 dark:bg-emerald-950/30 p-1.5 rounded-2xl border border-slate-200 dark:border-emerald-500/15">
                  {coffeeScreens.map((screen, sIdx) => (
                    <button
                      key={screen.name}
                      onClick={() => setActiveCoffeeScreen(sIdx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        activeCoffeeScreen === sIdx
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500'
                      }`}
                    >
                      {screen.tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: CoffeeShop Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {coffeeApp.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Cross-Platform Android & iOS
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/10">
                      EAS APK Ready
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-2">
                    {coffeeApp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                    {coffeeApp.subtitle}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {coffeeApp.detailedDescription}
                  </p>

                  <div className="space-y-3 mb-8">
                    {coffeeApp.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                      Mobile Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coffeeApp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-emerald-950/30 text-slate-800 dark:text-emerald-300 border border-slate-200/80 dark:border-emerald-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200 dark:border-emerald-500/15">
                  <a
                    href={coffeeApp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-emerald-950 dark:hover:bg-emerald-900 border border-slate-800 dark:border-emerald-500/30 shadow-md transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Mobile Source Code</span>
                  </a>

                  <div className="text-xs font-mono text-slate-500 dark:text-emerald-400/80 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Tested with Metro Bundler & EAS Preview</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
