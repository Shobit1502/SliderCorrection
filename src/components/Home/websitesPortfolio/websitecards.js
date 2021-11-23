import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

import "./websitecards.css";

function Websitecards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [props.flip, props.categoryChanged]);

  return (
    <ReactCardFlip isFlipped={isFlipped} id="react-flip-card">
      <div
        className="flipcard-front flipcard position-relative"
        style={{
          backgroundImage: props.isMobile ? "" : `url('${props.img}')`,
          backgroundRepeat: props.isMobile ? "" : "no-repeat",
          aspectRatio: props.isMobile ? "" : "100 / 51",
        }}
      >
        {props.isMobile && (
          <img src={props.img} className="img-fluid position-fixed" alt="" />
        )}
        <a
          href={props.link}
          rel="noopener noreferrer"
          target="_blank"
          className="btn-demo"
        >
          <button type="button">Demo</button>
        </a>
        <button className="btn-flip" onClick={handleClick}>
          {" "}
          <div className="flip-img-container">
            <img
              src={`/assets/img/websites-portfolio/icons/flip.svg`}
              className="img-fluid"
              alt=""
            />
          </div>
        </button>
      </div>

      <div
        className="flipcard flipcard-back"
        style={{
          backgroundImage: `url('${props.img}')`,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backgroundBlendMode: "lighten",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="website-details">
          {props.about}
          <br />
          <div className="down">
            <b>Technologies: </b>
            {props.tech}
            <br />
            <b>Hosting: </b>
            {props.host}
            <br />
            <b>Find Out More: </b>
            <a
              className="contact-link"
              href=" https://api.whatsapp.com/send/?phone=+91 98679 10690&text&app_absent=0"
              target="_blank"
            >
              <img
                className="contactpic"
                src={`/assets/img/websites-portfolio/icons/whatsapp.svg`}
                alt=""
              />
            </a>{" "}
            <a
              className="contact-link"
              href=" https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#"
              target="_blank"
            >
              <img
                className="contactpic"
                src={`/assets/img/websites-portfolio/icons/email.svg`}
                alt=""
              />
            </a>{" "}
            <a
              className="contact-link"
              href="tel:+919867910690"
              target="_blank"
            >
              <img
                className="contactpic"
                src={`/assets/img/websites-portfolio/icons/output-onlinepngtools.png`}
                alt=""
              />
            </a>
          </div>
        </div>

        <button className="btn-flip" onClick={handleClick}>
          {" "}
          <div className="flip-img-container">
            <img
              src={`/assets/img/websites-portfolio/icons/flip.svg`}
              className="img-fluid"
              alt=""
            />
          </div>
        </button>
      </div>
    </ReactCardFlip>
  );
}

export default Websitecards;
