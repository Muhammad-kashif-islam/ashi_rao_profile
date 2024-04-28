import React, { useEffect, useState } from "react";
import "./work.css";
import { projectsData, projectNav } from "./Data";
import WorkItems from "./WorkItems";
export default function Work() {
  const [item, setItem] = useState({
    name: "All",
  });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name == "All") {
      setProjects(projectsData);
    } else {
      let newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleOnClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <>
      <section id="work" className="">
        <h3 className="section__title">My Work</h3>
        <span className="section__subtitle">Some recent work</span>

        <div className="work__filters">
          {projectNav.map((navs, index) => (
            <span
              onClick={(e) => handleOnClick(e, index)}
              className={`work__item ${active == index ? "nav__active" : ""}`}
              key={index}
            >
              {navs}
            </span>
          ))}
        </div>
        <div className="work__container container grid">
          {projects.map((item, index) => {
            return <WorkItems item={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
}
