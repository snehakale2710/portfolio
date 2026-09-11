import React from "react";
import "./GitHub.css";

function GitHub() {
  return (
    <section className="github section" id="github">
      <div className="section-heading">
        <span>GitHub</span>
        <h2>My Coding Activity</h2>
        <p>Explore my repositories and development journey.</p>
      </div>

      <div className="github-container">
        <div className="github-profile">
          <div className="github-avatar">GH</div>

          <h3>Sneha Kale</h3>

          <p>
            Developer | Student | Web Development Enthusiast
          </p>

          <a
            href="https://github.com/snehakale2710"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>

        <div className="github-stats">
          <div>
            <strong>10+</strong>
            <span>Repositories</span>
          </div>

          <div>
            <strong>5+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>100+</strong>
            <span>Commits</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHub;