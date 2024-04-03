import styles from "../styles/ProjectsPage.module.css";
import discordProject from "../images/discordProject.png";
import desingThrivingProject from "../images/designThrivingProject.png";

type project = {
  imgURL: string;
  title: string;
  technologies: string[];
  description: string;
  gitURL: string;
  websiteURL: string;
};

export default function ProjectsPage() {
  const projects: project[] = [
    {
      imgURL: `${discordProject}`,
      title: "Discord Bot",
      technologies: ["Javascript", "NodeJS", "MongoDB", "Heroku"],
      description:
        "This discord bot is loaded with functions by request from the users of a server I’m a part of. Some of its capabilities include playing music, birthday reminders, and gambling.",
      gitURL: "https://github.com/Kevin-D23/Cool-Peeper-DSbot",
      websiteURL: "",
    },
    {
      imgURL: `${desingThrivingProject}`,
      title: "Digital Thriving",
      technologies: [
        "HTML",
        "CSS",
        "Typescript",
        "Tailwind",
        "MongoDB",
        "NextJS",
      ],
      description:
        "This project began as a challenge hosted by Riot Games and IDEO. Our goal was to design and develop a platform to welcome underrepresented communities in the gaming space.",
      gitURL: "https://github.com/designthriving/designthriving",
      websiteURL:
        "https://www.figma.com/file/RZmiZ8ITJ0RqsewuGxnRkR/Project%3A-Design-for-Digital-Thriving?type=design&node-id=3-10&t=6T1RJXclTz3lArsj-0",
    },
    {
      imgURL: `${desingThrivingProject}`,
      title: "Students Inferno",
      technologies: ["HTML", "CSS", "Javascript", "MongoDB", "React", "NextJS"],
      description:
        "Study companion app designed to help students find others to form study groups with. This platform combines the convenience of a dating app with the purpose of finding like-minded individuals.",
      gitURL: "https://github.com/Kevin-D23/CS35L-GP",
      websiteURL: "",
    },
  ];

  function reveal() {
    var reveals = document.querySelectorAll(`.${styles.Reveal}`);

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = windowHeight * 0.1;

      if (elementTop < windowHeight - elementVisible)
        reveals[i].classList.add(`${styles.Active}`);
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <section id="projects" className={styles.ProjectsPageContainer}>
      <h1>PROJECTS</h1>
      <ul className={styles.ProjectsContainer}>
        {projects.map((project, index) => {
          return (
            <li
              key={index}
              className={`${styles.Project} ${styles.Reveal}`}
              style={{
                transition: "all " + 0.5 + "s ease " + index * 0.1 + "s",
              }}
            >
              <img src={project.imgURL} alt="" />
              <div className={styles.ProjectContent}>
                <h2>{project.title}</h2>
                <h3>
                  Technologies:{" "}
                  <span>
                    {project.technologies.map((technology, index) => {
                      return technology + " ";
                    })}
                  </span>
                </h3>
                <p>{project.description}</p>
                <div className={styles.ProjectButtons}>
                  {project.websiteURL && (
                    <a
                      href={project.websiteURL}
                      target="_blank"
                      className={styles.DemoBtn}
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={project.gitURL}
                    target="_blank"
                    className={styles.CodeBtn}
                  >
                    Code
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
