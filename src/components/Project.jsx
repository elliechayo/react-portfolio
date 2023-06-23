import "../styles/Project.css";

import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function Project({
  title,
  description,
  githubLink,
  liveLink,
  img,
}) {
  return (
    <div className="project-card">
      <div className="image-section">
        <img src={img} alt={title} />
      </div>
      <div className="text-section">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="link-group">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <BsGithub fontSize={20} />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer">
            <BiLinkExternal fontSize={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
