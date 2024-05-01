import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import './index.css';

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
