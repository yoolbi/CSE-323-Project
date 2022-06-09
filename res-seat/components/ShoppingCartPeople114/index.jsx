import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group28 from "../Group28";
import "./ShoppingCartPeople114.css";

function ShoppingCartPeople114(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    lessThan15,
    line7,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople113 screen">
        <div className="flex-col-67">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-23" src={group52} />
          </Link>
          <img className="line-1-23" src={line1} />
          <img className="dinner-table-1-13" src={dinnerTable1} />
          <div className="do-you-want-to-reser-13 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-76 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-13">{weAre}</div>
          <div className="group-13-16">
            <Group11 src={group111Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-13">{people}</div>
        </div>
        <div className="flex-row-77">
          <div className="well-be-in-32 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-180">
            <div className="group-11-22 border-1px-flamingo"></div>
            <div className="mins-32 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-39" src={line6} />
            <img className="arrow-drop-down-32" src={arrowDropDown} />
            <div className="less-than-15-10 inter-extra-bold-black-15px">{lessThan15}</div>
          </div>
        </div>
        <img className="line-7-21" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople114;
