import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Header */}
      <Header />
      <Home />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;