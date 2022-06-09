import React from "react";
import { Link } from "react-router-dom";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople14.css";

function ShoppingCartPeople14(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Remove_Black_24Dp1,
    people,
    wellBeIn,
    mins,
    line8,
    arrowDropDown,
    select,
    line7,
    group10Props,
    group11Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople13 screen">
        <div className="flex-col-44">
          <Link to="/hanam-details-menu1">
            <img className="group-52-10" src={group52} />
          </Link>
          <img className="line-1-13" src={line1} />
          <img className="dinner-table-1-3" src={dinnerTable1} />
          <div className="do-you-want-to-reser-3 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
        </div>
        <div className="flex-row-56 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-4">{weAre}</div>
          <div className="group-16-1">
            <Link to="/shopping-cartpeople112">
              <div className="group-7-3">
                <img className="outline_remove_black_24dp-1-34" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-4">{people}</div>
        </div>
        <div className="flex-row-57">
          <div className="well-be-in-4 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-119">
            <div className="group-17-15 border-1px-flamingo"></div>
            <div className="mins-4 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-8-1" src={line8} />
            <Link to="/shopping-cartpeople134">
              <img className="arrow-drop-down-4" src={arrowDropDown} />
            </Link>
            <div className="select-4 inter-extra-bold-black-15px">{select}</div>
          </div>
        </div>
        <img className="line-7-4" src={line7} />
        <Group2822 className={group2822Props.className} />
      </div>
    </div>
  );
}

export default ShoppingCartPeople14;
