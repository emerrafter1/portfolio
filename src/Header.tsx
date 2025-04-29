type HeaderProps = {
  activeSection: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header>

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
    </header>
  );
};

export default Header;
