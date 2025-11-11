import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills"
import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
