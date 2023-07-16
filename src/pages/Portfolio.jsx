import "../styles/Portfolio.css";

import Project from "../components/Project";

// project images
import ProjectImage1 from "../assets/projects-image-1.jpg";
import ProjectImage2 from "../assets/projects-image-2.jpg";
import ProjectImage3 from "../assets/projects-image-3.jpg";
import ProjectImage4 from "../assets/projects-image-4.jpg";
import ProjectImage5 from "../assets/projects-image-5.jpg";
import ProjectImage6 from "../assets/projects-image-6.jpg";
import ProjectImage7 from "../assets/projects-image-7.jpg";
import ProjectImage8 from "../assets/projects-image-8.jpg";
import ProjectImage9 from "../assets/projects-image-9.jpg";

export default function Portfolio() {
  const allProjects = [
    {
      id: 1,
      title: "Note Taker",
      img: ProjectImage1,
      
      githubLink: "https://github.com/elliechayo/note-taker-ec",
      liveLink: "https://note-taker-ec.herokuapp.com/",
    },
    {
      id: 2,
      title: "Library of Congress Search Tool",
      img: ProjectImage2,
      githubLink: "https://github.com/elliechayo/Library-of-Congress-Search-Tool",
      liveLink: "https://elliechayo.github.io/Library-of-Congress-Search-Tool/",
    },
    {
      id: 3,
      title: "Logo Maker",
      img: ProjectImage3,
      
      githubLink: "https://github.com/elliechayo/svg-logo-maker ",
      liveLink: "https://github.com/elliechayo/svg-logo-maker/",
    },
    {
      id: 4,
      title: "WorkDay Scheduler",
      img: ProjectImage4,
     
      githubLink: "https://github.com/elliechayo/Day-Scheduler",
      liveLink: "https://elliechayo.github.io/Day-Scheduler/",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      img: ProjectImage5,
    
      githubLink: "https://github.com/elliechayo/weather-dashboard",
      liveLink: "https://elliechayo.github.io/weather-dashboard/",
    },
    {
      id: 6,
      title: "Code Quiz App",
      img: ProjectImage6,
    
      githubLink: "https://github.com/elliechayo/Code-Quiz",
      liveLink: "https://elliechayo.github.io/Code-Quiz/",
    },
    {
      id: 7,
      title: "Date Night Planner",
      img: ProjectImage8,
    
      githubLink: "https://github.com/erikchiodo/date-night-project",
      liveLink: "https://erikchiodo.github.io/date-night-project/",
    },
    {
      id: 8,
      title: "Spendr App",
      img: ProjectImage7,
    
      githubLink: "https://github.com/elliechayo/spendr",
      liveLink: "https://spendr-app.herokuapp.com/",
    },
    {
      id: 9,
      title: "Greenhouse App",
      img: ProjectImage9,
    
      githubLink: "https://github.com/elliechayo/greenhouse-app",
      liveLink: "https://greenhouse-team-c08c7033be08.herokuapp.com/",
    },
  ];

  return (
    <section className="section portfolio-section container">
      <h2 className="section-title">Recent Works</h2>
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
