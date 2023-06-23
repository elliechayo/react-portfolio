import { useState } from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const [view, setView] = useState("about");
  return (
    <>
      <Header setView={setView} view={view} />
      <main>
        {view === "about" && <About setView={setView} />}
        {view === "portfolio" && <Portfolio />}
        {view === "contact" && <Contact />}
        {view === "resume" && <Resume />}
      </main>
      <Footer />
    </>
  );
}

export default App;
