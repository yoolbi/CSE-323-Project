import React from "react";
import { Link } from "react-router-dom";
import Group250 from "../Group250";
import Group252 from "../Group252";
import Group2822 from "../Group2822";
import "./ShoppingCartPeople13.css";

function ShoppingCartPeople13(props) {
  const {
    group52,
    line1,
    dinnerTable1,
    doYouWantToReser,
    line7,
    lessThan5,
    lessThan10,
    lessThan15,
    group250Props,
    group252Props,
    group2822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cartpeople12 screen">
        <Link to="/hanam-details-menu1" className="align-self-flex-start">
          <img className="group-52-9" src={group52} />
        </Link>
        <img className="line-1-12" src={line1} />
        <img className="dinner-table-1-2" src={dinnerTable1} />
        <div className="do-you-want-to-reser-2 applesdgothicneob00-regular-normal-black-36px">{doYouWantToReser}</div>
        <div className="overlap-group3-90">
          <img className="line-7-3" src={line7} />
          <Group250
            number={group250Props.number}
            className={group250Props.className}
            group111Props={group250Props.group111Props}
            group111Props2={group250Props.group111Props2}
            group112Props={group250Props.group112Props}
          />
          <div className="overlap-group2-91 inter-extra-bold-black-15px">
            <Group252 line6={group252Props.line6} line7={group252Props.line7} line8={group252Props.line8} />
            <Link to = "/shopping-cartpeople110">
              <div className="less-than-5" style={{color:"black"}}>{lessThan5}</div>
            </Link>
            <Link to = "/shopping-cartpeople19">
            <div className="less-than-10" style={{color:"black"}}>{lessThan10}</div>
            </Link>
            <Link to = "/shopping-cartpeople18">
            <div className="less-than-15" style={{color:"black"}}>{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Group2822 className={group2822Props.className} />
      </div>
    </div>
  );
}

export default ShoppingCartPeople13;
