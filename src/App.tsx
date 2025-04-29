import "../dist/styles/output.css";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="grid grid-cols-12 gap-4 p-24 scroll-smooth min-h-screen bg-slate-900 text-violet-100">
      <div className="col-span-4 sticky top-24 self-start">
        <Header />
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
