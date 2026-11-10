import React, { useState } from 'react';
import { architectureHighlights } from '../data/portfolioData';
import { ShieldCheck, Cpu, WifiOff, Activity, Check, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const icons = {
  'zero-trust-auth': ShieldCheck,
  'legal-clause-engine': Cpu,
  'offline-sync-engine': WifiOff,
  'compliance-state-machine': Activity,
};

const ArchitectureHighlights = () => {
  const [selectedId, setSelectedId] = useState(architectureHighlights[0].id);

  const activeHighlight = architectureHighlights.find((h) => h.id === selectedId);
  const IconComponent = icons[selectedId] || Layers;

  return (
    <section id="architecture" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Systems & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Engineering & Distributed Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Beyond standard CRUD applications — deep dives into the specialized security, regulatory, and offline-first engines I have designed and deployed.
          </p>
        </motion.div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {architectureHighlights.map((item, idx) => {
              const ItemIcon = icons[item.id] || Layers;
              const isSelected = item.id === selectedId;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01, x: 2 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-indigo-600 dark:border-indigo-500/70 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-600/30 dark:ring-indigo-500/30'
                      : 'bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Subtle active left bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeArchitectureIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 dark:bg-indigo-500"
                    />
                  )}

                  <div
                    className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
                        {item.domain}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                          Active View
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Architectural Deep Dive Display with Smooth Crossfade */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden min-h-[420px]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHighlight.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="relative z-10 space-y-6"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        Module: {activeHighlight.domain}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {activeHighlight.title}
                      </h3>
                    </div>
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Narrative description */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                      Architectural Strategy & Implementation
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {activeHighlight.description}
                    </p>
                  </div>

                  {/* Key Tags */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                      Core Building Blocks & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeHighlight.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          className="px-3 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric Banner */}
                  <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-gradient-to-r dark:from-indigo-950/60 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Verified System Outcome:</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {activeHighlight.metric}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArchitectureHighlights;
