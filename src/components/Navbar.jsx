import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo" style={{color:"rgb(27, 26, 26)"}}>Frontend Engineer - ReactJS</h1>
        {/* Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/timeline" className="nav-link">Timeline</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
