import React from "react";
import Button from "./Button";

const ProjectSectionElement = ({
  additionalClassName,
  projectTitle,
  projectInformation,
  languageList,
  externalLinkGit,
  externalLinkProject,  
  projectImg
}) => {
  return (
    <>
      <section className={"section-project " + { additionalClassName }}>
        <div className="section-project-img">
          <img src={projectImg} />
        </div>
        <div className="section-project-information">
          <h3 style={{color: "#282524"}}>{projectTitle}</h3>
          <ul>
            {languageList.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <p>{projectInformation}</p>
          <div className="section-project-buttons">
            <Button
              onClick={() => window.open(externalLinkGit, "_blank")}
              buttonText="Ver Github"
            />
            <Button
              onClick={() => window.open(externalLinkProject, "_blank")}
              buttonText="Ver Página"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSectionElement;
