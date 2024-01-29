import React from "react";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import mail from '../images/icons8-gmail.svg';
import linkedin from '../images/icons8-linkedin-logo.svg';
import github from '../images/icons8-github.svg';
import { Link } from "react-router-dom";
function ContactDetails() {
  return (
    <div className="contactDetails">
      <p>Reach out to me on these platforms</p>

      <p>
        <Link to="https://twitter.com/davcodes24">
          <img src={twitter} alt="Twitter" />
        </Link>
        <Link to='https://www.instagram.com/davcodin/'>
          <img src={instagram} alt="Instagram" />
        </Link>
          <a href="mailto:davcodes24@gmail.com">
          <img src={mail} alt="Mail me" />
          </a>
        <Link to='https://github.com/TaiwoSoftware'>
          <img src={github} alt="github-link"  />
        </Link>
        <Link to='https://ng.linkedin.com/in/taiwo-akerele-44b5b4246'>
          <img src={linkedin} alt="LinkedIn" />
        </Link>
      </p>
    </div>
  );
}

export default ContactDetails;
