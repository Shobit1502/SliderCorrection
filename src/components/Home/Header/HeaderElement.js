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
  const closeModal = () => {
    console.log("Close request");
    setIsOpen(false);
  };
  useEffect(() => {});

  return (
    <div onClick={isOpen ? closeModal : ""}>
      <HashLink to={`/#${id}`} smooth onClick={clickHandler}>
        <div className="header-icon-box">
          <img src={data.image} alt={data.name} />
          <h3>{data.name}</h3>
        </div>
      </HashLink>
      <ReactModal
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        isOpen={isOpen}
        className="popUpRoot"
        overlayClassName="popUpOverlay"
        shouldCloseOnOverlayClick={true}
      >
        <ComingSoon title={data.name} onClick={closeModal} />
      </ReactModal>
    </div>
  );
};

export default HeaderElement;
