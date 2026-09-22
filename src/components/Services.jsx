import "./Services.css";
import SectionHeading from "./SectionHeading";
import services from "../data/services";

function Services() {
  return (
    <section className="services section" id="services">
      <SectionHeading
        label="Services"
        title="What I Can Do"
        description="Development services and solutions I can work on."
      />

      <div className="services-grid">
        {services.map(([icon, title, description]) => (
          <div className="service-card" key={title}>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;