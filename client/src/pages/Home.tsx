import About from '../components/About';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Contactos from '../components/Contactos';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="bg-zinc-900 dark:bg-slate-100 overflow-x-hidden">
      <Header />

      <section id="home" className="pt-28 pb-16 px-4 sm:px-8 lg:px-12">
        <About />
        <div className="mt-16">
          <Carousel />
        </div>
      </section>

      <section id="portfolio" className="py-16 px-4 sm:px-8 lg:px-12">
        <Projects />
      </section>

      <section id="contact" className="py-16 px-4 sm:px-8 lg:px-12">
        <Contactos />
      </section>
    </div>
  );
};

export default Home;
