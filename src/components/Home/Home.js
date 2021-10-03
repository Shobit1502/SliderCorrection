import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "components/Home/Header/Header";
import GraphicsPortfolio from "components/Home/GraphicsPortfolio/GraphicsPortfolio";

export default function Home(){

    // ref to each section, for auto scrolling of hash links eg- /#header
    const headerRef = useRef(null); 
    const graphicsRef = useRef(null);

    // to get queries for retaining exact state eg- /?id=1#sec1 ==> id one of sec1 state
    const {search, hash} = useLocation();

    useEffect(()=>{

        // auto scrolling by hash links eg /#hello => scrolls to id='hello' section
        switch (hash) {
            case "#home":
                headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              break;
            case "#graphicsportfolio":
                graphicsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
              break;
            default:
              console.log("none");
              break;
          }

    })

    return( <>
    <Header refProp = {headerRef} />
    <GraphicsPortfolio refProp={graphicsRef} />
    </>)
} 