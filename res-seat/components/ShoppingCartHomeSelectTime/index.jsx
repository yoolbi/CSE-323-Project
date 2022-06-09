import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import Group11 from "../Group11";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime.css";

function ShoppingCartHomeSelectTime(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    outline_Add_Black_24Dp1,
    addMoreMenu,
    total,
    x15200Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
    people,
    completePreOrder,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan1,
    lessThan5,
    lessThan10,
    lessThan15,
    wellBeIn,
    component132Props,
    group10Props,
    group11Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-cart-home-selecttime-11 screen">
        <div className="flex-col-180">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-1">
              <img className="arrow-back-2" src={arrowBack} />
              <div className="menu-14 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-54" src={line1} />
          <div className="shopping-cart-3 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-58" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-8">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-31">
                <img className="outline-97" src={outline_Add_Black_24Dp1} />
              </div>
            </Link>
            <div className="add-more-menu-2 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-174 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-1">{total}</div>
            <div className="x15200-won-28">{x15200Won}</div>
          </div>
          <img className="line-5-10" src={line5} />
        </div>
        <div className="flex-row-175 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-41">{weAre}</div>
          <div className="group-13-27">
            <Link to="/shopping-carthomeselecttime2">
              <div className="group-7-111">
                <img className="outline-97" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Group11 src={group11Props.src} className={group11Props.className} />
          </div>
          <div className="people-41">{people}</div>
        </div>
        <div className="overlap-group4-99">
          <div className="overlap-group3-133">
            <div className="overlap-group-532">
              <div className="complete-pre-order-1 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-32 border-1px-flamingo"></div>
            <div className="mins-41 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-47" src={line6} />
            <img className="arrow-drop-down-41" src={arrowDropDown} />
            <div className="select-17 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group2-174">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime52">
                <div className="less-than-1-1 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime52">
                <div className="less-than-5-16 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime104">
                <div className="less-than-10-16 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime106">
                <div className="less-than-15-16 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-41 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime;
