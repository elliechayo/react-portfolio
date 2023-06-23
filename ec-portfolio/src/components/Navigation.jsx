import { GrClose } from "react-icons/gr";

export default function Navigation({ view, changeView, navOpen, setNavOpen }) {
  return (
    <ul className={`nav-ul ${navOpen ? "open" : ""}`}>
      <li
        className={`nav-li ${view === "about" ? "selected" : ""}`}
        onClick={() => changeView("about")}
      >
        <button>About Me</button>
      </li>
      <li
        className={`nav-li ${view === "portfolio" ? "selected" : ""}`}
        onClick={() => changeView("portfolio")}
      >
        <button>Portfolio</button>
      </li>
      <li
        className={`nav-li ${view === "contact" ? "selected" : ""}`}
        onClick={() => changeView("contact")}
      >
        <button>Contact</button>
      </li>
      <li
        className={`nav-li ${view === "resume" ? "selected" : ""}`}
        onClick={() => changeView("resume")}
      >
        <button>Resume</button>
      </li>
      <li className="nav-close" onClick={() => setNavOpen(false)}>
        <GrClose fontSize={25} />
      </li>
    </ul>
  );
}
