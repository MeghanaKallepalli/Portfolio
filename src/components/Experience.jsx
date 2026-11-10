import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            4 years of progressive engineering leadership — from mobile and core web development to full-stack SaaS and distributed identity architecture.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-6 md:pl-10 group"
            >
              {/* Timeline marker node */}
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 group-hover:bg-indigo-600 transition-colors cursor-pointer"
              />

              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {job.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <motion.div
                whileHover={{ y: -2 }}
                className="mt-4 p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none space-y-2.5 transition-shadow hover:shadow-md"
              >
                {job.highlights.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
