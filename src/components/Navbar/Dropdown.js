// import { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";

// import "./Dropdown.css";

// export default function Dropdown({ closeSidebar }) {
//   // flag to show or hide the dropdown
//   const [notActive, setNotActive] = useState(true);

//   useEffect(() => {
//     // If a user clicks anywhere beyond the dropdown then hide the dropdown for laptops and desktops
//     document.addEventListener("click", setActive);
//     return () => {
//       document.removeEventListener("click", setActive);
//     };
//   });

//   const setActive = () => {
//     setNotActive(true);
//   };

//   // Hides the dropdown
//   function setInactive(e) {
//     setNotActive(false);
//   }

//   // show or hide dropdown on click
//   function handleClick(e) {
//     setNotActive((state) => !state);
//     // setNotActive(!notActive);
//     console.log(notActive);
//   }

//   return (
//     <div
//       onClick={(e) => e.stopPropagation()}
//       className={"dropdown"}
//       onMouseEnter={setInactive}
//       onMouseLeave={setActive}
//       // onMouseLeave={() => setNotActive(false)}
//     >
//       <div className="dropdown-btn">
//         <a onClick={handleClick} className="dropdown-title">
//           Services
//         </a>
//       </div>

//       <ul
//         className={`active ${notActive ? "dropdown-menu  menu-dropdown" : ""}`}
//         style={{
//           position: "absolute",
//           width: "180px",
//           padding: 0,
//           listStyle: "none",
//           paddingInlineStart: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.8862745098039215)",
//           zIndex: 500,
//           top: "30px",
//           borderRadius: "4px",
//           transform: "translateY(-10px)",
//           transition: "all 150ms ease-in-out",
//           boxShadow: "0 8px 16px 0 rgb(0 0 0 / 20%)",
//         }}
//       >
//         <li>
// <HashLink
//   onClick={() => {
//     closeSidebar();
//     handleClick();
//   }}
//   smooth
//   to="/#ourwebsites"
// >
//   Web Design
// </HashLink>
//         </li>
//         <li>
// <HashLink
//   onClick={() => {
//     handleClick();
//     closeSidebar();
//   }}
//   smooth
//   to="/#"
// >
//   AI & ML
// </HashLink>
//         </li>
//         <li>
// <HashLink
//   onClick={() => {
//     handleClick();
//     closeSidebar();
//   }}
//   smooth
//   to="/#"
// >
//   Code & Learn
// </HashLink>
//         </li>
//         <li>
// <HashLink
//   onClick={() => {
//     handleClick();
//     closeSidebar();
//   }}
//   smooth
//   to="#graphicsportfolio"
// >
//   Branding Solutions
// </HashLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import ReactModal from "react-modal";
import ComingSoon from '../Home/Header/ComingSoon'
import "./Dropdown.css";
function Dropdown(props) {
  const [toggleActive, setToggleActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [title,setTitle ]=useState('')
  const setActive = () => {
    setToggleActive(true);
  };
  const setInActive = () => {
    setToggleActive(false);
  };
  const clickHandler = (id) => {
    // if (id == null) {
      setIsOpen(true);
      setTitle(id)
    // }
  };
  const closeModal = () => {
    console.log("Close request");
    setIsOpen(false);
  };
  return (
    <div className="nav-services-dropdown">
      <div
        className="dropdown"
        onMouseEnter={setActive}
        onMouseLeave={setInActive}
      >
        <a
          className="dropdown-toggle"
          href="/"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </a>

        <ul className={`dropdown-menu `} aria-labelledby="dropdownMenuLink">
          <li>
            <HashLink
              onClick={() => {
                props.closeSidebar();

              }}
              smooth
              to="/#ourwebsites"
            >
              Web Design
            </HashLink>
          </li>
        
          <li>
            <HashLink
              onClick={() => {
                props.closeSidebar();
                clickHandler("eCommerce")
              }}
              smooth
              to="/#"
            >
             eCommerce
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={() => {
                props.closeSidebar();
              }}
              smooth
              to="#graphicsportfolio"
            >
              Branding Solutions
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={() => {
                props.closeSidebar();
                clickHandler("AI & ML")
              }}
              smooth
              to="/#"
            >
              AI & ML
            </HashLink>
          </li>
        </ul>
      </div>
      <ReactModal
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        isOpen={isOpen}
        className="popUpRoot"
        overlayClassName="popUpOverlay"
        shouldCloseOnOverlayClick={true}
      >
        <ComingSoon title={title} onClick={closeModal} />
      </ReactModal>
    </div>
  );
}

export default Dropdown;
