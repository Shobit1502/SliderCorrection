import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import Dropdown from "./Dropdown";
import { WhatsApp, Email, Hamburger } from "icons/icons";
import "./Navbar.css";

export default function Navbar() {
  // In mobile view if ham button is clicked
  const [sidebarDisplay, setSidebarDisplay] = useState(false);

  // Mobile view to show or hide sideBar
  function handleClick(e) {
    setSidebarDisplay((state) => !state);
  }
  // Mobile view closes the side bar
  function closeSidebar() {
    setSidebarDisplay(false);
  }

  return (
    <nav className={"navbar-container"}>
      <div className={"fixed-container-size navbar"}>
        <div className={"navbar-links-container"}>
          <div onClick={handleClick} className={"hamburger-icon"}>
            <Hamburger className={""} />
          </div>

          <img
            className={"navbar-logo"}
            src="assets/img/navbar/koyo-logo.png"
          />

          {/* UPDATE HASH LINKS HERE IN FUTURE */}
          <ul className={"navbar-links"}>
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <Dropdown closeSidebar={closeSidebar} />
            </li>
            <li>
              <HashLink smooth to="/#Jobarea">
                Jobs
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        <div className={"navbar-controls"}>
          <a target={"_blank"} href="https://wa.me/919867910690">
            <WhatsApp className={"navbar-icon"} />
          </a>

          <a
            target={"_blank"}
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#"
          >
            <Email className={"navbar-icon"} />
          </a>

          <button className="sign-in-button">Sign in</button>
        </div>
      </div>

      <ul className={`navbar-links-mobile ${sidebarDisplay ? "active" : ""}`}>
        <li onClick={handleClick}>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li>
          <Dropdown closeSidebar={closeSidebar} />
        </li>
        <li onClick={handleClick}>
          <HashLink smooth to="/#Jobarea">
            Jobs
          </HashLink>
        </li>
        <li onClick={handleClick}>Contact</li>
      </ul>
    </nav>
  );
}

/*

    Further dev guide,
    DONT WORRY ABOUT ALL THESE HANDLERS LIKE handleClick THEY ARE MAINLY FLAGS FOR MOBILE VIEW

    Most of the work here will be just to add or replace, hash links or links to already available options!

    All the responsibilites of dropdown is present in Dropdown component

*/
