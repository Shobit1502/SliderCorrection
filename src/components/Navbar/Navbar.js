import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import Dropdown from "./Dropdown";
import { WhatsApp, Email, Hamburger, } from "icons/icons";
import "./Navbar.css";


export default function Navbar(){

    const [sidebarDisplay, setSidebarDisplay ] = useState(false);
    const pageYOffset = useRef(window.pageYOffset);

    useEffect(()=>{
        if(pageYOffset>500){
            console.log('working');
        }
    },[pageYOffset])

    function handleClick(e){
        setSidebarDisplay(state => !state);
    }

    function closeSidebar(){
        setSidebarDisplay(false);
    }

    return (
        <nav className={"navbar-container"}>
            <div className={"fixed-container-size navbar"}>
                <div className={"navbar-links-container"}>
                    <div onClick={handleClick} className={'hamburger-icon'}>
                        <Hamburger className={""} />
                    </div>
                    <img className={"navbar-logo"} src='assets/img/navbar/koyo-logo.png' />
                    <ul className={"navbar-links"}>
                        <li><HashLink smooth to="/#home" >Home</HashLink></li>
                        <li><Dropdown  closeSidebar={closeSidebar} /></li>
                        <li>Jobs</li>
                        <li>Contact</li>
                    </ul>
                   
                </div>
                <div className={"navbar-controls"}>
                    <WhatsApp className={"navbar-icon"} />
                    <Email className={"navbar-icon"} />
                    <button className="sign-in-button">Sign in</button>
                </div>
            </div>
            <ul className={`navbar-links-mobile ${sidebarDisplay ? 'active' : ''}`}>
                <li onClick={handleClick}><HashLink smooth to="/#home" >Home</HashLink></li>
                <li ><Dropdown closeSidebar={closeSidebar} /></li>
                <li onClick={handleClick}>Jobs</li>
                <li onClick={handleClick}>Contact</li>
            </ul>
                
        </nav>
    )

}