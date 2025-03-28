import BodyDetails from "./BodyDetails";
import ticTacToe from "../images/tictac.png";
import studio from "../images/studio.png";
import applicant from "../images/applicant.png";
import recipe from "../images/rest.jpg";
import countdown from "../images/countdown.png";
import Skill from "./Skill";
import solidity from '../images/main-solidity.svg';
import noteChain from '../images/NoteChain.png';
import Project from "./Project";
import reactImage from "../images/icons8-react-50.png";
import cssImage from "../images/icons8-css-logo-50.png";
import htmlImage from "../images/icons8-html-logo-50.png";
import javascriptImage from "../images/icons8-javascript-50.png";
import nextJsImage from "../images/icons8-next.js-50.png";
import tailwindcss from "../images/icons8-tailwind-css-50.png";
import Contact from "./Contact";
import malva from "../images/malva.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import footfind from "../images/footfind-project.png";
import "aos/dist/aos.css";
import typescriptImage from "../images/icons8-typescript.svg";
import PortHeader from "./PortHeader";
import "../App.css";
import { useEffect } from "react";
const Body = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  });
  return (
    <div>
      <PortHeader />
      <div>
        <div>
          <BodyDetails />
          <Skill />
          <h1 className="pro">Projects</h1>
          <div data-aos="flip-right">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={recipe}
                  alt="Recipe site"
                  sizingImage="mobileImage"
                  nameOfProject="Foodie-cooker"
                  details="This is a site for chefs at home or restaurant or anywhere to make delicious meals and make life easy for them check the site out."
                  skill={
                    <div>
                      <img src={reactImage} alt="react image" />
                      <img src={cssImage} alt="css image" />
                    </div>
                  }
                  href="https://foodie-cooker.netlify.app/"
                  links="Check it out"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={footfind}
                  alt="A Shoe Ecommerce Website"
                  sizingImage="mobileImage"
                  nameOfProject="Foot-find"
                  details="Foot-find is an eccomerce website where users can buy shoes to make their fashion complete, there are exclusive features on the site go ahead an check it  out you would be amazed"
                  skill={
                    <>
                      <img src={reactImage} alt="react" />
                      <img
                        src={typescriptImage}
                        className="typescript"
                        alt="typescript"
                      />
                    </>
                  }
                  href="https://footfindsproject.netlify.app/"
                />
              </SwiperSlide>

              {/* blockchain */}
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={noteChain}
                  alt="Dapp"
                  sizingImage="mobileImage"
                  nameOfProject="NoteChain Dapp"
                  details="This is a project i built to test my skill in Dapp in the web3.0 space, not to occupy you with stories just check the site by clicking on the image."
                  skill={
                    <div>
                      <img src={typescriptImage} alt="react image" />
                      <img src={reactImage} alt="react" />
                      <img src={tailwindcss} alt="tailwind" />
                      <img src={solidity} alt="solidity" />
                    </div>
                  }
                  href="https://t-dapp.vercel.app/"
                  links="Check it out"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={ticTacToe}
                  alt="Tic Tac Toe"
                  sizingImage="mobileImage"
                  nameOfProject="Tic Tac Toe"
                  details="It is a tic-tac-toe game with two players. Play with your friends and enjoy the game in case if you are stressed out from work or school."
                  skill={
                    <>
                      <img src={htmlImage} />
                      <img src={cssImage} alt="css" />
                      <img src={javascriptImage} alt="js" />
                    </>
                  }
                  href="https://ex-and-oh-game.netlify.app/"
                  links="Check it out"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={countdown}
                  alt="A countdown app"
                  sizingImage="mobileImage"
                  nameOfProject="Countdown"
                  details="This is a countdown website for the lauch of a product which is happening tomorrow, so i decided to build the countdown"
                  skill={
                    <>
                      <img src={nextJsImage} />
                      <img src={tailwindcss} alt="css" />
                    </>
                  }
                  href="https://amison-countdown.vercel.app/"
                  links="Check it out"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={applicant}
                  alt="Applicant tracking system image"
                  sizingImage="mobileImage"
                  nameOfProject="Applicant-Tracking-System"
                  details="This is a hackathon project from getLinked.ai and I and my team worked on an applicant-tracking system where HR can get talents for the job."
                  skill={
                    <>
                      <img src={nextJsImage} alt="nextjs" />
                      <img src={tailwindcss} alt="" />
                    </>
                  }
                  href="https://sequidor.netlify.app/"
                  links="Check it out"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={malva}
                  alt={
                    "This jamor Tech internship program to work on a website"
                  }
                  sizingImage="mobileImage"
                  nameOfProject={"Malva"}
                  details={
                    "This is a project from jamorTech internship program to develop a website. This website is a task manager website where task can be assign, it is also a collaboration project. I cannot say much about it click the image and go to the website"
                  }
                  skill={
                    <>
                      <img src={reactImage} alt="react js" />
                      <img src={tailwindcss} alt="tailwind css" />
                    </>
                  }
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={studio}
                  alt="Studio image"
                  sizingImage="mobileImage"
                  nameOfProject="Studio Project"
                  details="This is a studio project from Frontend Mentor where I was still learning interactivity using JavaScript. I cannot say much about the project; check them out by clicking on the images to go to the site."
                  skill={
                    <>
                      <img src={htmlImage} />
                      <img src={cssImage} alt="css" />
                    </>
                  }
                  href="https://resonant-bombolone-362dcb.netlify.app/"
                  links="Check it out"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Body;
