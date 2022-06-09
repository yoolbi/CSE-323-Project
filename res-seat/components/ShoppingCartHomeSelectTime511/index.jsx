import React from "react";
import { Link } from "react-router-dom";
import Component132 from "../Component132";
import Group11 from "../Group11";
import Group10 from "../Group10";
import "./ShoppingCartHomeSelectTime511.css";

function ShoppingCartHomeSelectTime511(props) {
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
    lessThan1,
    completePreOrder,
    component1321Props,
    component1322Props,
    group11Props,
    group10Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-carthomeselecttime510 screen">
        <div className="flex-col-313">
          <Link to="/restaurant-details-menu1">
            <div className="group-54-11">
              <img className="arrow-back-42" src={arrowBack} />
              <div className="menu-54 applesdgothicneob00-regular-normal-black-23px">{menu}</div>
            </div>
          </Link>
          <img className="line-1-94" src={line1} />
          <div className="shopping-cart-43 applesdgothicneob00-regular-normal-black-32px">{shoppingCart}</div>
          <img className="line-2-120" src={line2} />
          <div className="group-178">
            <Component132
              image8={component1321Props.image8}
              pumkinSoup={component1321Props.pumkinSoup}
              x15200Won={component1321Props.x15200Won}
              className={component1321Props.className}
            />
            <div className="overlap-group3-176">
              <Component132
                image8={component1322Props.image8}
                pumkinSoup={component1322Props.pumkinSoup}
                x15200Won={component1322Props.x15200Won}
                className={component1322Props.className}
              />
              <img className="loaded-baked-potato-soup-recipe-3-4-45" src={loadedBakedPotatoSoupRecipe34} />
            </div>
            <div className="group-115-13">
              <Link to="/restaurant-details-menu1">
                <div className="group-11-84">
                  <img className="outline_add_black_24dp-1-50" src={outline_Add_Black_24Dp11} />
                </div>
              </Link>
              <div className="add-more-menu-42 applesdgothicneob00-regular-normal-black-18px">{addMoreMenu}</div>
            </div>
            <div className="flex-row-349 applesdgothicneob00-regular-normal-black-28px">
              <div className="total-41">{total}</div>
              <div className="x30400-won-13">{x30400Won}</div>
            </div>
          </div>
          <img className="line-5-50" src={line5} />
        </div>
        <div className="flex-row-350 applesdgothicneob00-regular-normal-black-25px">
          <div className="we-are-81">{weAre}</div>
          <div className="group-13-67">
            <Group11 src={group11Props.src} />
            <Group10>{group10Props.children}</Group10>
            <Link to="/shopping-carthomeselecttime56">
              <div className="group-8-169">
                <img className="outline_add_black_24dp-1-50" src={outline_Add_Black_24Dp12} />
              </div>
            </Link>
          </div>
          <div className="people-81">{people}</div>
        </div>
        <div className="flex-row-351">
          <div className="well-be-in-81 applesdgothicneob00-regular-normal-black-25px">{wellBeIn}</div>
          <div className="overlap-group5-107">
            <div className="overlap-group4-142 border-1px-flamingo">
              <div className="group-14-39 border-1px-flamingo"></div>
            </div>
            <div className="mins-81 applesdgothicneob00-regular-normal-black-25px">{mins}</div>
            <img className="line-6-87" src={line6} />
            <Link to="/shopping-carthomeselecttime12">
              <img className="arrow-drop-down-81" src={arrowDropDown} />
            </Link>
            <div className="select-57 inter-extra-bold-black-15px">{select}</div>
            <div className="less-than-1-18 inter-extra-bold-black-15px">{lessThan1}</div>
          </div>
        </div>
        <Link to="/completedpreorderhome8">
          <div className="group-28-69">
            <div className="overlap-group-639">
              <div className="complete-pre-order-41 applesdgothicneob00-regular-normal-flamingo-23px">
                {completePreOrder}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartHomeSelectTime511;
