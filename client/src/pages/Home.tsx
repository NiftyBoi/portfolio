import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';
import Cat3d from '../components/models3d/Cat3d';

const Home = () => {
  return (
    <div className="scroll-smooth">
      {/*}
      <section id="home" className="min-h-screen bg-black dark:bg-slate-100 flex flex-col items-center justify-center gap-20">
        <Cat3d />
      </section>
      */}
      {/* Sección About */}
      <section id="about" className="min-h-screen bg-black dark:bg-slate-100 flex flex-col items-center justify-center gap-20">
        <About />
        <Carousel />
      </section>
      {/* Sección Portafolio */}
      <section id="portfolio" className="bg-black dark:bg-slate-100 flex flex-col px-6 py-6 items-center justify-center ">
        <Projects />
      </section>

      {/* Sección Contactos */}
      <section id="contact" className="bg-black dark:bg-slate-100 flex flex-col px-6 py-6">
        <Contactos />
      </section>
    </div>
  );
};

export default Home;
