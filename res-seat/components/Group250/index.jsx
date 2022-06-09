import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./Group250.css";

function Group250(props) {
  const { number, className, group111Props, group111Props2, group112Props, right, left, link } = props;

  return (
    <div className={`group-248-1 ${className || ""}`}>
      <div className="flex-row-39 applesdgothicneob00-regular-normal-black-25px">
        <div className="we-are-1">We are</div>
        <div className="group-13-1">
          <Group11 src={group111Props.src} link={left}/>
          <Group10>{group111Props2.children}</Group10>
          <Group11 src={group112Props.src} className={group112Props.className} link={right}/>
        </div>
        <div className="people-1">people.</div>
      </div>
      <div className="flex-row-40">
        <div className="well-be-in-1 applesdgothicneob00-regular-normal-black-25px">We’ll be in</div>
        <div className="overlap-group1-92">
          <div className="group-11-6 border-1px-flamingo"></div>
          <div className="mins-1 applesdgothicneob00-regular-normal-black-25px">mins.</div>
          <img className="line-6-2" src="/img/line-6@2x.png" />
          <Link to={link}>
          <img className="arrow-drop-down-1" src="/img/arrow-drop-down@2x.png" />
          </Link>
          <div className="select-1 inter-extra-bold-black-15px">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default Group250;
