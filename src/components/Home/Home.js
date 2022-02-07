import { useRef, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";


import Header from "components/Home/Header/Header";
import WebsitesPortfolio from "components/Home/websitesPortfolio/websitesPortfolio";
import GraphicsPortfolio from "components/Home/GraphicsPortfolio/GraphicsPortfolio";
import Jobs from "./Jobs/Jobs";
import Contact from "components/Home/Contact/Contact";
import About from "./About/About";
import ServiceSummary from "./ServiceSummary/ServiceSummary";
import Pricing from "./pricing/Pricing"
import PricingD from "./pricing/PricingD"

export default function Home() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  // ref to each section, for auto scrolling of hash links eg- /#header
  const headerRef = useRef(null);
  const websitesRef = useRef(null);
  const graphicsRef = useRef(null);
  const contactRef = useRef(null);

  // to get queries for retaining exact state eg- /?id=1#sec1 ==> id one of sec1 state
  const { search, hash } = useLocation();

  return (
    <>
      <Header refProp={headerRef} />
      <ServiceSummary />
      <WebsitesPortfolio refProp={websitesRef} />
      <GraphicsPortfolio refProp={graphicsRef} />
      <Jobs />
     <PricingD />
      <About />
      <Contact refProp={contactRef} />
    </>
  );
}

/*

Why am I using switch case with ref to each section?
=> This is for auto scrolling.
  Consider a scenerio where I shared a link like "https://koyo.com/#portfolio"
  Have you noticed #portfolio ?
  I want my web page to go to that particular section with id = 'portfolio'
  So, since I have reference to all the sections.
  Now I can get the hash part with useLocation()
  and achieve the required effect by scrolling to the required section reference.
  Please make sure to do the same for other upcoming sections.
*/
