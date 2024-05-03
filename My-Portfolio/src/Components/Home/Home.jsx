import React, { useRef, useState, useEffect } from "react";
import styles from "./Home.module.css";
import style from "./Nav.module.css";
import About from "../About/About";
import Project from "../Project/Project";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const [activeLink, setActiveLink] = useState(null);

  function showmenu() {
    var x = document.getElementById("ul");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function scrollToSection(sectionRef, link) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveLink(link);
  }

  useEffect(() => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <nav>
        <div className={style.name}>
          <a href="/">
            <label> Numan</label>
          </a>
        </div>
        <ul id="ul">
          <li
            onClick={() => scrollToSection(homeRef, "Home")}
            className={activeLink === "Home" ? style.activeLink : ""}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(aboutRef, "About")}
            className={activeLink === "About" ? style.activeLink : ""}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(projectsRef, "Projects")}
            className={activeLink === "Projects" ? style.activeLink : ""}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(blogRef, "Blog")}
            className={activeLink === "Blog" ? style.activeLink : ""}
          >
            Blog
          </li>
          <li
            onClick={() => scrollToSection(contactRef, "Contact")}
            className={activeLink === "Contact" ? style.activeLink : ""}
          >
            Contact
          </li>
        </ul>

        <div className={style.menubar} onClick={showmenu}>
          <img src="images/menu.png" alt="menu" />
        </div>
      </nav>

      <section ref={homeRef} className={styles.home}>
        <div
          className={styles.icons}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <a href="https://www.facebook.com/nouman.shahid.773?mibextid=D4KYlr">
            <img src="images/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/numan.shahid_?igshid=OGQ5ZDc2ODk2ZA==">
            <img src="images/instagram.png" alt="" />
          </a>
          <a href="http://www.linkedin.com/in/numan-shahid">
            <img src="images/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Nouman-Shahid">
            <img src="images/github.png" alt="" />
          </a>
        </div>

        <div
          className={styles.text}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2>
            Hello, I am <br /> <br /> <span>Numan Shahid</span>
          </h2>

          <p>
            "Front-End Developer with <span>Full-Stack</span> Ambitions." 👨‍💻
          </p>

          <div className={styles.btns}>
            <button
              onClick={() => scrollToSection(aboutRef, "About")}
              className={activeLink === "About" ? style.activeLink : ""}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection(contactRef, "Contact")}
              className={activeLink === "Contact" ? style.activeLink : ""}
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src="images/myimage.jpg"
            alt=""
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>
      </section>

      <section ref={aboutRef} className={styles.about}>
        <About />
      </section>

      <section ref={projectsRef} className={styles.projects}>
        <Project />
      </section>

      <section ref={blogRef} className={styles.blog}>
        <Blog />
      </section>

      <section ref={contactRef} className={styles.contact}>
        <Contact />
      </section>
    </>
  );
};

export default Home;
