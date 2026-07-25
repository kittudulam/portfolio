import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;