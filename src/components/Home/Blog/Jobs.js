import React from "react";
import Jobdata from "./JobsData";
import Modal from "react-modal";
import "./Jobs.css";
import { useState, useRef, useEffect } from "react";
import downloadfile from "./Resources/java.pdf";
import ReactMarkdown from "react-markdown";
import ModalVideo from "react-modal-video";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import "./modal-video.scss";

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
            <button type="button" className="btn btn-warning btn-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="videomodal">
        <Modal
          isOpen={modalIsOpen4 == props.index}
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
                <div className={`carousel-item${index == 0 ? " active" : ""}`}>
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
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
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

function Jobs(props) {
  // Add all the filters for level 1 and level 2 here
  let filter1 = ["Permanent", "Internship"];
  let filter2 = ["Web Design", "Graphics", "Robotics", "AI & ML"];
  const [Worktype, setWorktype] = useState(filter1[0]);
  const [Workcategory, setWorkcategory] = useState(filter2[0]);
  // here

  let portfolioref = useRef();
  async function addButtonscroll() {
    //used to scroll job conatiner without button
    let l = document.getElementsByClassName("vl");

    Array.prototype.filter.call(l, function (el) {
      if (el.scrollHeight > el.offsetHeight) {
        el.firstChild.classList.remove("d-none");
      } else {
        el.firstChild.classList.add("d-none");
      }
    });
  }

  window.addEventListener("resize", () => {
    addButtonscroll();
  });
  useEffect(() => {
    addButtonscroll();
  }, [filter2, filter1]);

  var nojobs = (
    <div className="d-flex flex-column my-3 noblog__txt align-items-center">
      <img className="w-50" src="assets/img/misc/commingSoon.png" alt="" />
      <h1 style={{ fontSize: "1.2rem" }} className="text-center my-3">
        We currently do not have any openings in this area. Please check our
        other offerings or check back in a few weeks.
      </h1>
    </div>
  );
  let jobopenings = Jobdata.map((job, index) => {
    if (
      job.jobFilterLevel1 == Worktype &&
      job.jobFilterLevel2 == Workcategory
    ) {
      return (
        <Job
          index={index}
          skills={job.skills}
          duration={job.duration}
          topic={job.topic}
          videos={job.videos}
          keywords={job.keywords}
          appID={job.appID}
          date={job.date}
          projectdescription={job.projectdescription}
          projectbackground={job.projectbackground}
          projectbrief={job.projectbrief}
          projecttitle={job.projecttitle}
          isService={props.isService}
          pdf={job.pdf}
        />
      );
    }
  });
  return (
    <>
      <section
        className="portfolio"
        id="Blogarea"
        style={{ padding: "40px 0 100px 0px" }}
      >
        <div className="application-container " data-aos="fade-up">
          <div className="section-title__2">
            <h2>Jobs/Internships</h2>
            <p>Join Our Team</p>
            <div className="hiringtext">
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </div>
          </div>

          <div class="row filters filters1 categoryone mx-2">
            <div style={{ width: "unset" }} class="ui-group" id="cat__one">
              <div
                class="button-group"
                id="categoryone"
                data-filter-group="color"
              >
                {filter1.map((e, i) => {
                  return (
                    <button
                      onClick={() => {
                        setWorktype(e);
                      }}
                      className={`${
                        e == Worktype ? "is-checked " : ""
                      }button mb-1`}
                      key={i}
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div class="row filters d-flex justify-content-center filters2 categorytwo mx-2 mb-2">
            <div
              style={{ width: "unset" }}
              class="button-group "
              id="categorytwo"
              data-filter-group="size"
            >
              {filter2.map((e, i) => {
                return (
                  <button
                    onClick={() => {
                      setWorkcategory(e);
                    }}
                    className={`${
                      e == Workcategory ? "is-checked " : ""
                    }button`}
                    key={i}
                  >
                    {e}
                  </button>
                );
              })}
            </div>
          </div>
          {jobopenings.every((elem) => elem == undefined) ? (
            nojobs
          ) : (
            <div className="long no-gutters ">
              <div className="grid no-gutters">
                <div
                  ref={portfolioref}
                  className="row portfolio-container no-gutters joinourteam"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {jobopenings}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Jobs;
