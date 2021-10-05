import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./Dropdown.css";

export default function({closeSidebar}){

    // flag to show or hide the dropdown
    const [isActive,toggleActive] = useState(false);

    useEffect(()=>{

        // If a user clicks anywhere beyond the dropdown then hide the dropdown for laptops and desktops
        document.addEventListener('click',setInactive);
        return ()=>{document.removeEventListener('click',setInactive);}

    })

    // Hides the dropdown
    function setInactive(e){
        toggleActive(false);
    }

    // show or hide dropdown on click 
    function handleClick(e){
        toggleActive( state => !state);
    }

    return(

        <div onClick={(e)=>e.stopPropagation()} className={"dropdown"}>

            <div className="dropdown-btn">
            <a onClick={handleClick} className="dropdown-title">Services</a>
            </div>

            <ul className={`dropdown-menu ${isActive ? 'active' : ''}` }>
                <li>
                <HashLink onClick={()=>{closeSidebar();handleClick();}} smooth to="#graphicsportfolio">Web Design</HashLink>
                </li>
                <li><HashLink onClick={()=>{handleClick();closeSidebar()}} smooth to="#graphicsportfolio">AI & ML</HashLink></li>
                <li><HashLink onClick={()=>{handleClick();closeSidebar()}} smooth to="#graphicsportfolio">Code & Learn</HashLink></li>
                <li><HashLink onClick={()=>{handleClick();closeSidebar()}} smooth to="#graphicsportfolio">Branding Solutions</HashLink></li>
            </ul>
            
        </div>
    )
}