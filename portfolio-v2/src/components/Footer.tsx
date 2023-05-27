import styles from "../styles/Footer.module.css";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/mail.svg";

export default function Footer() {
  return (
    <footer className={styles.FooterContainer}>
      <hr />
      <h1>Connect With Me</h1>
      <div className={styles.SocialIcons}>
        <a href="https://www.instagram.com/kevinxduongg/" target="_blank">
          <img src={instagram} alt="" />
        </a>
        <a href="https://github.com/Kevin-D23" target="_blank">
          <img src={github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-duong-30148325a/"
          target="_blank"
        >
          <img src={linkedin} alt="" />
        </a>
        <a href="mailto:kevinduong111@gmail.com" target="_blank">
          <img src={mail} alt="" />
        </a>
      </div>
      <h2>©Copyright 2023. Made by Kevin Duong</h2>
    </footer>
  );
}
