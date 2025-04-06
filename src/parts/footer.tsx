import * as React from "react";
import "./footer.less";
import stol from "../assets/hytte.jpg";
const Footer: React.FC<any> = (): React.ReactElement => {
  return (
    <div className="main__footer">
      <div className="main__footer__contact">
        <p className="main__footer__contact__info">
          Det er bare å ta kontakt om du har et prosjekt du trenger hjelp til
        </p>
        <div className="main__footer__contact__input">
          <label>Navn</label>
          <input />
        </div>
        <div className="main__footer__contact__input">
          <label>Epost</label>
          <input />
        </div>
        <div className="main__footer__contact__input">
          <label>Melding</label>
          <input />
        </div>
      </div>
      <div className="main__footer__about">
        <img src={stol} />
        <div className="main__footer__about__info">
          <p>
            Sitter i kontorfellesskapet K ATTEN <br />
            Københavngata 18
            <br />
            0566 Oslo
            <br />
            <br />
            kontakt@arkitektguroreinaas.no
          </p>
          <p className="main__foter__about__info__insta">INSTAGRAM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
