import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1018.css";

function ShoppingCartHomeSelectTime1018(props) {
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
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan15,
    completePreOrder,
    component132Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1017 screen">
        <div className="flex-col-300">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-18">
              <img className="arrow-back-34" src={arrowBack} />
              <div className="menu-46 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-86" src={line1} />
          <div className="shopping-cart-35 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-107" src={line2} />
          <Component132
            image8={component132Props.image8}
            pumkinSoup={component132Props.pumkinSoup}
            x15200Won={component132Props.x15200Won}
          />
          <div className="group-12-29">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-70">
                <img className="outline_add_black_24dp-1-49" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-34 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-320 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-33">{total}</div>
            <div className="x15200-won-89">{x15200Won}</div>
          </div>
          <img className="line-5-42" src={line5} />
        </div>
        <div className="flex-row-321 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-73">{weAre}</div>
          <div className="group-13-59">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime109">
              <div className="group-8-163">
                <img className="outline_add_black_24dp-1-49" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-73">{people}</div>
        </div>
        <div className="flex-row-322">
          <div className="well-be-in-73 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group3-171">
            <div className="overlap-group2-214 border-1px-flamingo">
              <div className="group-14-37 border-1px-flamingo"></div>
            </div>
            <div className="mins-73 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-79" src={line6} />
            <img className="arrow-drop-down-73" src={arrowDropDown} />
            <div className="select-49 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime9">
              <div className="less-than-15-30 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <div className="group-28-63">
          <div className="overlap-group-624">
            <div className="complete-pre-order-33 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1018;
