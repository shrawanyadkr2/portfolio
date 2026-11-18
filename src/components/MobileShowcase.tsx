import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Layers, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Coffee, 
  FileText,
  ChevronRight,
  BatteryMedium,
  Wifi,
  Signal
} from 'lucide-react';
import { MOBILE_PROJECTS } from '../data/portfolioData';

export const MobileShowcase: React.FC = () => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const coffeeApp = MOBILE_PROJECTS[0];
  const resumeApp = MOBILE_PROJECTS[1];

  const screens = coffeeApp.mobileScreens || [];

  return (
    <section id="mobile-apps" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Cross-Platform Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            React Native & Mobile Products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Designing and engineering fluid cross-platform mobile apps for Android & iOS with custom navigation, responsive safe area layouts, native hardware APIs, and EAS build automation.
          </p>
        </div>

        {/* Featured App Showcase: CoffeeShop */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/80 dark:bg-[#09110d]/90 border border-slate-200/80 dark:border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-950/20 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Mobile Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Realistic Smartphone Frame */}
              <div className="relative w-[290px] sm:w-[320px] h-[590px] sm:h-[620px] rounded-[48px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl shadow-emerald-950/60 border-4 border-slate-700/60">
                
                {/* Outer Glass Bezel & Screen */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0d0f0e] border border-white/10 flex flex-col justify-between text-white select-none">
                  
                  {/* Status Bar */}
                  <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400 z-20">
                    <span className="font-semibold text-white">9:41</span>
                    {/* Notch / Dynamic Island */}
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
                      {activeScreenIndex === 0 && (
                        <motion.div
                          key="screen-0"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col h-full justify-between"
                        >
                          <div>
                            {/* App Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</span>
                                <div className="text-xs font-bold text-white flex items-center gap-1">
                                  <span>Greater Noida, IN</span>
                                </div>
                              </div>
                              <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                                <Coffee className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            {/* Promo Banner */}
                            <div className="p-3 rounded-2xl bg-gradient-to-r from-[#C67C4E] to-amber-700 text-white mb-3 shadow-md">
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-500/80 uppercase">Promo</span>
                              <div className="text-sm font-extrabold mt-1">Buy one get one FREE</div>
                              <div className="text-[10px] text-amber-100 opacity-90">Crafted with Sora Font & Figma Fidelity</div>
                            </div>

                            {/* Category Filter Pills */}
                            <div className="flex gap-1.5 mb-3 overflow-x-hidden text-[10px]">
                              <span className="px-2.5 py-1 rounded-lg bg-[#C67C4E] text-white font-semibold">Cappuccino</span>
                              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Latte</span>
                              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Espresso</span>
                            </div>

                            {/* 2-Column Product Grid */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="p-2 rounded-xl bg-slate-900 border border-white/5">
                                <div className="h-16 rounded-lg bg-amber-950/60 flex items-center justify-center text-amber-400 text-xl font-bold mb-1">
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
                                <div className="h-16 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 text-xl font-bold mb-1">
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

                      {activeScreenIndex === 1 && (
                        <motion.div
                          key="screen-1"
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

                      {activeScreenIndex === 2 && (
                        <motion.div
                          key="screen-2"
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

                      {activeScreenIndex === 3 && (
                        <motion.div
                          key="screen-3"
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

                    {/* Bottom Tab Bar Mockup */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-around text-slate-400 text-xs">
                      <span className={activeScreenIndex === 0 ? "text-[#C67C4E] font-bold" : ""}>Home</span>
                      <span className={activeScreenIndex === 1 ? "text-[#C67C4E] font-bold" : ""}>Catalog</span>
                      <span className={activeScreenIndex === 2 ? "text-[#C67C4E] font-bold" : ""}>Cart</span>
                      <span className={activeScreenIndex === 3 ? "text-[#C67C4E] font-bold" : ""}>Track</span>
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="pb-1.5 flex justify-center">
                    <div className="w-28 h-1 rounded-full bg-slate-600" />
                  </div>
                </div>
              </div>

              {/* Screen Selector Controls */}
              <div className="flex items-center gap-1.5 mt-5 bg-slate-100 dark:bg-emerald-950/30 p-1.5 rounded-2xl border border-slate-200 dark:border-emerald-500/15">
                {screens.map((screen, sIdx) => (
                  <button
                    key={screen.name}
                    onClick={() => setActiveScreenIndex(sIdx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      activeScreenIndex === sIdx
                        ? 'bg-emerald-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-500'
                    }`}
                  >
                    {screen.tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Mobile App Architecture & Capabilities */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {coffeeApp.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Cross-Platform Android & iOS Ready
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/10">
                    EAS APK Workflow
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

                {/* Technical Architecture Highlights */}
                <div className="space-y-3 mb-8">
                  {coffeeApp.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Tech Stack Chips */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                    Mobile Technology Stack:
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

              {/* Action Buttons */}
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

        {/* Second Mobile App Card: Resume Genie */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#09110d]/90 border border-slate-200/80 dark:border-emerald-500/20 backdrop-blur-xl shadow-xl shadow-emerald-950/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                  {resumeApp.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  React Native + Spring Boot Backend
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mb-2">
                {resumeApp.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-teal-600 dark:text-teal-400 mb-4">
                {resumeApp.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {resumeApp.detailedDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {resumeApp.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {resumeApp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-emerald-950/30 text-slate-800 dark:text-teal-300 border border-slate-200/80 dark:border-emerald-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/15 text-center w-full max-w-sm">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                  Native PDF & Image Picker
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                  Full hardware integration via Expo Print and Expo Sharing native Android intents.
                </p>
                <a
                  href={resumeApp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Mobile Repo</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
