import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.NavbarContainer}>
      <h1 className={styles.Logo}>Kevin Duong</h1>
      <ul className={styles.NavbarButtons}>
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
