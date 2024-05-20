const Nav = () => {
  return (
    <header className="text-sky-950 pt-6 pb-6 shadow-md">
      <div className="container mx-auto px-4 lg:px-24 flex justify-between items-center">
        <a href="#">
        <h1 className="text-xl lg:text-4xl font-bold">LuisDefago</h1>
        </a>
        <nav>
          <ul className="flex space-x-8 text-xl lg:text-2xl font-bold">
            <li>
              <a href="#Projects" className="hover:text-gray-300 transition-all duration-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luis-defago-005840252/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-300">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
