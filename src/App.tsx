import "./App.css";
import Nav from "./Nav";
import About from "./About";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="portfolio/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
