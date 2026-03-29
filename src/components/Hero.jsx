import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profile from '../images/profile.png'; // 👈 add your photo here
import resume from '../Resume/cv.pdf'; // 👈 add your resume here


export default function Hero() {
  return (
    <section className="hero">
      {/* Left side: Landscape photo */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile}
          alt="Sridharshini"
          className="hero-img-landscape"
        />
      </motion.div>

      {/* Right side: Intro + Summary + CV */}
      <div className="hero-right">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi I'm <span className="highlight">Sridharshini</span>
        </motion.h1>

        {/* Professional Summary */}
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Frontend Developer with 5+ years of experience specializing in React.js, JavaScript (ES6+), and
          modern UI development. Expert in building scalable, high-performance web applications with
          reusable components and optimized state management using Redux Toolkit. Strong experience in
          REST API integration, performance optimization, and cross-browser compatibility. Proven track
          record of delivering enterprise-grade solutions in Agile environments.
        </motion.p>

        {/* View My CV button */}
        <motion.a
          href={resume}
          target="_blank"   // opens in new tab
          rel="noopener noreferrer"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My CV
        </motion.a>

      </div>
    </section>
  );
}















