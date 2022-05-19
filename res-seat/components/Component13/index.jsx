import React from "react";
import "./Component13.css";

function Component13(props) {
  const { image8, pumkinSoup, x15200Won, className } = props;

  return (
    <div className={`component-13 ${className || ""}`}>
      <div className="overlap-group-33">
        <div className="rectangle-27-9"></div>
        <img className="image-8-7" src={image8} />
      </div>
      <div className="flex-col-17">
        <div className="pumkin-soup applesdgothicneob00-regular-normal-black-23px">{pumkinSoup}</div>
        <div className="flex-row-18">
          <div className="x15200-won applesdgothicneob00-regular-normal-black-16px">{x15200Won}</div>
          <div className="group-7-1">
            <img className="outline-1" src="/img/outline-remove-black-24dp-1@2x.png" />
          </div>
          <div className="overlap-group-34">
            <div className="number-8 applesdgothicneob00-regular-normal-black-18px">1</div>
          </div>
        </div>
      </div>
      <div className="flex-col-18">
        <img className="icon-close-1" src="/img/outline-close-black-24dp-1@2x.png" />
        <div className="group-8">
          <img className="outline-1" src="/img/outline-add-black-24dp-1@2x.png" />
        </div>
      </div>
    </div>
  );
}

export default Component13;
