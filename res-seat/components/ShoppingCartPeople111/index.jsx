import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group255 from "../Group255";
import Group28 from "../Group28";
import "./ShoppingCartPeople111.css";

function ShoppingCartPeople111(props) {
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
      <div className="shopping-cartpeople110 screen">
        <div className="flex-col-65">
          <Link to="/hanam-details-menu1">
            <img className="group-52-20" src={group52} />
          </Link>
          <img className="line-1-20" src={line1} />
          <img className="dinner-table-1-10" src={dinnerTable1} />
          <div className="do-you-want-to-reser-10 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-72 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-10">{weAre}</div>
          <div className="group-13-8">
            <Group11 src={group111Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} link="shopping-cartpeople120"/>
          </div>
          <div className="people-10">{people}</div>
        </div>
        <Group255 lessThan5={group255Props.lessThan5} link="shopping-cartpeople12"/>
        <img className="line-7-11" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople111;
