import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1014.css";

function ShoppingCartHomeSelectTime1014(props) {
  const {
    arrowBack,
    menu,
    line1,
    shoppingCart,
    line2,
    loadedBakedPotatoSoupRecipe34,
    outline_Add_Black_24Dp11,
    addMoreMenu,
    total,
    x15200Won,
    line5,
    weAre,
    outline_Remove_Black_24Dp1,
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
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1013 screen">
        <div className="flex-col-293">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-14">
              <img className="arrow-back-28" src={arrowBack} />
              <div className="menu-40 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-80" src={line1} />
          <div className="shopping-cart-29 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-99" src={line2} />
          <div className="overlap-group2-209">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-37" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-25">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-63">
                <img className="outline-123" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-28 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-301 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-27">{total}</div>
            <div className="x15200-won-85">{x15200Won}</div>
          </div>
          <img className="line-5-36" src={line5} />
        </div>
        <div className="flex-row-302 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-67">{weAre}</div>
          <div className="group-13-53">
            <Link to="/shopping-carthomeselecttime1019">
              <div className="group-7-137">
                <img className="outline-123" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime105">
              <div className="group-8-157">
                <img className="outline-123" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-67">{people}</div>
        </div>
        <div className="flex-row-303">
          <div className="well-be-in-67 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-129">
            <div className="overlap-group3-164 border-1px-flamingo">
              <div className="group-14-32 border-1px-flamingo"></div>
            </div>
            <div className="mins-67 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-73" src={line6} />
            <img className="arrow-drop-down-67" src={arrowDropDown} />
            <div className="select-43 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime7">
              <div className="less-than-15-27 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderhome9">
          <div className="group-28-58">
            <div className="overlap-group-616">
              <div className="complete-pre-order-27 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1014;
