import React from "react";
import Container from "react-bootstrap/esm/Container";
import Project from "../Project";
import projects from "../projects.json";



function ProjectGallery() {
  return (
    /*<div>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>*/
    <div>
      <Container>
      <h1 style={{marginTop: "5vh", marginBottom: "3vh"}}>My Projects</h1>
      <Project
       id= {projects[0].id}
       title= {projects[0].title}
       image= {projects[0].imageName}
       github= {projects[0].github}
       deployed= {projects[0].deployed}
       description= {projects[0].description}>
      </Project>

      <Project 
      title= {projects[1].title}
      image= {projects[1].imageName}
      github= {projects[1].github}
      deployed= {projects[1].deployed}
      description = {projects[1].description}>
      </Project>

      <Project
       title= {projects[2].title}
       image= {projects[2].imageName}
       github= {projects[2].github}
       deployed= {projects[2].deployed}
       description = {projects[2].description}>
      </Project>

      <Project
       title= {projects[3].title}
       image= {projects[3].imageName}
       github= {projects[3].github}
       deployed= {projects[3].deployed}
       description = {projects[3].description}>
       </Project>

      <Project
       title= {projects[4].title}
       image= {projects[4].imageName}
       github= {projects[4].github}
       deployed= {projects[4].deployed}
       description = {projects[4].description}>
      </Project>

      <Project
       title= {projects[5].title}
       image= {projects[5].imageName}
       github= {projects[5].github}
       deployed= {projects[5].deployed}
       description = {projects[5].description}>
       </Project>
      
      </Container>
    </div>
  );
}

export default ProjectGallery;
