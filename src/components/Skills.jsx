import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiDjango,   SiLinux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills & Technologies</h2>
      <p className="skills-intro">
        I value clean code, maintainability, and continuous learning.  
        These are the tools and technologies I work with:
      </p>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3 (Flexbox, Grid)</p>
        </div>

        <div className="skill-card">
          <FaJsSquare className="skill-icon" />
          <p>JavaScript (ES6+)</p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <p>React (Hooks & Components)</p>
        </div>

        <div className="skill-card">
          <FaPython className="skill-icon" />
          <p>Python</p>
        </div>

        <div className="skill-card">
          <SiDjango className="skill-icon" />
          <p>Django </p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          <p>Git Workflow</p>
        </div>

        <div className="skill-card">
          <FaGithub className="skill-icon" />
          <p>GitHub</p>
        </div>

        <div className="skill-card">
          <  VscVscode className="skill-icon" />
          <p>VS Code</p>
        </div>

        <div className="skill-card">
          <SiLinux className="skill-icon" />
          <p>Linux Basics</p>
        </div>

      </div>
    </section>
  );
}
