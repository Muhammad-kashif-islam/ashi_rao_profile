import React, { useState } from "react";
import "./header.css";
function Header() {
  //change header color on scrool

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");

    if (this.scrollY > 80) {
      header.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "";
    }
  });

  const [toggle, setToggle] = useState(false);
  const [navActive, toggleActive] = useState("#home");
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Ashi
          </a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={
                    navActive == "#home"
                      ? "active__link nav__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#home")}
                >
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={
                    navActive == "#about"
                      ? "nav__link active__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#about")}
                >
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skill"
                  className={
                    navActive == "#skills"
                      ? "active__link nav__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#skills")}
                >
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className={
                    navActive == "#services"
                      ? "active__link nav__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#services")}
                >
                  <i className="uil uil-briefcase nav__icon"></i>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  className={
                    navActive == "#qualification"
                      ? "active__link nav__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#qualification")}
                >
                  <i className="uil uil-scenery nav__icon"></i>
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={
                    navActive == "#contact"
                      ? "active__link nav__link"
                      : "nav__link"
                  }
                  onClick={() => toggleActive("#contact")}
                >
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          <div className="nav__toggle">
            <i className="uil uil-apps" onClick={() => setToggle(!toggle)}></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
