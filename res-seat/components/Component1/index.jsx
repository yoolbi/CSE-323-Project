import React from "react";
import "./Component1.css";

function Component1(props) {
  const { porkBelly, className } = props;

  return (
    <div className={`component-1-1 ${className || ""}`}>
      <div className="image-container-10">
        <img className="image-2-10" src="/img/image-2-7@2x.png" />
        <img className="image-8-10" src="/img/image-8@2x.png" />
      </div>
      <div className="overlap-group-401">
        <div className="rectangle-27-26"></div>
        <div className="pork-belly-11 applesdgothicneob00-regular-normal-black-15px">{porkBelly}</div>
      </div>
    </div>
  );
}

export default Component1;
