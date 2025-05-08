import { useEffect, useState } from "react";
import "../dist/styles/output.css";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects"];
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
        threshold: 0.25,
  
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 sm:p-10 lg:p-20 min-h-screen bg-slate-900 text-violet-100 scroll-smooth">
      <div className="col-span-12 md:col-span-4 md:sticky md:top-24 self-start">
        <Header activeSection={activeSection} />
      </div>

      <div className="col-span-12 md:col-span-8 mx-8 md:mx-8 lg:mx-20">
        <About />
        <Experience />

        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
