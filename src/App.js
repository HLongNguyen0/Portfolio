import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Sidebar from "./Components/Sidebar/Sidebar";
import Projects from "./Components/Projects/Projects";
import "./css/index.min.css";

function App() {
  return (
    <>
      <Sidebar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
