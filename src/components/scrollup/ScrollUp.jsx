import "./scrollup.css";

export default function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollup.style.display = "block";
    } else {
      scrollup.style.display = "none";
    }
  });
  return (
    <>
      <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}
