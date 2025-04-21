import React from 'react';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/* Sección Home ; con el id se puede identificar a donde quieres que te lleve al hacer clic en el nav*/}
      <section id="Home" className="min-h-screen bg-black px-10 py-20 flex items-center justify-center">
      <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Home</h2>
          <p className="text-lg text-white">
            Aqui va una presentacion .
          </p>
        </div>
      </section>
      {/* Sección About */}
      <section id="About" className="min-h-screen bg-black px-10 py-20 flex flex-col items-center justify-center gap-20">
        <About />
        <Carousel />
      </section>
      {/* Sección Portafolio */}
      <section id="Portafolio" className="min-h-screen bg-black px-10 py-20 flex items-center justify-center flex-col flex">
        <Projects />
      </section>

      {/* Sección Proyectos */}
      <section id="Contactos" className="min-h-screen bg-black px-10 py-20 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Contactos</h2>
          <p className="text-lg text-gray-700">
            Aqui ira mi contacto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
