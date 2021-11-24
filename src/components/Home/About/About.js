import React from "react";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import "./About.css";

export default function About() {
  return (
    <section id="team" className="about-team team">
      <div
        className="checkteam-container aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="section-title__2">
          <h2>Team</h2>
          <p>Check Our Team</p>
        </div>
        <div className="teamdesktop">
          <AboutDesktop />
        </div>
        <div className="teammobile">
          <AboutMobile />
        </div>
      </div>
    </section>
  );
}
