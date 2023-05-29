import styles from "../styles/AboutPage.module.css";
import image1 from "../images/about_img_1.jpeg";
import image2 from "../images/about_img_2.jpeg";
import image3 from "../images/about_img_3.jpeg";

export default function AboutPage() {
  const languages: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "C++",
  ];
  const tools: string[] = [
    "React",
    "MongoDB",
    "Tailwind",
    "Git",
    "NextJS",
    "Heroku",
  ];

  return (
    <section id="about" className={styles.AboutPageContainer}>
      <h1>ABOUT</h1>
      <div className={styles.ContentContainer}>
        <div className={styles.ImageContainer}>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className={styles.AboutMeContainer}>
        <div className={styles.ParagraphsContainer}>
          <h2>Get to know me!</h2>
          <p>
            My name is Kevin and I am a <span>front-end</span> software engineer with a
            passion for building <span>websites</span> and <span>web applications</span>. I am currently a
            junior at UCLA and majoring in computer science.
          </p>
          <p>
            I originally started coding as a hobby, but quickly found it as
            something that I am truly enjoy doing.
          </p>
          <p>
            On my free time, I enjoy going to the gym, playing video games,
            finding new places to eat, and spending time with family and
            friends.
          </p>
          <a href="">RESUME</a>
        </div>
        <div className={styles.SkillsContainer}>
          <h2>Languages</h2>
          <ul className={styles.LanguagesContainer}>
            {languages.map((language, index) => {
              return (
                <li key={index} className={styles.Language}>
                  {language}
                </li>
              );
            })}
          </ul>
          <h2>Tools</h2>
          <ul className={styles.ToolsContainer}>
            {tools.map((tool, index) => {
              return (
                <li key={index} className={styles.Tool}>
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}
