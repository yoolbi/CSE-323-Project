import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople113.css";

function ShoppingCartPeople113(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Remove_Black_24Dp1,
    outline_Add_Black_24Dp1,
    people,
    wellBeIn,
    mins,
    line71,
    arrowDropDown,
    select,
    line72,
    group10Props,
  } = props;

  return (
    <div className="shopping-cartpeople112 screen">
      <Link to="/hanam-details-menu1">
        <img className="group-52-22" src={group52} />
      </Link>
      <img className="line-1-22" src={line1} />
      <img className="dinner-table-1-12" src={dinnerTable1} />
      <div className="do-you-want-to-reser-12 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <div className="group-250">
        <div className="flex-row-74 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-12">{weAre}</div>
          <div className="group-14-1">
            <Link to="/shopping-cartpeople14">
              <div className="group-7-7">
                <img className="outline-26" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople13">
              <div className="group-8-57">
                <img className="outline-26" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-12">{people}</div>
        </div>
        <div className="flex-row-75">
          <div className="well-be-in-31 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-178">
            <div className="group-15-1 border-1px-flamingo"></div>
            <div className="mins-31 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-7-19" src={line71} />
            <Link to="/shopping-cartpeople124">
              <img className="arrow-drop-down-31" src={arrowDropDown} />
            </Link>
            <div className="select-9 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
      </div>
      <img className="line-7-20" src={line72} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople113;
