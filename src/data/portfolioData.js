export const personalInfo = {
  name: "Meghana Kallepalli",
  role: "Senior Full Stack Web Developer",
  tagline: "Architecting high-performance SaaS, zero-trust security pipelines, and offline-first enterprise applications.",
  experienceYears: "4+",
  location: "Andhra Pradesh, India",
  email: "meghanak@ahaicoe.org",
  phone: "+91 9398871738",
  linkedin: "https://linkedin.com/in/meghana-kallepalli-846562256",
  github: "https://github.com",
  about: "Full Stack Engineer with 4 years of hands-on experience designing and shipping production-grade enterprise systems. Specializing in React 19, Python, and Django REST Framework, with proven expertise in zoom-proof responsive UI architecture (25%–500% browser scaling, 4K to mobile), zero-trust authentication, Google Identity Services & Apple Sign-In, field-level AES-256 PII encryption, VAPT-cleared security, real-time API telemetry & immutable JSON audit logging, SonarQube-verified clean architecture, and regulatory AI synthesis pipelines (OpenAI & Gemini).",
};

export const quickStats = [
  { label: "Years Experience", value: "4+", description: "Building & shipping enterprise web apps" },
  { label: "UI Scalability", value: "25%–500%", description: "Zoom-proof cross-resolution integrity" },
  { label: "VAPT & SonarQube", value: "Cleared", description: "Zero high/critical security findings" },
  { label: "Audit Traceability", value: "100%", description: "Granular JSON old/new diff logging" },
];

export const architectureHighlights = [
  {
    id: "zero-trust-auth",
    title: "Zero-Trust Identity, VAPT-Cleared Security & Social SSO",
    domain: "FACTOps-Login",
    tags: ["VAPT Hardened", "SonarQube SAST", "Google Identity Services", "Apple Sign-In", "OAuth2 / OIDC", "JWT", "Argon2", "AES-256 PII", "Device Fingerprinting", "Blind SHA-256"],
    description: "Unified authentication engine supporting Google Identity Services (GIS), Sign in with Apple, and multi-channel OTP. Architected to pass rigorous enterprise Vulnerability Assessment & Penetration Testing (VAPT) audits, mitigating OWASP Top 10 vulnerabilities (IDOR, BOLA, injection, and broken authentication). Implements server-side cryptographic ID token validation, multi-client audience checks (aud/azp), 15-minute rotating JWTs, and AES-256 field encryption for director PII with blind SHA-256 indexing.",
    metric: "VAPT-Cleared · SonarQube Quality Gate Pass · Zero PII Leaks"
  },
  {
    id: "legal-clause-engine",
    title: "AI-Powered Statutory & Legal Drafting Engine",
    domain: "FACTInc-Backend",
    tags: ["OpenAI GPT-4o", "Google Gemini", "MCA SPICe+", "Dynamic Clause Tree"],
    description: "Autonomous legal document synthesis engine generating MoA, AoA, Partnership Deeds, and Society Bylaws grounded in state-specific acts. Employs prompt guardrails and fallback deterministic rules to eliminate hallucinations in legal contracts.",
    metric: "Cut legal deed generation from hours to under 2 minutes"
  },
  {
    id: "offline-sync-engine",
    title: "Offline-First Sync Engine & Zoom-Proof Scaling Architecture",
    domain: "FactOps-Frontend",
    tags: ["Zoom-Proof (25%–500%)", "DPI-Aware Canvas", "Fluid Layouts (clamp)", "IndexedDB", "Zustand", "Optimistic UI", "PDF-Lib"],
    description: "Client-side outbox queue allowing uninterrupted document management, signing, and file uploads even under intermittent network conditions. Paired with a zoom-proof layout architecture using fluid units (rem/em, clamp) and container queries that scale seamlessly from 25% zoom to 500% high-magnification with zero horizontal overflow, plus DPI-aware coordinate mapping (devicePixelRatio) ensuring sub-pixel precision for digital signatures on 4K, laptop, and mobile viewports.",
    metric: "100% Zoom-Proof (25%–500%) & Offline-Safe"
  },
  {
    id: "compliance-state-machine",
    title: "Regulatory Milestone State Machine & Immutable Audit Logging",
    domain: "FACTInc-Backend",
    tags: ["Immutable Audit Trails", "API Telemetry Middleware", "@audit_action Decorator", "Old/New JSON Diffs", "State Machine", "Latency Tracking"],
    description: "Centralized statutory state machine tracking 25+ regulatory stages paired with an enterprise audit logging engine. Implemented the custom @audit_action decorator that automatically captures before/after JSON diffs on database mutations and custom APILogMiddleware tracking per-request execution duration in milliseconds, client IP (X-Forwarded-For), user context, and status codes for full compliance auditability.",
    metric: "100% Mutation Auditability & Millisecond API Telemetry"
  }
];

