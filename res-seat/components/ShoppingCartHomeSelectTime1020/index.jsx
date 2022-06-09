import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1020.css";

function ShoppingCartHomeSelectTime1020(props) {
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
      <div className="shopping-carthomeselecttime1019 screen">
        <div className="flex-col-316">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-20">
              <img className="arrow-back-44" src={arrowBack} />
              <div className="menu-56 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-96" src={line1} />
          <div className="shopping-cart-45 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-123" src={line2} />
          <div className="overlap-group2-226">
            <Component132
              image8={component132Props.image8}
              pumkinSoup={component132Props.pumkinSoup}
              x15200Won={component132Props.x15200Won}
              className={component132Props.className}
            />
            <img className="loaded-baked-potato-soup-recipe-3-4-47" src={loadedBakedPotatoSoupRecipe34} />
          </div>
          <div className="group-12-36">
            <Link to="/restaurant-details-menu1">
              <div className="group-11-86">
                <img className="outline-137" src={outline_Add_Black_24Dp11} />
              </div>
            </Link>
            <div className="add-more-menu-44 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
          </div>
          <div className="flex-row-356 applesdgothicneob00-regular-normal-black-28px">
            <div className="total-43">{total}</div>
            <div className="x15200-won-98">{x15200Won}</div>
          </div>
          <img className="line-5-52" src={line5} />
        </div>
        <div className="flex-row-357 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-83">{weAre}</div>
          <div className="group-13-69">
            <Link to="/shopping-carthomeselecttime1023">
              <div className="group-7-151">
                <img className="outline-137" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1013">
              <div className="group-8-171">
                <img className="outline-137" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-83">{people}</div>
        </div>
        <div className="flex-row-358">
          <div className="well-be-in-83 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group4-145">
            <div className="overlap-group3-179 border-1px-flamingo">
              <div className="group-14-41 border-1px-flamingo"></div>
            </div>
            <div className="mins-83 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-89" src={line6} />
            <img className="arrow-drop-down-83" src={arrowDropDown} />
            <div className="select-59 inter-extra-bold-black-15px">{select}</div>
            <Link to="/shopping-carthomeselecttime11">
              <div className="less-than-15-33 inter-extra-bold-black-15px">{lessThan15}</div>
            </Link>
          </div>
        </div>
        <Link to="/completedpreorderhome10">
          <div className="group-28-71">
            <div className="overlap-group-642">
              <div className="complete-pre-order-43 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1020;
