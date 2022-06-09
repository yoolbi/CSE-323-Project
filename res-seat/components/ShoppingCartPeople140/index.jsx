import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group255 from "../Group255";
import Group28 from "../Group28";
import "./ShoppingCartPeople140.css";

function ShoppingCartPeople140(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Add_Black_24Dp1,
    people,
    line7,
    group11Props,
    group10Props,
    group255Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople139 screen">
        <div className="flex-col-107">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-50" src={group52} />
          </Link>
          <img className="line-1-50" src={line1} />
          <img className="dinner-table-1-39" src={dinnerTable1} />
          <div className="do-you-want-to-reser-39 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-123 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-39">{weAre}</div>
          <div className="group-14-10">
            <Group11 src={group11Props.src} className={group11Props.className} link="shopping-cartpeople120"/>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople123">
              <div className="group-8-73">
                <img className="outline_add_black_24dp-1-45" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-39">{people}</div>
        </div>
        <Group255 lessThan5={group255Props.lessThan5} />
        <img className="line-7-48" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople140;
