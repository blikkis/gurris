import * as React from "react";
import "./contact.less";
import Ting from "../assets/ting.jpg";

const Contact: React.FC<any> = (): React.ReactElement => {
  return (
    <div className="main__contact">
      <div className="main__contact__content">
        <div className="main__contact__content__info">
          Om du har noen spennende oppdrag eller lignende, gjerne ta kontakt her
        </div>
        <div className="main__contact__content__mail">
          EPOST: GURO@GMAIL.COM
        </div>
      </div>
      <div className="main__contact__image">
        <img src={Ting} />
      </div>
    </div>
  );
};

export default Contact;
