import "./About.css";
import profileImg from "../assets/profileImg.jpeg"; 

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Sammy Bett" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am <strong>Sammy Bett</strong>, a Software Engineer in the making driven,
            ambitious, and committed to building solutions that matter.
            I design digital experiences that are bold, purposeful, and aligned
            with the future of technology.
          </p>

          <p>
            I specialize in <strong>Frontend Development</strong> with React and CSS,
            and I am actively expanding into <strong>Backend Development</strong> and AI.
            I believe in learning fast, shipping projects, and improving with every step.
          </p>

          <p>
            My journey is not just about code it's about impact. I want to build products
            that solve real community challenges, starting from housing systems for students
            to agricultural value chain solutions. I do things with vision.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span>3+</span>
              <p>Active Projects</p>
            </div>
            <div className="highlight-item">
              <span>Leadership</span>
              <p>Team Collaboration & Mentorship</p>
            </div>
            <div className="highlight-item">
              <span>Innovation</span>
              <p>Problem-Solving Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
