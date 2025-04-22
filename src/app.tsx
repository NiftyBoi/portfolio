import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10">
      
      {/* Header */}
      <Header />
      <Home />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;