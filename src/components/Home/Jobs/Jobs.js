import React from "react";
import Jobdata from "./JobsData";
import Job from "./Job";
import Modal from "react-modal";
import "./Jobs.css";
import { useState, useRef, useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
// import ApplicationModal from "./ApplicationModal";
import InputSkills from "./InputSkills";
import { useMemo } from "react";

function Jobs(props) {
  // Add all the filters for level 1 and level 2 here
  let filter1 = useMemo(() => ["Permanent", "Internship"], []);
  let filter2 = useMemo(
    () => ["Web Design", "Graphics", "Robotics", "AI & ML"],
    []
  );
  const [Worktype, setWorktype] = useState(filter1[0]);
  const [Workcategory, setWorkcategory] = useState(filter2[0]);
  // here
  // used to show arrow in filter1 container to scroll
  const [f1arrowvisible, setf1arrowvisible] = useState(false);
  const [f2arrowvisible, setf2arrowvisible] = useState(false);

  let portfolioref = useRef();
  let filterscroller1 = useRef();
  let filterscroller2 = useRef();
  async function addArrowScroll() {
    if (
      filterscroller1.current != undefined &&
      filterscroller2.current != undefined
    ) {
      if (
        filterscroller1.current.scrollWidth >
        filterscroller1.current.offsetWidth
      ) {
        setf1arrowvisible(true);
      } else setf1arrowvisible(false);
      if (
        filterscroller2.current.scrollWidth >
        filterscroller2.current.offsetWidth
      ) {
        setf2arrowvisible(true);
      } else setf2arrowvisible(false);
    }
  }
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

  // Modal logics
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [err, setErr] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [blinks, setBlinks] = useState({
    name: false,
    email: false,
    availability: false,
    period: false,
    skill1: false,
    skill2: false,
    skill3: false,
    skill4: false,
    CVFile: false,
  });
  const [applicationDetails, setApplicationDetails] = useState({
    jobID: "",
    applicantname: "",
    applicantemail: "",
    phone: "",
    available_inhours: "",
    available_inmonths: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skills: "",
    otherurl1: "",
    otherurl2: "",
    otherurl3: "",
    otherurl4: "",
    otherurl5: "",
    CVFile: null,
  });
  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    document.getElementById("title2").style.color = "#000000";
    document.getElementById("title2").style.fontFamily = "Arial";
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function closeModal1() {
    setIsOpen1(false);
    setErr("");
  }
  function closeModal3() {
    setIsOpen3(false);
    setErr("");
  }
  function openModal2() {
    setIsOpen1(false);
    setIsOpen2(true);

    setIsOpen3(false);
  }
  function openModal1() {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  }
  const handleCV = (e) => {
    if (e.target.files[0].size > 2097152) {
      alert("give file size less than 2MB");
      setApplicationDetails({ ...applicationDetails, CVFile: null });
    } else {
      setApplicationDetails({
        ...applicationDetails,
        CVFile: e.target.files[0],
      });
    }
  };
  const handleSkills = (skills) => {
    setApplicationDetails({ ...applicationDetails, skills: skills });
    var s = applicationDetails;
    s["skills"] = skills;
    localStorage.setItem(applicationDetails.jobID, JSON.stringify(s));
  };
  function openModal3() {
    setIsOpen3(true);
    setIsOpen1(false);
    setIsOpen2(false);
  }
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    var ee = "";
    var ef = "";

    if (
      name === "applicantemail" &&
      value !== "" &&
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
    ) {
      ef = "Please enter a valid email";
    }
    if (name === "available_inhours") {
    }
    setErr(ee);
    setErrEmail(ef);
    setApplicationDetails({ ...applicationDetails, [name]: value });
    let s;
    if (name === "available_inhours" || name === "available_inmonths") {
      s = JSON.parse(sessionStorage.getItem(applicationDetails.jobID));
      s[name] = value;
      sessionStorage.setItem(applicationDetails.jobID, JSON.stringify(s));
    } else {
      s = JSON.parse(localStorage.getItem(applicationDetails.jobID));
      s[name] = value;
      localStorage.setItem(applicationDetails.jobID, JSON.stringify(s));
    }
  };
  function openForm(id) {
    setBlinks({
      name: false,
      email: false,
      availability: false,
      period: false,
      skill1: false,
      skill2: false,
      skill3: false,
      skill4: false,
      CVFile: false,
    });
    setErrEmail("");
    var details = JSON.parse(localStorage.getItem(id));
    var details1 = JSON.parse(sessionStorage.getItem(id));
    if (details !== null && details1 != null) {
      setApplicationDetails({
        jobID: details.jobID,
        applicantname: details.applicantname,
        applicantemail: details.applicantemail,
        available_inhours: details1.available_inhours,
        available_inmonths: details1.available_inmonths,
        skill1: details.skill1,
        skill2: details.skill2,
        skill3: details.skill3,
        skill4: details.skill4,
        skills: details.skills,
        otherurl1: details.otherurl1,
        otherurl2: details.otherurl2,
        otherurl3: details.otherurl3,
        otherurl4: details.otherurl4,
        otherurl5: details.otherurl5,
        CVFile: details.CVFile,
      });
    } else if (details != null && details1 == null) {
      setApplicationDetails({
        jobID: details.jobID,
        applicantname: details.applicantname,
        applicantemail: details.applicantemail,
        available_inhours: "",
        available_inmonths: "",
        skill1: details.skill1,
        skill2: details.skill2,
        skill3: details.skill3,
        skill4: details.skill4,
        skills: details.skills,
        otherurl1: details.otherurl1,
        otherurl2: details.otherurl2,
        otherurl3: details.otherurl3,
        otherurl4: details.otherurl4,
        otherurl5: details.otherurl5,
        CVFile: details.CVFile,
      });
      sessionStorage.setItem(
        details.jobID,
        JSON.stringify({ available_inhours: "", available_inmonths: "" })
      );
    } else {
      setApplicationDetails({
        jobID: id,
        applicantname: "",
        applicantemail: "",
        available_inhours: "",
        available_inmonths: "",
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skills: "",
        otherurl1: "",
        otherurl2: "",
        otherurl3: "",
        otherurl4: "",
        otherurl5: "",
        CVFile: null,
      });
      var s = applicationDetails;
      s.jobID = id;
      delete s["available_inhours"];
      delete s["available_inmonths"];
      localStorage.setItem(id, JSON.stringify(s));
      sessionStorage.setItem(
        id,
        JSON.stringify({ available_inhours: "", available_inmonths: "" })
      );
    }

    setIsOpen1(false);
    setIsOpen2(true);

    setIsOpen3(false);
  }

  window.addEventListener("resize", () => {
    addButtonscroll();
    addArrowScroll();
  });
  useEffect(() => {
    addArrowScroll();
  }, []);
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
          openForm={openForm}
          id={job.appID}
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
          key={job.appID}
        />
      );
    }
  });
  return (
    <>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal1"
        id="modal1"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal1}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        Any Other Uploads
        <br />
        <br />
        <div className="form-row ">
          <div className="col">
            <input
              type="text"
              name="otherurl1"
              className="form-control form-control-sm  "
              id="otherurls1"
              value={applicationDetails.otherurl1}
              onChange={handleInput}
              placeholder="Portfolio URL"
            ></input>
          </div>
          <div className="col">
            <input
              type="text"
              name="otherurl2"
              className="form-control form-control-sm "
              id="otherurls2"
              value={applicationDetails.otherurl2}
              onChange={handleInput}
              placeholder="Project URL"
            ></input>
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="otherurl3"
              className="form-control form-control-sm  "
              id="otherurls3"
              value={applicationDetails.otherurl3}
              onChange={handleInput}
              placeholder="Website URL"
            ></input>
          </div>
          <div className="col">
            {" "}
            <input
              type="text"
              name="otherurl4"
              className="form-control form-control-sm "
              id="otherurls4"
              value={applicationDetails.otherurl4}
              onChange={handleInput}
              placeholder="Photo URL"
            ></input>
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="otherurl5"
              className="form-control form-control-sm  "
              id="otherurls5"
              value={applicationDetails.otherurl5}
              onChange={handleInput}
              placeholder="Video URL"
            ></input>
          </div>
          <div className="col"></div>
        </div>
        <br />
        <InputSkills onAdd={handleSkills} skills={applicationDetails.skills} />
        <br />
      </Modal>

      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Example Modal3"
        className="Modal2"
        overlayClassName="Overlay2"
        id="modal3"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal3}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        <div className="notice">
          Information in<span style={{ color: "red" }}> red </span>is mandatory
          <span style={{ color: "red" }}> * </span>
        </div>
        <br />
        <div className="form-group cv-input">
          <p>
            {applicationDetails.CVFile == null
              ? "Upload CV*, pdf/doc/docx, max 2 MB"
              : applicationDetails.CVFile.name}
          </p>
          <input
            type="file"
            name="CVFile"
            className="form-control-file border border-danger rounded"
            id="CVFile"
            accept=".pdf,.doc,.docx"
            onChange={handleCV}
            required
          />
        </div>
        <div className="formerror" id="formerror">
          <span style={{ color: "red" }}>Please fill the CV</span>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-warning btn-sm float-right"
          // disabled={(applicationDetails.applicantname===""||applicationDetails.applicantemail===""||applicationDetails.available_inhours===""||applicationDetails.available_inmonths===""||applicationDetails.skill1===""||applicationDetails.skill2===""||applicationDetails.skill3===""||applicationDetails.skill4===""||applicationDetails.CVFile==null)}
          onClick={() => {}}
          // onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        contentLabel="Example Modal2"
        className="Modal"
        overlayClassName="Overlay"
        id="modal2"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={closeModal2}
        >
          x
        </button>
        <div className="md-stepper-horizontal yellow">
          <div className="md-step active">
            <div className="md-step-circle" onClick={openModal2}>
              <span>1</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal1}>
              <span>2</span>
            </div>

            <div className="md-step-optional">Optional</div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle" onClick={openModal3}>
              <span>3</span>
            </div>

            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
        </div>

        <h5 id="title2" className="text-center">
          {" "}
        </h5>
        <div className="notice">
          Information in<span style={{ color: "red" }}> red </span>is mandatory
          <span style={{ color: "red" }}> * </span>
        </div>
        <br />
        <form action="" onSubmit={() => {}} formNoValidate>
          <div className="form-row">
            <div className="col">
              <div className="form-group ">
                <input
                  type="text"
                  name="applicantname"
                  className={
                    applicationDetails.applicantname === "" &&
                    blinks.name == true
                      ? "form-control form-control-sm border border-danger highlight-item"
                      : "form-control form-control-sm border border-danger"
                  }
                  id="exampleInputname2"
                  placeholder="Name*"
                  value={applicationDetails.applicantname}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group ">
                <input
                  type="email"
                  name="applicantemail"
                  className={
                    applicationDetails.applicantemail === "" &&
                    blinks.email == true
                      ? "form-control form-control-sm border border-danger highlight-item"
                      : "form-control form-control-sm border border-danger"
                  }
                  id="exampleInputEmail2"
                  placeholder="Email ID*"
                  onChange={handleInput}
                  value={applicationDetails.applicantemail}
                />
                <div className="feedback">{errEmail}</div>
              </div>
            </div>
          </div>

          <br />
          <div className="form-row">
            <div className="col">Availibility</div>
            <div className="col">
              <div className="form-group w-100 p-0">
                <select
                  name="available_inhours"
                  className={
                    applicationDetails.available_inhours === "" &&
                    blinks.availability == true
                      ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                      : "form-control form-control-sm border border-danger selectpicker"
                  }
                  id="selectboxhours"
                  onChange={handleInput}
                  value={applicationDetails.available_inhours}
                  data-width="200px"
                >
                  <option value="" selected>
                    Hours/Week*
                  </option>
                  <option value="10Hr/Week">10 Hr/Week</option>
                  <option value="15Hr/Week">15 Hr/Week</option>
                  <option value="20Hr/Week">20 Hr/Week</option>
                  <option value="30Hr/Week">30 Hr/Week</option>
                  <option value="Full Time">Full Time</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="form-group w-100 p-0">
                <select
                  name="available_inmonths"
                  className={
                    applicationDetails.available_inmonths === "" &&
                    blinks.period == true
                      ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                      : "form-control form-control-sm border border-danger selectpicker"
                  }
                  id="selectboxmonths"
                  value={applicationDetails.available_inmonths}
                  onChange={handleInput}
                  data-width="200px"
                >
                  <option selected value="">
                    Months*
                  </option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="4 Months">4 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="9 Months">9 Months</option>
                  <option value="Full Time">Full Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="feedback">{err}</div>

          <br />
        </form>

        <div className="form-row">
          <div className="col">Skill 1</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill1"
              className={
                applicationDetails.skill1 === "" && blinks.skill1 == true
                  ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                  : "form-control form-control-sm border border-danger selectpicker"
              }
              value={applicationDetails.skill1}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 2</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill2"
              className={
                applicationDetails.skill2 === "" && blinks.skill2 == true
                  ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                  : "form-control form-control-sm border border-danger selectpicker"
              }
              value={applicationDetails.skill2}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 3</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill3"
              className={
                applicationDetails.skill3 === "" && blinks.skill3 == true
                  ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                  : "form-control form-control-sm border border-danger selectpicker"
              }
              value={applicationDetails.skill3}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col">Skill 4</div>
          <div className="form-group w-50 p-0">
            <select
              name="skill4"
              className={
                applicationDetails.skill4 === "" && blinks.skill4 == true
                  ? "form-control form-control-sm border border-danger highlight-item selectpicker"
                  : "form-control form-control-sm border border-danger selectpicker"
              }
              value={applicationDetails.skill4}
              onChange={handleInput}
              data-width="200px"
            >
              <option value="" selected>
                Rate your skill*
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        <br />
        <br />
        <br />
      </Modal>
      <section
        className="portfolio"
        id="Jobarea"
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
          <div className="d-flex flex-row justify-content-center align-items-center">
            {f1arrowvisible && (
              <AiFillCaretLeft
                onClick={() => (filterscroller1.current.scrollLeft -= 100)}
                size={20}
                style={{ marginLeft: "auto" }}
              />
            )}

            <div
              style={{ width: "90%" }}
              className="row filters filters1 categoryone mx-2"
            >
              <div
                className="ui-group mx-auto d-flex justify-content-center"
                id="cat__one"
              >
                <div
                  ref={filterscroller1}
                  className="button-group"
                  style={{ overflowX: "auto" }}
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
            {f1arrowvisible && (
              <AiFillCaretRight
                size={20}
                style={{ marginRight: "auto" }}
                onClick={() => (filterscroller1.current.scrollLeft += 100)}
              />
            )}
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            {f2arrowvisible && (
              <AiFillCaretLeft
                onClick={() => (filterscroller2.current.scrollLeft -= 100)}
                size={20}
                style={{ marginLeft: "auto" }}
              />
            )}

            <div
              style={{ width: "90%" }}
              className="row filters d-flex justify-content-center filters2 categorytwo mx-2"
            >
              <div
                ref={filterscroller2}
                style={{ overflowX: "auto", width: "unset" }}
                className="button-group "
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
            {f2arrowvisible && (
              <AiFillCaretRight
                size={20}
                style={{ marginRight: "auto" }}
                onClick={() => (filterscroller2.current.scrollLeft += 100)}
              />
            )}
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
