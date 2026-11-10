# Meghana Kallepalli — Developer Portfolio

Modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**, highlighting enterprise systems engineering, zero-trust authentication, offline-first client architecture, and AI-powered statutory workflows.

## 🚀 Quick Start

```bash
# Navigate to portfolio folder
cd /Users/ss-mac-004/Documents/ActiveProjects/Portfolio

# Start local Vite development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📂 Architecture & Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky glassmorphism header & navigation
│   │   ├── Hero.jsx                 # Terminal preview, key value proposition & CTAs
│   │   ├── Stats.jsx                # Key production metrics banner
│   │   ├── ArchitectureHighlights.jsx # Deep dive into Zero-Trust, AI Clause Engine, Offline Sync
│   │   ├── Projects.jsx             # Categorized showcase of FACTOps, FACT.Inc, Scans & Safe
│   │   ├── Experience.jsx           # Career timeline (Station-S, Ontropi, LifeCykul)
│   │   ├── Skills.jsx               # Categorized technical competencies
│   │   ├── Leadership.jsx           # Hackathon mentorship & community impact
│   │   ├── ContactModal.jsx         # 1-click email/phone copy & contact form
│   │   └── Footer.jsx               # Developer signature & quick links
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for portfolio content
│   ├── App.jsx                      # Root container
│   ├── index.css                    # Tailwind CSS & custom styling
│   └── main.jsx                     # Entrypoint
├── package.json
├── tailwind.config.js
└── vite.config.js
```

