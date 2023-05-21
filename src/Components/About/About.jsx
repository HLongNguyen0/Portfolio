import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { useIntersection } from "react-use";
import me from "../../img/me.png";

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
      <div class="about-me">
        <div ref={text} class="about-me__info">
          <h2 class="magic">About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            pariatur hic, ipsa laudantium accusantium quidem mollitia soluta,
            quam iusto nam alias natus! Similique repellendus commodi
            dignissimos veritatis quae accusantium reprehenderit soluta aliquam,
            nisi assumenda eum at voluptatibus rem autem placeat corporis porro
            mollitia quia, numquam libero. Quo corporis magni iste laboriosam
            repellendus suscipit nostrum temporibus modi eos doloremque? Fugit
            sit cumque, placeat voluptatum temporibus sapiente, reiciendis
            labore tenetur nostrum dignissimos magni veniam molestias, ipsum
            dolorem quia officiis at omnis repellat aliquam enim? Mollitia esse
            inventore incidunt sit animi dolore, totam, explicabo ullam debitis
            praesentium, excepturi itaque natus facilis quasi error?
          </p>
        </div>
        <div class="about-me__img">
          <img src={me} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
