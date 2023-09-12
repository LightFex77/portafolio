import React from "react";
import Button from "./inputs/Button";

const HomeSectionPresentation = () => {
  return (
    <>
      <main className="main-home-presentation-information">
        <section className="home-section-presentation-information">
          <h1 style={{ color: "#282524" }}>Soy Andres Genes,</h1>
          <h1 style={{ color: "#F2BA38" }}>Desarrollador Web 👨🏻‍💻🇵🇾</h1>
          <h4>🏠 Asunción, Paraguay</h4>
          <h3 className="presentation-information-text">
            Trabajo con <em style={{ color: "#20293ACC" }}>JavaScript</em> para
            transformar ideas creativas en aplicaciones web interactivas y
            atractivas
          </h3>
          <div className="presentation-information-buttons">
            <Button buttonText="Proyectos" />
            <Button buttonText="@LightFex77" />
          </div>
        </section>
        <section className="home-section-presentation-photo">
          <img src="#" className="presentation-photo-me" />
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
