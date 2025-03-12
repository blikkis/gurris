import * as React from "react";
import "./contact-schema.less";
import Stol from "../assets/stol.jpg";
export const ContactSchema = () => {
  return (
    <div className="main__contacts" id="contacts">
      <div className="main__contacts__inputs">
        <div className="main_contacts__inputs__info">
          <p>Hei gjerne ta kontakt med meg om det er noe du lurer på:)</p>
        </div>
        <div className="main__contacts__header">Kontakt</div>
        <label>Navn</label>
        <input></input>
        <label>Epost</label>
        <input></input>
        <label>Melding</label>
        <input></input>
      </div>
      <div className="main__contacts__img">
        <img src={Stol} />
      </div>
    </div>
  );
};
