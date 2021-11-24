import React from "react";
import AboutData from "./AboutData";
import PersonCardWrapper from "./PersonCardWrapper";

export default function AboutDesktop() {
  return (
    <div className="row">
      {AboutData.map((person) => (
        <PersonCardWrapper person={person} />
      ))}
    </div>
  );
}
