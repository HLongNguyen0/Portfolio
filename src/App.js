import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Sidebar from "./Components/Sidebar/Sidebar";
import Projects from "./Components/Projects/Projects";
import "./css/index.min.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
  return (
    <>
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
