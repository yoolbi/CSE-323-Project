import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime54.css";

function ShoppingCartHomeSelectTime54(props) {
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
    x30400Won,
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
    lessThan1,
    completePreOrder,
    component1321Props,
    component1322Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime53 screen">
        <div className="flex-col-269">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-4">
              <img className="arrow-back-7" src={arrowBack} />
              <div className="menu-19 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-59" src={line1} />
          <div className="shopping-cart-8 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-65" src={line2} />
          <div className="group-188">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-139">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-1" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-37">
                  <img className="outline-102" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-7 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-229 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-6">{total}</div>
              <div className="x30400-won">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-15" src={line5} />
        </div>
        <div className="flex-row-230 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-46">{weAre}</div>
          <div className="group-13-32">
            <Link to="/shopping-carthomeselecttime56">
              <div className="group-7-116">
                <img className="outline-102" src={outline_Remove_Black_24Dp1} />
              </div>
            </Link>
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime55">
              <div className="group-8-146">
                <img className="outline-102" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-46">{people}</div>
        </div>
        <div className="flex-row-231">
          <div className="well-be-in-46 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-77">
            <div className="overlap-group4-106 border-1px-flamingo">
              <div className="group-14-16 border-1px-flamingo"></div>
            </div>
            <div className="mins-46 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-52" src={line6} />
            <Link to="/shopping-carthomeselecttime3">
              <img className="arrow-drop-down-46" src={arrowDropDown} />
            </Link>
            <div className="select-22 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-4 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <div className="group-28-41">
          <div className="overlap-group-582">
            <div className="complete-pre-order-6 applesdgothicneob00-regular-normal-flamingo-23px">
              {completePreOrder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime54;
