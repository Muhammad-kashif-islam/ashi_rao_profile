import { useState } from "react";
import "./qualification.css";
export default function Qualification() {
  const [toogle, setToggleActive] = useState(1);
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qulification</h2>
        <span className="section__subtitle">My Journy</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toogle == 1
                  ? "qualification__button qualification__active button-flex"
                  : "qualification__button button-flex"
              }
              onClick={() => setToggleActive(1)}
            >
              <i className="uil uil-graduation-cap"></i>
              Education
            </div>
            <div
              className={
                toogle == 2
                  ? "qualification__button qualification__active button-flex"
                  : "qualification__button button-flex"
              }
              onClick={() => setToggleActive(2)}
            >
              <i className="uil uil-briefcase"></i>
              Experience
            </div>
          </div>

          <div className="qualification__section">
            <div
              className={
                toogle == 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bs - IT</h3>
                  <span className="qualification__subtitle">
                    Okara Uinversity
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2020 - 2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">
                    Softin solutions
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - Present
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">ICS </h3>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2018 - 200
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Backend Developer</h3>
                  <span className="qualification__subtitle">
                    Softin solutions
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - Present
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toogle == 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">BS IT </h3>
                  <span className="qualification__subtitle">
                    Okara Uinversity
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">
                    Okara Uinversity
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - Present
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">
                    Okara Uinversity
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender-alt"></i>
                    2022 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
