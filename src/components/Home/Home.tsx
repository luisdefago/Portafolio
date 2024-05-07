const Home = () => {
  return (
    <section className="flex justify-center mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-6xl font-semibold text-blue-950 mb-8 mb-14">FullStack Developer</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
          <p className="text-center mb-4 leading-relaxed">
            ¡Hola! 👋 Soy Luis, un apasionado desarrollador Full Stack. <br/>
            🎓 Estudiante de Ingeniería en Sistemas (UTN). <br/>
            🛠️ Adquirí mis primeras bases en Desarrollo Web, JavaScript, React y React Native en cursos de CoderHouse. <br/>
            🚀 Recién egresado del bootcamp de Soy Henry, donde he perfeccionado mis habilidades en: <br/>
          </p>
          <ul className="mt-4 flex flex-wrap justify-center">
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PostgreSQL</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SQL</li>
            <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</li>
          </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center justify-end mb-auto">
            <img src="https://avatars.githubusercontent.com/u/102487252?v=4" alt="" className="w-3/4 mb-4 w-52"/>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/tu_perfil_de_LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-700 mr-4">
                <i className="fab fa-linkedin text-3xl">a</i>
              </a>
              <a href="https://github.com/tu_usuario_de_GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-700 mr-4">
                <i className="fab fa-github text-3xl">a</i>
              </a>
              <a href="mailto:tu_correo@example.com" className="text-gray-700">
                <i className="fas fa-envelope text-3xl">a</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
