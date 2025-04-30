type HeaderProps = {
  activeSection: string;
};

import { SiLinkedin, SiGithub } from "react-icons/si";


const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
<header className="flex flex-col h-full">
  <h1 className="text-5xl">Emer Louise Rafter</h1>
  <h2 className="text-xl my-12">Full Stack Engineer</h2>

  <nav className="my-12">
    <ul className="flex flex-col gap-2">
      {navItems.map(({ id, label }) => (
        <li key={id} className="uppercase">
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


  <div className="mt-48     flex flex-wrap gap-4">
    <a href="https://www.linkedin.com/in/emerrafter/">
   <SiLinkedin className="w-8 h-8 text-purple-300 text-opacity-60 hover:text-opacity-100 hover:cursor-pointer"/></a>
   <a href="https://github.com/emerrafter1">
   <SiGithub className="w-8 h-8 text-purple-300 text-opacity-60 hover:text-opacity-100 hover:cursor-pointer"/></a>

  </div>
</header>

  );
};

export default Header;
