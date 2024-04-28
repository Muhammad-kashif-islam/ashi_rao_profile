import "./App.css";
import Header from "./components/includes/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skills";
import Service from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/works/Work";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <footer>
        <Footer />
        <ScrollUp />
      </footer>
    </>
  );
}

export default App;
