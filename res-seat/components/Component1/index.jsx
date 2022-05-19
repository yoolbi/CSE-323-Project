import React from "react";
import "./Component1.css";

function Component1(props) {
  const { porkBelly } = props;

  return (
    <div className="component">
      <div className="image-container">
        <img className="image-2-1" src="/img/image-2-7@2x.png" />
        <img className="image-8" src="/img/image-8@2x.png" />
      </div>
      <div className="overlap-group-24">
        <div className="rectangle-27-2"></div>
        <div className="pork-belly-6 applesdgothicneob00-regular-normal-black-15px">{porkBelly}</div>
      </div>
    </div>
  );
}

export default Component1;
