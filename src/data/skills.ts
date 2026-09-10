import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Java", "SQL", "Python", "JavaScript", "TypeScript"],
    iconName: "Code2"
  },
  {
    title: "Core Java",
    skills: ["OOP", "Collections", "Exception Handling", "File Handling", "Database Integration"],
    iconName: "Coffee"
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "JDBC", "JWT"],
    iconName: "Server"
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript"],
    iconName: "Layout"
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite"],
    iconName: "Database"
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Maven", "Docker", "Postman", "VS Code"],
    iconName: "Wrench"
  }
];
