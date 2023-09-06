import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Habilidades from './Habilidades';

const App = () => {
  return (
    <div className='overflow-hidden bg-site bg-no-repeat bg-cover mx-auto '>
      <Navbar />
      <main >
          <About />
          <Skills/>
          <Habilidades/>
          <Projects/>
          <Contact/>
      </main>
    </div>
  );
};

export default App;
