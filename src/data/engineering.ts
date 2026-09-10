import type { ProcessStage } from '../types';

export const engineeringStages: ProcessStage[] = [
  {
    step: "01",
    title: "Understand",
    description: "Understand requirements and user workflows.",
    details: [
      "Analyze business requirements and user personas",
      "Identify core entity relationships and access levels",
      "Scope edge cases and failure modes early"
    ]
  },
  {
    step: "02",
    title: "Design",
    description: "Break applications into frontend, API, business logic and database layers.",
    details: [
      "Draft REST API endpoint specifications",
      "Design normalized relational database schemas",
      "Establish separation of concerns across service layers"
    ]
  },
  {
    step: "03",
    title: "Build",
    description: "Implement clean and maintainable application logic.",
    details: [
      "Write modular, readable Java and Spring Boot code",
      "Apply OOP principles and design patterns",
      "Handle data transformations and business validations"
    ]
  },
  {
    step: "04",
    title: "Secure",
    description: "Apply authentication, authorization and validation where required.",
    details: [
      "Implement JWT stateless tokens and BCrypt hashing",
      "Enforce granular role-based access controls (RBAC)",
      "Centralize exception handling and input sanitization"
    ]
  },
  {
    step: "05",
    title: "Test",
    description: "Use unit and integration testing to verify application behavior.",
    details: [
      "Write automated tests for controllers and service layers",
      "Verify database queries and mock external dependencies",
      "Maintain regression safety with comprehensive test suites"
    ]
  },
  {
    step: "06",
    title: "Deploy",
    description: "Package and deploy applications using tools such as Docker and cloud platforms where applicable.",
    details: [
      "Containerize micro-services with multi-stage Dockerfiles",
      "Configure environment variables and production profiles",
      "Deploy to reliable cloud platforms and verify health checks"
    ]
  }
];
