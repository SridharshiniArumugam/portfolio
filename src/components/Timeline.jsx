import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

const timeline = [
  {
    year: "Aug 2024 - Present",
    role: "Senior Analyst at Accenture, Chennai",
    description: [
      "Developed a scalable sales forecasting UI with help of Machine Learning Team and used their sales predictions for projecting multi-year business trends.",
      "Built reusable and modular React components improving development efficiency by 30%.",
      "Integrated REST APIs using Axios and managed global state with Redux Toolkit.",
      "Implemented responsive UI based on Figma designs ensuring pixel-perfect delivery.",
      "Developed dynamic data visualization using charts for actual vs forecast analysis using Material UI.",
      "Increased performance through component optimization and lazy loading.",
      "Wrote unit test cases using Jest improving code quality and reliability.",
      "Collaborated with cross-functional teams in Agile sprint cycles."
    ]
  },
  {
    year: "Dec 2020 - Aug 2024",
    role: "Associate at Cognizant, Chennai",
    description: [
      "Designed and developed reusable UI components for enterprise application.",
      "Implemented API integrations using Fetch and handled JSON/XML responses.",
      "Built responsive layouts using Flexbox and CSS.",
      "Managed application state using Context API and React Hooks.",
      "Improved application performance and cross-browser compatibility.",
      "Developed routing using React Router for seamless navigation."
    ]
  }
];

export default function Timeline() {
  return (
    <section className="timeline">
      <h2 className="timeline-title">Career Timeline</h2>
      <div className="timeline-line">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <span className="timeline-year">{item.year}</span>
              <ul className="timeline-points">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
