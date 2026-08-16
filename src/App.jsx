import ThreeBackground from './components/ThreeBackground';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Three.js Particle Field — sits behind everything */}
      <ThreeBackground />

      {/* Top Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />

        {/* Separator between sections for depth */}
        <div style={{
          position: 'relative', zIndex: 1,
          background: 'linear-gradient(to bottom, #0a0805, rgba(10,8,5,0.97))'
        }}>
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer>
        <p>© 2025 <span>Sriram Gaja</span> — Crafted with precision.</p>
      </footer>
    </>
  );
}

export default App;
