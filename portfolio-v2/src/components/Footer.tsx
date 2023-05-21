import styles from "../styles/Footer.module.css";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/mail.svg";

export default function Footer() {
  return (
    <footer>
      <hr />
      <h1>Connect With Me</h1>
      <div className={styles.SocialIcons}>
        <img src={instagram} alt="" />
        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={mail} alt="" />
      </div>
      <h2>©Copyright 2023. Made by Kevin Duong</h2>
    </footer>
  );
}
