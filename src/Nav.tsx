import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="portfolio">About</Link>
        </li>
        <li>
          <Link to="/portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
