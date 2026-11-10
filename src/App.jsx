import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArchitectureHighlights from './components/ArchitectureHighlights';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Sticky Glass Navbar with Theme Toggle */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Main Content Skeleton */}
      <main className="flex-1">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Stats />
        <ArchitectureHighlights />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default App;
