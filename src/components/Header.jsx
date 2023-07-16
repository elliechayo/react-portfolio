import { useState } from "react";

import "../styles/Header.css";

// icons
import { BiMenuAltRight } from "react-icons/bi";
import Navigation from "./Navigation";

export default function Header({ setView, view }) {
  const [navOpen, setNavOpen] = useState(false);

  const changeView = (v) => {
    setView(v);
    setNavOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="navbrand">
          <a href="/"> Elinor Chayo</a>
        </div>
        <Navigation
          view={view}
          changeView={changeView}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        />
        <div className="nav-menu" onClick={() => setNavOpen(true)}>
          <BiMenuAltRight fontSize={32} />
        </div>
      </nav>
    </header>
  );
}
