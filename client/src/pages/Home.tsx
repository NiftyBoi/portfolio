import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      
      <section className="bg-zinc-900 dark:bg-slate-100 p-10 ">
        <Header />
      </section>
      <section id="home" className="bg-zinc-900 dark:bg-slate-100 min-h-screen px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <About />
      </section>

      {/* Projects y Carousel en una sola sección que ocupa min-h-screen */}
      <section id="portfolio" className="bg-zinc-900 dark:bg-slate-100 min-h-screen px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <Projects />
        <Carousel />
      </section>

      <section id="contact" className="bg-zinc-900 dark:bg-slate-100 min-h-screen px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <Contactos />
      </section>

    </div>
  );
};

export default Home;
