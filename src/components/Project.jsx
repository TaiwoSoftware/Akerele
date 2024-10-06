/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
  const Project = ({
    src,
    alt,
    details,
    href,
    sizingImage, // Added prop validation
    nameOfProject,
    lowerContainer,
    skill,
  }) => {
    return (
      <div className="containerProject">
        <div className={lowerContainer}>
          <Link to={href}>
            <img src={src} alt={alt} className={sizingImage} />
          </Link>
          <div className="detailed">
            <h3>{nameOfProject}</h3>
            <div className="detailed">
              <p>{details}</p>
              <h2 className="tools">{skill}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Project;
