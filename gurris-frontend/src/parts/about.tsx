import * as React from "react";
import Stol from "../assets/stol.jpg";
import "./about.less";

const About: React.FC<any> = (): React.ReactElement => {
  return (
    <div className="main__about" id="about">
      <div className="main__about__content">
        <div className="main__about__content__image">
          <img src={Stol} />
        </div>
        <div className="main__about__content__text">
          <h1 className="main__about__content__text__header">OM GURO</h1>
          <p className="main__about__content__text__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum <br />
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
