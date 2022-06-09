import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group255 from "../Group255";
import Group28 from "../Group28";
import "./ShoppingCartPeople137.css";

function ShoppingCartPeople137(props) {
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
      <div className="shopping-cartpeople136 screen">
        <div className="flex-col-104">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-47" src={group52} />
          </Link>
          <img className="line-1-47" src={line1} />
          <img className="dinner-table-1-36" src={dinnerTable1} />
          <div className="do-you-want-to-reser-36 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-120 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-36">{weAre}</div>
          <div className="group-14-8">
            <Group11 src={group11Props.src} className={group11Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople128">
              <div className="group-8-71">
                <img className="outline_add_black_24dp-1-43" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-36">{people}</div>
        </div>
        <Group255 lessThan5={group255Props.lessThan5} />
        <img className="line-7-45" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople137;