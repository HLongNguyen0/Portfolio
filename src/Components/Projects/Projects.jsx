import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { useIntersection } from "react-use";
import webstudio1 from "../../img/webstudio1.png";
import webstudio2 from "../../img/webstudio2.png";
import webstudio3 from "../../img/webstudio3.png";
import terryProducts1 from "../../img/terry-products1.png";
import terryProducts2 from "../../img/terry-products2.png";
import terryProducts3 from "../../img/terry-products3.png";
import filmoteka1 from "../../img/filmoteka1.png";
import filmoteka2 from "../../img/filmoteka2.png";
import filmoteka3 from "../../img/filmoteka3.png";
import freedom1 from "../../img/3dfreedom1.png";
import freedom2 from "../../img/3dfreedom2.png";
import freedom3 from "../../img/3dfreedom3.png";

export default function Projects() {
  const projects = [
    {
      name: "Filmoteka",
      link: "https://github.com/dab82/filmoteka-by-luckycoders",
      purpose:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi autem, voluptas aspernatur sequi distinctio.",
      tools: "HTML, SCSS, JavaScript",
      img: [filmoteka1, filmoteka2, filmoteka3],
    },
    {
      name: "3dFreedom",
      link: "https://github.com/dab82/3dfreedom",
      purpose:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi autem, voluptas aspernatur sequi distinctio.",
      tools: "HTML, SCSS, JavaScript",
      img: [freedom1, freedom2, freedom3],
    },
    {
      name: "Webstudio",
      link: "https://github.com/HLongNguyen0/goit-markup-hw-08",
      purpose:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi autem, voluptas aspernatur sequi distinctio.",
      tools: "HTML, SCSS, JavaScript",
      img: [webstudio1, webstudio2, webstudio3],
    },
    {
      name: "Terry Products",
      link: "https://github.com/HLongNguyen0/terry-products",
      purpose:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi autem, voluptas aspernatur sequi distinctio.",
      tools: "HTML, CSS, JavaScript, React",
      img: [terryProducts1, terryProducts2, terryProducts3],
    },
  ];

  const technologyTitle = useRef();
  const technologies = useRef();

  const intersection = useIntersection(technologyTitle, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const fadeIn = (elem1, elem2) => {
    gsap.to(elem1, {
      x: 0,
      opacity: 1,
      duration: 2,
      filter: "blur(0px)",
      ease: Power4.easeOut,
    });
    gsap.to(elem2, {
      x: 0,
      opacity: 1,
      duration: 2,
      filter: "blur(0px)",
      ease: Power4.easeOut,
      delay: 0.5,
      stagger: 0.3,
    });
  };

  useEffect(() => {
    intersection &&
      intersection.intersectionRatio &&
      fadeIn(technologyTitle.current, [...technologies.current.children]);
  }, [technologyTitle, technologies, intersection]);

  return (
    <section id="technologies">
      <div className="technologies">
        <h2 ref={technologyTitle} className="technologies__title magic">
          My projects
        </h2>
        <div ref={technologies} className="technologies__list">
          {projects.map((project) => (
            <a
              href={project.link}
              type="button"
              key={project.name}
              className="technologies__elem"
              target="_blank"
              rel="noreferrer"
            >
              <img src={project.img[0]} alt={project.name} />
              <div className="technologies__info">
                <h3>{project.name}</h3>
                <p>{project.purpose}</p>
              </div>
            </a>
          ))}
          <a
            className="technologies__elem"
            href="https://github.com/HLongNguyen0"
            target="_blank"
            rel="noreferrer"
          >
            See more ...
          </a>
        </div>
      </div>
    </section>
  );
}
