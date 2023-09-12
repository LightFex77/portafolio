import React from "react";
import ProjectSectionElement from "./inputs/ProjectSectionElement";
import { projectInformation } from "../ProjectInformation";

const HomeSectionProjects = () => {
  return (
    <div className="home-section-projects">
      {projectInformation.map((item, index) => (
        <ProjectSectionElement
          key={index}
          projectTitle={item.projectTitle}
          projectInformation={item.projectInformation}
          languageList={item.languageList}
          externalLinkGit={item.externalLinkGit}
          externalLinkProject={item.externalLinkProject}
          projectImg={item.projectImg}
          additionalClassName={index % 2 === 0 ? "even" : "odd"}
        />
      ))}
    </div>
  );
};

export default HomeSectionProjects;
