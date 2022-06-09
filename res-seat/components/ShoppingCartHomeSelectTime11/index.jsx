import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import Group252 from "../Group252";
import "./ShoppingCartHomeSelectTime11.css";

function ShoppingCartHomeSelectTime11(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    outline_Add_Black_24Dp11,
    addMoreMenu,
    total,
    x15200Won,
    line5,
    weAre,
    outline_Add_Black_24Dp12,
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
    group11Props,
    group10Props,
    group252Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime9 screen">
        <div className="flex-col-326">
          <Link to="/restaurant-details-menu1">
            <div className="group-53-9">
              <img className="arrow-back-47" src={arrowBack} />
              <div className="menu-59 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-99" src={line1} />
          <div className="shopping-cart-48 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-126" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-37">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-89">
                <img className="outline_add_black_24dp-1-53" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-47 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-366 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-46">{total}</div>
            <div className="x15200-won-231">{x15200Won}</div>
          </div>
          <img className="line-5-55" src={line5} />
        </div>
        <div className="flex-row-367 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-86">{weAre}</div>
          <div className="group-13-72">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime6">
              <div className="group-8-174">
                <img className="outline_add_black_24dp-1-53" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-86">{people}</div>
        </div>
        <div className="overlap-group4-149">
          <div className="overlap-group3-183">
            <div className="overlap-group-670">
              <div className="complete-pre-order-46 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
            <div className="group-11-90 border-1px-flamingo"></div>
            <div className="mins-86 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-92" src={line6} />
            <img className="arrow-drop-down-86" src={arrowDropDown} />
            <div className="select-62 inter-extra-bold-black-15px">{select}</div>
            <div className="overlap-group2-248">
              <Group252
                line6={group252Props.line6}
                line7={group252Props.line7}
                line8={group252Props.line8}
                className={group252Props.className}
              />
              <Link to="/shopping-carthomeselecttime58">
                <div className="less-than-1-19 inter-extra-bold-black-15px">{lessThan1}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime58">
                <div className="less-than-5-24 inter-extra-bold-black-15px">{lessThan5}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1016">
                <div className="less-than-10-35 inter-extra-bold-black-15px">{lessThan10}</div>
              </Link>
              <Link to="/shopping-carthomeselecttime1017">
                <div className="less-than-15-35 inter-extra-bold-black-15px">{lessThan15}</div>
              </Link>
            </div>
          </div>
          <div className="well-be-in-86 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime11;
