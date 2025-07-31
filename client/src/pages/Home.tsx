import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';

const Home = () => {
  return (
    <div className="">
      <section id="home" className="min-h-screen bg-zinc-900 dark:bg-slate-100 flex items-center justify-center px-6 py-6">
        <About />
      </section>

      {/* Projects y Carousel en una sola sección que ocupa min-h-screen */}
      <section id="portfolio" className="min-h-screen bg-zinc-900  dark:bg-slate-100 flex flex-col items-center justify-center px-4 py-4 gap-6 scroll-mt-6">
        <Projects />
        <Carousel />
      </section>

      <section id="contact" className="bg-zinc-900  dark:bg-slate-100 flex flex-col px-6 py-6">
        <Contactos />
      </section>

    </div>
  );
};

export default Home;
