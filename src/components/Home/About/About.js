import React from "react";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import AboutData from "./AboutData";
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
        <AboutDesktop />
        <AboutMobile />
      </div>
    </section>
  );
}

// useEffect(() => {
//     const el = document.querySelector('#testimonials');
//     const bottom =
//       Math.ceil(el.scrollTop + el.offsetHeight) === el.scrollHeight;
//     if(bottom) {
//         toggleModal();
//     }
//     return () => toggleModal()
// }, [])
