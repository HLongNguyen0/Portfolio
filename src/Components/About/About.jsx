import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { useIntersection } from "react-use";
import me from "../../img/me.png";
import cv from "../../Lebenslauf.pdf";

export default function About() {
  const text = useRef(null);

  const intersection = useIntersection(text, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const fadeIn = (elem) => {
    gsap.to(elem, {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 3,
      ease: Power4.easeOut,
    });
  };

  useEffect(() => {
    intersection && intersection.intersectionRatio && fadeIn(text.current);
  }, [text, intersection]);

  return (
    <section id="about-me">
      <div className="about-me">
        <div ref={text} className="about-me__info">
          <h2 className="magic">About me</h2>
          <ul>
            <li>
              I see myself as an adaptable and goal-oriented individual who
              takes every given task very seriously.
            </li>
            <li>Graduated as an engineer from aerospace university.</li>
            <li>
              Completed an online course from GoIT in Full Stack Development
            </li>
            <li>Am able to speak 6 languages.</li>
            <li>Enjoy reading books and playing piano in my free time.</li>
          </ul>
          <a href={cv} target="_blank" rel="noreferrer">
            See my CV !
          </a>
        </div>
        <div className="about-me__img">
          <img src={me} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
