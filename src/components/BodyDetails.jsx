import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BodyDetails = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  });
  return (
    <div className="details" >
      <h2 data-aos="flip-right">About</h2>
      <div className="si">
        <div className="firstP">
          <p>Hey! there ✌, </p>
        </div>

        <p>
          <div data-aos="fade-down-left">
          I&rsquo;m an expert in frontend development, eager to learn new technologies and build more products in the tech space. Building simple, interactive and user-friendly website using frontend development technology and adding encryptions to my website by adding blockchain technologies into it focusing basically on Smart Contract (in progress) and delivering innovative web3 solutions
          </div>
          <p data-aos="fade-down-right">
            {" "}
            I started frontend development at the age of 16 and gained interest
            in it so i started working on improving myself with front-end
            development tools and learning online, i started with <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://freecodecamp.org/"
            >
            freeCodeCamp
            </a>{" "}
            which i gained certificate on responsive web design, moved forward
            to{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.frontendmentor.io/home"
            >
              frontend mentor
            </a>{" "}
            where i learnt interactivity on the web. The more i learnt about
            interactivity on the web the more i was eager to learn more even
            though i faced challenges. Playing the piano🎹, watching movies and
            eating is what i use to relax my brain after a long day of writing
            codes, fixing bugs and deploying😂.{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default BodyDetails;