export const experience = [
  {
    company: "Station-S",
    role: "Full Stack Developer",
    period: "Nov 2024 – Present",
    location: "Sri City, India (On-site)",
    highlights: [
      "Architected a zoom-proof responsive layout system across all enterprise modules using fluid typography (clamp()), CSS container queries, and relative scaling units (rem/em), guaranteeing zero UI breakage from 25% up to 500% browser zoom across 4K, laptop, tablet, and mobile displays.",
      "Engineered DPI-aware canvas rendering with window.devicePixelRatio compensation, ensuring sub-pixel precision and zero coordinate displacement for PDF annotation and signature capture at any zoom level.",
      "Architected the centralized FACTOps Zero-Trust Identity platform supporting Google Identity Services (GIS), Sign in with Apple, short-lived JWTs, and AES-256 field encryption for director PII.",
      "Hardened application security to pass enterprise Vulnerability Assessment and Penetration Testing (VAPT) audits with zero critical/high findings, mitigating OWASP Top 10 risks including IDOR, BOLA, and session hijacking.",
      "Engineered custom API request/response logging middleware (APILogMiddleware) capturing execution latency in milliseconds, client IP (X-Forwarded-For), and status diagnostics.",
      "Built a custom @audit_action decorator capturing old-state vs. new-state JSON diffs across all database mutations for complete statutory and enterprise audit trails.",
      "Enforced strict SonarQube Quality Gates and SonarLint static application security testing (SAST), maintaining 0 critical vulnerabilities, 0 security hotspots, and A-grade maintainability across all backend endpoints.",
      "Engineered the FACT.Inc platform automating Ministry of Corporate Affairs (MCA) SPICe+ Part A/B legal filings, reducing manual turnaround time by 80%."
    ]
  },
  {
    company: "Ontropi",
    role: "Full Stack Developer & Technical Team Lead",
    period: "Nov 2022 – Nov 2024",
    location: "Bangalore, India (Remote)",
    highlights: [
      "Led an engineering squad of 4 developers building scalable administrative and campus community web platforms (Campus.Life & Ontropi).",
      "Designed and deployed 20+ REST APIs in Django REST Framework and optimized PostgreSQL relational database queries, reducing response latency by 30%.",
      "Delivered pixel-perfect responsive web interfaces ensuring cross-device consistency across diverse mobile devices, tablets, and high-DPI desktop viewports.",
      "Established code quality standards, automated linting, test coverage targets, and CI/CD deployment pipelines across cross-functional teams.",
      "Architected transactional communication pipelines and analytical reporting dashboards that improved student/faculty onboarding retention by 22%."
    ]
  },
  {
    company: "LifeCykul",
    role: "Software Engineering Intern → Full Stack / Mobile Developer",
    period: "Jul 2021 – Oct 2022",
    location: "Bengaluru / Hyderabad, India",
    highlights: [
      "Developed and maintained user-facing modules and activity tracking dashboards for employee health and corporate wellness platforms.",
      "Engineered responsive UI components in React, integrated cross-platform WebView bridges, and resolved 100+ critical production defect tickets.",
      "Implemented RESTful integration layers and client validation logic, ensuring high UI responsiveness and WCAG accessibility standards."
    ]
  }
];

