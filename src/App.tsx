import { useEffect, useState } from "react";
import "../dist/styles/output.css";

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
          if (entry.isIntersecting) {
            console.log(entry.target.id)
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        // Temporarily remove rootMargin and scroll-mt-24 to see if the issue persists
        rootMargin: "0px 0px 0px 0px",


      }
    );
  
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="grid grid-cols-12 gap-4 p-20 min-h-screen bg-slate-900 text-violet-100 scroll-smooth">
      <div className="col-span-4 sticky top-24 self-start">
        <Header activeSection={activeSection} />
      </div>

      <div className="col-span-8 mx-20">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
