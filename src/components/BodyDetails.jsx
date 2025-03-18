import Aos from "aos";
import { Link } from "react-router-dom";
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
    <div className="details">
      <h2 data-aos="flip-right mb-10">About</h2>
      <div className="si">
        <div className="firstP">
          <p>Hey! there ✌, </p>
        </div>

        <p>
          <div data-aos="fade-down-left">
            I’m a passionate frontend developer eager to learn new technologies
            and build innovative products in the tech space. I specialize in
            creating simple, interactive, and user-friendly websites using
            modern frontend technologies. Currently, I’m expanding my expertise
            by integrating blockchain technology, focusing on smart contracts,
            to enhance security and encryption in web applications.
          </div>
          <p data-aos="fade-down-right">
            {" "}
            My journey in frontend development began at the age of 16 when I
            developed a strong interest in building interactive web experiences.
            I started learning through{" "}
            <Link
              to={
                "https://www.freecodecamp.org/certification/Akerele-Taiwo-David/responsive-web-design"
              }
            >
              {" "}
              freeCodeCamp
            </Link>
            , where I earned a certificate in responsive web design. I then
            advanced my skills with{" "}
            <Link to={"https://www.frontendmentor.io/home"}>
              Frontend Mentor
            </Link>
            , honing my ability to create dynamic and engaging web interfaces.
            Despite the challenges, my passion for web development has only
            grown, driving me to continuously improve and explore new
            possibilities.
            <div className="mt-2">
              {" "}
              Beyond coding, I unwind by playing the piano 🎹, watching movies,
              and, of course, enjoying good food. After long hours of writing
              code, fixing bugs, and deploying projects, these little joys keep
              me balanced and motivated. 😂
            </div>
          </p>
        </p>
      </div>
    </div>
  );
};

export default BodyDetails;
