import "./Certifications.css";
import SectionHeading from "./SectionHeading";
import achievements from "../data/certifications";

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <SectionHeading
        label="Achievements"
        title="Certifications & Milestones"
        description="Recognitions and hands-on experience gained through study and practice."
      />

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