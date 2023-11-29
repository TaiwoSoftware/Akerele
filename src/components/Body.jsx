import React, { useEffect, useState } from "react";
import BodyHeader from "./bodyHeader";
import BodyDetails from "./BodyDetails";
import Skill from "./Skill";
import Project from "./Project";

const Body = () => {
  const [state, setState] = useState(false);

  const handleScroll = () => {
    setState(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div onScroll={handleScroll}>
      <BodyHeader />
      {state && (
        <div className={state}>
          <div className="together">
            <BodyDetails />
          </div>
          <Skill />
          <Project />
        </div>
      )}
    </div>
  );
};

export default Body;
