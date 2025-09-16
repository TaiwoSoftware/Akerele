import Aos from "aos";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import mail from "../images/gmail.svg";
import linkedin from "../images/icons8-linkedin-logo.svg";
import github from "../images/icons8-github.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function ContactDetails() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  });
  return (
    <div className="contactDetails" data-aos="fade-up-left">
      <p>Reach out to me on these platforms</p>

      <div className="footerSocial">
        <Link to="https://twitter.com/davcodes24">
          <img src={twitter} alt="Twitter" />
        </Link>
        <Link to="https://www.instagram.com/davcodin/">
          <img src={instagram} alt="Instagram" />
        </Link>
        <a href="mailto:davcodes24@gmail.com">
          <img src={mail} alt="Mail me" />
        </a>
        <Link to="https://github.com/TaiwoSoftware">
          <img src={github} alt="github-link" />
        </Link>
        <Link to="https://www.linkedin.com/in/taiwo-akerele-4b33aa382/">
          <img src={linkedin} alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
