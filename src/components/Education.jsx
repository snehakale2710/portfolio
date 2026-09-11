import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <span>Education</span>

        <h2>My Educational Journey</h2>

        <p>
          My academic background and qualifications that shaped my technical
          knowledge and career journey.
        </p>
      </div>

      <div className="education-container">

        {/* MCA */}
        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div className="education-content">
            <span className="education-year">2026 - Present</span>

            <h3>Master of Computer Applications (MCA)</h3>

            <h4>
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology,
              Pune
            </h4>

            <p>
              Currently pursuing MCA with a focus on computer applications,
              software development, programming, and emerging technologies.
            </p>

            <div className="education-tags">
              <span>MCA</span>
              <span>Computer Applications</span>
              <span>Programming</span>
              <span>Software Development</span>
            </div>
          </div>
        </div>

        {/* B.Sc */}
        <div className="education-card">
          <div className="education-icon">💻</div>

          <div className="education-content">
            <span className="education-year">Completed 2026</span>

            <h3>B.Sc. Computer Science / ECS</h3>

            <h4>
              Greenfingers College of Computer and Technology, Akluj
            </h4>

            <p>
              Punyashlok Ahilyadevi Holkar Solapur University
            </p>

            <div className="education-result">
              77.84%
            </div>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Web Development</span>
              <span>Programming</span>
              <span>Database</span>
            </div>
          </div>
        </div>

        {/* 12th */}
        <div className="education-card">
          <div className="education-icon">📚</div>

          <div className="education-content">
            <span className="education-year">Completed</span>

            <h3>Higher Secondary Education (12th)</h3>

            <h4>Higher Secondary School</h4>

            <p>
              Completed Higher Secondary Education with a foundation for
              further studies in computer science and technology.
            </p>

            <div className="education-result">
              57.50%
            </div>
          </div>
        </div>

        {/* 10th */}
        <div className="education-card">
          <div className="education-icon">🏫</div>

          <div className="education-content">
            <span className="education-year">Completed</span>

            <h3>Secondary School Certificate (10th)</h3>

            <h4>Secondary Education</h4>

            <p>
              Completed secondary education and developed an early interest
              in learning and technology.
            </p>

            <div className="education-result">
              83.80%
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;