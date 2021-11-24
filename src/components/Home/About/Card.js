import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body border-top-0">
        <div className="head">
          <h5 className="card-title border-top-0">{props.name}</h5>
          <h6 className="card-subtitle mb-2">{props.role}</h6>
        </div>
        <div className="cardsocial">
          <a
            href={props?.emailLink}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="icofont-envelope"></i>
          </a>
          <a href={props?.linkedInLink} className="card-link">
            <i class="icofont-linkedin"></i>
          </a>
        </div>
        <p className="card-text">{props.aboutText}</p>
      </div>
    </div>
  );
}
