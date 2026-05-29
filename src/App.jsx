import { useState, useEffect } from "react";
import "./App.css";

const PHRASES = ["React Developer", "AI Enthusiast", "Problem Solver", "Full Stack Dev"];

const PROJECTS = [
  { num: "01", name: "Rich Text Builder", desc: "Lightweight text editor for formatting content in real time.", tags: ["JavaScript"], url: "https://richtbuilder-vuyi.netlify.app" },
  { num: "02", name: "Tic-Tac-Toe Game", desc: "Responsive UI with smooth interactions and reset functionality.", tags: ["JavaScript"], url: "https://tictactoegamevuyi.netlify.app" },
  { num: "03", name: "Full CRUD Application", desc: "GET, POST, PUT, DELETE operations using Axios, deployed live.", tags: ["React", "Axios"], url: "https://axios-reactcrud.netlify.app" },
  { num: "04", name: "Notes Management App", desc: "Google Keep-inspired app built with React, Redux, and Router.", tags: ["React", "Redux", "Router"], url: "https://google-notes-cloned.netlify.app" },
];

const SKILLS = [
  { group: "Languages", tags: ["Java", "JavaScript", "Python"] },
  { group: "Frontend",  tags: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind"] },
  { group: "GenAI & Core", tags: ["LangChain", "LLMs", "DSA", "OOPs", "REST APIs"] },
  { group: "Tools",     tags: ["Git", "Adobe AE", "Topaz AI"] },
];

const ACHIEVEMENTS = [
  { icon: "🏆", name: "LeetCode — 200+ Problems Solved", desc: "Earned the 50 Days Badge 2025 and 2026.", link: "https://leetcode.com/YudhveerChib" },
  { icon: "📊", name: "NETACAD Data Science Certificate", desc: "Introduction to Data Science — Cisco Networking Academy." },
  { icon: "⚡", name: "Physics Wallah × NSDC — Full Stack Dev with AI", desc: "Completed March 2026." },
  { icon: "📜", name: "Code With Harry — Data Science Certificate", desc: "April 2026 · 48 hours of intensive training." },
  { icon: "📈", name: "Google Cloud Certification — Coursera", desc: "GenAI fundamentals.", link: "https://drive.google.com/drive/folders/1a39Z7nAa7vpXG3vdycU3eeIbGaGamLqh" },
];

export default function App() {


  const [typed, setTyped]   = useState("");
  const [pIndex, setPIndex] = useState(0);   // which phrase
  const [cIndex, setCIndex] = useState(0);   // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = PHRASES[pIndex];

    if (!deleting) {
      // Still typing forward
      setTyped(word.slice(0, cIndex + 1));
      if (cIndex + 1 === word.length) {
        // Finished word — pause then start deleting
        const t = setTimeout(() => setDeleting(true), 1500);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setCIndex(c => c + 1), 100);
        return () => clearTimeout(t);
      }
    } else {
      // Deleting backwards
      setTyped(word.slice(0, cIndex - 1));
      if (cIndex - 1 === 0) {
        // Done deleting — move to next phrase
        setDeleting(false);
        setPIndex(i => (i + 1) % PHRASES.length);
        setCIndex(0);
      } else {
        const t = setTimeout(() => setCIndex(c => c - 1), 60);
        return () => clearTimeout(t);
      }
    }
  }, [pIndex, cIndex, deleting]);

  return (
    <>
     
      <nav>
        <div className="nav-logo">yudhveer.chib</div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      
      <section id="hero">
        <p className="hero-eyebrow">Full Stack Developer · Jammu, India</p>
        <h1 className="hero-name">Yudhveer <span>Chib</span></h1>
        <p className="hero-role">
          {typed}<span className="cursor-blink">|</span>
        </p>
        <p className="hero-desc">
          Building modern web apps with React, AI integration, and real-world problem-solving.
          Currently pursuing B.Tech in CS — working on a RAG-based project.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Get in touch</a>
          <a href="https://github.com/yudhveerchib-furious" target="_blank" rel="noreferrer" className="btn-outline">View GitHub ↗</a>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">200+</div><div className="stat-label">LeetCode problems</div></div>
          <div><div className="stat-num">4</div><div className="stat-label">Deployed projects</div></div>
          <div><div className="stat-num">2025</div><div className="stat-label">Active since</div></div>
        </div>
      </section>

     
      <section id="skills">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & <em>Tech Stack</em></h2>
        <div className="skills-grid">
          {SKILLS.map(({ group, tags }) => (
            <div key={group} className="skill-group">
              <div className="skill-group-title">{group}</div>
              <div className="skill-tags">
                {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

  
      <section id="projects">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <em>Projects</em></h2>
        <div className="projects-grid">
          {PROJECTS.map(({ num, name, desc, tags, url }) => (
            <div key={num} className="project-card">
              <div className="project-num">{num} —</div>
              <div className="project-name">{name}</div>
              <p className="project-desc">{desc}</p>
              <div className="project-tags">
                {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <a href={url} target="_blank" rel="noreferrer" className="project-link">
                {url.replace("https://", "")} ↗
              </a>
            </div>
          ))}
        </div>
      </section>

     
      <section id="achievements">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements & <em>Certs</em></h2>
        <div className="achievements-list">
          {ACHIEVEMENTS.map(({ icon, name, desc, link }) => (
            <div key={name} className="achievement-item">
              <div className="achievement-icon">{icon}</div>
              <div>
                <div className="achievement-name">{name}</div>
                <div className="achievement-desc">{desc}</div>
              </div>
              {link && <a href={link} target="_blank" rel="noreferrer" className="achievement-link">View →</a>}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="about">
        <p className="section-label">Background</p>
        <h2 className="section-title">Edu<em>cation</em></h2>
        <div className="education-list">
          <div className="edu-item">
            <div className="edu-year">2024 – 2028</div>
            <div>
              <div className="edu-name">B.Tech — Computer Science & Engineering</div>
              <div className="edu-place">CMR College of Engineering & Technology, Hyderabad</div>
            </div>
          </div>
          <div className="edu-item">
            <div className="edu-year">Completed</div>
            <div>
              <div className="edu-name">Class 12th & 10th — CBSE</div>
              <div className="edu-place">Army Public School Jammu Cantt</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section-label">Let's talk</p>
        <h2 className="section-title">Get in <em>touch</em></h2>
        <div className="contact-links">
          <a href="mailto:yudhveerchib977@gmail.com" className="contact-link">
            <span>✉</span> yudhveerchib977@gmail.com
          </a>
          <a href="tel:+917889353874" className="contact-link">
            <span>📞</span> +91 78893 53874
          </a>
          <a href="https://github.com/yudhveerchib-furious" target="_blank" rel="noreferrer" className="contact-link">
            <span>⌥</span> GitHub
          </a>
          <a href="https://linkedin.com/in/yudhveerchib" target="_blank" rel="noreferrer" className="contact-link">
            <span>in</span> LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">yudhveer.chib</div>
        <div className="socials">
          <a href="https://github.com/yudhveerchib-furious" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yudhveerchib" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/YudhveerChib" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
        <p className="copy">built with ♥ · 2026</p>
      </footer>
    </>
  );
}
