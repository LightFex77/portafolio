import React from "react";
import Button from "./inputs/Button";
import me from "../assets/me.png";
import frame from "../assets/Frame.png";
import { Icon } from "@iconify/react";
import { images } from "../assets/images";

const Landing = () => {
  return (
    <>
      <main className="main-home-presentation-information">
        <section className="home-section-presentation-information">
          <h1 className="presentation-information-h1">
            <span>Soy Andres Genes,</span>
            <br />
            <span className="information-h1-second-span">
              Desarrollador Web
              <span className="h1-second-span-img">
              <img src={images.technologist} /><img src={images.flag} />
              </span>
            </span>
          </h1>
          <span className="information-address-span">
            🏠 Asunción, Paraguay
          </span>
          <p className="information-description-p">
            Trabajo con <i>JavaScript</i> para transformar ideas creativas en
            aplicaciones web interactivas y atractivas
          </p>
          <div className="presentation-information-buttons">
            <Button additionalClassName="button-dark">
              <span>Proyectos</span>
              <Icon icon="akar-icons:network" height="1.5rem" />
            </Button>
            <Button>
              <span>@LightFex77</span>
              <Icon
                icon="akar-icons:github-fill"
                height="1.5rem"
                color="#282524"
              />
            </Button>
          </div>
        </section>
        <section className="home-section-presentation-photo">
          <img className="presentation-photo-frame" src={frame} />
          <img src={me} />
        </section>
        <div className="home-projects-section-header">
          <ul>
            <li>
              <i class= "fa-brands fa-js fa-xl" /> JAVASCRIPT
            </li>
            <li>
              <Icon icon="fa6-brands:react" height="2rem" /> REACT
            </li>
            <li>
              <Icon icon="nonicons:html-16" height="2rem" />
              HTML & CSS
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Landing;
