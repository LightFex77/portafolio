import React from "react";
import Button from "./inputs/Button";

const HomeSectionPresentation = () => {
  return (
    <>
      <main className="main-home-presentation-information">
        <section className="home-section-presentation-information">
          <h1 style={{ color: "#282524", fontWeight: "600", fontSize: "40px"}}>Soy Andres Genes,</h1>
          <h1 style={{ color: "#F2BA38", fontWeight: "600", fontSize: "40px"}}>Desarrollador Web 👨🏻‍💻🇵🇾</h1>
          <h4 style={{paddingBottom: "20px", fontWeight: "400", fontSize: "12px"}}>🏠 Asunción, Paraguay</h4>
          <h3 style={{width: "550px", fontWeight: "600", fontSize: "16px"}}>
            Trabajo con <em style={{ color: "#20293ACC" }}>JavaScript</em> para
            transformar ideas creativas en aplicaciones web interactivas y
            atractivas
          </h3>
          <div className="presentation-information-buttons">
            <Button buttonText="Proyectos" additionalClassName="button-dark"/>
            <Button buttonText="@LightFex77" />
          </div>
        </section>
        <section className="home-section-presentation-photo">
        </section>
      </main>
      <div className="home-projects-section-header">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </>
  );
};

export default HomeSectionPresentation;
