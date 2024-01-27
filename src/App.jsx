import './app.scss';
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/hero/HeroSec';
import Tech from './components/technologies/Tech'
import Projects from './components/projects/Projects'
import Contactme from './components/contactme/Contactme';
import About from './components/about/About';
const App = () => {
  return (
    <div>
      <section id='Home'> 
        <Navbar />
        <HeroSec />
      </section>
      <section id='About'> <About /></section>
      <section id='Technologies'> <Tech /></section>
      <section id='Projects'> <Projects /> </section>   
      <section></section>
      <br /><br />
      <section id='Contact'> <Contactme /> </section>      
    </div>
  );
};

export default App;
