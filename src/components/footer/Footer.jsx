import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Ashi</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#about" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="#" className="footer__social-icon" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="#" className="footer__social-icon" target="_blank">
              <i className="uil uil-facebook"></i>
            </a>
            <a href="#" className="footer__social-icon" target="_blank">
              <i className="uil uil-github"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Ashi Rao. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
