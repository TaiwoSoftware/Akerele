import React, { useEffect, useState } from "react";
import author from "../images/author.svg";
const BodyHeader = () => {
  const [delayFinger, setDelayFinger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayFinger(!delayFinger)
    }, 3000);
  },[])
  return (
    <header>
      <div className="header">
        <div>
          <h1>Akerele Taiwo</h1>
          <p>Front-end developer</p>
        </div>
        <div>
          <img src={author} alt="author" className="author" />
        </div>
      </div>
      <div>
      {delayFinger && <p className="goDown">👇</p>}
      </div>
    </header>
  );
};

export default BodyHeader;
