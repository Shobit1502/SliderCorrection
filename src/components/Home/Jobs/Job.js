import React, { useState } from "react";
import Modal from "react-modal";
import "./Jobs.css";
import downloadfile from "./Resources/java.pdf";
import ReactMarkdown from "react-markdown";
import ModalVideo from "react-modal-video";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import "./modal-video.scss";

Modal.setAppElement("#root");

function Job(props) {
  const [modalIsOpen4, setIsOpen4] = useState(null);
  const [cururl, setcururl] = useState("");

  const customStyles = {
    overlay: { zIndex: 10000, background: "#000000e3" },
  };

  const [isOpen5, setOpen5] = useState(false);
  function openModal4(index) {
    setIsOpen4(index);
  }

  function closeModal4() {
    setIsOpen4(null);
  }

  return (
    <div
      style={{ position: "relative" }}
      className={`col-lg-6  col-sm-12 col-xl-6 p-0  job-type ${props.filter}`}
    >
      <div className="btnholder1">
        <button
          onClick={() => {
            let el = document.getElementById(`vlcon${props.index}`);
            el.scrollTop += 100;
          }}
        >
          <GoChevronDown size={18} className="expicons" />
        </button>
        <button
          onClick={() => {
            let el = document.getElementById(`vlcon${props.index}`);
            el.scrollTop -= 100;
          }}
        >
          <GoChevronUp className="expicons" />
        </button>
      </div>
      <div
        id={`vlcon${props.index}`}
        className={`vl ${props.isService ? "brad" : ""}`}
      >
        <div className="topic">
          {props.topic}
          <br />
        </div>
        <div className="keywords">
          Keywords: <i>{props.keywords}</i>
        </div>
        <div className="span-in-div" style={{ textAlign: "center" }}>
          <span className="applicationId">ID: {props.appID}</span>
          {"  "}
          <span className="deadline"> {props.date}</span>
        </div>
        <div style={{ lineHeight: "1", paddingBottom: "8px" }}>
          <div className="jobdescription">
            {props.projectdescription} Click{" "}
            <button
              className=" clickhere"
              onClick={() => {
                openModal4(props.index);
              }}
            >
              here
            </button>{" "}
            to read more.
          </div>
        </div>
        <div className="duration">
          <span style={{ color: "#ffc451" }}> Duration</span> : {props.duration}
          <span style={{ color: "#ffc451" }}> Skills :</span>
          {props.skills}
        </div>

        <div className="centerbuttonform">
          <div className="col-md-12 text-center">
            <button
              type="button"
              onClick={() => props.openForm(props.id)}
              className="btn btn-warning btn-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="videomodal">
        <Modal
          isOpen={modalIsOpen4 === props.index}
          onRequestClose={closeModal4}
          style={customStyles}
          contentLabel="Example Modal4"
          className={`Modal4${props.isService ? " Modal4leftpos" : ""}`}
          overlayClassName="Overlay4"
        >
          <ModalVideo
            channel="youtube"
            isOpen={isOpen5}
            videoId={cururl}
            onClose={() => setOpen5(false)}
            className="ModalVid"
          />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {props.videos.map((e, index) => (
                <div
                  className={`carousel-item${
                    index === 0 ? " active" : ""
                  } position-relative`}
                  key={`e.videourl_${index}`}
                >
                  {e.picture && (
                    <img
                      className="d-block  curimage  "
                      src={e.picture}
                      alt="First slide"
                    />
                  )}
                  {e.videourl && (
                    <div style={{ height: !e.picture ? "200px" : "0px" }}>
                      <button
                        id="play-video"
                        className="video-play-button"
                        onClick={() => {
                          setcururl(e.videourl);
                          setOpen5(true);
                        }}
                      >
                        <span></span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <br />
          <div id="snackbar" className="snackk">
            The background is simply the text shown.
          </div>

          <div className="projdesc">
            <div className="projtit">
              <b>{props.projecttitle}</b>
            </div>
            <div className="projkey">
              <span style={{ color: "black" }}>Keywords:</span>{" "}
              <b>
                <i>#Robotics , #CAD, #Simulation, #Controls</i>
              </b>
            </div>
            <b>Project Background</b>:{" "}
            <ReactMarkdown>{props.projectbackground}</ReactMarkdown>
            {props.pdf && (
              <p>
                Click
                <a href={downloadfile} target="_blank" rel="noreferrer">
                  <button className=" clickhere2">
                    <i
                      className="mx-1"
                      style={{ color: "#F19A1E", fontWeight: "bold" }}
                    >
                      here
                    </i>
                  </button>
                </a>
                to know more
              </p>
            )}
            <b>Project Brief:</b>{" "}
            <ReactMarkdown>{props.projectbrief}</ReactMarkdown>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Job;
