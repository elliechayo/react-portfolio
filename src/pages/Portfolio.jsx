import "../styles/Portfolio.css";

import Project from "../components/Project";

// project images
import ProjectImage1 from "../assets/projects-image-1.jpg";
import ProjectImage2 from "../assets/projects-image-2.jpg";
import ProjectImage3 from "../assets/projects-image-3.jpg";
import ProjectImage4 from "../assets/projects-image-4.jpg";
import ProjectImage5 from "../assets/projects-image-5.jpg";
import ProjectImage6 from "../assets/projects-image-6.jpg";

export default function Portfolio() {
  const allProjects = [
    {
      id: 1,
      title: "Note Taker",
      img: ProjectImage1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://note-taker-ec.herokuapp.com/",
    },
    {
      id: 2,
      title: "Date Night Planner",
      img: ProjectImage2,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://erikchiodo.github.io/date-night-project/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      img: ProjectImage3,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://elliechayo.github.io/weather-dashboard/",
    },
    {
      id: 4,
      title: "Spendr App",
      img: ProjectImage4,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://git.heroku.com/spendr-app.git",
    },
    {
      id: 5,
      title: "WorkDay Scheduler",
      img: ProjectImage5,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://elliechayo.github.io/Day-Scheduler/",
    },
    {
      id: 6,
      title: "Code Quiz App",
      img: ProjectImage6,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid obcaecati magni modi sunt.",
      githubLink: "",
      liveLink: "https://elliechayo.github.io/Code-Quiz/",
    },
  ];

  return (
    <section className="section portfolio-section container">
      <h2 className="section-title">Some of my recent projects</h2>
      <div className="cards">
        {allProjects.map((p) => {
          return (
            <Project
              title={p.title}
              description={p.description}
              key={p.id}
              githubLink={p.githubLink}
              img={p.img}
              liveLink={p.liveLink}
            />
          );
        })}
      </div>
    </section>
  );
}
