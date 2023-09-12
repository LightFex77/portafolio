import React from "react";
import Button from "./Button";

const ProjectSectionElement = ({
  additionalClassNameP,
  projectTitle,
  projectInformation,
  languageList,
  externalLinkGit,
  externalLinkProject,  
  projectImg
}) => {
  return (
    <>
      <section className={`section-project ${ additionalClassNameP }`}>
        <div className="section-project-img" style={{background: `url("${projectImg}")`}}>
        </div>
        <div className="section-project-information">
         <div className="section-project-text">
         <h3 style={{color: "#282524"}}>{projectTitle}</h3>
          <ul>
            {languageList.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <p>{projectInformation}</p>
         </div>
          <div className="section-project-buttons">
            <Button
              onClick={() => window.open(externalLinkGit, "_blank")}
              buttonText="Ver Github"
              additionalClassName="button-dark"
            />
            <Button
              onClick={() => window.open(externalLinkProject, "_blank")}
              buttonText="Ver Página"
              additionalClassName="button-yellow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSectionElement;
