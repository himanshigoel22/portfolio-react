import './app.scss';
import Navbar from './components/navbar/Navbar';
import HeroSec from './components/hero/HeroSec';
import Parallax from './components/parallax/Parallax';
import Tech from './components/technologies/Tech'
import Projects from './components/projects/Pojects'
import Contactme from './components/contactme/Contactme';

const App = () => {
  return (
    <div>
      <section id='Home'> 
        <Navbar />
        <HeroSec />
      </section>
      <section id='Technologies'> <Parallax type="Technologies" /> </section>
      <section> <Tech /></section>
      <section id='Projects'><Parallax type="Projects"/> </section>
      <section> <Projects /> </section>   
      <section></section>
      <br /> <br /> <br /> <br /> <br /> <br />
      <section id='Contact'> <Contactme /> </section>      
    </div>
  );
};

export default App;
