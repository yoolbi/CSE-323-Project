import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople139.css";

function ShoppingCartPeople139(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    people,
    line7,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan5,
    lessThan10,
    lessThan15,
    group111Props,
    group10Props,
    group112Props,
    group252Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople138 screen">
        <div className="flex-col-106">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-49" src={group52} />
          </Link>
          <img className="line-1-49" src={line1} />
          <img className="dinner-table-1-38" src={dinnerTable1} />
          <div className="do-you-want-to-reser-38 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-122 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-38">{weAre}</div>
          <div className="group-16-10">
            <Group11 src={group111Props.src} className={group111Props.className} link="shopping-cartpeople131" />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-38">{people}</div>
        </div>
        <div className="overlap-group2-144">
          <img className="line-7-47" src={line7} />
          <div className="group-259-3">
            <div className="well-be-in-39 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
            <div className="overlap-group1-218">
              <div className="group-11-28 border-1px-flamingo"></div>
              <div className="mins-39 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
              <img className="line-6-45" src={line6} />
              <img className="arrow-drop-down-39" src={arrowDropDown} />
              <div className="select-15 inter-extra-bold-black-15px">{select}</div>
              <div className="overlap-group-374 inter-extra-bold-black-15px">
                <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
                <Link to="/shopping-cartpeople130">
                <div className="less-than-5-15">{lessThan5}</div>
                </Link>
                <Link to="/shopping-cartpeople129">
                <div className="less-than-10-15">{lessThan10}</div>
                </Link>
                <Link to="/shopping-cartpeople128">
                <div className="less-than-15-15">{lessThan15}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Group2822 className={group2822Props.className} />
      </div>
    </div>
  );
}

export default ShoppingCartPeople139;
