import React from "react";
const Project = ({
  src,
  alt,
  details,
  tools,
  href,
  links,
  sizingImage,
  nameOfProject,
  lowerContainer,
  skill
}) => {
  return (
    <div className="containerProject">
      <div className={lowerContainer}>
        <img src={src} alt={alt} className={sizingImage} />
        <div className="detailed">
          <h3>{nameOfProject}</h3>
          <div className="detailed">
            <p>{details}</p>
            <p  className="tools">{skill}</p>
          </div>
          <a href={href}>{links}</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
