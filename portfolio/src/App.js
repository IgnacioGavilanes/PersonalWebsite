import './App.scss';
import './_styles.scss'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from  './components/Hero/Hero';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
