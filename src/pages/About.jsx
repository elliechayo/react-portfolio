import { TypeAnimation } from "react-type-animation";
import "../styles/About.css";
import AboutImage from "../assets/about-image.jpeg";

export default function About({ setView }) {
  return (
    <section className="section about-section">
      <img src={AboutImage} alt="Elinor Chayo" className="about-image" />
      <h1 className="name">
        <span>
          <span className="small">Elinor Chayo</span>
          <br />
          <TypeAnimation
            sequence={["Developer", 1000, "Designer", 1000, "Writer", 1000]}
            repeat={Infinity}
          />
        </span>
      </h1>
      <p className="subtitle">
        My work is focused on producing quality work and blending graphic design
        experience with hands-on technical training in a junior-level front-end
        software engineering role.
      </p>
      <button className="cta-btn" onClick={() => setView("portfolio")}>
        Portfolio
      </button>
    </section>
  );
}
