import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group255 from "../Group255";
import Group28 from "../Group28";
import "./ShoppingCartPeople119.css";

function ShoppingCartPeople119(props) {
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
      <div className="shopping-cartpeople118 screen">
        <div className="flex-col-82">
          <Link to="/hanam-details-menu1">
            <img className="group-52-29" src={group52} />
          </Link>
          <img className="line-1-28" src={line1} />
          <img className="dinner-table-1-18" src={dinnerTable1} />
          <div className="do-you-want-to-reser-18 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-86 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-18">{weAre}</div>
          <div className="group-13-20">
            <Group11 src={group11Props.src} className={group11Props.className} link="shopping-cartpeople18"/>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople132">
              <div className="group-8-60">
                <img className="outline_add_black_24dp-1-32" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-18">{people}</div>
        </div>
        <Group255 lessThan5={group255Props.lessThan5} link="shopping-cartpeople111" />
        <img className="line-7-27" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople119;
