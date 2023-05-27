import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  window.onload = init;

  const [currentSection, setCurrentSection] = useState<number>(0);
  let sectionPositions: (number | undefined)[] = [];

  useEffect(() => {
    init();
  }, [setCurrentSection]);

  function init() {
    sectionPositions = [
      document.getElementById("home")?.offsetTop,
      document.getElementById("projects")?.offsetTop,
      document.getElementById("about")?.offsetTop,
      document.getElementById("contact")?.offsetTop,
    ];
  }

  window.addEventListener("scroll", checkCurrentSection);

  function checkCurrentSection() {
    const position = window.scrollY;
    console.log(position);
    console.log(sectionPositions);
    if (
      sectionPositions[0] !== undefined &&
      sectionPositions[1] !== undefined &&
      position >= sectionPositions[0] &&
      position < sectionPositions[1]
    )
      setCurrentSection(0);
    else if (
      sectionPositions[1] !== undefined &&
      sectionPositions[2] !== undefined &&
      position >= sectionPositions[1] &&
      position < sectionPositions[2]
    )
      setCurrentSection(1);
    else if (
      sectionPositions[2] !== undefined &&
      sectionPositions[3] !== undefined &&
      position >= sectionPositions[2] &&
      position < sectionPositions[3]
    )
      setCurrentSection(2);
    else if (
      sectionPositions[3] !== undefined &&
      position >= sectionPositions[3]
    )
      setCurrentSection(3);
  }

  return (
    <nav className={styles.NavbarContainer}>
      <ul className={styles.NavbarButtons}>
        <li>
          <a href="#home" className={currentSection === 0 ? styles.Active : ""}>
            home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={currentSection === 1 ? styles.Active : ""}
          >
            projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={currentSection === 2 ? styles.Active : ""}
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={currentSection === 3 ? styles.Active : ""}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
