const Home = () => {
  return (
    <section className="flex justify-center mt-10">
      <div className="max-w-4xl mx-auto px-7 lg:px-0">
        <h2 className="text-center text-5xl md:text-6xl font-semibold text-blue-950 mb-8 mb-14">FullStack Developer</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <p className="text-center mb-4 leading-relaxed">
              🎓 Estudiante de Ingeniería en Sistemas (UTN) <br/>
              🛠️ Egresado de la carrera de desarrollo de aplicaciones de CoderHouse<br/>
              🚀 Egresado del bootcamp de Soy Henry<br/>
            </p>
            <ul className="mt-4 flex flex-wrap justify-center mb-8 lg:mb-0">
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React Native</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Zustand</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PostgreSQL</li>
              <li className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SQL</li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col items-end justify-end mb-auto">
            <img src="https://avatars.githubusercontent.com/u/102487252?v=4" alt="" className="w-3/4 mb-4 w-52 rounded-full"/>
            <div className="flex justify-center w-52">
              <a href="https://www.linkedin.com/in/luis-defago-005840252/" target="_blank" rel="noopener noreferrer" className="text-gray-700 mr-4 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/luisdefago?tab=overview&from=2024-05-01&to=2024-05-07" target="_blank" rel="noopener noreferrer" className="text-gray-700 mr-4 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
              </a>
              <a href="mailto:defagoluis5@gmail.com" className="text-gray-700 hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
              </a>
            </div>
            <div className="flex justify-center w-52">
              <a href="https://drive.google.com/uc?export=download&id=1YqQjRRwiuk16aTbm3AQHxYjWgmSPc9VQ" download className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 font-semibold">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
