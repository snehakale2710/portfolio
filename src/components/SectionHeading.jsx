import React from "react";

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;