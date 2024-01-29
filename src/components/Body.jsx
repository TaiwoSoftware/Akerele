import React, { useEffect, useState } from "react";
import BodyHeader from "./bodyHeader";
import BodyDetails from "./BodyDetails";
import ticTacToe from '../images/tictac.png';
import studio from '../images/studio.png';
import applicant from '../images/applicant.png';
import recipe from '../images/rest.jpg';
import timer from '../images/timer.png';
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

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
              src={recipe}
              alt='Recipe site '
              sizingImage='mobileImage'
              nameOfProject='Foodie-cooker'
              details='This is a site for chefs at home or restaurant or anywhere to make delicious meals and make life easy for them check the site out.'
              skill="React, css"
              href='https://foodie-cooker.netlify.app/'
              links="Check it  out"
            />

            <Project 
              lowerContainer='project'
              src={ticTacToe}
              alt='Tic tac toe'
              sizingImage='mobileImage'
              nameOfProject='Tic Tac Toe'
              details="It is a tic-tac-toe game with two players. Play with your friends and enjoy the game incase if you are stressed out from work or school."
              skill='HTML, CSS, JavaScript'
              href='https://ex-and-oh-game.netlify.app/'
              links="Check it out"
            />

            <Project 
              lowerContainer='project'
              src={applicant}
              alt='This is an applicant tracking system-image'
              sizingImage='mobileImage'
              nameOfProject='Applicant-Tracking-System'
              details='This is an hackathon project from getLinked.ai and i and my team worked on an apllicant-tracking system where HR can get talents fro the job.'
              skill='Nextjs, Tailwind css'
              href='https://sequidor.netlify.app/'
              links="Check it out"
            />

            <Project 
              lowerContainer='project'
              src={timer}
              alt='This is a timer project'
              sizingImage='mobileImage'
              nameOfProject='Timer'
              details='This is an internship project from Prodigy infoTech where i worked as an intern to work on a timer.'
              skill='HTML, CSS and JavaScript'
              href='https://stoper.netlify.app/'
              links="Check it out"
            />
            <Project 
              lowerContainer='project'
              src={studio}
              alt='studio-image'
              sizingImage='mobileImage'
              nameOfProject='Studio project'
              details='This is a studio project from frontend mentor where i was still learning interactivity using javascript i cannot say much about the project check them out by clicking on the images to go to the site.'
              skill='HTML and CSS'
              href='https://resonant-bombolone-362dcb.netlify.app/'
              links = 'Check it out'
            />
            {/* <marquee>Click on the images to view the site</marquee> */}
          </div>
        </div>
        <Contact />
        </div>
      )}
    </div>
  );
};

export default Body;
