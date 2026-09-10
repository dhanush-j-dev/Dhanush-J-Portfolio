# Dhanush J — Java Developer Portfolio

<p align="center">
  <strong>A modern, responsive personal portfolio showcasing practical software development as an entry-level Java Developer, with a focus on Java 17, Spring Boot, REST APIs, SQL, secure backend architecture, and full-stack engineering.</strong>
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://www.oracle.com/java/"><img src="https://img.shields.io/badge/Focus-Java_&_Spring_Boot-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java & Spring Boot"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/jdhanush/">💼 LinkedIn</a> &nbsp;•&nbsp;
  <a href="https://github.com/Dhanush-j-dev">🐙 GitHub</a> &nbsp;•&nbsp;
  <a href="mailto:jdhanush924@gmail.com">✉️ Email</a> &nbsp;•&nbsp;
  <a href="public/Dhanush-J-Resume.pdf">📄 View Resume</a>
</p>

---

## Preview

<!-- Replace with portfolio screenshot once captured (e.g. ./assets/preview.png) -->
<p align="center">
  <img src="src/assets/profile.jpeg" alt="Dhanush J — Portfolio Portrait" width="220" style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);" />
</p>

---

## ✦ Overview

This repository houses the personal developer portfolio of **Dhanush J**, an entry-level Java Developer based in Chennai, Tamil Nadu, India. Designed from an engineering-first perspective, the portfolio presents practical software engineering capabilities in a clean, recruiter-friendly structure.

The portfolio highlights hands-on experience building backend architectures and full-stack systems using **Java 17**, **Spring Boot**, **REST APIs**, **MySQL**, **Spring Security**, **JWT**, **React**, and **Docker**. It emphasizes verified test suites (including 266 automated unit & integration tests on CareerForge), clean OOP principles, schema normalization, and layered microservice patterns over superficial decorative trends.

---

## ✨ Features

- **Developer-Focused Hero**: Staged entrance sequence highlighting core technical identity, verified availability status, and direct recruiter call-to-actions.
- **Authentic Profile Presentation**: Real portrait card with subtle depth lighting, clean borders, and tech badge tags.
- **Dark / Light Theme System**:
  - Dark mode default (`#0A0D10` dark charcoal canvas, `#14191F` surfaces, subtle borders).
  - High-contrast software developer light mode (`#F7F8FA` background, `#FFFFFF` surfaces).
  - Instant theme toggle in desktop and mobile navigation with `localStorage` persistence and anti-flash initialization.
- **Interactive Architecture Pipeline**: Visual layered pipeline for CareerForge (`React Frontend` → `REST APIs` → `Spring Boot` → `Spring Security + JWT` → `Business Logic` → `MySQL`) featuring progressive line draws, tier illumination, and technical responsibility tooltips on hover.
- **Automated Verification Highlighting**: Prominent showcase of CareerForge's **266 automated unit & integration tests** covering authentication filters, REST controllers, service validation, and repository workflows.
- **Project Filtering & Deep-Dive Modals**: Filter projects by category (`All`, `Java`, `Spring Boot`, `Full Stack`, `AI`) and explore comprehensive detail modals with architectural breakdown, security architecture, and live links.
- **Work History Timeline**: Progressive vertical timeline spine with illuminated node markers documenting real internship experience at SvCode Tech Solutions.
- **Structured Engineering Methodology**: Interactive 6-step breakdown (`Understand` → `Design` → `Build` → `Secure` → `Test` → `Deploy`) detailing actual engineering practices.
- **Honest Communication**: Contact section providing direct email links (`jdhanush924@gmail.com`) and transparent notices regarding backend integration state.
- **Custom Brand Identity**: Custom `logo.png` utilized as browser favicon and integrated into the navigation header.
- **Zero Heavy 3D Bloat**: Completely free of Three.js, WebGL, particle loops, and artificial 3D tilts.
- **Full Accessibility & Reduced Motion**: Full fallback handling for `prefers-reduced-motion` queries.

---

## 🎨 Design Philosophy

The portfolio intentionally departs from generic AI-generated templates, floating 3D objects, and saturated neon gradients. The design rules prioritize:

1. **Restrained Charcoal Visuals**: Built on dark charcoal surfaces with electric blue (`#3B82F6`) and cyan (`#22C1DC`) reserved strictly for intentional accents.
2. **Typography Hierarchy**: Structured with **Inter** for readable body content and **JetBrains Mono** for technical tags and code entities.
3. **Recruiter-First Experience**: Project details, tech stacks, GitHub repositories, live demo links, and resume downloads are discoverable within seconds.
4. **Authentic Content**: Strictly factual documentation. Does not invent fake GitHub stars, fabricated client logos, or placeholder awards.

