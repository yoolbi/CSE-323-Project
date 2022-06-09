import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group255 from "../Group255";
import Group28 from "../Group28";
import "./ShoppingCartPeople122.css";

function ShoppingCartPeople122(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    people,
    line7,
    group111Props,
    group10Props,
    group112Props,
    group255Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople121 screen">
        <div className="flex-col-85">
          <Link to="/hanam-details-menu1">
            <img className="group-52-32" src={group52} />
          </Link>
          <img className="line-1-31" src={line1} />
          <img className="dinner-table-1-21" src={dinnerTable1} />
          <div className="do-you-want-to-reser-21 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-89 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-21">{weAre}</div>
          <div className="group-16-3">
            <Group11 src={group111Props.src} className={group111Props.className} link="shopping-cartpeople132"/>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-21">{people}</div>
        </div>
        <Group255 lessThan5={group255Props.lessThan5} link="shopping-cartpeople134"/>
        <img className="line-7-30" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople122;
