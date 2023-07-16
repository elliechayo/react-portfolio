import { TypeAnimation } from "react-type-animation";
import "../styles/About.css";
import AboutImage from "../assets/about-image.jpeg";

export default function About({ setView }) {
  return (
    <section className="section about-section">
      <img src={AboutImage} alt="Elinor Chayo" className="about-image" />
      <h1 className="name">
        <span>
          <span className="small">Hi there!</span>
          <br />
          <p>
            I'm a{" "}
          <TypeAnimation
            sequence={[
              "Elinor Chayo",
              1000,
              "A Web Developer",
              1000,
              " A Graphic Designer",
              1000,
              "A freelancer",
              1000,
            ]}
            repeat={Infinity}
          />
            </p>
        </span>
      </h1>
      
      <p className="subtitle">
      I'm a Freelance UI/UX Designer and Developer based in New York. I create immersive web applications with user-centric design and meticulous coding. Let's collaborate and create something exceptional!
      </p>
      <button className="cta-btn" onClick={() => setView("portfolio")}>
        Portfolio
      </button>
    </section>
  );
}
