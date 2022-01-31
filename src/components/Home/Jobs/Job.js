import React, { useState } from "react";
import Modal from "react-modal";
import "./Jobs.css";
import downloadfile from "./Resources/java.pdf";
import ReactMarkdown from "react-markdown";
import ModalVideo from "react-modal-video";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

import Jobdata from "./JobsData";
Modal.setAppElement("#root");

function Job(props) {

  const {content,setContent,readMoreClicked,setReadMoreClicked}=props;


  const readMoreHandler = (id) => {
    if (readMoreClicked === id) {
      return setReadMoreClicked(null);
    }
    const Contentdata = Jobdata.find((data) => data.id === id);
    setContent(Contentdata);
    setReadMoreClicked(id);
  };

  return (
    <div
      style={{ position: "relative" }}
      className={`col-lg-6  col-sm-12 col-xl-6 p-0  job-type ${props.filter}`}
    >
      {readMoreClicked && content.id === props.id && (
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
      )}
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


        {
          <div
            onClick={() => readMoreHandler(props.id)}
            className="link"
            style={{ color: "black", cursor: "pointer" }}
          >
            Read {readMoreClicked === props.id ? "Less" : "More"}
            {/* {content.id === data.id && readMoreClicked.id ? "Less" : "More"} */}
          </div>
        }
        {readMoreClicked && content.id === props.id &&(<div className="duration">
          <span style={{ color: "#ffc451" }}> Duration</span> : {props.duration}
          <span style={{ color: "#ffc451" }}> Skills :</span>
          {props.skills}
        </div>)}

      {readMoreClicked && content.id === props.id &&(  <div className="centerbuttonform">
          <div className="col-md-12 text-center">
            <button
              type="button"
              className="btn btn-warning btn-sm"
            >
              Apply
            </button>
          </div>
        </div>)}
      </div>

</div>



  );
}

export default Job;
