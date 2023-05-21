import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { useIntersection } from "react-use";

export default function Hero() {
  const heroTitle = useRef(null);

  const intersection = useIntersection(heroTitle, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const fadeIn = (elem) => {
    gsap.set("body", { opacity: 1 });
    gsap.to(elem, {
      x: 0,
      opacity: 1,
      duration: 3,
      filter: "blur(0px)",
      ease: Power4.easeOut,
    });
  };

  useEffect(() => {
    intersection && fadeIn(heroTitle.current);
  }, [heroTitle, intersection]);

  return (
    <section id="hero">
      <div ref={heroTitle} className="hero">
        <h1 className="hero__title">
          Hello, I am
          <span className="hero__name magic">H.Long Nguyen</span>
          <span className="hero__prof">Full Stack Developer</span>
        </h1>
      </div>
    </section>
  );
}
