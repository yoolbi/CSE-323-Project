import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople125.css";

function ShoppingCartPeople125(props) {
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
      <div className="shopping-cartpeople124 screen">
        <div className="flex-col-88">
          <Link to="/hanam-details-menu1">
            <img className="group-52-35" src={group52} />
          </Link>
          <img className="line-1-34" src={line1} />
          <img className="dinner-table-1-24" src={dinnerTable1} />
          <div className="do-you-want-to-reser-24 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-92 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-24">{weAre}</div>
          <div className="group-14-3">
            <Group11 src={group11Props.src} className={group11Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople134">
              <div className="group-8-63">
                <img className="outline_add_black_24dp-1-35" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-24">{people}</div>
        </div>
        <div className="overlap-group2-128">
          <img className="line-7-33" src={line7} />
          <div className="group-259">
            <div className="well-be-in-36 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
            <div className="overlap-group1-199">
              <div className="group-11-25 border-1px-flamingo"></div>
              <div className="mins-36 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
              <img className="line-6-42" src={line6} />
              <img className="arrow-drop-down-36" src={arrowDropDown} />
              <div className="select-12 inter-extra-bold-black-15px">{select}</div>
              <div className="overlap-group-351 inter-extra-bold-black-15px">
                <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
                <Link to = "/shopping-cartpeople139">
                <div className="less-than-5-12" style={{color:"black"}}>{lessThan5}</div>
                </Link>
                <Link to = "/shopping-cartpeople133">
                  <div className="less-than-10-12" style={{color:"black"}}>{lessThan10}</div>
                </Link>
                <Link to = "/shopping-cartpeople132">
                <div className="less-than-15-12" style={{color:"black"}}>{lessThan15}</div>
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

export default ShoppingCartPeople125;
