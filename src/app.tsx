import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import About from './components/About';


function App() {
  return (
    <div className="bg-black-900 text-gray-800 min-h-screen flex flex-col">
      <Header />
      <div className="mt-24 flex-grow max-w-5xl mx-auto px-4"> {/*ajustar el mt-24 según el alto Header */}
      <About />
      <Carousel />
      <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
