import "./Location.css";
import profile from "../data/profile";

function Location() {
  const { city, state, country } = profile.location;

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
          <h3>{city}</h3>
          <p>
            {state}, {country}
          </p>

          <div className="location-details">
            <div>
              <strong>City</strong>
              <span>{city}</span>
            </div>
            <div>
              <strong>State</strong>
              <span>{state}</span>
            </div>
            <div>
              <strong>Country</strong>
              <span>{country}</span>
            </div>
          </div>
        </div>

        <div className="map-box">
          <iframe
            title={`${city} Location`}
            src={`https://www.google.com/maps?q=${city},${state},${country}&output=embed`}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;