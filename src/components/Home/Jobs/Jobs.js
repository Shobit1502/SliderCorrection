import React from "react";
import Jobdata from "./JobsData";
import Job from "./Job";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
import "./Jobs.css";
import { useState, useRef, useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button'
import { WhatsApp, Email} from "icons/icons";

// import ApplicationModal from "./ApplicationModal";

import { useMemo } from "react";

function Jobs(props) {
  const [readMoreClicked, setReadMoreClicked] = useState(false);
  const [content, setContent] = useState({});
  const [size, setSize] = useState({
      x: window.innerWidth,
      y: window.innerHeight,
  });
  const updateSize = () =>
      setSize({
          x: window.innerWidth,
          y: window.innerHeight,
      });
  // Add all the filters for level 1 and level 2 here
  let filter1 = useMemo(() => ["Permanent", "Internship"], []);
  let filter2 = useMemo(
    () => ["Web Design", "Graphics", "Robotics", "AI & ML"],
    []
  );
  const [Worktype, setWorktype] = useState(filter1[0]);
  const [Workcategory, setWorkcategory] = useState(filter2[0]);
  const [num,setNum]=useState(0);
  // here
  // used to show arrow in filter1 container to scroll
  const [f1arrowvisible, setf1arrowvisible] = useState(false);
  const [f2arrowvisible, setf2arrowvisible] = useState(false);
  const [popover, setPopover] = React.useState(false);

  const handleClick = (event) => {
    setPopover(prev=>!prev);
  };



  let portfolioref = useRef();
  let filterscroller1 = useRef();
  let filterscroller2 = useRef();
  useEffect(()=>{
    let x=0;
    Jobdata.forEach(function (job) {
      if(job.jobFilterLevel1 === Worktype &&job.jobFilterLevel2 === Workcategory)
      x++;
    });

    setNum(x);
    window.onresize = updateSize;
  },[Workcategory,Worktype])
  async function addArrowScroll() {
    if (
      filterscroller1.current !== undefined &&
      filterscroller2.current !== undefined
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



  let split=200;
  let y=window.innerWidth;
  if(y>600){
    split=200;
  }
  else if(y>400&&y<600){
    split=100
  }
  else{
    split=50;
  }

  let jobopenings = Jobdata.map(
    (job, index) =>
      job.jobFilterLevel1 === Worktype &&
      job.jobFilterLevel2 === Workcategory ?(true):(false)
  );
  const readMoreHandler = (id) => {
    if (readMoreClicked === id) {
      return setReadMoreClicked(null);
    }
    const Contentdata = Jobdata.find((data) => data.id === id);
    let x=0;
    Jobdata.forEach(function (job) {
      if(job.jobFilterLevel1 === Worktype &&job.jobFilterLevel2 === Workcategory)
      x++;
    });
    console.log(x);
    setNum(x);
    setContent(Contentdata);
    setReadMoreClicked(id);
  };
  return (
    <>

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
                          e === Worktype ? "is-checked " : ""
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
          {jobopenings.every((elem) => elem === false) ? (
            <div className="d-flex flex-column my-3 noblog__txt align-items-center">
              <img className="w-50" src="../../../assets/commingSoon.png" alt="" />
              <h1 style={{ fontSize: "1.2rem" }} className="text-center my-3">
                We currently do not have any openings in this area. Please check our
                other offerings or check back in a few weeks.
              </h1>
            </div>
          ) : (
            <div className="long no-gutters ">
              <div className="grid no-gutters">
                <div
                  ref={portfolioref}
                  className="row portfolio-container no-gutters joinourteam handleitems"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {Jobdata.map(
                    (job, index) =>
                      job.jobFilterLevel1 === Worktype &&
                      job.jobFilterLevel2 === Workcategory&&(
                        <div
                                key={index}
                                className={'bg-white showcase_item p-4 '+(num===1?"showcase_item--single":" ")}
                            >

                                  <div className="showcase_item__content">
                                  {job.id!==readMoreClicked&&(
                                    <React.Fragment>
                                    <h3 className="title">
                                        {job.topic}
                                    </h3>
                                    <div className="keywords">
                                      Keywords: <i>{job.keywords}</i>
                                    </div>
                                    <div className="span-in-div" >
                                      <span className="applicationId"><strong>ID:</strong> {job.appID}</span>
                                      {"  "}
                                      <span className="deadline"><strong>Deadline:</strong> {job.date}</span>
                                    </div>
                                    <div className="duration">
                                      <strong>Duration:</strong> {job.duration}
                                    </div>
                                    <p className="showcase_item_body" id="show_items">

                                            {job.projectdescription.slice(0,split)}<strong>...</strong>

                                    </p>
                                    </React.Fragment>
                                  )}
                                    {job.id===content.id&&(<p className="showcase_item_body" id="show_items">
                                        {content.id === job.id && readMoreClicked&& (
                                            <React.Fragment>
                                              <ReactMarkdown>{content.projectdescription}</ReactMarkdown>
                                              <div className={"apply_popover " }>
                                                <div className={"apply_popover--links " +(popover?" ":"display--none")}>
                                                <a target={"_blank"} href="https://wa.me/919867910690" rel="noopener noreferrer">
                                                  <WhatsApp className={"navbar-icon"} />
                                                </a>
                                                <a
                                                  target={"_blank"}
                                                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#"
                                                  rel="noreferrer noopener"
                                                >
                                                  <Email className={"navbar-icon"} />
                                                </a>
                                                </div>

                                                <button className="apply_popover--button"  onClick={handleClick}>
                                                  Apply Now
                                                </button>
                                              </div>
                                            </React.Fragment>
                                        ) }
                                    </p>)}
                                    <div
                                        onClick={() => {readMoreHandler(job.id)
                                        console.log(content);}}
                                        className="link"
                                        style={{ color: "black", cursor: "pointer" }}
                                    >
                                        Read{" "}
                                        {readMoreClicked === job.id ? "Less" : "More"}
                                        {/* {content.id === job.id && readMoreClicked.id ? "Less" : "More"} */}
                                    </div>
                                </div>
                            </div>

                  ))}
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
