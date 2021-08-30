import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projItems = projects.map(project => {
      return (<div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.about}</p>
          {project.technologies.map(tech =>
            <button>{tech}</button>)}
        </div>)
  })

f
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projItems}</div>
    </div>
  );
}

export default ProjectList;
