import React from "react";
import AboutData from "./AboutData";
import Card from "./Card";

export default function AboutDesktop() {
  return (
    <div className="teamdesktop">
      <div className="row">
        {AboutData.map((person) => (
          <div className="col-lg-4 col-md-6 mt-4 d-flex align-items-stretch teamm">
            <div className="member-img">
              <img className="img-fluid teamim" alt="" src={person.image} />
              <div
                className="member aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="social"></div>
              </div>
              <Card
                name={person.name}
                role={person.role}
                aboutText={person.about}
                emailLink={person.emailLink}
                linkedInLink={person.linkedInLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
