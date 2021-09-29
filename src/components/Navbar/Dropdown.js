import { useRef,useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./Dropdown.css";

export default function({closeSidebar}){
    const [isActive,toggleActive] = useState(false);

    useEffect(()=>{
        document.addEventListener('click',setInactive);

        return ()=>{document.removeEventListener('click',setInactive);}
    })
    useEffect(()=>{
    },[isActive])
    function setInactive(e){
        
        toggleActive(false);
    }
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