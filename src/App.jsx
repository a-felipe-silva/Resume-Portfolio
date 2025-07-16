import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full max-w-none px-8 py-10 font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 bg-red dark:text-gray-300">
      <Header />
      <main className="scroll-smooth">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;