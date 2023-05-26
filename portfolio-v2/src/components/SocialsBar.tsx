import styles from "../styles/SocialsBar.module.css";
import github from "../icons/github.svg";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/mail.svg";

export default function SocialsBar() {
  return (
    <div className={styles.SocialsBarContainer}>
      <div className={styles.SocialIcons}>
        <img src={instagram} alt="" />
        <img src={github} alt="" />
        <img src={linkedin} alt="" />
        <img src={mail} alt="" />
      </div>
    </div>
  );
}
