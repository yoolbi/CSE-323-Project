import React from "react";
import { Link } from "react-router-dom";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople135.css";
import { useHistory } from 'react-router-dom';

function ShoppingCartPeople135(props) {
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
  let history = useHistory();
  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople134 screen">
        <div className="flex-col-100">
          <Link to="/hanam-details-menu1">
            <img className="group-52-45" src={group52} />
          </Link>
          <img className="line-1-44" src={line1} />
          <img className="dinner-table-1-34" src={dinnerTable1} />
          <div className="do-you-want-to-reser-34 applesdgothicneob00-regular-normal-black-36px">
            {doYouWantToReser}
          </div>
        </div>
        <div className="flex-row-106 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-34">{weAre}</div>
          <div className="group-16-9">
            <Group11 src={group111Props.src} className={group111Props.className} />
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group112Props.src} className={group112Props.className} />
          </div>
          <div className="people-34">{people}</div>
        </div>
        <div className="overlap-group2-132">
          <img className="line-7-43" src={line7} />
          <div className="group-259-2">
            <div className="well-be-in-38 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
            <div className="overlap-group1-205">
              <div className="group-11-27 border-1px-flamingo"></div>
              <div className="mins-38 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
              <img className="line-6-44" src={line6} />
              <img className="arrow-drop-down-38" src={arrowDropDown} onClick={() =>{history.goBack();}}/>
              <div className="select-14 inter-extra-bold-black-15px">{select}</div>
              <div className="overlap-group-359 inter-extra-bold-black-15px">
                <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
                <Link to = "/shopping-cartpeople123" style={{ textDecoration: 'none', color:"black" }}>
                  <div className="less-than-5-14">{lessThan5}</div>
                </Link>
                <Link to = "/shopping-cartpeople122"  style={{ textDecoration: 'none', color:"black" }}>
                 <div className="less-than-10-14">{lessThan10}</div>
                </Link>
                <Link to = "/shopping-cartpeople121"  style={{ textDecoration: 'none', color:"black" }}>
                  <div className="less-than-15-14">{lessThan15}</div>
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

export default ShoppingCartPeople135;
