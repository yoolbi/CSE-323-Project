import React from "react";
import { Link,useHistory } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group28 from "../Group28";
import Group255 from "../Group255";
import "./ShoppingCartPeople19.css";

function ShoppingCartPeople19(props) {
  let history = useHistory()
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    lessThan15,
    line7,
    group111Props,
    group10Props,
    group112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople18 screen">
        <div className="flex-col-63">
          <Link to="/hanam-details-menu1">
            <img className="group-52-18" src={group52} />
          </Link>
          <img className="line-1-18" src={line1} />
          <img className="dinner-table-1-8" src={dinnerTable1} />
          <div className="do-you-want-to-reser-8 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
        </div>
        <div className="flex-row-68 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-8">{weAre}</div>
          <div className="group-13-6">
            <Group11 src={group111Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} link="shopping-cartpeople118"/>
          </div>
          <div className="people-8">{people}</div>
        </div>
        {/* <div className="flex-row-69">
          <div className="well-be-in-8 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-155">
            <div className="group-11-11 border-1px-flamingo"></div>
            <div className="mins-8 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-28" src={line6} />
            <img className="arrow-drop-down-8" src={arrowDropDown} onClick={ () => {
              history.goBack();
            } }/>
            <div className="less-than-15-2 inter-extra-bold-black-15px">{lessThan15}</div>
          </div>
        </div> */}
        <Group255 lessThan5="less than 15" link="shopping-cartpeople12" />
        <img className="line-7-9" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople19;
