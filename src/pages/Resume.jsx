import "../styles/Resume.css";

export default function Resume() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      level: 90,
      color: "#DD4B25",
    },
    {
      id: 2,
      name: "CSS",
      level: 85,
      color: "#2962E9",
    },
    {
      id: 3,
      name: "JavaScript",
      level: 90,
      color: "#EFD81D",
    },
    {
      id: 4,
      name: "React",
      level: 70,
      color: "#00CDF2",
    },
    {
      id: 5,
      name: "Redux",
      level: 70,
      color: "#7046B2",
    },
  ];

  return (
    <section className="section resume section container">
      <h2 className="section-title">Resume</h2>
      <a
        href="https://elliechayo.github.io/portfolio-webpage/assets/Resume.pdf"
        className="resume-download"
      >
        Download My Resume
      </a>
      <div className="skills">
        <h3>My Skills</h3>
        <div className="skills-bar">
          {skills.map((s) => {
            return (
              <div className="skill-bar" key={s.id}>
                <p>
                  {s.name} - {s.level}%
                </p>
                <div
                  className="bar"
                  style={{
                    width: s.level + "%",
                    background: s.color,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
