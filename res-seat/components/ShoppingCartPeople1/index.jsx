import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople1.css";

function ShoppingCartPeople1(props) {
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
    <div className="shopping-cart-people1-39 screen">
      <Link to="/hanam-details-menu1">
        <img className="group-52-3" src={group52} />
      </Link>
      <img className="line-1-9" src={line1} />
      <img className="dinner-table-1" src={dinnerTable1} />
      <div className="do-you-want-to-reser applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <div className="group-248">
        <div className="flex-row-37 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are">{weAre}</div>
          <div className="group-13">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople14">
              <div className="group-8-1">
                <img className="outline_add_black_24dp-1" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people">{people}</div>
        </div>
        <div className="flex-row-38">
          <div className="well-be-in applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-91">
            <div className="group-11-1 border-1px-flamingo"></div>
            <div className="mins applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-1" src={line6} />
            <Link to="/shopping-cartpeople12">
              <img className="arrow-drop-down" src={arrowDropDown} />
            </Link>
            <div className="select inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
      </div>
      <img className="line-7-1" src={line7} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople1;
