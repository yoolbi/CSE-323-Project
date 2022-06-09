import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople132.css";

function ShoppingCartPeople132(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Add_Black_24Dp1,
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
    group11Props,
    group10Props,
    group252Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople131 screen">
        <div className="flex-col-96">
          <Link to="/uncle-s-details-menu1">
            <img className="group-52-42" src={group52} />
          </Link>
          <img className="line-1-41" src={line1} />
          <img className="dinner-table-1-31" src={dinnerTable1} />
          <div className="do-you-want-to-reser-31 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-101 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-31">{weAre}</div>
          <div className="group-14-4">
            <Group11 src={group11Props.src} className={group11Props.className} link="shopping-cartpeople116"/>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople138">
              <div className="group-8-67">
                <img className="outline_add_black_24dp-1-39" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-31">{people}</div>
        </div>
        <div className="overlap-group2-130">
          <img className="line-7-40" src={line7} />
          <div className="group-259-1">
            <div className="well-be-in-37 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
            <div className="overlap-group1-202">
              <div className="group-11-26 border-1px-flamingo"></div>
              <div className="mins-37 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
              <img className="line-6-43" src={line6} />
              <img className="arrow-drop-down-37" src={arrowDropDown} />
              <div className="select-13 inter-extra-bold-black-15px">{select}</div>
              <div className="overlap-group-355 inter-extra-bold-black-15px">
                <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
                <Link to="/shopping-cartpeople135">
                <div className="less-than-5-13">{lessThan5}</div>
                </Link>
                <Link to="/shopping-cartpeople137">
                <div className="less-than-10-13">{lessThan10}</div>
                </Link>
                <Link to="/shopping-cartpeople136">
                <div className="less-than-15-13">{lessThan15}</div>
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

export default ShoppingCartPeople132;
