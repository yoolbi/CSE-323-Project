import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople17.css";

function ShoppingCartPeople17(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    people,
    wellBeIn,
    mins,
    line8,
    arrowDropDown,
    select,
    line7,
    group111Props,
    group10Props,
    group112Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople16 screen">
        <div className="flex-col-45">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-13" src={group52} />
          </Link>
          <img className="line-1-16" src={line1} />
          <img className="dinner-table-1-6" src={dinnerTable1} />
          <div className="do-you-want-to-reser-6 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
        </div>
        <div className="flex-row-60 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-6">{weAre}</div>
          <div className="group-16-2">
            <Group11 src={group111Props.src} className={group111Props.className} link="shopping-cartpeople117"/>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-6">{people}</div>
        </div>
        <div className="flex-row-61">
          <div className="well-be-in-6 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-121">
            <div className="group-17-16 border-1px-flamingo"></div>
            <div className="mins-6 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-8-2" src={line8} />
            <Link to="/shopping-cartpeople138">
              <img className="arrow-drop-down-6" src={arrowDropDown} />
            </Link>
            <div className="select-6 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <img className="line-7-7" src={line7} />
        <Group2822 className={group2822Props.className} />
      </div>
    </div>
  );
}

export default ShoppingCartPeople17;
