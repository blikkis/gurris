import * as React from "react";
import benk from "../assets/landing.jpg";
import "./landingpage.less";
import { useState, useEffect } from "react";

const Landing = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div className="landing">
      <div className="landing__content">
        <h3>
          <a href="http://instagram.com/_u/arkitektguroreinaas">instagram</a>
        </h3>
        <div className="landing__content__image">
          <img src={benk} />
        </div>
        <div className="landing__content__text">
          <p>
            Arkitekt Guro Reinaas <br />
            {isMobile && <br />}
            Du når meg på epost: kontakt@arkitektguroreinaas.no
            {isMobile && <br />}
            <br />
            eller telefon:
            {isMobile ? <br /> : " "}
            936 45 996
            <br />
            <br />
            {!isMobile && "Sitter i "}Kontorfellesskapet K ATTEN
            <br /> Københavngata 18 <br />
            0566 Oslo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
