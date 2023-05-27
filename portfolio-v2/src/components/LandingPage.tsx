import styles from "../styles/LandingPage.module.css";
import arrow from "../icons/arrow.svg";

export default function LandingPage() {
  return (
    <section id="home" className={styles.LandingPageContainer}>
      <div className={styles.WelcomeMessageContainer}>
        <h2>hello, my name is</h2>
        <h1>Kevin Duong</h1>
        <div className={styles.TypewriterTextContainer}>
          <img src={arrow} />
          <ul>
            <li><span className={styles.first}>Software Engineer</span></li>
            <li><span className={styles.second}>Web Developer</span></li>
            <li><span className={styles.third}>Innovator</span></li>
            <li><span className={styles.fourth}>Creator</span></li>
          </ul>
        </div>
        <h3>
          I specialize in <span>front-end</span> development and try to bring
          magic to the internet using world-class tools and technologies.
        </h3>
        <a href="#projects">learn more</a>
      </div>
    </section>
  );
}
