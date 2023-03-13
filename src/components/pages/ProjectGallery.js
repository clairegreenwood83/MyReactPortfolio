import React from "react";
import Project from "../Project";
import projects from "../projects.json";

function ProjectGallery() {
  return (
    <div>
      <Project
       title= {projects[0].title}
       //image = {project1}
       github= {projects[0].github}
       deployed= {projects[0].deployed}
       description = {projects[0].description}>
      </Project>

      <Project 
      title= {projects[1].title}
      //image = {project2}
      github= {projects[1].github}
      deployed= {projects[1].deployed}
      description = {projects[1].description}>
      
      </Project>

      <Project></Project>
      <Project></Project>
      <Project></Project>
      <Project></Project>
    </div>
  );
}

export default ProjectGallery;
