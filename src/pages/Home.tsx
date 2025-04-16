import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Header />

      {/* Sección Home ; con el id se puede identificar a donde quieres que te lleve al hacer clic en el nav*/}
      <section id="Home" className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 animate-pulse">
          (x﹏x)
        </h1>
      </section>

      {/* Sección About */}
      <section id="About" className="min-h-screen bg-white px-10 py-20 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            ¡Aqui va algo sobre mi y las herramientas y teconologias que uso
          </p>
        </div>
      </section>

      {/* Sección Portafolio */}
      <section id="Portafolio" className="min-h-screen bg-gray-100 px-10 py-20 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Portafolio</h2>
          <p className="text-lg text-gray-700">
            Aquí irán algunos de mis trabajos, proyectos personales y cosas bacanes que vaya creando
          </p>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="Contactos" className="min-h-screen bg-white px-10 py-20 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">Contactos</h2>
          <p className="text-lg text-gray-700">
            Aqui ira mi contacto.
          </p>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
