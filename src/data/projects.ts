import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "careerforge",
    title: "CareerForge",
    subtitle: "Career & Recruitment Management Platform",
    date: "Jun 2026 – Aug 2026",
    categories: ["Java", "Spring Boot", "Full Stack"],
    featured: true,
    description: "CareerForge is a full-stack career and recruitment platform with separate workflows for students, recruiters, and administrators.",
    technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "React", "Docker"],
    features: [
      "Job discovery & structured search filters",
      "Streamlined multi-role job application flow",
      "Resume upload & profile management",
      "Skill-based candidate matching engine",
      "Recruiter applicant tracking & status pipeline",
      "Integrated interview scheduling system",
      "Real-time status change notifications",
      "Relational MySQL persistence with schema validation"
    ],
    backend: [
      "Spring Boot layered architecture",
      "RESTful API design with proper HTTP status codes",
      "Spring Security filter chain integration",
      "Robust domain business logic & custom validators",
      "Centralized @ControllerAdvice exception handling"
    ],
    security: [
      "Stateless JWT access & refresh token rotation",
      "BCrypt password hashing with high salt rounds",
      "Role-based authorization (Student, Recruiter, Admin)",
      "Strict incoming request validation & sanitization"
    ],
    testing: {
      count: 266,
      headline: "Automated Unit & Integration Tests",
      description: "Tests cover authentication, APIs, business logic and database workflows."
    },
    deployment: ["Vercel (Frontend)", "Railway (Backend API)", "Docker (Containerized App)"],
    architecture: {
      nodes: [
        {
          name: "React Frontend",
          role: "Client Interface",
          description: "Responsive single-page application with role-aware navigation and dynamic state."
        },
        {
          name: "REST APIs",
          role: "API Gateway Layer",
          description: "Clean RESTful endpoints with structured JSON request/response payloads."
        },
        {
          name: "Spring Boot",
          role: "Core Application",
          description: "Micro-framework orchestrating controllers, dependency injection, and services."
        },
        {
          name: "Spring Security + JWT",
          role: "Security Boundary",
          description: "Authentication, JWT-based authorization, and role-based access control."
        },
        {
          name: "Business Logic",
          role: "Service Layer",
          description: "Core domain logic, skill matching algorithms, and interview scheduling workflows."
        },
        {
          name: "MySQL",
          role: "Data Layer",
          description: "Persistent application data storage with indexed tables and relational integrity."
        }
      ]
    },
    problem: "Traditional campus recruitment relies on fragmented spreadsheets and manual email threads, leading to lost applicant records, scheduling delays, and poor tracking for both candidates and recruiters.",
    solution: "A unified full-stack platform that centralizes role-based portals for students, recruiters, and admins, backed by automated verification, relational storage, and robust REST APIs.",
    githubUrl: "https://github.com/dhanush-j-dev/CareerForge.git",
    liveUrl: "https://career-forge-coral.vercel.app/"
  },
  {
    id: "code-tracker",
    title: "Code Tracker",
    subtitle: "Personal Coding Practice Analyzer",
    date: "Apr 2026 – Jun 2026",
    categories: ["Java", "Spring Boot", "Full Stack"],
    featured: false,
    description: "A full-stack coding practice tracker designed to manage coding problems, analyze progress, generate reports and monitor coding streaks.",
    technologies: ["Java", "OOP", "JDBC", "MySQL", "Spring Boot"],
    features: [
      "Structured problem tracking & difficulty categorization",
      "Analytics dashboards for solve rate & topics",
      "Automated weekly progress reports",
      "Daily coding streak monitoring & consistency metrics",
      "Full CRUD operations for problem logs",
      "Real-time statistics calculation via database aggregations",
      "Reliable relational persistence with JDBC/MySQL"
    ],
    backend: [
      "Java OOP principles (Encapsulation, Polymorphism, Inheritance)",
      "JDBC / MySQL integration with optimized queries",
      "Spring Boot RESTful service endpoints",
      "Modular design with separation of concerns",
      "File handling for report generation & export"
    ],
    problem: "Developers often lose track of problems solved across various judges and lack a consolidated view of weak topics, revision intervals, and practice streaks.",
    solution: "A focused practice dashboard that stores problem metadata, tracks revision history, and computes actionable progress statistics.",
    githubUrl: "https://github.com/dhanush-j-dev/CodeTrack"
  },
  {
    id: "meeting-summarizer",
    title: "Meeting Summarizer",
    subtitle: "Real-Time Meeting & AI Summarization Platform",
    date: "Nov 2025 – Mar 2026",
    categories: ["Full Stack", "AI"],
    featured: false,
    description: "A real-time video meeting application with live transcription, speaker identification, face-detection engagement tracking and AI-powered meeting summarization.",
    technologies: ["Python", "React", "TypeScript", "FastAPI", "WebRTC", "MediaPipe", "Gemini API"],
    features: [
      "Peer-to-peer WebRTC video conferencing",
      "Live speech-to-text audio transcription",
      "Speaker identification & timeline mapping",
      "MediaPipe-based multimodal engagement tracking",
      "AI-generated executive meeting summaries",
      "Automated action items & key decision extraction",
      "Multi-language transcript translation",
      "Structured PDF meeting report generation"
    ],
    architecture: {
      nodes: [
        {
          name: "WebRTC Meeting",
          role: "Audio/Video Stream",
          description: "Real-time peer-to-peer video conference stream."
        },
        {
          name: "Live Transcription",
          role: "Speech Processing",
          description: "Streamed audio converted to text segments in real time."
        },
        {
          name: "Speaker Identification",
          role: "Diarization",
          description: "Matches transcript lines to specific participant speakers."
        },
        {
          name: "FastAPI Backend",
          role: "Pipeline Orchestration",
          description: "Asynchronous Python API handling payloads and stream routing."
        },
        {
          name: "Gemini API",
          role: "AI Intelligence",
          description: "Generates concise summaries, action items, and key decisions."
        },
        {
          name: "PDF Report",
          role: "Export Format",
          description: "Compiles formatted meeting takeaways and engagement graphs."
        }
      ]
    },
    problem: "Post-meeting action item extraction is time-consuming and prone to human omission, while passive video calls lack engagement insights.",
    solution: "Combines real-time WebRTC audio/video feeds with Gemini API intelligence and MediaPipe engagement telemetry to produce structured minutes of meeting.",
    githubUrl: "https://github.com/dhanush-j-dev/Meeting-summarizer-app"
  }
];
