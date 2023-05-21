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
    <section className={styles.AboutPageContainer}>
      <div className={styles.ImageContainer}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <div className={styles.ContentContainer}>
        <h1>Get to know me!</h1>
        <p>
          My name is Kevin and I am a front-end software engineer with a passion
          for building websites and web applications. I am currently a junior at
          UCLA and majoring in computer science.
        </p>
        <p>
          I originally started coding as a hobby, but quickly found it as
          something that I am truly enjoy doing.
        </p>
        <p>
          On my free time, I enjoy going to the gym, playing video games,
          finding new places to eat, and spending time with family and friends.
        </p>
        <a href="">RESUME</a>
      </div>
      <div className={styles.SkillsContainer}>
        <h1>Languages</h1>
        <ul className={styles.LanguagesContainer}>
          {languages.map((language, index) => {
            return <li key={index} className={styles.Language}>{language}</li>
          })}
        </ul>
        <h1>Tools</h1>
        <ul className={styles.ToolsContainer}>
          {tools.map((tool, index) => {
            return <li key={index} className={styles.Tool}>{tool}</li>
          })}
        </ul>
      </div>
    </section>
  );
}
