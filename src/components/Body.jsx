import React, { useEffect, useState } from "react";
import BodyHeader from "./bodyHeader";
import BodyDetails from "./BodyDetails";
import firstPro from "../images/mobileBox.png";
import secondPro from "../images/movie-web-app.png";
import thirdPro from "../images/shower.png";
import fourthPro from "../images/booker.png";
import sixthPro from "../images/remote.png";
import seventhPro from "../images/studio.png";
import Skill from "./Skill";
import Project from "./Project";

const Body = () => {
  const [state, setState] = useState(false);
  const [mainFinger, setMainFinger] = useState('goDown');

  const handleScroll = () => {
    setState(true);
    setMainFinger('finger')
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div onScroll={handleScroll}>
      <BodyHeader 
        downFinger={mainFinger}
      />
      {state && (
        <div>

        <div className={state}>
          <BodyDetails />
          <Skill />
          <div>
            <h1 className="pro">Projects</h1>
            <Project
              lowerContainer='project'
              src={firstPro}
              alt="Mobile image"
              sizingImage="mobileImage"
              nameOfProject='Mobile Money Box'
              details="This is a mobile money box for online saving and every time you save money it is adding #100 to your account"
              skill="HTML,CSS and JavaScript"
              href=''
              links='Live'
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Body;
