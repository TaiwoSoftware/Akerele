import React, { useState } from "react";
import BodyHeader from "./bodyHeader";
import BodyDetails from "./BodyDetails";
import Skill from "./Skill";
import Project from "./Project";

const Body = () => {
  const [state, setState] = useState(false);

  const handleScroll = () => {
    setState(!state);
  };
  return (
    <div onScroll={handleScroll}>
      <BodyHeader />
      {state && (
        <div className={state}>
          <BodyDetails />
          <Skill />
          <Project />
        </div>
      )}
    </div>
  );
};

export default Body;
