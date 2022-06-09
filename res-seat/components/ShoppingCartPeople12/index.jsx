import React from "react";
import { Link } from "react-router-dom";
import Group250 from "../Group250";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople12.css";

function ShoppingCartPeople12(props) {
  const { group52, line1, dinnerTable1, doYouWantToReser, line7, group250Props } = props;

  return (
    <div className="shopping-cartpeople1 screen">
      <Link to="/uncle-s-details-menu1">
        <img className="group-52-4" src={group52} />
      </Link>
      <img className="line-1-10" src={line1} />
      <img className="dinner-table-1-1" src={dinnerTable1} />
      <div className="do-you-want-to-reser-1 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
      <Group250
        number={group250Props.number}
        group111Props={group250Props.group111Props}
        group111Props2={group250Props.group111Props2}
        group112Props={group250Props.group112Props}
        right="shopping-cartpeople17"
        link="shopping-cartpeople15"
      />
      <img className="line-7-2" src={line7} />
      <Group2822 />
    </div>
  );
}

export default ShoppingCartPeople12;
