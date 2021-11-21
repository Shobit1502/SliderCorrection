import React from "react";
import "./ComingSoon.css";
import imgSrc from "../../../assets/commingSoon.png";
export default function ComingSoon(props) {
  return (
    <div className="popUpBox" onClick={props.onClick}>
      <div style={{ margin: "16px auto 50px" }}>
        <h1>{props.title}</h1>
      </div>
      <img src={imgSrc} alt="Coming Soon" className="popUpImg" />
      <div style={{ margin: "40px 10% 50px" }}>
        <h4 style={{ lineHeight: "30px" }}>
          We are currently working on this feature and will launch soon!
        </h4>
      </div>
    </div>
  );
}
