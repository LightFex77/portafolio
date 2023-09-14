import React from "react";
import Button from "./inputs/Button";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="main-page-header">
      <div className="header-logo-item">
      <Icon icon="fluent-emoji:waving-hand" height="4rem"/> <span>Hola!</span>
      </div>
      <div className="header-menu-item">
        <Button>
        Curriculum
        <Icon icon="akar-icons:download" height="1.5rem"/>
        </Button>
      </div>
    </header>
  )
}

export default Header
