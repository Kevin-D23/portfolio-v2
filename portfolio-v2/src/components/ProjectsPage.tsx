import styles from "../styles/ProjectsPage.module.css";
import discordProject from '../images/discordProject.png'
import desingThrivingProject from '../images/designThrivingProject.png'

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
      gitURL: "",
      websiteURL: "",
    },
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
      title: "Discord Bot",
      technologies: ["Javascript", "NodeJS", "MongoDB", "Heroku"],
      description:
        "This discord bot is loaded with functions by request from the users of a server I’m a part of. Some of its capabilities include playing music, birthday reminders, and gambling.",
      gitURL: "https://github.com/Kevin-D23/Cool-Peeper-DSbot",
      websiteURL: "",
    },
  ];

  return (
    <section id='projects' className={styles.ProjectsPageContainer}>
      <h1>PROJECTS</h1>
      <ul className={styles.ProjectsContainer}>
        {projects.map((project, index) => {
          return (
            <li key={index} className={styles.Project}>
              <img src={project.imgURL} alt="" />
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
              {project.websiteURL && <a href={project.websiteURL}>Demo</a>}
              <a href={project.gitURL}>Code</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
