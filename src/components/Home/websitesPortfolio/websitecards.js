import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

import "./websitecards.css";

function Websitecards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [abc, setAbc] = useState(props.toFlip);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [props.toFlip]);
  return <></>;
}

export default Websitecards;
