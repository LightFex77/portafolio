import React from "react";
import Button from "./Button";

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
         <h3 style={{color: "#282524"}}>{projectTitle}</h3>
          <ul>
            {languageList.map((item, index) => (
              <li key={index}><i class={item.icon}></i>{item.text}</li>
            ))}
          </ul>
          <p style={{fontSize: "20px", fontWeight: "400px"}}>{projectInformation}</p>
         </div>
          <div className="section-project-buttons">
            <Button
              onClick={() => window.open(externalLinkGit, "_blank")}
              additionalClassName="button-dark"
              buttonIcon="fa-brands fa-github"
            >
              Ver Github
            </Button>
            <Button
              onClick={() => window.open(externalLinkProject, "_blank")}
              buttonIcon="fa-solid fa-share-nodes"
              additionalClassName="button-yellow"
            >
              Ver Página
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSectionElement;
