import styles from "../styles/SocialsBar.module.css";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/mail.svg";

export default function SocialsBar() {
  return (
    <div className={styles.SocialsBarContainer}>
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
    </div>
  );
}
