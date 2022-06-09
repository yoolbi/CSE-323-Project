import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople118.css";

function ShoppingCartPeople118(props) {
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
    line71,
    arrowDropDown,
    select,
    line72,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="shopping-cartpeople117 screen">
      <Link to="/uncle-s-details-menu1">
        <img className="group-52-27" src={group52} />
      </Link>
      <img className="line-1-27" src={line1} />
      <img className="dinner-table-1-17" src={dinnerTable1} />
      <div className="do-you-want-to-reser-17 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <div className="group-250-1">
        <div className="flex-row-82 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-17">{weAre}</div>
          <div className="group-14-2">
            <Group11 src={group11Props.src} className={group11Props.className} link="shopping-cartpeople17"/>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople16">
              <div className="group-8-59">
                <img className="outline_add_black_24dp-1-31" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-17">{people}</div>
        </div>
        <div className="flex-row-83">
          <div className="well-be-in-35 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-183">
            <div className="group-15-2 border-1px-flamingo"></div>
            <div className="mins-35 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-7-25" src={line71} />
            <Link to="/shopping-cartpeople131">
            <img className="arrow-drop-down-35" src={arrowDropDown} />
            </Link>
            
            <div className="select-11 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
      </div>
      <img className="line-7-26" src={line72} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople118;
