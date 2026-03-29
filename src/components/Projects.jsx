import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Sales Forecasting Dashboard",
    client: "McDonald’s – US Client",
    company: "Accenture",
    role: "App Development Senior Analyst (UI Developer)",
    year: "Aug 2024 – Present",
    description:
      "A web-based dashboard for McDonald’s US team to forecast multi-year sales trends. The application integrates machine learning predictions with interactive charts, enabling business stakeholders to compare actual vs forecast data and plan strategies effectively.",
    tech: ["React", "Redux Toolkit", "Axios", "Material UI", "Jest"]
  },
  {
    title: "Enterprise Application UI",
    client: "World Bank Group – US Client",
    company: "Cognizant",
    role: "Associate (UI Developer)",
    year: "Dec 2020 – Aug 2024",
    description:
      "An enterprise-grade application for the World Bank Group, designed to streamline internal workflows. The UI was built with reusable React components, responsive layouts, and robust API integrations to ensure scalability and cross-browser compatibility.",
    tech: ["React", "Context API", "React Hooks", "Fetch API", "Flexbox", "CSS"]
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">{proj.title}</h3>
            <span className="project-meta">
              {proj.company} | {proj.role} | {proj.year}
            </span>
            <span className="project-client">{proj.client}</span>
            <p className="project-desc">{proj.description}</p>

            {/* Tech stack badges */}
            <div className="project-tech">
              {proj.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
