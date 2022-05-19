import React from "react";
import "./Component132.css";

function Component132(props) {
  const {
    pumkinSoup,
    x15200Won,
    outline_Remove_Black_24Dp1,
    number,
    outline_Close_Black_24Dp1,
    outline_Add_Black_24Dp1,
  } = props;

  return (
    <div className="component-15-1">
      <div className="rectangle-27-30"></div>
      <div className="flex-col-75">
        <div className="pumkin-soup-13 applesdgothicneob00-regular-normal-black-23px">{pumkinSoup}</div>
        <div className="flex-row-123">
          <div className="x15200-won-9 applesdgothicneob00-regular-normal-black-16px">{x15200Won}</div>
          <div className="group-7-23">
            <img className="outline-21" src={outline_Remove_Black_24Dp1} />
          </div>
          <div className="overlap-group-123">
            <div className="number-49 applesdgothicneob00-regular-normal-black-18px">{number}</div>
          </div>
        </div>
      </div>
      <div className="flex-col-76">
        <img className="outline_close_black_24dp-1-8" src={outline_Close_Black_24Dp1} />
        <div className="group-8-15">
          <img className="outline-21" src={outline_Add_Black_24Dp1} />
        </div>
      </div>
    </div>
  );
}

export default Component132;
