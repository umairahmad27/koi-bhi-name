import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"

// Components
import Header from "./components/Header"
import Footer from './components/Footer';

// Pages
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;
