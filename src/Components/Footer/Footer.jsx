export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <address className="footer__contacts">
          <span className="footer__contacts__elem">Tel: +49 173 455 24 39</span>
          <span className="footer__contacts__elem">
            Mail: hlong010100@gmail.com
          </span>
          <span className="footer__contacts__elem">
            Location: Nuremberg, Germany
          </span>
        </address>
        <ul className="footer__nav">
          <li className="footer__nav__elem">
            <a href="#about-me">About me</a>
          </li>
          <li className="footer__nav__elem">
            <a href="#technologies">Projects</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
