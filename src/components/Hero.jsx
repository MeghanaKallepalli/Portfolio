import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ChevronDown, Linkedin, Github, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenContact }) => {
  const scrollToNext = () => {
    const el = document.getElementById('stats') || document.getElementById('architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#f8fafc] dark:bg-[#131418] text-slate-900 dark:text-white min-h-screen lg:min-h-[calc(100vh-70px)] lg:h-[calc(100vh-70px)] lg:max-h-[960px] flex flex-col justify-start lg:justify-center lg:items-center pt-24 sm:pt-28 pb-14 lg:py-0 overflow-x-hidden lg:overflow-hidden transition-colors duration-200">
      
      {/* ========================================================
          BACKGROUND AMBIENT GLOW (Matches Developer X Studio Lighting)
         ======================================================== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] lg:h-[550px] bg-gradient-to-t from-amber-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      {/* ========================================================
          DESKTOP DOMINANT PORTRAIT (Absolute Center - Spans 85%+ Height)
          Grounded to bottom edge, head reaching just below navbar
         ======================================================== */}
      <div className="hidden lg:flex absolute inset-x-0 bottom-0 justify-center items-end pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-end justify-center"
        >
          <img
            src="/meghana-hero-cuffs.png"
            alt="Meghana Kallepalli - Senior Full Stack Developer"
            className="h-[74vh] lg:h-[80vh] xl:h-[84vh] 2xl:h-[86vh] max-h-[780px] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] select-none pointer-events-none"
          />
        </motion.div>
      </div>

      {/* ========================================================
          FOREGROUND CONTENT CONTAINER
          Mobile: Natural column flow with navbar clearance
          Desktop: 3-zone layout flanking portrait with generous margins
         ======================================================== */}
      <div className="relative z-20 w-full max-w-[1560px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 sm:gap-10 lg:gap-0 pointer-events-none">
        
        {/* ========================================================
            LEFT COLUMN: Accent Bar, Headline, Subtitle & Blue Button
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-auto max-w-xl lg:max-w-[380px] space-y-5 sm:space-y-6 text-left pointer-events-auto"
        >
          {/* Accent Bar */}
          <div className="w-12 sm:w-14 h-[4px] bg-slate-900 dark:bg-white rounded-full" />

          {/* Main Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              I'm Meghana, a <br />
              <span className="text-slate-900 dark:text-white">Web Developer</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 font-normal leading-relaxed pt-1 max-w-md lg:max-w-none">
              Full Stack Developer with 4 years of experience building resilient enterprise SaaS, zero-trust security & regulatory AI pipelines in React, Python, and Django.
            </p>
          </div>

          {/* Signature Blue Circular Down Button */}
          <div className="pt-2 sm:pt-4">
            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.08, y: 2 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll down to explore work"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1b5cb8] hover:bg-[#164da0] text-white flex items-center justify-center shadow-xl shadow-blue-900/35 transition-all group cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.4] group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* ========================================================
            MOBILE / TABLET INLINE PORTRAIT (< lg screens only)
           ======================================================== */}
        <div className="lg:hidden w-full flex justify-center items-end py-2 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center max-w-[280px] sm:max-w-[340px]"
          >
            <img
              src="/meghana-hero-cuffs.png"
              alt="Meghana Kallepalli - Senior Full Stack Developer"
              className="h-[36vh] sm:h-[42vh] max-h-[360px] w-auto object-contain object-bottom drop-shadow-xl select-none"
            />
          </motion.div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: About Me, My Work, Follow Me
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-auto max-w-xl lg:max-w-[260px] xl:max-w-[280px] space-y-7 sm:space-y-9 lg:space-y-14 xl:space-y-16 text-left pointer-events-auto pt-2 lg:pt-0"
        >
          {/* Block 1: ABOUT ME */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold tracking-[0.25em] text-slate-900 dark:text-white uppercase font-sans">
              About Me
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Specializing in zoom-proof responsive UI architecture (25%–500%), VAPT-cleared security, and SonarQube clean code.
            </p>
            <a
              href="#experience"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider group pt-0.5"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Block 2: MY WORK */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold tracking-[0.25em] text-slate-900 dark:text-white uppercase font-sans">
              My Work
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Architected MCA SPICe+ regulatory automation, offline IndexedDB sync, Google SSO, and audit diff trails.
            </p>
            <a
              href="#architecture"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider group pt-0.5"
            >
              <span>Browse Portfolio</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Block 3: FOLLOW ME */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold tracking-[0.25em] text-slate-900 dark:text-white uppercase font-sans">
              Follow Me
            </h3>
            <div className="flex items-center gap-4 text-slate-600 dark:text-white pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                title="Message"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
