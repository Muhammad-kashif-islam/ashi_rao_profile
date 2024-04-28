import { useState } from "react";
import "./service.css";
export default function Service() {
  const [toggle, setToggleModal] = useState(0);

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i can do</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Frontend Web Designer </h3>
            </div>
            <span
              className="services__button"
              onClick={() => setToggleModal(1)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggle == 1 ? "services__modal active-modal" : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times "
                  id="close-modal"
                  onClick={() => setToggleModal(0)}
                ></i>
                <h3 className="services__modal-title">
                  Web <br /> Designing
                </h3>

                <p className="services__modal-description">
                  I specialize in crafting stunning user interfaces using
                </p>

                <ul className=" grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      <strong>HTML & CSS </strong>Building structured and
                      visually appealing layouts
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      <strong>React js </strong>Creating dynamic and interactive
                      user experiences.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      <strong>Bootstrap, Tailwind CSS </strong>
                      Expert to designs with Bootstrap,
                      <br /> & Rapid development using Tailwind css
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* backend  */}
          <div className="services__content">
            <div>
              <i className="uil uil-database services__icon"></i>
              <h3 className="services__title">
                Backend <br /> Development
              </h3>
            </div>
            <span
              className="services__button"
              onClick={() => setToggleModal(2)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggle == 2 ? "services__modal active-modal" : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times"
                  id="close-modal"
                  onClick={() => setToggleModal(0)}
                ></i>
                <h3 className="services__modal-title">
                  Laravel & MySQL Web Developer
                </h3>

                <p className="services__modal-description">
                  I specialize in developing websites using Laravel and MySQL
                </p>

                <ul className=" grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Expertise in Laravel framework for robust web development
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Proficiency in MySQL database management for efficient
                      data handling
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Customized solutions tailored to your project's needs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* apis   */}
          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                APIs
                <br /> Creations
              </h3>
            </div>
            <span
              className="services__button"
              onClick={() => setToggleModal(3)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggle == 3 ? "services__modal active-modal" : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times"
                  id="close-modal"
                  onClick={() => setToggleModal(0)}
                ></i>
                {/* //apis  */}
                <h3 className="services__modal-title">Develping APIs</h3>

                <p className="services__modal-description">
                  Experienced in implementing secure API authentication in
                  Laravel using
                </p>

                <ul className=" grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      <strong> Santum </strong>Proficient in simple API
                      authentication.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I can develope APIs using <strong>Passport JWT</strong>
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I'm an expert in crafting APIs with <strong>JWT </strong>{" "}
                      authentication
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
