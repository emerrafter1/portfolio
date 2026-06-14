import { useEffect, useState } from "react";
import "./styles/output.css";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["about", "experience", "education", "projects"];
    let rafId: number;
    let lastActive = "";

    const checkActive = () => {
      const offset = 200;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      if (current !== lastActive) {
        lastActive = current;
        setActiveSection(current);
      }
      rafId = requestAnimationFrame(checkActive);
    };

    rafId = requestAnimationFrame(checkActive);
    return () => cancelAnimationFrame(rafId);
  }, []);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 sm:p-10 lg:p-20 min-h-screen bg-slate-900 text-violet-100 scroll-smooth">
      <div className="col-span-12 md:col-span-4 md:sticky md:top-24 self-start">
        <Header activeSection={activeSection} onNavClick={setActiveSection} />
      </div>

      <div className="col-span-12 md:col-span-8 mx-8 md:mx-8 lg:mx-20">
        <About />
        <Experience activeSection={activeSection} />
        <Education activeSection={activeSection} />
        <Projects activeSection={activeSection} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
