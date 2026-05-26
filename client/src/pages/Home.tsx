import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      
      <div className="bg-zinc-900 dark:bg-slate-100 pt-24">
        <Header />
      </div>
      <section id="home" className="bg-zinc-900 dark:bg-slate-100 min-h-screen px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <div className="pt-20">
          <About />
        </div>
        <div className="pt-20">
          <Carousel />
        </div>
      </section>

      {/* Projects y Carousel en una sola sección que ocupa min-h-screen */}
      <section id="portfolio" className="bg-zinc-900 dark:bg-slate-100 min-h-screen px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <Projects />
      </section>

      <section id="contact" className="bg-zinc-900 dark:bg-slate-100 px-4 sm:px-8 md:px-12 text-center md:text-left overflow-x-hidden">
        <Contactos />
      </section>

    </div>
  );
};

export default Home;
