import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import { ThemeProvider } from "./ThemeContext";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/timeline" element={<Timeline/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>   {/* 👈 Always visible */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
