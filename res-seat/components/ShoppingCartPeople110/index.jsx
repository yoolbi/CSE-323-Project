import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group28 from "../Group28";
import Group255 from "../Group255";
import "./ShoppingCartPeople110.css";
import { useHistory } from 'react-router-dom';

function ShoppingCartPeople110(props) {
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
    lessThan10,
    line7,
    group111Props,
    group10Props,
    group112Props,
  } = props;
  let history = useHistory();
  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople19 screen">
        <div className="flex-col-64">
          <Link to="/hanam-details-menu1">
            <img className="group-52-19" src={group52} />
          </Link>
          <img className="line-1-19" src={line1} />
          <img className="dinner-table-1-9" src={dinnerTable1} />
          <div className="do-you-want-to-reser-9 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
        </div>
        <div className="flex-row-70 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-9">{weAre}</div>
          <div className="group-13-7">
            <Group11 src={group111Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} link="shopping-cartpeople119"/>
          </div>
          <div className="people-9">{people}</div>
        </div>
        {/* <div className="flex-row-71">
          <div className="well-be-in-9 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group1-156">
            <div className="group-11-12 border-1px-flamingo"></div>
            <div className="mins-9 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-29" src={line6} />
            <img className="arrow-drop-down-9" src={arrowDropDown} onClick={ () => {history.goBack();} } />
            <div className="less-than-10-2 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div> */}
        <Group255 lessThan5="less than 10" link="shopping-cartpeople12" />
        <img className="line-7-10" src={line7} />
        <Group28 />
      </div>
    </div>
  );
}

export default ShoppingCartPeople110;
