import './App.scss';
import './_styles.scss'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from  './components/Hero/Hero';
import {About} from './components/About/About';
import {Education} from './components/Education/Education';
// import {Contact} from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
