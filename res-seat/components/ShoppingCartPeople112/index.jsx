import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople112.css";

function ShoppingCartPeople112(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    weAre,
    outline_Add_Black_24Dp1,
    people,
    line7,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    group11Props,
    group10Props,
    group252Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople111 screen">
        <div className="flex-col-66">
          <Link to="/hanam-details-menu1">
            <img className="group-52-21" src={group52} />
          </Link>
          <img className="line-1-21" src={line1} />
          <img className="dinner-table-1-11" src={dinnerTable1} />
          <div className="do-you-want-to-reser-11 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-73 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-11">{weAre}</div>
          <div className="group-13-15">
            <Group11 src={group11Props.src} className={group11Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-cartpeople124">
              <div className="group-8-56">
                <img className="outline_add_black_24dp-1-29" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
          </div>
          <div className="people-11">{people}</div>
        </div>
        <div className="overlap-group3-99">
          <div className="overlap-group2-117">
            <img className="line-7-18" src={line7} />
            <div className="group-11-21 border-1px-flamingo"></div>
            <div className="mins-30 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-38" src={line6} />
            <img className="arrow-drop-down-30" src={arrowDropDown} />
            <div className="select-8 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group1-177 inter-extra-bold-black-15px">
              <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
              <Link to ="/shopping-cartpeople120">
              <div className="less-than-5-10" style={{color:"black"}}>{lessThan5}</div>
              </Link>
              <Link to ="/shopping-cartpeople119">
              <div className="less-than-10-9"  style={{color:"black"}}>{lessThan10}</div>
              </Link>
              <Link to ="/shopping-cartpeople118">
              <div className="less-than-15-9"  style={{color:"black"}}>{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-30 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
        <Group2822 className={group2822Props.className} />
      </div>
    </div>
  );
}

export default ShoppingCartPeople112;
