import { github, telegram, messenger, linkedin } from "../../img";
import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { useIntersection } from "react-use";

export default function Sidebar() {
  const icons = useRef();

  const intersection = useIntersection(icons, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const fadeIn = (elem) => {
    gsap.set("body", { opacity: 1 });
    gsap.to(elem, {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 3,
      ease: Power4.easeOut,
      delay: 1,
      stagger: 0.3,
    });
  };

  useEffect(() => {
    intersection && fadeIn([...icons.current.children]);
  }, [icons, intersection]);

  return (
    <ul ref={icons} className="sidebar">
      <li className="icon">
        <a
          href="https://github.com/HLongNguyen0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </li>
      <li className="icon">
        <a href="https://t.me/HLongNguyen" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
      </li>
      <li className="icon">
        <a href="https://m.me/HLongNguyen0/" target="_blank" rel="noreferrer">
          <img src={messenger} alt="messenger" />
        </a>
      </li>
      <li className="icon">
        <a
          href="https://www.linkedin.com/in/leo-nguyen-3b9a1925b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li className="icon">
        <img src="" alt="" />
      </li>
    </ul>
  );
}
