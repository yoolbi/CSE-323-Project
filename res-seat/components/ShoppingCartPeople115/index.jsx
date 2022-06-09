import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group28 from "../Group28";
import "./ShoppingCartPeople115.css";

function ShoppingCartPeople115(props) {
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
    lessThan10,
    line7,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople114 screen">
        <div className="flex-col-68">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-24" src={group52} />
          </Link>
          <img className="line-1-24" src={line1} />
          <img className="dinner-table-1-14" src={dinnerTable1} />
          <div className="do-you-want-to-reser-14 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-78 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-14">{weAre}</div>
          <div className="group-13-17">
            <Group11 src={group111Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-14">{people}</div>
        </div>
        <div className="flex-row-79">
          <div className="well-be-in-33 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-181">
            <div className="group-11-23 border-1px-flamingo"></div>
            <div className="mins-33 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-40" src={line6} />
            <img className="arrow-drop-down-33" src={arrowDropDown} />
            <div className="less-than-10-10 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <img className="line-7-22" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople115;
