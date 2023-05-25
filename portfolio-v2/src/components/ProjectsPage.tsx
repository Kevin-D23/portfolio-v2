import styles from "../styles/ProjectsPage.module.css";

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
      imgURL: "",
      title: "Discord Bot",
      technologies: ["Javascript", "NodeJS", "MongoDB", "Heroku"],
      description:
        "This discord bot is loaded with functions by request from the users of a server I’m a part of. Some of its capabilities include playing music, birthday reminders, and gambling.",
      gitURL: "https://github.com/Kevin-D23/Cool-Peeper-DSbot",
      websiteURL: "",
    },
    {
      imgURL: "",
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
      imgURL: "",
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
      <hr />
      <ul className={styles.ProjectsContainer}>
        {projects.map((project, index) => {
          return (
            <li key={index} className={styles.Project}>
              <img src={project.imgURL} alt="" />
              <h1>{project.title}</h1>
              <h2>
                Technologies:{" "}
                <span>
                  {project.technologies.map((technology, index) => {
                    return technology + " ";
                  })}
                </span>
              </h2>
              <p>{project.description}</p>
              {project.websiteURL && <a href={project.websiteURL}></a>}
              <a href={project.gitURL}></a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
