import React from "react";
import "../styles/home.css"; 
import profilePic from "../assets/headshot.png";

function Home() {
  return (
    <> 
    <div className="p-10">
      <div className="bg-base-100 border border-base-300 shadow-xl rounded-xl overflow-hidden">
    
        {/* Top Header Bar */}
        <div className="bg-base-200 px-4 py-3 flex items-center gap-2 border-b border-base-300">
            {/* Red, Yellow, Green Dots */}
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <section className="headshot-container">
          <div className="headshot-content">
            <div className="status-tag">
              <span className="line"></span>
              PORTLAND, OR • OPEN TO OPPORTUNITIES
            </div>

            <h1>
              Hi, I'm<br />
              Isabella Mann
            </h1>

            <p className="subtitle">• Computer Science Graduate • Software Engineer •</p>

            <div className="badges">
              <span className="badge">Meta • QA Engineer</span>
              <span className="badge">NASA Langley • Software Development Intern</span>
              <span className="badge">Trimble • SDET Intern</span>
              <span className="badge">SHRB Lab • Lead Developer</span>
              <span className="badge">Oregon State University • B.S. CS 2026</span>
            </div>

            <div className="actions">
              <a 
                href="src\assets\IsabellaMann_Resume.pdf"
                download="IsabellaMann_Resume.pdf"
                className="btn primary">
                Download Resume
                </a>
              <a 
                href="https://github.com/mannbella" 
                className="btn" 
                target="_blank" 
                rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/isabella-mann-8a12a6220" 
                className="btn" 
                target="_blank" 
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="headshot-image-wrapper">
            <img src={profilePic} alt="Isabella Mann" className="profile-img"/>

            <div className="floating-card card-top-left">
              <span>Experience</span>
              <strong>3+</strong> Years in Industry
            </div>

            <div className="floating-card card-right">
              <span>Tests Built</span> 
              <strong>200+</strong> Automated
            </div>

            <div className="floating-card card-bottom-center">
              <span>Currently</span> 
              <strong>QA Engineer @ Meta</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
    </> 
  );
}

export default Home;