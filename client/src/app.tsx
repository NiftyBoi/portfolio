import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
      
      {/* Header */}
      <Header />
      <Home />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;