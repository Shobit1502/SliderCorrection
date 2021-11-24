import React from "react";
import Card from "./Card";

export default function PersonCardWrapper(props) {
  const { person } = props;
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-4 d-flex align-items-stretch teamm">
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
  );
}
