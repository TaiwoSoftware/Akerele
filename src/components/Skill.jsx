import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
const Skill = () => {
  useEffect(() => {
    Aos.init({
      duration:1000,
      offset:120,
      once:true,
    })
  })
  return (
    <div className="allSkill ">
      <h2 className="skill">Skills</h2>
      <div className="firstSkill" data-aos="fade-right">
        <h2>HTML5</h2>
        <h2>CSS3</h2>
        <h2>JavaScript</h2>
      </div>
      <div className="secondSkill" data-aos="fade-left">
        <h2>ReactJs</h2>
        <h2>Figma</h2>
        <h2>Sass</h2>
      </div>
      <div className="thirdSkill" data-aos="fade-up-right">
        <h2>NextJs</h2>
        <h2>Github</h2>
        <h2>Git</h2>
      </div>
      <h2 className="last" data-aos="fade-up-left">TailwindCss</h2>
      <h2 className="last" data-aos="fade-up-left">Typescript</h2>
    </div>
  );
};

export default Skill;