---

## 🎬 Animation & Interaction

The motion language is inspired by intentional product motion design, prioritizing responsiveness and GPU acceleration:

- **Hero Entrance Sequence (~1.1s Total)**:
  1. Ambient depth establishes (`h-bg-glow`)
  2. `JAVA DEVELOPER` badge reveals (`h-eyebrow`)
  3. Primary title enters (`h-name`)
  4. Headline reveals (`h-tagline`)
  5. Summary narrative follows (`h-body`)
  6. Status and location pill appears (`h-status`)
  7. CTA action buttons appear (`h-ctas`)
  8. Profile portrait reveals with gentle scale & depth settling (`h-photo`)
  9. Technology badges pop in with stagger (`h-badge-0..3`)
- **Scroll Storytelling**: A 2px top progress beam tracks reading depth, while an animated section line (`section-line`) draws horizontally as each chapter enters view.
- **Intersection Observer Hook (`useInView`)**: Custom React hook triggers animations once when entering the viewport, disconnecting immediately to preserve zero ongoing scroll overhead.
- **Micro-Interactions**: Project cards elevate 3–4px on hover; Code Tracker practice dashboard and Meeting Summarizer telemetry rows shift smoothly on card interaction.
- **Compositor Only**: All motion is implemented via native CSS keyframes and GPU-friendly `transform` and `opacity` properties with cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Library** | [React 19](https://react.dev/) | Component architecture, state hooks, and virtual DOM |
| **Language** | [TypeScript 5.x](https://www.typescriptlang.org/) | Strict static typing and interface contracts (`verbatimModuleSyntax`) |
| **Build Tool & Bundler** | [Vite 8.2](https://vite.dev/) | Lightning-fast HMR and optimized production bundle |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) | Utility-first CSS engine with centralized CSS variable tokens |
| **Icons** | [Lucide React](https://lucide.dev/) | Crisp, lightweight technical icons |
| **Animation Engine** | Native CSS3 + IntersectionObserver | Hardware-accelerated keyframes and viewport-triggered reveals |
| **Linting** | [Oxlint](https://oxc.rs/) | High-performance JavaScript/TypeScript linter |
| **Document Delivery** | Static PDF (`public/Dhanush-J-Resume.pdf`) | Direct native browser resume download |

---

## 🧭 Portfolio Structure

```text
Hero (Intro, Role Positioning, Quick CTAs, Profile Portrait)
  │
  ├── Technical Highlights (Java 17, Spring Boot, Secure APIs, 266 Tests)
  │
  ├── About (Background, Core Capabilities, Engineering Objectives)
  │
  ├── Technical Skills (Programming, Core Java, Backend & APIs, Frontend, Databases, Tools)
  │
  ├── Experience (SvCode Tech Solutions — Java Development Internship)
  │
  ├── Featured Projects
  │     ├── CareerForge (Featured 2-Column Application & Interactive Architecture)
  │     ├── Code Tracker (Personal Practice Analyzer & Analytics Dashboard)
  │     └── Meeting Summarizer (Real-Time WebRTC & Gemini AI Platform)
  │
  ├── How I Build Software (6-Stage Engineering Methodology)
  │
  ├── Developer Mindset ("Build. Test. Improve.")
  │
  ├── Resume CTA (Direct PDF Download Trigger)
  │
  └── Contact (Direct Email, Social Profiles & Honest Form Notice)
```

> *Note: Education and generic certification lists are intentionally omitted in favor of verifiable application architectures and public GitHub source repositories.*

---

## 🚀 Featured Projects

### 1. CareerForge
> **Career & Recruitment Management Platform**

- **Technologies**: Java 17, Spring Boot, Spring Security, JWT, MySQL, React, Docker
- **Overview**: A full-stack recruitment platform providing role-based workflows for students, recruiters, and placement administrators. Replaces fragmented spreadsheets with automated applicant tracking and structured interview scheduling.
- **Key Capabilities**:
  - Role-based application portals (Student, Recruiter, Administrator)
  - Skill-based candidate matching engine
  - Recruiter applicant pipeline with real-time status transitions
  - Integrated interview scheduling calendar
  - Normalized MySQL schema with relational integrity and indexed search
- **Security Architecture**:
  - Stateless JWT access and refresh token rotation
  - BCrypt password hashing with high salt rounds
  - Role-Based Access Control (RBAC) across protected REST endpoints
  - Centralized `@ControllerAdvice` exception handling and request sanitization
- **Automated Verification**: **266 automated unit and integration tests** verifying authentication chains, REST controllers, service business logic, and database persistence.
- **Deployment**: Vercel (Frontend Client), Railway (Backend API), Docker (Containerized App).
- **Links**:
  - [GitHub Repository](https://github.com/dhanush-j-dev/CareerForge.git)
  - [Live Demo](https://career-forge-coral.vercel.app/)

---

### 2. Code Tracker
> **Personal Coding Practice Analyzer**

- **Technologies**: Java, OOP, JDBC, MySQL, Spring Boot
- **Overview**: A practice analytics application designed to log solved algorithmic problems, categorize by topic and difficulty, compute revision streaks, and generate weekly progress reports.
- **Technical Implementation**:
  - Clean Object-Oriented Programming (Encapsulation, Polymorphism, Inheritance)
  - Optimized JDBC / MySQL persistence layer for fast statistical aggregations
  - Spring Boot RESTful API endpoints with modular domain separation
  - File handling service for report export and automated analytics
- **Links**:
  - [GitHub Repository](https://github.com/dhanush-j-dev/CodeTrack)

---

### 3. Meeting Summarizer
> **Real-Time Meeting & AI Summarization Platform**

- **Technologies**: Python, React, TypeScript, FastAPI, WebRTC, MediaPipe, Gemini API
- **Overview**: A real-time video conferencing application combining peer-to-peer WebRTC streaming with live audio transcription, speaker diarization, multimodal engagement tracking, and Gemini AI-generated meeting minutes.
- **Technical Implementation**:
  - WebRTC mesh pipeline for low-latency peer-to-peer audio/video streaming
  - Live speech-to-text pipeline with speaker timeline diarization
  - MediaPipe-based multimodal engagement tracking
  - Asynchronous FastAPI backend integrating Google Gemini API for action item extraction and decision summarization
  - Structured PDF meeting export utility
- **Links**:
  - [GitHub Repository](https://github.com/dhanush-j-dev/Meeting-summarizer-app)

---

## 🏗️ CareerForge Architecture

The CareerForge backend follows a clean layered enterprise architecture:

```text
┌─────────────────────────────────────────────────────────┐
│                     React Frontend                      │
│        (Responsive Client Interface & Dynamic State)    │
└────────────────────────────┬────────────────────────────┘
                             │  HTTPS / JSON
                             ▼
┌─────────────────────────────────────────────────────────┐
│                        REST APIs                        │
│          (Gateway Layer with Standard HTTP Codes)       │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                       Spring Boot                       │
│        (Core Application Framework & Controllers)       │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                  Spring Security + JWT                  │
│       (Stateless Authentication & Role-Based Auth)      │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                     Business Logic                      │
│      (Service Layer, Domain Matching, Validations)      │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                         MySQL                           │
│        (Normalized Relational Database & Indexing)      │
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 How I Build Software

My general engineering approach across full-stack and backend systems:

1. **01 — Understand**: Analyze business requirements, user personas, and data flow before writing code. Identify failure modes and boundary conditions early.
2. **02 — Design**: Plan decoupled layers across frontend, REST API contracts, service business logic, and normalized relational database schemas.
3. **03 — Build**: Implement maintainable Java & Spring Boot logic adhering to OOP principles, SOLID guidelines, and strict validation.
4. **04 — Secure**: Enforce stateless token authorization (JWT), BCrypt hashing, role-based endpoint guards, and input sanitization.
5. **05 — Test**: Verify critical application workflows with comprehensive unit and integration test suites before deployment.
6. **06 — Deploy**: Package microservices with multi-stage Dockerfiles and deploy onto modern cloud environments with health monitoring.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` (bundled with Node.js)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dhanush-j-dev/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

### Production Build & Linting

- **Compile and create production bundle**:
  ```bash
  npm run build
  ```
  Runs `tsc -b` for type-checking and `vite build` to output optimized static assets into the `dist/` folder.

- **Run code linter**:
  ```bash
  npm run lint
  ```

- **Preview the production build locally**:
  ```bash
  npm run preview
  ```

---

## 📁 Project Structure

```text
personal-portfolio/
├── public/
│   ├── Dhanush-J-Resume.pdf      # Actual bundled resume PDF asset
│   ├── favicon.svg               # SVG icon asset
│   ├── logo.png                  # Custom brand logo & browser favicon
│   └── icons.svg                 # SVG sprite definitions
├── src/
│   ├── assets/                   # Static images (profile.jpeg, logo.png, etc.)
│   ├── components/               # Modular UI components
│   │   ├── About.tsx             # Background narrative & text reveal
│   │   ├── ArchitectureDiagram.tsx # Interactive CareerForge layer pipeline
│   │   ├── Contact.tsx           # Contact details & honest submission form
│   │   ├── EngineeringApproach.tsx # 6-stage engineering process view
│   │   ├── Experience.tsx        # Work history with animated timeline spine
│   │   ├── Footer.tsx            # Branding, dynamic year, and back-to-top
│   │   ├── Hero.tsx              # 9-stage choreographed entrance hero
│   │   ├── Mindset.tsx           # "Build. Test. Improve." strip
│   │   ├── Navbar.tsx            # Sticky header with active underline & theme toggle
│   │   ├── ProfileCard.tsx       # Portrait card with subtle ambient depth
│   │   ├── ProjectCard.tsx       # Featured CareerForge layout & secondary cards
│   │   ├── ProjectDetailModal.tsx # Full modal for in-depth architecture review
│   │   ├── ProjectFilter.tsx     # Filter category pills
│   │   ├── Projects.tsx          # Projects controller container
│   │   ├── ResumeCTA.tsx         # Direct resume download call-to-action
│   │   ├── Skills.tsx            # Categorized skills grid with staggered badges
│   │   ├── SocialIcons.tsx       # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── TechnicalHighlights.tsx # 4-card metric strip (266 tests prominent)
│   │   └── ThemeToggle.tsx       # Accessible Dark/Light mode button
│   ├── context/
│   │   └── ThemeContext.tsx      # Dark/Light theme provider & localStorage state
│   ├── data/
│   │   ├── engineering.ts        # 6 methodology stages
│   │   ├── experience.ts         # SvCode Tech Solutions work history
│   │   ├── personal.ts           # Bio, contacts, links, and highlights
│   │   ├── projects.ts           # CareerForge, Code Tracker, Meeting Summarizer
│   │   └── skills.ts             # 6 categorized skill toolkits
│   ├── hooks/
│   │   └── useInView.ts          # Native IntersectionObserver viewport trigger
│   ├── types/
│   │   └── index.ts              # TypeScript interface definitions
│   ├── App.tsx                   # Top-level composition & continuity rail
│   ├── index.css                 # Theme tokens, GPU animations & Tailwind v4
│   └── main.tsx                  # React DOM root entrypoint
├── index.html                    # HTML shell, anti-flash theme script, SEO tags
├── package.json                  # Dependencies, scripts, and project metadata
├── tsconfig.app.json             # Application TypeScript configuration
├── tsconfig.json                 # Project TypeScript references
└── vite.config.ts                # Vite config with React & Tailwind v4 plugins
```

---

## 📱 Responsive Design

The portfolio is built with mobile-first responsive breakpoints using Tailwind CSS:
- **Desktop (1024px+)**: Dual-column Hero, interactive horizontal architecture pipeline, floating right-hand section continuity rail, and 2-column featured project view.
- **Tablet (768px – 1023px)**: Adaptive grid reflow, touch-friendly interactive targets, and balanced spacing.
- **Mobile (< 768px)**: Compact navigation drawer, vertical timeline spine, single-column cards, and zero horizontal scroll overflow.

---

## ♿ Accessibility

- **Semantic HTML5**: Native elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with structured ARIA roles.
- **Keyboard Navigation**: Clear visible focus rings (`focus-visible:ring-2`) on all interactive buttons, links, and layer toggles.
- **Screen Reader Support**: Accessible hidden labels (`sr-only`) on theme toggle buttons and social icons.
- **Color Contrast**: Complies with WCAG AA standards in both Dark (`#F5F7FA` on `#0A0D10`) and Light (`#111827` on `#F7F8FA`) modes.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` queries by disabling delays, transformations, and progressive drawing lines.

---

## ⚡ Performance

- **Lightweight Bundle**: ~273 KB JavaScript bundle (gzip: ~79 KB) — zero heavy runtime libraries.
- **GPU Compositing**: All animations are restricted to hardware-accelerated `transform` and `opacity` properties.
- **Zero Scroll Listener Overhead**: Viewport animations disconnect their `IntersectionObserver` immediately upon initial entrance.
- **Anti-Flash Theme Loading**: Instant theme evaluation script executed synchronously inside `<head>` prevents light/dark layout shift during hydration.

---

## 🌐 Deployment

The production bundle compiles into static HTML, JavaScript, and CSS assets suitable for deployment on any modern static hosting provider:

- **Frontend**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) / [GitHub Pages](https://pages.github.com/)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 📬 Contact

I am open to entry-level opportunities as a **Java Developer**, **Backend Developer**, or **Full-Stack Developer**.

- **Email**: [jdhanush924@gmail.com](mailto:jdhanush924@gmail.com)
- **LinkedIn**: [linkedin.com/in/jdhanush](https://www.linkedin.com/in/jdhanush/)
- **GitHub**: [github.com/Dhanush-j-dev](https://github.com/Dhanush-j-dev)
- **Location**: Chennai, Tamil Nadu, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
