import React from "react";
import Button from "./Button";
import { Icon, iconExists } from "@iconify/react";

const ProjectSectionElement = ({
  additionalClassNameP,
  projectTitle,
  projectInformation,
  languageList,
  externalLinkGit,
  externalLinkProject,  
  projectImg,
}) => {
  return (
    <>
      <section className={`section-project ${ additionalClassNameP }`}>
        <div className="section-project-img">
          <img src={projectImg} />
        </div>
        <div className="section-project-information">
         <div className="section-project-text">
         <span>{projectTitle}</span>
          <ul>
            {languageList.map((item, index) => (
              <li key={index}><Icon icon={item.icon} height="1.5rem"/>{item.text}</li>
            ))}
          </ul>
          <p>{projectInformation}</p>
         </div>
          <div className="section-project-buttons">
            <Button
              onClick={() => window.open(externalLinkGit, "_blank")}
              additionalClassName="button-dark"
            >
              <Icon icon="akar-icons:github-fill" height="1.5rem"/>
              Ver Github
            </Button>
            <Button
              onClick={() => window.open(externalLinkProject, "_blank")}
              additionalClassName="button-yellow"
            >
              <Icon icon="akar-icons:network" height="1.5rem"/>
              Ver Página
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSectionElement;
