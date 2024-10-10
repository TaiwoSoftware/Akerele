import BodyDetails from "./BodyDetails";
import ticTacToe from "../images/tictac.png";
import ecommerce from "../images/e-commerce.jpg";
import studio from "../images/studio.png";
import applicant from "../images/applicant.png";
import recipe from "../images/rest.jpg";
import timer from "../images/timer.png";
import Skill from "./Skill";
import Project from "./Project";
import reactImage from "../images/icons8-react-50.png";
import cssImage from "../images/icons8-css-logo-50.png";
import htmlImage from "../images/icons8-html-logo-50.png";
import javascriptImage from "../images/icons8-javascript-50.png";
import nextJsImage from "../images/icons8-next.js-50.png";
import tailwindcss from "../images/icons8-tailwind-css-50.png";
import sassImage from "../images/icons8-sass-50.png";
import Contact from "./Contact";
import malva from "../images/malva.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
                  src={ecommerce}
                  alt="An ecommerce project"
                  sizingImage="mobileImage"
                  nameOfProject="Dresser-Glam"
                  details="This is an internship project from internCareer that I worked on. I have worked on other internships but I kind of like this one."
                  skill={
                    <>
                      <img src={reactImage} alt="react" />
                      <img src={sassImage} alt="sass" />
                    </>
                  }
                  href="https://buy-and-sell-project.netlify.app/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  lowerContainer="project"
                  src={timer}
                  alt="This is a timer project"
                  sizingImage="mobileImage"
                  nameOfProject="Timer"
                  details="This is an internship project from Prodigy InfoTech where I worked as an intern to work on a timer."
                  skill={
                    <>
                      <img src={htmlImage} />
                      <img src={cssImage} alt="css" />
                      <img src={javascriptImage} alt="js" />
                    </>
                  }
                  href="https://stoper.netlify.app/"
                  links="Check it out"
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
