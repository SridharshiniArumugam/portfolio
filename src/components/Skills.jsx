import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "React", description: "Component-based UI library" },
  {name:"React Hooks", description:"State and lifecycle management in functional components"},
  {name:"context API", description:"Global state management without prop drilling"},
  {name:"React Highcharts", description:"Data visualization in charts" },
  { name: "Redux Toolkit", description: "State management made simple" },
  { name: "Jest", description: "Testing framework for JavaScript" },
  { name: "ExcelJS", description: "Excel file manipulation in JS" },
  { name: "JavaScript (ES6+)", description: "Modern JavaScript features" },
  { name: "HTML5 & CSS3", description: "Building responsive layouts" },
  {name:"SCSS", description:"CSS preprocessor for better styling"},
  {name:"Material UI", description:"React UI framework for faster development"},
  {name:"Bootstrap", description:"CSS framework for responsive design"},
  {name:"Axios", description:"Promise-based HTTP client for API calls"},
  {name:"fetch API", description:"Native browser API for making HTTP requests"},
  { name: "REST APIs", description: "Integrating backend services" },
  {name:"EmailJS", description:"Sending emails from client-side applications"},
  {name:"Figma", description:"Design and prototyping tool"},
  {name:"VS Code", description:"Code editor with powerful extensions"},
  {name:"react-google-recaptcha", description:"Integrating Google reCAPTCHA in React"},
  { name: "Git & GitHub", description: "Version control and collaboration" },
  { name: "Webpack & Babel", description: "Module bundling and transpiling" },
  { name: "Agile Methodologies", description: "Scrum, Kanban, and iterative development" },
  { name: "Performance Optimization", description: "Code splitting, lazy loading, memoization" },
  { name: "Cross-Browser Compatibility", description: "Ensuring consistent experience across browsers" },
];

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
  {skills.map((skill, i) => (
    <motion.div
      key={i}
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-desc">{skill.description}</p>
    </motion.div>
  ))}
</div>
    </section>
  );
}


