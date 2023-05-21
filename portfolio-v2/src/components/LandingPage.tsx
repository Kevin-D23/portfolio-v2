import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <section className={styles.LandingPageContainer}>
      <div className={styles.WelcomeMessageContainer}>
        <h2>hello, my name is</h2>
        <h1>Kevin Duong</h1>
        <div className={styles.TypewriterTextContanier}>
          <ul>
            <li>Software Engineer</li>
            <li>Web Developer</li>
            <li>Innovator</li>
            <li>Creator</li>
          </ul>
        </div>
        <h3>
          I specialize in <span>front-end</span> development and try to bring magic to the
          internet using world-class tools and technologies.
        </h3>
        <a href='#projects'>learn more</a>
      </div>
    </section>
  );
}
