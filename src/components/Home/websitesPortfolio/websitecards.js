<<<<<<< HEAD
import react from "react";

function Websitecards(props) {
  console.log(props.background);
  console.log(props.link);
  console.log(props.about);
  console.log(props.tech);
  return (
    <button type="button" class="btn btn-primary">
      Primary
    </button>
=======
import React, { useState } from "react";
import { useEffect } from "react";
import ReactCardFlip from "react-card-flip";

import "./websitecards.css";

function Websitecards(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [props.flip]);

  return (
    <ReactCardFlip isFlipped={isFlipped} id="react-flip-card">
      <div
        className="flipcard-front flipcard"
        style={{
          backgroundImage: `url('${props.img}')`,
          backgroundRepeat: "no-repeat",
        }}
      >
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
            <a className="contact-link">
              <img
                className="contactpic"
                src={`/assets/img/websites-portfolio/icons/whatsapp.svg`}
                alt=""
              />
            </a>{" "}
            <a className="contact-link">
              <img
                className="contactpic"
                src={`/assets/img/websites-portfolio/icons/email.svg`}
                alt=""
              />
            </a>{" "}
            <a className="contact-link">
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
>>>>>>> website
  );
}

export default Websitecards;
