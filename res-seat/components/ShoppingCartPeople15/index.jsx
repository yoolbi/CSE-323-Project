import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople15.css";

function ShoppingCartPeople15(props) {
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
    line6,
    arrowDropDown,
    select,
    line7,
    group10Props,
  } = props;

  return (
    <div className="shopping-cartpeople14 screen">
      <Link to="/hanam-details-menu1">
        <img className="group-52-11" src={group52} />
      </Link>
      <img className="line-1-14" src={line1} />
      <img className="dinner-table-1-4" src={dinnerTable1} />
      <div className="do-you-want-to-reser-4 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <div className="group-249">
        <div className="flex-row-58 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-5">{weAre}</div>
          <div className="group-13-4">
            <Link to="/shopping-cart-people1-39">
              <div className="group-7-4">
                <img className="outline-25" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople112">
              <div className="group-8-54">
                <img className="outline-25" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-5">{people}</div>
        </div>
        <div className="flex-row-59">
          <div className="well-be-in-5 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-120">
            <div className="group-11-9 border-1px-flamingo"></div>
            <div className="mins-5 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-26" src={line6} />
            <Link to="/shopping-cartpeople111">
              <img className="arrow-drop-down-5" src={arrowDropDown} />
            </Link>
            <div className="select-5 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
      </div>
      <img className="line-7-5" src={line7} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople15;
