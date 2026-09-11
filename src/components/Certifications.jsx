import React from "react";
import "./Certifications.css";

const achievements = [
  {
    icon: "🏆",
    title: "Academic Achievements",
    description:
      "Strong academic performance and continuous learning in computer science.",
  },
  {
    icon: "📜",
    title: "Technical Certifications",
    description:
      "Completed technical courses and certifications in programming and development.",
  },
  {
    icon: "💻",
    title: "Project Training",
    description:
      "Hands-on experience through academic and personal development projects.",
  },
  {
    icon: "🚀",
    title: "Technical Events",
    description:
      "Participated in technology-related learning activities and events.",
  },
];

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="section-heading">
        <span>Achievements</span>
        
      </div>

      <div className="cert-grid">
        {achievements.map((item) => (
          <div className="cert-card" key={item.title}>
            <div>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;