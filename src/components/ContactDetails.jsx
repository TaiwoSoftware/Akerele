import React from "react";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import { Link } from "react-router-dom";
function ContactDetails() {
  return (
    <div className="contactDetails">
      <p>Reach out down to me by following me on these platforms</p>

      <p>
        <Link to="https://twitter.com/davcodes24">
          <img src={twitter} alt="Twitter" />
        </Link>
        <Link to='https://www.instagram.com/davcodin/'>
          <img src={instagram} alt="Instagram" />
        </Link>
      </p>
    </div>
  );
}

export default ContactDetails;
