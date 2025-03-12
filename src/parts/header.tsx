import * as React from "react";

type HeaderProps = {
  isScrolled: boolean;
};

const Header: React.FC<HeaderProps> = ({ isScrolled }): React.ReactElement => {
  return (
    <div className="main__header">
      <div
        className={
          !isScrolled
            ? "main__header__name unscrolled"
            : "main__header__name scrolled"
        }
      >
        <a className="main__header__name--1" href="#">
          ARKITEKT
        </a>{" "}
        <a className="main__header__name--2" href="#">
          GURO REINAAS
        </a>
      </div>
      <div className="main__header__menu">
        <a href="#work">ARBEID</a>
        <a href="#about">OM</a>
        <a href="#contacts">KONTAKT</a>
      </div>
    </div>
  );
};

export default Header;
