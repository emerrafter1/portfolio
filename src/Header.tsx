type HeaderProps = {
  activeSection: string;
};

import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from 'react-icons/md';


const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },

    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="flex flex-col p-6 sm:p-0 lg:h-full">
      <h1 className="text-3xl sm:text-4xl lg:text-4xl ">Emer Louise Rafter</h1>
      <h2 className="text-lg my-4 sm:my-6 lg:my-12">Full Stack Engineer</h2>

      <nav className="w-full">
        <ul className="flex flex-wrap sm:flex-row sm:justify-center sm:gap-6 gap-3 md:mt-12">
          {navItems.map(({ id, label }) => (
            <li key={id} className="uppercase w-full">
              <a
                href={`#${id}`}
                className={`transition-colors duration-300 ${
                  activeSection === id ? "text-violet-400 font-bold" : "text-violet-200"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className=" mt-12 sm:mt-32 flex gap-4">
        <a href="https://www.linkedin.com/in/emerrafter/" aria-label="Link to Emer's LinkedIn profile">
          <SiLinkedin className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 text-opacity-60 hover:text-opacity-100 hover:cursor-pointer" />
        </a>
        <a href="https://github.com/emerrafter1" aria-label="Link to Emer's Github">
          <SiGithub className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 text-opacity-60 hover:text-opacity-100 hover:cursor-pointer" />
        </a>
        <a href="mailto:emerlouiserafter@gmail.com" aria-label="Email Emer">
  <MdEmail className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 text-opacity-60 hover:text-opacity-100 hover:cursor-pointer" />
</a>
      </div>
    </header>
  );
};

export default Header;
