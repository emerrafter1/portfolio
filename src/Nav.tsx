import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="my-12">
      <ul className="flex flex-wrap">
        <li className="w-full py-3 uppercase">
        <a href="#about">About</a>
        </li>
        <li className="w-full py-3 uppercase">
        <a href="#experience">Experience</a>
        </li>
        <li className="w-full py-3 uppercase">
        <a href="#education">Education</a>
        </li>
        <li className="w-full py-3 uppercase">
        <a href="#projects">Projects</a>
        </li>
     

      </ul>
    </nav>
  );
};

export default Nav;
