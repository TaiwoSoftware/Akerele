import 'animate.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import author from "../images/author.svg";
import { useEffect } from 'react';
export default function PortHeader() {
    useEffect(() => {
        Aos.init({
            duration:1000,
            offset:120,
            once:true,
        })
    })
  return (
    <header data-aos='fade-down-right' data-aos-duration='600'>
      <div className="header">
        <div className='animate__animated animate__flipInY' >
          <h1>Akerele Taiwo</h1>
          <p>Front-end developer</p>
        </div>
        <div>
          <img
            src={author}
            alt="author"
          />
        </div>
      </div>
    </header>
  );
}
