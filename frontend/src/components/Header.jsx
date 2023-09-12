import React from "react";
import { NavLink } from "react-router-dom"
import Button from "./inputs/Button";

const Header = () => {
  return (
    <header className="main-page-header">
      <div className="header-logo-item">
        <h2 style={{color: "#F2BA38"}}>👋 Hola!</h2>
      </div>
      <div className="header-menu-item">
        <NavLink to="#">Inicio</NavLink>
        <NavLink to="#">Proyectos</NavLink>
        <Button buttonText="Curriculum"/>
      </div>
    </header>
  )
}

export default Header
