import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople18.css";

function ShoppingCartPeople18(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Add_Black_24Dp1,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    line7,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="shopping-cartpeople17 screen">
      <Link to="/uncle-s-details-menu1">
        <img className="group-52-14" src={group52} />
      </Link>
      <img className="line-1-17" src={line1} />
      <img className="dinner-table-1-7" src={dinnerTable1} />
      <div className="do-you-want-to-reser-7 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <div className="group-249-1">
        <div className="flex-row-62 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-7">{weAre}</div>
          <div className="group-13-5">
            <Group11 src={group11Props.src} className={group11Props.className} link="/shopping-cartpeople1"/>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople117">
              <div className="group-8-55">
                <img className="outline_add_black_24dp-1-28" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-7">{people}</div>
        </div>
        <div className="flex-row-63">
          <div className="well-be-in-7 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-122">
            <div className="group-11-10 border-1px-flamingo"></div>
            <div className="mins-7 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-27" src={line6} />
            <Link to="/shopping-cartpeople116">
              <img className="arrow-drop-down-7" src={arrowDropDown} />
            </Link>
            
            <div className="select-7 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
      </div>
      <img className="line-7-8" src={line7} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople18;
