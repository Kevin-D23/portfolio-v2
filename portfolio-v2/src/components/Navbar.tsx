import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.NavbarContainer}>
      <ul className={styles.NavbarButtons}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}
