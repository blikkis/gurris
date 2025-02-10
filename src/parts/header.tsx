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
        <div className="main__header__name--1">ARKITEKT</div>{" "}
        <div className="main__header__name--2">GURO REINAAS</div>
      </div>
      <div className="main__header__menu">
        <a href="#about">OM</a>
        <a href="#">ARBEID</a>
      </div>
    </div>
  );
};

export default Header;