export const projects = [
  {
    id: "factops-identity",
    title: "FACTOps Zero-Trust Identity & Social SSO",
    subtitle: "Enterprise Auth, Google/Apple SSO & Access Controller",
    category: "Security & Auth",
    tech: ["Django", "React", "Google GIS", "Apple Sign-In", "VAPT Hardened", "SonarQube SAST", "APILogMiddleware", "JWT", "AES-256", "Argon2", "Razorpay"],
    summary: "Production-grade authentication platform securing sensitive enterprise data with Google Identity Services, Sign in with Apple, multi-channel OTP, device binding, and VAPT-cleared security.",
    points: [
      "Successfully cleared enterprise VAPT (Vulnerability Assessment & Penetration Testing) audits with zero critical/high findings across authentication and tenant boundaries",
      "Engineered APILogMiddleware tracking per-request duration (ms), IP provenance, status codes, and exception telemetry",
      "SonarQube-hardened architecture passing strict automated Quality Gates with zero security hotspots and clean maintainability metrics",
      "Server-side cryptographic verification of Google ID tokens & Apple JWTs with authorized client ID audience matching",
      "Rotating JWT tokens (15m) bound to device fingerprint, client IP, and User-Agent",
      "AES-256 encryption for director PII with blind SHA-256 lookup indexing and anti-enumeration",
      "Dual-channel rate limiting preventing credential stuffing and brute-force attacks",
      "Automated Razorpay checkout integration with instant multi-tenant provisioning"
    ]
  },
  {
    id: "fact-scans-safe",
    title: "FACT.Scans & Safe Document Studio",
    subtitle: "Offline-First Digital Signatures & Zoom-Proof PDF Studio",
    category: "Frontend Architecture",
    tech: ["React", "Zoom-Proof Scaling", "DPI Canvas", "IndexedDB", "Zustand", "PDF-Lib", "Canvas API", "Vite"],
    summary: "High-performance browser-based document studio enabling digital signatures, stamp placement, and offline document synchronization with zoom-proof scaling from 25% to 500%.",
    points: [
      "Engineered zoom-proof DPI-aware canvas scaling (devicePixelRatio compensation) ensuring zero coordinate offset for signatures and stamps at any browser zoom level (25%–500%)",
      "Pixel-perfect responsive layout adapting fluidly from 4K ultra-wide monitors down to 320px mobile screens without horizontal clipping or font distortion",
      "IndexedDB outbox queue with automatic network detection, exponential backoff retries, and optimistic UI mutations",
      "In-browser PDF annotation, multi-party signature canvas, EXIF stripping, and client-side background removal",
      "Embedded spreadsheet editing (@fortune-sheet) and live Excel parsing"
    ]
  },
  {
    id: "fact-hub",
    title: "FACT.Hub Operations ERP & Audit Command Center",
    subtitle: "Internal Operations, Real-Time Telemetry & Audit Trails",
    category: "Enterprise ERP",
    tech: ["React", "Django", "Audit Logging (@audit_action)", "APILogMiddleware", "WebSockets", "Tailwind CSS"],
    summary: "Centralized internal operations command center unifying client onboarding, real-time stage progression, immutable audit trails, and API telemetry logging.",
    points: [
      "Custom @audit_action decorator logging granular JSON old/new diffs for 100% change traceability and legal compliance",
      "Integrated real-time Audit Trails and User Activity Logs dashboard for compliance officers and operational oversight",
      "Engineered millisecond API latency tracking and request/response telemetry middleware",
      "Ready-to-Start (RTSN) onboarding workflow cutting manual setup time to zero",
      "Dynamic code-splitting and AuthGuard route virtualization with Zoho Invoicing integration"
    ]
  },
  {
    id: "fact-inc",
    title: "FACT.Inc Regulatory Filing Platform",
    subtitle: "Automated Corporate Incorporation & MCA Engine",
    category: "Full Stack & AI",
    tech: ["React 19", "Django REST Framework", "OpenAI GPT-4o", "Gemini", "MySQL", "SonarQube", "VAPT Cleared"],
    summary: "Automated digital incorporation platform transforming complex multi-entity legal onboarding into SPICe+ Part A & B filings with AI legal clause generation.",
    points: [
      "Dynamic clause synthesis for MoA/AoA, Partnership Deeds, and Society Bylaws",
      "25+ milestone compliance tracking engine for pre- and post-incorporation",
      "Multi-channel document ingestion via QR sync, mobile upload, and OCR parsing",
      "Sub-2-minute company name analysis and legal deed drafting",
      "VAPT-cleared and SonarLint-verified codebase with high test coverage across financial and director modules"
    ]
  },
  {
    id: "z-hire",
    title: "Z.Hire Recruitment Suite",
    subtitle: "AI-Powered Candidate Sourcing & Semantic Pipeline",
    category: "AI & Full Stack",
    tech: ["React.js", "Django REST Framework", "OpenAI API", "MySQL"],
    summary: "End-to-end recruitment pipeline automating resume ingestion, semantic candidate screening against job specs, and real-time hiring stage management.",
    points: [
      "Shipped 18+ REST APIs powering candidate ingestion and evaluation",
      "OpenAI-powered resume categorization cutting screening overhead by 70%",
      "Interactive candidate tracking kanban with real-time stage updates",
      "Automated interview scheduling, saving recruiters 5+ hours weekly"
    ]
  }
];

