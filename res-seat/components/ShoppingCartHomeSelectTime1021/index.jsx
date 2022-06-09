import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime1021.css";

function ShoppingCartHomeSelectTime1021(props) {
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
    outline_Add_Black_24Dp12,
    people,
    wellBeIn,
    mins,
    line6,
    arrowDropDown,
    select,
    lessThan10,
    completePreOrder,
    component1321Props,
    component1322Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime1020 screen">
        <div className="flex-col-317">
          <Link to="/restaurant-details-menu1">
            <div className="group-55-21">
              <img className="arrow-back-45" src={arrowBack} />
              <div className="menu-57 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-97" src={line1} />
          <div className="shopping-cart-46 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-124" src={line2} />
          <div className="group-180">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-180">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-48" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-14">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-87">
                  <img className="outline_add_black_24dp-1-51" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-45 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-359 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-44">{total}</div>
              <div className="x30400-won-14">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-53" src={line5} />
        </div>
        <div className="flex-row-360 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-84">{weAre}</div>
          <div className="group-13-70">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime1014">
              <div className="group-8-172">
                <img className="outline_add_black_24dp-1-51" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-84">{people}</div>
        </div>
        <div className="flex-row-361">
          <div className="well-be-in-84 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-108">
            <div className="overlap-group4-146 border-1px-flamingo">
              <div className="group-14-42 border-1px-flamingo"></div>
            </div>
            <div className="mins-84 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-90" src={line6} />
            <Link to="/shopping-carthomeselecttime12">
              <img className="arrow-drop-down-84" src={arrowDropDown} />
            </Link>
            <div className="select-60 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-10-34 inter-extra-bold-black-15px">{lessThan10}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome8">
          <div className="group-28-72">
            <div className="overlap-group-643">
              <div className="complete-pre-order-44 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime1021;
