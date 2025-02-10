import * as React from "react";
import { useState } from "react";
import "./workpart.less";

type WorkProps = {
  title: string;
  desc: string;
  direction: string;
  imgSrc: string;
};

const WorkPart: React.FC<WorkProps> = ({
  direction,
  imgSrc,
  title,
  desc,
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main__work-part">
      <div
        className={
          `main__work-part__card ${direction} ` + (isOpen ? "open " : "")
        }
      >
        <div className="main__work-part__card__info">{title}</div>
        <div className={`main__work-part__card__text ` + direction}>{desc}</div>
        <div
          className={
            `main__work-part__card__read-more` + (isOpen ? " close" : "")
          }
          onMouseOver={() => setIsOpen(true)}
        >
          <a>{!isOpen ? "les mer" : ""}</a>
        </div>
      </div>
      <div className={`main__work-part__img ` + direction}>
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default WorkPart;
