import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location section" id="location">
      <div className="section-heading">
        <span>Location</span>
        <h2>Where I'm Based</h2>
        <p>My professional location and contact information.</p>
      </div>

      <div className="location-container">
        <div className="location-info">
          <div className="location-icon">📍</div>

          <h3>Pune</h3>

          <p>Maharashtra, India</p>

          <div className="location-details">
            <div>
              <strong>City</strong>
              <span>Pune</span>
            </div>

            <div>
              <strong>State</strong>
              <span>Maharashtra</span>
            </div>

            <div>
              <strong>Country</strong>
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="map-box">
          <iframe
            title="Pune Location"
            src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;