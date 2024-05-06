const Nav = () => {
  return (
    <header className="text-sky-950 pt-10 pb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">LuisDefago</h1>
        <nav>
          <ul className="flex space-x-4 text-2xl font-bold">
            <li>
              <a href="#" className="hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
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
