import React from "react";
import "./Component32.css";

function Component32(props) {
  const { overlapGroup4, className } = props;

  return (
    <div className={`component-32 ${className || ""}`}>
      <div className="overlap-group4-167" style={{ backgroundImage: `url(${overlapGroup4})` }}>
        <div className="seans-restaurant-33 inter-extra-bold-black-25px">Sean’s Restaurant</div>
        <div className="overlap-group-721">
          <div className="text-52 inter-extra-bold-white-40px">
            <span className="span-192 inter-extra-bold-harlequin-40px">&nbsp;</span>
            <span className="span-192 inter-extra-bold-apple-40px">&nbsp;</span>
            <span className="span-192 inter-extra-bold-spicy-pink-40px">30</span>
            <span className="span-192 inter-extra-bold-apple-40px">&nbsp;</span>
            <span className="span-192 inter-extra-bold-black-40px"></span>
          </div>
          <div className="min-waiting-1 inter-extra-bold-black-25px-2">min waiting...</div>
          <img className="line-1-112" src="/img/line-7@2x.png" />
        </div>
        <div className="flex-row-403">
          <div className="overlap-group1-463">
            <div className="x270m inter-thin-black-18px">270m</div>
            <img className="line-4-12" src="/img/line-4@2x.png" />
          </div>
          <img className="icon-star-394" src="/img/star-2@2x.png" />
          <div className="text-53 inter-thin-black-18px">4.9 (22)</div>
          <img className="line-5-68" src="/img/line-4@2x.png" />
          <div className="overlap-group2-313">
            <div className="are-going-15 inter-thin-black-18px">Are going...</div>
            <div className="number-205 inter-extra-bold-apple-24px">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component32;