export const skillCategories = [
  {
    name: "Frontend & Zoom-Proof Scaling",
    skills: [
      "Zoom-Proof Scaling (25%–500%)",
      "Pixel-Perfect Cross-Resolution Design",
      "DPI-Aware Canvas (devicePixelRatio)",
      "Fluid Typography & Layouts (clamp)",
      "CSS Container Queries & Subgrid",
      "React.js (18/19)",
      "JavaScript (ES6+) & TypeScript",
      "React Router 7 & Zustand",
      "Tailwind CSS & Framer Motion",
      "WCAG 2.1 AA Accessibility"
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      "Python 3",
      "Django & Django REST Framework",
      "RESTful API Design",
      "WebSockets",
      "Microservices Architecture",
      "Asynchronous Processing",
      "Relational Data Modeling"
    ]
  },
  {
    name: "Security, Auth & Compliance",
    skills: [
      "Google Identity Services (GIS)",
      "Sign in with Apple",
      "OAuth2 & OpenID Connect",
      "Zero-Trust Architecture",
      "Rotating JWT & Sessions",
      "Device Fingerprinting",
      "AES-256 Field Encryption",
      "Argon2 & Blind Hashing",
      "Rate Limiting & Anti-Enumeration",
      "RBAC"
    ]
  },
  {
    name: "Observability, Audit & Code Quality",
    skills: [
      "Immutable Audit Logging (@audit_action)",
      "API Telemetry Middleware (APILogMiddleware)",
      "Old/New State JSON Diffs",
      "Execution Latency Tracking (ms)",
      "VAPT Compliance & Auditing",
      "OWASP Top 10 Mitigation",
      "IDOR & BOLA Prevention",
      "SonarQube Quality Gates",
      "SonarLint (SAST)",
      "Zero Security Hotspots",
      "Pytest & Test Coverage"
    ]
  },
  {
    name: "Architecture & Client-Side Engines",
    skills: [
      "Offline-First Sync Engine",
      "IndexedDB (idb)",
      "Optimistic UI Mutations",
      "Canvas API & Signature Capture",
      "PDF-Lib & Document Manipulation",
      "State Machines",
      "Client-Side Image Optimization"
    ]
  },
  {
    name: "AI & Automation",
    skills: [
      "OpenAI API (GPT-4o)",
      "Google GenAI (Gemini)",
      "Prompt Engineering",
      "EasyOCR & Tesseract",
      "Legal Clause Generation",
      "Dynamic Document Synthesis"
    ]
  },
  {
    name: "Databases, Cloud & Integrations",
    skills: [
      "MySQL & PostgreSQL",
      "AWS S3 & Cloud Storage",
      "Razorpay Payment Gateway",
      "Zoho Invoicing API",
      "Firebase Cloud Messaging (FCM)",
      "Git & CI/CD Pipelines",
      "Docker & Nginx"
    ]
  }
];

export const leadershipAndVolunteering = [
  {
    title: "Hackathon Organizing Team Member",
    organization: "Station-S",
    period: "Jan 2025 – Present",
    description: "Conceptualized and organized cross-functional hackathons end-to-end — problem statement design focused on Generative AI and process automation, team mentoring, and judging rubrics."
  },
  {
    title: "Organizing Team Member",
    organization: "International Startup Festival",
    period: "Oct 2022 – Sep 2024",
    description: "Curated and evaluated high-growth startups and investor pitches across market traction and technical feasibility; coordinated communications across global stakeholders."
  },
  {
    title: "Tech Talent League — Conducting Team",
    organization: "Ontropi",
    period: "Mar 2023 – Mar 2024",
    description: "Designed competitive tech talent assessments and hands-on coding challenges, strengthening cross-team collaboration and engineering talent evaluation."
  }
];
