import React from 'react';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/* Sección Home ; con el id se puede identificar a donde quieres que te lleve al hacer clic en el nav*/}
      <section id="Home" className="min-h-screen bg-black flex items-center justify-center dark:bg-slate-100 dark:text-white transition-colors duration-500">
      <div className="max-w-3xl text-center">
          <h2 className="text-4xl mb-4 text-white dark:text-black transition-colors duration-500">Home</h2>
          <p className="text-lg text-white dark:text-black transition-colors duration-500">
            Aqui va una presentacion .
          </p>
        </div>
      </section>
      {/* Sección About */}
      <section id="About" className="min-h-screen bg-black dark:bg-slate-100 flex flex-col items-center justify-center gap-20">
        <About />
        <Carousel />
      </section>
      {/* Sección Portafolio */}
      <section id="Portafolio" className="bg-black dark:bg-slate-100 flex flex-col px-6 py-6 items-center justify-center ">
        <Projects />
      </section>

      {/* Sección Contactos */}
      <section id="Contactos" className="bg-black dark:bg-slate-100 flex flex-col px-6 py-6">
        <Contactos />
      </section>
    </div>
  );
};

export default Home;
