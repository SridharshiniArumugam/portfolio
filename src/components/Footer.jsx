import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-links">
          <a href="https://github.com/SridharshiniArumugam" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sridharshini-arumugam-b22088247/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sridharshiniece@gmail.com">
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Sridharshini. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
