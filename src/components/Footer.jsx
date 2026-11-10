import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/10 dark:bg-indigo-600/30 border border-indigo-600/30 dark:border-indigo-500/30 flex items-center justify-center text-indigo-700 dark:text-white font-mono font-bold text-xs">
              MK
            </div>
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Meghana Kallepalli</span>
              <span className="mx-2 text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Senior Full Stack Web Developer</span>
            </div>
          </div>

          {/* Center status note */}
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-500">
            <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Built with React 19, Vite, and Tailwind CSS</span>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 text-xs shadow-sm dark:shadow-none"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-[11px]">
          © {new Date().getFullYear()} Meghana Kallepalli. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
