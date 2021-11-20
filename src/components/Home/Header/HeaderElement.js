import React, { useState } from "react";
import { Modal } from "bootstrap";
import ReactModal from "react-modal";
import { HashLink } from "react-router-hash-link";
import ComingSoon from "./ComingSoon";
import "./ComingSoon.css";
import "./HeaderElement.css";

const HeaderElement = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = data.id;
  const clickHandler = () => {
    if (id == null) {
      setIsOpen(true);
    }
  };
  return (
    <>
      <HashLink to={`/#${id}`} smooth onClick={clickHandler}>
        <div className="header-icon-box">
          <img src={data.image} alt={data.name} />
          <h3>{data.name}</h3>
        </div>
      </HashLink>
      <ReactModal
        onRequestClose={() => setIsOpen(false)}
        isOpen={isOpen}
        className="popUpRoot"
      >
        <ComingSoon title={data.name} />
      </ReactModal>
    </>
  );
};

export default HeaderElement;
